<div align="center">

<a href="https://ksc-fe.github.io/kpc/" rel="nofollow">
    <img src="/site/src/imgs/logo.png" alt="LOGO" width="150">
</a>

<p></p>

[![Build Status](https://travis-ci.org/ksc-fe/kpc.svg?branch=master)](https://travis-ci.org/ksc-fe/kpc)
[![Codecov](https://codecov.io/gh/ksc-fe/kpc/branch/master/graphs/badge.svg)](https://codecov.io/gh/ksc-fe/kpc/branch/master)
[![gzip size: js](http://img.badgesize.io/https://cdn.jsdelivr.net/npm/kpc/dist/kpc.min.js?compression=gzip&label=gzip%20size:%20js)](https://cdn.jsdelivr.net/npm/kpc/dist/)
[![gzip size: css](http://img.badgesize.io/https://cdn.jsdelivr.net/npm/kpc/dist/kpc.css?compression=gzip&label=gzip%20size:%20css)](https://cdn.jsdelivr.net/npm/kpc/dist/)

[![npm](https://img.shields.io/npm/dm/kpc.svg)](https://www.npmjs.com/package/kpc)
[![npm](https://img.shields.io/npm/v/kpc.svg)](https://www.npmjs.com/package/kpc)

</div>

English | [简体中文](./README-zh_CN.md)

## Inspiration

With the development of business and teams in our companies, it is difficult to regular others to use the same web framework for there are all kinds of web components in front-end market, or say it is not neccessary. However, it is neccesary to uniform the style of design and interaction in different production lines in whole company. As we all know, the main web frameworks in single page applications development are based in React/Vue/Angular. Using different frameworks also have some repeated works, and increase the cost of maintainance because of that. On the other hand, it is not easy to ensure that each library and interation have common style with others, even if we are according to the same UI designed documents in our developing. That is Why we create the KPC. The meaning of existence of the KPC: Using the same web componets which can match different frameworks, it makes our production in uniform style in different web framework(write once, run anywhere).   

## Features 

* Support multiple frameworks: [Intact][1] / [Vue][2] / [React][3] / [Angular][4].
* Completely custom theme system.
* 360° locate popup layer.
* Declarative form validation.
* Excellent [documents](https://ksc-fe.github.io/kpc/) and unit tests.

## Documentation 
You can find the KPC documentation [on the website](https://design.ksyun.com/).  
Check out the [Getting Started](https://design.ksyun.com/docs/getting-started/) page for a quick overview.

The documentation is divided into several sections:

* [Design Language](https://design.ksyun.com/docs/design/language/)
* [Components](https://design.ksyun.com/docs/getting-started/)
* [KPC Main Concepts](https://design.ksyun.com/docs/blogs/design/)
* [Cutomize Theme](https://kpc-theme.ksyun.com/)


## Browsers Support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## Vue

### Installation

```shell
npm install kpc-vue --save
```

### Usage 

```js
<template>
    <Button>Hello</Button>
</template>
<script>
import {Button} from 'kpc';

export default {
    components: {
        Button
    }
}
</script>
```

## React

### Installation 

```shell
npm install kpc-react --save
```

### Usage 

```jsx
import React from 'react';
import {Button} from 'kpc';

class App extends React.Component {
    render() {
        return <Button>Hello</Button>
    }
}
```

## Intact

### Installation 

```shell
npm install kpc --save
```

### Usage 

```js
import {Button} from 'kpc';

<Button>Hello</Button>
```

## Angular

Read [more][5]

### Installation 

```shell
npm install kpc-angular -S
```

### Configure `webpack.config.js`

if your project initialized by Angular CLI, you need use `@angular-builders/custom-webapck` to configure webpack.

```js
const path = require('path');

module.exports = function(config) {
  config.module.rules.find(rule => {
    if (rule.test.toString() === '/\\.css$/') {
      rule.exclude.push(path.resolve(__dirname, 'node_modules/kpc-angular'));
      return true;
    }
  });

  return config;
};
```

### Usage 

`src/app/app.module.ts`

```ts
import { KpcBrowserModule, KpcModule } from 'kpc-angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    KpcBrowserModule,
    AppRoutingModule,
    KpcModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
```

```ts
import { Component, ViewEncapsulation } from '@angular/core';
import { MessageComponent } from 'kpc-angular';

@Component({
  selector: 'app-root',
  template: `
    <k-button type="primary" (click)="onClick()">Hello World</k-button>
  `,
  style: `
    .k-button {
      margin: 10px;
    }
  `,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  onClick() {
    MessageComponent.success('Welcome to kpc world!');
  }
}
```

## Immediate Feedback
Welcome to join us by QQ. Group Number: 529739732 

[![KPC Official QQ Group](https://pub.idqqimg.com/wpa/images/group.png)](https://shang.qq.com/wpa/qunwpa?idkey=a9ef1aa7e7befbd3eaa61a3f2c3f7ab17436dbd317f6d02c9a643e0049e52cad)

![QQ](/site/src/imgs/qqqun.png)


## Links 

* [Intact MVVM Framework][1]
* [Vdt Template Engine](http://javey.github.io/vdt.js/)
* [Intact-Vue Compatibilty Layer](https://github.com/Javey/intact-vue)
* [Intact-React Compatibilty Layer](https://github.com/ksc-fe/intact-react)
* [Intact-Angular Compatibilty Layer](https://github.com/ksc-fe/intact-angular)

## Develop 

> Require `node@10` and `npm@6.9` or above.

```shell
git clone https://github.com/ksc-fe/kpc.git
cd kpc
npm install
npm run dev:doc

# test 
npm run test
# update snapshots 
npm run snapshot
# deploy documents
npm run deploy:doc
# release new version 
npm run release
```

## License 

MIT


[1]: http://javey.github.io/intact/
[2]: https://vuejs.org/
[3]: https://reactjs.org/
[4]: https://angular.io/
[5]: https://design.ksyun.com/docs/angular/
