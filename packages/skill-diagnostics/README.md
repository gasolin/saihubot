# Saihubot-skill-diagnostics

Saihubot-skill-diagnostics provide 3 default skills: `ping`, `time`, `echo` that works for HTML and Command Line.

## Usage

(in html)

```js
import { skills } from 'saihubot-skill-diagnostics/saihubot-skill-diagnostics.js'
```

(in module)

```js
import { skills } from 'saihubot-skill-diagnostics'
```

that you can include via

```js
new SaihuBot({
  skills: [...skills],
});
```

### Ping skill:

```
me: ping
bot: PONG
```

### :loudspeaker: Echo skill:

```
me: echo Hello World!
bot: Hello World!
```

![Imgur](http://i.imgur.com/Ljjf0Fwl.png)

### :clock2: Time skill:

```
me: time
bot: Device time is Fri Aug 05 2016 21:22:11 GMT+0800 (CST)
```
