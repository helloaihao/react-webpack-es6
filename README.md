# react-webpack-es6 [![build status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]

[travis-image]: https://travis-ci.org/helloaihao/react-webpack-es6.svg?style=flat-square
[travis-url]: https://travis-ci.org/helloaihao/react-webpack-es6
[coveralls-image]: https://coveralls.io/repos/github/helloaihao/react-webpack-es6/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/helloaihao/react-webpack-es6?branch=master

### 自己搭环境碰到的各种坑


### 热替换

最开始看网上的资料都是 `react-hot-loader` ， 跟着资料搭怎么也搭不对，直到无意中发现了 [https://twitter.com/dan_abramov/status/645595855475613697](https://twitter.com/dan_abramov/status/645595855475613697)
 
 **This Project Is Deprecated** Σ( ° △ °|||)︴

作者已经不维护这个项目， 直接换到了 `react-transform-boilerplate` 。。。。 然后跟着这个弄终于成功。。。

2016.6.1更新： 最近去看，发现 README 上又写着几个大字

**This Project Is Deprecated** ヾ(｡｀Д´｡)

我选择死亡。。。。

### 测试

选择使用 `mocha` 框架测试， 用 es5 写的时候没问题， 用 es6 写后再测， 出现以下错误：

```
locals[0] does not appear to be a `module` object with Hot Module replacement API enabled. You should disable react-transform-hmr in production by using `env` section in Babel configuration. 
```

发现应该与 .babelrc 有关:

```
{
  "presets": ["react", "es2015"],
  "env": {
    "development": {
      "presets": ["react-hmre"]
    },
  }
}
```

一番波折后找到 [https://babeljs.io/docs/usage/babelrc/#env-option](https://babeljs.io/docs/usage/babelrc/#env-option)

> The env key will be taken from process.env.BABEL_ENV, when this is not available then it uses process.env.NODE_ENV if even that is not available then it defaults to "development".

```
You can set this environment variable with the following:

Unix

# at the start of a command
$ BABEL_ENV=production YOUR_COMMAND_HERE

# or as a separate command
$ NODE_ENV=production
$ YOUR_COMMAND_HERE

Windows

$ SET BABEL_ENV=production
$ YOUR_COMMAND_HERE
```

我是在 win 下开发，照上面设置后成功。
不过还没完， 在提交到 `Travis CI` 后发现 Unix 的设置不对， 又是一番折腾， 最后改为：

```
export NODE_ENV=dev
```


### 代码覆盖率

使用 `istanbul` 来测试， 和 `mocha` 一样， es5 下没问题， 到了 es6 下出现：

```
No coverage information was collected, exit without writing coverage information
```

又是一番折腾，找到了[http://stackoverflow.com/questions/34538964/es6-react-istanbul-no-coverage-information-was-collected-exit-without-writing-c](http://stackoverflow.com/questions/34538964/es6-react-istanbul-no-coverage-information-was-collected-exit-without-writing-c)
和 [https://github.com/gotwarlost/istanbul/issues/496](https://github.com/gotwarlost/istanbul/issues/496), 最后选择升级 `istanbul@1.0.0-alpha.2` 解决。。。

### `defaultProps` 和 `propTypes`

根据资料设置这两个东西：


```
    static propTypes = {
        increment: React.PropTypes.number,
        color: React.PropTypes.oneOf(['pink', 'black'])
    };

    static defaultProps = {
        color: 'black'
    };
```

运行时报错： ` Unexpected token ` , 一番折腾发现是babel转换问题，解决办法：在 `.babelrc` 中加入 `"optional": ["es7.classProperties"]`

想着应该搞定了，结果继续报错：

```
Module build failed: ReferenceError: [BABEL] react-webpack-es6\node_modules\webpack-hot-middleware\client.js: Using removed Babel 5 option: react-webpack-es6\.babelrc.optional - Put the specific transforms you want in the `plugins` option
```


原来又是过时的东西。。。 o(︶︿︶)o

又是一番折腾，找到了[https://babeljs.io/docs/plugins/transform-class-properties/](https://babeljs.io/docs/plugins/transform-class-properties/) ： 

```
Installation

$ npm install babel-plugin-transform-class-properties

Usage

Add the following line to your .babelrc file:

{
  "plugins": ["transform-class-properties"]
}
```

终于搞定~  o(\*￣︶￣\*)o

### 未完待续。。。。