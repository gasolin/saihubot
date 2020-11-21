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
  help: 'wikipedia|w|wiki [term] - search wikipedia with [term]',
  requirements: {
    addons: ['search'],
  },
  rule: /(^wikipedia |^w |^wiki )(.*)/i,
  action: function(robot, msg) {
    const url = 'http://en.wikipedia.org/w/index.php?title=Special:Search&search=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'Wikipedia');
  },
};

/** Search with Github */
export const skillSearchGithub = {
  name: 'github',
  help: 'github|gh [term] - search github with [term]',
  requirements: {
    addons: ['search'],
  },
  rule: /(^github |^gh )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://github.com/search?utf8=%E2%9C%93&q=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'Github');
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
  help: 'translate|tr|trans|gt [term] - translate [term] with google translate',
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
  help: 'images|image|gi [term] - search [term] with google images',
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
  help: 'maps|map|gm [term] - search [term] with google maps',
  requirements: {
    addons: ['search'],
  },
  rule: /(^maps |^map |^gm )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://www.google.com/maps?q=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'Google Maps');
  },
};

/** Search with Google Trends */
export const skillSearchGoogleTrends = {
  name: 'googletrends',
  help: 'trends [term] - search [term] with google maps',
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

/** Search with MDN */
export const skillSearchMdn = {
  name: 'mdn',
  help: 'mdn [term] - search [term] with Mozilla Developer Network',
  requirements: {
    addons: ['search'],
  },
  rule: /(^mdn )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://mdn.io/' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'MDN');
  },
};

/** Search with NPM */
export const skillSearchNpm = {
  name: 'npm',
  help: 'npm [term] - search [term] with npm',
  requirements: {
    addons: ['search'],
  },
  rule: /(^npm )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://www.npmjs.com/search?q=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'npm');
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

/** Search with StackOverflow */
export const skillSearchStackoverflow = {
  name: 'stackoverflow',
  help: 'stackoverflow|stack|so [term] - search [term] with StackOverflow',
  requirements: {
    addons: ['search'],
  },
  rule: /(^stackoverflow |^stack |^so )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://stackoverflow.com/search?q=' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'StackOverflow');
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

/** Search with Cheat.sh */
export const skillSearchCheatsh = {
  name: 'cheatsh',
  help: 'cheat|cheatsh [term] - search [term] with cheat.sh',
  requirements: {
    addons: ['search'],
  },
  rule: /(^cheat |^cheatsh |^cheat\.sh )(.*)/i,
  action: function(robot, msg) {
    const url = 'https://cheat.sh/' + encodeURIComponent(msg[2]);
    robot.addons.search('Search', msg[2], url, 'Cheat.sh');
  },
};

const skills = [
  skillSearchDuckduckgo,
  skillSearchWikipedia,
  skillSearchGithub,
  skillSearchGoogle,
  skillSearchGoogletranslate,
  skillSearchGoogleimages,
  skillSearchGooglemaps,
  skillSearchYoutube,
  skillSearchMdn,
  skillSearchNpm,
  skillSearchTwitter,
  skillSearchStackoverflow,
  skillSearchWolfram,
  skillSearchCheatsh,
];

export {skills};
