# saihubot-html-adaper

Saihubot basic HTML Adapter and addons

Includes

* Adapter: saihubot-html-adapter.js
* Brain: saihubot-html-brain-localforage.js
* Addons: saihubot-html-addon-search.js (search), saihubot-html-addon-dialog.js (confirm dialog), saihubot-html-addon-card.js (card)
* Skills: saihubot-html-skill-help.js (show **help**),
saihubot-html-skill-qrcode.js (render **qrcode**)

## Features

* Written in plain Javascript, compatible with modern browsers
* Each message can be customized with any HTML elements
* Reference chat UI style is included

## Bootstrap HTML Saihubot

`npm install saihubot saihubot-html-adapter saihubot-skill-diagnostics`

Then includes the `saihubot.js` in your HTML file with a div tag for message history and the input field:

```html
<body>
  <div id="history"></div>
  <input id="message"><button id="send">Send</button>
  <script type="module">
    import SaihuBot from './node_modules/saihubot-core/src/saihubot.js';
    import htmlAdapter from './node_modules/html-adapter/saihubot-html-adapter.js';
    import { skills } from './node_modules/saihubot-skill-diagnostics/index.js';

    document.addEventListener('DOMContentLoaded', function() {
      new SaihuBot({
        adapter: htmlAdapter,
        skills,
      });
    });
  </script>
</body>
```

The script is used to bootstrap the Saihubot.

```js
new SaihuBot({});
```

Wrap that script in `DOMContentLoaded` event to make sure contents are loaded before running scripts.

You can pass some parameters into it to quickly customize the bot.
