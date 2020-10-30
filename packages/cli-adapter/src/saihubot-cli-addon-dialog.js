'use strict';

import React, {useCallback, useState} from 'react';
import {Box} from 'ink';
import SelectInput from 'ink-select-input';

// addon that provide confirm and selection dialog
export const addonConfirm = {
  name: 'confirm',
  requirements: {
    platform: ['cli'],
  },
  action: (robot) => (title, items) => {
    const Msg = () => {
      // first arg is title msg
			const msgTitle = typeof title === 'string'
			const handleSelect = (item) => {
				// `item` = { label: 'First', value: 'first' }
				if (item && items[item.value] && items[item.value].action) {
					items[item.value].action();
					robot.render();
				}
			};

			const options = [];
			items.forEach((item, idx) => {
				options.push({
					label: item.title,
					value: idx,
				});
			});

			return (
				<Box>
					{msgTitle}
					<SelectInput items={options} onSelect={handleSelect} />
				</Box>
			);
		};
		const element = React.createElement(Msg, {})
		robot.chatHistory = [element];
		robot.render();
  },
};

const addons = [addonConfirm];

export {addons};
