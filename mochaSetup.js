const JSDOM = require('jsdom');

const jsdom = new JSDOM('<body></body>', {
    url: 'http://example.org'
});

global.window = jsdom.window;
global.document = jsdom.window.document;
