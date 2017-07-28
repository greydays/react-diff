# react-diff

Highlights differences between two strings, uses the [diff](https://www.npmjs.com/package/diff) module

## Installation

```
npm install react-diff
```

## Demo

http://cezary.github.io/react-diff/

## Example

```javascript
import React from 'react';
import Diff from 'react-diff';

const Component = () => {
  return (
    <Diff inputA="gogol" inputB="google" type="chars" />
  );
};
```

## License

MIT
