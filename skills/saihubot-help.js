/* eslint-disable camelcase */
'use strict';

// plugin that provide help skill
const skill_help = {
  name: 'help',
  help: 'help - list available skills',
  rule: /HELP$/i,
  action: function(robot, msg) {
    const availableSkills = robot.responses.map(function(skill) {
      return skill.help ? `* ${skill.name}\n  ${skill.help}` :
        `* ${skill.name}`;
    });
    const pre = document.createElement('pre');
    pre.textContent = `I have ${availableSkills.length} skills:\n` +
      availableSkills.join('\n');
    robot.adapter.sendHTML(pre);
  },
};

const skills = [skill_help];
export {skills}; // should always return skills array
