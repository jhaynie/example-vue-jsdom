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

## Author

Jeff Haynie @jhaynie

## License

MIT. Pull requests encouraged and welcome.
