"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _config = require("../config");

var _ui = require("@sanity/ui");

var _helpers = require("../utils/helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Tabs = function Tabs(_ref) {
  var children = _ref.children,
      options = _ref.options,
      onClick = _ref.onClick;

  var _useState = (0, _react.useState)(_config.PROVIDERS["default"].prefix),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      id = _useState2[0],
      setId = _useState2[1];

  var selectedProviders = (0, _helpers.getSelectedProviders)(options);

  var handleClick = function handleClick(id) {
    setId(id);
    onClick();
  };

  var generateContent = function generateContent(providers) {
    if (providers.length === 2) {
      providers = (0, _toConsumableArray2["default"])(providers.slice(1));

      if (id === _config.PROVIDERS["default"].prefix) {
        setId(providers[0]);
      }
    }

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, generateTabList(providers), generateTabPanels(providers));
  };

  var generateTabList = function generateTabList(prefixes) {
    return /*#__PURE__*/_react["default"].createElement(_ui.TabList, {
      space: 1
    }, prefixes.map(function (prefix) {
      var _providerFromPrefix = (0, _helpers.providerFromPrefix)(prefix),
          title = _providerFromPrefix.title;

      return /*#__PURE__*/_react["default"].createElement(_ui.Tab, {
        key: prefix,
        "aria-controls": "".concat(prefix, "-panel")
        /* icon={EditIcon} */
        ,
        id: "".concat(prefix, "-tab"),
        label: "".concat(title),
        onClick: function onClick() {
          return handleClick(prefix);
        },
        selected: id === prefix,
        space: 2
      });
    }));
  };

  var generateTabPanels = function generateTabPanels(prefixes) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, prefixes.map(function (prefix) {
      var filter = prefix !== _config.PROVIDERS["default"].prefix ? prefix : null;

      var _providerFromPrefix2 = (0, _helpers.providerFromPrefix)(prefix),
          title = _providerFromPrefix2.title;

      return /*#__PURE__*/_react["default"].createElement(_ui.TabPanel, {
        key: prefix,
        "aria-labelledby": "".concat(prefix, "-tab"),
        hidden: id !== prefix,
        id: "".concat(prefix, "-panel")
      }, /*#__PURE__*/_react["default"].createElement(_ui.Card, {
        marginTop: 2,
        padding: 4,
        radius: 2
      }, /*#__PURE__*/_react["default"].createElement(_ui.Heading, null, title), /*#__PURE__*/_react["default"].createElement(_ui.Box, {
        marginTop: 4
      }, /*#__PURE__*/_react["default"].cloneElement(children, {
        filter: filter
      }))));
    }));
  };

  return /*#__PURE__*/_react["default"].createElement(_ui.Container, null, /*#__PURE__*/_react["default"].createElement(_ui.Box, {
    marginTop: 4
  }, generateContent(selectedProviders)));
};

var _default = Tabs;
exports["default"] = _default;