import styled, { keyframes, css as css$1, ThemeConsumer } from 'styled-components';
import PropTypes from 'prop-types';
import { space, color, width, height, fontSize, flex, order, alignSelf, minWidth, maxWidth, alignItems, justifyContent, flexWrap, flexDirection, borderRadius, top, right, bottom, left, zIndex } from 'styled-system';
import theme from '@design-system/theme';
import React$3__default, { Component, createElement, PureComponent, createRef } from 'react';
import reactDom from 'react-dom';
import ReactTinyPopover, { ArrowContainer } from 'react-tiny-popover';
import RSelect, { components } from 'react-select';
import AsyncRSelect from 'react-select/lib/Async';

/**
 * Используйте этот компонент для управления css-параметрами width, margin, padding, and color.
 */

var Box = styled('div')({
  boxSizing: 'border-box',
  position: 'relative'
}, space, color, width, height, fontSize, flex, order, alignSelf, minWidth, maxWidth, function (props) {
  return props.css;
});
Box.displayName = 'Box';
Box.propTypes = {
  /** Обьект с css-правилами */
  css: PropTypes.object,

  /** margin */
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-top*/
  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-right*/
  mr: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-bottom*/
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-left*/
  ml: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-left and margin-right */
  mx: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-top and margin-bottom */
  my: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding */
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-top*/
  pt: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-right*/
  pr: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-bottom*/
  pb: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-left*/
  pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-left and padding-right */
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-top and padding-bottom */
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** Фоновый цвет блока */
  bg: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

  /** Цвет текста */
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

  /** Ширина блока */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** Высота блока */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** Размер шрифта */
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** Минимальная ширина */
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** Максимальная ширина */
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array])
  /** @component */

};

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n\n  ", " \n  ", " \n  ", " \n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * Наследует компонент `<Box />`, добавляет ему **display: flex** и расширяет свойствами **alignItems, justifyContent, flexWrap, flexDirection**.
 */

var Flex = styled(Box)(_templateObject(), alignItems, justifyContent, flexWrap, flexDirection);
Flex.propTypes = {
  /** Выравнивание по-вертикали */
  alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),

  /**
   * Выравнивание по-горизонтали: One of: flex-start, flex-end, center, space-between, space-around, space-evenly.
   * При использовании брейкпоинтов указываем массив. Например, для трех брейкпоинтов: ['flex-start', 'flex-end', 'center']
   * */
  justifyContent: PropTypes.oneOfType([PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']), PropTypes.array]),

  /**
   * Задает правила вывода flex-элементов —  в одну строку или в несколько, с переносом блоков.
   * Если перенос разрешен, то возможно задать направление, в котором выводятся блоки
   * */
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),

  /**
   * Задаёт направление основных осей в контейнере и тем самым определяет положение флексов в контейнере
   */
  flexDirection: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),

  /** @ignore */
  theme: PropTypes.any
};
Flex.defaultProps = {
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  theme: theme
};
Flex.displayName = 'Flex';

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  position: relative;\n\n  ", " \n  ", " \n  ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

var boxShadow = function boxShadow(props) {
  var boxShadows = {
    sm: {
      'box-shadow': props.theme.boxShadows[0]
    },
    md: {
      'box-shadow': props.theme.boxShadows[1]
    },
    lg: {
      'box-shadow': props.theme.boxShadows[2]
    },
    xl: {
      'box-shadow': props.theme.boxShadows[3]
    }
  };
  return boxShadows[props.boxShadowSize] || {};
};

var boxBorder = function boxBorder(props) {
  return {
    border: "1px solid ".concat(props.theme.colors.border)
  };
};
/** Наследует компонент `<Box />` и расширяет его параметрами **boxShadowSize, borderColor, borderRadius, borderWidth**.
 * Используется для создания блока с тенью и границами.
 * */


var Card = styled(Box)(_templateObject$1(), boxShadow, boxBorder, borderRadius);
Card.propTypes = {
  /** Размер тени */
  boxShadowSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),

  /** Радиус скругления блока */
  borderRadius: PropTypes.oneOf([0, 1, 2]),

  /** Ширина бордера */
  borderWidth: PropTypes.oneOf([0, 1, 2]),

  /** @ignore */
  theme: PropTypes.any
};
Card.defaultProps = {
  borderRadius: 1,
  borderWidth: 0,
  theme: theme
};
Card.displayName = 'Card';

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n\n  ", " \n  ", "\n  ", " \n  ", " \n  ", ";\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * Применяется для относительного позиционирования.
 * Наследует `<Box />`  и расширяет его параметрами **top, right, bottom, left, zIndex**.
 * */

var Relative = styled(Box)(_templateObject$2(), top, right, bottom, left, zIndex);
Relative.propTypes = {
  /** Смещение сверху */
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** Смещение снизу */
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** Смещение справа */
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** Смещение слева */
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /**
   * Любые позиционированные элементы на веб-странице могут накладываться друг на друга в определенном порядке,
   * имитируя тем самым третье измерение, перпендикулярное экрану.
   * Каждый элемент может находиться как ниже, так и выше других объектов веб-страницы,
   * их размещением по z-оси и управляет z-index
   * */
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
Relative.displayName = 'Relative';

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  \n  ", "\n  ", "\n  ", "\n  ", "\n  ", ";\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * Применяется для абсолютного позиционирования.
 * Обычно используется в качестве потомка для компонента `<Relative />`.
 * Наследует `<Box />`  и расширяет его параметрами **top, right, bottom, left, zIndex**.
 * */

var Absolute = styled(Box)(_templateObject$3(), top, right, bottom, left, zIndex);
Absolute.propTypes = {
  /** Смещение сверху */
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** Смещение снизу */
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** Смещение слева */
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** Смещение справа */
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /**
   * Любые позиционированные элементы на веб-странице могут накладываться друг на друга в определенном порядке,
   * имитируя тем самым третье измерение, перпендикулярное экрану.
   * Каждый элемент может находиться как ниже, так и выше других объектов веб-страницы,
   * их размещением по z-оси и управляет z-index
   * */
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
Absolute.displayName = 'Absolute';

var hexCharacters = 'a-f\\d';
var match3or4Hex = "#?[".concat(hexCharacters, "]{3}[").concat(hexCharacters, "]?");
var match6or8Hex = "#?[".concat(hexCharacters, "]{6}([").concat(hexCharacters, "]{2})?");
var nonHexChars = new RegExp("[^#".concat(hexCharacters, "]"), 'gi');
var validHexSize = new RegExp("^".concat(match3or4Hex, "$|^").concat(match6or8Hex, "$"), 'i');

var hexRgb = function (hex) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof hex !== 'string' || nonHexChars.test(hex) || !validHexSize.test(hex)) {
    throw new TypeError('Expected a valid hex string');
  }

  hex = hex.replace(/^#/, '');
  var alpha = 1;

  if (hex.length === 8) {
    alpha = parseInt(hex.slice(6, 8), 16) / 255;
    hex = hex.slice(0, 6);
  }

  if (hex.length === 4) {
    alpha = parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
    hex = hex.slice(0, 3);
  }

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  var num = parseInt(hex, 16);
  var red = num >> 16;
  var green = num >> 8 & 255;
  var blue = num & 255;
  return options.format === 'array' ? [red, green, blue, alpha] : {
    red: red,
    green: green,
    blue: blue,
    alpha: alpha
  };
};

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  ", ";\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}

var getColor = function getColor(_ref) {
  var theme = _ref.theme,
      bg = _ref.bg,
      opacity = _ref.opacity;

  if (bg === 'transparent') {
    return {
      backgroundColor: bg
    };
  }

  var hex = theme.colors[bg] || bg;

  var _hexRgb = hexRgb(hex),
      red = _hexRgb.red,
      green = _hexRgb.green,
      blue = _hexRgb.blue,
      alpha = _hexRgb.alpha;

  return {
    backgroundColor: "rgba(".concat(red, ", ").concat(green, ", ").concat(blue, ", ").concat(opacity || alpha, ")")
  };
};
/** Оверлей */


var StyledFlex = styled(Flex)(_templateObject$4(), getColor);

function Overlay(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return React$3__default.createElement(StyledFlex, props, React$3__default.cloneElement(React$3__default.Children.only(children), {
    onClick: function onClick(e) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }
  }));
}

Overlay.propTypes = {
  /** Содержимое оверлея */
  children: PropTypes.element,

  /** Событие клика на оверлей */
  onClick: PropTypes.func,

  /** @ignore */
  theme: PropTypes.any
};
Overlay.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center',
  bg: 'black',
  opacity: 0.85,
  theme: theme
};
Overlay.displayName = 'Overlay';

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n\n  ", " \n  ", " \n  ", " \n  ", "\n  ", "\n  ", "\n  ", "\n  ", " \n  ", "\n  ", "\n  ", ";\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}

var align = function align(_ref) {
  var align = _ref.align;
  return Boolean(align) && {
    textAlign: align
  };
};

var regular = function regular(_ref2) {
  var regular = _ref2.regular,
      theme = _ref2.theme;
  return Boolean(regular) && {
    fontWeight: theme.fontWeights.regular
  };
};

var bold = function bold(_ref3) {
  var bold = _ref3.bold,
      theme = _ref3.theme;
  return Boolean(bold) && {
    fontWeight: theme.fontWeights.bold
  };
};

var italic = function italic(_ref4) {
  var italic = _ref4.italic;
  return Boolean(italic) && {
    fontStyle: 'italic'
  };
};

var caps = function caps(_ref5) {
  var caps = _ref5.caps;
  return Boolean(caps) && {
    textTransform: 'uppercase'
  };
};

var inline = function inline(_ref6) {
  var inline = _ref6.inline;
  return Boolean(inline) && {
    display: 'inline-block'
  };
};

var strike = function strike(_ref7) {
  var strike = _ref7.strike;
  return Boolean(strike) && {
    textDecoration: 'line-through'
  };
};

var truncated = function truncated(_ref8) {
  var truncated = _ref8.truncated;
  return Boolean(truncated) && {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
    /**
     * Используется для вывода любой текстовой информации.
     */

  };
};

var Text = styled.div(_templateObject$5(), function (props) {
  return props.theme.colors.text;
}, italic, fontSize, space, truncated, color, caps, regular, bold, align, inline, strike); // Text.span = Text.withComponent('span')
// Text.p = Text.withComponent('p')
// Text.s = Text.withComponent('s')

Text.displayName = 'Text';
Text.propTypes = {
  /** Размер шрифта */
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** Выравнивание текста по горизонтали */
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),

  /** Капитель */
  caps: PropTypes.bool,

  /** Толщина текста по-умолчанию */
  regular: PropTypes.bool,

  /** Жирный текст */
  bold: PropTypes.bool,

  /** Курсивный текст  */
  italic: PropTypes.bool,

  /** Цвет текста */
  color: PropTypes.string,

  /** Обрезать текст по ширине родительского блока */
  truncated: PropTypes.bool,

  /** Инлайновый текст */
  inline: PropTypes.bool,

  /** Зачеркнутый текст */
  strike: PropTypes.bool,

  /** margin */
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-top*/
  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-right*/
  mr: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-bottom*/
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-left*/
  ml: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-left and margin-right */
  mx: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-top and margin-bottom */
  my: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding */
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-top*/
  pt: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-right*/
  pr: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-bottom*/
  pb: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-left*/
  pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-left and padding-right */
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-top and padding-bottom */
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** @ignore */
  theme: PropTypes.any
};
Text.defaultProps = {
  fontSize: 1,
  regular: true,
  bold: false,
  italic: false,
  caps: false,
  truncated: false,
  theme: theme
  /** @component */

};

function Heading(_ref) {
  var tag = _ref.tag,
      props = _objectWithoutProperties(_ref, ["tag"]);

  var headings = {
    h1: {
      fontSize: 6,
      caps: false,
      bold: true
    },
    h2: {
      fontSize: 5,
      caps: false,
      bold: true
    },
    h3: {
      fontSize: 4,
      caps: false,
      bold: false
    },
    h4: {
      fontSize: 3,
      caps: false,
      bold: false
    },
    h5: {
      fontSize: 2,
      caps: false,
      bold: true
    },
    h6: {
      fontSize: 1,
      caps: true,
      bold: false
    }
  };
  return React$3__default.createElement(Text, _extends({}, props, headings[tag]));
}

Heading.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};
Heading.defaultProps = {
  tag: 'h3',
  m: 0
};
Heading.displayName = 'Heading';

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  font-family: inherit;\n  font-weight: 400;\n  line-height: 1.5;\n  cursor: ", ";\n  border-radius: ", ";\n  color: ", ";\n  border-width: 1px;\n  border-style: solid;\n  border-color: transparent;\n  outline: none;\n  transition: all ", ";\n  position: relative;\n  min-width: 64px;\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", ";\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var sizes = {
  verySmall: {
    fontSize: 0,
    diameter: 26,
    px: 8,
    py: 2
  },
  small: {
    fontSize: 1,
    diameter: 32,
    px: 8,
    py: 6
  },
  medium: {
    fontSize: 1,
    diameter: 40,
    px: 8,
    py: 10
  },
  large: {
    fontSize: 1,
    diameter: 48,
    px: 8,
    py: 18
  }
};

var getSizeParams = function getSizeParams(size) {
  return sizes[size] || sizes.medium;
};

var size = function size(props) {
  var _getSizeParams = getSizeParams(props.size),
      px = _getSizeParams.px,
      py = _getSizeParams.py,
      fontSize = _getSizeParams.fontSize;

  return {
    fontSize: "".concat(props.theme.fontSizes[fontSize], "px"),
    padding: "".concat(py, "px ").concat(px, "px")
  };
};

var block = function block(props) {
  return Boolean(props.block) && {
    width: '100%'
  };
};

var shapeCircle = function shapeCircle(props) {
  if (props.circle) {
    var _ref = sizes[props.size] || sizes.medium,
        diameter = _ref.diameter;

    return {
      borderRadius: '50%',
      padding: 0,
      width: "".concat(diameter, "px"),
      height: "".concat(diameter, "px"),
      minWidth: 'auto'
    };
  }
};

var type = function type(props) {
  var theme = props.theme,
      disabled = props.disabled,
      size = props.size,
      type = props.type;
  var colors = theme.colors;

  var _getSizeParams2 = getSizeParams(size),
      px = _getSizeParams2.px,
      py = _getSizeParams2.py;

  switch (type) {
    case 'bordered':
      return {
        color: disabled ? colors.lightGrey : colors.black,
        borderColor: disabled ? colors.lightGrey : colors.grey,
        backgroundColor: 'transparent',
        '&:hover': !disabled && {
          color: colors.blue,
          borderColor: colors.blue
        },
        '&:active': !disabled && {
          color: colors.darkBlue,
          borderColor: colors.darkBlue
        }
      };

    case 'dashed':
      return {
        color: disabled ? colors.lightGrey : colors.black,
        borderColor: disabled ? colors.lightGrey : colors.grey,
        backgroundColor: 'transparent',
        borderStyle: 'dashed',
        borderWidth: '1px',
        padding: "".concat(py, "px ").concat(px, "px"),
        '&:hover': !disabled && {
          color: colors.blue,
          borderColor: colors.blue
        },
        '&:active': !disabled && {
          color: colors.darkBlue,
          borderColor: colors.darkBlue
        }
      };

    case 'flat':
      return {
        backgroundColor: 'transparent',
        color: disabled ? colors.lightGrey : colors.black,
        '&:hover': !disabled && {
          color: colors.blue
        },
        '&:active': !disabled && {
          color: colors.darkBlue
        }
      };

    case 'secondary':
      {
        return {
          backgroundColor: disabled ? colors.disabled : colors.lightGrey,
          color: colors.black
        };
      }

    case 'primary':
    default:
      return {
        color: colors.white,
        borderColor: disabled ? colors.lightGrey : colors.primary,
        backgroundColor: disabled ? colors.disabled : colors.lightBlue,
        '&:hover': !disabled && {
          backgroundColor: colors.blue,
          borderColor: colors.blue
        },
        '&:active': !disabled && {
          backgroundColor: colors.darkBlue,
          borderColor: colors.darkBlue
        }
      };
  }
};
/**
 * Используется для инициации каких-либо действий или процессов.
 */


var Button = styled.button(_templateObject$6(), function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, function (props) {
  return props.theme.radii[1] + 'px';
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.duration.fast;
}, block, space, size, type, shapeCircle);
Button.propTypes = {
  /** Вид кнопки */
  type: PropTypes.oneOf(['primary', 'secondary', 'bordered', 'dashed', 'flat']),

  /** Размер кнопки */
  size: PropTypes.oneOf(['verySmall', 'small', 'medium', 'large']),

  /** Растягивает кнопку на 100% родительского блока */
  block: PropTypes.bool,

  /** Круглая кнопка */
  circle: PropTypes.bool,

  /** Функция, которая выполняется после нажатия */
  onClick: PropTypes.func,

  /** margin */
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-top*/
  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-right*/
  mr: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-bottom*/
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-left*/
  ml: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-left and margin-right */
  mx: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-top and margin-bottom */
  my: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding */
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-top*/
  pt: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-right*/
  pr: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-bottom*/
  pb: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-left*/
  pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-left and padding-right */
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-top and padding-bottom */
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** @ignore */
  theme: PropTypes.any
};
Button.defaultProps = {
  type: 'primary',
  size: 'medium',
  circle: false,
  block: false,

  /** @ignore */
  theme: theme
};
Button.displayName = 'Button';

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  border: 0;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-color: ", ";\n  background-color: ", ";\n\n  ", "\n  ", ";\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}

var vertical = function vertical(_ref) {
  var vertical = _ref.vertical;
  return vertical && {
    display: 'inline-block',
    borderBottom: 0,
    width: '1px',
    height: '0.9em',
    top: '0.1em'
    /** Используется для разделения информации линиями. */

  };
};

var DividerComponent = styled.div(_templateObject$7(), function (props) {
  return props.theme.colors[props.color];
}, function (props) {
  return props.theme.colors[props.color];
}, space, vertical);
var HorizontalDivider = Object.assign({}, DividerComponent);
HorizontalDivider.defaultProps = {
  theme: theme,
  mt: 3,
  mb: 3,
  ml: 0,
  mr: 0
};
var VerticalDivider = Object.assign({}, DividerComponent);
VerticalDivider.defaultProps = {
  theme: theme,
  mt: 0,
  mb: 0,
  ml: 3,
  mr: 3
  /** @component */

};

var Divider = function Divider(_ref2) {
  var vertical = _ref2.vertical,
      rest = _objectWithoutProperties(_ref2, ["vertical"]);

  if (vertical) return React$3__default.createElement(VerticalDivider, _extends({
    vertical: true
  }, rest));
  return React$3__default.createElement(HorizontalDivider, _extends({
    vertical: false
  }, rest));
};

Divider.displayName = 'Divider';
Divider.propTypes = {
  /** margin */
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-top*/
  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-right*/
  mr: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-bottom*/
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-left*/
  ml: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-left and margin-right */
  mx: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-top and margin-bottom */
  my: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding */
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-top*/
  pt: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-right*/
  pr: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-bottom*/
  pb: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-left*/
  pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-left and padding-right */
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-top and padding-bottom */
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** Делает линию вертикальной и превращает ее в инлайн элемент */
  vertical: PropTypes.bool,

  /** Цвет */
  color: PropTypes.string,

  /** @ignore */
  theme: PropTypes.any
};
Divider.defaultProps = {
  color: 'border'
};

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: ", ";\n  width: ", ";\n  ", ";\n  user-select: none;\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var sizes$1 = {
  0: ' md-14',
  1: ' md-18',
  2: ' md-24',
  3: ' md-36',
  4: ' md-48',
  14: ' md-14',
  18: ' md-18',
  24: ' md-24',
  36: ' md-36',
  48: ' md-48'
};
var wrapperSizes = {
  0: 14,
  1: 18,
  2: 24,
  3: 36,
  4: 48,
  14: 14,
  18: 18,
  24: 24,
  36: 36,
  48: 48
};
var colors = {
  primary: ' blue',
  hover: ' lightBlue',
  success: ' green',
  warning: ' orange',
  error: ' red',
  border: ' semiLightGrey',
  disabled: ' grey',
  highlight: ' lightGrey',
  onclick: ' darkBlue',
  scrollbar: ' grey',
  black: ' black',
  white: ' white',
  text: ' black' // Create the keyframes

};
var rotate = keyframes(["from{transform:rotate(360deg);}to{transform:rotate(0deg);}"]);
var spinanimation = css$1(["animation:", " 2s linear infinite;"], rotate);
var IconBordered = styled(Flex)(_templateObject$8(), function (props) {
  return props.size + 'px';
}, function (props) {
  return props.size + 'px';
}, function (props) {
  return props.spin && spinanimation;
});

var Icon = function Icon(_ref) {
  var name = _ref.name,
      size = _ref.size,
      color = _ref.color,
      props = _objectWithoutProperties(_ref, ["name", "size", "color"]);

  var nameForClass = 'material-icons ';
  var iconWrapperSize = 24;

  if (sizes$1[size] !== undefined) {
    nameForClass = nameForClass + sizes$1[size];
  } else {
    nameForClass = nameForClass + 'md-18 ';
  }

  if (colors[color] !== undefined) {
    nameForClass = nameForClass + colors[color];
  } else {
    nameForClass = nameForClass + 'black ';
  }

  if (props.hasOwnProperty('hidden')) {
    nameForClass = nameForClass + ' hidden';
  }

  if (wrapperSizes[size] !== undefined) {
    iconWrapperSize = wrapperSizes[size];
  }

  return React$3__default.createElement(IconBordered, _extends({
    size: iconWrapperSize
  }, props), React$3__default.createElement("i", {
    className: "".concat(nameForClass)
  }, name));
};

Icon.displayName = 'Icon';
Icon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  spin: PropTypes.bool
};
Icon.defaultProps = {
  name: 'live_help',
  size: 2,
  color: 'text',
  spin: false
  /** @component */

};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

var get = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};

var themeGet = function themeGet(path, fallback) {
  if (fallback === void 0) {
    fallback = null;
  }

  return function (props) {
    return get(props.theme, path, fallback);
  };
};

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  color: ", ";\n  ", "\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  justify-content: ", ";\n  height: 63px;\n  align-items: center;\n  border-bottom: 1px solid ", ";\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  top: 3px;\n  transform-origin: 8px 8px;\n  color: ", ";\n  transition: transform ", ";\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}

var noop = function noop() {};

var disabled = function disabled(props) {
  return props.disabled && css$1(["opacity:0.4;cursor:not-allowed;"]);
};

var PanelContent = styled(Box)(_templateObject$9(), function (props) {
  return "transition: height ".concat(props.theme.duration.normal, ";");
}); // To fix warning because of passing isOpen prop to <svg />

var AnimatedScaledIcon = styled(Relative)(_templateObject2(), themeGet('color.black', '#080808'), themeGet('duration.normal', '300ms'), function (props) {
  return props.isOpen && "transform: rotate(180deg);";
});
var PanelHeaderWrapper = styled(Flex)(_templateObject3(), function (props) {
  return props.titleAlignment;
}, themeGet('colors.border', '#ecebeb'), function (props) {
  return props.disabled ? 'cursor: not-allowed;' : 'cursor: pointer;';
});
var PanelWrapper = styled(Flex)(_templateObject4(), function (props) {
  return props.theme.fontSizes[1] + 'px';
}, function (props) {
  return props.theme.colors.black;
}, function (props) {
  return !props.isOpen && "overflow: hidden;";
}, disabled);

var PanelHeader = function PanelHeader(_ref) {
  var title = _ref.title,
      togglePanel = _ref.togglePanel,
      isOpen = _ref.isOpen,
      panelKey = _ref.panelKey,
      disabled = _ref.disabled,
      titleAlignment = _ref.titleAlignment;
  return React$3__default.createElement(PanelHeaderWrapper, {
    disabled: disabled,
    titleAlignment: titleAlignment,
    onClick: disabled ? noop : function () {
      return togglePanel(panelKey);
    }
  }, React$3__default.createElement(Flex, {
    justifyContent: "center",
    alignItems: "center",
    width: 16,
    height: 16
  }, isOpen ? React$3__default.createElement(AnimatedScaledIcon, {
    isOpen: isOpen
  }, React$3__default.createElement(Icon, {
    name: 'keyboard_arrow_up',
    size: 16
  })) : React$3__default.createElement(AnimatedScaledIcon, {
    isOpen: isOpen
  }, React$3__default.createElement(Icon, {
    name: 'keyboard_arrow_down',
    size: 16
  }))), React$3__default.createElement(Box, {
    id: title + '-id',
    pr: 3
  }, title));
};
/** Отвечает за вывод содержимого */


var CollapsePanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CollapsePanel, _React$Component);

  function CollapsePanel(props) {
    var _this;

    _classCallCheck(this, CollapsePanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CollapsePanel).call(this, props));
    _this.state = {
      contentHeight: 0
    };
    return _this;
  }

  _createClass(CollapsePanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        contentHeight: this.measure && this.measure.clientHeight
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.measure) {
        if (prevState.contentHeight !== this.measure.clientHeight) this.setState({
          contentHeight: this.measure.clientHeight
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var mergedStyle = _objectSpread2({}, this.props.style, {
        height: this.props.isOpen ? this.state.contentHeight : 0
      });

      return React$3__default.createElement(PanelWrapper, {
        flexDirection: "column",
        disabled: this.props.disabled,
        isOpen: this.props.isOpen
      }, React$3__default.createElement(PanelHeader, _extends({
        titleAlignment: this.props.titleAlignment
      }, this.props)), React$3__default.createElement(PanelContent, _extends({}, this.props, {
        style: mergedStyle
      }), React$3__default.createElement(Box, {
        ref: function ref(measure) {
          return _this2.measure = measure;
        }
      }, this.props.children)));
    }
  }]);

  return CollapsePanel;
}(React$3__default.Component);

CollapsePanel.propTypes = {
  /** Возможность скрыть-раскрыть панель */
  disabled: PropTypes.bool,

  /** Заголовок панели. */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
CollapsePanel.defaultProps = {
  disabled: false,
  title: '',
  titleAlignment: 'flex-start'
};
CollapsePanel.displayName = 'Collapse.Panel';

/** Используется, если необходимо сгруппировать или скрыть большое количество содержимого. */

var Collapse =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Collapse, _React$Component);

  function Collapse(_props) {
    var _this;

    _classCallCheck(this, Collapse);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Collapse).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (newActiveKeys) {
      _this.setState({
        activeKeys: newActiveKeys
      });

      _this.props.onChange && _this.props.onChange(newActiveKeys);
    });

    _defineProperty(_assertThisInitialized(_this), "onPanelClick", function (panelKey) {
      var activeKeys = _this.state.activeKeys;

      var newActiveKeys = _toConsumableArray(activeKeys);

      if (activeKeys.includes(panelKey)) {
        // Closed the panel
        newActiveKeys = activeKeys.filter(function (key) {
          return key !== panelKey;
        });
      } else {
        // Opened the panel
        newActiveKeys = [].concat(_toConsumableArray(activeKeys), [panelKey]);
      }

      _this.handleChange(newActiveKeys);
    });

    _defineProperty(_assertThisInitialized(_this), "getChildren", function () {
      var children = _this.props.children;

      if (children.length) {
        return children.map(function (child, i) {
          var key = child.key || String(i);
          var props = {
            key: child.key || String(i),
            panelKey: key,
            togglePanel: _this.onPanelClick,
            // If controlled, props should be the source of truth.
            isOpen: _this.props.activeKeys ? _this.props.activeKeys.includes(key) : _this.state.activeKeys.includes(key)
          };
          return React$3__default.cloneElement(child, props);
        });
      } else {
        var key = children.key || String('singleKey');
        var props = {
          key: children.key || String('singleKey'),
          panelKey: key,
          togglePanel: _this.onPanelClick,
          // If controlled, props should be the source of truth.
          isOpen: _this.props.activeKeys ? _this.props.activeKeys.includes(key) : _this.state.activeKeys.includes(key)
        };
        return React$3__default.cloneElement(children, props);
      }
    });

    _this.state = {
      activeKeys: _this.props.activeKeys || _this.props.defaultActiveKeys || []
    };
    return _this;
  }

  _createClass(Collapse, [{
    key: "render",
    value: function render() {
      return React$3__default.createElement(Box, null, this.getChildren());
    }
  }]);

  return Collapse;
}(React$3__default.Component);

Collapse.propTypes = {
  /** Список открытых панелей. */
  activeKeys: PropTypes.arrayOf(PropTypes.string),

  /** Список открытых панелей по умолчанию */
  defaultActiveKeys: PropTypes.arrayOf(PropTypes.string),

  /** Функция-хендлер */
  onChange: PropTypes.func
};
Collapse.Panel = CollapsePanel;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
var isArray_1 = isArray;

var isArray$1 = require('./isArray'),
    isSymbol = require('./isSymbol');
/** Used to match property names within property paths. */


var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */

function isKey(value, object) {
  if (isArray$1(value)) {
    return false;
  }

  var type = _typeof(value);

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

module.exports = isKey;

var _isKey = /*#__PURE__*/Object.freeze({

});

var freeGlobal = require('./_freeGlobal');
/** Detect free variable `self`. */


var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

var _root = /*#__PURE__*/Object.freeze({

});

/** Built-in value references. */


var _Symbol = _root.Symbol;
var _Symbol_1 = _Symbol;

/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$1 = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol_1 ? _Symbol_1.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString$1 = objectProto$1.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag$1 = _Symbol_1 ? _Symbol_1.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = _typeof(value);

  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

var isObject$1 = /*#__PURE__*/Object.freeze({

});

/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject$1(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */


var coreJsData = _root['__core-js_shared__'];
var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */


var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */


var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString$1 = funcProto$1.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject$1(value) || _isMasked(value)) {
    return false;
  }

  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */


var nativeCreate = _getNative(Object, 'create');
var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto$3 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty$3.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */


var objectProto$4 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? data[key] !== undefined : hasOwnProperty$4.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = _nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;
var _Hash = Hash;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */


var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;
var _ListCache = ListCache;

/* Built-in method references that are verified to be native. */


var Map = _getNative(_root, 'Map');
var _Map = Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash(),
    'map': new (_Map || _ListCache)(),
    'string': new _Hash()
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = _typeof(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

var _isKeyable = /*#__PURE__*/Object.freeze({

});

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;
var _MapCache = MapCache;

/** Error message constants. */


var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */

function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };

  memoized.cache = new (memoize.Cache || _MapCache)();
  return memoized;
} // Expose `MapCache`.


memoize.Cache = _MapCache;
var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */


var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */

function memoizeCapped(func) {
  var result = memoize_1(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }

    return key;
  });
  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */


var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */

var stringToPath = _memoizeCapped(function (string) {
  var result = [];

  if (string.charCodeAt(0) === 46
  /* . */
  ) {
      result.push('');
    }

  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
var _stringToPath = stringToPath;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}

var _arrayMap = arrayMap;

var baseGetTag$1 = require('./_baseGetTag'),
    isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */


var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol$1(value) {
  return _typeof(value) == 'symbol' || isObjectLike(value) && baseGetTag$1(value) == symbolTag;
}

module.exports = isSymbol$1;

var isSymbol$2 = /*#__PURE__*/Object.freeze({

});

/** Used as references for various `Number` constants. */


var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol_1 ? _Symbol_1.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }

  if (isSymbol$2(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */


function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */


function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }

  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */


var INFINITY$1 = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value == 'string' || isSymbol$2(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */


function baseGet(object, path) {
  path = _castPath(path, object);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}

var _baseGet = baseGet;

var defineProperty = function () {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

var _defineProperty$1 = defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty$1) {
    _defineProperty$1(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/** Used for built-in method references. */


var objectProto$5 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$5 = objectProto$5.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty$5.call(object, key) && eq_1(objValue, value)) || value === undefined && !(key in object)) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = _typeof(value);

  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

var _isIndex = /*#__PURE__*/Object.freeze({

});

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */


function baseSet(object, path, value, customizer) {
  if (!isObject$1(object)) {
    return object;
  }

  path = _castPath(path, object);
  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = _toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;

      if (newValue === undefined) {
        newValue = isObject$1(objValue) ? objValue : _isIndex(path[index + 1]) ? [] : {};
      }
    }

    _assignValue(nested, key, newValue);
    nested = nested[key];
  }

  return object;
}

var _baseSet = baseSet;

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */


function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = _baseGet(object, path);

    if (predicate(value, path)) {
      _baseSet(result, _castPath(path, object), value);
    }
  }

  return result;
}

var _basePickBy = basePickBy;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$1(value) {
  return value != null && _typeof(value) == 'object';
}

