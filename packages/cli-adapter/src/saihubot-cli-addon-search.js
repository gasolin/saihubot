import execa from 'execa';
import fetch from 'node-fetch';

const exec = (command, args) => execa(command, args)
  .stdout.pipe(process.stdout);

/**
 * Open url in browser.
 *
 * @param {String} url
 */
function openTab(url) {
  const openBrowserCmd = process.platform === "win32" ? 'explorer' : 'open'
  exec(openBrowserCmd, [`${url}`]);
}

/**
 * Run local command via execa.
 * https://www.npmjs.com/package/execa
 */
export const addonExec = {
  name: 'exec',
  requirements: {
    platform: ['cli'],
  },
  action: (robot) => exec,
}

/**
 * Open link in browser.
 */
export const addonOpenLink = {
  name: 'openLink',
  requirements: {
    platform: ['cli'],
  },
  action: (robot) => (url) => openTab(url),
};

/**
 * Expose web equivalent fetch API.
 */
export const addonFetch = {
  name: 'fetch',
  requirements: {
    platform: ['cli'],
  },
  action: (robot) => fetch,
};

/**
 * Render search response message.
 *
 * @param {String} action action word
 * @param {String} term search term
 * @param {String} url real search url
 * @param {String} engine search engine
 */
export const addonSearch = {
  name: 'search',
  requirements: {
    adapters: ['cli'],
  },
  action: (robot) => (action, term, url, engine) => {
    robot.send(`${action} [${term}](${url}) via ${engine}`);
    openTab(url);
  },
};

const addons = [addonSearch, addonOpenLink, addonFetch, addonExec];

export {addons};
