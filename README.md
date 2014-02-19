Microsite Template for Silex
============================

[![Build Status](https://travis-ci.org/meandmymonkey/silex-template.png?branch=master)](https://travis-ci.org/meandmymonkey/silex-template)

A bootstrapped Silex/Javascript setup.
Targeted at small sites and for use as a JS playground.

The purpose of this template is mainly to provide preconfigured Javascript,
Less, and Testing toolchains along with a basic Silex/Twig setup. While you can easily
remove, add, or modify individual features, it may make sense to take a look at
[other approaches](http://lyrixx.github.io/Silex-Kitchen-Edition/) that are more
focused on Silex itself if you are not planning to use at least some of these tools.

The main components are:

- [Silex](http://silex.sensiolabs.org/) to tie everything together and to provide [Twig](http://twig.sensiolabs.org/) support.
- [gulp.js](http://gulpjs.com/) as a JS build system
- [browserify](http://browserify.org/) to handle JS components
- [AngularJS](http://angularjs.org/) as a JS Framework (can be easily removed if not needed)
- [Less](http://lesscss.org/) for CSS handling
- [Behat](http://behat.org/) configured to use [PhantomJS](http://phantomjs.org/) for functional testing


Requirements
------------

**Note:** Since the setup uses both Less and browserify, frontend libraries are
 managed using npm and napa instead of Bower to make for a simpler setup.

To install, build, and test the project, you will need the following tools:

- Composer
- Node.js
- npm
- A global install of gulp
- PhantomJS (optional)


Installation
------------

    $ composer create-project monkeycode/microsite-template myProject
    $ cd myProject
    $ npm install


Where to find what
------------------

All non-PHP code is located in ```/resources```, all PHP files in ```src```.

 - ```/resources/js```: Javascript application files (note that library files are under ```/node_modules``` because of the napa install).
 - ```/resources/less```: Less files. Already includes imports for Bootstrap v3.
 - ```/resources/views```: Twig templates.
 - ```/src/app.php```: Silex application setup.
 - ```/src/controllers.php```: Controllers & routing.
 - ```/config```: Silex application configuration.
 - ```/web```: Document root. Front controllers and generated JS/CSS assets.


Building
--------

The provided basic ```gulpfile.js``` lets you run the following tasks:

- ```gulp```: Default task - watch both Less and Javascript sources for changes and rebuild assets on the fly for dev use.
- ```gulp prod```: Compile & minify LESS and Javascript for production use.

Some additional tasks are available, but will generally be called implicitly as dependencies
of the two previous tasks:

- ```gulp less```: Compile Less to CSS in ```/web/css/main.css```.
- ```gulp lint```: Run JSHint on the Javascript files.
- ```gulp js-dev-lib```: Concatenate all vendor libraries separately from the application JS for dev use.
- ```gulp js-dev-app```: Concatenate all scripts separately from the vendor libraries for dev use.
- ```gulp dev```: Runs ```less```, ```js-dev-lib```, and ```js-dev-lib```.

Testing
-------

A sample test is provided in Behat, and configured for use with PhantomJS.
The suite can be run locally by calling ```./testlocal.sh```.