'use strict';

export const addonPrompt = {
  name: 'prompt',
  requirements: {
    adapters: ['html'],
  },
  action: (robot) => (title, skill) => {
    // respond to input events
    robot.adapter.delegateMsgParse((msg) => {
      let dialogMatched = false;
      // refer processListeners
      const matchedMsg = msg.match(skill.rule);
      if (matchedMsg) {
        dialogMatched = true;
        console.log(`prompt skill matched! [${matchedMsg}]`);
        skill.action(robot, matchedMsg);
      }
      if (dialogMatched) {
        robot.adapter.resumeMsgParse();
      } else {
        // eslint-disable-next-line max-len
        robot.send('Can not recognnize, would you try another term?');
      }
      robot.render();
    });
  },
};

// addon that provide confirm and selection dialog
export const addonConfirm = {
  name: 'confirm',
  requirements: {
    platform: ['html'],
  },
  action: (robot) => (title, items) => {
    const confirmDlg = document.createElement('p');
    /**
     * Event handler.
     *
     * @param {function} cb
     * @param {number} idx
     * @return {function} handler
     */
    function handleEvent(cb, idx) {
      return function() {
        robot.addons.dialogSelected(idx, items);
        cb();
      };
    }

    // first arg is title msg
    if (typeof title === 'string') {
      robot.send(title);
    }

    // respond to click events
    items.forEach((item, idx) => {
      const confirmBtn = document.createElement('button');
      confirmBtn.textContent = item.title;
      if (item.action) {
        confirmBtn.addEventListener('click', handleEvent(item.action, idx));
        // SaihuBot.prototype.responses.push(item[1]);
      }
      confirmDlg.appendChild(confirmBtn);
      if (idx !== items.length - 1) {
        confirmDlg.appendChild(document.createElement('br'));
      }
    });
    robot.chatHistory.push(confirmDlg);

    // respond to input events
    robot.adapter.delegateMsgParse((msg) => {
      let dialogMatched = false;
      items.forEach((item) => {
        // refer processListeners
        const matchedMsg = msg.match(item.rule);
        if (matchedMsg) {
          dialogMatched = true;
          console.log(`dialog skill matched! [${matchedMsg}]`);
          item.action(robot, matchedMsg);
        }
      });
      if (dialogMatched) {
        robot.adapter.resumeMsgParse();
      } else {
        // eslint-disable-next-line max-len
        robot.send('Can not recognnize, would you click the option or try another term?');
      }
      robot.render();
    });
  },
};

export const addonDialogSelected = {
  name: 'dialogSelected',
  requirements: {
    platform: ['html'],
  },
  action: (robot) => (selected, items) => {
    // remove SaihuBot.prototype.responses item;
    robot.chatHistory.pop();
    const confirmBtn = document.createElement('button');
    confirmBtn.disabled = true;
    items.forEach((item, idx) => {
      if (typeof item === 'string') {
        robot.send(item);
        return;
      }
      if (idx === selected) {
        confirmBtn.textContent = item.title;
        return;
      }
    });
    robot.chatHistory.push(confirmBtn);
  },
};

const addons = [addonPrompt, addonConfirm, addonDialogSelected];

export {addons};
