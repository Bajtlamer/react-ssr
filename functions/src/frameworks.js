"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getFrameworks;

var _isomorphicFetch = require("isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const FETCH_URL = 'https://intro-data-2018.firebaseapp.com/frameworks.json';
// const FETCH_URL = 'https://ssr-react.firebaseio.com/facts.json';

var data = [{
    "descriptions": "One framework. Mobile & desktop.",
    "name": "Angular",
    "url": "https://angular.io/"
}, {
    "descriptions": "A JavaScript library for building user interfaces.",
    "name": "React.js",
    "url": "https://reactjs.org/"
}, {
    "descriptions": "A different kind of library.",
    "name": "Preact.js",
    "url": "https://preactjs.com/"
}, {
    "descriptions": "The Progressive JavaScript Framework.",
    "name": "Vue.js",
    "url": "https://vuejs.org/"
}, {
    "descriptions": "React Applications Made Simple.",
    "name": "Next.js",
    "url": "https://nextjs.org/"
}, {
    "descriptions": "A framework for ambitious web developers.",
    "name": "Ember.js",
    "url": "https://www.emberjs.com/"
}];

function getFrameworks() {
    // return fetch(FETCH_URL).then(frameworks => frameworks.json());
    return data;
}