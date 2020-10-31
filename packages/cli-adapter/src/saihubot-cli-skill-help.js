'use strict';

import React from 'react';
import Box from 'ink-box';

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
    // const pre = document.createElement('pre');
    const content = (
      <Box borderStyle="round" borderColor="cyan" float="center" padding={1}>
        {`I have ${availableSkills.length} skills:\n ${availableSkills.join('\n')}`}
      </Box>
    );
    robot.adapter.send(content);
  },
};

const skills = [skillHelp];
export {skills}; // should always return skills array
