# Saihubot

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

:robot: Frontend Framework to build :speech_balloon: message/chat bots ops in the :globe_with_meridians: **Browser**, no server required.

| Module  | Version | Description |
| --------|---------|-------------|
| saihubot | [npm-image] [npm-url] | core module|
| saihu | [saihu-image] [saihu-url] | Command line Sample |
| sample | [Online Demo](https://gasolin.github.io/saihubot/) | |

You can add new skills to bot via `skills` and extend its ability via `addons`. All with plain javascript. :clap:

The saihubot skills currently work for :globe_with_meridians: Browser and [Command line](https://github.com/gasolin/saihubot-cli).

Saihubot's API is inspired by [hubot](https://github.com/github/hubot/)'s API, so a developer who has learned `hubot-plugins` could learn `saihu-skills` very quickly. :zap:

Check [Online Demo](https://gasolin.github.io/saihubot/)

## Features

* Chatbot works in your browser, without server setup.
* Written in plain Javascript, compatible with modern browsers
* Structure was inspired by [hubot](https://github.com/github/hubot/)
  * Regex based message matching
  * Could write adapter to fully cooperate with your web UI
  * Could swap brain to support different backends
  * Provide skills(pluginn) architecture that able to expand functions
  * Can extend bot functionality by import addons
* Tiny size, easy to learn (the init version has just 80 lines that bundle with three skills)
* Each message can be customized with any HTML elements
* Reference chat UI style is included
* Plugin callbacks are extremely flexible; You can control in-page elements, execute the local command, fetch remote data, trigger remote actions...

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

[npm-image]: https://badge.fury.io/js/saihubot.svg
[npm-url]: https://npmjs.org/package/saihubot
[saihu-image]: https://badge.fury.io/js/saihu.svg
[saihu-url]: https://npmjs.org/package/saihu
