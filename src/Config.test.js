import Config from './index';

const config = {
    foo: {
        bar: 'test'
    },
    plain: 'plain value',
    UPPER: 'uppercase',
    falsy: 0,
    nestedfalsy: {
        falsy: 0,
    },
    undef: undefined,
    nulled: null,
    falseString: 'false'
};

describe('Config init', () => {
    it('init() should set the passed config as config attribute', () => {
        Config.init({config});
        expect(Config.config).toBeTruthy();
    });

    it('init() should set an empty object if no options are passed, upperCase should be false by default', () => {
        Config.init();
        expect(Config.config).toEqual({});
        expect(Config.upperCase).toBe(false);
    });
});

test('Config list return all the config object', () => {
    Config.init({config});
    expect(Config.list()).toBe(config);
});

test('Key is searched as uppercase is upperCase flag is true', () => {
    Config.init({config, upperCase: true});
    expect(Config.get('upper')).toBe(config.UPPER);
});

describe('Config return the requested key', () => {
    beforeEach(() => {
        Config.init({
            config,
        })
    });

    it('should return the requested key at root level', () => {
        expect(Config.get('plain')).toBe(config.plain);
    });

    it('should return the requested nested key', () => {
        expect(Config.get('foo.bar')).toBe(config.foo.bar);
    });

    it('should return an object if the requested key has nested values', () => {
        const result = Config.get('foo');
        expect(result).toBe(config.foo);
        expect(typeof result).toBe('object');
    });

    it('should return undefined if the requested key is not found', () => {
        expect(Config.get('notFound')).toBe(undefined);
    });
});

describe('Config return false if the requested key is falsy', () => {
    beforeEach(() => {
        Config.init({
            config,
        })
    });

    it('should return false if requested key if 0', () => {
        expect(Config.get('falsy')).toBe(false);
    });

    it('should return false if requested key is null', () => {
        expect(Config.get('nulled')).toBe(false);
    });

    it('should return false if requested key is "false" as string', () => {
        expect(Config.get('falseString')).toBe(false);
    });

    it('should return false if requested nested key is 0', () => {
        expect(Config.get('nestedfalsy.falsy')).toBe(false);
    });
});