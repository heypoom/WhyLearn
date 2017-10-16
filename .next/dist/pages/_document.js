'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _emotionServer = require('emotion-server');

var _emotion = require('emotion');

var _core = require('../core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/phoomparin/Dev/Projects/whylearn/pages/_document.js?entry';


var dev = process.env.NODE_ENV !== 'production';

var BaseDocument = function (_Document) {
  (0, _inherits3.default)(BaseDocument, _Document);

  (0, _createClass3.default)(BaseDocument, null, [{
    key: 'getInitialProps',

    // This will extract the critical stylesheets and render the page.
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      // Flush the styles in development
      if (dev) {
        (0, _emotion.flush)();
      }

      var page = renderPage();
      var styles = (0, _emotionServer.extractCritical)(page.html);

      return (0, _extends3.default)({}, page, styles);
    }
  }]);

  function BaseDocument(props) {
    (0, _classCallCheck3.default)(this, BaseDocument);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseDocument.__proto__ || (0, _getPrototypeOf2.default)(BaseDocument)).call(this, props));

    _this.render = function () {
      return _react2.default.createElement('html', { lang: 'en', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Skootar Clone'), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _this.props.css }, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:300,400', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement('script', { src: 'https://maps.googleapis.com/maps/api/js?key=' + _core.GMAPS_API_KEY + '&libraries=places', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      })));
    };

    var __NEXT_DATA__ = props.__NEXT_DATA__,
        ids = props.ids;

    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
    return _this;
  }

  return BaseDocument;
}(_document2.default);

exports.default = BaseDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkRvY3VtZW50IiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiZXh0cmFjdENyaXRpY2FsIiwiZmx1c2giLCJHTUFQU19BUElfS0VZIiwiZGV2IiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiQmFzZURvY3VtZW50IiwicmVuZGVyUGFnZSIsInBhZ2UiLCJzdHlsZXMiLCJodG1sIiwicHJvcHMiLCJyZW5kZXIiLCJfX2h0bWwiLCJjc3MiLCJfX05FWFRfREFUQV9fIiwiaWRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFXLEFBQU0sQUFBTTs7OztBQUM5QixBQUFROztBQUNSLEFBQVE7O0FBRVIsQUFBUSxBQUFvQjs7Ozs7OztBQUU1QixJQUFNLE1BQU0sUUFBQSxBQUFRLElBQVIsQUFBWSxhQUF4QixBQUFxQzs7SSxBQUVoQjs7OztTQUNuQjs7OzBDQUNxQztVQUFiLEFBQWEsa0JBQWIsQUFBYSxBQUNuQzs7QUFDQTtVQUFBLEFBQUksS0FBSyxBQUNQO0FBQ0Q7QUFFRDs7VUFBTSxPQUFOLEFBQWEsQUFDYjtVQUFNLFNBQVMsb0NBQWdCLEtBQS9CLEFBQWUsQUFBcUIsQUFFcEM7O3dDQUFBLEFBQ0ssTUFETCxBQUVLLEFBRU47QUFFRDs7O3dCQUFBLEFBQVksT0FBTzt3Q0FBQTs7a0pBQUEsQUFDWDs7VUFEVyxBQVNuQixTQUFTLFlBQUE7NkJBQ1AsY0FBQSxVQUFNLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsMERBQU0sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7b0JBQTlCO3NCQUZGLEFBRUUsQUFDQTtBQURBO21EQUNPLHlCQUF5QixFQUFDLFFBQVEsTUFBQSxBQUFLLE1BQTlDLEFBQWdDLEFBQW9CO29CQUFwRDtzQkFIRixBQUdFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsMERBQXlELEtBQXBFLEFBQXdFO29CQUF4RTtzQkFKRixBQUlFLEFBQ0E7QUFEQTtvREFDUSxLQUFBLEFBQW9ELHVFQUE1RDtvQkFBQTtzQkFOSixBQUNFLEFBS0UsQUFFRjtBQUZFOzJCQUVGLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7O29CQUFEO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7b0JBQUQ7c0JBWEcsQUFDUCxBQVFFLEFBRUU7QUFBQTtBQUFBO0FBcEJhOztRQUFBLEFBR1YsZ0JBSFUsQUFHWSxNQUhaLEFBR1Y7UUFIVSxBQUdLLE1BSEwsQUFHWSxNQUhaLEFBR0ssQUFDdEI7O1FBQUEsQUFBSSxLQUFLLEFBQ1A7b0JBQUEsQUFBYyxNQUFkLEFBQW9CLEFBQ3JCO0FBTmdCO1dBT2xCOzs7O0FBeEJ1QyxBOztrQkFBckIsQSIsImZpbGUiOiJfZG9jdW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Bob29tcGFyaW4vRGV2L1Byb2plY3RzL3doeWxlYXJuIn0=