module.exports = isObjectLike$1;

var isObjectLike$2 = /*#__PURE__*/Object.freeze({

});

/** `Object#toString` result references. */


var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike$2(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */


var objectProto$6 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$6 = objectProto$6.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = _baseIsArguments(function () {
  return arguments;
}()) ? _baseIsArguments : function (value) {
  return isObjectLike$2(value) && hasOwnProperty$6.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
var isArguments_1 = isArguments;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */


function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);
  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey(path[index]);

    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }

    object = object[key];
  }

  if (result || ++index != length) {
    return result;
  }

  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) && (isArray_1(object) || isArguments_1(object));
}

var _hasPath = hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */


function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

var hasIn_1 = hasIn;

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */


function basePick(object, paths) {
  return _basePickBy(object, paths, function (value, path) {
    return hasIn_1(object, path);
  });
}

var _basePick = basePick;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}

var _arrayPush = arrayPush;

/** Built-in value references. */


var spreadableSymbol = _Symbol_1 ? _Symbol_1.isConcatSpreadable : undefined;
/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */

function isFlattenable(value) {
  return isArray_1(value) || isArguments_1(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}

var _isFlattenable = isFlattenable;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */


function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;
  predicate || (predicate = _isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];

    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        _arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }

  return result;
}

var _baseFlatten = baseFlatten;

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */


function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? _baseFlatten(array, 1) : [];
}

var flatten_1 = flatten;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}

var _apply = apply;

/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */

function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

var constant_1 = constant;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var baseSetToString = !_defineProperty$1 ? identity_1 : function (func, string) {
  return _defineProperty$1(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};
var _baseSetToString = baseSetToString;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */

function shortOut(func) {
  var count = 0,
      lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;

    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }

    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var setToString = _shortOut(_baseSetToString);
var _setToString = setToString;

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */


function flatRest(func) {
  return _setToString(_overRest(func, undefined, flatten_1), func + '');
}

var _flatRest = flatRest;

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */


var pick = _flatRest(function (object, paths) {
  return object == null ? {} : _basePick(object, paths);
});
var pick_1 = pick;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */


function stackClear() {
  this.__data__ = new _ListCache();
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

/** Used as the size to enable large array optimizations. */


var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof _ListCache) {
    var pairs = data.__data__;

    if (!_Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new _MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;
var _Stack = Stack;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }

  return array;
}

var _arrayEach = arrayEach;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */


function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }

  return object;
}

var _copyObject = copyObject;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

var _baseTimes = baseTimes;

var root$1 = require('./_root'),
    stubFalse = require('./stubFalse');
/** Detect free variable `exports`. */


var freeExports = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && (typeof module === "undefined" ? "undefined" : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root$1.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;

var isBuffer$1 = /*#__PURE__*/Object.freeze({

});

/** `Object#toString` result references. */


var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike$2(value) && isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var freeGlobal$1 = require('./_freeGlobal');
/** Detect free variable `exports`. */


var freeExports$1 = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule$1 = freeExports$1 && (typeof module === "undefined" ? "undefined" : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports$1 && freeGlobal$1.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;

var _nodeUtil = /*#__PURE__*/Object.freeze({

});

/* Node.js helper references. */


var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */


var objectProto$7 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$7 = objectProto$7.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer$1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$7.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    _isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$8;
  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeKeys = _overArg(Object.keys, Object);
var _nativeKeys = nativeKeys;

/** Used for built-in method references. */


var objectProto$9 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty$8.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */


function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */


function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */


function baseAssign(object, source) {
  return object && _copyObject(source, keys_1(source), object);
}

var _baseAssign = baseAssign;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}

var _nativeKeysIn = nativeKeysIn;

/** Used for built-in method references. */


var objectProto$a = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$9 = objectProto$a.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeysIn(object) {
  if (!isObject$1(object)) {
    return _nativeKeysIn(object);
  }

  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$9.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}

var _baseKeysIn = baseKeysIn;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */


function keysIn$1(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

var keysIn_1 = keysIn$1;

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */


function baseAssignIn(object, source) {
  return object && _copyObject(source, keysIn_1(source), object);
}

var _baseAssignIn = baseAssignIn;

var root$2 = require('./_root');
/** Detect free variable `exports`. */


var freeExports$2 = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule$2 = freeExports$2 && (typeof module === "undefined" ? "undefined" : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
/** Built-in value references. */

var Buffer$1 = moduleExports$2 ? root$2.Buffer : undefined,
    allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */

function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }

  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

var _cloneBuffer = /*#__PURE__*/Object.freeze({

});

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

var _copyArray = copyArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }

  return result;
}

var _arrayFilter = arrayFilter;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;

/** Used for built-in method references. */


var objectProto$b = Object.prototype;
/** Built-in value references. */

var propertyIsEnumerable$1 = objectProto$b.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbols = !nativeGetSymbols ? stubArray_1 : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};
var _getSymbols = getSymbols;

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */


function copySymbols(source, object) {
  return _copyObject(source, _getSymbols(source), object);
}

var _copySymbols = copySymbols;

/** Built-in value references. */


var getPrototype = _overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype;

/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function (object) {
  var result = [];

  while (object) {
    _arrayPush(result, _getSymbols(object));
    object = _getPrototype(object);
  }

  return result;
};
var _getSymbolsIn = getSymbolsIn;

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */


function copySymbolsIn(source, object) {
  return _copyObject(source, _getSymbolsIn(source), object);
}

var _copySymbolsIn = copySymbolsIn;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */


function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */


function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */


function getAllKeysIn(object) {
  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
}

var _getAllKeysIn = getAllKeysIn;

/* Built-in method references that are verified to be native. */


var DataView = _getNative(_root, 'DataView');
var _DataView = DataView;

/* Built-in method references that are verified to be native. */


var Promise$1 = _getNative(_root, 'Promise');
var _Promise = Promise$1;

/* Built-in method references that are verified to be native. */


var Set = _getNative(_root, 'Set');
var _Set = Set;

/* Built-in method references that are verified to be native. */


var WeakMap = _getNative(_root, 'WeakMap');
var _WeakMap = WeakMap;

/** `Object#toString` result references. */


var mapTag$1 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$1 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';
var dataViewTag$1 = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

var getTag = _baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$1 || _Map && getTag(new _Map()) != mapTag$1 || _Promise && getTag(_Promise.resolve()) != promiseTag || _Set && getTag(new _Set()) != setTag$1 || _WeakMap && getTag(new _WeakMap()) != weakMapTag$1) {
  getTag = function getTag(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$1;

        case mapCtorString:
          return mapTag$1;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag$1;

        case weakMapCtorString:
          return weakMapTag$1;
      }
    }

    return result;
  };
}

var _getTag = getTag;

/** Used for built-in method references. */
var objectProto$c = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$a = objectProto$c.hasOwnProperty;
/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */

function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length); // Add properties assigned by `RegExp#exec`.

  if (length && typeof array[0] == 'string' && hasOwnProperty$a.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }

  return result;
}

var _initCloneArray = initCloneArray;

/** Built-in value references. */


var Uint8Array = _root.Uint8Array;
var _Uint8Array = Uint8Array;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */


function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer;

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */


function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

var _cloneDataView = cloneDataView;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */

function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

var _cloneRegExp = cloneRegExp;

/** Used to convert symbols to primitives and strings. */


var symbolProto$1 = _Symbol_1 ? _Symbol_1.prototype : undefined,
    symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;
/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */

function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

var _cloneSymbol = cloneSymbol;

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */


function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray;

/** `Object#toString` result references. */


var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    mapTag$2 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag$1 = '[object Symbol]';
var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$2 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]';
/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */

function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;

  switch (tag) {
    case arrayBufferTag$1:
      return _cloneArrayBuffer(object);

    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);

    case dataViewTag$2:
      return _cloneDataView(object, isDeep);

    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return _cloneTypedArray(object, isDeep);

    case mapTag$2:
      return new Ctor();

    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);

    case regexpTag$1:
      return _cloneRegExp(object);

    case setTag$2:
      return new Ctor();

    case symbolTag$1:
      return _cloneSymbol(object);
  }
}

var _initCloneByTag = initCloneByTag;

/** Built-in value references. */


var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!isObject$1(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

var _baseCreate = baseCreate;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */


function initCloneObject(object) {
  return typeof object.constructor == 'function' && !_isPrototype(object) ? _baseCreate(_getPrototype(object)) : {};
}

var _initCloneObject = initCloneObject;

/** `Object#toString` result references. */


var mapTag$3 = '[object Map]';
/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */

function baseIsMap(value) {
  return isObjectLike$2(value) && _getTag(value) == mapTag$3;
}

var _baseIsMap = baseIsMap;

/* Node.js helper references. */


var nodeIsMap = _nodeUtil && _nodeUtil.isMap;
/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */

var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;
var isMap_1 = isMap;

/** `Object#toString` result references. */


var setTag$3 = '[object Set]';
/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */

function baseIsSet(value) {
  return isObjectLike$2(value) && _getTag(value) == setTag$3;
}

var _baseIsSet = baseIsSet;

/* Node.js helper references. */


var nodeIsSet = _nodeUtil && _nodeUtil.isSet;
/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */

var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;
var isSet_1 = isSet;

/** Used to compose bitmasks for cloning. */


var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;
/** `Object#toString` result references. */

var argsTag$2 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag$2 = '[object Boolean]',
    dateTag$2 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag$2 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
    mapTag$4 = '[object Map]',
    numberTag$2 = '[object Number]',
    objectTag$2 = '[object Object]',
    regexpTag$2 = '[object RegExp]',
    setTag$4 = '[object Set]',
    stringTag$2 = '[object String]',
    symbolTag$2 = '[object Symbol]',
    weakMapTag$2 = '[object WeakMap]';
var arrayBufferTag$2 = '[object ArrayBuffer]',
    dataViewTag$3 = '[object DataView]',
    float32Tag$2 = '[object Float32Array]',
    float64Tag$2 = '[object Float64Array]',
    int8Tag$2 = '[object Int8Array]',
    int16Tag$2 = '[object Int16Array]',
    int32Tag$2 = '[object Int32Array]',
    uint8Tag$2 = '[object Uint8Array]',
    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
    uint16Tag$2 = '[object Uint16Array]',
    uint32Tag$2 = '[object Uint32Array]';
/** Used to identify `toStringTag` values supported by `_.clone`. */

var cloneableTags = {};
cloneableTags[argsTag$2] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] = cloneableTags[boolTag$2] = cloneableTags[dateTag$2] = cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] = cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] = cloneableTags[int32Tag$2] = cloneableTags[mapTag$4] = cloneableTags[numberTag$2] = cloneableTags[objectTag$2] = cloneableTags[regexpTag$2] = cloneableTags[setTag$4] = cloneableTags[stringTag$2] = cloneableTags[symbolTag$2] = cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] = cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag$2] = cloneableTags[weakMapTag$2] = false;
/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */

function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }

  if (result !== undefined) {
    return result;
  }

  if (!isObject$1(value)) {
    return value;
  }

  var isArr = isArray_1(value);

  if (isArr) {
    result = _initCloneArray(value);

    if (!isDeep) {
      return _copyArray(value, result);
    }
  } else {
    var tag = _getTag(value),
        isFunc = tag == funcTag$2 || tag == genTag$1;

    if (isBuffer$1(value)) {
      return _cloneBuffer(value, isDeep);
    }

    if (tag == objectTag$2 || tag == argsTag$2 || isFunc && !object) {
      result = isFlat || isFunc ? {} : _initCloneObject(value);

      if (!isDeep) {
        return isFlat ? _copySymbolsIn(value, _baseAssignIn(result, value)) : _copySymbols(value, _baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }

      result = _initCloneByTag(value, tag, isDeep);
    }
  } // Check for circular references and return its corresponding clone.


  stack || (stack = new _Stack());
  var stacked = stack.get(value);

  if (stacked) {
    return stacked;
  }

  stack.set(value, result);

  if (isSet_1(value)) {
    value.forEach(function (subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap_1(value)) {
    value.forEach(function (subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull ? isFlat ? _getAllKeysIn : _getAllKeys : isFlat ? keysIn : keys_1;
  var props = isArr ? undefined : keysFunc(value);
  _arrayEach(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    } // Recursively populate clone (susceptible to call stack limits).


    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

var _baseClone = baseClone;

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

var last_1 = last;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }

  end = end > length ? length : end;

  if (end < 0) {
    end += length;
  }

  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);

  while (++index < length) {
    result[index] = array[index + start];
  }

  return result;
}

var _baseSlice = baseSlice;

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */


function parent(object, path) {
  return path.length < 2 ? object : _baseGet(object, _baseSlice(path, 0, -1));
}

var _parent = parent;

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */


function baseUnset(object, path) {
  path = _castPath(path, object);
  object = _parent(object, path);
  return object == null || delete object[_toKey(last_1(path))];
}

var _baseUnset = baseUnset;

/** `Object#toString` result references. */


var objectTag$3 = '[object Object]';
/** Used for built-in method references. */

var funcProto$2 = Function.prototype,
    objectProto$d = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString$2 = funcProto$2.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$b = objectProto$d.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString$2.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!isObjectLike$2(value) || _baseGetTag(value) != objectTag$3) {
    return false;
  }

  var proto = _getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty$b.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString$2.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */


function customOmitClone(value) {
  return isPlainObject_1(value) ? undefined : value;
}

var _customOmitClone = customOmitClone;

/** Used to compose bitmasks for cloning. */


var CLONE_DEEP_FLAG$1 = 1,
    CLONE_FLAT_FLAG$1 = 2,
    CLONE_SYMBOLS_FLAG$1 = 4;
/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */

var omit = _flatRest(function (object, paths) {
  var result = {};

  if (object == null) {
    return result;
  }

  var isDeep = false;
  paths = _arrayMap(paths, function (path) {
    path = _castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  _copyObject(object, _getAllKeysIn(object), result);

  if (isDeep) {
    result = _baseClone(result, CLONE_DEEP_FLAG$1 | CLONE_FLAT_FLAG$1 | CLONE_SYMBOLS_FLAG$1, _customOmitClone);
  }

  var length = paths.length;

  while (length--) {
    _baseUnset(result, paths[length]);
  }

  return result;
});
var omit_1 = omit;

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-content: center;\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  cursor: ", ";\n  ", "\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  justify-content: center;\n  align-items: center;\n  border-radius: ", "px;\n  transition: all ", ";\n  ", "\n  ", "\n  ", "\n\n  ", ":focus + & {\n    box-shadow: 0 0 0 1px ", ";\n  }\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}

var size$1 = function size(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size;
  var sizes = {
    small: {
      width: '14px',
      height: '14px'
    },
    medium: {
      width: '16px',
      height: '16px'
    },
    large: {
      width: '20px',
      height: '20px'
    }
  };
  return css$1(sizes[size]);
};

var background = function background(_ref2) {
  var checked = _ref2.checked,
      disabled = _ref2.disabled,
      rest = _objectWithoutProperties(_ref2, ["checked", "disabled"]);

  var checkbox = rest.theme.colors.checkbox;

  var getColor = function getColor(checked, disabled) {
    if (disabled) {
      return checkbox.disabled;
    }

    return checked ? checkbox.checked : checkbox.unchecked;
  };

  return "background: ".concat(getColor(checked, disabled));
};

var border = function border(_ref3) {
  var checked = _ref3.checked,
      disabled = _ref3.disabled,
      rest = _objectWithoutProperties(_ref3, ["checked", "disabled"]);

  var colors = rest.theme.colors;
  return !(checked || disabled) && "border: 1px solid ".concat(colors.black);
};

var CheckboxInput = styled.input.attrs({
  type: 'checkbox'
})(_templateObject$a());
var StyledCheckbox = styled(Flex)(_templateObject2$1(), themeGet('radii[0]', 4), themeGet('duration.fast', 300), size$1, background, border, CheckboxInput, function (props) {
  return props.theme.colors.blue;
});
var Label = styled.label(_templateObject3$1(), function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, space);
var CheckboxContainer = styled(Flex)(_templateObject4$1());
/** Используется для выбора одного или нескольких значений из представленных вариантов */

var Checkbox =
/*#__PURE__*/
function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox(props) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var checked = event.target.checked;

      _this.setState({
        checked: checked
      });

      _this.props.onChange && _this.props.onChange(checked, event);
    });

    _this.state = {
      checked: typeof props.checked !== 'undefined' ? props.checked : false
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      return React$3__default.createElement(Label, this.props, React$3__default.createElement(CheckboxContainer, {
        onChange: this.handleChange
      }, React$3__default.createElement(CheckboxInput, _extends({}, omit_1(this.props, ['onChange', 'value']), {
        checked: this.state.checked,
        readOnly: true
      })), React$3__default.createElement(StyledCheckbox, {
        checked: this.state.checked,
        size: this.props.size,
        disabled: this.props.disabled
      }, this.state.checked ? React$3__default.createElement(Icon, {
        name: "Check",
        color: "white",
        size: 0
      }) : React$3__default.createElement(Icon, {
        name: "Check",
        color: "white",
        hidden: true,
        size: 0
      }))), React$3__default.createElement(Text, {
        inline: true,
        regular: true,
        ml: 2
      }, this.props.label));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      // If controlled by form
      if (nextProps[FIELD_DATA_PROP]) {
        return {
          checked: nextProps.value
        };
      }

      if ('checked' in nextProps) {
        return {
          checked: nextProps.checked
        };
      }

      return null;
    }
  }]);

  return Checkbox;
}(Component);

Checkbox.propTypes = {
  /** Состояние чекбокса - выбран или нет. */
  checked: PropTypes.bool,

  /** Возможность редактирования */
  disabled: PropTypes.bool,

  /** Текст чекбокса. */
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.node]),

  /** Размер чекбокса */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /** Функция - хендлер, вызывается при клике на чекбокс */
  onChange: PropTypes.func,

  /** margin */
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-top*/
  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-right*/
  mr: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-bottom*/
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-left*/
  ml: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-left and margin-right */
  mx: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-top and margin-bottom */
  my: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding */
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-top*/
  pt: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-right*/
  pr: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-bottom*/
  pb: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-left*/
  pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-left and padding-right */
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-top and padding-bottom */
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array])
  /** @component */

};

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: ", ";\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  margin-top: ", "px;\n  ", "\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  & > label {\n    font-size: ", "px;\n  }\n  ", "\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
/*Общий комментарий:
  Большая часть кода взята из antd Form и Form.Item
  В основном все изменения:
  1) Замена родных дом элементов на styled компоненты + примитивы
  2) CSS => CSS-in-JS.

  Магия тут остается, но я постарался разобраться и откомментить непрозрачные моменты.
*/

function intersperseSpace(list) {
  return list.reduce(function (current, item) {
    return [].concat(_toConsumableArray(current), [' ', item]);
  }, []).slice(1);
}

var withRequiredAsterisk = function withRequiredAsterisk(props) {
  return props.required && css$1(["& > ", ":after{content:' *';display:inline-block;margin-right:", "px;margin-left:", "px;line-height:1;color:", ";font-size:", "px;}"], Label$1, props.theme.space[1], props.theme.space[1], props.theme.colors.error, props.theme.fontSizes[2]);
};

var hasError = function hasError(props) {
  return props.help && css$1(["margin-bottom:", "px;& input{border-color:", ";background:", ";}", "{border-color:", ";}"], props.theme.space[2], props.theme.colors.error, props.theme.colors.white, StyledCheckbox, props.theme.colors.error);
};

var LabelWrapper = styled(Box)(_templateObject$b(), function (props) {
  return props.inline ? '20%' : '100%';
}, function (props) {
  return props.theme.fontSizes[1];
}, withRequiredAsterisk);
var ControlWrapper = styled(Box)(_templateObject2$2(), function (props) {
  return props.theme.space[2];
}, hasError);
var HelpWrapper = styled(Box)(_templateObject3$2(), function (props) {
  return props.theme.colors.error;
}, function (props) {
  return props.theme.fontSizes[1];
});

var Label$1 = function Label(_ref) {
  var label = _ref.label,
      labelProps = _ref.labelProps,
      id = _ref.id,
      required = _ref.required,
      onLabelClick = _ref.onLabelClick;
  return Boolean(label) && React$3__default.createElement(LabelWrapper, _extends({
    key: "label",
    required: required
  }, labelProps), React$3__default.createElement("label", {
    htmlFor: id,
    title: typeof label === 'string' ? label : '',
    onClick: onLabelClick
  }, label));
};

var Help = function Help(_ref2) {
  var children = _ref2.children;
  return React$3__default.createElement(HelpWrapper, {
    className: "help",
    key: "help",
    color: "red"
  }, children);
};

var FormItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormItem, _React$Component);

  function FormItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FormItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FormItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "isRequired", function () {
      var required = _this.props.required;

      if (required !== undefined) {
        return required;
      }

      if (_this.getOnlyControl()) {
        var meta = _this.getMeta() || {};
        var validate = meta.validate || [];
        return validate.filter(function (item) {
          return !!item.rules;
        }).some(function (item) {
          return item.rules.some(function (rule) {
            return rule.required;
          });
        });
      }

      return false;
    });

    return _this;
  }

  _createClass(FormItem, [{
    key: "getControls",
    value: function getControls(children, recursively) {
      var controls = [];
      var childrenArray = React$3__default.Children.toArray(children);

      for (var i = 0; i < childrenArray.length; i++) {
        if (!recursively && controls.length > 0) {
          break;
        }

        var child = childrenArray[i];

        if (child.type && (child.type === FormItem || child.type.displayName === 'FormItem')) {
          continue;
        }

        if (!child.props) {
          continue;
        }

        if (FIELD_META_PROP in child.props) {
          // And means FIELD_DATA_PROP in child.props, too.
          controls.push(child);
        } else if (child.props.children) {
          controls = controls.concat(this.getControls(child.props.children, recursively));
        }
      }

      return controls;
    }
    /** Возвращает ноду элемента, который вводит данные, например - <Input /> */

  }, {
    key: "getOnlyControl",
    value: function getOnlyControl() {
      var child = this.getControls(this.props.children, false)[0];
      return child !== undefined ? child : null;
    }
  }, {
    key: "getChildProp",
    value: function getChildProp(prop) {
      var child = this.getOnlyControl();
      return child && child.props && child.props[prop];
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.getChildProp('id');
    }
    /**
     * Забирает мета-данные из пропсов контрол элемента, заинженченных rc-form.
     * returns: {
     * initialValue,
        name,
        originalProps,
        ref,
        rules,
        trigger,
        validate,
        valuePropName,
     * }
     */

  }, {
    key: "getMeta",
    value: function getMeta() {
      return this.getChildProp(FIELD_META_PROP);
    }
    /**
     * Забирает данные из пропсов контрол элемента, заинженченных rc-form.
     * returns {
     * dirty: Boolean,
        errors: Array.of(
          {
            message, field
          }
        ),
        name: String,
        validating: Boolean,
        value: String|Number|Boolean ?
     * }
     */

  }, {
    key: "getField",
    value: function getField() {
      return this.getChildProp(FIELD_DATA_PROP);
    }
  }, {
    key: "getHelpMessage",
    value: function getHelpMessage() {
      var help = this.props.help;

      if (help === undefined && this.getOnlyControl()) {
        var errors = this.getField().errors;

        if (errors) {
          return intersperseSpace(errors.map(function (e, index) {
            var node = null;

            if (React$3__default.isValidElement(e)) {
              node = e;
            } else if (React$3__default.isValidElement(e.message)) {
              node = e.message;
            }

            return node ? React$3__default.cloneElement(node, {
              key: index
            }) : e.message;
          }));
        }

        return '';
      }

      return help;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["style", "children"]);

      var help = this.getHelpMessage();
      return React$3__default.createElement(Box, _extends({
        style: style,
        help: help
      }, props), React$3__default.createElement(Label$1, _extends({}, pick_1(this.props, ['label', 'labelProps']), {
        id: this.props.id || this.getId(),
        required: this.isRequired(),
        onLabelClick: this.onLabelClick
      })), React$3__default.createElement(ControlWrapper, _extends({}, this.props.controlProps, {
        help: help
      }), children, help && React$3__default.createElement(Help, null, help)));
    }
  }]);

  return FormItem;
}(React$3__default.Component);

FormItem.defaultProps = {};
FormItem.propTypes = {
  /** Стили обертки. */
  style: PropTypes.object,

  /** Содержимое лейбла */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /** Пропсы для обертки лейбла */
  labelProps: PropTypes.object,

  /** Пропсы для обертки элемента, в который вводят данные */
  controlProps: PropTypes.object,

  /** Обязательность поля. */
  required: PropTypes.bool,

  /** Однострочное поле. */
  inline: PropTypes.bool
  /** @component */

};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = {
  version: '2.6.9'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1 = _core.version;

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding


var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

var _isObject = /*#__PURE__*/Object.freeze({

});

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

var document$1 = _global.document; // typeof document.createElement is 'object' in old IE


var is = _isObject(document$1) && _isObject(document$1.createElement);

var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])
 // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;
var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty$c = {}.hasOwnProperty;

var _has = function (it, key) {
  return hasOwnProperty$c.call(it, key);
};

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && _has(exports, key)) continue; // export native or passed

    out = own ? target[key] : source[key]; // prevent global pollution for namespaces

    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
    : IS_BIND && own ? _ctx(out, _global) // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? function (C) {
      var F = function F(a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();

            case 1:
              return new C(a);

            case 2:
              return new C(a, b);
          }

          return new C(a, b, c);
        }

        return C.apply(this, arguments);
      };

      F[PROTOTYPE] = C[PROTOTYPE];
      return F; // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out; // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%

    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out; // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%

      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
}; // type bitmap


$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

var _export = $export;

var toString$1 = {}.toString;

var _cof = function (it) {
  return toString$1.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings
 // eslint-disable-next-line no-prototype-builtins


var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings




var _toIobject = function (it) {
  return _iobject(_defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength


var min = Math.min;

var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;

var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes






var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }
    return !IS_INCLUDES && -1;
  };
};

var _shared = createCommonjsModule(function (module) {
var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: _core.version,
  mode:  'pure' ,
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});
});

var id = 0;
var px = Math.random();

var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var shared = _shared('keys');



var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);

var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    if (key != IE_PROTO) _has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (_has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }

  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)




var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var f$1 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$1
};

var f$2 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$2
};

// 7.1.13 ToObject(argument)


var _toObject = function (it) {
  return Object(_defined(it));
};

var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;

  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!_descriptors || isEnum.call(S, key)) T[key] = S[key];
    }
  }

  return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)


_export(_export.S + _export.F, 'Object', {
  assign: _objectAssign
});

var assign = _core.Object.assign;

var assign$1 = createCommonjsModule(function (module) {
module.exports = {
  "default": assign,
  __esModule: true
};
});

unwrapExports(assign$1);

var _extends$1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _assign2 = _interopRequireDefault(assign$1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
});

unwrapExports(_extends$1);

var _extends$2 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : _typeof(obj);
};

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

function getClientPosition(elem) {
  var box = undefined;
  var x = undefined;
  var y = undefined;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement; // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式

  box = elem.getBoundingClientRect(); // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top; // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.
  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.
  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');

  if (typeof ret !== 'number') {
    var d = w.document; // ie6,7,8 standard mode

    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }

  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}

function _getComputedStyle(elem, name, computedStyle_) {
  var val = '';
  var d = elem.ownerDocument;
  var computedStyle = computedStyle_ || d.defaultView.getComputedStyle(elem, null); // https://github.com/kissyteam/kissy/issues/61

  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');

var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name]; // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity

  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT]; // prevent flashing of content

    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT]; // Put in the new values to get a computed value out

    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX; // Revert the changed values

    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }

  return ret === '' ? 'auto' : ret;
}

var getComputedStyleX = undefined;

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name = undefined; // Remember the old values, and insert the new ones

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem); // Revert the old values

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop = undefined;
  var j = undefined;
  var i = undefined;

  for (j = 0; j < props.length; j++) {
    prop = props[j];

    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = undefined;

        if (prop === 'border') {
          cssProp = prop + which[i] + 'Width';
        } else {
          cssProp = prop + which[i];
        }

        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }

  return value;
}
/**
 * A crude way of determining if an object is a window
 * @member util
 */


function isWindow(obj) {
  // must use == for ie8

  /* eslint eqeqeq:0 */
  return obj != null && obj == obj.window;
}

var domUtils = {};
each(['Width', 'Height'], function (name) {
  domUtils['doc' + name] = function (refWin) {
    var d = refWin.document;
    return Math.max( // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement['scroll' + name], // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body['scroll' + name], domUtils['viewport' + name](d));
  };

  domUtils['viewport' + name] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = 'client' + name;
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop]; // 标准模式取 documentElement
    // backcompat 取 body

    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});
/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */

function getWH(elem, name, extra) {
  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;

  if (borderBoxValue == null || borderBoxValue <= 0) {
    borderBoxValue = undefined; // Fall back to computed then un computed css if necessary

    cssBoxValue = getComputedStyleX(elem, name);

    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    } // Normalize '', auto, and prepare for extra


    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }

  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }

  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;

  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which);
    }

    return cssBoxValue;
  }

  if (borderBoxValueOrIsBorderBox) {
    var padding = extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which) : getPBMWidth(elem, ['margin'], which);
    return val + (extra === BORDER_INDEX ? 0 : padding);
  }

  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
}; // fix #119 : https://github.com/kissyteam/kissy/issues/119

function getWHIgnoreDisplay(elem) {
  var val = undefined;
  var args = arguments; // in case elem is window
  // elem.offsetWidth === undefined

  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }

  return val;
}

function css(el, name, v) {
  var value = v;

  if ((typeof name === 'undefined' ? 'undefined' : _typeof$1(name)) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }

    return undefined;
  }

  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value += 'px';
    }

    el.style[name] = value;
    return undefined;
  }

  return getComputedStyleX(el, name);
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);

  domUtils['outer' + first] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, val) {
    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);

        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which);
        }

        return css(elem, name, val);
      }

      return undefined;
    }

    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
}); // 设置 elem 相对 elem.ownerDocument 的坐标

function setOffset(elem, offset) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }

  var old = getOffset(elem);
  var ret = {};
  var current = undefined;
  var key = undefined;

  for (key in offset) {
    if (offset.hasOwnProperty(key)) {
      current = parseFloat(css(elem, key)) || 0;
      ret[key] = current + offset[key] - old[key];
    }
  }

  css(elem, ret);
}

module.exports = _extends$2({
  getWindow: function getWindow(node) {
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  offset: function offset(el, value) {
    if (typeof value !== 'undefined') {
      setOffset(el, value);
    } else {
      return getOffset(el);
    }
  },
  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var ret = {};

    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }

    var overflow = obj.overflow;

    if (overflow) {
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }

    return ret;
  },
  scrollLeft: function scrollLeft(w, v) {
    if (isWindow(w)) {
      if (v === undefined) {
        return getScrollLeft(w);
      }

      window.scrollTo(v, getScrollTop(w));
    } else {
      if (v === undefined) {
        return w.scrollLeft;
      }

      w.scrollLeft = v;
    }
  },
  scrollTop: function scrollTop(w, v) {
    if (isWindow(w)) {
      if (v === undefined) {
        return getScrollTop(w);
      }

      window.scrollTo(getScrollLeft(w), v);
    } else {
      if (v === undefined) {
        return w.scrollTop;
      }

      w.scrollTop = v;
    }
  },
  viewportWidth: 0,
  viewportHeight: 0
}, domUtils);

var util = /*#__PURE__*/Object.freeze({

});

