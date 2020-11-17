# Saihubot-cli-skill-qrcode

Saihubot-cli-skill-qrcode provide QRcode skill that works for Command Line.

## Install

```sh
npm install saihubot-cli-skill-qrcode
```

```js
import { skillQRCode } from 'saihubot-cli-skill-qrcode'
```

then you can include via

```js
new SaihuBot({
  ...
  skills: [skillQRCode],
});
```


### Sample

```
saihu qrcode https://github.com/gasolin/saihubot
```

![Imgur](https://i.imgur.com/x7A6mjo.png)
