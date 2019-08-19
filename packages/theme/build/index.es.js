import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, ThemeProvider as ThemeProvider$1 } from 'styled-components';
import 'color';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var aliceblue = "#f0f8ff";
var antiquewhite = "#faebd7";
var aqua = "#00ffff";
var aquamarine = "#7fffd4";
var azure = "#f0ffff";
var beige = "#f5f5dc";
var bisque = "#ffe4c4";
var black = "#000000";
var blanchedalmond = "#ffebcd";
var blue = "#0000ff";
var blueviolet = "#8a2be2";
var brown = "#a52a2a";
var burlywood = "#deb887";
var cadetblue = "#5f9ea0";
var chartreuse = "#7fff00";
var chocolate = "#d2691e";
var coral = "#ff7f50";
var cornflowerblue = "#6495ed";
var cornsilk = "#fff8dc";
var crimson = "#dc143c";
var cyan = "#00ffff";
var darkblue = "#00008b";
var darkcyan = "#008b8b";
var darkgoldenrod = "#b8860b";
var darkgray = "#a9a9a9";
var darkgreen = "#006400";
var darkgrey = "#a9a9a9";
var darkkhaki = "#bdb76b";
var darkmagenta = "#8b008b";
var darkolivegreen = "#556b2f";
var darkorange = "#ff8c00";
var darkorchid = "#9932cc";
var darkred = "#8b0000";
var darksalmon = "#e9967a";
var darkseagreen = "#8fbc8f";
var darkslateblue = "#483d8b";
var darkslategray = "#2f4f4f";
var darkslategrey = "#2f4f4f";
var darkturquoise = "#00ced1";
var darkviolet = "#9400d3";
var deeppink = "#ff1493";
var deepskyblue = "#00bfff";
var dimgray = "#696969";
var dimgrey = "#696969";
var dodgerblue = "#1e90ff";
var firebrick = "#b22222";
var floralwhite = "#fffaf0";
var forestgreen = "#228b22";
var fuchsia = "#ff00ff";
var gainsboro = "#dcdcdc";
var ghostwhite = "#f8f8ff";
var goldenrod = "#daa520";
var gold = "#ffd700";
var gray = "#808080";
var green = "#008000";
var greenyellow = "#adff2f";
var grey = "#808080";
var honeydew = "#f0fff0";
var hotpink = "#ff69b4";
var indianred = "#cd5c5c";
var indigo = "#4b0082";
var ivory = "#fffff0";
var khaki = "#f0e68c";
var lavenderblush = "#fff0f5";
var lavender = "#e6e6fa";
var lawngreen = "#7cfc00";
var lemonchiffon = "#fffacd";
var lightblue = "#add8e6";
var lightcoral = "#f08080";
var lightcyan = "#e0ffff";
var lightgoldenrodyellow = "#fafad2";
var lightgray = "#d3d3d3";
var lightgreen = "#90ee90";
var lightgrey = "#d3d3d3";
var lightpink = "#ffb6c1";
var lightsalmon = "#ffa07a";
var lightseagreen = "#20b2aa";
var lightskyblue = "#87cefa";
var lightslategray = "#778899";
var lightslategrey = "#778899";
var lightsteelblue = "#b0c4de";
var lightyellow = "#ffffe0";
var lime = "#00ff00";
var limegreen = "#32cd32";
var linen = "#faf0e6";
var magenta = "#ff00ff";
var maroon = "#800000";
var mediumaquamarine = "#66cdaa";
var mediumblue = "#0000cd";
var mediumorchid = "#ba55d3";
var mediumpurple = "#9370db";
var mediumseagreen = "#3cb371";
var mediumslateblue = "#7b68ee";
var mediumspringgreen = "#00fa9a";
var mediumturquoise = "#48d1cc";
var mediumvioletred = "#c71585";
var midnightblue = "#191970";
var mintcream = "#f5fffa";
var mistyrose = "#ffe4e1";
var moccasin = "#ffe4b5";
var navajowhite = "#ffdead";
var navy = "#000080";
var oldlace = "#fdf5e6";
var olive = "#808000";
var olivedrab = "#6b8e23";
var orange = "#ffa500";
var orangered = "#ff4500";
var orchid = "#da70d6";
var palegoldenrod = "#eee8aa";
var palegreen = "#98fb98";
var paleturquoise = "#afeeee";
var palevioletred = "#db7093";
var papayawhip = "#ffefd5";
var peachpuff = "#ffdab9";
var peru = "#cd853f";
var pink = "#ffc0cb";
var plum = "#dda0dd";
var powderblue = "#b0e0e6";
var purple = "#800080";
var rebeccapurple = "#663399";
var red = "#ff0000";
var rosybrown = "#bc8f8f";
var royalblue = "#4169e1";
var saddlebrown = "#8b4513";
var salmon = "#fa8072";
var sandybrown = "#f4a460";
var seagreen = "#2e8b57";
var seashell = "#fff5ee";
var sienna = "#a0522d";
var silver = "#c0c0c0";
var skyblue = "#87ceeb";
var slateblue = "#6a5acd";
var slategray = "#708090";
var slategrey = "#708090";
var snow = "#fffafa";
var springgreen = "#00ff7f";
var steelblue = "#4682b4";
var tan = "#d2b48c";
var teal = "#008080";
var thistle = "#d8bfd8";
var tomato = "#ff6347";
var turquoise = "#40e0d0";
var violet = "#ee82ee";
var wheat = "#f5deb3";
var white = "#ffffff";
var whitesmoke = "#f5f5f5";
var yellow = "#ffff00";
var yellowgreen = "#9acd32";
var csscolors = {
	aliceblue: aliceblue,
	antiquewhite: antiquewhite,
	aqua: aqua,
	aquamarine: aquamarine,
	azure: azure,
	beige: beige,
	bisque: bisque,
	black: black,
	blanchedalmond: blanchedalmond,
	blue: blue,
	blueviolet: blueviolet,
	brown: brown,
	burlywood: burlywood,
	cadetblue: cadetblue,
	chartreuse: chartreuse,
	chocolate: chocolate,
	coral: coral,
	cornflowerblue: cornflowerblue,
	cornsilk: cornsilk,
	crimson: crimson,
	cyan: cyan,
	darkblue: darkblue,
	darkcyan: darkcyan,
	darkgoldenrod: darkgoldenrod,
	darkgray: darkgray,
	darkgreen: darkgreen,
	darkgrey: darkgrey,
	darkkhaki: darkkhaki,
	darkmagenta: darkmagenta,
	darkolivegreen: darkolivegreen,
	darkorange: darkorange,
	darkorchid: darkorchid,
	darkred: darkred,
	darksalmon: darksalmon,
	darkseagreen: darkseagreen,
	darkslateblue: darkslateblue,
	darkslategray: darkslategray,
	darkslategrey: darkslategrey,
	darkturquoise: darkturquoise,
	darkviolet: darkviolet,
	deeppink: deeppink,
	deepskyblue: deepskyblue,
	dimgray: dimgray,
	dimgrey: dimgrey,
	dodgerblue: dodgerblue,
	firebrick: firebrick,
	floralwhite: floralwhite,
	forestgreen: forestgreen,
	fuchsia: fuchsia,
	gainsboro: gainsboro,
	ghostwhite: ghostwhite,
	goldenrod: goldenrod,
	gold: gold,
	gray: gray,
	green: green,
	greenyellow: greenyellow,
	grey: grey,
	honeydew: honeydew,
	hotpink: hotpink,
	indianred: indianred,
	indigo: indigo,
	ivory: ivory,
	khaki: khaki,
	lavenderblush: lavenderblush,
	lavender: lavender,
	lawngreen: lawngreen,
	lemonchiffon: lemonchiffon,
	lightblue: lightblue,
	lightcoral: lightcoral,
	lightcyan: lightcyan,
	lightgoldenrodyellow: lightgoldenrodyellow,
	lightgray: lightgray,
	lightgreen: lightgreen,
	lightgrey: lightgrey,
	lightpink: lightpink,
	lightsalmon: lightsalmon,
	lightseagreen: lightseagreen,
	lightskyblue: lightskyblue,
	lightslategray: lightslategray,
	lightslategrey: lightslategrey,
	lightsteelblue: lightsteelblue,
	lightyellow: lightyellow,
	lime: lime,
	limegreen: limegreen,
	linen: linen,
	magenta: magenta,
	maroon: maroon,
	mediumaquamarine: mediumaquamarine,
	mediumblue: mediumblue,
	mediumorchid: mediumorchid,
	mediumpurple: mediumpurple,
	mediumseagreen: mediumseagreen,
	mediumslateblue: mediumslateblue,
	mediumspringgreen: mediumspringgreen,
	mediumturquoise: mediumturquoise,
	mediumvioletred: mediumvioletred,
	midnightblue: midnightblue,
	mintcream: mintcream,
	mistyrose: mistyrose,
	moccasin: moccasin,
	navajowhite: navajowhite,
	navy: navy,
	oldlace: oldlace,
	olive: olive,
	olivedrab: olivedrab,
	orange: orange,
	orangered: orangered,
	orchid: orchid,
	palegoldenrod: palegoldenrod,
	palegreen: palegreen,
	paleturquoise: paleturquoise,
	palevioletred: palevioletred,
	papayawhip: papayawhip,
	peachpuff: peachpuff,
	peru: peru,
	pink: pink,
	plum: plum,
	powderblue: powderblue,
	purple: purple,
	rebeccapurple: rebeccapurple,
	red: red,
	rosybrown: rosybrown,
	royalblue: royalblue,
	saddlebrown: saddlebrown,
	salmon: salmon,
	sandybrown: sandybrown,
	seagreen: seagreen,
	seashell: seashell,
	sienna: sienna,
	silver: silver,
	skyblue: skyblue,
	slateblue: slateblue,
	slategray: slategray,
	slategrey: slategrey,
	snow: snow,
	springgreen: springgreen,
	steelblue: steelblue,
	tan: tan,
	teal: teal,
	thistle: thistle,
	tomato: tomato,
	turquoise: turquoise,
	violet: violet,
	wheat: wheat,
	white: white,
	whitesmoke: whitesmoke,
	yellow: yellow,
	yellowgreen: yellowgreen
};

