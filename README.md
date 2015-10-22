[pagePiling.js](https://github.com/alvarotrigo/pagePiling.js) Angular Directive
====

[![Code Climate](https://codeclimate.com/github/hellsan631/angular-pagepiling.js/badges/gpa.svg)](https://codeclimate.com/github/hellsan631/angular-pagepiling.js)
[![License](http://img.shields.io/badge/License-MIT-blue.svg)](http://opensource.org/licenses/MIT)


A simple [pagePiling.js](https://github.com/alvarotrigo/pagePiling.js) directive that allows
the use of pagePiling.js within an angular app. There are several issues when using the the vanilla jquery
version with an angular application that uses an internal router for displaying pages, and this repo
aims to solve them.

[Example](http://hellsan631.github.io/angular-pagepiling.js/) - [Source](https://github.com/hellsan631/angular-pagepiling.js/tree/gh-pages)

### Installation

Install via __Download__,

__Bower__
```bash
bower install --save angular-pagepiling.js
```

or __NPM__
```bash
npm install --save angular-pagepiling.js
```

====

Make sure to include both this directive and fullPage.js. This package isn't a replacement.

_index.html_
```html
<!-- Included dependancies:
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.5/angular.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="vendor/pagepiling.js/jquery.pagePiling.min.js"></script>
-->

<script src="vendor/angular-fullpage.js/angular-pagepiling.min.js"></script>
```

In your angular modules, include the Directive

_app.module.js_
```js
angular
  .module('app', [
    'pagePiling.js'
    ...
  ]);
```

Add your standard [pagePiling.js structure](https://github.com/alvarotrigo/pagePiling.js/#required-html-structure),
along with the attribute full-page

_someView.html_
```html
<div page-piling>
    <div class="section">Some section</div>
    <div class="section">Some section</div>
    <div class="section">Some section</div>
    <div class="section">Some section</div>
</div>
```

### Options

If you'd like to add some options to the fullpage, just include them in an object in your controller, and add the options attribute to your html.

_someView.html_
```js
function MainController(){

  var _this = this;

  _this.mainOptions = {
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
    navigation: true,
    navigationPosition: 'right'
    scrollingSpeed: 1000
  }

}
```

_someView.html_
```html
<div page-piling options="vm.someOptions">
    <div class="section">Some section</div>
    <div class="section">Some section</div>
    <div class="section">Some section</div>
</div>
```

[You can even make them dynamic.](http://hellsan631.github.io/angular-paegpiling.js/#/dynamic)