function scrollIntoView(elem, container, config) {
  config = config || {}; // document 归一化到 window

  if (container.nodeType === 9) {
    container = util.getWindow(container);
  }

  var allowHorizontalScroll = config.allowHorizontalScroll;
  var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
  var alignWithTop = config.alignWithTop;
  var alignWithLeft = config.alignWithLeft;
  var offsetTop = config.offsetTop || 0;
  var offsetLeft = config.offsetLeft || 0;
  var offsetBottom = config.offsetBottom || 0;
  var offsetRight = config.offsetRight || 0;
  allowHorizontalScroll = allowHorizontalScroll === undefined ? true : allowHorizontalScroll;
  var isWin = util.isWindow(container);
  var elemOffset = util.offset(elem);
  var eh = util.outerHeight(elem);
  var ew = util.outerWidth(elem);
  var containerOffset = undefined;
  var ch = undefined;
  var cw = undefined;
  var containerScroll = undefined;
  var diffTop = undefined;
  var diffBottom = undefined;
  var win = undefined;
  var winScroll = undefined;
  var ww = undefined;
  var wh = undefined;

  if (isWin) {
    win = container;
    wh = util.height(win);
    ww = util.width(win);
    winScroll = {
      left: util.scrollLeft(win),
      top: util.scrollTop(win)
    }; // elem 相对 container 可视视窗的距离

    diffTop = {
      left: elemOffset.left - winScroll.left - offsetLeft,
      top: elemOffset.top - winScroll.top - offsetTop
    };
    diffBottom = {
      left: elemOffset.left + ew - (winScroll.left + ww) + offsetRight,
      top: elemOffset.top + eh - (winScroll.top + wh) + offsetBottom
    };
    containerScroll = winScroll;
  } else {
    containerOffset = util.offset(container);
    ch = container.clientHeight;
    cw = container.clientWidth;
    containerScroll = {
      left: container.scrollLeft,
      top: container.scrollTop
    }; // elem 相对 container 可视视窗的距离
    // 注意边框, offset 是边框到根节点

    diffTop = {
      left: elemOffset.left - (containerOffset.left + (parseFloat(util.css(container, 'borderLeftWidth')) || 0)) - offsetLeft,
      top: elemOffset.top - (containerOffset.top + (parseFloat(util.css(container, 'borderTopWidth')) || 0)) - offsetTop
    };
    diffBottom = {
      left: elemOffset.left + ew - (containerOffset.left + cw + (parseFloat(util.css(container, 'borderRightWidth')) || 0)) + offsetRight,
      top: elemOffset.top + eh - (containerOffset.top + ch + (parseFloat(util.css(container, 'borderBottomWidth')) || 0)) + offsetBottom
    };
  }

  if (diffTop.top < 0 || diffBottom.top > 0) {
    // 强制向上
    if (alignWithTop === true) {
      util.scrollTop(container, containerScroll.top + diffTop.top);
    } else if (alignWithTop === false) {
      util.scrollTop(container, containerScroll.top + diffBottom.top);
    } else {
      // 自动调整
      if (diffTop.top < 0) {
        util.scrollTop(container, containerScroll.top + diffTop.top);
      } else {
        util.scrollTop(container, containerScroll.top + diffBottom.top);
      }
    }
  } else {
    if (!onlyScrollIfNeeded) {
      alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;

      if (alignWithTop) {
        util.scrollTop(container, containerScroll.top + diffTop.top);
      } else {
        util.scrollTop(container, containerScroll.top + diffBottom.top);
      }
    }
  }

  if (allowHorizontalScroll) {
    if (diffTop.left < 0 || diffBottom.left > 0) {
      // 强制向上
      if (alignWithLeft === true) {
        util.scrollLeft(container, containerScroll.left + diffTop.left);
      } else if (alignWithLeft === false) {
        util.scrollLeft(container, containerScroll.left + diffBottom.left);
      } else {
        // 自动调整
        if (diffTop.left < 0) {
          util.scrollLeft(container, containerScroll.left + diffTop.left);
        } else {
          util.scrollLeft(container, containerScroll.left + diffBottom.left);
        }
      }
    } else {
      if (!onlyScrollIfNeeded) {
        alignWithLeft = alignWithLeft === undefined ? true : !!alignWithLeft;

        if (alignWithLeft) {
          util.scrollLeft(container, containerScroll.left + diffTop.left);
        } else {
          util.scrollLeft(container, containerScroll.left + diffBottom.left);
        }
      }
    }
  }
}

var domScrollIntoView = scrollIntoView;

var lib = domScrollIntoView;

/** Used for built-in method references. */
var objectProto$e = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$d = objectProto$e.hasOwnProperty;
/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */

function baseHas(object, key) {
  return object != null && hasOwnProperty$d.call(object, key);
}

var _baseHas = baseHas;

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */


function has(object, path) {
  return object != null && _hasPath(object, path, _baseHas);
}

var has_1 = has;

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends5 = require('babel-runtime/helpers/extends');

var _extends6 = _interopRequireDefault(_extends5);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _asyncValidator = require('async-validator');

var _asyncValidator2 = _interopRequireDefault(_asyncValidator);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _set = require('lodash/set');

var _set2 = _interopRequireDefault(_set);

var _eq = require('lodash/eq');

var _eq2 = _interopRequireDefault(_eq);

var _createFieldsStore = require('./createFieldsStore');

var _createFieldsStore2 = _interopRequireDefault(_createFieldsStore);

var _utils = require('./utils');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var DEFAULT_TRIGGER = 'onChange';
/* eslint-disable react/prefer-es6-class */

/* eslint-disable prefer-promise-reject-errors */

function createBaseForm() {
  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var mixins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var validateMessages = option.validateMessages,
      onFieldsChange = option.onFieldsChange,
      onValuesChange = option.onValuesChange,
      _option$mapProps = option.mapProps,
      mapProps = _option$mapProps === undefined ? _utils.identity : _option$mapProps,
      mapPropsToFields = option.mapPropsToFields,
      fieldNameProp = option.fieldNameProp,
      fieldMetaProp = option.fieldMetaProp,
      fieldDataProp = option.fieldDataProp,
      _option$formPropName = option.formPropName,
      formPropName = _option$formPropName === undefined ? 'form' : _option$formPropName,
      formName = option.name,
      withRef = option.withRef;
  return function decorate(WrappedComponent) {
    var Form = (0, _createReactClass2['default'])({
      displayName: 'Form',
      mixins: mixins,
      getInitialState: function getInitialState() {
        var _this = this;

        var fields = mapPropsToFields && mapPropsToFields(this.props);
        this.fieldsStore = (0, _createFieldsStore2['default'])(fields || {});
        this.instances = {};
        this.cachedBind = {};
        this.clearedFieldMetaCache = {};
        this.renderFields = {};
        this.domFields = {}; // HACK: https://github.com/ant-design/ant-design/issues/6406

        ['getFieldsValue', 'getFieldValue', 'setFieldsInitialValue', 'getFieldsError', 'getFieldError', 'isFieldValidating', 'isFieldsValidating', 'isFieldsTouched', 'isFieldTouched'].forEach(function (key) {
          _this[key] = function () {
            var _fieldsStore;

            if (process.env.NODE_ENV !== 'production') {
              (0, _warning2['default'])(false, 'you should not use `ref` on enhanced form, please use `wrappedComponentRef`. ' + 'See: https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140');
            }

            return (_fieldsStore = _this.fieldsStore)[key].apply(_fieldsStore, arguments);
          };
        });
        return {
          submitting: false
        };
      },
      componentDidMount: function componentDidMount() {
        this.cleanUpUselessFields();
      },
      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (mapPropsToFields) {
          this.fieldsStore.updateFields(mapPropsToFields(nextProps));
        }
      },
      componentDidUpdate: function componentDidUpdate() {
        this.cleanUpUselessFields();
      },
      onCollectCommon: function onCollectCommon(name, action, args) {
        var fieldMeta = this.fieldsStore.getFieldMeta(name);

        if (fieldMeta[action]) {
          fieldMeta[action].apply(fieldMeta, (0, _toConsumableArray3['default'])(args));
        } else if (fieldMeta.originalProps && fieldMeta.originalProps[action]) {
          var _fieldMeta$originalPr;

          (_fieldMeta$originalPr = fieldMeta.originalProps)[action].apply(_fieldMeta$originalPr, (0, _toConsumableArray3['default'])(args));
        }

        var value = fieldMeta.getValueFromEvent ? fieldMeta.getValueFromEvent.apply(fieldMeta, (0, _toConsumableArray3['default'])(args)) : _utils.getValueFromEvent.apply(undefined, (0, _toConsumableArray3['default'])(args));

        if (onValuesChange && value !== this.fieldsStore.getFieldValue(name)) {
          var valuesAll = this.fieldsStore.getAllValues();
          var valuesAllSet = {};
          valuesAll[name] = value;
          Object.keys(valuesAll).forEach(function (key) {
            return (0, _set2['default'])(valuesAllSet, key, valuesAll[key]);
          });
          onValuesChange((0, _extends6['default'])((0, _defineProperty3['default'])({}, formPropName, this.getForm()), this.props), (0, _set2['default'])({}, name, value), valuesAllSet);
        }

        var field = this.fieldsStore.getField(name);
        return {
          name: name,
          field: (0, _extends6['default'])({}, field, {
            value: value,
            touched: true
          }),
          fieldMeta: fieldMeta
        };
      },
      onCollect: function onCollect(name_, action) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        var _onCollectCommon = this.onCollectCommon(name_, action, args),
            name = _onCollectCommon.name,
            field = _onCollectCommon.field,
            fieldMeta = _onCollectCommon.fieldMeta;

        var validate = fieldMeta.validate;
        this.fieldsStore.setFieldsAsDirty();
        var newField = (0, _extends6['default'])({}, field, {
          dirty: (0, _utils.hasRules)(validate)
        });
        this.setFields((0, _defineProperty3['default'])({}, name, newField));
      },
      onCollectValidate: function onCollectValidate(name_, action) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        var _onCollectCommon2 = this.onCollectCommon(name_, action, args),
            field = _onCollectCommon2.field,
            fieldMeta = _onCollectCommon2.fieldMeta;

        var newField = (0, _extends6['default'])({}, field, {
          dirty: true
        });
        this.fieldsStore.setFieldsAsDirty();
        this.validateFieldsInternal([newField], {
          action: action,
          options: {
            firstFields: !!fieldMeta.validateFirst
          }
        });
      },
      getCacheBind: function getCacheBind(name, action, fn) {
        if (!this.cachedBind[name]) {
          this.cachedBind[name] = {};
        }

        var cache = this.cachedBind[name];

        if (!cache[action] || cache[action].oriFn !== fn) {
          cache[action] = {
            fn: fn.bind(this, name, action),
            oriFn: fn
          };
        }

        return cache[action].fn;
      },
      getFieldDecorator: function getFieldDecorator(name, fieldOption) {
        var _this2 = this;

        var props = this.getFieldProps(name, fieldOption);
        return function (fieldElem) {
          // We should put field in record if it is rendered
          _this2.renderFields[name] = true;

          var fieldMeta = _this2.fieldsStore.getFieldMeta(name);

          var originalProps = fieldElem.props;

          if (process.env.NODE_ENV !== 'production') {
            var valuePropName = fieldMeta.valuePropName;
            (0, _warning2['default'])(!(valuePropName in originalProps), '`getFieldDecorator` will override `' + valuePropName + '`, ' + ('so please don\'t set `' + valuePropName + '` directly ') + 'and use `setFieldsValue` to set it.');
            var defaultValuePropName = 'default' + valuePropName[0].toUpperCase() + valuePropName.slice(1);
            (0, _warning2['default'])(!(defaultValuePropName in originalProps), '`' + defaultValuePropName + '` is invalid ' + ('for `getFieldDecorator` will set `' + valuePropName + '`,') + ' please use `option.initialValue` instead.');
          }

          fieldMeta.originalProps = originalProps;
          fieldMeta.ref = fieldElem.ref;
          return _react2['default'].cloneElement(fieldElem, (0, _extends6['default'])({}, props, _this2.fieldsStore.getFieldValuePropValue(fieldMeta)));
        };
      },
      getFieldProps: function getFieldProps(name) {
        var _this3 = this;

        var usersFieldOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!name) {
          throw new Error('Must call `getFieldProps` with valid name string!');
        }

        if (process.env.NODE_ENV !== 'production') {
          (0, _warning2['default'])(this.fieldsStore.isValidNestedFieldName(name), 'One field name cannot be part of another, e.g. `a` and `a.b`. Check field: ' + name);
          (0, _warning2['default'])(!('exclusive' in usersFieldOption), '`option.exclusive` of `getFieldProps`|`getFieldDecorator` had been remove.');
        }

        delete this.clearedFieldMetaCache[name];
        var fieldOption = (0, _extends6['default'])({
          name: name,
          trigger: DEFAULT_TRIGGER,
          valuePropName: 'value',
          validate: []
        }, usersFieldOption);
        var rules = fieldOption.rules,
            trigger = fieldOption.trigger,
            _fieldOption$validate = fieldOption.validateTrigger,
            validateTrigger = _fieldOption$validate === undefined ? trigger : _fieldOption$validate,
            validate = fieldOption.validate;
        var fieldMeta = this.fieldsStore.getFieldMeta(name);

        if ('initialValue' in fieldOption) {
          fieldMeta.initialValue = fieldOption.initialValue;
        }

        var inputProps = (0, _extends6['default'])({}, this.fieldsStore.getFieldValuePropValue(fieldOption), {
          ref: this.getCacheBind(name, name + '__ref', this.saveRef)
        });

        if (fieldNameProp) {
          inputProps[fieldNameProp] = formName ? formName + '_' + name : name;
        }

        var validateRules = (0, _utils.normalizeValidateRules)(validate, rules, validateTrigger);
        var validateTriggers = (0, _utils.getValidateTriggers)(validateRules);
        validateTriggers.forEach(function (action) {
          if (inputProps[action]) return;
          inputProps[action] = _this3.getCacheBind(name, action, _this3.onCollectValidate);
        }); // make sure that the value will be collect

        if (trigger && validateTriggers.indexOf(trigger) === -1) {
          inputProps[trigger] = this.getCacheBind(name, trigger, this.onCollect);
        }

        var meta = (0, _extends6['default'])({}, fieldMeta, fieldOption, {
          validate: validateRules
        });
        this.fieldsStore.setFieldMeta(name, meta);

        if (fieldMetaProp) {
          inputProps[fieldMetaProp] = meta;
        }

        if (fieldDataProp) {
          inputProps[fieldDataProp] = this.fieldsStore.getField(name);
        } // This field is rendered, record it


        this.renderFields[name] = true;
        return inputProps;
      },
      getFieldInstance: function getFieldInstance(name) {
        return this.instances[name];
      },
      getRules: function getRules(fieldMeta, action) {
        var actionRules = fieldMeta.validate.filter(function (item) {
          return !action || item.trigger.indexOf(action) >= 0;
        }).map(function (item) {
          return item.rules;
        });
        return (0, _utils.flattenArray)(actionRules);
      },
      setFields: function setFields(maybeNestedFields, callback) {
        var _this4 = this;

        var fields = this.fieldsStore.flattenRegisteredFields(maybeNestedFields);
        this.fieldsStore.setFields(fields);

        if (onFieldsChange) {
          var changedFields = Object.keys(fields).reduce(function (acc, name) {
            return (0, _set2['default'])(acc, name, _this4.fieldsStore.getField(name));
          }, {});
          onFieldsChange((0, _extends6['default'])((0, _defineProperty3['default'])({}, formPropName, this.getForm()), this.props), changedFields, this.fieldsStore.getNestedAllFields());
        }

        this.forceUpdate(callback);
      },
      setFieldsValue: function setFieldsValue(changedValues, callback) {
        var fieldsMeta = this.fieldsStore.fieldsMeta;
        var values = this.fieldsStore.flattenRegisteredFields(changedValues);
        var newFields = Object.keys(values).reduce(function (acc, name) {
          var isRegistered = fieldsMeta[name];

          if (process.env.NODE_ENV !== 'production') {
            (0, _warning2['default'])(isRegistered, 'Cannot use `setFieldsValue` until ' + 'you use `getFieldDecorator` or `getFieldProps` to register it.');
          }

          if (isRegistered) {
            var value = values[name];
            acc[name] = {
              value: value
            };
          }

          return acc;
        }, {});
        this.setFields(newFields, callback);

        if (onValuesChange) {
          var allValues = this.fieldsStore.getAllValues();
          onValuesChange((0, _extends6['default'])((0, _defineProperty3['default'])({}, formPropName, this.getForm()), this.props), changedValues, allValues);
        }
      },
      saveRef: function saveRef(name, _, component) {
        if (!component) {
          var _fieldMeta = this.fieldsStore.getFieldMeta(name);

          if (!_fieldMeta.preserve) {
            // after destroy, delete data
            this.clearedFieldMetaCache[name] = {
              field: this.fieldsStore.getField(name),
              meta: _fieldMeta
            };
            this.clearField(name);
          }

          delete this.domFields[name];
          return;
        }

        this.domFields[name] = true;
        this.recoverClearedField(name);
        var fieldMeta = this.fieldsStore.getFieldMeta(name);

        if (fieldMeta) {
          var ref = fieldMeta.ref;

          if (ref) {
            if (typeof ref === 'string') {
              throw new Error('can not set ref string for ' + name);
            } else if (typeof ref === 'function') {
              ref(component);
            } else if (Object.prototype.hasOwnProperty.call(ref, 'current')) {
              ref.current = component;
            }
          }
        }

        this.instances[name] = component;
      },
      cleanUpUselessFields: function cleanUpUselessFields() {
        var _this5 = this;

        var fieldList = this.fieldsStore.getAllFieldsName();
        var removedList = fieldList.filter(function (field) {
          var fieldMeta = _this5.fieldsStore.getFieldMeta(field);

          return !_this5.renderFields[field] && !_this5.domFields[field] && !fieldMeta.preserve;
        });

        if (removedList.length) {
          removedList.forEach(this.clearField);
        }

        this.renderFields = {};
      },
      clearField: function clearField(name) {
        this.fieldsStore.clearField(name);
        delete this.instances[name];
        delete this.cachedBind[name];
      },
      resetFields: function resetFields(ns) {
        var _this6 = this;

        var newFields = this.fieldsStore.resetFields(ns);

        if (Object.keys(newFields).length > 0) {
          this.setFields(newFields);
        }

        if (ns) {
          var names = Array.isArray(ns) ? ns : [ns];
          names.forEach(function (name) {
            return delete _this6.clearedFieldMetaCache[name];
          });
        } else {
          this.clearedFieldMetaCache = {};
        }
      },
      recoverClearedField: function recoverClearedField(name) {
        if (this.clearedFieldMetaCache[name]) {
          this.fieldsStore.setFields((0, _defineProperty3['default'])({}, name, this.clearedFieldMetaCache[name].field));
          this.fieldsStore.setFieldMeta(name, this.clearedFieldMetaCache[name].meta);
          delete this.clearedFieldMetaCache[name];
        }
      },
      validateFieldsInternal: function validateFieldsInternal(fields, _ref, callback) {
        var _this7 = this;

        var fieldNames = _ref.fieldNames,
            action = _ref.action,
            _ref$options = _ref.options,
            options = _ref$options === undefined ? {} : _ref$options;
        var allRules = {};
        var allValues = {};
        var allFields = {};
        var alreadyErrors = {};
        fields.forEach(function (field) {
          var name = field.name;

          if (options.force !== true && field.dirty === false) {
            if (field.errors) {
              (0, _set2['default'])(alreadyErrors, name, {
                errors: field.errors
              });
            }

            return;
          }

          var fieldMeta = _this7.fieldsStore.getFieldMeta(name);

          var newField = (0, _extends6['default'])({}, field);
          newField.errors = undefined;
          newField.validating = true;
          newField.dirty = true;
          allRules[name] = _this7.getRules(fieldMeta, action);
          allValues[name] = newField.value;
          allFields[name] = newField;
        });
        this.setFields(allFields); // in case normalize

        Object.keys(allValues).forEach(function (f) {
          allValues[f] = _this7.fieldsStore.getFieldValue(f);
        });

        if (callback && (0, _utils.isEmptyObject)(allFields)) {
          callback((0, _utils.isEmptyObject)(alreadyErrors) ? null : alreadyErrors, this.fieldsStore.getFieldsValue(fieldNames));
          return;
        }

        var validator = new _asyncValidator2['default'](allRules);

        if (validateMessages) {
          validator.messages(validateMessages);
        }

        validator.validate(allValues, options, function (errors) {
          var errorsGroup = (0, _extends6['default'])({}, alreadyErrors);

          if (errors && errors.length) {
            errors.forEach(function (e) {
              var errorFieldName = e.field;
              var fieldName = errorFieldName; // Handle using array validation rule.
              // ref: https://github.com/ant-design/ant-design/issues/14275

              Object.keys(allRules).some(function (ruleFieldName) {
                var rules = allRules[ruleFieldName] || []; // Exist if match rule

                if (ruleFieldName === errorFieldName) {
                  fieldName = ruleFieldName;
                  return true;
                } // Skip if not match array type


                if (rules.every(function (_ref2) {
                  var type = _ref2.type;
                  return type !== 'array';
                }) && errorFieldName.indexOf(ruleFieldName) !== 0) {
                  return false;
                } // Exist if match the field name


                var restPath = errorFieldName.slice(ruleFieldName.length + 1);

                if (/^\d+$/.test(restPath)) {
                  fieldName = ruleFieldName;
                  return true;
                }

                return false;
              });
              var field = (0, _get2['default'])(errorsGroup, fieldName);

              if (_typeof(field) !== 'object' || Array.isArray(field)) {
                (0, _set2['default'])(errorsGroup, fieldName, {
                  errors: []
                });
              }

              var fieldErrors = (0, _get2['default'])(errorsGroup, fieldName.concat('.errors'));
              fieldErrors.push(e);
            });
          }

          var expired = [];
          var nowAllFields = {};
          Object.keys(allRules).forEach(function (name) {
            var fieldErrors = (0, _get2['default'])(errorsGroup, name);

            var nowField = _this7.fieldsStore.getField(name); // avoid concurrency problems


            if (!(0, _eq2['default'])(nowField.value, allValues[name])) {
              expired.push({
                name: name
              });
            } else {
              nowField.errors = fieldErrors && fieldErrors.errors;
              nowField.value = allValues[name];
              nowField.validating = false;
              nowField.dirty = false;
              nowAllFields[name] = nowField;
            }
          });

          _this7.setFields(nowAllFields);

          if (callback) {
            if (expired.length) {
              expired.forEach(function (_ref3) {
                var name = _ref3.name;
                var fieldErrors = [{
                  message: name + ' need to revalidate',
                  field: name
                }];
                (0, _set2['default'])(errorsGroup, name, {
                  expired: true,
                  errors: fieldErrors
                });
              });
            }

            callback((0, _utils.isEmptyObject)(errorsGroup) ? null : errorsGroup, _this7.fieldsStore.getFieldsValue(fieldNames));
          }
        });
      },
      validateFields: function validateFields(ns, opt, cb) {
        var _this8 = this;

        var pending = new Promise(function (resolve, reject) {
          var _getParams = (0, _utils.getParams)(ns, opt, cb),
              names = _getParams.names,
              options = _getParams.options;

          var _getParams2 = (0, _utils.getParams)(ns, opt, cb),
              callback = _getParams2.callback;

          if (!callback || typeof callback === 'function') {
            var oldCb = callback;

            callback = function callback(errors, values) {
              if (oldCb) {
                oldCb(errors, values);
              } else if (errors) {
                reject({
                  errors: errors,
                  values: values
                });
              } else {
                resolve(values);
              }
            };
          }

          var fieldNames = names ? _this8.fieldsStore.getValidFieldsFullName(names) : _this8.fieldsStore.getValidFieldsName();
          var fields = fieldNames.filter(function (name) {
            var fieldMeta = _this8.fieldsStore.getFieldMeta(name);

            return (0, _utils.hasRules)(fieldMeta.validate);
          }).map(function (name) {
            var field = _this8.fieldsStore.getField(name);

            field.value = _this8.fieldsStore.getFieldValue(name);
            return field;
          });

          if (!fields.length) {
            callback(null, _this8.fieldsStore.getFieldsValue(fieldNames));
            return;
          }

          if (!('firstFields' in options)) {
            options.firstFields = fieldNames.filter(function (name) {
              var fieldMeta = _this8.fieldsStore.getFieldMeta(name);

              return !!fieldMeta.validateFirst;
            });
          }

          _this8.validateFieldsInternal(fields, {
            fieldNames: fieldNames,
            options: options
          }, callback);
        });
        pending['catch'](function (e) {
          if (console.error && process.env.NODE_ENV !== 'production') {
            console.error(e);
          }

          return e;
        });
        return pending;
      },
      isSubmitting: function isSubmitting() {
        if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
          (0, _warning2['default'])(false, '`isSubmitting` is deprecated. ' + 'Actually, it\'s more convenient to handle submitting status by yourself.');
        }

        return this.state.submitting;
      },
      submit: function submit(callback) {
        var _this9 = this;

        if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
          (0, _warning2['default'])(false, '`submit` is deprecated. ' + 'Actually, it\'s more convenient to handle submitting status by yourself.');
        }

        var fn = function fn() {
          _this9.setState({
            submitting: false
          });
        };

        this.setState({
          submitting: true
        });
        callback(fn);
      },
      render: function render() {
        var _props = this.props,
            wrappedComponentRef = _props.wrappedComponentRef,
            restProps = (0, _objectWithoutProperties3['default'])(_props, ['wrappedComponentRef']); // eslint-disable-line

        var formProps = (0, _defineProperty3['default'])({}, formPropName, this.getForm());

        if (withRef) {
          if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
            (0, _warning2['default'])(false, '`withRef` is deprecated, please use `wrappedComponentRef` instead. ' + 'See: https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140');
          }

          formProps.ref = 'wrappedComponent';
        } else if (wrappedComponentRef) {
          formProps.ref = wrappedComponentRef;
        }

        var props = mapProps.call(this, (0, _extends6['default'])({}, formProps, restProps));
        return _react2['default'].createElement(WrappedComponent, props);
      }
    });
    return (0, _utils.argumentContainer)(Form, WrappedComponent);
  };
}

exports['default'] = createBaseForm;
module.exports = exports['default'];

var createBaseForm$1 = /*#__PURE__*/Object.freeze({

});

var createForm_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixin = undefined;



var _createBaseForm2 = _interopRequireDefault(createBaseForm$1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var mixin = exports.mixin = {
  getForm: function getForm() {
    return {
      getFieldsValue: this.fieldsStore.getFieldsValue,
      getFieldValue: this.fieldsStore.getFieldValue,
      getFieldInstance: this.getFieldInstance,
      setFieldsValue: this.setFieldsValue,
      setFields: this.setFields,
      setFieldsInitialValue: this.fieldsStore.setFieldsInitialValue,
      getFieldDecorator: this.getFieldDecorator,
      getFieldProps: this.getFieldProps,
      getFieldsError: this.fieldsStore.getFieldsError,
      getFieldError: this.fieldsStore.getFieldError,
      isFieldValidating: this.fieldsStore.isFieldValidating,
      isFieldsValidating: this.fieldsStore.isFieldsValidating,
      isFieldsTouched: this.fieldsStore.isFieldsTouched,
      isFieldTouched: this.fieldsStore.isFieldTouched,
      isSubmitting: this.isSubmitting,
      submit: this.submit,
      validateFields: this.validateFields,
      resetFields: this.resetFields
    };
  }
};

function createForm(options) {
  return (0, _createBaseForm2['default'])(options, [mixin]);
}

exports['default'] = createForm;
});

unwrapExports(createForm_1);
var createForm_2 = createForm_1.mixin;

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault$1(_extends2);

exports.argumentContainer = argumentContainer;
exports.identity = identity$1;
exports.flattenArray = flattenArray;
exports.treeTraverse = treeTraverse;
exports.flattenFields = flattenFields;
exports.normalizeValidateRules = normalizeValidateRules;
exports.getValidateTriggers = getValidateTriggers;
exports.getValueFromEvent = getValueFromEvent;
exports.getErrorStrs = getErrorStrs;
exports.getParams = getParams;
exports.isEmptyObject = isEmptyObject;
exports.hasRules = hasRules;
exports.startsWith = startsWith;

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault$1(_hoistNonReactStatics);

var _warning$1 = require('warning');

var _warning2$1 = _interopRequireDefault$1(_warning$1);

function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent';
}

function argumentContainer(Container, WrappedComponent) {
  /* eslint no-param-reassign:0 */
  Container.displayName = 'Form(' + getDisplayName(WrappedComponent) + ')';
  Container.WrappedComponent = WrappedComponent;
  return (0, _hoistNonReactStatics2['default'])(Container, WrappedComponent);
}

function identity$1(obj) {
  return obj;
}

function flattenArray(arr) {
  return Array.prototype.concat.apply([], arr);
}

function treeTraverse() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var tree = arguments[1];
  var isLeafNode = arguments[2];
  var errorMessage = arguments[3];
  var callback = arguments[4];

  if (isLeafNode(path, tree)) {
    callback(path, tree);
  } else if (tree === undefined || tree === null) ; else if (Array.isArray(tree)) {
    tree.forEach(function (subTree, index) {
      return treeTraverse(path + '[' + index + ']', subTree, isLeafNode, errorMessage, callback);
    });
  } else {
    // It's object and not a leaf node
    if (_typeof(tree) !== 'object') {
      (0, _warning2$1['default'])(false, errorMessage);
      return;
    }

    Object.keys(tree).forEach(function (subTreeKey) {
      var subTree = tree[subTreeKey];
      treeTraverse('' + path + (path ? '.' : '') + subTreeKey, subTree, isLeafNode, errorMessage, callback);
    });
  }
}

function flattenFields(maybeNestedFields, isLeafNode, errorMessage) {
  var fields = {};
  treeTraverse(undefined, maybeNestedFields, isLeafNode, errorMessage, function (path, node) {
    fields[path] = node;
  });
  return fields;
}

function normalizeValidateRules(validate, rules, validateTrigger) {
  var validateRules = validate.map(function (item) {
    var newItem = (0, _extends3['default'])({}, item, {
      trigger: item.trigger || []
    });

    if (typeof newItem.trigger === 'string') {
      newItem.trigger = [newItem.trigger];
    }

    return newItem;
  });

  if (rules) {
    validateRules.push({
      trigger: validateTrigger ? [].concat(validateTrigger) : [],
      rules: rules
    });
  }

  return validateRules;
}

function getValidateTriggers(validateRules) {
  return validateRules.filter(function (item) {
    return !!item.rules && item.rules.length;
  }).map(function (item) {
    return item.trigger;
  }).reduce(function (pre, curr) {
    return pre.concat(curr);
  }, []);
}

function getValueFromEvent(e) {
  // To support custom element
  if (!e || !e.target) {
    return e;
  }

  var target = e.target;
  return target.type === 'checkbox' ? target.checked : target.value;
}

function getErrorStrs(errors) {
  if (errors) {
    return errors.map(function (e) {
      if (e && e.message) {
        return e.message;
      }

      return e;
    });
  }

  return errors;
}

function getParams(ns, opt, cb) {
  var names = ns;
  var options = opt;
  var callback = cb;

  if (cb === undefined) {
    if (typeof names === 'function') {
      callback = names;
      options = {};
      names = undefined;
    } else if (Array.isArray(names)) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      } else {
        options = options || {};
      }
    } else {
      callback = options;
      options = names || {};
      names = undefined;
    }
  }

  return {
    names: names,
    options: options,
    callback: callback
  };
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function hasRules(validate) {
  if (validate) {
    return validate.some(function (item) {
      return item.rules && item.rules.length;
    });
  }

  return false;
}

function startsWith(str, prefix) {
  return str.lastIndexOf(prefix, 0) === 0;
}

var utils = /*#__PURE__*/Object.freeze({

});

var createDOMForm_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _extends3 = _interopRequireDefault(_extends$1);



var _reactDom2 = _interopRequireDefault(reactDom);



var _domScrollIntoView2 = _interopRequireDefault(lib);



var _has2 = _interopRequireDefault(has_1);



var _createBaseForm2 = _interopRequireDefault(createBaseForm$1);





function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function computedStyle(el, prop) {
  var getComputedStyle = window.getComputedStyle;
  var style = // If we have getComputedStyle
  getComputedStyle ? // Query it
  // TODO: From CSS-Query notes, we might need (node, null) for FF
  getComputedStyle(el) : // Otherwise, we are in IE and use currentStyle
  el.currentStyle;

  if (style) {
    return style[// Switch to camelCase for CSSOM
    // DEV: Grabbed from jQuery
    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
    prop.replace(/-(\w)/gi, function (word, letter) {
      return letter.toUpperCase();
    })];
  }

  return undefined;
}

function getScrollableContainer(n) {
  var node = n;
  var nodeName = void 0;
  /* eslint no-cond-assign:0 */

  while ((nodeName = node.nodeName.toLowerCase()) !== 'body') {
    var overflowY = computedStyle(node, 'overflowY'); // https://stackoverflow.com/a/36900407/3040605

    if (node !== n && (overflowY === 'auto' || overflowY === 'scroll') && node.scrollHeight > node.clientHeight) {
      return node;
    }

    node = node.parentNode;
  }

  return nodeName === 'body' ? node.ownerDocument : node;
}

