"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _component = _interopRequireDefault(require("@loadable/component"));

require("./main.css");

var _reactRouterDom = require("react-router-dom");

var _reactRouter = require("react-router");

var _About = _interopRequireDefault(require("./About"));

var _Home = _interopRequireDefault(require("./Home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-extraneous-dependencies
// const About = loadable(() => import('./About'))
// const Home = loadable(() => import('./Home'))
class App extends _react.default.Component {
  render() {
    const Router = this.props.isServer ? _reactRouter.StaticRouter : _reactRouterDom.BrowserRouter;
    return _react.default.createElement(Router, {
      location: this.props.url,
      context: {}
    }, _react.default.createElement("div", null, _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
      to: "/"
    }, "Home")), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
      to: "/about"
    }, "About"))), _react.default.createElement("hr", null), _react.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/",
      component: _Home.default
    }), _react.default.createElement(_reactRouterDom.Route, {
      path: "/about",
      component: _About.default
    })));
  }

}

exports.default = App;