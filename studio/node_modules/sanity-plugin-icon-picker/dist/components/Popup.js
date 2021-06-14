"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ui = require("@sanity/ui");

var Popup = function Popup(_ref) {
  var onClose = _ref.onClose,
      children = _ref.children,
      isOpen = _ref.isOpen;
  if (!isOpen) return null;
  return /*#__PURE__*/_react["default"].createElement(_ui.Dialog, {
    header: "Icon Picker",
    id: "icon-popup",
    onClose: onClose,
    zOffset: 1000,
    width: 1
  }, /*#__PURE__*/_react["default"].createElement(_ui.Box, {
    padding: 4
  }, children));
};

var _default = Popup;
exports["default"] = _default;