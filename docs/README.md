---
title: Saihubot
permalink: /docs/index.html
layout: docs
---

Documentation

- [saihubot](http://gasolin.idv.tw/saihubot/docs/saihubot/) Core
- [Saihu](http://gasolin.idv.tw/saihubot/docs/saihu) the sample command line bot

Adapters

- [saihubot-html-adapter](http://gasolin.idv.tw/saihubot/docs/saihubot-html-adapter)
- [saihubot-cli-adapter](http://gasolin.idv.tw/saihubot/docs/saihubot-cli-adapter)

Skill

- [saihubot-skill-search](http://gasolin.idv.tw/saihubot/docs/saihubot-skill-search)
- [saihubot-skill-diagnostics](http://gasolin.idv.tw/saihubot/docs/saihubot-skill-diagnostics)

## Getting Started With Saihubot

## Developer

### Make a skill

Skills means new abilities, which contains rules and responses that the bot use to match and respond to the user.

You can equip Saihubot extra skikks by import extra `saihubot-[adapter]-skill-[skillName].js`:

Required syntax for define a skill

```js
export const skillSearchDuckduckgo = {
  name: 'duckduckgo',
  help: 'duckduckgo [term] - search [term] with DuckDuckgo',
  requirements: {
    addons: ['search'],
  },
  rule: /(^duckduckgo |^duck )(.*)/i,
  action: function(robot, msg) {
  }
}
```

Open browser's devtool and you can start to manipulate `Saihubot` object.
Skills are located in `Saihubot.responses`, and that is the place all you need to deal with.

Check [Skills Demo](https://gasolin.github.io/saihubot/samples/skill) for example.

![Imgur](http://i.imgur.com/mbhTwf6l.png)

### Make an addon

Addons means the extra functions that can extend saihubot's capability.

Required syntax for define an addon

```js
export const addonSearch = {
  requirements: {
  name: 'search', // accessible via robot.addons.name
  requirements: {
    adapters: ['html'],
  },
  // need pass robot as first param.
  action: (robot) => (param1, param2) => {
  }
}
```

You can extend Saihubot's functionality by import extra `saihubot-[adapter]-addon-[addonName].js`:


```js
...
import Saihubot from 'saihubot'
import { addons } from 'saihubot-[adapter]-addon-[addonName]'
```

Check [Addon Demo](https://gasolin.github.io/saihubot/samples/addon) for example.

![Imgur](http://i.imgur.com/qYCES6Ml.png)

###　Improve Message Quality
If you want to improve your bot's message quality, read http://babich.biz/effective-writing-for-your-ui-things-to-avoid/

### Make an adapter

To embed Saihubot in your existing website, you can write a Saihubot adapter to adapt Saihubot with any web UI.

Required syntax for define an adapter

```js
const htmlAdapter = {
  name: 'html',
  description: 'basic web',
  run: function(robot) {
  }
}
```

Check [saihubot-html-adapter](https://github.com/gasolin/saihubot/tree/gh-pages/adapters/saihubot-html-adapter.js)
This adapter is cooperate with [index.html](https://github.com/gasolin/saihubot/tree/gh-pages/index.html) and all other [samples](https://github.com/gasolin/saihubot/tree/gh-pages/samples).

### Make a brain

The brain is used to store something generated when user talks with the bot. Skills and addons can store states into the brain and use it later.

[saihubot-brain-localforage.js](https://github.com/gasolin/saihubot/tree/gh-pages/addons/saihubot-brain-localforage.js) is created to store brain content with browser storage.
You can find [sample](http://gasolin.idv.tw/saihubot/samples/brain.html) here.

## Debuging regex

You can use online tools such as [regex101](https://regex101.com/) to debug js regex.

Make sure you've selected ECMAScript(Javascript) in the `FLAVOR` menu.

## Publish

```sh
git clone https://github.com/gasolin/saihubot.git
cd saihubot
npm install -g documentation
npm install
```

Update doc

```sh
npx lerna run doc
```

Build runable version

```
npm run build
```

Publish new version
```
npm run publish
```

## FAQ

* How to customize skill's alias? For example, if I want change `google [term]` search to `ok [term]`.

After you `npm install` some skills, they will be downloadeded to `node_modules/` folder. You can edit them directly.

Then use [patch-package](https://www.npmjs.com/package/patch-package) to keep the local changes for reuse.
