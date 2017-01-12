# Using JSDOM + webpack + Mocha + Vue.js

The default template that Vue creates uses Karma and Nightwatch for Unit Testing in the browser.  This is awesome.

Often, however, sometimes you want to just run the unit tests in Node without having the overhead and time penalty of spinning up and running in Selenium or the Browser.

I searched around multiple recommendations on how to do this with no luck.  Everyone has a piece of the puzzle but I couldn't find a easy way to put them together in one place that worked.

So after many hours of experimenting I found out how to make it work and made a very slim sample project to demonstrate how to set this up.

## Usage

	npm install (or yarn install)
	npm test

You should be able to install your dependencies and then run an example test case using Mocha.

## Configuration

For the webpack configuration, see the `webpack.config.js` for how this was configured.  I'm not a webpack expert by any means but I tried to comment out what I did and what the purpose is of most of the important entries.

## Features

This featues using the following:

- VueJS 2.x+
- JSDOM
- webpack
- Babel (from ES6+ to ES5)
- Mocha (+ should assertion library, but you can use whatever you want)

## Explanation of what's happening

You can see how I setup running mocha by examining `package.json` for the script `test` reference:

	npm run build && mocha -r jsdom-global/register ./dist/bundle.js

This will first build the webpack bundle in `dist/bundle.js` and then execute mocha.  The `-r jsdom-global/register` will register JSDOM globals for typical browser variables such as `window` and `document` before executing your tests.  You could also simply `require("jsdom-global/register")` in your test cases if you'd prefer that.

For webpack, it will simply bundle all your test and source files specified in `webpack.config.js` into the `dist` directory in one bundled file named `bundle.js`. This file will only include your transformed file and will excluded any node available packages such as what's in `node_modules`.  This enables you to use node to load your bundled JS and mocha will then run them (the test cases) automatically.


## Author

Jeff Haynie @jhaynie

## License

MIT. Pull requests encouraged and welcome.