var mixin = {
  getForm: function getForm() {
    return (0, _extends3['default'])({}, createForm_1.mixin.getForm.call(this), {
      validateFieldsAndScroll: this.validateFieldsAndScroll
    });
  },
  validateFieldsAndScroll: function validateFieldsAndScroll(ns, opt, cb) {
    var _this = this;

    var _getParams = (0, utils.getParams)(ns, opt, cb),
        names = _getParams.names,
        callback = _getParams.callback,
        options = _getParams.options;

    var newCb = function newCb(error, values) {
      if (error) {
        var validNames = _this.fieldsStore.getValidFieldsName();

        var firstNode = void 0;
        var firstTop = void 0;
        validNames.forEach(function (name) {
          if ((0, _has2['default'])(error, name)) {
            var instance = _this.getFieldInstance(name);

            if (instance) {
              var node = _reactDom2['default'].findDOMNode(instance);

              var top = node.getBoundingClientRect().top;

              if (node.type !== 'hidden' && (firstTop === undefined || firstTop > top)) {
                firstTop = top;
                firstNode = node;
              }
            }
          }
        });

        if (firstNode) {
          var c = options.container || getScrollableContainer(firstNode);
          (0, _domScrollIntoView2['default'])(firstNode, c, (0, _extends3['default'])({
            onlyScrollIfNeeded: true
          }, options.scroll));
        }
      }

      if (typeof callback === 'function') {
        callback(error, values);
      }
    };

    return this.validateFields(names, options, newCb);
  }
};

function createDOMForm(option) {
  return (0, _createBaseForm2['default'])((0, _extends3['default'])({}, option), [mixin]);
}

exports['default'] = createDOMForm;
module.exports = exports['default'];
});

var createDOMForm = unwrapExports(createDOMForm_1);

var classCallCheck = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
});

unwrapExports(classCallCheck);

var createFormField_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _extends3 = _interopRequireDefault(_extends$1);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);

exports.isFormField = isFormField;
exports["default"] = createFormField;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var Field = function Field(fields) {
  (0, _classCallCheck3["default"])(this, Field);
  (0, _extends3["default"])(this, fields);
};

function isFormField(obj) {
  return obj instanceof Field;
}

function createFormField(field) {
  if (isFormField(field)) {
    return field;
  }

  return new Field(field);
}
});

var createFormField = unwrapExports(createFormField_1);
var createFormField_2 = createFormField_1.isFormField;

var FIELD_META_PROP = 'form-item-meta';
var FIELD_DATA_PROP = 'form-item-data';

var Form =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, _getPrototypeOf(Form).apply(this, arguments));
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      return React$3__default.createElement("form", this.props);
    }
  }]);

  return Form;
}(React$3__default.Component);

_defineProperty(Form, "create", function (options) {
  return createDOMForm(_objectSpread2({
    fieldNameProp: 'id'
  }, options, {
    fieldMetaProp: FIELD_META_PROP,
    fieldDataProp: FIELD_DATA_PROP
  }));
});

_defineProperty(Form, "createFormField", createFormField);

Form.Item = FormItem;

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  border-width: 1px;\n  border-style: solid;\n  border-color: transparent;\n  border-radius: ", ";\n  transition: all ", ";\n  :hover {\n    border-color: ", "\n  } \n  :focus {\n    outline: none;\n    background: ", ";\n    border-color: ", ";\n  }\n  background: ", ";\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", ";\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}

var propsToOmit = ['suffix', 'prefix', 'width', 'value', 'wrapperStyle', 'onChange'];

var disabled$1 = function disabled(props) {
  return props.disabled && css$1(["background:", ";cursor:not-allowed;"], themeGet('colors.input.disabled', '#b5b5b5'));
};

var size$2 = function size(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      theme = _ref.theme;
  var sizes = {
    // Same as button heights, but with height, instead of paddings.
    small: {
      fontSize: theme.fontSizes[0],
      height: 32
    },
    medium: {
      fontSize: theme.fontSizes[1],
      height: 40
    },
    large: {
      fontSize: theme.fontSizes[2],
      height: 48
    }
  };
  return sizes[size];
};

var inline$1 = function inline(_ref2) {
  var inline = _ref2.inline;
  return Boolean(inline) && {
    display: 'inline-block'
  };
};

var HTMLInput = styled.input(_templateObject$c(), themeGet('font.main', "'PT Sans'"), function (props) {
  return props.theme.radii[1] + 'px';
}, function (props) {
  return props.theme.duration.fast;
}, themeGet('colors.black', '#3a3a3a'), themeGet('colors.white', '#ffffff'), themeGet('colors.lightBlue', '#0091ea'), function (props) {
  return props.theme.colors.lightGrey;
}, width, space, size$2, disabled$1, inline$1);
var InputWrapper = styled(Relative)({
  display: 'flex',
  flexGrow: 1,
  alignItems: 'center'
});
var Adornment = styled(Absolute)({
  display: 'flex'
});
/** Получение данных от пользователя.*/

var Input =
/*#__PURE__*/
function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var newValue = event.target.value;

      _this.setState({
        value: newValue
      });

      _this.props.onChange && _this.props.onChange(newValue, event);
    });

    _defineProperty(_assertThisInitialized(_this), "saveInput", function (node) {
      _this.input = node;
    });

    _defineProperty(_assertThisInitialized(_this), "focus", function () {
      _this.input.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "blur", function () {
      _this.input.blur();
    });

    _this.state = {
      value: typeof props.value !== 'undefined' ? props.defaultValue : props.value
    };
    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefix = _this$props.prefix,
          suffix = _this$props.suffix,
          width = _this$props.width,
          wrapperStyle = _this$props.wrapperStyle;
      return React$3__default.createElement(InputWrapper, {
        width: width,
        style: wrapperStyle
      }, prefix && React$3__default.createElement(Adornment, {
        left: 0,
        pl: 2
      }, prefix), React$3__default.createElement(HTMLInput, _extends({}, omit_1(this.props, propsToOmit), {
        pl: prefix ? 4 : 3,
        pr: suffix ? 4 : 2,
        width: "100%",
        ref: this.saveRef,
        value: this.state.value,
        onChange: this.handleChange
      })), suffix && React$3__default.createElement(Adornment, {
        right: 0,
        pr: 2
      }, suffix));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          value: nextProps.value
        };
      }

      return null;
    }
  }]);

  return Input;
}(Component);

Input.propTypes = {
  /** Ширина враппера для инпута.*/
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** Иконка в начале инпута. */
  prefix: PropTypes.element,

  /** Иконка в конце инпута. */
  suffix: PropTypes.element,

  /** Размер инпута: */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /** Стили враппера */
  wrapperStyle: PropTypes.object
};
Input.defaultProps = {
  size: 'medium'
};
Input.displayName = 'Input';

function _templateObject$d() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size:  ", ";\n  border-width: 1px;\n  border-style: solid;\n  border-color: transparent;\n  border-radius: ", ";\n  transition: all ", ";\n  :hover {\n    border-color: ", "\n  } \n  :focus {\n    outline: none;\n    background: ", ";\n    border-color: ", ";\n  }\n  background: ", ";\n\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}

var disabled$2 = function disabled(props) {
  return props.disabled && css$1(["background:", ";cursor:not-allowed;"], themeGet('colors.input.disabled', '#b5b5b5'));
};

var HTMLTextarea = styled.textarea(_templateObject$d(), themeGet('font.main', "'PT Sans'"), function (props) {
  return props.theme.fontSizes[1];
}, function (props) {
  return props.theme.radii[1] + 'px';
}, function (props) {
  return props.theme.duration.fast;
}, themeGet('colors.black', '#3a3a3a'), themeGet('colors.white', '#ffffff'), themeGet('colors.lightBlue', '#0091ea'), function (props) {
  return props.theme.colors.lightGrey;
}, fontSize, width, space, disabled$2);
var InputWrapper$1 = styled(Relative)({
  display: 'flex',
  flexGrow: 1,
  alignItems: 'center'
});
/** Получение данных от пользователя.*/

var Textarea =
/*#__PURE__*/
function (_Component) {
  _inherits(Textarea, _Component);

  function Textarea(props) {
    var _this;

    _classCallCheck(this, Textarea);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Textarea).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var newValue = event.target.value;

      _this.setState({
        value: newValue
      });

      _this.props.onChange && _this.props.onChange(newValue, event);
    });

    _defineProperty(_assertThisInitialized(_this), "saveInput", function (node) {
      _this.input = node;
    });

    _defineProperty(_assertThisInitialized(_this), "focus", function () {
      _this.input.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "blur", function () {
      _this.input.blur();
    });

    _this.state = {
      value: typeof props.value !== 'undefined' ? props.defaultValue : props.value
    };
    return _this;
  }

  _createClass(Textarea, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          wrapperStyle = _this$props.wrapperStyle,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["width", "wrapperStyle", "children"]);

      return React$3__default.createElement(InputWrapper$1, {
        width: width,
        style: wrapperStyle
      }, React$3__default.createElement(HTMLTextarea, _extends({
        width: "100%",
        ref: this.saveRef,
        value: this.state.value,
        onChange: this.handleChange
      }, props)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          value: nextProps.value
        };
      }

      return null;
    }
  }]);

  return Textarea;
}(Component);

Textarea.propTypes = {
  /** Ширина враппера для инпута.*/
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** Стили враппера */
  wrapperStyle: PropTypes.object
};
Textarea.defaultProps = {
  py: 2,
  px: 3,
  fontSize: 1
};
Textarea.displayName = 'Textarea';

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  outline: none;\n  width: 24px;\n  height: 16px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: ", ";\n  ", "\n  ", "\n  ", "\n  :focus {\n    /* \u0412\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u043A\u043E\u043D\u0435\u0447\u043D\u043E */\n    border-color: ", ";\n    ", " {\n      border-color: ", ";\n    }\n  }\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$e() {
  var data = _taggedTemplateLiteral(["\n  width: 10px;\n  height: 10px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 8px;\n  ", "\n  ", "\n  ", "\n  transition: left ", ";\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}

var noop$1 = function noop() {};

var tracksBackground = function tracksBackground(props) {
  var checked = props.checked,
      disabled = props.disabled;

  if (disabled) {
    return css$1(["background:", ";"], themeGet('colors.grey', '#b5b5b5'));
  }

  if (checked) {
    return css$1(["background:", ";"], themeGet('colors.lightBlue', '#0091ea'));
  }

  return css$1(["background:", ";"], themeGet('colors.white', '#ffffff'));
};

var tracksBorder = function tracksBorder(_ref) {
  var checked = _ref.checked,
      disabled = _ref.disabled;

  if (!checked && !disabled) {
    return css$1(["border-color:", ";"], themeGet('colors.black', '#3a3a3a'));
  }

  return "border-color: transparent";
};

var handleBackground = function handleBackground(_ref2) {
  var disabled = _ref2.disabled;
  return css$1(["background:", ";"], disabled ? themeGet('colors.lightGrey', '#f5f5f5') : themeGet('color.white', '#ffffff'));
};

var handleBorder = function handleBorder(_ref3) {
  var checked = _ref3.checked,
      disabled = _ref3.disabled;

  if (!checked && !disabled) {
    return css$1(["border-color:", ";"], themeGet('colors.black', '#3a3a3a'));
  }

  return 'border-color: transparent';
};

var handlePosition = function handlePosition(_ref4) {
  var checked = _ref4.checked,
      disabled = _ref4.disabled,
      rest = _objectWithoutProperties(_ref4, ["checked", "disabled"]);

  if (checked) {
    return css$1(["top:2px;left:10px;"]);
  }

  return css$1(["top:2px;left:2px;"]);
};

var cursor = function cursor(_ref5) {
  var disabled = _ref5.disabled;
  return disabled ? 'cursor: not-allowed;' : 'cursor: pointer;';
};

var ToggleHandle = styled(Absolute)(_templateObject$e(), handleBackground, handlePosition, handleBorder, themeGet('durations.normal', '300ms'));
var ToggleTrack = styled.button.attrs({
  role: 'switch'
})(_templateObject2$3(), themeGet('radii[2]', '8px'), tracksBackground, tracksBorder, cursor, themeGet('color.blue', '#1e88e5'), ToggleHandle, function (props) {
  return !props.checked && themeGet('color.blue', '#1e88e5');
});
/** Используется так же, как и Checkbox, но для единственного значения. */

var Toggle =
/*#__PURE__*/
function (_Component) {
  _inherits(Toggle, _Component);

  function Toggle(props) {
    var _this;

    _classCallCheck(this, Toggle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Toggle).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      event.preventDefault();
      var flippedValue = !_this.state.checked;

      _this.setState({
        checked: flippedValue
      });

      _this.props.onChange && _this.props.onChange(flippedValue);
    });

    _this.state = {
      checked: typeof props.checked !== 'undefined' ? props.checked : false
    };
    return _this;
  }

  _createClass(Toggle, [{
    key: "render",
    value: function render() {
      var checked = this.state.checked;
      var disabled = this.props.disabled;
      return React$3__default.createElement(ToggleTrack, {
        checked: checked,
        disabled: disabled,
        onClick: disabled ? noop$1 : this.handleChange
      }, React$3__default.createElement(ToggleHandle, {
        checked: checked,
        disabled: disabled
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      // If controlled by form
      if (nextProps[FIELD_DATA_PROP]) {
        return {
          checked: nextProps.value
        };
      }

      if ('checked' in nextProps) {
        return {
          checked: nextProps.checked
        };
      }

      return null;
    }
  }]);

  return Toggle;
}(Component);

Toggle.propTypes = {
  /** Состояние тумблера. */
  checked: PropTypes.bool,

  /** Возможность редактирования */
  disabled: PropTypes.bool,

  /** Функция - хендлер, вызывается при клике на тумблер. */
  onChange: PropTypes.func
  /** @component */

};

function _templateObject$f() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", ";\n"]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var TabPane = styled(Box)(_templateObject$f(), function (props) {
  return !props.isActive && 'display: none;';
}, space);
TabPane.propTypes = {
  /** Активна ли вкладка */
  isActive: PropTypes.bool,

  /** Текст вкладки. */
  tab: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /** Уникальный ключ вкладки */
  tabKey: PropTypes.string.isRequired,

  /** Заблокирована ли вкладка */
  disabled: PropTypes.bool,

  /** margin */
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-top*/
  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-right*/
  mr: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-bottom*/
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-left*/
  ml: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-left and margin-right */
  mx: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-top and margin-bottom */
  my: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding */
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-top*/
  pt: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-right*/
  pr: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-bottom*/
  pb: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-left*/
  pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-left and padding-right */
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-top and padding-bottom */
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** @ignore */
  theme: PropTypes.any
};
TabPane.defaultProps = {
  p: 2,
  disabled: false,
  theme: theme
};
TabPane.displayName = 'Tabs.TabPane';

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  font-size: ", ";\n  padding-right: ", ";\n  padding-left: ", ";\n  height: ", ";\n  cursor: pointer;\n  /* \u0427\u0442\u043E\u0431\u044B \u043D\u0435 \"\u043F\u0440\u044B\u0433\u0430\u043B\u0438\" \u043F\u0440\u0438 hover/active */\n  border-bottom: 1px solid ", ";\n  ", "\n  ", "\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$g() {
  var data = _taggedTemplateLiteral(["\n  justify-content: flex-start;\n  flex-direction: row;\n  font-size: ", ";\n"]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}

var noop$2 = function noop() {};

var borderBottom = function borderBottom(props) {
  return css$1(["", ":hover{", "}"], props.isActive && "border-bottom: 1px solid ".concat(props.theme.colors.tabs.active), !props.disabled && !props.isActive && "border-bottom: 1px solid ".concat(props.theme.colors.tabs.hover));
};

var isDisabled = function isDisabled(props) {
  return props.disabled && css$1(["cursor:not-allowed;opacity:0.4;"]);
};

var TabsList = styled(Flex)(_templateObject$g(), function (props) {
  return props.theme.fontSizes[1] + 'px';
});
var Tab = styled(Flex)(_templateObject2$4(), function (props) {
  return props.theme.fontSizes[1] + 'px';
}, themeGet('space[3]', '16px'), themeGet('space[3]', '16px'), themeGet('heights.medium', '48px'), function (props) {
  return props.theme.colors.semiLightGrey;
}, borderBottom, isDisabled);
/** Используется, если необходимо сгруппировать или разграничить содержимое страницы. */

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(_props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tabs).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (newActiveKey) {
      _this.setState({
        activeKey: newActiveKey
      });

      _this.props.onChange && _this.props.onChange(newActiveKey);
    });

    _defineProperty(_assertThisInitialized(_this), "onTabClick", function (tabKey) {
      var activeKey = _this.state.activeKey;

      if (tabKey !== activeKey) {
        _this.handleChange(tabKey);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getTabsItems", function () {
      var children = _this.props.children;
      var activeKey = _this.state.activeKey;

      if (children.length > 1) {
        return children.map(function (child) {
          var _child$props = child.props,
              tabKey = _child$props.tabKey,
              tab = _child$props.tab,
              disabled = _child$props.disabled;
          return React$3__default.createElement(Tab, {
            isActive: activeKey === tabKey,
            onClick: disabled ? noop$2 : function () {
              return _this.onTabClick(tabKey);
            },
            disabled: disabled
          }, tab);
        });
      } else {
        var _children$props = children.props,
            tabKey = _children$props.tabKey,
            tab = _children$props.tab,
            disabled = _children$props.disabled;
        return React$3__default.createElement(Tab, {
          isActive: activeKey === tabKey,
          onClick: disabled ? noop$2 : function () {
            return _this.onTabClick(tabKey);
          },
          disabled: disabled
        }, tab);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getChildren", function () {
      var children = _this.props.children;
      var activeKey = _this.state.activeKey;

      if (children.length > 1) {
        return children.map(function (child) {
          var tabKey = child.props.tabKey;
          var props = {
            isActive: activeKey === tabKey
          };
          return React$3__default.cloneElement(child, props);
        });
      } else {
        var tabKey = children.props.tabKey;
        var props = {
          isActive: activeKey === tabKey
        };
        return React$3__default.cloneElement(children, props);
      }
    });

    if (!_props.children) {
      return _possibleConstructorReturn(_this, null);
    } else if (_props.children.length > 1) {
      _props.children.forEach(function (child) {
        if (typeof child.props.tabKey === 'undefined') {
          console.error('<TabPane /> components must have an unique "tabKey" prop. Check <Tabs/> component children.');
        }
      });

      var _props$children = _props.children,
          children = _props$children === void 0 ? [] : _props$children;
      var firstChildKey = children[0].props && children[0].props.tabKey;
      _this.state = {
        activeKey: _this.props.activeKey || _this.props.defaultActiveKey || firstChildKey
      };
    } else {
      if (typeof _props.children.props.tabKey === 'undefined') {
        console.error('<TabPane /> components must have an unique "tabKey" prop. Check <Tabs/> component children.');
      }

      var _props$children2 = _props.children,
          _children = _props$children2 === void 0 ? [] : _props$children2;

      var _firstChildKey = _children.props && _children.props.tabKey;

      _this.state = {
        activeKey: _this.props.activeKey || _this.props.defaultActiveKey || _firstChildKey
      };
    }

    return _this;
  }

  _createClass(Tabs, [{
    key: "render",
    value: function render() {
      return React$3__default.createElement(Box, null, React$3__default.createElement(TabsList, null, this.getTabsItems()), this.getChildren());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('activeKey' in nextProps) {
        return {
          activeKey: nextProps.activeKey
        };
      }

      return null;
    }
  }]);

  return Tabs;
}(React$3__default.Component);

Tabs.TabPane = TabPane;
Tabs.propTypes = {
  /** Активная вкладка */
  activeKey: PropTypes.string,

  /** Активная вкладка по умолчанию */
  defaultActiveKey: PropTypes.string,

  /** Функция-хендлер */
  onChange: PropTypes.func
  /** @component */

};

var RadioGroup =
/*#__PURE__*/
function (_Component) {
  _inherits(RadioGroup, _Component);

  function RadioGroup(_props) {
    var _this;

    _classCallCheck(this, RadioGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RadioGroup).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (newActiveValue) {
      _this.setState({
        activeValue: newActiveValue
      });

      _this.props.onChange && _this.props.onChange(newActiveValue);
    });

    _defineProperty(_assertThisInitialized(_this), "onRadioChange", function (checked, value) {
      if (checked && value) {
        _this.handleChange(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getChildren", function () {
      var children = _this.props.children;
      var activeValue = _this.state.activeValue;
      return children.map(function (child) {
        var value = child.props.value;
        var props = {
          key: value,
          checked: activeValue === value,
          onChange: _this.onRadioChange
        };
        return React$3__default.cloneElement(child, props);
      });
    });

    var _activeValue = _this.props.value;
    var defaultValue = _this.props.defaultValue;
    _this.state = {
      activeValue: _activeValue || defaultValue || ''
    };
    return _this;
  }

  _createClass(RadioGroup, [{
    key: "render",
    value: function render() {
      return React$3__default.createElement(Box, null, this.getChildren());
    }
  }]);

  return RadioGroup;
}(Component);

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-content: center;\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  cursor: ", ";\n  ", "\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n  justify-content: center;\n  align-items: center;\n  transition: all ", ";\n  border-radius: 50%;\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$h() {
  var data = _taggedTemplateLiteral(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"]);

  _templateObject$h = function _templateObject() {
    return data;
  };

  return data;
}

var size$3 = function size(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size;
  var sizes = {
    small: {
      width: '14px',
      height: '14px'
    },
    medium: {
      width: '16px',
      height: '16px'
    },
    large: {
      width: '20px',
      height: '20px'
    }
  };
  return css$1(sizes[size]);
};

var background$1 = function background(_ref2) {
  var checked = _ref2.checked,
      disabled = _ref2.disabled,
      rest = _objectWithoutProperties(_ref2, ["checked", "disabled"]);

  var colors = rest.theme.colors;
  var radio = colors.radio;
  var bgColor = checked && disabled ? radio.disabled : colors.lightGrey;
  return "background: ".concat(bgColor);
};

var border$1 = function border(_ref3) {
  var checked = _ref3.checked,
      disabled = _ref3.disabled,
      rest = _objectWithoutProperties(_ref3, ["checked", "disabled"]);

  var colors = rest.theme.colors;
  var radio = colors.radio;

  if (disabled) {
    return "border: solid 3px ".concat(radio.disabled);
  } else if (checked) {
    return "border: solid 3px ".concat(radio.checked);
  }

  return "border: solid 1px ".concat(colors.black);
};

var RadioInput = styled.input.attrs({
  type: 'radio'
})(_templateObject$h());
var StyledRadio = styled(Flex)(_templateObject2$5(), themeGet('duration.fast', 300), size$3, background$1, border$1);
var Label$2 = styled.label(_templateObject3$3(), function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, space);
var RadioContainer = styled(Flex)(_templateObject4$2());

var Radio =
/*#__PURE__*/
function (_Component) {
  _inherits(Radio, _Component);

  function Radio(props) {
    var _this;

    _classCallCheck(this, Radio);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Radio).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var checked = event.target.checked;

      _this.setState({
        checked: checked
      });

      console.log('Radio handleChange', {
        'this.props': _this.props
      });
      _this.props.onChange && _this.props.onChange(checked, _this.props.value);
    });

    _this.state = {
      checked: typeof props.checked !== 'undefined' ? props.checked : false
    };
    return _this;
  }

  _createClass(Radio, [{
    key: "render",
    value: function render() {
      return React$3__default.createElement(Label$2, this.props, React$3__default.createElement(RadioContainer, {
        onChange: this.handleChange
      }, React$3__default.createElement(RadioInput, _extends({}, omit_1(this.props, ['onChange', 'value']), {
        checked: this.state.checked,
        name: this.props.name,
        readOnly: true
      })), React$3__default.createElement(StyledRadio, {
        checked: this.state.checked,
        size: this.props.size,
        disabled: this.props.disabled
      }, React$3__default.createElement(Icon, {
        name: "radio_button_unchecked",
        hidden: true
      }))), React$3__default.createElement(Text, {
        inline: true,
        regular: true,
        ml: 2,
        id: "radio-text-".concat(this.props.label)
      }, this.props.label));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      // If controlled by form
      if (nextProps[FIELD_DATA_PROP]) {
        return {
          checked: nextProps.value
        };
      }

      if ('checked' in nextProps) {
        return {
          checked: nextProps.checked
        };
      }

      return null;
    }
  }]);

  return Radio;
}(Component);

Radio.propTypes = {
  /** Состояние радио баттона - выбран или нет. */
  checked: PropTypes.bool,

  /** Возможность редактирования */
  disabled: PropTypes.bool,

  /** Текст радио баттона */
  label: PropTypes.string,

  /** Размер радио баттона */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /** Функция - хендлер, вызывается при клике на радио баттон */
  onChange: PropTypes.func,

  /** margin */
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-top*/
  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-right*/
  mr: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-bottom*/
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-left*/
  ml: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-left and margin-right */
  mx: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** margin-top and margin-bottom */
  my: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding */
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-top*/
  pt: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-right*/
  pr: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-bottom*/
  pb: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-left*/
  pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-left and padding-right */
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** padding-top and padding-bottom */
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array])
};
Radio.Group = RadioGroup;

/*
 * Всплывающий блок с контентом возле элемента.
 * Используется для всплывающих подсказок, выпадающих меню и т.д.
 */

function Popover(props) {
  return React$3__default.createElement(ReactTinyPopover, props);
}

Popover.propTypes = {};
Popover.defaultProps = {
  disableReposition: true
};
Popover.displayName = 'Popover';
Popover.ArrowContainer = ArrowContainer;

function _extends$3() {
  _extends$3 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$3.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function memoizeOne(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  var result = function memoized() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return result;
}

// Inspired by Joe Lambert, https://gist.github.com/joelambert/1002116#file-requesttimeout-js

var hasNativePerformanceNow = (typeof performance === "undefined" ? "undefined" : _typeof(performance)) === 'object' && typeof performance.now === 'function';
var now = hasNativePerformanceNow ? function () {
  return performance.now();
} : function () {
  return Date.now();
};

function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}

function requestTimeout(callback, delay) {
  var start = now();

  function tick() {
    if (now() - start >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = requestAnimationFrame(tick);
    }
  }

  var timeoutID = {
    id: requestAnimationFrame(tick)
  };
  return timeoutID;
}

var cachedRTLResult = null; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
// Chrome does not seem to adhere; its scrollLeft values are positive (measured relative to the left).
// Safari's elastic bounce makes detecting this even more complicated wrt potential false positives.
// The safest way to check this is to intentionally set a negative offset,
// and then verify that the subsequent "scroll" event matches the negative offset.
// If it does not match, then we can assume a non-standard RTL scroll implementation.

function getRTLOffsetType(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }

  if (cachedRTLResult === null || recalculate) {
    var outerDiv = document.createElement('div');
    var outerStyle = outerDiv.style;
    outerStyle.width = '50px';
    outerStyle.height = '50px';
    outerStyle.overflow = 'scroll';
    outerStyle.direction = 'rtl';
    var innerDiv = document.createElement('div');
    var innerStyle = innerDiv.style;
    innerStyle.width = '100px';
    innerStyle.height = '100px';
    outerDiv.appendChild(innerDiv);
    document.body.appendChild(outerDiv);

    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = 'positive-descending';
    } else {
      outerDiv.scrollLeft = 1;

      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = 'negative';
      } else {
        cachedRTLResult = 'positive-ascending';
      }
    }

    document.body.removeChild(outerDiv);
    return cachedRTLResult;
  }

  return cachedRTLResult;
}

if (process.env.NODE_ENV !== 'production') {
  if (typeof window !== 'undefined' && typeof window.WeakSet !== 'undefined') ;
}
var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;

var defaultItemKey$1 = function defaultItemKey(index, data) {
  return index;
}; // In DEV mode, this Set helps us only log a warning once per component instance.
// This avoids spamming the console every time a render happens.


var devWarningsDirection = null;
var devWarningsTagName$1 = null;

if (process.env.NODE_ENV !== 'production') {
  if (typeof window !== 'undefined' && typeof window.WeakSet !== 'undefined') {
    devWarningsDirection =
    /*#__PURE__*/
    new WeakSet();
    devWarningsTagName$1 =
    /*#__PURE__*/
    new WeakSet();
  }
}

