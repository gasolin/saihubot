'use strict';

// plugin that provide ping, time, echo skills
/** simply return pong */
export const skillPing = {
  name: 'ping',
  help: 'ping - return pong',
  requirements: {},
  rule: /PING$/i,
  action: function(robot, msg) {
    robot.send('PONG');
  },
};

/** simply return anything you input */
export const skillEcho = {
  name: 'echo',
  help: 'echo [string] - return [string]',
  requirements: {},
  rule: /ECHO (.*)$/i,
  action: function(robot, msg) {
    robot.send(msg[0]);
  },
};

/** return local time */
export const skillCurrentTime = {
  name: 'time',
  help: 'time - return current browser time',
  requirements: {},
  rule: /TIME*|DATE*/i,
  action: function(robot, msg) {
    robot.send('Device time is ' + new Date().toLocaleString());
  },
};

const skills = [skillPing, skillEcho, skillCurrentTime];

export {skills};
