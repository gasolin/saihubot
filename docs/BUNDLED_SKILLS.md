
Saihubot provide several default skills `ping`, `time`, `echo` that you can include via:

```js
new SaihuBot({
  ...
  skillsFile: ['skills/saihubot-diagnostics.js']
})
```

Or if you want import one of the skill from the skills set

```js
import { skills } from 'saihubot/skills/saihubot-diagnostics'
const [skillPing] = skills
new SaihuBot({
  ...
  skills: [skillPing],
})
```

### Ping skill

```
me: ping
bot: PONG
```

### :clock2: Time skill:

```
me: time
bot: Device time is Fri Aug 05 2016 21:22:11 GMT+0800 (CST)
```

### :loudspeaker: Echo skill:

```
me: echo Hello World!
bot: Hello World!
```

![Imgur](http://i.imgur.com/Ljjf0Fwl.png)


Saihubot also provide `Search` skills, you can include it via:

```js
new SaihuBot({
  ...
  addonsFile: ['addons/saihubot-addon-search.js'],
  skillsFile: ['skills/saihubot-search.js']
})
```

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
