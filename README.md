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

and you can give function object to dig.
Function object's argument is result of just before evaluating.

```js
dig(object, 'a', 'b', 'c', (val) => `${val} was changed`);
// => 'c was changed'

dig(object, 'a', 'b', 'c', (val) => `${val} was changed`, (val) => `${val} more`);
// => 'c was changed more'
```

# License

MIT © [joe-re](https://github.com/joe-re)
