'use strict';

// plugin that provide help skill
export const skillHelp = {
  name: 'help',
  help: 'help - list available skills',
  requirements: {
    adapters: ['html'],
  },
  rule: /HELP$/i,
  action: function(robot, msg) {
    const availableSkills = robot.responses.map(function(skill) {
      return skill.help ? `* ${skill.name}\n  ${skill.help}` :
        `* ${skill.name}`;
    });
    const pre = document.createElement('pre');
    pre.textContent = `I have ${availableSkills.length} skills:\n` +
      availableSkills.join('\n');
    robot.sendComponent(pre);
  },
};

const skills = [skillHelp];
export {skills}; // should always return skills array
