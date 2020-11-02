import execa from 'execa';
import fetch from 'node-fetch';
/**
 * Open url in browser.
 *
 * @param {String} url
 */
function openTab(url) {
  // eslint-disable-next-line no-undef
  execa('open', [`${url}`]).stdout.pipe(process.stdout);
}

export const addonOpenLink = {
  name: 'openLink',
  requirements: {
    platform: ['cli'],
  },
  action: (robot) => (url) => openTab(url),
};

/**
 * expose web equivalent fetch API.
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
    platform: ['cli'],
  },
  action: (robot) => (action, term, url, engine) => {
    robot.send(`${action} [${term}](${url}) via ${engine}`);
    openTab(url);
  },
};

const addons = [addonSearch, addonOpenLink, addonFetch];

export {addons};
