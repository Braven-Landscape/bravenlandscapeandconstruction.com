"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ui = require("@sanity/ui");

var SearchBar = function SearchBar(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange;
  return /*#__PURE__*/_react["default"].createElement(_ui.TextInput, {
    fontSize: 2,
    padding: 4,
    value: value,
    placeholder: "Search Icons",
    onChange: onChange,
    mode: "bleed"
  });
};

var _default = SearchBar;
exports["default"] = _default;