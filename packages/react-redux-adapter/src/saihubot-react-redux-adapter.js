import { send } from './features/saihubot/saihubotSlice';

const defaultRenderMessage = (msg, charactor, role = 'bot') => ({
  charactor,
  msg,
  role,
});

const defaultRenderComponent = (element, charactor, role = 'bot') => {
  console.warn('not supported yet, fallback to send');
  return {
    charactor,
    msg: element,
    role,
  }
};

// eslint-disable-next-line no-unused-vars
const reduxAdapter = (dispatch) => ({
  // essential functions
  name: 'redux',
  description: 'redux adapter for react',
  run: function(robot) {
    this.robot = robot;
    this.ui = robot.ui;
    this.customMsgParse = '';

    this.inputElement = this.ui.inputElement || 'message';
    this.sendButtonElement = this.ui.sendButtonElement || 'send';

    this.message = document.getElementById(this.inputElement);
    this.btn = document.getElementById(this.sendButtonElement);

    this.onReceiveBound = this.onReceive.bind(this);
    this.btn.addEventListener('click', this.onReceiveBound);
    this.onKeydownBound = this.onKeydown.bind(this);
    this.message.addEventListener('keydown', this.onKeydownBound);
  },

  shutdownHook: function(shutdown) {
    // if (window) {
    //   window.addEventListener('beforeunload', shutdown);
    // }
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
      botAlias,
      userAlias,
      renderMessage,
    } = this.robot;
    const charactor = role === 'bot' ? botAlias : userAlias;
    const messageElement = typeof renderMessage === 'function' ?
      renderMessage(msg, charactor, role) :
      defaultRenderMessage(msg, charactor, role);
    dispatch(send(messageElement));
  },

  // send html element with bot
  sendComponent: function(element, role = 'bot') {
    console.warn('sendComponent is not supported yet');
  },

  render: function() {
    const {
      DEBUG,
    } = this.robot;
    DEBUG && console.log('render!');
    this.cleanUp();
  },

  // supportive functions
  cleanUp: function() {
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
});

export default reduxAdapter;
