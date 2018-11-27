"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(require("moment"));

require("./A.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// We simulate that "moment" is called in "A" and "B"
const A = () => 'A'; // We keep a reference to prevent uglify remove


A.moment = _moment.default;
var _default = A;
exports.default = _default;