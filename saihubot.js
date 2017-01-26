'use strict';

var dummyAdapter = {
  // essential functions
  name: 'dummy',
  run: function(robot) {
    console.log('go pick an adapter instead!');
    this.robot = robot;
  },
  close: function() {
    console.log('close dumb adapter');
  },
  send: function(msg, role) {
    console.log('send text message');
  },
  render: function() {
    console.log('render!');
  },
};

function SaihuBot(config) {
  this.myAlias = config.user || 'me';
  this.botAlias = config.bot || 'bot';
  this.messageHistoryElement = config.historyContainer || 'history';
  this.inputElement = config.inputElement || 'message';
  this.sendButtonElement = config.sendButtonElement || 'send';
  if (config.welcomeMessage) {
    this.welcomeMessage = config.welcomeMessage;
  } else {
    this.welcomeMessage = document.createElement('p');
    this.welcomeMessage.textContent = this.botAlias + ': type something to chat with me';
  }
  this.notFoundMessages = config.notFoundMessages || ['what do you say?', 'Please make your order clear'];
  // provide run, close, send, render function by adapter
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
    console.log('run with', this.adapter.name, 'adapter');
    this.adapter.run(this);
    this.chatHistory = [this.welcomeMessage];

    this.history = document.getElementById(this.messageHistoryElement);
    this.message = document.getElementById(this.inputElement);
    this.btn = document.getElementById(this.sendButtonElement);

    this.btn.addEventListener('click', this.onReceive.bind(this));
    this.message.addEventListener('keydown', this.onKeydown.bind(this));
    this.render();
  },

  shutdown: function() {
    this.adapter.close();
  },

  onKeydown: function(e) {
    if (e.keyCode == 13) { // enter
      this.onReceive();
    }
  },

  onReceive: function() {
    var receivedMsg = this.message.value;
    this.adapter.send(receivedMsg, this.myAlias);
    this.processListeners(receivedMsg);
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

  send: function(msg, role) {
    this.adapter.send(msg, role);
  },

  render: function() {
    this.adapter.render();
  }
};
