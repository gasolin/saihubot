/* eslint-disable camelcase */
'use strict';

const skill_search_duckduckgo = {
  name: 'duckduckgo',
  help: 'duckduckgo [term] - search [term] with DuckDuckgo',
  requirements: ['search'],
  rule: /(^duckduckgo |^duck )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://duckduckgo.com/?q=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'DuckDuckgo');
  },
};

const skill_search_wikipedia = {
  name: 'wikipedia',
  help: 'wikipedia|w|wiki [term] - search wikipedia with [term]',
  requirements: ['search'],
  rule: /(^wikipedia |^w |^wiki )(.*)/i,
  action: function(robot, msg) {
    const url = 'http://en.wikipedia.org/w/index.php?title=Special:Search&search=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'Wikipedia');
  },
};

const skill_search_github = {
  name: 'github',
  help: 'github|gh [term] - search github with [term]',
  requirements: ['search'],
  rule: /(^github |^gh )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://github.com/search?utf8=%E2%9C%93&q=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'Github');
  },
};

const skill_search_google = {
  name: 'google',
  help: 'google|g [term] - google search with [term]',
  requirements: ['search'],
  rule: /(^google |^g )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'Google');
  },
};

const skill_search_googletranslate = {
  name: 'googletranslate',
  help: 'translate|tr|trans|gt [term] - translate [term] with google translate',
  requirements: ['search'],
  rule: /(^translate |^tr |^trans |^gt )(.*)/i,
  action: function(robot, msg) {
    const url = 'http://translate.google.com/?text=' + encodeURIComponent(msg[2]);
    robot.addons.search('Translate', msg[2], url, 'Google Translate');
  },
};

const skill_search_googleimages = {
  name: 'googleimages',
  help: 'images|image|gi [term] - search [term] with google images',
  requirements: ['search'],
  rule: /(^images |^image |^gi )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'Google Images');
  },
};

const skill_search_googlemaps = {
  name: 'googlemaps',
  help: 'maps|map|gm [term] - search [term] with google maps',
  requirements: ['search'],
  rule: /(^maps |^map |^gm )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://www.google.com/maps?q=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'Google Maps');
  },
};

const skill_search_youtube = {
  name: 'youtube',
  help: 'youtube|yt [term] - search [term] with Youtube',
  requirements: ['search'],
  rule: /(^youtube |^yt )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'Youtube');
  },
};

const skill_search_mdn = {
  name: 'mdn',
  help: 'mdn [term] - search [term] with Mozilla Developer Network',
  requirements: ['search'],
  rule: /(^mdn )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://mdn.io/' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'MDN');
  },
};

const skill_search_npm = {
  name: 'npm',
  help: 'npm [term] - search [term] with npm',
  requirements: ['search'],
  rule: /(^npm )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://www.npmjs.com/search?q=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'npm');
  },
};

const skill_search_twitter = {
  name: 'twitter',
  help: 'twitter [term] - search [term] with twitter',
  requirements: ['search'],
  rule: /(^twitter )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://twitter.com/search?q=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'Twitter');
  },
};

const skill_search_stackoverflow = {
  name: 'stackoverflow',
  help: 'stackoverflow|stack|so [term] - search [term] with StackOverflow',
  requirements: ['search'],
  rule: /(^stackoverflow |^stack |^so )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://stackoverflow.com/search?q=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'StackOverflow');
  },
};

const skill_search_wolfram = {
  name: 'wolfram',
  help: 'wolfram|wolf|wo [term] - search [term] with Wolfram Alpha',
  requirements: ['search'],
  rule: /(^wolfram |^wolf |^wo |^siri )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://www.wolframalpha.com/input/?i=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'Wolfram Alpha');
  },
};

const skills = [
  skill_search_duckduckgo,
  skill_search_wikipedia,
  skill_search_github,
  skill_search_google,
  skill_search_googletranslate,
  skill_search_googleimages,
  skill_search_googlemaps,
  skill_search_youtube,
  skill_search_mdn,
  skill_search_npm,
  skill_search_twitter,
  skill_search_stackoverflow,
  skill_search_wolfram,
];
export {skills};