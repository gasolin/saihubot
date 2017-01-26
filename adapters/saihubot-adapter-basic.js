'use strict';

var basicAdapter = {
  // essential functions
  name: 'basic',
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
};
