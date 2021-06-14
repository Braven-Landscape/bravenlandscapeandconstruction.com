"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useMedia;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

function useMedia(queries, values, defaultValue) {
  var mediaQueryLists = queries.map(function (q) {
    return window.matchMedia(q);
  });

  var getValue = function getValue() {
    var index = mediaQueryLists.findIndex(function (mql) {
      return mql.matches;
    });
    return typeof values[index] !== "undefined" ? values[index] : defaultValue;
  };

  var _useState = (0, _react.useState)(getValue),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  (0, _react.useEffect)(function () {
    var handler = function handler() {
      return setValue(getValue);
    };

    mediaQueryLists.forEach(function (mql) {
      return mql.addListener(handler);
    });
    return function () {
      return mediaQueryLists.forEach(function (mql) {
        return mql.removeListener(handler);
      });
    };
  }, []);
  return value;
}