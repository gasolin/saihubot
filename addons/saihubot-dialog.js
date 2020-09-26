/* globals SaihuBot */

'use strict';

// addon that provide confirm and selection dialog
SaihuBot.prototype.confirm = function(title, ...args) {
  const confirmDlg = document.createElement('p');
  const that = this;
  // eslint-disable-next-line require-jsdoc
  function handleEvent(cb, idx) {
    return function() {
      that.dialogSelected(idx, args);
      cb();
    };
  }

  // first arg is title msg
  if (typeof title === 'string') {
    this.send(title);
  }

  // respond to click events
  args.forEach((item, idx) => {
    const confirmBtn = document.createElement('button');
    confirmBtn.textContent = item[0];
    if (item[1].action) {
      confirmBtn.addEventListener('click', handleEvent(item[1].action, idx));
      // SaihuBot.prototype.responses.push(item[1]);
    }
    confirmDlg.appendChild(confirmBtn);
    if (idx !== args.length - 1) {
      confirmDlg.appendChild(document.createElement('br'));
    }
  });
  this.chatHistory.push(confirmDlg);

  // respond to input events
  this.adapter.delegateMsgParse((msg) => {
    this.dialogMatched = false;
    args.forEach((option) => {
      const item = option[1]
      // refer processListeners
      const matchedMsg = msg.match(item.rule);
      if (matchedMsg) {
        this.dialogMatched = true;
        console.log(`dialog skill matched! [${matchedMsg}]`);
        item.action(this, matchedMsg);
      }
    })
    if (this.dialogMatched) {
      this.resumeMsgParse()
    } else {
      this.send('Can not recognnize, would you click the option or try another term?Ÿ')
    }
    this.render()
  })
};

SaihuBot.prototype.dialogSelected = function(selected, args) {
  // remove SaihuBot.prototype.responses item;
  this.chatHistory.pop();
  const confirmBtn = document.createElement('button');
  confirmBtn.disabled = true;
  args.forEach((item, idx) => {
    if (typeof item === 'string') {
      this.send(item);
      return;
    }
    if (idx === selected) {
      confirmBtn.textContent = item[0];
      return;
    }
  });
  this.chatHistory.push(confirmBtn);
};
