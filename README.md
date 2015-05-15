# trim-emoji

[![Build Status](http://img.shields.io/travis/Kikobeats/trim-emoji/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/trim-emoji)
[![Dependency status](http://img.shields.io/david/Kikobeats/trim-emoji.svg?style=flat-square)](https://david-dm.org/Kikobeats/trim-emoji)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/trim-emoji.svg?style=flat-square)](https://david-dm.org/Kikobeats/trim-emoji#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/trim-emoji.svg?style=flat-square)](https://www.npmjs.org/package/trim-emoji)
[![Gittip](http://img.shields.io/gittip/Kikobeats.svg?style=flat-square)](https://www.gittip.com/Kikobeats/)


> Deletes ':' from the begin and the end of an emoji shortcut.

## Install

```bash
npm install trim-emoji --save
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
bower install trim-emoji --save
```

and later link in your HTML:

```html
<script src="bower_components/trim-emoji/dist/trim-emoji.js"></script>
```

## Usage

```js
var trimEmoji = require('trim-emoji');
trimEmoji(':heart:') // => 'heart'
```

## Related

* [emojis-list](https://github.com/Kikobeats/emojis-list) – Complete list of standard emojis.
* [emojis-keywords](https://github.com/Kikobeats/emojis-keywords) – Complete list of am emoji shortcuts.
* [emojis-unicode](https://github.com/Kikobeats/emojis-unicode) – Complete list of standard Unicode codes that represent emojis.
* [is-standard-emoji](https://github.com/kikobeats/is-standard-emoji) – Simply way to check if a emoji is a standard emoji. 
* [is-emoji-keyword](https://github.com/Kikobeats/is-emoji-keyword) – Check if a word is a emoji shortcut.

## License

MIT © [Kiko Beats](http://www.kikobeats.com)
