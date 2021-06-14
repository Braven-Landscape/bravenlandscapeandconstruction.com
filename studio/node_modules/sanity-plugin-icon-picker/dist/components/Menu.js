"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ui = require("@sanity/ui");

var _icons = require("@sanity/icons");

var Menu = function Menu(_ref) {
  var _onClick = _ref.onClick,
      selected = _ref.selected;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !selected && /*#__PURE__*/_react["default"].createElement(_ui.Button, {
    icon: _icons.AddIcon,
    fontSize: [1, 1, 2],
    mode: "ghost",
    padding: [2, 2, 3],
    tone: "default",
    text: "Add icon",
    onClick: function onClick() {
      return _onClick("add");
    }
  }), selected && /*#__PURE__*/_react["default"].createElement(_ui.MenuButton, {
    button: /*#__PURE__*/_react["default"].createElement(_ui.Button, {
      mode: "ghost",
      padding: [2, 2, 3],
      tone: "default",
      text: /*#__PURE__*/_react["default"].createElement(selected.component, null)
    }),
    id: "menu-button-example",
    menu: /*#__PURE__*/_react["default"].createElement(_ui.Menu, null, /*#__PURE__*/_react["default"].createElement(_ui.MenuItem, {
      text: "Edit",
      onClick: function onClick() {
        return _onClick("edit");
      }
    }), /*#__PURE__*/_react["default"].createElement(_ui.MenuItem, {
      text: "Delete",
      onClick: function onClick() {
        return _onClick("delete");
      }
    })),
    placement: "bottom"
  }));
};

var _default = Menu;
exports["default"] = _default;