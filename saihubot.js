'use strict';

var dummyAdapter = {
  // essential functions
  name: 'dummy',
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

var dummyBrain = {
  name: "dummy",
  run: function(robot, callback) {
    this.data = {
      _private: {},
    }
    callback();
  },
  close: function() {
    console.log('close dummy brain');
    this.save();
  },
  set: function(key, value) {
    var pair = {};
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
    if (this.data._private.hasOwnProperty(key)) {
      delete this.data._private[key];
    }
    return this;
  },
  save: function() {
    console.log('save', this.data);
  }
};

function SaihuBot(config) {
  this.myAlias = config.user || 'me';
  this.botAlias = config.bot || 'bot';
  this.ui = config.ui || {};

  if (config.welcomeMessage) {
    this.welcomeMessage = config.welcomeMessage;
  } else {
    this.welcomeMessage = document.createElement('p');
    this.welcomeMessage.textContent = this.botAlias + ': type something to chat with me';
  }
  this.notFoundMessages = config.notFoundMessages || ['what do you say?', 'Please make your order clear'];
  this.saveChatLog = config.saveChatLog || true;
  // provide run, close, send, render function by adapter
  this.brain = config.brain || dummyBrain;
  this.brainConfig = config.brainConfig;
  this.adapter = config.adapter || dummyAdapter;
  this.run();
}

SaihuBot.prototype = {
  responses: [],

  catchAll: function(msg) {
    var msgLen = this.notFoundMessages.length;
    this.adapter.send(this.notFoundMessages[Math.floor(Math.random() * msgLen)]);
  },

  run: function() {
    console.log('run with', this.brain.name, 'brain and', this.adapter.name, 'adapter');
    function restore() {
      this.adapter.run(this);
      let brainLog = this.brain.get('chatLog');
      this.chatHistory = brainLog && (brainLog.length > 1) ? brainLog : [this.welcomeMessage];
      this.render();
    }

    this.brain.run(this, restore.bind(this), this.brainConfig);

    if (window) {
      window.addEventListener('beforeunload', this.shutdown.bind(this));
    }
  },

  shutdown: function() {
    function saveChanges() {
      if (this.saveChatLog) {
        this.brain.set('chatLog', this.chatHistory).close();
      } else {
        this.brain.close();
      }
    }

    this.adapter.close();
    setTimeout(saveChanges.bind(this), 0);
  },

  processListeners: function(msg) {
    var len = this.chatHistory.length;
    this.responses.forEach((item) => {
      var matchedMsg = msg.match(item.rule);
      if (matchedMsg) {
        console.log('matched!');
        item.action(this, matchedMsg);
      }
    });

    if (len === this.chatHistory.length) {
      console.log('wildcard');
      this.catchAll(msg);
    }
    this.render();
  },

  // public APIs
  send: function(msg, role) {
    this.adapter.send(msg, role);
  },

  sendHTML: function(msg, role) {
    if (msg instanceof HTMLElement) {
      this.adapter.sendHTML(msg, role);
    } else {
      console.log('>> The msg you provide is not an HTMLElement');
    }
  },

  ask: function(msg) {
    this.processListeners(msg);
  },

  render: function() {
    this.adapter.render();
  }
};
