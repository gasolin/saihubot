# Saihubot

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) [![](https://github.com/gasolin/saihubot/workflows/Lint%20Action/badge.svg)](https://github.com/gasolin/saihubot/actions?query=workflow%3A%22Lint+Action%22)

:robot: Frontend Framework to build :speech_balloon: message/chat bots ops in the :globe_with_meridians: [Browser](https://gasolin.github.io/saihubot/) or [Command Line](https://www.npmjs.com/package/saihu), no server required.

You can add new skills to bot via `skills` and extend its ability via `addons`. All with plain javascript. :clap:

Saihubot's API is inspired by [hubot](https://github.com/github/hubot/)'s API, so a developer who has learned `hubot-plugins` could learn `saihu-skills` very quickly. :zap:

Check [Online Demo](https://gasolin.github.io/saihubot/)

![Imgur](https://i.imgur.com/zoLMvTG.png)

Or run the command bot without install

```sh
npx saihu npm saihu
```

## Features

* Chatbot works in multiple platforms, without server setup.
* Structure was inspired by [hubot](https://github.com/github/hubot/)
  * Regex based message matching
  * Could write adapter to fully cooperate with your web UI
  * Could swap brain to support different backends
  * Provide skills(pluginn) architecture that able to expand functions
  * Can extend bot functionality by import addons
* Tiny size, easy to learn (the init version has just 80 lines that bundle with three skills)
* Plugin callbacks are extremely flexible; You can control in-page elements, execute the local command, fetch remote data, trigger remote actions...

## Modules

| Module  | Version | Description | Doc |
| --------|---------|-------------|-----|
| [saihubot](https://github.com/gasolin/saihubot/tree/gh-pages/packages/saihubot#readme) | [![npm version](https://badge.fury.io/js/saihubot.svg)](https://www.npmjs.com/package/saihubot) | core module|[Doc](http://gasolin.idv.tw/saihubot/docs/saihubot/) |
| [saihu](https://github.com/gasolin/saihubot/tree/gh-pages/packages/cli#readme) | [![npm version](https://badge.fury.io/js/saihu.svg)](https://www.npmjs.com/package/saihu) | Sample Command line bot |[Doc](http://gasolin.idv.tw/saihubot/docs/saihu) |
| [Web samples](https://github.com/gasolin/saihubot/tree/gh-pages/samples) | [Online Demos](https://gasolin.github.io/saihubot/) | |

| Adapters | Version | Description | Doc |
| --------|---------|-------------|-----|
|[saihubot-html-adapter](https://github.com/gasolin/saihubot/tree/gh-pages/packages/html-adapter#readme) |[![npm version](https://badge.fury.io/js/saihubot-html-adapter.svg)](https://www.npmjs.com/package/saihubot-html-adapter) |HTML |[Doc](http://gasolin.idv.tw/saihubot/docs/saihubot-html-adapter) |
|[saihubot-react-redux-adapter](https://github.com/gasolin/saihubot/tree/gh-pages/packages/react-redux-adapter#readme) |[![npm version](https://badge.fury.io/js/saihubot-react-redux-adapter.svg)](https://www.npmjs.com/package/saihubot-react-redux-adapter) |React + Redux |[Doc](http://gasolin.idv.tw/saihubot/docs/saihubot-react-redux-adapter) |
|[saihubot-cli-adapter](https://github.com/gasolin/saihubot/tree/gh-pages/packages/cli-adapter#readme) |[![npm version](https://badge.fury.io/js/saihubot-cli-adapter.svg)](https://www.npmjs.com/package/saihubot-cli-adapter.svg) |Command Line |[Doc](http://gasolin.idv.tw/saihubot/docs/saihubot-cli-adapter) |

| Skills | Version | Description | Doc |
| --------|---------|-------------|-----|
|[saihubot-skill-search](https://github.com/gasolin/saihubot/tree/gh-pages/packages/skill-search#readme) |[![npm version](https://badge.fury.io/js/saihubot-skill-search.svg)](https://www.npmjs.com/package/saihubot-skill-search) | Search engines |[Doc](http://gasolin.idv.tw/saihubot/docs/saihubot-skill-search) |
|[saihubot-skill-diagnostics](https://github.com/gasolin/saihubot/tree/gh-pages/packages/skill-diagnostics#readme) |[![npm version](https://badge.fury.io/js/saihubot-skill-diagnostics.svg)](https://www.npmjs.com/package/saihubot-skill-diagnostics) | ping, echo, current time | [Doc](http://gasolin.idv.tw/saihubot/docs/saihubot-skill-diagnostics) |
|[saihubot-cli-skill-qrcode](https://github.com/gasolin/saihubot/tree/gh-pages/packages/cli-skill-qrcode#readme) |[![npm version](https://badge.fury.io/js/saihubot-cli-skill-qrcode.svg)](https://www.npmjs.com/package/saihubot-cli-skill-qrcode) | generate qrcode | [Doc](http://gasolin.idv.tw/saihubot/docs/saihubot-cli-skill-qrcode) |

## How to use

### Try Saihubot samples online

If you just want to try how the saihubot looks like, Check [Online Demo](https://gasolin.github.io/saihubot/)

### Try Saihubot locally

Clone the project with command

```sh
git clone https://github.com/gasolin/saihubot.git
```

Then run


```sh
npm build
npm start
```

or

```sh
npx http-server .
```

now you have a working bot in the browser!

### Try Saihubot on Github

Fork the project, edit index.html with Github editor, save it and see the result on https://[yourname].github.io/saihubot


Saihubot also provide Search skills, you can include it via `skillsFile: ['skills/saihubot-search.js']`

Check the [Search Demo](https://gasolin.github.io/saihubot/samples/search).

### :mag_right: Google Search skill:

```
me: g saihubot
bot: Search saihubot via Google
me: google saihubot
bot: Search saihubot via Google
me: search saihubot
bot: Search saihubot via Google
```

## Want to learn more?

Check the [docs](https://github.com/gasolin/saihubot/tree/gh-pages/docs) section.

## What Saihu means?

Saihu(`師傅`) means `master` in Taiwanese, which people used to call the artisans.
Saihubot's origin goal is to provide a code sample that makes learning [hubot](https://github.com/github/hubot/) and its ES6 variant [Webbybot](https://github.com/gasolin/webbybot/) easier; then I found Saihu is a great way to embed bot into anywhere browser can live with.

## License

Saihubot use MIT License

## ChangeLog

Check [ChangeLog](CHANGELOG.md)
