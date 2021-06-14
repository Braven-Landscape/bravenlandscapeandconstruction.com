"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("./index"));

var _default = {
  title: "Icon Picker",
  name: "iconPicker",
  type: "object",
  fields: [{
    title: "Provider",
    name: "provider",
    type: "string"
  }, {
    title: "Name",
    name: "name",
    type: "string"
  }],
  inputComponent: _index["default"]
};
exports["default"] = _default;