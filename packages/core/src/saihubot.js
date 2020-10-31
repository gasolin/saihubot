'use strict';

const defaultAdapter = {
  // essential functions
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
  sendHTML: function(msg, role) {
    console.log('send html message');
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

/**
 * Default welcome message
 *
 * @param {String} botAlias
 * @return {String} Welcome message
 */
function defaultWelcomeMsgs(botAlias) {
  if (typeof window !== 'undefined') {
    const line = document.createElement('p');
    line.textContent = `${botAlias}: type something to chat with me`;
    return line;
  }
}

/**
 * SaihuBot main instance.
 *
 * @param {Object} config
 * @param {object} config.adapter - Saihubot platform specific adapter.
 * @param {object} config.brainConfig - brain related config.
 * @param {string} connfig.bot - bot prompt (default: bot)
 * @param {string[]} config.notFoundMessages - default not found messages
 * @param {boolean} config.saveChatLog - save chatlog or not (default: true),
 *  need coperate with `brain` in addon.
 * @param {string} config.user - user prompt (default: me)
 * @param {string} config.welcomeMessage - default welcome message (optional)
 *  messages (optional)
 * @param {object[]} config.addons - addons array
 * @param {Object[]} config.skills - skills array
 * @param {boolean} config.debug - show debug messages
 */
function SaihuBot(config) {
  // init setup
  this.myAlias = config.user || 'me';
  this.botAlias = config.bot || 'bot';
  this.ui = config.ui || {};
  this.DEBUG = config.debug || false;

  this.welcomeMessage = config.welcomeMessage ||
    defaultWelcomeMsgs(this.botAlias);
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
  responses: [],

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
    this.chatHistory = brainLog && (brainLog.length > 1) ?
      brainLog : this.welcomeMessage && [this.welcomeMessage] || [];
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

  processListeners: function(msg) {
    const len = this.chatHistory.length;
    this.responses.forEach((item) => {
      const matchedMsg = msg.match(item.rule);
      if (matchedMsg) {
        this.DEBUG && console.log(`skill matched! [${matchedMsg}]`);
        item.action(this, matchedMsg);
      }
    });

    if (len === this.chatHistory.length) {
      this.DEBUG && console.log('wildcard');
      this.catchAll(msg);
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
    this.responses.push(skill);
  },

  loadAddon: function(addon) {
    this.DEBUG && console.log('load addon ', addon.name);
    if (!addon || !addon.name || !addon.action ||
      typeof addon.action !== 'function') {
      console.log(`invalid addon ${addon.name}, please define name and action`);
    }
    this.addons[addon.name] = addon.action(this);
  },

  // public APIs
  send: function(msg, role) {
    this.adapter.send(msg, role);
  },

  ask: function(msg) {
    this.processListeners(msg);
  },

  render: function() {
    this.adapter.render();
  },
};

export default SaihuBot;
