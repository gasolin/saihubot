## 0.38

Refactor
- update packages deps

## 0.37

Feature
- add react-redux-adapter module
- add workable saihubot-react demo project

Fix
- README adapters npm version icon

Refactor
- update packages deps
- [saihubot-react] upgrade to tailwind 2

## 0.36 2020/12/11

Fix
- support open browser on Windows

## 0.35 2020/11/30

Break Change
- Move i18n from `saihubot` core to `saihubot-cli-adapter`

Enhancement
- [saihubot-cli-skill-qrcode] revert the color, and double the qrcode size

Refactor
- update deps
- move embed css to index.css
- (WIP)[saihubot-react] add default UI

## 0.34 2020/11/21

Feature
- [saihubot] optional i18n support
- [saihubot-cli-adapter] add addonExec to run local command
- [saihubot-skill-search] search with google trends

Enhancement
- [saihubot-cli-adapter] change search link text color to cyan
- [saihubot-skill-search] separate search and dev search skills

Fix
- [saihubot-skill-search] fix saihubot-skill-dev-search availablity on package

## 0.33 2020/11/17

Feature
- [saihu] add qrcode skill
- [saihubot-cli-skill-qrcode] add cli qrcode skill

## 0.30 2020/11/8

Break Change
- [saihubot] expose `sendComponent` method from adapter
- [saihubot-html-adapter][saihubot-cli-adapter] rename `unsafe_sendComponent` to `sendComponent`
- renname package `core` to `saihubot`

Feature
- [saihubot-skill-serch] add Cheat.sh search

Enhancement
- [saihubot] build-in the adapter/addon/skill dependency check

Fix
- [saihubot-cli-adapter] fix the send/sendComponent
- [saihubot-html] fix web UI send button of mobile layout
- [saihubot-html-adapter] fix addonFetch in saihubot-html-addon-search

## 0.29 2020/11/6

Break Change
- [saihubot] turn `welcomeMessage` to a text message
- [saihubot-html-adapter] rename `unsafe_sendHTML` to `unsafe_sendComponent`

Feature
- More Polished Chat UI, credit https://tailwindcomponents.com/component/chat
- [saihubot] add `renderMessage, renderComponent, userAlias, botAlias` in config
- [saihubot-html-adapter] support render user/# bot message with provided function (renderMessage, renderComponent)
- [saihubot-html-adapter] [saihubot-html-adapter] add QRCode skill saihubot-html-skill-qrcode.js

Refactor
- [saihubot] rename internal param `myAlias` to `userAlias`.
- [saihubot] decouple role and alias. Current support roles are 'bot' and 'user'
- [saihubot-html-adapter][saihubot-cli-adapter] refactor `send` and `unsafe_sendComponent` with defaultRenderMessage and defaultRenderComponent
- [saihu] update packages

Fix
- [saihubot-html-adapter] fix typo in addon-dialog
- [saihubot-html-adapter] show correct message element in addon-search
- [saihubot-html-adapter] fix addon-card element make history position incorrect

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
