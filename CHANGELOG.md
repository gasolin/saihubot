## 0.28

Break Change
- [saihubot-html-adapter] rename `unsafe_sendHTML` to `unsafe_sendComponent`
- [saihubot] turn `welcomeMessage` to a text message

Feature
- [saihubot] add `renderMessage, renderComponent, userAlias, botAlias` in config
- [saihubot-html-adapter] support render user/bot message with provided function (renderMessage, renderComponent)

Refactor
- [saihubot] rename internal param `myAlias` to `userAlias`.
- [saihubot] decouple role and alias. Current support roles are 'bot' and 'user'

## 0.27 2020/11/2

Feature
- [saihubot-html-addons-search] wrap window.fetch as addons.fetch API
- [saihubot-cli-addons-search] wrap node_fetch as addons.fetch API
- Instead of import specific addon or skill, can do `import {addons, skills} from 'saihubot-cli-adapter'`.

Fix
- [cli-adapter] fix packages dependencies
- [cli-adapter] render last pushed element instead of the first pushed element
- [saihu] fix today skill in loop

## 0.26.1 2020/11/1

Break Change
- remove deprecated `sendHTML` method from saihubot core
- rename `htmlAdapter.sendHTML` to `htmlAdapter.unsafe_sendHTML`

Feature
- add `cliAdapter.unsafe_sendComponent` method to render react component as the message
- add `saihubot-cli-addon-skill-help` to saihubot-cli-adapter
- `cli` package can work alone out of lerna (copy the `cli` and it will work independently)

Enhancement
- update readme
- add npm keywords for saihu cli
- update sahu cli bin configuration

Fix
- [cli-adapter] support excape via `Q` or `ESC` key in addons.confirm (saihubot-cli-addon-dialog)
- [saihubot] fix wildcard check in cli

## 0.23 2020/10/30

Break Change

- rename modules as `saihubot-[adapter]-[addon|skill]-[name]` proposed in #31, and re-organize related projects as a monorepo
- define requirements with syntax proposed in #17
- remove `addonsFile`, `skillsFile` prop from Saihubot core

Feature
- besides current release modules `saihu` (command line sample), `saihubot` (core), new modules `saihubot-html-adapter`, `saihubot-cli-adapter`, `saihubot-skill-search`, `saihubot-skill-diagnostics` join the family to make construct your saihubot easier.

Enhancement
- list modules table
- show related package repo in npm instead of the main project

## 0.17 2020/10/27

Break Change
* turn to es6 module based
* move localforageBrain from addons/ to adapters/
* name skills and addons with camelCase
* add `addons` prop in constructor to import addons dynamically
* add `addonsFile` prop in constructor to import addons dynamically through js module.

Feature
* add cli adapter based on React Ink https://github.com/gasolin/saihubot-cli
* ship with commonjs module (can import from `saihubot/dist`)
* add build and prepublish script

Enhancements
* add `debug` option in saihubot constructor
* update README and docs
* can trigger test site via `npm start` command

## 0.12 2020/10/16

Break Change
* add `skills` prop in constructor to import skills dynamically
* add `skillsFile` prop in constructor to import skills dynamically through js module.

Feature
* distill addon-search to easier create a search type skill.

Enhancements
* add jsDoc
* Click the search link will open in the new browser tab.

## 0.11 2020/10/2

Break Change
* rename `addon/saihubot-dialog` to `addon/saihubot-addon-dialog`
* change confirm dialog addon syntax

Feature
* auto lint check via github actions
* new addon `addon/saihubot-addon-card` to show an widget area that able to control with id.

Enhancements

* able to parse inputs in confirm dialog
* able to parse dialog specific strings in pseudo session

## 0.10 2020/9/25

* use es6 syntax and clean up saihubot.js
* deprecated `sendHTML`, prefer call from `adapter.sendHTML`
* now call `plugins` as `skills`
* add readme to explain the `skills` and `addons`

## 0.9 2017/2/18

* make index.html as a full feature showcase
* dialog with button selection
* help plugin with description

## 0.8 2017/2/3

* add swappable brain
* provide `saihubot-brain-localforage` plugin with [sample](http://gasolin.idv.tw/saihubot/samples/brain.html)

## 0.7 2017/1/27

* add reference chat UI style
* make sure the last message always scroll into view

## 0.6 2017/1/26

* provide run, close, send, render function by swappable adapter

## 0.5 2017/1/25

* structured plugins and demo pages
* support config
* changed catchAll API
* support multiple `no command found` responses

## 0.4 2016/8/24

* return matched result for message instead of the origin string
* add google analytics
* add search plugin

## 0.3 2016/8/17

* rename from HuohuBot to Saihubot
* turn Saihubot to constructor
* separate saihubot-dialog.js from addon

## 0.2 2016/8/6

* change to robot.send method in plugin
* add plugin and addon examples

## 0.1 2016/8/5

* init version


# Naming convention

Milestones are named after species in Taiwan https://zh.wikipedia.org/wiki/%E8%87%BA%E7%81%A3%E5%8E%9F%E4%BD%8F%E6%B0%91%E6%97%8F