var black$1 = '#3a3a3a';
var white$1 = '#ffffff'; // greys

var lightGrey = '#f5f5f5';
var semiLightGrey = '#ecebeb';
var grey$1 = '#b5b5b5';
var darkGrey = '#b5b5b5';
var red$1 = '#ef5350';
var green$1 = '#66bb6a';
var orange$1 = '#ffc324'; // blues

var lightBlue = '#1e88e5';
var blue$1 = '#0091ea';
var darkBlue = '#1976d2';

var palette = _objectSpread2({}, csscolors, {
  black: black$1,
  white: white$1,
  lightGrey: lightGrey,
  semiLightGrey: semiLightGrey,
  grey: grey$1,
  lightBlue: lightBlue,
  blue: blue$1,
  darkBlue: darkBlue,
  red: red$1,
  green: green$1,
  orange: orange$1,
  darkGrey: darkGrey
});

var components = {
  // Input element
  input: {
    hover: palette.black,
    disabled: palette.grey,
    error: palette.red,
    success: palette.green,
    focus: palette.lightBlue
  },
  // Checkbox
  checkbox: {
    checked: palette.lightBlue,
    unchecked: palette.lightGrey,
    disabled: palette.grey
  },
  //Tabs
  tabs: {
    active: palette.blue,
    hover: palette.lightBlue
  },
  //Radio
  radio: {
    checked: palette.lightBlue,
    unchecked: palette.lightGrey,
    disabled: palette.grey
  }
};
var system = {
  // Main color
  primary: palette.blue,
  // States
  hover: palette.lightBlue,
  success: palette.green,
  warning: palette.orange,
  error: palette.red,
  // Misc
  text: palette.black,
  border: palette.semiLightGrey,
  // Disabled
  disabled: palette.grey,
  highlight: palette.lightGrey,
  onclick: palette.darkBlue,
  // Scrollbar
  scrollbar: palette.darkGrey,
  //legacy
  info: palette.lightBlue,
  highlightHover: palette.lightBlue,
  black: palette.black,
  white: palette.white
};
var colors = _objectSpread2({
  system: system,
  palette: palette
}, palette, {}, system, {}, components);

