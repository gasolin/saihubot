/* globals SaihuBot */
'use strict';

// addon that provide confirm dialog function
SaihuBot.prototype.responses.push({
  name: 'ping',
  rule: /PING$/i,
  action: function(robot, msg) {
    robot.send('PONG');
  }
});
SaihuBot.prototype.responses.push({
  name: 'echo [string]',
  rule: /ECHO (.*)$/i,
  action: function(robot, msg) {
    robot.send(msg[0]);
  }
});
SaihuBot.prototype.responses.push({
  name: 'time',
  rule: /TIME$/i,
  action: function(robot, msg) {
    robot.send('Device time is ' + new Date());
  }
});
