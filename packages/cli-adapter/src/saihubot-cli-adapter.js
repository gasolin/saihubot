'use strict';
import React from 'react';
import {render} from 'ink';
import Markdown from 'ink-markdown';
import dedent from 'dedent';

const defaultRenderMessage = (msg, charactor, role) => (
  <Markdown>{dedent(msg)}</Markdown>
);

const defaultRenderComponent = (element, charactor, role) => element;

// Commandline adapter based on https://github.com/vadimdemedes/ink
const cliAdapter = (cli) => ({
  // essential functions
  name: 'cli',
  description: 'Command Line',
  run: function(robot) {
    this.robot = robot;
    this.ui = robot.ui;
    this.customMsgParse = '';
  },

  shutdownHook: function(shutdown) {
    this.DEBUG && console.log('shut down');
  },

  close: function() {
    console.log('close basic adapter');
  },

  // send text message
  send: function(msg, role) {
    const {
      botAlias,
      userAlias,
      chatHistory,
      renderMessage,
    } = this.robot;
    this.DEBUG && console.log('send ', msg);
    const charactor = role === 'bot' ? botAlias : userAlias;
    const messageElement = typeof renderMessage === 'function' ?
      renderMessage(msg, charactor, role) :
      defaultRenderMessage(msg, charactor, role);
    chatHistory.push(messageElement);
  },

  sendComponent: function(element, role = 'bot') {
    const {
      botAlias,
      userAlias,
      chatHistory,
      renderComponent,
    } = this.robot;
    const charactor = role === 'bot' ? botAlias : userAlias;
    const messageElement = typeof renderComponent === 'function' ?
      renderComponent(element, charactor, role) :
      defaultRenderComponent(element, charactor, role);
    chatHistory.push(messageElement);
  },

  render: function() {
    const {
      chatHistory,
    } = this.robot;
    this.DEBUG && console.log('render');
    if (chatHistory.length > 0) {
      render(chatHistory[chatHistory.length - 1]);
    }
  },
});

export default cliAdapter;
