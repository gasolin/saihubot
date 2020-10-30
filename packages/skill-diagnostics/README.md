# Saihubot-skill-diagnostics

Saihubot-skill-diagnostics provide 3 default skills: `ping`, `time`, `echo` that works for HTML and Command Line.

## Install

```sh
npm install saihubot-skill-diagnostics
```

(in html)

```js
import { skills } from 'saihubot-skill-diagnostics/index.js'
```

(in module)

```js
import { skills } from 'saihubot-skill-diagnostics'
```

then you can include via

```js
new SaihuBot({
  ...
  skills: [...skills],
});
```

Or if you want import one of the skill from the skills set

```js
import { skillPing } from 'saihubot-skill-diagnostics'
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

### :clock2: Current Time skill:

```
me: time
bot: Device time is Fri Aug 05 2016 21:22:11 GMT+0800 (CST)
```
