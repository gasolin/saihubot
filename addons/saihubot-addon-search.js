/* globals SaihuBot */
/**
 * Open url in browser.
 *
 * @param {String} url
 */
function openTab(url) {
  window.open(url, '_blank');
}

/**
 * Render search response message.
 *
 * @param {String} action action word
 * @param {String} term search term
 * @param {String} url real search url
 * @param {String} engine search engine
 */
SaihuBot.prototype.search = function(action, term, url, engine) {
  const span = document.createElement('span');
  const line1 = document.createTextNode(`${action} "`);
  const link = document.createElement('a');
  link.href = url;
  const linkText = document.createTextNode(`${term}`);
  link.appendChild(linkText);
  const line2 = document.createTextNode(`" via ${engine}`);
  span.appendChild(line1);
  span.appendChild(link);
  span.appendChild(line2);
  this.adapter.sendHTML(link);
  openTab(url);
};
