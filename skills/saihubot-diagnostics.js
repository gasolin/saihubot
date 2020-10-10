'use strict';

// plugin that provide ping, time, echo skills
const skill_ping = {
  name: 'ping',
  help: 'ping - return pong',
  rule: /PING$/i,
  action: function(robot, msg) {
    robot.send('PONG');
  },
};

const skill_echo = {
  name: 'echo',
  help: 'echo [string] - return [string]',
  rule: /ECHO (.*)$/i,
  action: function(robot, msg) {
    robot.send(msg[0]);
  },
}
const skill_current_time = {
  name: 'time',
  help: 'time - return current browser time',
  rule: /TIME*|DATE*/i,
  action: function(robot, msg) {
    robot.send('Device time is ' + new Date().toLocaleString());
  },
};

const skills = [skill_ping, skill_echo, skill_current_time];
export { skills };
