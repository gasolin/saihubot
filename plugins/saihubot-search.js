/* globals SaihuBot */
'use strict';

SaihuBot.prototype.responses.push({
  name: 'google',
  help: 'search|google|g [term] - google search with [term]',
  rule: /(^search |^google |^g* )(.*)/i,
  action: function(robot, msg) {
    let url = 'https://www.google.com/search?q=' + encodeURIComponent(msg[2]);
    let link = document.createElement('a');
    link.href = url;
    let linkText = document.createTextNode('Search ' + msg[2] + ' via google');
    link.appendChild(linkText);
    robot.adapter.sendHTML(link);
    window.open(url, '_blank');
  }
});

SaihuBot.prototype.responses.push({
  name: 'wikipedia',
  help: 'wikipedia|w|wiki [term] - search wikipedia with [term]',
  rule: /(^w |^wiki |^wikipedia )(.*)/i,
  action: function(robot, msg) {
    let url = 'http://en.wikipedia.org/w/index.php?title=Special:Search&search=' + encodeURIComponent(msg[2]);
    let link = document.createElement('a');
    link.href = url;
    let linkText = document.createTextNode('Search ' + msg[2] + ' via wikipedia');
    link.appendChild(linkText);
    robot.adapter.sendHTML(link);
    window.open(url, '_blank');
  }
});

SaihuBot.prototype.responses.push({
  name: 'translate',
  help: 'translate|tr [term] - translate [term] with google translate',
  rule: /(^translate |^tr )(.*)/i,
  action: function(robot, msg) {
    let url = 'http://translate.google.com/?q=' + encodeURIComponent(msg[2]);
    let link = document.createElement('a');
    link.href = url;
    let linkText = document.createTextNode('Translate ' + msg[2] + ' via google translate');
    link.appendChild(linkText);
    robot.adapter.sendHTML(link);
    window.open(url, '_blank');
  }
});
