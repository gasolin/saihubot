---
title: Saihubot
permalink: /docs/index.html
layout: docs
---

## Getting Started With Saihubot

## Developer

### Make a skill

Skill denotes rules and responses that the bot use to match and respond to the user.

Open browser's devtool and you can start to manipulate `Saihubot` object.
Skills are located in `Saihubot.responses`, and that is the place all you need to deal with.

Check [Skills Demo](https://gasolin.github.io/saihubot/samples/skill) for example.

![Imgur](http://i.imgur.com/mbhTwf6l.png)

### Make an addon

Addon denotes the extra function that can expand Saihubot's functionality.

You can extend Saihubot's functionality by import extra `saihubot-addon-[addonName].js`:

```js
const addonName = {
  name: 'name', // accessible via robot.addons.name
  requirements: {},
  action: (robot) => (normal, func) => {}, // need pass robot as first param.
};
```

then include the js file after `saihubot.js`.

```js
...
import Saihubot from 'saihubot'
import { addons } from 'saihubot-addon-[addonName]'
```

Check [Addon Demo](https://gasolin.github.io/saihubot/samples/addon) for example.

![Imgur](http://i.imgur.com/qYCES6Ml.png)

###　Improve Message Quality
If you want to improve your bot's message quality, read http://babich.biz/effective-writing-for-your-ui-things-to-avoid/

### Make an adapter

To embed Saihubot in your existing website, you can write a Saihubot adapter to adapt Saihubot with any web UI.

Check [saihubot-html-adapter](https://github.com/gasolin/saihubot/tree/gh-pages/adapters/saihubot-html-adapter.js)
This adapter is cooperate with [index.html](https://github.com/gasolin/saihubot/tree/gh-pages/index.html) and all other [samples](https://github.com/gasolin/saihubot/tree/gh-pages/samples).

### Make a brain

The brain is used to store something generated when user talks with the bot. Skills and addons can store states into the brain and use it later.

[saihubot-brain-localforage.js](https://github.com/gasolin/saihubot/tree/gh-pages/addons/saihubot-brain-localforage.js) is created to store brain content with browser storage.
You can find [sample](http://gasolin.idv.tw/saihubot/samples/brain.html) here.

## Debuging regex

You can use online tools such as [regex101](https://regex101.com/) to debug js regex.

Make sure you've selected ECMAScript(Javascript) in the `FLAVOR` menu.
