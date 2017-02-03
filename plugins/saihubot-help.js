/* globals SaihuBot */
'use strict';

// plugin that provide help skill
SaihuBot.prototype.responses.push({
  name: 'help',
  rule: /HELP$/i,
  action: function(robot, msg) {
    var availableSkills = robot.responses.map(function(skill) {
      return '* ' + skill.name;
    });
    let pre = document.createElement('pre');
    pre.textContent = 'Here are available skills:\n' + availableSkills.join('\n');
    robot.adapter.sendHTML(pre);
  }
});
