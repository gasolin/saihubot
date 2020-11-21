# Saihubot-skill-search

Saihubot-skill-search provide a range of search skills that works for HTML and Command Line.

`import {searchSkills} from 'saihubot-skill-search';`

* Duckduckgo (duckduckgo|duck [term])
* Wikipedia (wikipedia|w|wiki [term])
* Google (google|g [term])
* Google Translate (translate|tr|trans|gt [term])
* Google Images (images|image|gi [term])
* Google Maps (maps|map|gm [term])
* Google Trends (trends [term])
* Youtube (youtube|yt [term])
* Twitter (twitter [term])

`import {devSkills} from 'saihubot-skill-search';`

* Github (github|gh [term])
* MDN (mdn [term])
* NPM (npm [term])
* Stackoverflow (stackoverflow|stack|so [term])
* Wolfram (wolfram|wolf|wo [term])
* Cheat.sh (cheat |cheatsh |cheat.sh [term])

## Install

```sh
npm install saihubot-addon-search saihubot-skill-search
```

(in html)

```js
import htmlAdapter from 'node_modules/saihubot-html-adapter/saihubot-html-adapter.js'
import addonSearch from 'node_modules/saihubot-html-adapter/saihubot-html-addon-search.js'
import { skills } from 'node_modules/saihubot-skill-search/index.js'
```

(in module)

```js
import { skills } from 'saihubot-skill-search'
```

that you can include `skills` via

```js
new SaihuBot({
  skills: [...skills],
});
```

Of course you can only import certain search skills into your bot

```js
import { skillSearchGoogle } from 'saihubot-skill-search'

new SaihuBot({
  skills: [skillSearchGoogle],
});
```

## Usage

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

### Wikipedia skill:

```
me: wiki saihubot
bot: Search saihubot via Wikipedia
me: wikipedia saihubot
bot: Search saihubot via Wikipedia
```

### Google Translate skill

```
me: translate hello
bot: Translate hello via Google Translate
me: tr saihubot
bot: Translate hello via Google Translate
```
