'use strict';

var basicAdapter = {
  // essential functions
  run: function(robot) {
    this.robot = robot;
  },

  close: function() {
    console.log('close basic adapter');
  },

  // send text message
  send: function(msg, role) {
    var charactor = role ? role : this.robot.botAlias;
    var sendMsg = document.createElement('p');
    sendMsg.textContent = charactor + ': ' + msg;
    this.robot.chatHistory.push(sendMsg);
  },

  render: function() {
    console.log('render!');
    this.cleanUp();
    this.robot.chatHistory.forEach((element) => {
      this.robot.history.appendChild(element);
    });
  },

  // supportive functions

  // send html element with bot
  sendHTML: function(msg, role) {
    var sendMsg = document.createElement('p');
    var charactor = role ? role : this.robot.botAlias;
    sendMsg.textContent = charactor + ': ';
    sendMsg.appendChild(msg);
    this.robot.chatHistory.push(sendMsg);
  },

  cleanUp: function() {
    while (this.robot.history.firstChild) {
      this.robot.history.removeChild(this.robot.history.firstChild);
    }
    this.robot.message.value = '';
    this.robot.message.focus();
  },
}

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
  this.adapter = config.adapter || basicAdapter;

  this.run();
}

SaihuBot.prototype = {
  responses: [],

  catchAll: function(msg) {
    var msgLen = this.notFoundMessages.length;
    this.adapter.send(this.notFoundMessages[Math.floor(Math.random() * msgLen)]);
  },

  run: function() {
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

  // send text message via adapter
  send: function(msg, role) {
    this.adapter.send(msg, role);
  },

  render: function() {
    this.adapter.render();
  }
};
