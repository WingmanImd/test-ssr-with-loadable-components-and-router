"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _component = _interopRequireDefault(require("@loadable/component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const AboutContent = (0, _component.default)({
  chunkName() {
    return "AboutContent";
  },

  isReady(props) {
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[this.resolve(props)];
    }

    return false;
  },

  requireAsync: () => import(
  /* webpackChunkName: "AboutContent" */
  './AboutContent'),

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak("./AboutContent");
    }

    return require('path').resolve(__dirname, "./AboutContent");
  }

});

class About extends _react.Component {
  render() {
    return _react.default.createElement(_react.Fragment, null, _react.default.createElement("h1", null, "About page 2222222"), _react.default.createElement(AboutContent, null));
  }

}

exports.default = About;