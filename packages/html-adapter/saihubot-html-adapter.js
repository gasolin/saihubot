'use strict';

const defaultRenderMessage = (msg, charactor, role) => {
  const sendMsg = document.createElement('p');
  sendMsg.textContent = charactor + ': ' + msg;
  return sendMsg;
};

const defaultRenderComponent = (element, charactor, role) => {
  const sendMsg = document.createElement('p');
  sendMsg.textContent = charactor + ': ';
  sendMsg.appendChild(element);
};

// eslint-disable-next-line no-unused-vars
const htmlAdapter = {
  // essential functions
  name: 'html',
  description: 'basic web',
  run: function(robot) {
    this.robot = robot;
    this.ui = robot.ui;

    this.messageHistoryElement = this.ui.historyContainer || 'history';
    this.inputElement = this.ui.inputElement || 'message';
    this.sendButtonElement = this.ui.sendButtonElement || 'send';

    this.history = document.getElementById(this.messageHistoryElement);
    this.message = document.getElementById(this.inputElement);
    this.btn = document.getElementById(this.sendButtonElement);

    this.onReceiveBound = this.onReceive.bind(this);
    this.btn.addEventListener('click', this.onReceiveBound);
    this.onKeydownBound = this.onKeydown.bind(this);
    this.message.addEventListener('keydown', this.onKeydownBound);

    this.customMsgParse = '';
  },

  shutdownHook: function(shutdown) {
    if (window) {
      window.addEventListener('beforeunload', shutdown);
    }
  },

  close: function() {
    this.robot.DEBUG && console.log('close basic adapter');
    if (this.btn) {
      this.btn.removeEventListener('click', this.onReceiveBound);
    }
    if (this.message) {
      this.message.removeEventListener('keydown', this.onKeydownBound);
    }
  },

  // send text message
  send: function(msg, role = 'bot') {
    const {
      chatHistory,
      botAlias,
      userAlias,
      renderMessage,
    } = this.robot;
    const charactor = role === 'bot' ? botAlias : userAlias;
    const messageElement = typeof renderMessage === 'function' ?
      renderMessage(msg, charactor, role) :
      defaultRenderMessage(msg, charactor, role);
    chatHistory.push(messageElement);
  },

  // send html element with bot
  sendComponent: function(element, role = 'bot') {
    const {
      botAlias,
      userAlias,
      chatHistory,
      renderComponent,
    } = this.robot;
    if (element instanceof HTMLElement) {
      const charactor = role === 'bot' ? botAlias : userAlias;
      const messageElement = typeof renderComponent === 'function' ?
        renderComponent(element, charactor, role) :
        defaultRenderComponent(element, charactor, role);
      chatHistory.push(messageElement);
    } else {
      console.log('>> The msg you provide is not an HTMLElement');
    }
  },

  render: function() {
    const {
      DEBUG,
      chatHistory,
    } = this.robot;
    DEBUG && console.log('render!');
    this.cleanUp();
    chatHistory.forEach((element) => {
      this.history.appendChild(element);
    });
    if (chatHistory.length > 1) {
      chatHistory[chatHistory.length - 1].scrollIntoView();
    }
  },

  // supportive functions
  cleanUp: function() {
    while (this.history.firstChild) {
      this.history.removeChild(this.history.firstChild);
    }
    this.message.value = '';
    this.message.focus();
  },

  onKeydown: function(e) {
    if (e.keyCode === 13) { // enter key
      this.onReceive();
    }
  },

  onReceive: function() {
    const receivedMsg = this.message.value;
    if (receivedMsg) {
      this.send(receivedMsg, 'user');
      if (typeof this.customMsgParse === 'function') {
        this.customMsgParse(receivedMsg);
      } else {
        this.robot.processListeners(receivedMsg);
      }
    }
  },

  resumeGlobalMsgParse: function() {
    this.customMsgParse = '';
  },

  // pending global parse and delegate the parsing effort to a Skill.
  // default timeout is 30 seconds
  delegateMsgParse: function(localParser, timeout = 30000) {
    if (timeout > 300000) {
      throw new Error('The skill should not take over MsgParse over 5 min');
    }
    // replace global parsing
    this.customMsgParse = localParser;
    this.pendingMsgParse = window.setTimeout(
        this.resumeGlobalMsgParse.bind(this), timeout);
  },

  // leave the pseudo session
  resumeMsgParse: function() {
    window.clearTimeout(this.pendingMsgParse);
    this.resumeGlobalMsgParse();
  },
};

export default htmlAdapter;
