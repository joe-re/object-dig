# object-dig

[![Build Status](https://travis-ci.org/joe-re/object-dig.svg?branch=master)](https://travis-ci.org/joe-re/object-dig)

This allow you to use method like Ruby's hash#dig in JavaScript.

> http://ruby-doc.org/core-2.3.0_preview1/Hash.html#method-i-dig
>> Retrieves the value object corresponding to the each key objects repeatedly.

# Install

```
$ npm install --save object-dig
```

# Usage

```js
var dig = require('object-dig');

var object = { a: { b: { c: 'c' } } };

dig(object, 'a', 'b');
// => { c: 'c' }

dig(object, 'a', 'b', 'c');
// => 'c'

dig(object, 'a', 'unknownProp', 'c');
// =>undefined
```

# License

MIT © [joe-re](https://github.com/joe-re)