var icons = ['account_circle', 'account_box', 'assignment_ind', 'delete', 'delete_forever', 'edit', 'filter_none', 'arrow_upward', 'arrow_downward', 'arrow_back', 'arrow_forward', 'arrow_drop_down', 'arrow_drop_up', 'keyboard_arrow_left', 'keyboard_arrow_right', 'keyboard_arrow_down', 'keyboard_arrow_up', 'add_circle', 'add_circle_outline', 'search', 'assignment', 'add', 'remove_circle_outline', 'remove_circle', 'save', 'more_horiz', 'more_vert', 'close', 'get_app', 'send', 'home', 'help', 'help_outline', 'folder_open', 'check', 'check_box', 'check_box_outline_blank', 'radio_button_checked', 'radio_button_unchecked', 'fiber_manual_record', 'equalizer', 'description', 'account_balance_wallet', 'business', 'data_usage', 'pan_tool', 'assessment', 'straighten', 'flip', 'play_arrow', 'vpn_key', 'supervisor_account', 'school', 'remove_red_eye'];

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    html,\n    body {\n      font-family: ", ";\n      font-size: ", "px;\n      line-height: 1.4;\n      height: 100%;\n    }\n\n    * {\n        box-sizing: border-box;\n      }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Base = styled.div(_templateObject());

