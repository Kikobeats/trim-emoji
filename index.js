'use strict';

module.exports = function(emoji) {
  var emoji, firstChar, lastChar;
  firstChar = emoji.charAt(0);
  lastChar = emoji.charAt(emoji.length - 1);
  if ((firstChar === lastChar) && (firstChar === ':')) return emoji.split(':')[1];
  return emoji;
}
