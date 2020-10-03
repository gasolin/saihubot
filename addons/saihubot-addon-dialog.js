/* globals SaihuBot */

'use strict';

// addon that provide confirm and selection dialog
SaihuBot.prototype.confirm = function(title, items) {
  const confirmDlg = document.createElement('p');
  const that = this;
  /**
   * Event handler.
   *
   * @param {function} cb
   * @param {number} idx
   * @return {function} handler
   */
  function handleEvent(cb, idx) {
    return function() {
      that.dialogSelected(idx, items);
      cb();
    };
  }

  // first arg is title msg
  if (typeof title === 'string') {
    this.send(title);
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
  this.chatHistory.push(confirmDlg);

  // respond to input events
  this.adapter.delegateMsgParse((msg) => {
    let dialogMatched = false;
    items.forEach((item) => {
      // refer processListeners
      const matchedMsg = msg.match(item.rule);
      if (matchedMsg) {
        dialogMatched = true;
        console.log(`dialog skill matched! [${matchedMsg}]`);
        item.action(that, matchedMsg);
      }
    });
    if (dialogMatched) {
      this.adapter.resumeMsgParse();
    } else {
      // eslint-disable-next-line max-len
      this.send('Can not recognnize, would you click the option or try another term?');
    }
    this.render();
  });
};

SaihuBot.prototype.dialogSelected = function(selected, items) {
  // remove SaihuBot.prototype.responses item;
  this.chatHistory.pop();
  const confirmBtn = document.createElement('button');
  confirmBtn.disabled = true;
  items.forEach((item, idx) => {
    if (typeof item === 'string') {
      this.send(item);
      return;
    }
    if (idx === selected) {
      confirmBtn.textContent = item.title;
      return;
    }
  });
  this.chatHistory.push(confirmBtn);
};
