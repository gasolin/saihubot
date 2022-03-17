'use strict';

// essential functions
const defaultAdapter = {
  name: 'default',
  run: function(robot) {
    console.log('go pick an adapter instead!');
    this.robot = robot;
  },
  close: function() {
    console.log('close dummy adapter');
  },
  send: function(msg, role) {
    console.log('send text message', msg);
  },
  sendComponent: function(element, role) {
    console.log('send element');
  },
  render: function() {
    console.log('render!');
  },
};

const defaultBrain = {
  name: 'default',
  run: function(robot, callback) {
    this.data = {
      _private: {},
    };
    callback();
  },
  close: function() {
    console.log('close default brain');
    this.save();
  },
  set: function(key, value) {
    let pair = {};
    if (key === Object(key)) {
      pair = key;
    } else {
      pair[key] = value;
    }
    // extend this.data._private
    Object.assign(this.data._private, pair);
    return this;
  },
  get: function(key) {
    return this.data._private[key] || null;
  },
  remove: function(key) {
    if (Object.prototype.hasOwnProperty.call(this.data._private, key)) {
      delete this.data._private[key];
    }
    return this;
  },
  save: function() {
    console.log('save', this.data);
  },
};

const DEFAULT_FALLBACK_MESSAGES = [
  'what do you say?',
  'Please make your order clear',
];

const DEFAULT_WELCOME_MESSAGES = 'type something to chat with me';
      
/**
 * SaihuBot main instance.
 *
 * @param {Object} config
 * @param {object} config.adapter - Saihubot platform specific adapter.
 * @param {object} config.brainConfig - brain related config.
 * @param {string} connfig.bot - bot prompt (default: bot)
 * , same as connfig.botAlias
 * @param {string} connfig.botAlias - bot prompt (default: bot)
 * @param {string[]} config.notFoundMessages - default not found messages
 * @param {boolean} config.saveChatLog - save chatlog or not (default: true),
 *  need coperate with `brain` in addon.
 * @param {string} config.user - user prompt (default: me)
 * , same as connfig.userAlias
 * @param {string} config.userAlias - user prompt (default: me)
 * @param {function} renderMessage - define how to render the message
 * @param {function} renderComponent - define how to render the html component
 * @param {string} config.welcomeMessage - default welcome message (optional)
 *  messages (optional)
 * @param {object[]} config.addons - addons array
 * @param {Object[]} config.skills - skills array
 * @param {boolean} config.debug - show debug messages
 */
function SaihuBot(config) {
  // init setup
  this.userAlias = config.user || config.userAlias || 'me';
  this.botAlias = config.bot || config.botAlias || 'bot';
  this.renderMessage = config.renderMessage || undefined;
  this.renderComponent = config.renderComponent || undefined;
  this.ui = config.ui || {};
  this.DEBUG = config.debug || false;

  this.welcomeMessage = config.welcomeMessage || DEFAULT_WELCOME_MESSAGES;
  this.notFoundMessages = config.notFoundMessages || DEFAULT_FALLBACK_MESSAGES;
  this.saveChatLog = config.saveChatLog || true;
  // provide run, close, send, render function by adapter
  this.brain = config.brain || defaultBrain;
  this.brainConfig = config.brainConfig;
  this.adapter = config.adapter || defaultAdapter;
  this.addons = {};

  // addons
  if (config.addons) {
    config.addons.forEach((addon) => this.loadAddon(addon));
  }

  // skills
  if (config.skills) {
    config.skills.forEach((skill) => this.loadSkill(skill));
  }

  this.run();
}

