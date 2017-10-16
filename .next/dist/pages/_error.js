'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/phoomparin/Dev/Projects/whylearn/pages/_error.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  min-height: 100vh;\n  align-items: center;\n  justify-content: center;\n  background: white;\n\n  font-family: Roboto, sans-serif;\n  font-weight: 300;\n'], ['\n  display: flex;\n  min-height: 100vh;\n  align-items: center;\n  justify-content: center;\n  background: white;\n\n  font-family: Roboto, sans-serif;\n  font-weight: 300;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  margin: 0 auto;\n\n  color: #666;\n  font-weight: 300;\n  font-size: 1.9em;\n'], ['\n  margin: 0 auto;\n\n  color: #666;\n  font-weight: 300;\n  font-size: 1.9em;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  color: #555;\n  font-weight: 300;\n  line-height: 1.8em;\n  text-align: center;\n  font-size: 1.2em;\n'], ['\n  color: #555;\n  font-weight: 300;\n  line-height: 1.8em;\n  text-align: center;\n  font-size: 1.2em;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n\n'], ['\n\n']);

var Page = _reactEmotion2.default.div(_templateObject);

var Heading = _reactEmotion2.default.h2(_templateObject2);

var Text = _reactEmotion2.default.p(_templateObject3);

var Anchor = _reactEmotion2.default.a(_templateObject4);

var Error = function Error(_ref) {
  var statusCode = _ref.statusCode;
  return _react2.default.createElement(Page, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement(Heading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, 'How did you get here? Impressive!'), _react2.default.createElement(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, 'I\'m not really sure how you got here. Would you mind going back, Please?'), _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement(Anchor, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, 'Go Back')));
};

Error.getInitialProps = function (_ref2) {
  var res = _ref2.res,
      jsonPageRes = _ref2.jsonPageRes;

  var statusCode = res ? res.statusCode : jsonPageRes && jsonPageRes.status;

  return { statusCode: statusCode };
};

exports.default = Error;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJzdHlsZWQiLCJQYWdlIiwiZGl2IiwiSGVhZGluZyIsImgyIiwiVGV4dCIsInAiLCJBbmNob3IiLCJhIiwiRXJyb3IiLCJzdGF0dXNDb2RlIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwianNvblBhZ2VSZXMiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNLE9BQU8sdUJBQVAsQUFBYyxJQUFwQjs7QUFXQSxJQUFNLFVBQVUsdUJBQVYsQUFBaUIsR0FBdkI7O0FBUUEsSUFBTSxPQUFPLHVCQUFQLEFBQWMsRUFBcEI7O0FBUUEsSUFBTSxTQUFTLHVCQUFULEFBQWdCLEVBQXRCOztBQUlBLElBQU0sUUFBUSxTQUFSLEFBQVEsWUFBQTtNQUFBLEFBQUUsa0JBQUYsQUFBRTt5QkFDYixjQUFEOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNHLGNBQUQ7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSxzREFBQyxjQUFEOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FGRixBQUVFLEFBSUEsOEZBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7Z0JBQVg7a0JBQUEsQUFDRTtBQURGO3FCQUNHLGNBQUQ7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQVJRLEFBQ1osQUFNRSxBQUNFO0FBUk47O0FBYUEsTUFBQSxBQUFNLGtCQUFrQixpQkFBd0I7TUFBdEIsQUFBc0IsWUFBdEIsQUFBc0I7TUFBakIsQUFBaUIsb0JBQWpCLEFBQWlCLEFBQzlDOztNQUFNLGFBQWEsTUFBTSxJQUFOLEFBQVUsYUFBYyxlQUFlLFlBQTFELEFBQXNFLEFBRXRFOztTQUFPLEVBQUMsWUFBUixBQUFPLEFBQ1I7QUFKRCxBQU1BOztrQkFBQSxBQUFlIiwiZmlsZSI6Il9lcnJvci5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhvb21wYXJpbi9EZXYvUHJvamVjdHMvd2h5bGVhcm4ifQ==