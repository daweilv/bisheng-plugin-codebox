# bisheng-plugin-codebox

This plugin is modified from [bisheng-plugin-react](https://github.com/benjycui/bisheng/tree/master/packages/bisheng-plugin-react).

To convert JSX which is written in Markdown to React.Element and source code wrapped with a code box.

## Usage

Install:

```bash
npm i --save bisheng-plugin-codebox
```

Add 'bisheng-plugin-codebox to `bisehng.config.js`'s plugins.

```js
module.exports = {
  plugins: ['bisheng-plugin-react?lang=jsx'],
};
```

## API

### lang: String

> default: 'react-component'

### babelConfig: Object

> default:
> {
>   presets: [
>     'react',
>     ['env', {
>       targets: {
>         browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
>       },
>     }],
>   ],
>   plugins: [
>     'transform-class-properties',
>     'transform-object-rest-spread',
>   ],
> }

### noreact: Boolean

> default: false

Whether to import `React` and `ReactDOM` automatically.

## License

MIT
