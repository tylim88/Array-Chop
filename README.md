# Array-Chop

[![npm](https://img.shields.io/npm/v/array-chop)](https://www.npmjs.com/package/array-chop) [![GitHub](https://img.shields.io/github/license/tylim88/array-chop)](https://github.com/tylim88/array-chop/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/tylim88/array-chop/pulls) [![tylim88](https://circleci.com/gh/tylim88/Array-Chop.svg?style=shield)](<[LINK](https://github.com/tylim88/array-chop#array-chop)>)

🐤 Split an array into arrays of a specific length.

✍️ Written in ES6️⃣ and compiled to ES5️⃣.

🦺 Tested.

⛲️ Out of box typescript support.

## Installation

```bash
npm i array-chop
```

## Usage

```js
import chopArray from 'array-chop'

chopArray(['a', 'b', 'c', 'd', 'e', 'f'], 2)
//=> [['a', 'b'], ['c', 'd'], ['e', 'f']]

chopArray(['a', 'b', 'c', 'd', 'e', 'f', 'foo'], 3)
//=> [['a', 'b', 'c'], ['d', 'e', 'f'], ['foo']]
```

## Acknowledgement

This code repository is replicate of [split-array](https://www.npmjs.com/package/split-array), the core logic, test remain exactly the same. The purpose of this package is to add Typescript support (after failing to contact the original author) and rewrite it with ES6 and Jest.