function createListComponent(_ref) {
  var _class, _temp;

  var getItemOffset = _ref.getItemOffset,
      getEstimatedTotalSize = _ref.getEstimatedTotalSize,
      getItemSize = _ref.getItemSize,
      getOffsetForIndexAndAlignment = _ref.getOffsetForIndexAndAlignment,
      getStartIndexForOffset = _ref.getStartIndexForOffset,
      getStopIndexForStartIndex = _ref.getStopIndexForStartIndex,
      initInstanceProps = _ref.initInstanceProps,
      shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange,
      validateProps = _ref.validateProps;
  return _temp = _class =
  /*#__PURE__*/
  function (_PureComponent) {
    _inheritsLoose(List, _PureComponent); // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor


    function List(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, _assertThisInitialized$1(_assertThisInitialized$1(_this)));
      _this._outerRef = void 0;
      _this._resetIsScrollingTimeoutId = null;
      _this.state = {
        instance: _assertThisInitialized$1(_assertThisInitialized$1(_this)),
        isScrolling: false,
        scrollDirection: 'forward',
        scrollOffset: typeof _this.props.initialScrollOffset === 'number' ? _this.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: false
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = memoizeOne(function (overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
        return _this.props.onItemsRendered({
          overscanStartIndex: overscanStartIndex,
          overscanStopIndex: overscanStopIndex,
          visibleStartIndex: visibleStartIndex,
          visibleStopIndex: visibleStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = memoizeOne(function (scrollDirection, scrollOffset, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          scrollDirection: scrollDirection,
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;

      _this._getItemStyle = function (index) {
        var _this$props = _this.props,
            direction = _this$props.direction,
            itemSize = _this$props.itemSize,
            layout = _this$props.layout;

        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);

        var style;

        if (itemStyleCache.hasOwnProperty(index)) {
          style = itemStyleCache[index];
        } else {
          var _style;

          var _offset = getItemOffset(_this.props, index, _this._instanceProps);

          var size = getItemSize(_this.props, index, _this._instanceProps); // TODO Deprecate direction "horizontal"

          var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
          itemStyleCache[index] = style = (_style = {
            position: 'absolute'
          }, _style[direction === 'rtl' ? 'right' : 'left'] = isHorizontal ? _offset : 0, _style.top = !isHorizontal ? _offset : 0, _style.height = !isHorizontal ? size : '100%', _style.width = isHorizontal ? size : '100%', _style);
        }

        return style;
      };

      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = memoizeOne(function (_, __, ___) {
        return {};
      });

      _this._onScrollHorizontal = function (event) {
        var _event$currentTarget = event.currentTarget,
            clientWidth = _event$currentTarget.clientWidth,
            scrollLeft = _event$currentTarget.scrollLeft,
            scrollWidth = _event$currentTarget.scrollWidth;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollLeft) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          }

          var direction = _this.props.direction;
          var scrollOffset = scrollLeft;

          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
            // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.
            switch (getRTLOffsetType()) {
              case 'negative':
                scrollOffset = -scrollLeft;
                break;

              case 'positive-descending':
                scrollOffset = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollLeft ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._onScrollVertical = function (event) {
        var _event$currentTarget2 = event.currentTarget,
            clientHeight = _event$currentTarget2.clientHeight,
            scrollHeight = _event$currentTarget2.scrollHeight,
            scrollTop = _event$currentTarget2.scrollTop;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollTop) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._outerRefSetter = function (ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;

        if (typeof outerRef === 'function') {
          outerRef(ref);
        } else if (outerRef != null && _typeof(outerRef) === 'object' && outerRef.hasOwnProperty('current')) {
          outerRef.current = ref;
        }
      };

      _this._resetIsScrollingDebounced = function () {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }

        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
      };

      _this._resetIsScrolling = function () {
        _this._resetIsScrollingTimeoutId = null;

        _this.setState({
          isScrolling: false
        }, function () {
          // Clear style cache after state update has been committed.
          // This way we don't break pure sCU for items that don't use isScrolling param.
          _this._getItemStyleCache(-1, null);
        });
      };

      return _this;
    }

    List.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps$1(nextProps, prevState);
      validateProps(nextProps);
      return null;
    };

    var _proto = List.prototype;

    _proto.scrollTo = function scrollTo(scrollOffset) {
      scrollOffset = Math.max(0, scrollOffset);
      this.setState(function (prevState) {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }

        return {
          scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: true
        };
      }, this._resetIsScrollingDebounced);
    };

    _proto.scrollToItem = function scrollToItem(index, align) {
      if (align === void 0) {
        align = 'auto';
      }

      var itemCount = this.props.itemCount;
      var scrollOffset = this.state.scrollOffset;
      index = Math.max(0, Math.min(index, itemCount - 1));
      this.scrollTo(getOffsetForIndexAndAlignment(this.props, index, align, scrollOffset, this._instanceProps));
    };

    _proto.componentDidMount = function componentDidMount() {
      var _this$props2 = this.props,
          direction = _this$props2.direction,
          initialScrollOffset = _this$props2.initialScrollOffset,
          layout = _this$props2.layout;

      if (typeof initialScrollOffset === 'number' && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          outerRef.scrollLeft = initialScrollOffset;
        } else {
          outerRef.scrollTop = initialScrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props3 = this.props,
          direction = _this$props3.direction,
          layout = _this$props3.layout;
      var _this$state = this.state,
          scrollOffset = _this$state.scrollOffset,
          scrollUpdateWasRequested = _this$state.scrollUpdateWasRequested;

      if (scrollUpdateWasRequested && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // So we need to determine which browser behavior we're dealing with, and mimic it.
            switch (getRTLOffsetType()) {
              case 'negative':
                outerRef.scrollLeft = -scrollOffset;
                break;

              case 'positive-ascending':
                outerRef.scrollLeft = scrollOffset;
                break;

              default:
                var clientWidth = outerRef.clientWidth,
                    scrollWidth = outerRef.scrollWidth;
                outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                break;
            }
          } else {
            outerRef.scrollLeft = scrollOffset;
          }
        } else {
          outerRef.scrollTop = scrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };

    _proto.render = function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          className = _this$props4.className,
          direction = _this$props4.direction,
          height = _this$props4.height,
          innerRef = _this$props4.innerRef,
          innerElementType = _this$props4.innerElementType,
          innerTagName = _this$props4.innerTagName,
          itemCount = _this$props4.itemCount,
          itemData = _this$props4.itemData,
          _this$props4$itemKey = _this$props4.itemKey,
          itemKey = _this$props4$itemKey === void 0 ? defaultItemKey$1 : _this$props4$itemKey,
          layout = _this$props4.layout,
          outerElementType = _this$props4.outerElementType,
          outerTagName = _this$props4.outerTagName,
          style = _this$props4.style,
          useIsScrolling = _this$props4.useIsScrolling,
          width = _this$props4.width;
      var isScrolling = this.state.isScrolling; // TODO Deprecate direction "horizontal"

      var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
      var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;

      var _this$_getRangeToRend = this._getRangeToRender(),
          startIndex = _this$_getRangeToRend[0],
          stopIndex = _this$_getRangeToRend[1];

      var items = [];

      if (itemCount > 0) {
        for (var _index = startIndex; _index <= stopIndex; _index++) {
          items.push(createElement(children, {
            data: itemData,
            key: itemKey(_index, itemData),
            index: _index,
            isScrolling: useIsScrolling ? isScrolling : undefined,
            style: this._getItemStyle(_index)
          }));
        }
      } // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.


      var estimatedTotalSize = getEstimatedTotalSize(this.props, this._instanceProps);
      return createElement(outerElementType || outerTagName || 'div', {
        className: className,
        onScroll: onScroll,
        ref: this._outerRefSetter,
        style: _extends$3({
          position: 'relative',
          height: height,
          width: width,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          direction: direction
        }, style)
      }, createElement(innerElementType || innerTagName || 'div', {
        children: items,
        ref: innerRef,
        style: {
          height: isHorizontal ? '100%' : estimatedTotalSize,
          pointerEvents: isScrolling ? 'none' : undefined,
          width: isHorizontal ? estimatedTotalSize : '100%'
        }
      }));
    };

    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === 'function') {
        var itemCount = this.props.itemCount;

        if (itemCount > 0) {
          var _this$_getRangeToRend2 = this._getRangeToRender(),
              _overscanStartIndex = _this$_getRangeToRend2[0],
              _overscanStopIndex = _this$_getRangeToRend2[1],
              _visibleStartIndex = _this$_getRangeToRend2[2],
              _visibleStopIndex = _this$_getRangeToRend2[3];

          this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
        }
      }

      if (typeof this.props.onScroll === 'function') {
        var _this$state2 = this.state,
            _scrollDirection = _this$state2.scrollDirection,
            _scrollOffset = _this$state2.scrollOffset,
            _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

        this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
      }
    }; // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.


    _proto._getRangeToRender = function _getRangeToRender() {
      var _this$props5 = this.props,
          itemCount = _this$props5.itemCount,
          overscanCount = _this$props5.overscanCount;
      var _this$state3 = this.state,
          isScrolling = _this$state3.isScrolling,
          scrollDirection = _this$state3.scrollDirection,
          scrollOffset = _this$state3.scrollOffset;

      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getStartIndexForOffset(this.props, scrollOffset, this._instanceProps);
      var stopIndex = getStopIndexForStartIndex(this.props, startIndex, scrollOffset, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || scrollDirection === 'backward' ? Math.max(1, overscanCount) : 1;
      var overscanForward = !isScrolling || scrollDirection === 'forward' ? Math.max(1, overscanCount) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    return List;
  }(PureComponent), _class.defaultProps = {
    direction: 'ltr',
    itemData: undefined,
    layout: 'vertical',
    overscanCount: 2,
    useIsScrolling: false
  }, _temp;
} // NOTE: I considered further wrapping individual items with a pure ListItem component.
// This would avoid ever calling the render function for the same index more than once,
// But it would also add the overhead of a lot of components/fibers.
// I assume people already do this (render function returning a class component),
// So my doing it would just unnecessarily double the wrappers.


var validateSharedProps$1 = function validateSharedProps(_ref2, _ref3) {
  var children = _ref2.children,
      direction = _ref2.direction,
      height = _ref2.height,
      layout = _ref2.layout,
      innerTagName = _ref2.innerTagName,
      outerTagName = _ref2.outerTagName,
      width = _ref2.width;
  var instance = _ref3.instance;

  if (process.env.NODE_ENV !== 'production') {
    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName$1 && !devWarningsTagName$1.has(instance)) {
        devWarningsTagName$1.add(instance);
        console.warn('The innerTagName and outerTagName props have been deprecated. ' + 'Please use the innerElementType and outerElementType props instead.');
      }
    } // TODO Deprecate direction "horizontal"


    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';

    switch (direction) {
      case 'horizontal':
      case 'vertical':
        if (devWarningsDirection && !devWarningsDirection.has(instance)) {
          devWarningsDirection.add(instance);
          console.warn('The direction prop should be either "ltr" (default) or "rtl". ' + 'Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.');
        }

        break;

      case 'ltr':
      case 'rtl':
        // Valid values
        break;

      default:
        throw Error('An invalid "direction" prop has been specified. ' + 'Value should be either "ltr" or "rtl". ' + ("\"" + direction + "\" was specified."));
    }

    switch (layout) {
      case 'horizontal':
      case 'vertical':
        // Valid values
        break;

      default:
        throw Error('An invalid "layout" prop has been specified. ' + 'Value should be either "horizontal" or "vertical". ' + ("\"" + layout + "\" was specified."));
    }

    if (children == null) {
      throw Error('An invalid "children" prop has been specified. ' + 'Value should be a React component. ' + ("\"" + (children === null ? 'null' : _typeof(children)) + "\" was specified."));
    }

    if (isHorizontal && typeof width !== 'number') {
      throw Error('An invalid "width" prop has been specified. ' + 'Horizontal lists must specify a number for width. ' + ("\"" + (width === null ? 'null' : _typeof(width)) + "\" was specified."));
    } else if (!isHorizontal && typeof height !== 'number') {
      throw Error('An invalid "height" prop has been specified. ' + 'Vertical lists must specify a number for height. ' + ("\"" + (height === null ? 'null' : _typeof(height)) + "\" was specified."));
    }
  }
};
var FixedSizeList =
/*#__PURE__*/
createListComponent({
  getItemOffset: function getItemOffset(_ref, index) {
    var itemSize = _ref.itemSize;
    return index * itemSize;
  },
  getItemSize: function getItemSize(_ref2, index) {
    var itemSize = _ref2.itemSize;
    return itemSize;
  },
  getEstimatedTotalSize: function getEstimatedTotalSize(_ref3) {
    var itemCount = _ref3.itemCount,
        itemSize = _ref3.itemSize;
    return itemSize * itemCount;
  },
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(_ref4, index, align, scrollOffset) {
    var direction = _ref4.direction,
        height = _ref4.height,
        itemCount = _ref4.itemCount,
        itemSize = _ref4.itemSize,
        layout = _ref4.layout,
        width = _ref4.width; // TODO Deprecate direction "horizontal"

    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var lastItemOffset = Math.max(0, itemCount * itemSize - size);
    var maxOffset = Math.min(lastItemOffset, index * itemSize);
    var minOffset = Math.max(0, index * itemSize - size + itemSize);

    if (align === 'smart') {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        {
          // "Centered" offset is usually the average of the min and max.
          // But near the edges of the list, this doesn't hold true.
          var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

          if (middleOffset < Math.ceil(size / 2)) {
            return 0; // near the beginning
          } else if (middleOffset > lastItemOffset + Math.floor(size / 2)) {
            return lastItemOffset; // near the end
          } else {
            return middleOffset;
          }
        }

      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(_ref5, offset) {
    var itemCount = _ref5.itemCount,
        itemSize = _ref5.itemSize;
    return Math.max(0, Math.min(itemCount - 1, Math.floor(offset / itemSize)));
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(_ref6, startIndex, scrollOffset) {
    var direction = _ref6.direction,
        height = _ref6.height,
        itemCount = _ref6.itemCount,
        itemSize = _ref6.itemSize,
        layout = _ref6.layout,
        width = _ref6.width; // TODO Deprecate direction "horizontal"

    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var offset = startIndex * itemSize;
    var size = isHorizontal ? width : height;
    var numVisibleItems = Math.ceil((size + scrollOffset - offset) / itemSize);
    return Math.max(0, Math.min(itemCount - 1, startIndex + numVisibleItems - 1 // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {// Noop
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref7) {
    var itemSize = _ref7.itemSize;

    if (process.env.NODE_ENV !== 'production') {
      if (typeof itemSize !== 'number') {
        throw Error('An invalid "itemSize" prop has been specified. ' + 'Value should be a number. ' + ("\"" + (itemSize === null ? 'null' : _typeof(itemSize)) + "\" was specified."));
      }
    }
  }
}); // Pulled from react-compat

function _templateObject$i() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject$i = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * TODO:
 * 1) Combobox values remake/restyling.
 * 2) Option groups с виртуализацией. Сейчас заработают только в простом виде.
 */

var OPTION_HEIGHT = 38;

var getSize = function getSize(size) {
  switch (size) {
    case 'small':
      return 0;

    case 'medium':
      return 1;

    case 'large':
      return 2;

    default:
      return 1;
  }
};

var customStyles = {
  placeholder: function placeholder(base, props) {
    var _props$selectProps = props.selectProps,
        systemTheme = _props$selectProps.systemTheme,
        size = _props$selectProps.size;
    var sizeIndex = getSize(size);
    return _objectSpread2({}, base, {
      fontSize: systemTheme.fontSizes[sizeIndex],
      color: systemTheme.colors.black
    });
  },
  input: function input(base, props, third) {
    // Can't access system theme here... ?
    return _objectSpread2({}, base, {
      fontSize: 14,
      color: '#3a3a3a'
    });
  },
  valueContainer: function valueContainer(base, props) {
    var _props$selectProps2 = props.selectProps,
        systemTheme = _props$selectProps2.systemTheme,
        size = _props$selectProps2.size;
    var sizeIndex = getSize(size);
    return _objectSpread2({}, base, {
      fontSize: systemTheme.fontSizes[sizeIndex],
      color: systemTheme.colors.black,
      paddingLeft: systemTheme.space[3]
    });
  },
  control: function control(base, props) {
    var systemTheme = props.selectProps.systemTheme;
    var isDisabled = props.isDisabled,
        isFocused = props.isFocused,
        menuIsOpen = props.menuIsOpen; // Disabled styles

    if (isDisabled) {
      return _objectSpread2({}, base, {
        borderColor: 'transparent',
        backgroundColor: systemTheme.colors.input.disabled,
        cursor: 'not-allowed'
      });
    }

    if (isFocused || menuIsOpen) {
      return _objectSpread2({}, base, {
        borderColor: systemTheme.colors.input.focus,
        backgroundColor: systemTheme.colors.white,
        boxShadow: 'none'
      });
    } // Default


    return _objectSpread2({}, base, {
      '&:hover': {
        borderColor: systemTheme.colors.black
      },
      borderColor: 'transparent',
      backgroundColor: systemTheme.colors.lightGrey
    });
  },
  menuList: function menuList(base, props) {
    var systemTheme = props.selectProps.systemTheme; // Пока скроллов тоже нет в макетах.

    return _objectSpread2({}, base, {
      '&::-webkit-scrollbar': {
        height: '8px',
        backgroundColor: 'transparent',
        width: '4px'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: "".concat(systemTheme.colors.scrollbar),
        borderRadius: '8px'
      },
      scrollbarColor: "".concat(systemTheme.colors.scrollbar, " transparent"),
      scrollbarWidth: 'thin'
    });
  },
  indicatorSeparator: function indicatorSeparator(base) {
    return _objectSpread2({}, base, {
      width: '0px'
    });
  },
  option: function option(base, props) {
    var isSelected = props.isSelected,
        isFocused = props.isFocused;
    var _props$selectProps3 = props.selectProps,
        systemTheme = _props$selectProps3.systemTheme,
        size = _props$selectProps3.size;
    var sizeIndex = getSize(size);

    var baseline = _objectSpread2({}, base, {
      color: systemTheme.colors.black,
      fontSize: systemTheme.fontSizes[sizeIndex]
    });

    if (isSelected) {
      return _objectSpread2({}, baseline, {
        backgroundColor: systemTheme.colors.lightGrey
      });
    } // Пока одинаковые, нет в макетах.


    if (isFocused) {
      return _objectSpread2({}, baseline, {
        backgroundColor: systemTheme.colors.lightGrey
      });
    }

    return baseline;
  }
};

var DropdownIndicator = function DropdownIndicator(props) {
  var systemTheme = props.selectProps.systemTheme; // VERY FUCKING HACKY WAY TO DO THAT

  var innerProps = props.innerProps,
      rest = _objectWithoutProperties(props, ["innerProps"]);

  var withPadding = _objectSpread2({}, innerProps, {
    style: {
      paddingRight: 16
    }
  });

  return createElement(components.DropdownIndicator, _extends({}, rest, {
    innerProps: withPadding
  }), createElement(Icon, {
    name: "arrow_drop_down",
    size: 0,
    color: systemTheme.colors.black
  }));
}; // MenuList - выпадающее меню, открывается при клике на селект.
// Подход говно, надо бы рефакторнуть.
// #TODO - refactor this stuff.


var scrollStyles = function scrollStyles(_ref) {
  var theme = _ref.theme;
  return css$1(["&::-webkit-scrollbar{height:8px;background-color:transparent;width:4px;}&::-webkit-scrollbar-thumb{background-color:", ";border-radius:10px;}scrollbar-color:", " transparent;scrollbar-width:thin;"], theme.colors.scrollbar, theme.colors.scrollbar);
};

var StyledList = styled(FixedSizeList)(_templateObject$i(), scrollStyles);

var MenuList = function MenuList(optionHeight) {
  var _temp;

  return (
    /** Класс, чтобы ArrowUp/ArrowDown скроллили List */
    _temp =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(MenuList, _React$Component);

      function MenuList() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, MenuList);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MenuList)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_this), "state", {
          currentIndex: null
        });

        _defineProperty(_assertThisInitialized(_this), "list", createRef());

        return _this;
      }

      _createClass(MenuList, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          var currentIndex = this.state.currentIndex;
          currentIndex && this.list.current.scrollToItem(currentIndex);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
              options = _this$props.options,
              children = _this$props.children,
              maxHeight = _this$props.maxHeight,
              getValue = _this$props.getValue;

          var _getValue = getValue(),
              _getValue2 = _slicedToArray(_getValue, 1),
              value = _getValue2[0];

          var initialOffset = options.indexOf(value) * optionHeight;

          if (!children.length) {
            /* No option message */
            return createElement(Box, null, children, "1");
          }

          return createElement(StyledList, {
            ref: this.list,
            height: maxHeight,
            itemCount: children.length,
            itemSize: optionHeight,
            initialScrollOffset: initialOffset
          }, function (_ref2) {
            var index = _ref2.index,
                style = _ref2.style;
            return createElement("div", {
              style: style
            }, children[index]);
          });
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(_ref3) {
          var children = _ref3.children;

          var _children = Array.isArray(children) ? children : [children];

          var currentIndex = Math.max(_children.findIndex(function (_ref4) {
            var isFocused = _ref4.props.isFocused;
            return isFocused;
          }), 0);
          return {
            currentIndex: currentIndex
          };
        }
      }]);

      return MenuList;
    }(Component), _temp
  );
};
/**
 * Используется для выбора значения из списка.
 */


var Select =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Select, _React$Component2);

  function Select() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, Select);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(Select)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this2), "withSystemTheme", function (size, systemTheme) {
      return function (theme) {
        var controlHeight = 0; // #TODO Probably will break in combobox + size===small.
        // https://github.com/JedWatson/react-select/issues/1322

        switch (size) {
          case 'small':
            controlHeight = 32;
            break;

          case 'large':
            controlHeight = 48;
            break;

          default:
            controlHeight = 40;
        }

        return _objectSpread2({}, theme, {
          borderRadius: systemTheme.radii[1],
          // can override colors with systemTheme here later?
          colors: theme.colors,
          spacing: {
            controlHeight: controlHeight,
            baseUnit: size === 'small' ? 2 : 4,
            menuGutter: size === 'small' ? 4 : 8
          }
        });
      };
    });

    return _this2;
  }

  _createClass(Select, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          optionHeight = _this$props2.optionHeight,
          size = _this$props2.size,
          async = _this$props2.async,
          virtualized = _this$props2.virtualized;

      var selectProps = _objectSpread2({
        styles: customStyles,
        components: {
          DropdownIndicator: DropdownIndicator,
          MenuList: virtualized ? MenuList(optionHeight || OPTION_HEIGHT) : components.MenuList
        }
      }, this.props);

      return createElement(ThemeConsumer, null, function (systemTheme) {
        return async ? createElement(AsyncRSelect, _extends({}, selectProps, {
          systemTheme: systemTheme,
          theme: _this3.withSystemTheme(size, systemTheme)
        })) : createElement(RSelect, _extends({}, selectProps, {
          systemTheme: systemTheme,
          theme: _this3.withSystemTheme(size, systemTheme)
        }));
      });
    }
  }]);

  return Select;
}(Component);

Select.displayName = 'Select';
Select.defaultProps = {
  loadingMessage: function loadingMessage() {
    return 'Загрузка...';
  },
  noOptionsMessage: function noOptionsMessage() {
    return 'Нет данных.';
  },
  placeholder: 'Выбрать'
};
Select.propTypes = {
  /** Размер */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /** Можно ли выбирать несколько значений */
  isMulti: PropTypes.bool,

  /** Доступен ли поиск. */
  isSearchable: PropTypes.bool,

  /** Находится ли селект в состоянии загрузки */
  isLoading: PropTypes.bool,

  /** Можно ли сбросить значение по кнопке */
  isClearable: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),

  /** Текст, который выводится при загрузке */
  loadingMessage: PropTypes.func,

  /** Текст, который выводится при отсутствии опция для выбора. */
  noOptionsMessage: PropTypes.func,

  /** Содержимое селекта по умолчанию. */
  placeholder: PropTypes.string
  /** @component */

};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends$4 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _raf2 = require('raf');

var _raf3 = _interopRequireDefault$2(_raf2);

var _domCss = require('dom-css');

var _domCss2 = _interopRequireDefault$2(_domCss);

var _react$1 = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault$2(_propTypes);

var _isString = require('../utils/isString');

var _isString2 = _interopRequireDefault$2(_isString);

var _getScrollbarWidth = require('../utils/getScrollbarWidth');

var _getScrollbarWidth2 = _interopRequireDefault$2(_getScrollbarWidth);

var _returnFalse = require('../utils/returnFalse');

var _returnFalse2 = _interopRequireDefault$2(_returnFalse);

var _getInnerWidth = require('../utils/getInnerWidth');

var _getInnerWidth2 = _interopRequireDefault$2(_getInnerWidth);

var _getInnerHeight = require('../utils/getInnerHeight');

var _getInnerHeight2 = _interopRequireDefault$2(_getInnerHeight);

var _styles = require('./styles');

var _defaultRenderElements = require('./defaultRenderElements');

