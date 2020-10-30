# saihubot-html-adaper

Saihubot basic HTML Adapter and addons

Includes

* Adapter: saihubot-html-adapter.js
* Brain: saihubot-html-brain-localforage.js
* Addons: saihubot-addon-search.js (search), saihubot-addon-dialog.js (confirm dialog), saihubot-addon-card.js (card)
* Skill: saihubot-html-skill-help.js (show **help**)

### Bootstrap HTML Saihubot

Clone the project then includes the `saihubot.js` in your HTML file with a div tag for message history and the input field:

```html
<body>
  <div id="history"></div>
  <input id="message"><button id="send">Send</button>
  <script type="module">
    import SaihuBot from 'node_modules/saihubot-core/src/saihubot.js';
    import basicAdapter from 'node_modules/html-adapter/saihubot-html-adapter.js';
    import { skills } from 'node_modules/saihubot-skill-diagnostics/saihubot-skill-diagnostics.js';

    document.addEventListener('DOMContentLoaded', function() {
      new SaihuBot({
        adapter: basicAdapter,
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
