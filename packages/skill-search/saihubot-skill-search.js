'use strict';

/** Search with Duckduckgo */
export const skillSearchDuckduckgo = {
  name: 'duckduckgo',
  help: 'duckduckgo [term] - search [term] with DuckDuckgo',
  requirements: {
    addons: ['search'],
  },
  rule: /(^duckduckgo |^duck )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://duckduckgo.com/?q=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'DuckDuckgo');
  },
};

/** Search with Wikipedia */
export const skillSearchWikipedia = {
  name: 'wikipedia',
  help: 'wikipedia|w|wiki [term] - search Wikipedia with [term]',
  requirements: {
    addons: ['search'],
  },
  rule: /(^wikipedia |^w |^wiki )(.*)/i,
  action: function(robot, msg) {
    const url = 'http://en.wikipedia.org/w/index.php?title=Special:Search&search=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'Wikipedia');
  },
};

/** Search with Google */
export const skillSearchGoogle = {
  name: 'google',
  help: 'google|g [term] - google search with [term]',
  requirements: {
    addons: ['search'],
  },
  rule: /(^google |^g )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'Google');
  },
};

/** Search with Google Translate */
export const skillSearchGoogletranslate = {
  name: 'googletranslate',
  help: 'translate|tr|trans|gt [term] - translate [term] with Google Translate',
  requirements: {
    addons: ['search'],
  },
  rule: /(^translate |^tr |^trans |^gt )(.*)/i,
  action: function(robot, msg) {
    const url = 'http://translate.google.com/?text=' + encodeURIComponent(msg[2]);
    robot.addons.search('Translate', msg[2], url, 'Google Translate');
  },
};

/** Search with Google Images */
export const skillSearchGoogleimages = {
  name: 'googleimages',
  help: 'images|image|gi [term] - search [term] with Google Images',
  requirements: {
    addons: ['search'],
  },
  rule: /(^images |^image |^gi )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'Google Images');
  },
};

/** Search with Google Maps */
export const skillSearchGooglemaps = {
  name: 'googlemaps',
  help: 'maps|map|gm [term] - search [term] with Google Maps',
  requirements: {
    addons: ['search'],
  },
  rule: /(^maps |^map |^gm )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://www.google.com/maps?q=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'Google Maps');
  },
};

/**
 * Search with Google Trends.
 * Can send several terms with comma to compare.
 */
export const skillSearchGoogleTrends = {
  name: 'googletrends',
  help: 'trends [term] - search [term] with Google Trends',
  requirements: {
    addons: ['search'],
  },
  rule: /(^trends )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://trends.google.com.tw/trends/explore?q=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'Google Trends');
  },
};

/** Search with Youtube */
export const skillSearchYoutube = {
  name: 'youtube',
  help: 'youtube|yt [term] - search [term] with Youtube',
  requirements: {
    addons: ['search'],
  },
  rule: /(^youtube |^yt )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'Youtube');
  },
};

/** Search with Twitter */
export const skillSearchTwitter = {
  name: 'twitter',
  help: 'twitter [term] - search [term] with twitter',
  requirements: {
    addons: ['search'],
  },
  rule: /(^twitter )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://twitter.com/search?q=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'Twitter');
  },
};

/** Search with Wolfram */
export const skillSearchWolfram = {
  name: 'wolfram',
  help: 'wolfram|wolf|wo [term] - search [term] with Wolfram Alpha',
  requirements: {
    addons: ['search'],
  },
  rule: /(^wolfram |^wolf |^wo |^siri )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://www.wolframalpha.com/input/?i=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'Wolfram Alpha');
  },
};

const skills = [
  skillSearchDuckduckgo,
  skillSearchWikipedia,
  skillSearchGoogle,
  skillSearchGoogletranslate,
  skillSearchGoogleimages,
  skillSearchGooglemaps,
  skillSearchGoogleTrends,
  skillSearchYoutube,
  skillSearchTwitter,
  skillSearchWolfram,
];

export {skills};
