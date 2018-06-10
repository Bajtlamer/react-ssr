'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.ssrapp = undefined;

var _firebaseFunctions = require('firebase-functions');

var functions = _interopRequireWildcard(_firebaseFunctions);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _App = require('./src/App');

var _App2 = _interopRequireDefault(_App);

var _frameworks = require('./src/frameworks');

var _frameworks2 = _interopRequireDefault(_frameworks);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var index = _fs2.default.readFileSync(__dirname + '/public/index.html', 'utf-8');

var app = (0, _express2.default)();

app.get('**', function (req, res) {
   // getFrameworks().then(frameworks => {
   var html = (0, _server.renderToString)(_react2.default.createElement(_App2.default, { frameworks: (0, _frameworks2.default)() }));
   var finalHtml = index.replace('<!--::APP::-->', html);
   res.set('Cache-control', 'public', 'max-time=600', 's-maxtime=1200');
   res.send(finalHtml);
   // });
});

var ssrapp = exports.ssrapp = functions.https.onRequest(app);