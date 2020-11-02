/**
 * Open url in browser.
 *
 * @param {String} url
 */
function openTab(url) {
  window.open(url, '_blank');
}

export const addonOpenLink = {
  name: 'openLink',
  requirements: {
    platform: ['html'],
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
  action: (robot) => window.fetch,
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
    adapters: ['html'],
  },
  action: (robot) => (action, term, url, engine) => {
    const span = document.createElement('span');
    const line1 = document.createTextNode(`${action} "`);
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    const linkText = document.createTextNode(`${term}`);
    link.appendChild(linkText);
    const line2 = document.createTextNode(`" via ${engine}`);
    span.appendChild(line1);
    span.appendChild(link);
    span.appendChild(line2);
    robot.adapter.unsafe_sendHTML(link);
    openTab(url);
  },
};

const addons = [addonSearch, addonOpenLink, addonFetch];

export {addons};
