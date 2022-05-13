## rndm-letter.js

Randomly letter change effect library

### Install

**NPM**

``` bash
npm install rndm-letter.js --save

# or
yarn add rndm-letter.js
```

### Usage

``` html
<p>HELLO! I AM ALVIN</p>
```

``` javascript
import { RandomLetter } from 'rndm-letter'

// Symbols are optional
const symbols = ['%', '@', '&', '#', '?', '$', '*', '1', '0'] // Default symbols
const element = document.querySelector('p')
new RandomLetter(symbols, element)

```

![alt text](https://raw.githubusercontent.com/pylvin/rndm-letter.js/master/usage.gif)


## Changelog

[Go to Github Releases](https://github.com/pylvin/rndm-letter.js/releases)

## License

Copyright (c) 2022 Alvin Aliev. Released under
the [MIT License](https://github.com/pylvin/rndm-letter.js/blob/master/LICENSE).

Made with &#x2764; by [Alvin](https://github.com/pylvin).