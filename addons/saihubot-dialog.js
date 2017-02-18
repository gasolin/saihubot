/* globals SaihuBot */

'use strict';

// addon that provide confirm and selection dialog
SaihuBot.prototype.confirm = function() {
  var confirmDlg = document.createElement('p');
  var args = Array.prototype.slice.call(arguments);
  var that = this;
  function handleEvent(cb, idx) {
    return function(e) {
      that.dialogSelected(idx, args);
      // remove SaihuBot.prototype.responses item;
      cb();
    };
  }

  // first arg is title
  if (typeof args[0] === 'string') {
    this.send(args[0]);
    args.shift();
  }

  args.forEach((item, idx) => {
    var confirmBtn = document.createElement('button');
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
};

SaihuBot.prototype.dialogSelected = function(selected, args) {
  this.chatHistory.pop();
  var confirmBtn = document.createElement('button');
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
