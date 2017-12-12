/* globals SaihuBot */
'use strict';

// plugin that provide ping, time, echo skills
SaihuBot.prototype.responses.push({
  name: 'ping',
  help: 'ping - return pong',
  rule: /PING$/i,
  action: function(robot, msg) {
    robot.send('PONG');
  },
});
SaihuBot.prototype.responses.push({
  name: 'echo',
  help: 'echo [string] - return [string]',
  rule: /ECHO (.*)$/i,
  action: function(robot, msg) {
    robot.send(msg[0]);
  },
});
SaihuBot.prototype.responses.push({
  name: 'time',
  help: 'time - return current browser time',
  rule: /TIME*|DATE*/i,
  action: function(robot, msg) {
    robot.send('Device time is ' + new Date());
  },
});
