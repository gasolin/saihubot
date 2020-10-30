# saihubot-core

Core library of Saihubot

## HTML project

```html
<script type="module">
  import SaihuBot from 'node_modules/saihubot-core/src/saihubot.js';
</script>
```

## import via Module

```js
import SaihuBot from 'saihubot-core/dist/saihubot';
```

## Construct

The script is used to bootstrap the Saihubot.

```js
new SaihuBot({
  adapter: htmlAdapter, // or cliAdapter
  skills: [googleSearchSkill], // equip skill
  debug: true, // show debug messages
});
```
