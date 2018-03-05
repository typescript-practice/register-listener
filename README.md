# tp-register-listener

[![Build Status](https://www.travis-ci.org/typescript-practice/register-listener.svg?branch=master)](https://www.travis-ci.org/typescript-practice/register-listener)
[![Coverage Status](https://coveralls.io/repos/github/typescript-practice/register-listener/badge.svg?branch=master)](https://coveralls.io/github/typescript-practice/register-listener?branch=master)
[![npm version](https://img.shields.io/npm/v/tp-register-listener.svg?style=flat-square)](https://www.npmjs.com/package/tp-register-listener)
[![monthly downloads](https://img.shields.io/npm/dm/tp-register-listener.svg?style=flat-square)](https://www.npmjs.com/package/tp-register-listener)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![UNPKG](https://img.shields.io/badge/unpkg.com--green.svg)](https://unpkg.com/tp-register-listener@latest/dist/register-listener.umd.js)
[![liense](https://img.shields.io/github/license/typescript-practice/register-listener.svg)]()

## Intro

Built to use modern event listener options register a listener and return a method to remove the listener.

## Example

```js
const handler = () => {
  // do something
}
const body = document.body
const unReg = registerListener(body, 'click', handler)
// remove this listener
unReg()
```

## Install

[![NPM Badge](https://nodei.co/npm/tp-register-listener.png?downloads=true)](https://www.npmjs.com/package/tp-register-listener)

 
## API

### registerListener(ele, eventName, callback, opts, unRegisterListenersCollection)

Returns a single config value, given a key. 

* `@param {HTMLElement} ele ` - Elements of the binding event
* `@param {string} eventName ` - The event name
* `@param {EventListener} callback ` - The event listener
* `@param {EventListenerOptions} [opts={}] ` - The event listener options
* `@param {Function[]} [unRegisterListenersCollection] ` - The collections of unRegister listeners.

```js
const unRegisterListenersCollection = []

const handler = () => {
  // empty
}
const ele: HTMLElement = document.body
registerListener(ele, 'click', handler, {}, unRegisterListenersCollection)
registerListener(ele, 'click', handler, {}, unRegisterListenersCollection)
registerListener(ele, 'click', handler, {}, unRegisterListenersCollection)

// un register all
unRegisterListenersCollection.forEach(fn => fn())
```

### registerListener.uiEvtOpts

* `@return {boolean}` - Return true when the envirmonent support "passive" `EventListenerOptions `

## Development

 - `npm t`: Run test suite
 - `npm start`: Run `npm run build` in watch mode
 - `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
 - `npm run test:prod`: Run linting and generate coverage
 - `npm run build`: Generate bundles and typings, create docs
 - `npm run lint`: Lints code
 - `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)


## License

MIT
