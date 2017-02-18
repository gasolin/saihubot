/* globals SaihuBot */
'use strict';

// plugin that provide help skill
SaihuBot.prototype.responses.push({
  name: 'help',
  help: 'help - list available skills',
  rule: /HELP$/i,
  action: function(robot, msg) {
    var availableSkills = robot.responses.map(function(skill) {
      console.log(skill);
      return skill.help ? `* ${skill.name}\n  ${skill.help}` :
        `* ${skill.name}`;
    });
    var pre = document.createElement('pre');
    pre.textContent = 'Here are available skills:\n' +
      availableSkills.join('\n');
    robot.adapter.sendHTML(pre);
  },
});