SaihuBot.prototype = {
  /** Host all support skills */
  responses: [],

  /**
   * render not found messages.
   *
   * @param {string} msg origin message
   */
  catchAll: function(msg) {
    const msgLen = this.notFoundMessages.length;
    this.adapter.send(
        this.notFoundMessages[Math.floor(Math.random() * msgLen)]);
  },

  run: function() {
    this.DEBUG && console.log(
        `run with ${this.brain.name} brain and ${this.adapter.name} adapter`);

    // running loop
    this.brain.run(this, this.restore.bind(this), this.brainConfig);

    // shutdown flow
    this.adapter.shutdownHook(this.shutdown.bind(this));
  },

  restore: function() {
    this.adapter.run(this);
    const brainLog = this.brain.get('chatLog');
    if (brainLog && brainLog.length > 1) {
      this.chatHistory = brainLog;
    } else {
      this.chatHistory = [];
      this.welcomeMessage && this.send(this.welcomeMessage, 'bot');
    }
    this.render();
  },

  saveChanges: function() {
    if (this.saveChatLog) {
      this.brain.set('chatLog', this.chatHistory).close();
    } else {
      this.brain.close();
    }
  },

  shutdown: function() {
    this.adapter.close();
    setTimeout(this.saveChanges.bind(this), 0);
  },

  /**
   * Check if input message matched with any skill.
   *
   * @param {string} msg message to process
   */
  processListeners: function(msg) {
    let matched = false;
    this.responses.forEach((item) => {
      const matchedMsg = msg.match(item.rule);
      if (matchedMsg) {
        this.DEBUG && console.log(`skill matched! [${matchedMsg}]`);
        matched = true;
        item.action(this, matchedMsg);
      }
    });

    if (!matched) {
      this.DEBUG && console.log('wildcard');
      this.catchAll(msg);
      this.render();
    }
    this.render();
  },

  loadSkill: function(skill) {
    this.DEBUG && console.log('load skill ', skill.name);
    if (!skill || !skill.name || !skill.rule || !skill.action ||
      typeof skill.action !== 'function') {
      console.log(`invalid skill ${skill.name}`);
      console.log(`please define name, rule and action`);
    }
    if (this.hasRightDependency(skill.requirements)) {
      this.responses.push(skill);
    } else {
      console.error(`${skill.name} skill require
        ${JSON.stringify(skill.requirements)}`);
    }
  },

  loadAddon: function(addon) {
    this.DEBUG && console.log('load addon ', addon.name);
    if (!addon || !addon.name || !addon.action ||
      typeof addon.action !== 'function') {
      console.error(`invalid addon ${addon.name},
        please define name and action`);
    }
    if (this.hasRightDependency(addon.requirements)) {
      this.addons[addon.name] = addon.action(this);
    } else {
      console.error(`${addon.name} addon requires
        ${JSON.stringify(addon.requirements.adapters)}`);
    }
  },

  // public APIs
  /**
   * Send text based message to bot.
   *
   * @param {string} msg input message
   * @param {string} role who send the message ('bot' or 'user')
   */
  send: function(msg, role) {
    this.adapter.send(msg, role);
  },

  /**
   * Send object based message to bot.
   * the object depends on adapter's implementation.
   *
   * @param {string} element input object
   * @param {string} role who send the message ('bot' or 'user')
   */
  sendComponent: function(element, role) {
    this.adapter.sendComponent(element, role);
  },

  /**
   * Send text based message to reuse other skill.
   * Will not show in chat history.
   *
   * @param {string} msg input message
   */
  ask: function(msg) {
    this.processListeners(msg);
  },

  /** Render result to screen. */
  render: function() {
    this.adapter.render();
  },

  /**
   * To validate requirements.
   *
   * @param {Object} requirements
   * @param {string[]} requirements.adapters - requirements definition
   * from adapters
   * @param {string[]} requirements.addons - requirements definition
   * from addons
   * @param {string[]} requirements.skills - requirements definition
   * from skills
   * @return {boolean} result - the requirements is valid or not
   */
  hasRightDependency: function(requirements) {
    if (typeof requirements !== 'object') {
      console.error('missed the requirements definition');
      return false;
    }
    const {adapters = [], addons = [], skills = []} = requirements;
    let validAdapters = true;
    let validAddons = true;
    let validSkills = true;
    if (adapters.length !== 0) {
      validAdapters = adapters.includes(this.adapter.name);
    }
    if (addons.length !== 0) {
      validAddons = addons.every((name) =>
        Object.keys(this.addons).includes(name));
    }
    if (skills.length !== 0) {
      validSkills = skills.every((name) =>
        this.responses.map((skill) => skill.name).includes(name));
    }
    const isValid = validAdapters && validAddons && validSkills;
    this.DEBUG && console.log(isValid ? 'valid' : 'invalid');
    return isValid;
  },
};

export default SaihuBot;
