'use strict';

const MAX = 10000;

/**
 * Get random id to access the element.
 *
 * @return {String} id to access the element
 */
function getRandomId() {
  return `id${Math.floor(Math.random() * Math.floor(MAX))}`;
}

export const addonGetRandomId = {
  name: 'getRandomId',
  requirements: [],
  action: (robot) => getRandomId,
};

export const addonCardIsReady = {
  name: 'cardIsReady',
  requirements: [],
  action: (robot) => (rootElement) => {
    console.log('clean up', rootElement.loadingId);
    if (rootElement.loadingId) {
      const element = document.getElementById(rootElement.loadingId);
      element.parentNode.removeChild(element);
    }
  },
};

// addon that shows widget area to manipulate
export const addonCard = {
  name: 'card',
  requirements: [],
  action: (robot) => (config) => {
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
    robot.chatHistory.push(rootElement);
    robot.render();

    if (typeof asyncAction === 'function') {
      asyncAction(rootElement);
    } else {
      console.error('need pass asyncAction');
    }
  },
};

const addons = [addonGetRandomId, addonCardIsReady, addonCard];

export {addons};
