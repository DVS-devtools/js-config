# js-config

## [!!!] The source code of this package is on [https://github.com/docomodigital/js-utils](https://github.com/docomodigital/js-utils), this repository will be removed asap

[![Build Status](https://travis-ci.com/docomodigital/js-config.svg?branch=master)](https://travis-ci.com/docomodigital/js-config)
[![Coverage Status](https://coveralls.io/repos/github/docomodigital/js-config/badge.svg?branch=master)](https://coveralls.io/github/docomodigital/js-config?branch=master)
[![npm version](https://badge.fury.io/js/%40docomodigital%2Fjs-config.svg)](https://badge.fury.io/js/%40docomodigital%2Fjs-config)
[![Greenkeeper badge](https://badges.greenkeeper.io/docomodigital/js-config.svg)](https://greenkeeper.io/)

Simple library to get config value from a given object, supports nested values.

## Usage
```javascript
import Config from '@docomodigital/js-config';

const configObject = {
    host: 'https://example.com',
    api: {
        version: 'v1',
        routes: {}
    },
    foo: {
        bar: 'test'
    }
}

Config.init({
    config: configObject,
});

Config.get('api.version'); // 'v1'
Config.get('foo'); // { bar: 'test' }
```

If Config is initialized with the flag `upperCase: true`, the keys are searched in uppercase:
```javascript
Config.init({
    config: { KEY: 'value' },
    upperCase: true
});

Config.get('key'); // 'value'
```


## Installation

### NPM
```bash
npm install --save @docomodigital/js-config
```

## Documentation

To read documentation, go to:

[http://docomodigital.github.io/js-config/latest](http://docomodigital.github.io/js-config/latest)

or run the following command inside the js-config folder: 
```bash
npm run doc:open
```
