'use strict';
import React from 'react';
import {render} from 'ink';
import Markdown from 'ink-markdown';
import dedent from 'dedent';

const Msg = ({message}) => (<Markdown>{dedent(message)}</Markdown>);

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
    const charactor = role || this.robot.botAlias;
    this.robot.chatHistory = [React.createElement(Msg,
        {message: `${charactor}: ${msg}`})];
  },

  ask: function(msg) {
    this.robot.processListeners(msg);
  },

  render: function() {
    render(this.robot.chatHistory[0]);
  },

  // supportive functions
  unsafe_sendComponent: function(msg, props) {
    this.robot.chatHistory = [React.createElement(msg, props)];
  },
});

export default cliAdapter;
