/* eslint-disable require-jsdoc */
/* globals SaihuBot */

'use strict';

const MAX = 10000;

function getRandomId() {
  return `id${Math.floor(Math.random() * Math.floor(MAX))}`;
}

SaihuBot.prototype.getRandomId = getRandomId;

SaihuBot.prototype.cardIsReady = function(rootElement) {
  console.log('clean up', rootElement.loadingId);
  if (rootElement.loadingId) {
    const element = document.getElementById(rootElement.loadingId);
    element.parentNode.removeChild(element);
  }
};

// addon that shows widget area to manipulate
SaihuBot.prototype.card = function(config) {
  const {
    rootElement = document.createElement('div'),
    asyncAction,
    renderLoading,
    width = '100%',
    minHeight ='50px',
    height,
  } = config;
  rootElement.id = getRandomId();
  rootElement.className = 'card';
  rootElement.style.width = width;
  rootElement.style.minHeight = minHeight;
  if (height) {
    rootElement.style.height = height;
  }
  if (typeof renderLoading === 'function') {
    const loadingId = renderLoading(rootElement);
    rootElement.loadingId = loadingId;
  }
  this.chatHistory.push(rootElement);
  this.render();

  if (typeof asyncAction === 'function') {
    asyncAction(rootElement);
  } else {
    console.error('need pass asyncAction');
  }
};
