# saihubot-core

Core library of Saihubot

## HTML project

### Install

`npm install saihubot saihubot-html-adapter saihubot-skill-diagnostics`

### Import and Construct

The script is used to bootstrap the Saihubot.

```html
<script type="module">
  import SaihuBot from 'node_modules/saihubot/src/saihubot.js';
  import htmlAdapter from 'node_modules/saihubot-html-adapter/saihubot-html-adapter.js'
  import { skills } from 'saihubot-skill-diagnostics/index.js'

  new SaihuBot({
    adapter: htmlAdapter,
    skills: [...skills], // equip skills
    debug: true, // show debug messages
  });
</script>
```

## Commannd Line project (import via Module)

### Install

`npm install saihubot saihubot-cli-adapter saihubot-skill-diagnostics`

### Import and Construct

The script is used to bootstrap the Saihubot.

```js
import SaihuBot from 'saihubot/dist/saihubot';
import cliAdapter from 'saihubot-cli-adapter';
import { skills } from 'saihubot-skill-diagnostics';

new SaihuBot({
  adapter: cliAdapter,
  skills: [...skills], // equip skills
  debug: true, // show debug messages
});
```