var ThemeProvider = function ThemeProvider(_ref) {
  var customBreakpoints = _ref.customBreakpoints,
      props = _objectWithoutProperties(_ref, ["customBreakpoints"]);

  var breakpoints = customBreakpoints || baseTheme.breakpoints;

  var theme = _objectSpread2({}, baseTheme, {}, props.theme, {
    breakpoints: breakpoints
  });

  var GlobalStyle = createGlobalStyle(_templateObject2(), props.theme.font.main, props.theme.fontSizes[1]);
  return React.createElement(React.Fragment, null, React.createElement(GlobalStyle, null), React.createElement(ThemeProvider$1, {
    theme: theme
  }, React.createElement(Base, props)));
};

ThemeProvider.propTypes = {
  /**
   * Массив значений в пикселях для кастмизации дефолтных брейкпоинтов
   */
  customBreakpoints: PropTypes.arrayOf(PropTypes.number)
};

var addAliases = function addAliases(arr, aliases) {
  return aliases.forEach(function (key, i) {
    return Object.defineProperty(arr, key, {
      enumerable: false,
      get: function get() {
        return this[i];
      }
    });
  });
};

var breakpoints = [420, 640, 1200, 1600];
var mediaQueries = breakpoints.map(function (width) {
  return "@media screen and (min-width: ".concat(width, "px)");
});
var aliases = ['sm', 'md', 'lg', 'xl'];
addAliases(breakpoints, aliases);
addAliases(mediaQueries, aliases);
var baseTheme = {
  colors: colors,
  breakpoints: breakpoints,
  mediaQueries: mediaQueries,
  font: {
    main: "'PT Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    heading: "'PT Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    monospaced: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace"
  },

  /** Отступы для margin и padding  */
  space: [0, 4, 8, 16, 32, 64, 128],

  /** Размеры шрифта в пикселях */
  // fontSizes: [10, 12, 14, 16, 20, 24, 32, 48],
  fontSizes: [12, 14, 16, 18, 22, 26, 34, 50],

  /** Толщина начертания шрифта */
  fontWeights: {
    regular: 400,
    bold: 600
  },
  letterSpacings: {
    normal: 'normal',
    caps: '0.025em'
  },

  /** Радиус скругления */
  radii: [2, 4, 8],
  boxShadows: ["0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)", "0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)", "0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)", "0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)"],
  borders: [],
  opacity: 0.5,
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "450ms",
    slowest: "600ms"
  },
  timingFunctions: {
    easeInOut: 'cubic-bezier(0.5, 0, 0.25, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.25, 1)',
    easeIn: 'cubic-bezier(0.5, 0, 1, 1)'
  },
  icons: icons,
  ThemeProvider: ThemeProvider
};

export default baseTheme;
export { ThemeProvider, colors, icons };
//# sourceMappingURL=index.es.js.map
