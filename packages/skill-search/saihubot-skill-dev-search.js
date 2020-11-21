'use strict';

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
  skillSearchGithub,
  skillSearchMdn,
  skillSearchNpm,
  skillSearchStackoverflow,
  skillSearchCheatsh,
];

export {skills};
