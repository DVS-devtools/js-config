# js-config

Simple library to get config value from a given object, supports nested values.

### Installation
```bash
npm install --save @docomodigital/js-config
```
Or
```bash
yarn add @docomodigital/js-config
```

### Usage
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