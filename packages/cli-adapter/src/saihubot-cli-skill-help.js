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
    robot.adapter.unsafe_sendComponent(
        <Box borderStyle="round" borderColor="cyan" float="center" padding={1}>
          {`I have ${availableSkills.length} skills:\n ${availableSkills.join('\n')}`}
        </Box>
    );
  },
};

const skills = [skillHelp];
export {skills}; // should always return skills array
