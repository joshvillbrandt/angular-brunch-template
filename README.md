# angular-brunch-template

A template for an Angular app built with Brunch.

## Overview

This package is a template for a single-page application. A complete technology stack is implemented which produces a baseline for development, testing, and deployment of a single-page application. Specifically, this package makes use of:

* [AngularJS](http://angularjs.org) for dynamic single-page-apps
* [LESS](http://lesscss.org/) for programmatic CSS
* [Bootstrap](http://getbootstrap.com) for UI elements
* [Font Awesome](http://fortawesome.github.io/Font-Awesome/) for customizable vector icons
* [Marked](https://github.com/chjj/marked) for parsing Markdown
* [Brunch](http://brunch.io) for ultra-fast HTML5 builds
* [Jasmine](http://jasmine.github.io/) as a test framework
* [Karma](https://github.com/karma-runner/karma) for running tests
* [Apache](http://httpd.apache.org/) for serving static files

Note that this package makes use of SpaceX-private packages. Please do not distribute this outside of the internal network!

## Requirements

You'll need git and NodeJS to get up and running. The preferred NodeJS install method is using Node Version Manager aka NVM.

```bash
sudo apt-get install git
git clone https://github.com/creationix/nvm.git ~/.nvm
echo "source ~/.nvm/nvm.sh" >> ~/.bashrc
source ~/.bashrc
nvm install 0.10
nvm alias default 0.10
```

## Quick Start

To get started, checkout the code and launch brunch. Note that the initial install will take a minute to complete.

```bash
git clone https://github.com/joshvillbrandt/angular-brunch-template.git
npm install     # also runs bower install
npm start       # aka brunch watch --server --port 3333
```

Then navigate your browser to [http://localhost:3333](http://localhost:3333).

## Running the Tests

```
npm test
```

## Using Brunch

When used with `brunch w -s`, Brunch will monitor all files in the project and rebuild the app if anything changes. Brunch is configured to perform the following actions during for an initial build and when anything changes:

* Automatically grab dependencies with Bower
* Copy over `app/assets` to `_public/`
* Compile CSS/LESS to `_public/css/app.css`
* Compile JavaScript to `_public/js/app.js` and `_public/js/vendor.js`
* Compile HTML to `_public/js/templates.js` (Angular templateCache)
* Emit a signal to the front-end UI to automatically refresh

This directory layout should help you understand where Brunch pulls everything from:

```
_public/                  --> output folder for Brunch

app/                      --> app-specific files
  assets/
    index.html            --> main HTML file of the app
    *                     --> static assets copied to _public/ un-modified on build
  components/
    *                     --> reusable modules for the app
  scripts/
    app.js                --> main JavaScript file of the app
    controllers.js        --> angular controllers
    directives.js         --> angular directives
    filters.js            --> angular filters
    services.js           --> angular services
  styles/
    app.less              --> main CSS/LESS file of the app
    _override.less        --> styles that should be loaded after bootstrap
    _variables.less       --> bootstrap variables to be used during build
  templates/
    *.html                --> HTML templates combined into templates.js on build

bower_components/         --> contains vendor web packages populated by Bower

node_modules/             --> contains NodeJS modules populated by NPM

test/                     --> test source files and libraries
  app/
    scenarios.js          --> end-to-end specs
  unit/
    controllers.spec.js   --> specs for controllers
    directives.spec.js    --> specs for directives
    filters.spec.js       --> specs for filters
    services.spec.js      --> specs for services
  karma-e2e.conf.js       --> Karma config for end-to-end tests
  karma.conf.js           --> Karma config for unit tests

bower.json                --> Bower config
config.js                 --> Brunch config
package.json              --> Node config
```

The app directory layout is borrowed from the [Angular Seed](https://github.com/angular/angular-seed) project. This layout is suitable for small projects. [NG Boilerplate](http://joshdmiller.github.io/ng-boilerplate/) suggests a different layout directory for larger sites.

## Change Log

### v1.0.0 - 2015/09/24

* Initial release

## Todo

* Add test stuff
