'use strict';

import React from 'react';
import {Box, Text, useApp, useInput} from 'ink';
import SelectInput from 'ink-select-input';

const SelectBox = ({handleSelect, title, items}) => {
  const {exit} = useApp();
  useInput((input, key) => {
    if (input === 'q' || key.escape) {
      exit();
    }
  });

  const options = [];
  items.forEach((item, idx) => {
    options.push({
      label: item.title,
      value: idx,
    });
  });

  return (
    <Box flexDirection="column">
      <Text>{title}</Text>
      <SelectInput items={options} onSelect={handleSelect} />
    </Box>
  );
};

// addon that provide confirm and selection dialog
export const addonConfirm = {
  name: 'confirm',
  requirements: {
    platform: ['cli'],
  },
  action: (robot) => (title, items) => {
    const handleSelect = (item) => {
      // `item` = { label: 'First', value: 'first' }
      if (item && items[item.value] && items[item.value].action) {
        items[item.value].action();
      }
    };

    robot.chatHistory.push(
        <SelectBox
          title={title}
          items={items}
          handleSelect={handleSelect}
        />
    );
    robot.render();
  },
};

const addons = [addonConfirm];

export {addons};