function _interopRequireDefault$2(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _objectWithoutProperties$1(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$1(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Scrollbars = function (_Component) {
  _inherits$1(Scrollbars, _Component);

  function Scrollbars(props) {
    var _ref;

    _classCallCheck$1(this, Scrollbars);

    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    var _this = _possibleConstructorReturn$1(this, (_ref = Scrollbars.__proto__ || Object.getPrototypeOf(Scrollbars)).call.apply(_ref, [this, props].concat(rest)));

    _this.getScrollLeft = _this.getScrollLeft.bind(_this);
    _this.getScrollTop = _this.getScrollTop.bind(_this);
    _this.getScrollWidth = _this.getScrollWidth.bind(_this);
    _this.getScrollHeight = _this.getScrollHeight.bind(_this);
    _this.getClientWidth = _this.getClientWidth.bind(_this);
    _this.getClientHeight = _this.getClientHeight.bind(_this);
    _this.getValues = _this.getValues.bind(_this);
    _this.getThumbHorizontalWidth = _this.getThumbHorizontalWidth.bind(_this);
    _this.getThumbVerticalHeight = _this.getThumbVerticalHeight.bind(_this);
    _this.getScrollLeftForOffset = _this.getScrollLeftForOffset.bind(_this);
    _this.getScrollTopForOffset = _this.getScrollTopForOffset.bind(_this);
    _this.scrollLeft = _this.scrollLeft.bind(_this);
    _this.scrollTop = _this.scrollTop.bind(_this);
    _this.scrollToLeft = _this.scrollToLeft.bind(_this);
    _this.scrollToTop = _this.scrollToTop.bind(_this);
    _this.scrollToRight = _this.scrollToRight.bind(_this);
    _this.scrollToBottom = _this.scrollToBottom.bind(_this);
    _this.handleTrackMouseEnter = _this.handleTrackMouseEnter.bind(_this);
    _this.handleTrackMouseLeave = _this.handleTrackMouseLeave.bind(_this);
    _this.handleHorizontalTrackMouseDown = _this.handleHorizontalTrackMouseDown.bind(_this);
    _this.handleVerticalTrackMouseDown = _this.handleVerticalTrackMouseDown.bind(_this);
    _this.handleHorizontalThumbMouseDown = _this.handleHorizontalThumbMouseDown.bind(_this);
    _this.handleVerticalThumbMouseDown = _this.handleVerticalThumbMouseDown.bind(_this);
    _this.handleWindowResize = _this.handleWindowResize.bind(_this);
    _this.handleScroll = _this.handleScroll.bind(_this);
    _this.handleDrag = _this.handleDrag.bind(_this);
    _this.handleDragEnd = _this.handleDragEnd.bind(_this);
    _this.state = {
      didMountUniversal: false
    };
    return _this;
  }

  _createClass$1(Scrollbars, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.addListeners();
      this.update();
      this.componentDidMountUniversal();
    }
  }, {
    key: 'componentDidMountUniversal',
    value: function componentDidMountUniversal() {
      // eslint-disable-line react/sort-comp
      var universal = this.props.universal;
      if (!universal) return;
      this.setState({
        didMountUniversal: true
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.update();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeListeners();
      (0, _raf2.cancel)(this.requestFrame);
      clearTimeout(this.hideTracksTimeout);
      clearInterval(this.detectScrollingInterval);
    }
  }, {
    key: 'getScrollLeft',
    value: function getScrollLeft() {
      if (!this.view) return 0;
      return this.view.scrollLeft;
    }
  }, {
    key: 'getScrollTop',
    value: function getScrollTop() {
      if (!this.view) return 0;
      return this.view.scrollTop;
    }
  }, {
    key: 'getScrollWidth',
    value: function getScrollWidth() {
      if (!this.view) return 0;
      return this.view.scrollWidth;
    }
  }, {
    key: 'getScrollHeight',
    value: function getScrollHeight() {
      if (!this.view) return 0;
      return this.view.scrollHeight;
    }
  }, {
    key: 'getClientWidth',
    value: function getClientWidth() {
      if (!this.view) return 0;
      return this.view.clientWidth;
    }
  }, {
    key: 'getClientHeight',
    value: function getClientHeight() {
      if (!this.view) return 0;
      return this.view.clientHeight;
    }
  }, {
    key: 'getValues',
    value: function getValues() {
      var _ref2 = this.view || {},
          _ref2$scrollLeft = _ref2.scrollLeft,
          scrollLeft = _ref2$scrollLeft === undefined ? 0 : _ref2$scrollLeft,
          _ref2$scrollTop = _ref2.scrollTop,
          scrollTop = _ref2$scrollTop === undefined ? 0 : _ref2$scrollTop,
          _ref2$scrollWidth = _ref2.scrollWidth,
          scrollWidth = _ref2$scrollWidth === undefined ? 0 : _ref2$scrollWidth,
          _ref2$scrollHeight = _ref2.scrollHeight,
          scrollHeight = _ref2$scrollHeight === undefined ? 0 : _ref2$scrollHeight,
          _ref2$clientWidth = _ref2.clientWidth,
          clientWidth = _ref2$clientWidth === undefined ? 0 : _ref2$clientWidth,
          _ref2$clientHeight = _ref2.clientHeight,
          clientHeight = _ref2$clientHeight === undefined ? 0 : _ref2$clientHeight;

      return {
        left: scrollLeft / (scrollWidth - clientWidth) || 0,
        top: scrollTop / (scrollHeight - clientHeight) || 0,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        scrollWidth: scrollWidth,
        scrollHeight: scrollHeight,
        clientWidth: clientWidth,
        clientHeight: clientHeight
      };
    }
  }, {
    key: 'getThumbHorizontalWidth',
    value: function getThumbHorizontalWidth() {
      var _props = this.props,
          thumbSize = _props.thumbSize,
          thumbMinSize = _props.thumbMinSize;
      var _view = this.view,
          scrollWidth = _view.scrollWidth,
          clientWidth = _view.clientWidth;
      var trackWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
      var width = Math.ceil(clientWidth / scrollWidth * trackWidth);
      if (trackWidth === width) return 0;
      if (thumbSize) return thumbSize;
      return Math.max(width, thumbMinSize);
    }
  }, {
    key: 'getThumbVerticalHeight',
    value: function getThumbVerticalHeight() {
      var _props2 = this.props,
          thumbSize = _props2.thumbSize,
          thumbMinSize = _props2.thumbMinSize;
      var _view2 = this.view,
          scrollHeight = _view2.scrollHeight,
          clientHeight = _view2.clientHeight;
      var trackHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
      var height = Math.ceil(clientHeight / scrollHeight * trackHeight);
      if (trackHeight === height) return 0;
      if (thumbSize) return thumbSize;
      return Math.max(height, thumbMinSize);
    }
  }, {
    key: 'getScrollLeftForOffset',
    value: function getScrollLeftForOffset(offset) {
      var _view3 = this.view,
          scrollWidth = _view3.scrollWidth,
          clientWidth = _view3.clientWidth;
      var trackWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
      var thumbWidth = this.getThumbHorizontalWidth();
      return offset / (trackWidth - thumbWidth) * (scrollWidth - clientWidth);
    }
  }, {
    key: 'getScrollTopForOffset',
    value: function getScrollTopForOffset(offset) {
      var _view4 = this.view,
          scrollHeight = _view4.scrollHeight,
          clientHeight = _view4.clientHeight;
      var trackHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
      var thumbHeight = this.getThumbVerticalHeight();
      return offset / (trackHeight - thumbHeight) * (scrollHeight - clientHeight);
    }
  }, {
    key: 'scrollLeft',
    value: function scrollLeft() {
      var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!this.view) return;
      this.view.scrollLeft = left;
    }
  }, {
    key: 'scrollTop',
    value: function scrollTop() {
      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!this.view) return;
      this.view.scrollTop = top;
    }
  }, {
    key: 'scrollToLeft',
    value: function scrollToLeft() {
      if (!this.view) return;
      this.view.scrollLeft = 0;
    }
  }, {
    key: 'scrollToTop',
    value: function scrollToTop() {
      if (!this.view) return;
      this.view.scrollTop = 0;
    }
  }, {
    key: 'scrollToRight',
    value: function scrollToRight() {
      if (!this.view) return;
      this.view.scrollLeft = this.view.scrollWidth;
    }
  }, {
    key: 'scrollToBottom',
    value: function scrollToBottom() {
      if (!this.view) return;
      this.view.scrollTop = this.view.scrollHeight;
    }
  }, {
    key: 'addListeners',
    value: function addListeners() {
      /* istanbul ignore if */
      if (typeof document === 'undefined' || !this.view) return;
      var view = this.view,
          trackHorizontal = this.trackHorizontal,
          trackVertical = this.trackVertical,
          thumbHorizontal = this.thumbHorizontal,
          thumbVertical = this.thumbVertical;
      view.addEventListener('scroll', this.handleScroll);
      if (!(0, _getScrollbarWidth2["default"])()) return;
      trackHorizontal.addEventListener('mouseenter', this.handleTrackMouseEnter);
      trackHorizontal.addEventListener('mouseleave', this.handleTrackMouseLeave);
      trackHorizontal.addEventListener('mousedown', this.handleHorizontalTrackMouseDown);
      trackVertical.addEventListener('mouseenter', this.handleTrackMouseEnter);
      trackVertical.addEventListener('mouseleave', this.handleTrackMouseLeave);
      trackVertical.addEventListener('mousedown', this.handleVerticalTrackMouseDown);
      thumbHorizontal.addEventListener('mousedown', this.handleHorizontalThumbMouseDown);
      thumbVertical.addEventListener('mousedown', this.handleVerticalThumbMouseDown);
      window.addEventListener('resize', this.handleWindowResize);
    }
  }, {
    key: 'removeListeners',
    value: function removeListeners() {
      /* istanbul ignore if */
      if (typeof document === 'undefined' || !this.view) return;
      var view = this.view,
          trackHorizontal = this.trackHorizontal,
          trackVertical = this.trackVertical,
          thumbHorizontal = this.thumbHorizontal,
          thumbVertical = this.thumbVertical;
      view.removeEventListener('scroll', this.handleScroll);
      if (!(0, _getScrollbarWidth2["default"])()) return;
      trackHorizontal.removeEventListener('mouseenter', this.handleTrackMouseEnter);
      trackHorizontal.removeEventListener('mouseleave', this.handleTrackMouseLeave);
      trackHorizontal.removeEventListener('mousedown', this.handleHorizontalTrackMouseDown);
      trackVertical.removeEventListener('mouseenter', this.handleTrackMouseEnter);
      trackVertical.removeEventListener('mouseleave', this.handleTrackMouseLeave);
      trackVertical.removeEventListener('mousedown', this.handleVerticalTrackMouseDown);
      thumbHorizontal.removeEventListener('mousedown', this.handleHorizontalThumbMouseDown);
      thumbVertical.removeEventListener('mousedown', this.handleVerticalThumbMouseDown);
      window.removeEventListener('resize', this.handleWindowResize); // Possibly setup by `handleDragStart`

      this.teardownDragging();
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll(event) {
      var _this2 = this;

      var _props3 = this.props,
          onScroll = _props3.onScroll,
          onScrollFrame = _props3.onScrollFrame;
      if (onScroll) onScroll(event);
      this.update(function (values) {
        var scrollLeft = values.scrollLeft,
            scrollTop = values.scrollTop;
        _this2.viewScrollLeft = scrollLeft;
        _this2.viewScrollTop = scrollTop;
        if (onScrollFrame) onScrollFrame(values);
      });
      this.detectScrolling();
    }
  }, {
    key: 'handleScrollStart',
    value: function handleScrollStart() {
      var onScrollStart = this.props.onScrollStart;
      if (onScrollStart) onScrollStart();
      this.handleScrollStartAutoHide();
    }
  }, {
    key: 'handleScrollStartAutoHide',
    value: function handleScrollStartAutoHide() {
      var autoHide = this.props.autoHide;
      if (!autoHide) return;
      this.showTracks();
    }
  }, {
    key: 'handleScrollStop',
    value: function handleScrollStop() {
      var onScrollStop = this.props.onScrollStop;
      if (onScrollStop) onScrollStop();
      this.handleScrollStopAutoHide();
    }
  }, {
    key: 'handleScrollStopAutoHide',
    value: function handleScrollStopAutoHide() {
      var autoHide = this.props.autoHide;
      if (!autoHide) return;
      this.hideTracks();
    }
  }, {
    key: 'handleWindowResize',
    value: function handleWindowResize() {
      this.update();
    }
  }, {
    key: 'handleHorizontalTrackMouseDown',
    value: function handleHorizontalTrackMouseDown(event) {
      event.preventDefault();
      var target = event.target,
          clientX = event.clientX;

      var _target$getBoundingCl = target.getBoundingClientRect(),
          targetLeft = _target$getBoundingCl.left;

      var thumbWidth = this.getThumbHorizontalWidth();
      var offset = Math.abs(targetLeft - clientX) - thumbWidth / 2;
      this.view.scrollLeft = this.getScrollLeftForOffset(offset);
    }
  }, {
    key: 'handleVerticalTrackMouseDown',
    value: function handleVerticalTrackMouseDown(event) {
      event.preventDefault();
      var target = event.target,
          clientY = event.clientY;

      var _target$getBoundingCl2 = target.getBoundingClientRect(),
          targetTop = _target$getBoundingCl2.top;

      var thumbHeight = this.getThumbVerticalHeight();
      var offset = Math.abs(targetTop - clientY) - thumbHeight / 2;
      this.view.scrollTop = this.getScrollTopForOffset(offset);
    }
  }, {
    key: 'handleHorizontalThumbMouseDown',
    value: function handleHorizontalThumbMouseDown(event) {
      event.preventDefault();
      this.handleDragStart(event);
      var target = event.target,
          clientX = event.clientX;
      var offsetWidth = target.offsetWidth;

      var _target$getBoundingCl3 = target.getBoundingClientRect(),
          left = _target$getBoundingCl3.left;

      this.prevPageX = offsetWidth - (clientX - left);
    }
  }, {
    key: 'handleVerticalThumbMouseDown',
    value: function handleVerticalThumbMouseDown(event) {
      event.preventDefault();
      this.handleDragStart(event);
      var target = event.target,
          clientY = event.clientY;
      var offsetHeight = target.offsetHeight;

      var _target$getBoundingCl4 = target.getBoundingClientRect(),
          top = _target$getBoundingCl4.top;

      this.prevPageY = offsetHeight - (clientY - top);
    }
  }, {
    key: 'setupDragging',
    value: function setupDragging() {
      (0, _domCss2["default"])(document.body, _styles.disableSelectStyle);
      document.addEventListener('mousemove', this.handleDrag);
      document.addEventListener('mouseup', this.handleDragEnd);
      document.onselectstart = _returnFalse2["default"];
    }
  }, {
    key: 'teardownDragging',
    value: function teardownDragging() {
      (0, _domCss2["default"])(document.body, _styles.disableSelectStyleReset);
      document.removeEventListener('mousemove', this.handleDrag);
      document.removeEventListener('mouseup', this.handleDragEnd);
      document.onselectstart = undefined;
    }
  }, {
    key: 'handleDragStart',
    value: function handleDragStart(event) {
      this.dragging = true;
      event.stopImmediatePropagation();
      this.setupDragging();
    }
  }, {
    key: 'handleDrag',
    value: function handleDrag(event) {
      if (this.prevPageX) {
        var clientX = event.clientX;

        var _trackHorizontal$getB = this.trackHorizontal.getBoundingClientRect(),
            trackLeft = _trackHorizontal$getB.left;

        var thumbWidth = this.getThumbHorizontalWidth();
        var clickPosition = thumbWidth - this.prevPageX;
        var offset = -trackLeft + clientX - clickPosition;
        this.view.scrollLeft = this.getScrollLeftForOffset(offset);
      }

      if (this.prevPageY) {
        var clientY = event.clientY;

        var _trackVertical$getBou = this.trackVertical.getBoundingClientRect(),
            trackTop = _trackVertical$getBou.top;

        var thumbHeight = this.getThumbVerticalHeight();

        var _clickPosition = thumbHeight - this.prevPageY;

        var _offset = -trackTop + clientY - _clickPosition;

        this.view.scrollTop = this.getScrollTopForOffset(_offset);
      }

      return false;
    }
  }, {
    key: 'handleDragEnd',
    value: function handleDragEnd() {
      this.dragging = false;
      this.prevPageX = this.prevPageY = 0;
      this.teardownDragging();
      this.handleDragEndAutoHide();
    }
  }, {
    key: 'handleDragEndAutoHide',
    value: function handleDragEndAutoHide() {
      var autoHide = this.props.autoHide;
      if (!autoHide) return;
      this.hideTracks();
    }
  }, {
    key: 'handleTrackMouseEnter',
    value: function handleTrackMouseEnter() {
      this.trackMouseOver = true;
      this.handleTrackMouseEnterAutoHide();
    }
  }, {
    key: 'handleTrackMouseEnterAutoHide',
    value: function handleTrackMouseEnterAutoHide() {
      var autoHide = this.props.autoHide;
      if (!autoHide) return;
      this.showTracks();
    }
  }, {
    key: 'handleTrackMouseLeave',
    value: function handleTrackMouseLeave() {
      this.trackMouseOver = false;
      this.handleTrackMouseLeaveAutoHide();
    }
  }, {
    key: 'handleTrackMouseLeaveAutoHide',
    value: function handleTrackMouseLeaveAutoHide() {
      var autoHide = this.props.autoHide;
      if (!autoHide) return;
      this.hideTracks();
    }
  }, {
    key: 'showTracks',
    value: function showTracks() {
      clearTimeout(this.hideTracksTimeout);
      (0, _domCss2["default"])(this.trackHorizontal, {
        opacity: 1
      });
      (0, _domCss2["default"])(this.trackVertical, {
        opacity: 1
      });
    }
  }, {
    key: 'hideTracks',
    value: function hideTracks() {
      var _this3 = this;

      if (this.dragging) return;
      if (this.scrolling) return;
      if (this.trackMouseOver) return;
      var autoHideTimeout = this.props.autoHideTimeout;
      clearTimeout(this.hideTracksTimeout);
      this.hideTracksTimeout = setTimeout(function () {
        (0, _domCss2["default"])(_this3.trackHorizontal, {
          opacity: 0
        });
        (0, _domCss2["default"])(_this3.trackVertical, {
          opacity: 0
        });
      }, autoHideTimeout);
    }
  }, {
    key: 'detectScrolling',
    value: function detectScrolling() {
      var _this4 = this;

      if (this.scrolling) return;
      this.scrolling = true;
      this.handleScrollStart();
      this.detectScrollingInterval = setInterval(function () {
        if (_this4.lastViewScrollLeft === _this4.viewScrollLeft && _this4.lastViewScrollTop === _this4.viewScrollTop) {
          clearInterval(_this4.detectScrollingInterval);
          _this4.scrolling = false;

          _this4.handleScrollStop();
        }

        _this4.lastViewScrollLeft = _this4.viewScrollLeft;
        _this4.lastViewScrollTop = _this4.viewScrollTop;
      }, 100);
    }
  }, {
    key: 'raf',
    value: function raf(callback) {
      var _this5 = this;

      if (this.requestFrame) _raf3["default"].cancel(this.requestFrame);
      this.requestFrame = (0, _raf3["default"])(function () {
        _this5.requestFrame = undefined;
        callback();
      });
    }
  }, {
    key: 'update',
    value: function update(callback) {
      var _this6 = this;

      this.raf(function () {
        return _this6._update(callback);
      });
    }
  }, {
    key: '_update',
    value: function _update(callback) {
      var _props4 = this.props,
          onUpdate = _props4.onUpdate,
          hideTracksWhenNotNeeded = _props4.hideTracksWhenNotNeeded;
      var values = this.getValues();

      if ((0, _getScrollbarWidth2["default"])()) {
        var scrollLeft = values.scrollLeft,
            clientWidth = values.clientWidth,
            scrollWidth = values.scrollWidth;
        var trackHorizontalWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
        var thumbHorizontalWidth = this.getThumbHorizontalWidth();
        var thumbHorizontalX = scrollLeft / (scrollWidth - clientWidth) * (trackHorizontalWidth - thumbHorizontalWidth);
        var thumbHorizontalStyle = {
          width: thumbHorizontalWidth,
          transform: 'translateX(' + thumbHorizontalX + 'px)'
        };
        var scrollTop = values.scrollTop,
            clientHeight = values.clientHeight,
            scrollHeight = values.scrollHeight;
        var trackVerticalHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
        var thumbVerticalHeight = this.getThumbVerticalHeight();
        var thumbVerticalY = scrollTop / (scrollHeight - clientHeight) * (trackVerticalHeight - thumbVerticalHeight);
        var thumbVerticalStyle = {
          height: thumbVerticalHeight,
          transform: 'translateY(' + thumbVerticalY + 'px)'
        };

        if (hideTracksWhenNotNeeded) {
          var trackHorizontalStyle = {
            visibility: scrollWidth > clientWidth ? 'visible' : 'hidden'
          };
          var trackVerticalStyle = {
            visibility: scrollHeight > clientHeight ? 'visible' : 'hidden'
          };
          (0, _domCss2["default"])(this.trackHorizontal, trackHorizontalStyle);
          (0, _domCss2["default"])(this.trackVertical, trackVerticalStyle);
        }

        (0, _domCss2["default"])(this.thumbHorizontal, thumbHorizontalStyle);
        (0, _domCss2["default"])(this.thumbVertical, thumbVerticalStyle);
      }

      if (onUpdate) onUpdate(values);
      if (typeof callback !== 'function') return;
      callback(values);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var scrollbarWidth = (0, _getScrollbarWidth2["default"])();
      /* eslint-disable no-unused-vars */

      var _props5 = this.props,
          onScroll = _props5.onScroll,
          onScrollFrame = _props5.onScrollFrame,
          onScrollStart = _props5.onScrollStart,
          onScrollStop = _props5.onScrollStop,
          onUpdate = _props5.onUpdate,
          renderView = _props5.renderView,
          renderTrackHorizontal = _props5.renderTrackHorizontal,
          renderTrackVertical = _props5.renderTrackVertical,
          renderThumbHorizontal = _props5.renderThumbHorizontal,
          renderThumbVertical = _props5.renderThumbVertical,
          tagName = _props5.tagName,
          hideTracksWhenNotNeeded = _props5.hideTracksWhenNotNeeded,
          autoHide = _props5.autoHide,
          autoHideTimeout = _props5.autoHideTimeout,
          autoHideDuration = _props5.autoHideDuration,
          thumbSize = _props5.thumbSize,
          thumbMinSize = _props5.thumbMinSize,
          universal = _props5.universal,
          autoHeight = _props5.autoHeight,
          autoHeightMin = _props5.autoHeightMin,
          autoHeightMax = _props5.autoHeightMax,
          style = _props5.style,
          children = _props5.children,
          props = _objectWithoutProperties$1(_props5, ['onScroll', 'onScrollFrame', 'onScrollStart', 'onScrollStop', 'onUpdate', 'renderView', 'renderTrackHorizontal', 'renderTrackVertical', 'renderThumbHorizontal', 'renderThumbVertical', 'tagName', 'hideTracksWhenNotNeeded', 'autoHide', 'autoHideTimeout', 'autoHideDuration', 'thumbSize', 'thumbMinSize', 'universal', 'autoHeight', 'autoHeightMin', 'autoHeightMax', 'style', 'children']);
      /* eslint-enable no-unused-vars */


      var didMountUniversal = this.state.didMountUniversal;

      var containerStyle = _extends$4({}, _styles.containerStyleDefault, autoHeight && _extends$4({}, _styles.containerStyleAutoHeight, {
        minHeight: autoHeightMin,
        maxHeight: autoHeightMax
      }), style);

      var viewStyle = _extends$4({}, _styles.viewStyleDefault, {
        // Hide scrollbars by setting a negative margin
        marginRight: scrollbarWidth ? -scrollbarWidth : 0,
        marginBottom: scrollbarWidth ? -scrollbarWidth : 0
      }, autoHeight && _extends$4({}, _styles.viewStyleAutoHeight, {
        // Add scrollbarWidth to autoHeight in order to compensate negative margins
        minHeight: (0, _isString2["default"])(autoHeightMin) ? 'calc(' + autoHeightMin + ' + ' + scrollbarWidth + 'px)' : autoHeightMin + scrollbarWidth,
        maxHeight: (0, _isString2["default"])(autoHeightMax) ? 'calc(' + autoHeightMax + ' + ' + scrollbarWidth + 'px)' : autoHeightMax + scrollbarWidth
      }), autoHeight && universal && !didMountUniversal && {
        minHeight: autoHeightMin,
        maxHeight: autoHeightMax
      }, universal && !didMountUniversal && _styles.viewStyleUniversalInitial);

      var trackAutoHeightStyle = {
        transition: 'opacity ' + autoHideDuration + 'ms',
        opacity: 0
      };

      var trackHorizontalStyle = _extends$4({}, _styles.trackHorizontalStyleDefault, autoHide && trackAutoHeightStyle, (!scrollbarWidth || universal && !didMountUniversal) && {
        display: 'none'
      });

      var trackVerticalStyle = _extends$4({}, _styles.trackVerticalStyleDefault, autoHide && trackAutoHeightStyle, (!scrollbarWidth || universal && !didMountUniversal) && {
        display: 'none'
      });

      return (0, _react$1.createElement)(tagName, _extends$4({}, props, {
        style: containerStyle,
        ref: function ref(_ref3) {
          _this7.container = _ref3;
        }
      }), [(0, _react$1.cloneElement)(renderView({
        style: viewStyle
      }), {
        key: 'view',
        ref: function ref(_ref4) {
          _this7.view = _ref4;
        }
      }, children), (0, _react$1.cloneElement)(renderTrackHorizontal({
        style: trackHorizontalStyle
      }), {
        key: 'trackHorizontal',
        ref: function ref(_ref5) {
          _this7.trackHorizontal = _ref5;
        }
      }, (0, _react$1.cloneElement)(renderThumbHorizontal({
        style: _styles.thumbHorizontalStyleDefault
      }), {
        ref: function ref(_ref6) {
          _this7.thumbHorizontal = _ref6;
        }
      })), (0, _react$1.cloneElement)(renderTrackVertical({
        style: trackVerticalStyle
      }), {
        key: 'trackVertical',
        ref: function ref(_ref7) {
          _this7.trackVertical = _ref7;
        }
      }, (0, _react$1.cloneElement)(renderThumbVertical({
        style: _styles.thumbVerticalStyleDefault
      }), {
        ref: function ref(_ref8) {
          _this7.thumbVertical = _ref8;
        }
      }))]);
    }
  }]);

  return Scrollbars;
}(_react$1.Component);

exports["default"] = Scrollbars;
Scrollbars.propTypes = {
  onScroll: _propTypes2["default"].func,
  onScrollFrame: _propTypes2["default"].func,
  onScrollStart: _propTypes2["default"].func,
  onScrollStop: _propTypes2["default"].func,
  onUpdate: _propTypes2["default"].func,
  renderView: _propTypes2["default"].func,
  renderTrackHorizontal: _propTypes2["default"].func,
  renderTrackVertical: _propTypes2["default"].func,
  renderThumbHorizontal: _propTypes2["default"].func,
  renderThumbVertical: _propTypes2["default"].func,
  tagName: _propTypes2["default"].string,
  thumbSize: _propTypes2["default"].number,
  thumbMinSize: _propTypes2["default"].number,
  hideTracksWhenNotNeeded: _propTypes2["default"].bool,
  autoHide: _propTypes2["default"].bool,
  autoHideTimeout: _propTypes2["default"].number,
  autoHideDuration: _propTypes2["default"].number,
  autoHeight: _propTypes2["default"].bool,
  autoHeightMin: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
  autoHeightMax: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
  universal: _propTypes2["default"].bool,
  style: _propTypes2["default"].object,
  children: _propTypes2["default"].node
};
Scrollbars.defaultProps = {
  renderView: _defaultRenderElements.renderViewDefault,
  renderTrackHorizontal: _defaultRenderElements.renderTrackHorizontalDefault,
  renderTrackVertical: _defaultRenderElements.renderTrackVerticalDefault,
  renderThumbHorizontal: _defaultRenderElements.renderThumbHorizontalDefault,
  renderThumbVertical: _defaultRenderElements.renderThumbVerticalDefault,
  tagName: 'div',
  thumbMinSize: 30,
  hideTracksWhenNotNeeded: false,
  autoHide: false,
  autoHideTimeout: 1000,
  autoHideDuration: 200,
  autoHeight: false,
  autoHeightMin: 0,
  autoHeightMax: 200,
  universal: false
};

var Scrollbars$1 = /*#__PURE__*/Object.freeze({

});

var lib$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scrollbars = undefined;



var _Scrollbars2 = _interopRequireDefault(Scrollbars$1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

exports["default"] = _Scrollbars2["default"];
exports.Scrollbars = _Scrollbars2["default"];
});

var ReactCustomScrollbars = unwrapExports(lib$1);
var lib_1 = lib$1.Scrollbars;

function _templateObject$j() {
  var data = _taggedTemplateLiteral(["\n ", "\n ", "\n ", ";\n"]);

  _templateObject$j = function _templateObject() {
    return data;
  };

  return data;
}
var EnhancedScrollbars = styled(ReactCustomScrollbars)(_templateObject$j(), flex, order, alignSelf);
/**
 * Добавляет вертикальный и горизинтальный скроллбар для блока.
 * Обеспечивает единое отоборажение скорллбара во всех баузерах и операционных системах.
 */

var Scrollbars$2 = React$3__default.forwardRef(function (props, ref) {
  return React$3__default.createElement(EnhancedScrollbars, _extends({
    ref: ref
  }, props));
});
Scrollbars$2.propTypes = {
  onScroll: PropTypes.func,
  onScrollFrame: PropTypes.func,
  onScrollStart: PropTypes.func,
  onScrollStop: PropTypes.func,
  onUpdate: PropTypes.func,
  renderView: PropTypes.func,
  renderTrackHorizontal: PropTypes.func,
  renderTrackVertical: PropTypes.func,
  renderThumbHorizontal: PropTypes.func,
  renderThumbVertical: PropTypes.func,
  tagName: PropTypes.string,
  thumbSize: PropTypes.number,
  thumbMinSize: PropTypes.number,
  hideTracksWhenNotNeeded: PropTypes.bool,
  autoHide: PropTypes.bool,
  autoHideTimeout: PropTypes.number,
  autoHideDuration: PropTypes.number,
  autoHeight: PropTypes.bool,
  autoHeightMin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  autoHeightMax: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  universal: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.node
};
Scrollbars$2.defaultProps = {
  tagName: 'div',
  thumbMinSize: 30,
  hideTracksWhenNotNeeded: false,
  autoHide: false,
  autoHideTimeout: 1000,
  autoHideDuration: 200,
  autoHeight: false,
  autoHeightMin: 0,
  autoHeightMax: 200,
  universal: false
};
Scrollbars$2.displayName = 'Scrollbars';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodyOpenClassName = exports.portalClassName = undefined;

var _extends$5 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass$2 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react$2 = require("react");

var _react2$1 = _interopRequireDefault$3(_react$2);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault$3(_reactDom);

var _propTypes$1 = require("prop-types");

var _propTypes2$1 = _interopRequireDefault$3(_propTypes$1);

var _ModalPortal = require("./ModalPortal");

var _ModalPortal2 = _interopRequireDefault$3(_ModalPortal);

var _ariaAppHider = require("../helpers/ariaAppHider");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _safeHTMLElement = require("../helpers/safeHTMLElement");

var _safeHTMLElement2 = _interopRequireDefault$3(_safeHTMLElement);

var _reactLifecyclesCompat = require("react-lifecycles-compat");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault$3(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$2(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var portalClassName = exports.portalClassName = "ReactModalPortal";
var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";
var isReact16 = _reactDom2.default.createPortal !== undefined;

var getCreatePortal = function getCreatePortal() {
  return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
};

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = function (_Component) {
  _inherits$2(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$2(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$2(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      parent.removeChild(_this.node);
    }, _this.portalRef = function (ref) {
      _this.portal = ref;
    }, _this.renderPortal = function (props) {
      var createPortal = getCreatePortal();
      var portal = createPortal(_this, _react2$1.default.createElement(_ModalPortal2.default, _extends$5({
        defaultStyles: Modal.defaultStyles
      }, props)), _this.node);

      _this.portalRef(portal);
    }, _temp), _possibleConstructorReturn$2(_this, _ret);
  }

  _createClass$2(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!_safeHTMLElement.canUseDOM) return;

      if (!isReact16) {
        this.node = document.createElement("div");
      }

      this.node.className = this.props.portalClassName;
      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);
      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var prevParent = getParentElement(prevProps.parentSelector);
      var nextParent = getParentElement(this.props.parentSelector);
      return {
        prevParent: prevParent,
        nextParent: nextParent
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _, snapshot) {
      if (!_safeHTMLElement.canUseDOM) return;
      var _props = this.props,
          isOpen = _props.isOpen,
          portalClassName = _props.portalClassName;

      if (prevProps.portalClassName !== portalClassName) {
        this.node.className = portalClassName;
      }

      var prevParent = snapshot.prevParent,
          nextParent = snapshot.nextParent;

      if (nextParent !== prevParent) {
        prevParent.removeChild(this.node);
        nextParent.appendChild(this.node);
      } // Stop unnecessary renders if modal is remaining closed


      if (!prevProps.isOpen && !isOpen) return;
      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;
      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!_safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }

      if (!this.node && isReact16) {
        this.node = document.createElement("div");
      }

      var createPortal = getCreatePortal();
      return createPortal(_react2$1.default.createElement(_ModalPortal2.default, _extends$5({
        ref: this.portalRef,
        defaultStyles: Modal.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider.setElement(element);
    }
    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(_react$2.Component);

Modal.propTypes = {
  isOpen: _propTypes2$1.default.bool.isRequired,
  style: _propTypes2$1.default.shape({
    content: _propTypes2$1.default.object,
    overlay: _propTypes2$1.default.object
  }),
  portalClassName: _propTypes2$1.default.string,
  bodyOpenClassName: _propTypes2$1.default.string,
  htmlOpenClassName: _propTypes2$1.default.string,
  className: _propTypes2$1.default.oneOfType([_propTypes2$1.default.string, _propTypes2$1.default.shape({
    base: _propTypes2$1.default.string.isRequired,
    afterOpen: _propTypes2$1.default.string.isRequired,
    beforeClose: _propTypes2$1.default.string.isRequired
  })]),
  overlayClassName: _propTypes2$1.default.oneOfType([_propTypes2$1.default.string, _propTypes2$1.default.shape({
    base: _propTypes2$1.default.string.isRequired,
    afterOpen: _propTypes2$1.default.string.isRequired,
    beforeClose: _propTypes2$1.default.string.isRequired
  })]),
  appElement: _propTypes2$1.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2$1.default.func,
  onRequestClose: _propTypes2$1.default.func,
  closeTimeoutMS: _propTypes2$1.default.number,
  ariaHideApp: _propTypes2$1.default.bool,
  shouldFocusAfterRender: _propTypes2$1.default.bool,
  shouldCloseOnOverlayClick: _propTypes2$1.default.bool,
  shouldReturnFocusAfterClose: _propTypes2$1.default.bool,
  parentSelector: _propTypes2$1.default.func,
  aria: _propTypes2$1.default.object,
  data: _propTypes2$1.default.object,
  role: _propTypes2$1.default.string,
  contentLabel: _propTypes2$1.default.string,
  shouldCloseOnEsc: _propTypes2$1.default.bool,
  overlayRef: _propTypes2$1.default.func,
  contentRef: _propTypes2$1.default.func
};
Modal.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  role: "dialog",
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  parentSelector: function parentSelector() {
    return document.body;
  }
};
Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};
(0, _reactLifecyclesCompat.polyfill)(Modal);
exports.default = Modal;

var Modal$1 = /*#__PURE__*/Object.freeze({

});

var lib$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _Modal2 = _interopRequireDefault(Modal$1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = _Modal2.default;
module.exports = exports["default"];
});

var ReactModal = unwrapExports(lib$2);

/**
 * Модальное окно
 */

function Modal$2(_ref) {
  var isOpen = _ref.isOpen,
      nodeId = _ref.nodeId,
      props = _objectWithoutProperties(_ref, ["isOpen", "nodeId"]);

  var customModalStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 2
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      border: 'none',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'transparent',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '0px',
      outline: 'none',
      padding: '0px'
    }
  };
  React$3__default.useEffect(function () {
    ReactModal.setAppElement(document.getElementById(nodeId));
  }, []);
  return React$3__default.createElement(ReactModal, _extends({
    style: customModalStyles
  }, props));
}

Modal$2.propTypes = {
  isOpen: PropTypes.bool,
  nodeId: PropTypes.string
};
Modal$2.defaultProps = {
  isOpen: false,
  nodeId: 'root'
};
Modal$2.displayName = 'Modal';

function _templateObject$k() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  border-width: 1px;\n  border-style: solid;\n  border-color: transparent;\n  border-radius: ", ";\n  transition: all ", ";\n  width:", ";\n  :hover {\n    border-color: ", "\n  }\n  :focus {\n    outline: none;\n    background: ", ";\n    border-color: ", ";\n    width:", ";\n  }\n  background: ", ";\n\n  ", "\n  ", "\n  ", "\n  ", ";\n"]);

  _templateObject$k = function _templateObject() {
    return data;
  };

  return data;
}

var propsToOmit$1 = ['suffix', 'prefix', 'width', 'value', 'wrapperStyle', 'onChange'];

var disabled$3 = function disabled(props) {
  return props.disabled && css$1(["background:", ";cursor:not-allowed;"], themeGet('colors.input.disabled', '#b5b5b5'));
};

var size$4 = function size(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      theme = _ref.theme;
  var sizes = {
    // Same as button heights, but with height, instead of paddings.
    small: {
      fontSize: theme.fontSizes[0],
      height: 32
    },
    medium: {
      fontSize: theme.fontSizes[1],
      height: 40
    },
    large: {
      fontSize: theme.fontSizes[2],
      height: 48
    }
  };
  return sizes[size];
};

var inline$2 = function inline(_ref2) {
  var inline = _ref2.inline;
  return Boolean(inline) && {
    display: 'inline-block'
  };
};

var HTMLInput$1 = styled.input(_templateObject$k(), themeGet('font.main', "'PT Sans'"), function (props) {
  return props.theme.radii[1] + 'px';
}, function (props) {
  return props.theme.duration.fast;
}, function (props) {
  return props.shrinkWidth + 'px';
}, themeGet('colors.black', '#3a3a3a'), themeGet('colors.white', '#ffffff'), themeGet('colors.lightBlue', '#0091ea'), function (props) {
  return props.growWidth + 'px';
}, function (props) {
  return props.theme.colors.lightGrey;
}, space, size$4, disabled$3, inline$2);
var InputWrapper$2 = styled(Relative)({
  display: 'flex',
  flexGrow: 1,
  alignItems: 'center'
});
var Adornment$1 = styled(Absolute)({
  display: 'flex'
});
/** Получение данных от пользователя.*/

var ResizableInput =
/*#__PURE__*/
function (_Component) {
  _inherits(ResizableInput, _Component);

  function ResizableInput(props) {
    var _this;

    _classCallCheck(this, ResizableInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ResizableInput).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var newValue = event.target.value;

      _this.setState({
        value: newValue
      });

      _this.props.onChange && _this.props.onChange(newValue, event);
    });

    _defineProperty(_assertThisInitialized(_this), "saveInput", function (node) {
      _this.input = node;
    });

    _defineProperty(_assertThisInitialized(_this), "focus", function () {
      _this.input.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "blur", function () {
      _this.input.blur();
    });

    _this.state = {
      value: typeof props.value !== 'undefined' ? props.defaultValue : props.value
    };
    return _this;
  }

  _createClass(ResizableInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefix = _this$props.prefix,
          suffix = _this$props.suffix,
          width = _this$props.width,
          wrapperStyle = _this$props.wrapperStyle,
          shrinkWidth = _this$props.shrinkWidth,
          growWidth = _this$props.growWidth;
      return React$3__default.createElement(InputWrapper$2, {
        width: width,
        style: wrapperStyle
      }, prefix && React$3__default.createElement(Adornment$1, {
        left: 0,
        pl: 2
      }, prefix), React$3__default.createElement(HTMLInput$1, _extends({}, omit_1(this.props, propsToOmit$1), {
        pl: prefix ? 4 : 3,
        pr: suffix ? 4 : 2,
        width: "100%",
        ref: this.saveRef,
        value: this.state.value,
        onChange: this.handleChange,
        shrinkWidth: shrinkWidth,
        growWidth: growWidth
      })), suffix && React$3__default.createElement(Adornment$1, {
        right: 0,
        pr: 2
      }, suffix));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          value: nextProps.value
        };
      }

      return null;
    }
  }]);

  return ResizableInput;
}(Component);

ResizableInput.propTypes = {
  /** Ширина враппера для инпута.*/
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),

  /** Иконка в начале инпута. */
  prefix: PropTypes.element,

  /** Иконка в конце инпута. */
  suffix: PropTypes.element,

  /** Размер инпута: */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /** Стили враппера */
  wrapperStyle: PropTypes.object
};
ResizableInput.defaultProps = {
  size: 'medium'
};
ResizableInput.displayName = 'ResizableInput';

function _templateObject$l() {
  var data = _taggedTemplateLiteral(["\n  padding-top: ", ";\n  padding-bottom: ", ";\n  align-self: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  margin: 0 auto;\n  width: ", ";\n"]);

  _templateObject$l = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * Специализированный компонент для позиционирования крупных блоков по центру страницы
 * и ограничения их ширины. Применяется ещё и для ограничения ширины блоков внутри сетки
 * Обладает шириной по умолчанию, равной базовой ширине контента на странице проекта*/

var ContentBoxStyle = styled(Flex)(_templateObject$l(), function (props) {
  return props.padding + 'px';
}, function (props) {
  return props.padding + 'px';
}, function (props) {
  return props.alignSelf;
}, function (props) {
  return props.justifyContent;
}, function (props) {
  return props.alignItems;
}, function (props) {
  return props.contentwidth + 'px';
});

function ContentBox(_ref) {
  var children = _ref.children,
      padding = _ref.padding,
      justifyContent = _ref.justifyContent,
      alignItems = _ref.alignItems,
      contentwidth = _ref.contentwidth,
      alignSelf = _ref.alignSelf,
      props = _objectWithoutProperties(_ref, ["children", "padding", "justifyContent", "alignItems", "contentwidth", "alignSelf"]);

  return React$3__default.createElement(ContentBoxStyle, _extends({
    padding: padding,
    justifyContent: justifyContent,
    contentwidth: contentwidth,
    alignItems: alignItems,
    alignSelf: alignSelf
  }, props), children);
}

ContentBox.propTypes = {
  padding: PropTypes.number,
  justifyContent: PropTypes.string,
  contentwidth: PropTypes.number,
  alignSelf: PropTypes.string,
  alignItems: PropTypes.string
};
ContentBox.defaultProps = {
  padding: 0,
  justifyContent: 'flex-start',
  contentwidth: 1120,
  alignSelf: 'center',
  alignItems: 'flex-start'
};

function _templateObject$m() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  align-self: center;\n  width: 100%;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-color: ", ";\n"]);

  _templateObject$m = function _templateObject() {
    return data;
  };

  return data;
}
/** Стандартный Flex, дополненный нижним разделителем для более точной верстки
 * Используется в модулях навигации и просто между крупными блоками*/

var FlexContainer = styled(Flex)(_templateObject$m(), function (props) {
  return props.theme.colors[props.dividercolor];
});

function FlexContainerBottomDivider(_ref) {
  var children = _ref.children,
      dividercolor = _ref.dividercolor,
      props = _objectWithoutProperties(_ref, ["children", "dividercolor"]);

  return React$3__default.createElement(FlexContainer, {
    dividercolor: dividercolor
  }, children);
}

