'use strict';

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

  this.init();
}

SaihuBot.prototype = {
  responses: [],

  catchAll: function(msg) {
    var msgLen = this.notFoundMessages.length;
    this.send(this.notFoundMessages[Math.floor(Math.random() * msgLen)]);
  },

  init: function() {
    this.chatHistory = [this.welcomeMessage];

    this.history = document.getElementById(this.messageHistoryElement);
    this.message = document.getElementById(this.inputElement);
    this.btn = document.getElementById(this.sendButtonElement);

    this.btn.addEventListener('click', this.onReceive.bind(this));
    this.message.addEventListener('keydown', this.onKeydown.bind(this));
    this.render();
  },

  onKeydown: function(e) {
    if (e.keyCode == 13) { // enter
      this.onReceive();
    }
  },

  onReceive: function() {
    var receivedMsg = this.message.value;
    this.send(receivedMsg, this.myAlias);
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

  render: function() {
    console.log('render!');
    this.cleanUp();
    this.chatHistory.forEach((element) => {
      this.history.appendChild(element);
    });
  },

  cleanUp: function() {
    while (this.history.firstChild) {
      this.history.removeChild(this.history.firstChild);
    }
    this.message.value = '';
    this.message.focus();
  },

  // send text message
  send: function(msg, role) {
    var charactor = role ? role : this.botAlias;
    var sendMsg = document.createElement('p');
    sendMsg.textContent = charactor + ': ' + msg;
    this.chatHistory.push(sendMsg);
  },

  // send html element with bot
  sendHTML: function(msg, role) {
    var sendMsg = document.createElement('p');
    var charactor = role ? role : this.botAlias;
    sendMsg.textContent = charactor + ': ';
    sendMsg.appendChild(msg);
    this.chatHistory.push(sendMsg);
  }
};

// var saihubot = new SaihuBot({});
