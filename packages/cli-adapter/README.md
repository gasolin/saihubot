# saihubot-cli-adaper

Saihubot basic Command Line Adapter and addons

Includes

* Adapter: saihubot-cli-adapter.js
* Addons: saihubot-cli-addon-search.js (search), saihubot-cli-addon-dialog.js (confirm dialog),

## Features

* Written with react-ink Javascript, compatible with modern browsers
* Each message can be customized with any HTML elements
* Reference chat UI style is included

## Bootstrap Command Line Saihubot

`npm install saihubot saihubot-cli-adapter saihubot-skill-diagnostics`

Then construct the bot in file.

```js
import SaihuBot from 'saihubot/dist/saihubot';
import {cliAdapter} from 'saihubot-cli-adapter';
import {skills} from 'saihubot-skill-diagnostics';

new SaihuBot({
  adapter: cliAdapter,
  skills: [...skills], // equip skills
  debug: true, // show debug messages
});
```