FlexContainerBottomDivider.propTypes = {
  dividercolor: PropTypes.string
};
FlexContainerBottomDivider.defaultProps = {
  dividercolor: 'border'
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _merge2 = require('lodash/merge');

var _merge3 = _interopRequireDefault$4(_merge2);

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault$4(_pick2);

var _isUndefined2 = require('lodash/isUndefined');

var _isUndefined3 = _interopRequireDefault$4(_isUndefined2);

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault$4(_isEqual2);

var _eq2$1 = require('lodash/eq');

var _eq3 = _interopRequireDefault$4(_eq2$1);

var _debounce2 = require('lodash/debounce');

var _debounce3 = _interopRequireDefault$4(_debounce2);

var _flatten2 = require('lodash/flatten');

var _flatten3 = _interopRequireDefault$4(_flatten2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault$4(_isFunction2);

var _intersection2 = require('lodash/intersection');

var _intersection3 = _interopRequireDefault$4(_intersection2);

var _slicedToArray$1 = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var _extends$6 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass$3 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react$3 = require('react');

var React = _interopRequireWildcard$1(_react$3);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault$4(_classnames);

var _elementResizeEvent = require('element-resize-event');

var _elementResizeEvent2 = _interopRequireDefault$4(_elementResizeEvent);

var _domLib = require('dom-lib');

var _Row = require('./Row');

var _Row2 = _interopRequireDefault$4(_Row);

var _CellGroup = require('./CellGroup');

var _CellGroup2 = _interopRequireDefault$4(_CellGroup);

var _Scrollbar = require('./Scrollbar');

var _Scrollbar2 = _interopRequireDefault$4(_Scrollbar);

var _utils$1 = require('./utils');

var _propTypes$2 = require('prop-types');

var _propTypes2$2 = _interopRequireDefault$4(_propTypes$2);

function _interopRequireWildcard$1(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault$4(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectWithoutProperties$2(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function _defineProperty$2(obj, key, value) {
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

function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$3(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits$3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _toConsumableArray$1(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return Array.from(arr);
  }
}

var ReactChildren = React.Children;
var CELL_PADDING_HEIGHT = 26;
var columnHandledProps = ['align', 'verticalAlign', 'width', 'fixed', 'resizable', 'flexGrow', 'minWidth', 'colSpan'];
var SORT_TYPE = {
  DESC: 'desc',
  ASC: 'asc'
};
var SCROLLBAR_WIDHT = 10;

function findRowKeys(rows, rowKey, expanded) {
  var keys = [];

  for (var i = 0; i < rows.length; i++) {
    var item = rows[i];

    if (item.children) {
      keys.push(item[rowKey]);
      keys = [].concat(_toConsumableArray$1(keys), _toConsumableArray$1(findRowKeys(item.children, rowKey)));
    } else if (expanded) {
      keys.push(item[rowKey]);
    }
  }

  return keys;
}

function findAllParents(rowData, rowKey) {
  var parents = [];

  if (!rowData) {
    return parents;
  }

  function findParent(data) {
    if (data) {
      parents.push(data[rowKey]);

      if (data._parent) {
        findParent(data._parent);
      }
    }
  }

  findParent(rowData._parent);
  return parents;
}

function shouldShowRowByExpanded() {
  var expandedRowKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var parentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var intersectionKeys = (0, _intersection3.default)(expandedRowKeys, parentKeys);

  if (intersectionKeys.length === parentKeys.length) {
    return true;
  }

  return false;
}

function resetLeftForCells(cells) {
  var left = 0;
  var nextCells = [];

  for (var i = 0; i < cells.length; i++) {
    var cell = cells[i];
    var nextCell = React.cloneElement(cell, {
      left: left
    });
    left += cell.props.width;
    nextCells.push(nextCell);
  }

  return nextCells;
}

function getRandomKey(index) {
  return '_' + (Math.random() * 1e18).toString(36).slice(0, 5).toUpperCase() + '_' + index;
}

var Table = function (_React$Component) {
  _inherits$3(Table, _React$Component);

  _createClass$3(Table, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      if (props.data !== state.cacheData) {
        return {
          cacheData: props.data,
          data: props.isTree ? (0, _utils$1.flattenData)(props.data) : props.data
        };
      }

      return null;
    }
  }]);

  function Table(props) {
    _classCallCheck$3(this, Table);

    var _this = _possibleConstructorReturn$3(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _initialiseProps.call(_this);

    var width = props.width,
        data = props.data,
        rowKey = props.rowKey,
        defaultExpandAllRows = props.defaultExpandAllRows,
        renderRowExpanded = props.renderRowExpanded,
        defaultExpandedRowKeys = props.defaultExpandedRowKeys,
        _props$children = props.children,
        children = _props$children === undefined ? [] : _props$children,
        isTree = props.isTree,
        defaultSortType = props.defaultSortType;
    var expandedRowKeys = defaultExpandAllRows ? findRowKeys(data, rowKey, (0, _isFunction3.default)(renderRowExpanded)) : defaultExpandedRowKeys || [];
    var shouldFixedColumn = Array.from(children).some(function (child) {
      return child && child.props && child.props.fixed;
    });

    if (isTree && !rowKey) {
      throw new Error('The `rowKey` is required when set isTree');
    }

    _this.state = {
      expandedRowKeys: expandedRowKeys,
      shouldFixedColumn: shouldFixedColumn,
      cacheData: data,
      data: isTree ? (0, _utils$1.flattenData)(data) : data,
      width: width || 0,
      columnWidth: 0,
      dataKey: 0,
      contentHeight: 0,
      contentWidth: 0,
      tableRowsMaxHeight: [],
      sortType: defaultSortType,
      scrollY: 0,
      isScrolling: false
    };
    _this.scrollY = 0;
    _this.scrollX = 0;
    _this.wheelHandler = new _domLib.WheelHandler(_this._listenWheel, _this.shouldHandleWheelX, _this.shouldHandleWheelY, false);
    _this._cacheChildrenSize = (0, _flatten3.default)(children).length;
    return _this;
  }

  _createClass$3(Table, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.calculateTableWidth();
      this.calculateTableContextHeight();
      this.calculateRowMaxHeight();
      (0, _elementResizeEvent2.default)(this.table, (0, _debounce3.default)(this.calculateTableWidth, 400));
      var options = {
        passive: false
      };
      this.wheelListener = (0, _domLib.on)(this.tableBody, 'wheel', this.wheelHandler.onWheel, options);
      this.touchStartListener = (0, _domLib.on)(this.tableBody, 'touchstart', this.handleTouchStart, options);
      this.touchMoveListener = (0, _domLib.on)(this.tableBody, 'touchmove', this.handleTouchMove, options);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _cacheChildrenSize = (0, _flatten3.default)(nextProps.children || []).length;

      if (_cacheChildrenSize !== this._cacheChildrenSize) {
        this._cacheChildrenSize = _cacheChildrenSize;
        this._cacheCells = null;
      }

      if (this.props.children !== nextProps.children) {
        this._cacheCells = null;
      }

      return !(0, _eq3.default)(this.props, nextProps) || !(0, _isEqual3.default)(this.state, nextState);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this.calculateTableContextHeight();
      this.calculateTableContentWidth(prevProps);
      this.calculateRowMaxHeight();
      this.updatePosition();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.wheelHandler = null;

      if (this.table) {
        (0, _elementResizeEvent.unbind)(this.table);
      }

      if (this.wheelListener) {
        this.wheelListener.off();
      }

      if (this.touchStartListener) {
        this.touchStartListener.off();
      }

      if (this.touchMoveListener) {
        this.touchMoveListener.off();
      }
    }
  }, {
    key: 'getExpandedRowKeys',
    value: function getExpandedRowKeys() {
      var expandedRowKeys = this.props.expandedRowKeys;
      return (0, _isUndefined3.default)(expandedRowKeys) ? this.state.expandedRowKeys : expandedRowKeys;
    }
  }, {
    key: 'getSortType',
    value: function getSortType() {
      var sortType = this.props.sortType;
      return (0, _isUndefined3.default)(sortType) ? this.state.sortType : sortType;
    }
  }, {
    key: 'getScrollCellGroups',
    value: function getScrollCellGroups() {
      return this.table.querySelectorAll('.' + this.addPrefix('cell-group-scroll'));
    }
  }, {
    key: 'getFixedLeftCellGroups',
    value: function getFixedLeftCellGroups() {
      return this.table.querySelectorAll('.' + this.addPrefix('cell-group-fixed-left'));
    }
  }, {
    key: 'getFixedRightCellGroups',
    value: function getFixedRightCellGroups() {
      return this.table.querySelectorAll('.' + this.addPrefix('cell-group-fixed-right'));
    }
    /**
     * 获取表头高度
     */

  }, {
    key: 'getTableHeaderHeight',
    value: function getTableHeaderHeight() {
      var _props = this.props,
          headerHeight = _props.headerHeight,
          showHeader = _props.showHeader;
      return showHeader ? headerHeight : 0;
    }
    /**
     * 获取 Table 需要渲染的高度
     */

  }, {
    key: 'getTableHeight',
    value: function getTableHeight() {
      var contentHeight = this.state.contentHeight;
      var _props2 = this.props,
          minHeight = _props2.minHeight,
          height = _props2.height,
          autoHeight = _props2.autoHeight,
          data = _props2.data;
      var headerHeight = this.getTableHeaderHeight();

      if (data.length === 0 && autoHeight) {
        return height;
      }

      return autoHeight ? Math.max(headerHeight + contentHeight, minHeight) : height;
    }
  }, {
    key: 'getCells',
    value: function getCells() {
      var _this2 = this;

      if (this._cacheCells) {
        return this._cacheCells;
      }

      var left = 0; // Cell left margin

      var headerCells = []; // Table header cell

      var bodyCells = []; // Table body cell

      var columns = this.props.children;

      if (!columns) {
        this._cacheCells = {
          headerCells: headerCells,
          bodyCells: bodyCells,
          allColumnsWidth: left
        };
        return this._cacheCells;
      }

      var tableWidth = this.state.width;
      var _props3 = this.props,
          sortColumn = _props3.sortColumn,
          rowHeight = _props3.rowHeight,
          showHeader = _props3.showHeader;
      var headerHeight = this.getTableHeaderHeight();

      var _getTotalByColumns = (0, _utils$1.getTotalByColumns)(columns),
          totalFlexGrow = _getTotalByColumns.totalFlexGrow,
          totalWidth = _getTotalByColumns.totalWidth;

      ReactChildren.forEach(columns, function (column, index) {
        if (React.isValidElement(column)) {
          var columnChildren = column.props.children;
          var _column$props = column.props,
              _width = _column$props.width,
              resizable = _column$props.resizable,
              flexGrow = _column$props.flexGrow,
              minWidth = _column$props.minWidth,
              onResize = _column$props.onResize;

          if (resizable && flexGrow) {
            console.warn('Cannot set \'resizable\' and \'flexGrow\' together in <Column>, column index: ' + index);
          }

          if (columnChildren.length !== 2) {
            throw new Error('Component <HeaderCell> and <Cell> is required, column index: ' + index + ' ');
          }

          var nextWidth = _this2.state[columnChildren[1].props.dataKey + '_' + index + '_width'] || _width || 0;

          if (tableWidth && flexGrow && totalFlexGrow) {
            nextWidth = Math.max((tableWidth - totalWidth) / totalFlexGrow * flexGrow, minWidth || 60);
          }

          var cellProps = _extends$6({}, (0, _pick3.default)(column.props, columnHandledProps), {
            left: left,
            index: index,
            headerHeight: headerHeight,
            key: index,
            width: nextWidth,
            height: rowHeight,
            firstColumn: index === 0,
            lastColumn: index === columns.length - 1
          });

          if (showHeader && headerHeight) {
            var headerCellProps = {
              dataKey: columnChildren[1].props.dataKey,
              isHeaderCell: true,
              sortable: column.props.sortable,
              onSortColumn: _this2.handleSortColumn,
              sortType: _this2.getSortType(),
              sortColumn: sortColumn,
              flexGrow: flexGrow
            };

            if (resizable) {
              (0, _merge3.default)(headerCellProps, {
                onResize: onResize,
                onColumnResizeEnd: _this2.handleColumnResizeEnd,
                onColumnResizeStart: _this2.handleColumnResizeStart,
                onColumnResizeMove: _this2.handleColumnResizeMove
              });
            }

            headerCells.push(React.cloneElement(columnChildren[0], _extends$6({}, cellProps, headerCellProps)));
          }

          bodyCells.push(React.cloneElement(columnChildren[1], cellProps));
          left += nextWidth;
        }
      });
      this._cacheCells = {
        headerCells: headerCells,
        bodyCells: bodyCells,
        allColumnsWidth: left
      };
      return this._cacheCells;
    } // 处理移动端 Touch 事件,  Start 的时候初始化 x,y
    // 处理移动端 Touch 事件, Move 的时候初始化，更新 scroll

    /**
     * 当用户在 Table 内使用 tab 键，触发了 onScroll 事件，这个时候应该更新滚动条位置
     * Fix: https://github.com/rsuite/rsuite/issues/234
     */

  }, {
    key: 'updatePosition',
    value: function updatePosition() {
      /**
       * 当存在锁定列情况处理
       */
      if (this.state.shouldFixedColumn) {
        this.updatePositionByFixedCell();
      } else {
        var wheelStyle = {};
        var headerStyle = {};
        (0, _domLib.translateDOMPositionXY)(wheelStyle, this.scrollX, this.scrollY);
        (0, _domLib.translateDOMPositionXY)(headerStyle, this.scrollX, 0);
        this.wheelWrapper && (0, _domLib.addStyle)(this.wheelWrapper, wheelStyle);
        this.headerWrapper && (0, _domLib.addStyle)(this.headerWrapper, headerStyle);
      }

      if (this.tableHeader) {
        (0, _utils$1.toggleClass)(this.tableHeader, this.addPrefix('cell-group-shadow'), this.scrollY < 0);
      }
    }
  }, {
    key: 'updatePositionByFixedCell',
    value: function updatePositionByFixedCell() {
      var wheelGroupStyle = {};
      var wheelStyle = {};
      var scrollGroups = this.getScrollCellGroups();
      var fixedLeftGroups = this.getFixedLeftCellGroups();
      var fixedRightGroups = this.getFixedRightCellGroups();
      var _state = this.state,
          contentWidth = _state.contentWidth,
          width = _state.width;
      (0, _domLib.translateDOMPositionXY)(wheelGroupStyle, this.scrollX, 0);
      (0, _domLib.translateDOMPositionXY)(wheelStyle, 0, this.scrollY);
      var scrollArrayGroups = Array.from(scrollGroups);

      for (var i = 0; i < scrollArrayGroups.length; i++) {
        var group = scrollArrayGroups[i];
        (0, _domLib.addStyle)(group, wheelGroupStyle);
      }

      if (this.wheelWrapper) {
        (0, _domLib.addStyle)(this.wheelWrapper, wheelStyle);
      }

      var leftShadowClassName = this.addPrefix('cell-group-left-shadow');
      var rightShadowClassName = this.addPrefix('cell-group-right-shadow');
      var showLeftShadow = this.scrollX < 0;
      var showRightShadow = width - contentWidth - SCROLLBAR_WIDHT !== this.scrollX;
      (0, _utils$1.toggleClass)(fixedLeftGroups, leftShadowClassName, showLeftShadow);
      (0, _utils$1.toggleClass)(fixedRightGroups, rightShadowClassName, showRightShadow);
    }
  }, {
    key: 'shouldRenderExpandedRow',
    value: function shouldRenderExpandedRow(rowData) {
      var _props4 = this.props,
          rowKey = _props4.rowKey,
          renderRowExpanded = _props4.renderRowExpanded,
          isTree = _props4.isTree;
      var expandedRowKeys = this.getExpandedRowKeys() || [];
      return (0, _isFunction3.default)(renderRowExpanded) && !isTree && expandedRowKeys.some(function (key) {
        return key === rowData[rowKey];
      });
    }
  }, {
    key: 'calculateRowMaxHeight',
    value: function calculateRowMaxHeight() {
      var wordWrap = this.props.wordWrap;

      if (wordWrap) {
        var _tableRowsMaxHeight = [];
        var tableRows = Object.entries(this.tableRows);

        for (var i = 0; i < tableRows.length; i++) {
          var _tableRows$i = _slicedToArray$1(tableRows[i], 2),
              row = _tableRows$i[1];

          if (row) {
            var cells = row.querySelectorAll('.' + this.addPrefix('cell-wrap')) || [];
            var maxHeight = 0;
            var cellArray = Array.from(cells);

            for (var j = 0; j < cellArray.length; j++) {
              var cell = cellArray[j];
              var h = (0, _domLib.getHeight)(cell);
              maxHeight = Math.max(maxHeight, h);
            }

            _tableRowsMaxHeight.push(maxHeight);
          }
        }

        this.setState({
          tableRowsMaxHeight: _tableRowsMaxHeight
        });
      }
    }
  }, {
    key: 'calculateTableContentWidth',
    value: function calculateTableContentWidth(prevProps) {
      var table = this.table;
      var row = table.querySelector('.' + this.addPrefix('row') + ':not(.virtualized)');
      var contentWidth = row ? (0, _domLib.getWidth)(row) : 0;
      this.setState({
        contentWidth: contentWidth
      }); // 这里 -10 是为了让滚动条不挡住内容部分

      this.minScrollX = -(contentWidth - this.state.width) - SCROLLBAR_WIDHT;
      /**
       * 1.判断 Table 列数是否发生变化
       * 2.判断 Table 内容区域是否宽度有变化
       *
       *
       * 满足 1 和 2 则更新横向滚动条位置
       */

      if ((0, _flatten3.default)(this.props.children).length !== (0, _flatten3.default)(prevProps.children).length && this.state.contentWidth !== contentWidth) {
        this.scrollLeft(0);
      }
    }
  }, {
    key: 'calculateTableContextHeight',
    value: function calculateTableContextHeight() {
      var table = this.table;
      var rows = table.querySelectorAll('.' + this.addPrefix('row')) || [];
      var _props5 = this.props,
          height = _props5.height,
          autoHeight = _props5.autoHeight,
          rowHeight = _props5.rowHeight;
      var headerHeight = this.getTableHeaderHeight();
      var contentHeight = rows.length ? Array.from(rows).map(function (row) {
        return (0, _domLib.getHeight)(row) || rowHeight;
      }).reduce(function (x, y) {
        return x + y;
      }) : 0;
      var nextContentHeight = contentHeight - headerHeight;
      this.setState({
        contentHeight: nextContentHeight
      });

      if (!autoHeight) {
        // 这里 -10 是为了让滚动条不挡住内容部分
        this.minScrollY = -(contentHeight - height) - 10;
      } // 如果内容区域的高度小于表格的高度，则重置 Y 坐标滚动条


      if (contentHeight < height) {
        this.scrollTop(0);
      } // 如果 scrollTop 的值大于可以滚动的范围 ，则重置 Y 坐标滚动条
      // 当 Table 为 virtualized 时， wheel 事件触发每次都会进入该逻辑， 避免在滚动到底部后滚动条重置, +10


      if (Math.abs(this.scrollY) > contentHeight - height + 10) {
        this.scrollTop(0);
      }
    } // public method
    // public method

  }, {
    key: 'renderRowData',
    value: function renderRowData(bodyCells, rowData, props, shouldRenderExpandedRow) {
      var _props6 = this.props,
          renderTreeToggle = _props6.renderTreeToggle,
          rowKey = _props6.rowKey,
          wordWrap = _props6.wordWrap,
          isTree = _props6.isTree;
      var hasChildren = isTree && rowData.children && Array.isArray(rowData.children);
      var nextRowKey = typeof rowData[rowKey] !== 'undefined' ? rowData[rowKey] : getRandomKey(props.index);
      var rowProps = {
        rowRef: this.bindTableRowsRef(props.index),
        onClick: this.bindRowClick(rowData),
        key: props.index,
        width: props.rowWidth,
        height: props.rowHeight,
        top: props.top
      };
      var expandedRowKeys = this.getExpandedRowKeys() || [];
      var expanded = expandedRowKeys.some(function (key) {
        return key === rowData[rowKey];
      });
      var cells = [];

      for (var i = 0; i < bodyCells.length; i++) {
        var cell = bodyCells[i];
        cells.push(React.cloneElement(cell, {
          hasChildren: hasChildren,
          rowData: rowData,
          wordWrap: wordWrap,
          renderTreeToggle: renderTreeToggle,
          height: props.rowHeight,
          rowIndex: props.index,
          depth: props.depth,
          onTreeToggle: this.handleTreeToggle,
          rowKey: nextRowKey,
          className: (0, _classnames2.default)(_defineProperty$2({}, this.addPrefix('cell-expanded'), expanded))
        }));
      }

      return this.renderRow(rowProps, cells, shouldRenderExpandedRow, rowData);
    }
  }, {
    key: 'renderRow',
    value: function renderRow(props, cells, shouldRenderExpandedRow, rowData) {
      var rowClassName = this.props.rowClassName;
      var _state2 = this.state,
          shouldFixedColumn = _state2.shouldFixedColumn,
          width = _state2.width,
          contentWidth = _state2.contentWidth;

      if (typeof rowClassName === 'function') {
        props.className = rowClassName(rowData);
      } else {
        props.className = rowClassName;
      } // IF there are fixed columns, add a fixed group


      if (shouldFixedColumn && contentWidth > width) {
        var fixedLeftCells = [];
        var fixedRightCells = [];
        var scrollCells = [];
        var fixedLeftCellGroupWidth = 0;
        var fixedRightCellGroupWidth = 0;

        for (var i = 0; i < cells.length; i++) {
          var cell = cells[i];
          var _cell$props = cell.props,
              fixed = _cell$props.fixed,
              _width2 = _cell$props.width;

          if (fixed === true || fixed === 'left') {
            fixedLeftCells.push(cell);
            fixedLeftCellGroupWidth += _width2;
          } else if (fixed === 'right') {
            fixedRightCells.push(cell);
            fixedRightCellGroupWidth += _width2;
          } else {
            scrollCells.push(cell);
          }
        }

        return React.createElement(_Row2.default, props, fixedLeftCellGroupWidth ? React.createElement(_CellGroup2.default, {
          fixed: 'left',
          height: props.isHeaderRow ? props.headerHeight : props.height,
          width: fixedLeftCellGroupWidth
        }, (0, _utils$1.colSpanCells)(fixedLeftCells)) : null, React.createElement(_CellGroup2.default, null, (0, _utils$1.colSpanCells)(scrollCells)), fixedRightCellGroupWidth ? React.createElement(_CellGroup2.default, {
          fixed: 'right',
          style: {
            left: width - fixedRightCellGroupWidth - SCROLLBAR_WIDHT
          },
          height: props.isHeaderRow ? props.headerHeight : props.height,
          width: fixedRightCellGroupWidth
        }, (0, _utils$1.colSpanCells)(resetLeftForCells(fixedRightCells))) : null, shouldRenderExpandedRow && this.renderRowExpanded(rowData));
      }

      return React.createElement(_Row2.default, props, React.createElement(_CellGroup2.default, null, (0, _utils$1.colSpanCells)(cells)), shouldRenderExpandedRow && this.renderRowExpanded(rowData));
    }
  }, {
    key: 'renderRowExpanded',
    value: function renderRowExpanded(rowData) {
      var _props7 = this.props,
          renderRowExpanded = _props7.renderRowExpanded,
          rowExpandedHeight = _props7.rowExpandedHeight;
      var styles = {
        height: rowExpandedHeight
      };

      if (typeof renderRowExpanded === 'function') {
        return React.createElement('div', {
          className: this.addPrefix('row-expanded'),
          style: styles
        }, renderRowExpanded(rowData));
      }

      return null;
    }
  }, {
    key: 'renderMouseArea',
    value: function renderMouseArea() {
      var headerHeight = this.getTableHeaderHeight();
      var styles = {
        height: this.getTableHeight()
      };
      var spanStyles = {
        height: headerHeight - 1
      };
      return React.createElement('div', {
        ref: this.bindMouseAreaRef,
        className: this.addPrefix('mouse-area'),
        style: styles
      }, React.createElement('span', {
        style: spanStyles
      }));
    }
  }, {
    key: 'renderTableHeader',
    value: function renderTableHeader(headerCells, rowWidth) {
      var rowHeight = this.props.rowHeight;
      var headerHeight = this.getTableHeaderHeight();
      var rowProps = {
        rowRef: this.bindTableHeaderRef,
        width: rowWidth,
        height: rowHeight,
        headerHeight: headerHeight,
        isHeaderRow: true,
        top: 0
      };
      return React.createElement('div', {
        className: this.addPrefix('header-row-wrapper'),
        ref: this.bindHeaderWrapperRef
      }, this.renderRow(rowProps, headerCells));
    }
  }, {
    key: 'renderTableBody',
    value: function renderTableBody(bodyCells, rowWidth) {
      var _props8 = this.props,
          rowHeight = _props8.rowHeight,
          rowExpandedHeight = _props8.rowExpandedHeight,
          isTree = _props8.isTree,
          setRowHeight = _props8.setRowHeight,
          rowKey = _props8.rowKey,
          wordWrap = _props8.wordWrap,
          virtualized = _props8.virtualized;
      var headerHeight = this.getTableHeaderHeight();
      var _state3 = this.state,
          tableRowsMaxHeight = _state3.tableRowsMaxHeight,
          isScrolling = _state3.isScrolling,
          data = _state3.data;
      var height = this.getTableHeight();
      var bodyStyles = {
        top: headerHeight,
        height: height - headerHeight
      };
      var top = 0; // Row position

      var bodyHeight = 0;
      var topHideHeight = 0;
      var bottomHideHeight = 0;
      this._rows = [];

      if (data) {
        var minTop = Math.abs(this.state.scrollY);
        var maxTop = minTop + height + rowExpandedHeight;

        for (var index = 0; index < data.length; index++) {
          var _rowData = data[index];
          var maxHeight = tableRowsMaxHeight[index];
          var nextRowHeight = maxHeight ? maxHeight + CELL_PADDING_HEIGHT : rowHeight;
          var shouldRenderExpandedRow = this.shouldRenderExpandedRow(_rowData);
          var depth = 0;

          if (shouldRenderExpandedRow) {
            nextRowHeight += rowExpandedHeight;
          }

          if (isTree) {
            var parents = findAllParents(_rowData, rowKey);

            var _expandedRowKeys = this.getExpandedRowKeys();

            depth = parents.length; // 树节点如果被关闭，则不渲染

            if (!shouldShowRowByExpanded(_expandedRowKeys, parents)) {
              continue;
            }
          }
          /**
           * 自定义行高
           */


          if (setRowHeight) {
            nextRowHeight = setRowHeight(_rowData) || rowHeight;
          }

          bodyHeight += nextRowHeight;
          var rowProps = {
            index: index,
            top: top,
            rowWidth: rowWidth,
            depth: depth,
            rowHeight: nextRowHeight
          };
          top += nextRowHeight;

          if (virtualized && !wordWrap) {
            if (top + nextRowHeight < minTop) {
              topHideHeight += nextRowHeight;
              continue;
            } else if (top > maxTop) {
              bottomHideHeight += nextRowHeight;
              continue;
            }
          }

          this._rows.push(this.renderRowData(bodyCells, _rowData, rowProps, shouldRenderExpandedRow));
        }
      }

      var wheelStyles = {
        position: 'absolute',
        height: bodyHeight,
        minHeight: height,
        pointerEvents: isScrolling ? 'none' : ''
      };
      var topRowStyles = {
        height: topHideHeight
      };
      var bottomRowStyles = {
        height: bottomHideHeight
      };
      return React.createElement('div', {
        ref: this.bindBodyRef,
        className: this.addPrefix('body-row-wrapper'),
        style: bodyStyles,
        onScroll: this.handleBodyScroll
      }, React.createElement('div', {
        style: wheelStyles,
        className: this.addPrefix('body-wheel-area'),
        ref: this.bindWheelWrapperRef
      }, topHideHeight ? React.createElement(_Row2.default, {
        style: topRowStyles,
        className: 'virtualized'
      }) : null, this._rows, bottomHideHeight ? React.createElement(_Row2.default, {
        style: bottomRowStyles,
        className: 'virtualized'
      }) : null), this.renderInfo(), this.renderScrollbar(), this.renderLoading());
    }
  }, {
    key: 'renderInfo',
    value: function renderInfo() {
      if (this._rows.length) {
        return null;
      }

      var _props9 = this.props,
          locale = _props9.locale,
          renderEmpty = _props9.renderEmpty;
      var emptyMessage = React.createElement('div', {
        className: this.addPrefix('body-info')
      }, locale.emptyMessage);
      return renderEmpty ? renderEmpty(emptyMessage) : emptyMessage;
    }
  }, {
    key: 'renderScrollbar',
    value: function renderScrollbar() {
      var disabledScroll = this.props.disabledScroll;
      var _state4 = this.state,
          contentWidth = _state4.contentWidth,
          contentHeight = _state4.contentHeight;
      var headerHeight = this.getTableHeaderHeight();
      var height = this.getTableHeight();

      if (disabledScroll) {
        return null;
      }

      return React.createElement('div', null, React.createElement(_Scrollbar2.default, {
        length: this.state.width,
        onScroll: this.handleScrollX,
        scrollLength: contentWidth,
        ref: this.bindScrollbarXRef
      }), React.createElement(_Scrollbar2.default, {
        vertical: true,
        length: height - headerHeight,
        scrollLength: contentHeight,
        onScroll: this.handleScrollY,
        ref: this.bindScrollbarYRef
      }));
    }
    /**
     *  show loading
     */

  }, {
    key: 'renderLoading',
    value: function renderLoading() {
      var _props10 = this.props,
          locale = _props10.locale,
          loading = _props10.loading,
          loadAnimation = _props10.loadAnimation,
          renderLoading = _props10.renderLoading;

      if (!loadAnimation && !loading) {
        return null;
      }

      var loadingElement = React.createElement('div', {
        className: this.addPrefix('loader-wrapper')
      }, React.createElement('div', {
        className: this.addPrefix('loader')
      }, React.createElement('i', {
        className: this.addPrefix('loader-icon')
      }), React.createElement('span', {
        className: this.addPrefix('loader-text')
      }, locale.loading)));
      return renderLoading ? renderLoading(loadingElement) : loadingElement;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames2;

      var _props11 = this.props,
          children = _props11.children,
          className = _props11.className,
          _props11$width = _props11.width,
          width = _props11$width === undefined ? 0 : _props11$width,
          style = _props11.style,
          isTree = _props11.isTree,
          hover = _props11.hover,
          bordered = _props11.bordered,
          cellBordered = _props11.cellBordered,
          wordWrap = _props11.wordWrap,
          classPrefix = _props11.classPrefix,
          loading = _props11.loading,
          showHeader = _props11.showHeader,
          rest = _objectWithoutProperties$2(_props11, ['children', 'className', 'width', 'style', 'isTree', 'hover', 'bordered', 'cellBordered', 'wordWrap', 'classPrefix', 'loading', 'showHeader']);

      var isColumnResizing = this.state.isColumnResizing;

      var _getCells = this.getCells(),
          headerCells = _getCells.headerCells,
          bodyCells = _getCells.bodyCells,
          allColumnsWidth = _getCells.allColumnsWidth;

      var rowWidth = allColumnsWidth > width ? allColumnsWidth : width;
      var clesses = (0, _classnames2.default)(classPrefix, className, (_classNames2 = {}, _defineProperty$2(_classNames2, this.addPrefix('word-wrap'), wordWrap), _defineProperty$2(_classNames2, this.addPrefix('treetable'), isTree), _defineProperty$2(_classNames2, this.addPrefix('bordered'), bordered), _defineProperty$2(_classNames2, this.addPrefix('cell-bordered'), cellBordered), _defineProperty$2(_classNames2, this.addPrefix('column-resizing'), isColumnResizing), _defineProperty$2(_classNames2, this.addPrefix('hover'), hover), _defineProperty$2(_classNames2, this.addPrefix('loading'), loading), _classNames2));

      var styles = _extends$6({
        width: width || 'auto',
        height: this.getTableHeight()
      }, style);

      var unhandled = (0, _utils$1.getUnhandledProps)(Table, rest);
      return React.createElement('div', _extends$6({}, unhandled, {
        className: clesses,
        style: styles,
        ref: this.bindTableRef
      }), showHeader && this.renderTableHeader(headerCells, rowWidth), children && this.renderTableBody(bodyCells, rowWidth), showHeader && this.renderMouseArea());
    }
  }]);

  return Table;
}(React.Component);

Table.defaultProps = {
  classPrefix: (0, _utils$1.defaultClassPrefix)('table'),
  data: [],
  defaultSortType: SORT_TYPE.DESC,
  height: 200,
  rowHeight: 46,
  headerHeight: 40,
  minHeight: 0,
  rowExpandedHeight: 100,
  hover: true,
  showHeader: true,
  virtualized: false,
  rowKey: 'key',
  locale: {
    emptyMessage: 'No data found',
    loading: 'Loading...'
  }
};
Table.handledProps = ['autoHeight', 'bodyRef', 'bordered', 'cellBordered', 'children', 'className', 'classPrefix', 'data', 'defaultExpandAllRows', 'defaultExpandedRowKeys', 'defaultSortType', 'disabledScroll', 'expandedRowKeys', 'headerHeight', 'height', 'hover', 'isTree', 'loadAnimation', 'loading', 'locale', 'minHeight', 'onExpandChange', 'onRowClick', 'onScroll', 'onSortColumn', 'onTouchMove', 'onTouchStart', 'renderEmpty', 'renderLoading', 'renderRowExpanded', 'renderTreeToggle', 'rowClassName', 'rowExpandedHeight', 'rowHeight', 'rowKey', 'setRowHeight', 'showHeader', 'sortColumn', 'sortType', 'style', 'virtualized', 'width', 'wordWrap'];
Table.propTypes = {
  width: _propTypes2$2.default.number,
  data: _propTypes2$2.default.arrayOf(_propTypes2$2.default.object).isRequired,
  height: _propTypes2$2.default.number.isRequired,
  autoHeight: _propTypes2$2.default.bool,
  minHeight: _propTypes2$2.default.number.isRequired,
  rowHeight: _propTypes2$2.default.number.isRequired,
  headerHeight: _propTypes2$2.default.number.isRequired,
  setRowHeight: _propTypes2$2.default.func,
  rowKey: _propTypes2$2.default.oneOfType([_propTypes2$2.default.string, _propTypes2$2.default.number]).isRequired,
  isTree: _propTypes2$2.default.bool,
  defaultExpandAllRows: _propTypes2$2.default.bool,
  defaultExpandedRowKeys: _propTypes2$2.default.arrayOf(_propTypes2$2.default.oneOfType([_propTypes2$2.default.string, _propTypes2$2.default.number])),
  expandedRowKeys: _propTypes2$2.default.arrayOf(_propTypes2$2.default.oneOfType([_propTypes2$2.default.string, _propTypes2$2.default.number])),
  renderTreeToggle: _propTypes2$2.default.func,
  renderRowExpanded: _propTypes2$2.default.func,
  rowExpandedHeight: _propTypes2$2.default.number,
  locale: _propTypes2$2.default.object.isRequired,
  style: _propTypes2$2.default.object,
  sortColumn: _propTypes2$2.default.string,
  sortType: _propTypes2$2.default.oneOf(['desc', 'asc']),
  defaultSortType: _propTypes2$2.default.oneOf(['desc', 'asc']),
  disabledScroll: _propTypes2$2.default.bool,
  hover: _propTypes2$2.default.bool.isRequired,
  loading: _propTypes2$2.default.bool,
  className: _propTypes2$2.default.string,
  classPrefix: _propTypes2$2.default.string,
  children: function children() {
    return (typeof (React.ChildrenArray == null ? {} : React.ChildrenArray) === 'function' ? _propTypes2$2.default.instanceOf(React.ChildrenArray == null ? {} : React.ChildrenArray).isRequired : _propTypes2$2.default.any.isRequired).apply(this, arguments);
  },
  bordered: _propTypes2$2.default.bool,
  cellBordered: _propTypes2$2.default.bool,
  wordWrap: _propTypes2$2.default.bool,
  onRowClick: _propTypes2$2.default.func,
  onScroll: _propTypes2$2.default.func,
  onSortColumn: _propTypes2$2.default.func,
  onExpandChange: _propTypes2$2.default.func,
  onTouchStart: _propTypes2$2.default.func,
  // for tests
  onTouchMove: _propTypes2$2.default.func,
  // for tests
  bodyRef: function bodyRef() {
    return (typeof (React.ElementRef == null ? {} : React.ElementRef) === 'function' ? _propTypes2$2.default.instanceOf(React.ElementRef == null ? {} : React.ElementRef) : _propTypes2$2.default.any).apply(this, arguments);
  },
  loadAnimation: _propTypes2$2.default.bool,
  showHeader: _propTypes2$2.default.bool,
  rowClassName: _propTypes2$2.default.oneOfType([_propTypes2$2.default.string, _propTypes2$2.default.func]),
  virtualized: _propTypes2$2.default.bool,
  renderEmpty: _propTypes2$2.default.func,
  renderLoading: _propTypes2$2.default.func
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this._listenWheel = function (deltaX, deltaY) {
    _this3.handleWheel(deltaX, deltaY);

    if (_this3.scrollbarX) {
      _this3.scrollbarX.onWheelScroll(deltaX);
    }

    if (_this3.scrollbarY) {
      _this3.scrollbarY.onWheelScroll(deltaY);
    }
  };

  this.handleSortColumn = function (dataKey) {
    var _props12 = _this3.props,
        onSortColumn = _props12.onSortColumn,
        sortColumn = _props12.sortColumn;

    var sortType = _this3.getSortType();

    if (sortColumn === dataKey) {
      sortType = sortType === SORT_TYPE.ASC ? SORT_TYPE.DESC : SORT_TYPE.ASC;

      _this3.setState({
        sortType: sortType
      });
    }

    onSortColumn && onSortColumn(dataKey, sortType);
  };

  this._cacheCells = null;
  this._cacheChildrenSize = 0;

  this.handleColumnResizeEnd = function (columnWidth, cursorDelta, dataKey, index) {
    _this3._cacheCells = null;

    _this3.setState(_defineProperty$2({
      isColumnResizing: false
    }, dataKey + '_' + index + '_width', columnWidth));

    (0, _domLib.addStyle)(_this3.mouseArea, {
      display: 'none'
    });
  };

  this.handleColumnResizeStart = function (width, left, fixed) {
    _this3.setState({
      isColumnResizing: true
    });

    var mouseAreaLeft = width + left;
    var x = fixed ? mouseAreaLeft : mouseAreaLeft + (_this3.scrollX || 0);
    var styles = {
      display: 'block'
    };
    (0, _domLib.translateDOMPositionXY)(styles, x, 0);
    (0, _domLib.addStyle)(_this3.mouseArea, styles);
  };

  this.handleColumnResizeMove = function (width, left, fixed) {
    var mouseAreaLeft = width + left;
    var x = fixed ? mouseAreaLeft : mouseAreaLeft + (_this3.scrollX || 0);
    var styles = {};
    (0, _domLib.translateDOMPositionXY)(styles, x, 0);
    (0, _domLib.addStyle)(_this3.mouseArea, styles);
  };

  this.handleTreeToggle = function (rowKey, rowIndex, rowData) {
    var onExpandChange = _this3.props.onExpandChange;
    var expandedRowKeys = _this3.state.expandedRowKeys;
    var open = false;
    var nextExpandedRowKeys = [];

    for (var i = 0; i < expandedRowKeys.length; i++) {
      var key = expandedRowKeys[i];

      if (key === rowKey) {
        open = true;
      } else {
        nextExpandedRowKeys.push(key);
      }
    }

    if (!open) {
      nextExpandedRowKeys.push(rowKey);
    }

    _this3.setState({
      expandedRowKeys: nextExpandedRowKeys
    });

    onExpandChange && onExpandChange(!open, rowData);
  };

  this.handleScrollX = function (delta) {
    _this3.handleWheel(delta, 0);
  };

  this.handleScrollY = function (delta) {
    _this3.handleWheel(0, delta);
  };

  this.disableEventsTimeoutId = null;

  this.handleWheel = function (deltaX, deltaY) {
    var _props13 = _this3.props,
        onScroll = _props13.onScroll,
        virtualized = _props13.virtualized;

    if (!_this3.table) {
      return;
    }

    var nextScrollX = _this3.scrollX - deltaX;
    var nextScrollY = _this3.scrollY - deltaY;
    _this3.scrollY = Math.min(0, nextScrollY < _this3.minScrollY ? _this3.minScrollY : nextScrollY);
    _this3.scrollX = Math.min(0, nextScrollX < _this3.minScrollX ? _this3.minScrollX : nextScrollX);

    _this3.updatePosition();

    onScroll && onScroll(_this3.scrollX, _this3.scrollY);

    if (virtualized) {
      _this3.setState({
        isScrolling: true,
        scrollY: _this3.scrollY
      });

      if (_this3.disableEventsTimeoutId) {
        (0, _utils$1.cancelAnimationTimeout)(_this3.disableEventsTimeoutId);
      }

      _this3.disableEventsTimeoutId = (0, _utils$1.requestAnimationTimeout)(_this3.debounceScrollEndedCallback, 150);
    }
  };

  this.debounceScrollEndedCallback = function () {
    _this3.disableEventsTimeoutId = null;

    _this3.setState({
      isScrolling: false
    });
  };

  this.handleTouchStart = function (event) {
    var onTouchStart = _this3.props.onTouchStart;

    var _ref = event.touches ? event.touches[0] : {},
        pageX = _ref.pageX,
        pageY = _ref.pageY;

    _this3.touchX = pageX;
    _this3.touchY = pageY;
    onTouchStart && onTouchStart(event);
  };

  this.handleTouchMove = function (event) {
    event.stopPropagation();
    event.preventDefault();
    var onTouchMove = _this3.props.onTouchMove;

    var _ref2 = event.touches ? event.touches[0] : {},
        nextPageX = _ref2.pageX,
        nextPageY = _ref2.pageY;

    var deltaX = _this3.touchX - nextPageX;
    var deltaY = _this3.touchY - nextPageY;

    _this3.handleWheel(deltaX, deltaY);

    _this3.scrollbarX.onWheelScroll(deltaX);

    _this3.scrollbarY.onWheelScroll(deltaY);

    _this3.touchX = nextPageX;
    _this3.touchY = nextPageY;
    onTouchMove && onTouchMove(event);
  };

  this.handleBodyScroll = function (event) {
    if (event.target !== _this3.tableBody) {
      return;
    }

    var left = (0, _domLib.scrollLeft)(event.target);
    var top = (0, _domLib.scrollTop)(event.target);

    if (top === 0 && left === 0) {
      return;
    }

    _this3._listenWheel(left, top);

    (0, _domLib.scrollLeft)(event.target, 0);
    (0, _domLib.scrollTop)(event.target, 0);
  };

  this.shouldHandleWheelX = function (delta) {
    var _props14 = _this3.props,
        disabledScroll = _props14.disabledScroll,
        loading = _props14.loading;
    var _state5 = _this3.state,
        contentWidth = _state5.contentWidth,
        width = _state5.width;

    if (delta === 0 || disabledScroll || loading) {
      return false;
    }

    if (width && contentWidth <= width) {
      return false;
    }

    return delta >= 0 && _this3.scrollX > _this3.minScrollX || delta < 0 && _this3.scrollX < 0;
  };

  this.shouldHandleWheelY = function (delta) {
    var _props15 = _this3.props,
        disabledScroll = _props15.disabledScroll,
        loading = _props15.loading;

    if (delta === 0 || disabledScroll || loading) {
      return false;
    }

    return delta >= 0 && _this3.scrollY > _this3.minScrollY || delta < 0 && _this3.scrollY < 0;
  };

  this.tableRows = {};
  this.mounted = false;
  this.scrollY = 0;
  this.scrollX = 0;

  this.addPrefix = function (name) {
    return (0, _utils$1.prefix)(_this3.props.classPrefix)(name);
  };

  this.calculateTableWidth = function () {
    var table = _this3.table;

    if (table) {
      _this3.scrollX = 0;
      _this3.scrollbarX && _this3.scrollbarX.resetScrollBarPosition();
      _this3._cacheCells = null;

      _this3.setState({
        width: (0, _domLib.getWidth)(table)
      });
    }
  };

  this.scrollTop = function () {
    var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    _this3.scrollY = -top;
    _this3.scrollbarY && _this3.scrollbarY.resetScrollBarPosition(top);

    _this3.setState({
      scrollY: -top
    });
  };

  this.scrollLeft = function () {
    var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    _this3.scrollX = -left;
    _this3.scrollbarX && _this3.scrollbarX.resetScrollBarPosition(left);

    _this3.updatePosition();
  };

  this.bindTableRowsRef = function (index) {
    return function (ref) {
      if (ref) {
        _this3.tableRows[index] = ref;
      }
    };
  };

  this.bindMouseAreaRef = function (ref) {
    _this3.mouseArea = ref;
  };

  this.bindTableHeaderRef = function (ref) {
    _this3.tableHeader = ref;
  };

  this.bindHeaderWrapperRef = function (ref) {
    _this3.headerWrapper = ref;
  };

  this.bindTableRef = function (ref) {
    _this3.table = ref;
  };

  this.bindWheelWrapperRef = function (ref) {
    var bodyRef = _this3.props.bodyRef;
    _this3.wheelWrapper = ref;
    bodyRef && bodyRef(ref);
  };

  this.bindBodyRef = function (ref) {
    _this3.tableBody = ref;
  };

  this.bindScrollbarXRef = function (ref) {
    _this3.scrollbarX = ref;
  };

  this.bindScrollbarYRef = function (ref) {
    _this3.scrollbarY = ref;
  };

  this.bindRowClick = function (rowData) {
    var onRowClick = _this3.props.onRowClick;
    return function () {
      onRowClick && onRowClick(rowData);
    };
  };

  this._rows = [];
};

exports.default = Table;

var Table$1 = /*#__PURE__*/Object.freeze({

});

var Column_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable */

function Column(props) {
  return null;
}

Column.defaultProps = {
  width: 100
};
exports.default = Column;
});

