/* globals SaihuBot */
'use strict';

/**
 * Render response message.
 * 
 * @param {String} action action word
 * @param {String} term search term
 * @param {String} url real search url
 * @param {String} engine search engine
 * @returns
 */
function renderResponse(action, term, url, engine) {
  let link = document.createElement('a');
  link.href = url;
  let linkText = document.createTextNode(`${action} "${term}" via ${engine}`);
  link.appendChild(linkText);
  return link;
}

SaihuBot.prototype.responses.push({
  name: 'google',
  help: 'google|g [term] - google search with [term]',
  rule: /(^google |^g* )(.*)/i,
  action: function(robot, msg) {
    let url = 'https://www.google.com/search?q=' + encodeURIComponent(msg[2]);
    let link = renderResponse('Search', msg[2], url, 'google');
    robot.adapter.sendHTML(link);
    window.open(url, '_blank');
  },
});

SaihuBot.prototype.responses.push({
  name: 'wikipedia',
  help: 'wikipedia|w|wiki [term] - search wikipedia with [term]',
  rule: /(^w |^wiki |^wikipedia )(.*)/i,
  action: function(robot, msg) {
    let url = 'http://en.wikipedia.org/w/index.php?title=Special:Search&search=' + encodeURIComponent(msg[2]);
    let link = renderResponse('Search', msg[2], url, 'wikipedia');
    robot.adapter.sendHTML(link);
    window.open(url, '_blank');
  },
});

SaihuBot.prototype.responses.push({
  name: 'translate',
  help: 'translate|tr [term] - translate [term] with google translate',
  rule: /(^translate |^tr |^trans )(.*)/i,
  action: function(robot, msg) {
    let url = 'http://translate.google.com/?q=' + encodeURIComponent(msg[2]);
    let link = renderResponse('Translate', msg[2], url, 'google translate');
    robot.adapter.sendHTML(link);
    window.open(url, '_blank');
  },
});
