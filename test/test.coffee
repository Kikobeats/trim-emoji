trimEmoji = require '..'
should    = require 'should'

describe 'Trim Emoji ::', ->
  it 'works', ->
    trimEmoji(':emoji:').should.be.equal('emoji')