unwrapExports(Column_1);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2$1 = require('lodash/get');

var _get3 = _interopRequireDefault$5(_get2$1);

var _extends$7 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass$4 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react$4 = require('react');

var React$1 = _interopRequireWildcard$2(_react$4);

var _classnames$1 = require('classnames');

var _classnames2$1 = _interopRequireDefault$5(_classnames$1);

var _constants = require('./constants');

var _utils$2 = require('./utils');

var _propTypes$3 = require('prop-types');

var _propTypes2$3 = _interopRequireDefault$5(_propTypes$3);

function _interopRequireWildcard$2(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault$5(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _defineProperty$3(obj, key, value) {
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

function _objectWithoutProperties$3(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function _classCallCheck$4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$4(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits$4(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Cell = function (_React$PureComponent) {
  _inherits$4(Cell, _React$PureComponent);

  function Cell() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$4(this, Cell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$4(this, (_ref = Cell.__proto__ || Object.getPrototypeOf(Cell)).call.apply(_ref, [this].concat(args))), _this), _this.addPrefix = function (name) {
      return (0, _utils$2.prefix)(_this.props.classPrefix)(name);
    }, _this.handleExpandClick = function (event) {
      var _this$props = _this.props,
          onTreeToggle = _this$props.onTreeToggle,
          rowKey = _this$props.rowKey,
          rowIndex = _this$props.rowIndex,
          rowData = _this$props.rowData;
      onTreeToggle && onTreeToggle(rowKey, rowIndex, rowData, event);
    }, _temp), _possibleConstructorReturn$4(_this, _ret);
  }

  _createClass$4(Cell, [{
    key: 'renderExpandIcon',
    value: function renderExpandIcon() {
      var _props = this.props,
          hasChildren = _props.hasChildren,
          firstColumn = _props.firstColumn,
          rowData = _props.rowData,
          renderTreeToggle = _props.renderTreeToggle;
      var expandButton = React$1.createElement('i', {
        className: this.addPrefix('expand-icon')
      });
      /**
       * 如果用子节点，同时是第一列,则创建一个 icon 用于展开节点
       */

      if (hasChildren && firstColumn) {
        return React$1.createElement('span', {
          role: 'button',
          tabIndex: -1,
          className: this.addPrefix('expand-wrapper'),
          onClick: this.handleExpandClick
        }, renderTreeToggle ? renderTreeToggle(expandButton, rowData) : expandButton);
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props2 = this.props,
          width = _props2.width,
          left = _props2.left,
          height = _props2.height,
          style = _props2.style,
          className = _props2.className,
          firstColumn = _props2.firstColumn,
          lastColumn = _props2.lastColumn,
          isHeaderCell = _props2.isHeaderCell,
          headerHeight = _props2.headerHeight,
          align = _props2.align,
          children = _props2.children,
          rowData = _props2.rowData,
          dataKey = _props2.dataKey,
          renderCell = _props2.renderCell,
          removed = _props2.removed,
          wordWrap = _props2.wordWrap,
          classPrefix = _props2.classPrefix,
          depth = _props2.depth,
          verticalAlign = _props2.verticalAlign,
          rest = _objectWithoutProperties$3(_props2, ['width', 'left', 'height', 'style', 'className', 'firstColumn', 'lastColumn', 'isHeaderCell', 'headerHeight', 'align', 'children', 'rowData', 'dataKey', 'renderCell', 'removed', 'wordWrap', 'classPrefix', 'depth', 'verticalAlign']);

      if (removed) {
        return null;
      }

      var classes = (0, _classnames2$1.default)(classPrefix, className, (_classNames = {}, _defineProperty$3(_classNames, this.addPrefix('first'), firstColumn), _defineProperty$3(_classNames, this.addPrefix('last'), lastColumn), _classNames));
      var nextHeight = isHeaderCell ? headerHeight : height;
      var styles = {
        width: width,
        height: nextHeight,
        zIndex: depth,
        left: left
      };

      var contentStyles = _extends$7({
        width: width,
        height: nextHeight,
        textAlign: align,
        paddingLeft: firstColumn ? depth * _constants.LAYER_WIDTH + 10 : null
      }, style);

      if (verticalAlign) {
        contentStyles.display = 'table-cell';
        contentStyles.verticalAlign = verticalAlign;
      }

      var contentChildren = (0, _utils$2.isNullOrUndefined)(children) && rowData ? (0, _get3.default)(rowData, dataKey) : children;

      if (typeof children === 'function') {
        contentChildren = children(rowData);
      }

      var unhandled = (0, _utils$2.getUnhandledProps)(Cell, rest, ['index', 'fixed', 'resizable', 'flexGrow', 'minWidth', 'sortColumn', 'sortType', 'onSortColumn', 'onColumnResizeEnd', 'onColumnResizeStart', 'onColumnResizeMove', 'colSpan']);
      return React$1.createElement('div', _extends$7({}, unhandled, {
        className: classes,
        style: styles
      }), wordWrap ? React$1.createElement('div', {
        className: this.addPrefix('content'),
        style: contentStyles
      }, React$1.createElement('div', {
        className: this.addPrefix('wrap')
      }, this.renderExpandIcon(), renderCell ? renderCell(contentChildren) : contentChildren)) : React$1.createElement('div', {
        className: this.addPrefix('content'),
        style: contentStyles
      }, this.renderExpandIcon(), renderCell ? renderCell(contentChildren) : contentChildren));
    }
  }]);

  return Cell;
}(React$1.PureComponent);

Cell.defaultProps = {
  classPrefix: (0, _utils$2.defaultClassPrefix)('table-cell'),
  align: 'left',
  headerHeight: 36,
  depth: 0,
  height: 36,
  width: 0,
  left: 0
};
Cell.handledProps = ['align', 'children', 'className', 'classPrefix', 'dataKey', 'depth', 'firstColumn', 'hasChildren', 'headerHeight', 'height', 'isHeaderCell', 'lastColumn', 'left', 'onTreeToggle', 'removed', 'renderCell', 'renderTreeToggle', 'rowData', 'rowIndex', 'rowKey', 'style', 'verticalAlign', 'width', 'wordWrap'];
Cell.propTypes = {
  align: _propTypes2$3.default.oneOf(['left', 'center', 'right']),
  verticalAlign: _propTypes2$3.default.oneOf(['top', 'middle', 'bottom']),
  className: _propTypes2$3.default.string,
  classPrefix: _propTypes2$3.default.string,
  dataKey: _propTypes2$3.default.string,
  isHeaderCell: _propTypes2$3.default.bool,
  width: _propTypes2$3.default.number.isRequired,
  height: _propTypes2$3.default.number,
  left: _propTypes2$3.default.number,
  headerHeight: _propTypes2$3.default.number,
  style: _propTypes2$3.default.object,
  firstColumn: _propTypes2$3.default.bool,
  lastColumn: _propTypes2$3.default.bool,
  hasChildren: _propTypes2$3.default.bool,
  children: _propTypes2$3.default.oneOfType([_propTypes2$3.default.node, _propTypes2$3.default.func]),
  rowKey: _propTypes2$3.default.oneOfType([_propTypes2$3.default.string, _propTypes2$3.default.number]),
  rowIndex: _propTypes2$3.default.number,
  rowData: _propTypes2$3.default.object,
  depth: _propTypes2$3.default.number.isRequired,
  onTreeToggle: _propTypes2$3.default.func,
  renderTreeToggle: _propTypes2$3.default.func,
  renderCell: _propTypes2$3.default.func,
  wordWrap: _propTypes2$3.default.bool,
  removed: _propTypes2$3.default.bool
};
exports.default = Cell;

var Cell$1 = /*#__PURE__*/Object.freeze({

});

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends$8 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass$5 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react$5 = require('react');

var React$2 = _interopRequireWildcard$3(_react$5);

var _classnames$2 = require('classnames');

var _classnames2$2 = _interopRequireDefault$6(_classnames$2);

var _reactLifecyclesCompat$1 = require('react-lifecycles-compat');

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault$6(_Cell);

var _ColumnResizeHandler = require('./ColumnResizeHandler');

var _ColumnResizeHandler2 = _interopRequireDefault$6(_ColumnResizeHandler);

var _utils$3 = require('./utils');

var _propTypes$4 = require('prop-types');

var _propTypes2$4 = _interopRequireDefault$6(_propTypes$4);

function _interopRequireDefault$6(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard$3(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _objectWithoutProperties$4(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function _defineProperty$4(obj, key, value) {
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

function _classCallCheck$5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$5(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits$5(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var HeaderCell = function (_React$PureComponent) {
  _inherits$5(HeaderCell, _React$PureComponent);

  _createClass$5(HeaderCell, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.width !== prevState.width || nextProps.flexGrow !== prevState.flexGrow) {
        return {
          width: nextProps.width,
          flexGrow: nextProps.flexGrow,
          columnWidth: (0, _utils$3.isNullOrUndefined)(nextProps.flexGrow) ? nextProps.width : 0
        };
      }

      return null;
    }
  }]);

  function HeaderCell(props) {
    _classCallCheck$5(this, HeaderCell);

    var _this = _possibleConstructorReturn$5(this, (HeaderCell.__proto__ || Object.getPrototypeOf(HeaderCell)).call(this, props));

    _this.handleColumnResizeStart = function (event) {
      var _this$props = _this.props,
          left = _this$props.left,
          fixed = _this$props.fixed,
          onColumnResizeStart = _this$props.onColumnResizeStart;

      _this.setState({
        initialEvent: event
      });

      onColumnResizeStart && onColumnResizeStart(_this.state.columnWidth, left, !!fixed);
    };

    _this.handleColumnResizeEnd = function (columnWidth, cursorDelta) {
      var _this$props2 = _this.props,
          dataKey = _this$props2.dataKey,
          index = _this$props2.index,
          onColumnResizeEnd = _this$props2.onColumnResizeEnd,
          onResize = _this$props2.onResize;

      _this.setState({
        columnWidth: columnWidth
      });

      onColumnResizeEnd && onColumnResizeEnd(columnWidth, cursorDelta, dataKey, index);
      onResize && onResize(columnWidth, dataKey);
    };

    _this.handleClick = function () {
      var _this$props3 = _this.props,
          sortable = _this$props3.sortable,
          dataKey = _this$props3.dataKey,
          onSortColumn = _this$props3.onSortColumn;

      if (sortable && onSortColumn) {
        onSortColumn(dataKey);
      }
    };

    _this.addPrefix = function (name) {
      return (0, _utils$3.prefix)(_this.props.classPrefix)(name);
    };

    _this.state = {
      width: props.width,
      flexGrow: props.flexGrow,
      columnWidth: (0, _utils$3.isNullOrUndefined)(props.flexGrow) ? props.width : 0
    };
    return _this;
  }

  _createClass$5(HeaderCell, [{
    key: 'renderResizeSpanner',
    value: function renderResizeSpanner() {
      var _props = this.props,
          resizable = _props.resizable,
          left = _props.left,
          onColumnResizeMove = _props.onColumnResizeMove,
          fixed = _props.fixed,
          headerHeight = _props.headerHeight;
      var _state = this.state,
          columnWidth = _state.columnWidth,
          initialEvent = _state.initialEvent;

      if (!resizable) {
        return null;
      }

      return React$2.createElement(_ColumnResizeHandler2.default, {
        columnWidth: columnWidth,
        columnLeft: left,
        columnFixed: !!fixed,
        height: headerHeight ? headerHeight - 1 : undefined,
        initialEvent: initialEvent,
        onColumnResizeMove: onColumnResizeMove,
        onColumnResizeStart: this.handleColumnResizeStart,
        onColumnResizeEnd: this.handleColumnResizeEnd
      });
    }
  }, {
    key: 'renderSortColumn',
    value: function renderSortColumn() {
      var _props2 = this.props,
          sortable = _props2.sortable,
          sortColumn = _props2.sortColumn,
          _props2$sortType = _props2.sortType,
          sortType = _props2$sortType === undefined ? '' : _props2$sortType,
          dataKey = _props2.dataKey;

      if (sortable) {
        var iconClasses = (0, _classnames2$2.default)(this.addPrefix('icon-sort'), _defineProperty$4({}, this.addPrefix('icon-sort-' + sortType), sortColumn === dataKey));
        return React$2.createElement('span', {
          className: this.addPrefix('sort-wrapper')
        }, React$2.createElement('i', {
          className: iconClasses
        }));
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          className = _props3.className,
          width = _props3.width,
          dataKey = _props3.dataKey,
          headerHeight = _props3.headerHeight,
          children = _props3.children,
          left = _props3.left,
          sortable = _props3.sortable,
          classPrefix = _props3.classPrefix,
          rest = _objectWithoutProperties$4(_props3, ['className', 'width', 'dataKey', 'headerHeight', 'children', 'left', 'sortable', 'classPrefix']);

      var classes = (0, _classnames2$2.default)(classPrefix, className, _defineProperty$4({}, this.addPrefix('sortable'), sortable));
      var unhandled = (0, _utils$3.getUnhandledProps)(HeaderCell, rest);
      return React$2.createElement('div', {
        className: classes
      }, React$2.createElement(_Cell2.default, _extends$8({}, unhandled, {
        width: width,
        dataKey: dataKey,
        left: left,
        headerHeight: headerHeight,
        isHeaderCell: true,
        onClick: this.handleClick
      }), children, this.renderSortColumn()), this.renderResizeSpanner());
    }
  }]);

  return HeaderCell;
}(React$2.PureComponent);

HeaderCell.defaultProps = {
  classPrefix: (0, _utils$3.defaultClassPrefix)('table-cell-header')
};
HeaderCell.handledProps = ['children', 'className', 'classPrefix', 'dataKey', 'fixed', 'flexGrow', 'headerHeight', 'index', 'left', 'onColumnResizeEnd', 'onColumnResizeMove', 'onColumnResizeStart', 'onResize', 'onSortColumn', 'resizable', 'sortColumn', 'sortType', 'sortable', 'width'];
HeaderCell.propTypes = {
  width: _propTypes2$4.default.number,
  dataKey: _propTypes2$4.default.string,
  left: _propTypes2$4.default.number,
  className: _propTypes2$4.default.string,
  classPrefix: _propTypes2$4.default.string,
  headerHeight: _propTypes2$4.default.number,
  children: _propTypes2$4.default.node,
  // self props
  index: _propTypes2$4.default.number,
  sortColumn: _propTypes2$4.default.string,
  sortType: _propTypes2$4.default.oneOf(['desc', 'asc']),
  sortable: _propTypes2$4.default.bool,
  resizable: _propTypes2$4.default.bool,
  onColumnResizeStart: _propTypes2$4.default.func,
  onColumnResizeEnd: _propTypes2$4.default.func,
  onResize: _propTypes2$4.default.func,
  onColumnResizeMove: _propTypes2$4.default.func,
  onSortColumn: _propTypes2$4.default.func,
  flexGrow: _propTypes2$4.default.number,
  fixed: _propTypes2$4.default.oneOfType([_propTypes2$4.default.bool, _propTypes2$4.default.oneOf(['left']), _propTypes2$4.default.oneOf(['right'])])
};
(0, _reactLifecyclesCompat$1.polyfill)(HeaderCell);
exports.default = HeaderCell;

var HeaderCell$1 = /*#__PURE__*/Object.freeze({

});

var lib$3 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderCell = exports.Cell = exports.Column = exports.Table = undefined;



var _Table2 = _interopRequireDefault(Table$1);



var _Column2 = _interopRequireDefault(Column_1);



var _Cell2 = _interopRequireDefault(Cell$1);



var _HeaderCell2 = _interopRequireDefault(HeaderCell$1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.Table = _Table2.default;
exports.Column = _Column2.default;
exports.Cell = _Cell2.default;
exports.HeaderCell = _HeaderCell2.default;
});

unwrapExports(lib$3);
var lib_1$1 = lib$3.HeaderCell;
var lib_2 = lib$3.Cell;
var lib_3 = lib$3.Column;
var lib_4 = lib$3.Table;

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  /* font-size: ", "; */\n"]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$n() {
  var data = _taggedTemplateLiteral(["\n  & .rs-table-cell-content {\n    display: flex;\n    align-items: center;\n    font-size: ", ";\n    padding-left: ", ";\n    /* Expand-collapse icon */\n    & > span {\n      padding: 0 4px;\n    }\n  }\n  &.rs-table {\n    border: none;\n  }\n  & .rs-table-cell-wrap {\n    flex: 1;\n  }\n  &.rs-table-hover .rs-table-body-row-wrapper {\n    .rs-table-row:hover {\n      background: ", ";\n    }\n\n    .rs-table-row:hover .rs-table-cell-group {\n      background: ", ";\n    }\n\n    .rs-table-row:hover .rs-table-cell {\n      background: ", ";\n    }\n  }\n"]);

  _templateObject$n = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTable = styled(lib_4)(_templateObject$n(), function (props) {
  return props.theme.fontSizes[1] + 'px';
}, function (props) {
  return props.theme.space[3] + 'px';
}, themeGet('colors.highlightss', '#fbfbfb'), themeGet('colors.highlightss', '#fbfbfb'), themeGet('colors.highlightss', '#fbfbfb'));
var StyledHeader = styled(lib_1$1)(_templateObject2$6(), themeGet('colors.lightGrey', '#f5f5f5'), function (props) {
  return props.theme.fontSizes[1];
});

var CustomHeaderCell = function CustomHeaderCell(props) {
  return React$3__default.createElement(StyledHeader, props);
};
/** Используется для отображения структурированной информации. */


var Table$2 = function Table(props) {
  return React$3__default.createElement(StyledTable, props);
};

Table$2.Column = lib_3;
Table$2.HeaderCell = CustomHeaderCell;
Table$2.Cell = lib_2;
Table$2.propTypes = {
  /** Данные для отображения в таблице. */
  data: PropTypes.array.isRequired,

  /** Высота хедера таблицы */
  headerHeight: PropTypes.number,

  /** Высота ряда */
  rowHeight: PropTypes.number,

  /** Режим "дерева" - таблица с вложенными данными */
  isTree: PropTypes.bool,

  /** В режиме дерева, функция-рендерер иконки "раскрыть-закрыть" ряд. Сигнатура: (icon: node, rowData: Object) => React.node */
  renderTreeToggle: PropTypes.func,

  /** Указатель на поле ключ. Должно быть уникальным. */
  rowKey: PropTypes.string,

  /** Виртуализация */
  virtualized: PropTypes.bool,

  /** Ширина таблицы */
  width: PropTypes.number,

  /** Высота таблицы */
  height: PropTypes.number,

  /** Минимальная высота таблицы */
  minHeight: PropTypes.number
};
Table$2.defaultProps = {
  headerHeight: 48,
  rowHeight: 48,
  rowKey: 'key',
  locale: {
    emptyMessage: 'Нет данных',
    loading: 'Загрузка...'
  }
};

function _templateObject$o() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  border-radius: ", ";\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject$o = function _templateObject() {
    return data;
  };

  return data;
}
var Counter = styled.div(_templateObject$o(), function (props) {
  return props.size * 3 + 'px';
}, function (props) {
  return props.size * 2 + 'px';
}, themeGet('colors.input.error', '#f5f5f5'), function (props) {
  return props.size + 'px';
});

function NotificationsCounter(_ref) {
  var color = _ref.color,
      count = _ref.count,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["color", "count", "size"]);

  return React$3__default.createElement(Counter, {
    size: size,
    color: color
  }, React$3__default.createElement(Text, {
    color: 'white',
    fontSize: '12px'
  }, count));
}

NotificationsCounter.propTypes = {
  count: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number
};
NotificationsCounter.defaultProps = {
  count: 30,
  size: 8,
  color: 'warning'
};

export { Absolute, Box, Button, Card, Checkbox, Collapse, ContentBox, Divider, Flex, FlexContainerBottomDivider, Form, Heading, Icon, Input, Modal$2 as Modal, NotificationsCounter, Overlay, Popover, Radio, RadioGroup, Relative, ResizableInput, Scrollbars$2 as Scrollbars, Select, Table$2 as Table, Tabs, Text, Textarea, Toggle };
//# sourceMappingURL=index.es.js.map
