/* globals SaihuBot */
'use strict';

/**
 * Render response message.
 *
 * @param {String} action action word
 * @param {String} term search term
 * @param {String} url real search url
 * @param {String} engine search engine
 * @return {HTMLElement} response description with link
 */
function renderResponse(action, term, url, engine) {
  var span = document.createElement('span');
  var line1 = document.createTextNode(`${action} "`);
  let link = document.createElement('a');
  link.href = url;
  let linkText = document.createTextNode(`${term}`);
  link.appendChild(linkText);
  var line2 = document.createTextNode(`" via ${engine}`);
  span.appendChild(line1);
  span.appendChild(link);
  span.appendChild(line2);
  return span;
}

function openTab(url) {
  window.open(url, '_blank');
}

SaihuBot.prototype.responses.push({
  name: 'duckduckgo',
  help: 'duckduckgo [term] - search [term] with DuckDuckgo',
  rule: /(^duckduckgo |^duck )(.*)/i,
  action: function(robot, msg) {
    let url = 'https://duckduckgo.com/?q=' + encodeURIComponent(msg[2]);
    let link = renderResponse('Search', msg[2], url, 'DuckDuckgo');
    robot.adapter.sendHTML(link);
    openTab(url);
  },
});

SaihuBot.prototype.responses.push({
  name: 'wikipedia',
  help: 'wikipedia|w|wiki [term] - search wikipedia with [term]',
  rule: /(^wikipedia |^w |^wiki )(.*)/i,
  action: function(robot, msg) {
    let url = 'http://en.wikipedia.org/w/index.php?title=Special:Search&search=' + encodeURIComponent(msg[2]);
    let link = renderResponse('Search', msg[2], url, 'Wikipedia');
    robot.adapter.sendHTML(link);
    openTab(url);
  },
});

SaihuBot.prototype.responses.push({
  name: 'github',
  help: 'github|gh [term] - search github with [term]',
  rule: /(^github |^gh )(.*)/i,
  action: function(robot, msg) {
    let url = 'https://github.com/search?utf8=%E2%9C%93&q=' + encodeURIComponent(msg[2]);
    let link = renderResponse('Search', msg[2], url, 'Github');
    robot.adapter.sendHTML(link);
    openTab(url);
  },
});

SaihuBot.prototype.responses.push({
  name: 'google',
  help: 'google|g [term] - google search with [term]',
  rule: /(^google |^g )(.*)/i,
  action: function(robot, msg) {
    let url = 'https://www.google.com/search?q=' + encodeURIComponent(msg[2]);
    let link = renderResponse('Search', msg[2], url, 'Google');
    robot.adapter.sendHTML(link);
    openTab(url);
  },
});

SaihuBot.prototype.responses.push({
  name: 'googletranslate',
  help: 'translate|tr|trans|gt [term] - translate [term] with google translate',
  rule: /(^translate |^tr |^trans |^gt )(.*)/i,
  action: function(robot, msg) {
    let url = 'http://translate.google.com/?text=' + encodeURIComponent(msg[2]);
    let link = renderResponse('Translate', msg[2], url, 'Google Translate');
    robot.adapter.sendHTML(link);
    openTab(url);
  },
});

SaihuBot.prototype.responses.push({
  name: 'googleimages',
  help: 'images|image|gi [term] - search [term] with google images',
  rule: /(^images |^image |^gi )(.*)/i,
  action: function(robot, msg) {
    let url = 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(msg[2]);
    let link = renderResponse('Search', msg[2], url, 'Google Images');
    robot.adapter.sendHTML(link);
    openTab(url);
  },
});

SaihuBot.prototype.responses.push({
  name: 'googlemaps',
  help: 'maps|map|gm [term] - search [term] with google maps',
  rule: /(^maps |^map |^gm )(.*)/i,
  action: function(robot, msg) {
    let url = 'https://www.google.com/maps?q=' + encodeURIComponent(msg[2]);
    let link = renderResponse('Search', msg[2], url, 'Google Maps');
    robot.adapter.sendHTML(link);
    openTab(url);
  },
});

SaihuBot.prototype.responses.push({
  name: 'youtube',
  help: 'youtube|yt [term] - search [term] with Youtube',
  rule: /(^youtube |^yt )(.*)/i,
  action: function(robot, msg) {
    let url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(msg[2]);
    let link = renderResponse('Search', msg[2], url, 'Youtube');
    robot.adapter.sendHTML(link);
    openTab(url);
  },
});

SaihuBot.prototype.responses.push({
  name: 'mdn',
  help: 'mdn [term] - search [term] with Mozilla Developer Network',
  rule: /(^mdn )(.*)/i,
  action: function(robot, msg) {
    let url = 'https://mdn.io/' + encodeURIComponent(msg[2]);
    let link = renderResponse('Search', msg[2], url, 'MDN');
    robot.adapter.sendHTML(link);
    openTab(url);
  },
});

SaihuBot.prototype.responses.push({
  name: 'npm',
  help: 'npm [term] - search [term] with npm',
  rule: /(^npm )(.*)/i,
  action: function(robot, msg) {
    let url = 'https://www.npmjs.com/search?q=' + encodeURIComponent(msg[2]);
    let link = renderResponse('Search', msg[2], url, 'npm');
    robot.adapter.sendHTML(link);
    openTab(url);
  },
});

SaihuBot.prototype.responses.push({
  name: 'twitter',
  help: 'twitter [term] - search [term] with twitter',
  rule: /(^twitter )(.*)/i,
  action: function(robot, msg) {
    let url = 'https://twitter.com/search?q=' + encodeURIComponent(msg[2]);
    let link = renderResponse('Search', msg[2], url, 'Twitter');
    robot.adapter.sendHTML(link);
    openTab(url);
  },
});

SaihuBot.prototype.responses.push({
  name: 'stackoverflow',
  help: 'stackoverflow|stack|so [term] - search [term] with StackOverflow',
  rule: /(^stackoverflow |^stack |^so )(.*)/i,
  action: function(robot, msg) {
    let url = 'https://stackoverflow.com/search?q=' + encodeURIComponent(msg[2]);
    let link = renderResponse('Search', msg[2], url, 'StackOverflow');
    robot.adapter.sendHTML(link);
    openTab(url);
  },
});

SaihuBot.prototype.responses.push({
  name: 'wolfram',
  help: 'wolfram|wolf|wo [term] - search [term] with Wolfram Alpha',
  rule: /(^wolfram |^wolf |^wo |^siri )(.*)/i,
  action: function(robot, msg) {
    let url = 'https://www.wolframalpha.com/input/?i=' + encodeURIComponent(msg[2]);
    let link = renderResponse('Search', msg[2], url, 'Wolfram Alpha');
    robot.adapter.sendHTML(link);
    openTab(url);
  },
});
