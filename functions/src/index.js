'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _frameworks = require('./frameworks');

var _frameworks2 = _interopRequireDefault(_frameworks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// getFrameworks().then(frameworks => {
(0, _reactDom.render)(_react2.default.createElement(_App2.default, { frameworks: (0, _frameworks2.default)() }), document.querySelector('#root'));
// })