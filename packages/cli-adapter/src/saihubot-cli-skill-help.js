'use strict';

import React from 'react';
import {Text} from 'ink';

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
      <Text>
        {`I have ${availableSkills.length} skills:\n ${availableSkills.join('\n')}`}
      </Text>
    );
    robot.adapter.unsafe_sendComponent(helpMsg, {});
  },
};

const skills = [skillHelp];
export {skills}; // should always return skills array
