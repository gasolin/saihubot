'use strict';

import React from 'react';

// plugin that provide help skill
export const skillHelp = {
  name: 'help',
  help: 'help - list available skills',
  requirements: {
    adapters: ['cli'],
  },
  rule: /HELP$/i,
  action: function(robot, msg) {
    const availableSkills = robot.responses.map(function(skill) {
      return skill.help ? `* ${skill.name}\n  ${skill.help}` :
        `* ${skill.name}`;
    });

    const helpMsg = () => (
      <>
        {`I have ${availableSkills.length} skills:\n ${availableSkills.join('\n')}`}
      </>
    );
    robot.adapter.unsafe_sendComponent(helpMsg, {});
  },
};

const skills = [skillHelp];
export {skills}; // should always return skills array
