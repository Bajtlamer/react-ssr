"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getFrameworks;

var _isomorphicFetch = require("isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCH_URL = 'https://intro-data-2018.firebaseapp.com/frameworks.json';
// const FETCH_URL = 'https://ssr-react.firebaseio.com/facts.json';

function getFrameworks() {
    return (0, _isomorphicFetch2.default)(FETCH_URL).then(function (frameworks) {
        return frameworks.json();
    });
}