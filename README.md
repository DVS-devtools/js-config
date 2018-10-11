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

### Api

#### init(options: {config: any, uppercase: boolean})
Initialize the Config class
```javascript
Config.init({
    config: configObject,
    upperCase: false,
})
```

### get(key: string)
Search the given key (supports dot notation), returns the value if found, undefined if not found, false if the value is a false value `('', 0, '0', null, 'null', false, 'false')`
```javascript
Config.get('foo.bar');
```

### list()
Returns the entire config object