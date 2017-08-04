webpackJsonpdetail([3],{

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isBrowser = __webpack_require__(166);

var _isBrowser2 = _interopRequireDefault(_isBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = {};

if ((0, _isBrowser2.default)()) {
  var jquery = __webpack_require__(195);

  var parseMarkup = function parseMarkup(str) {
    var context = jquery(str);

    return function (selector) {
      if (!selector) {
        return jquery(context);
      }

      return jquery(selector, context);
    };
  };

  dom.parseHTML = function (str) {
    var parser = new DOMParser();

    return parseMarkup(parser.parseFromString(str, 'text/html'));
  };

  dom.parseXML = function (str) {
    if (typeof str !== 'string') {
      str = str.outerHTML;
    }

    return parseMarkup(jquery.parseXML('<root>' + str + '</root>'));
  };

  dom.getAttributes = function (element) {
    var attributes = {};

    Array.prototype.slice.call(element.attributes).forEach(function (attribute) {
      return attributes[attribute.name] = attribute.value;
    });

    return attributes;
  };

  dom.getChildren = function (element) {
    return element.children;
  };

  dom.replaceContentByCdata = function (tag) {
    return '<' + tag + '$1><!--[CDATA[$2]]--></' + tag + '>';
  };

  dom.getHTML = function ($) {
    var markup = $()[0];

    return '<!doctype ' + markup.doctype.name + '>' + markup.documentElement.outerHTML;
  };
} else {
  var cheerio = __webpack_require__(588);

  var $ = cheerio.load('', { decodeEntities: false });

  var _parseMarkup = function _parseMarkup(str, options) {
    $ = $.load(str, options);

    return function (selector) {
      if (!selector) {
        return $;
      }

      return $(selector);
    };
  };

  dom.parseHTML = function (str) {
    return _parseMarkup(str, { xmlMode: false, decodeEntities: false });
  };

  dom.parseXML = function (str) {
    return _parseMarkup(str, { xmlMode: true, decodeEntities: false, withStartIndices: true });
  };

  dom.getAttributes = function (element) {
    return element.attribs || {};
  };

  dom.getChildren = function (element) {
    return element.childNodes;
  };

  dom.replaceContentByCdata = function (tag) {
    return '<' + tag + '$1><![CDATA[$2]]></' + tag + '>';
  };

  dom.getHTML = function ($) {
    return $().html();
  };
}

exports.default = dom;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatValidationError = exports.registerMJRule = exports.rulesCollection = undefined;

var _concat = __webpack_require__(159);

var _concat2 = _interopRequireDefault(_concat);

var _filter = __webpack_require__(98);

var _filter2 = _interopRequireDefault(_filter);

var _values = __webpack_require__(160);

var _values2 = _interopRequireDefault(_values);

var _ruleError = __webpack_require__(99);

var _ruleError2 = _interopRequireDefault(_ruleError);

var _MJMLRulesCollection = __webpack_require__(560);

var _MJMLRulesCollection2 = _interopRequireDefault(_MJMLRulesCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.rulesCollection = _MJMLRulesCollection2.default;
exports.registerMJRule = _MJMLRulesCollection.registerMJRule;
var formatValidationError = exports.formatValidationError = _ruleError2.default;

var validateNode = function validateNode(element) {
  var children = element.children;


  var errors = _concat2.default.apply(undefined, [errors].concat(_toConsumableArray((0, _values2.default)(_MJMLRulesCollection2.default).map(function (rule) {
    return rule(element);
  }))));

  if (children && children.length > 0) {
    errors = _concat2.default.apply(undefined, [errors].concat(_toConsumableArray(children.map(function (child) {
      return validateNode(child);
    }))));
  }

  return (0, _filter2.default)(errors);
};

exports.default = validateNode;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerMJHeadElement = exports.endingTags = undefined;

var _lodash = __webpack_require__(150);

var endingTags = exports.endingTags = [];
var registerMJHeadElement = exports.registerMJHeadElement = function registerMJHeadElement() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var name = void 0,
      endingTag = void 0,
      handler = void 0; // eslint-disable-line

  if (args.length > 1) {
    name = args[0];
    handler = args[1];
    endingTag = args[2];
  } else {
    var _args$ = args[0];
    name = _args$.name;
    handler = _args$.handler;
    endingTag = _args$.endingTag;
  }

  endingTag && !(0, _lodash.includes)(endingTags, name) && endingTags.push(name);

  MJMLHeadElementsCollection[name] = handler;
};

var MJMLHeadElementsCollection = {};

exports.default = MJMLHeadElementsCollection;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function () {
  return (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9 && !(window.process && window.process.type);
};

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.includes = undefined;

var _fs = __webpack_require__(457);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(234);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var includes = exports.includes = /<mj-include\s+path=['"](.*[\.mjml]?)['"]\s*(\/>|>\s*<\/mj-include>)/g;

var getBodyContent = function getBodyContent(input) {
  return (/<mj-container[^>]*>([\s\S]*?)<\/mj-container>/.exec(input) || [])[1];
};
var getHeadContent = function getHeadContent(input) {
  return (/<mj-head[^>]*>([\s\S]*?)<\/mj-head>/.exec(input) || [])[1];
};
var ensureMJMLFile = function ensureMJMLFile(file) {
  return file.trim().match(/.mjml/) && file || file + '.mjml';
};
var parseDocument = function parseDocument(input) {
  var internals = { content: getBodyContent(input), head: getHeadContent(input) };

  // Neither mj-container or mj-head inside the document
  // So we assume that entire file is a just plain MJML content
  if (!internals.content && !internals.head) {
    internals.content = input;
  }

  return internals;
};

var replaceContent = function replaceContent(currentDir, headStack, _, fileName) {
  var filePath = _path2.default.normalize(_path2.default.join(currentDir, ensureMJMLFile(fileName)));
  var partial = void 0;

  try {
    partial = _fs2.default.readFileSync(filePath, 'utf8');
  } catch (e) {
    return '<mj-raw><!-- mj-include: file not found ' + filePath + ' --></mj-raw>';
  }

  var _parseDocument = parseDocument(partial),
      content = _parseDocument.content,
      head = _parseDocument.head; // eslint-disable-line prefer-const

  if (!content && !head) {
    throw new Error('Error while reading file: ' + filePath + ', file has no content ?');
  }

  if (head) {
    var headLength = headStack.length;
    head = head.replace(includes, replaceContent.bind(undefined, _path2.default.resolve(_path2.default.dirname(filePath)), headStack));
    // head.replace can add new element to the array
    // we have to keep the initial position where we want to insert
    // current mj-head in order to keep definition order
    headStack.splice(headLength - 1, 0, head);
  }

  if (content) {
    content = content.replace(includes, replaceContent.bind(undefined, _path2.default.resolve(_path2.default.dirname(filePath)), headStack));
  }

  return content || '';
};

exports.default = function (baseMjml, _ref) {
  var filePath = _ref.filePath;

  var headStack = [];
  var mjml = baseMjml;
  var fileDir = filePath ? _path2.default.dirname(filePath) : process.cwd();
  mjml = mjml.replace(includes, replaceContent.bind(undefined, _path2.default.resolve(fileDir), headStack));

  if (headStack.length > 0) {
    if (mjml.indexOf('<mj-head>') == -1) {
      mjml = mjml.replace('<mjml>', '<mjml>\n  <mj-head>\n  </mj-head>\n');
    }

    mjml = mjml.replace('</mj-head>', headStack.join('\n') + '\n</mj-head>');
  }

  return mjml;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Create a custom Error class
 */
var error = function error(name, code) {

  return function (_Error) {
    _inherits(MJMLError, _Error);

    function MJMLError(message) {
      _classCallCheck(this, MJMLError);

      var _this = _possibleConstructorReturn(this, (MJMLError.__proto__ || Object.getPrototypeOf(MJMLError)).call(this, '[MJMLError] ' + name + ': ' + message));

      _this.status = code;
      return _this;
    }

    return MJMLError;
  }(Error);
};

/*
 * Warnings are printed to stderr
 */
/* eslint-disable no-unused-vars */
var warning = function warning(name) {
  return function (message) {
    console.error('[MJMLWarning] ' + name + ': ' + message); // eslint-disable-line no-console
  };
};
/* eslint-enable no-unused-vars */

/*
 * Error while parsing the code with cheerio
 */
var ParseError = exports.ParseError = error('ParseError', 1);

/*
 * Error when encounter an empty MJML Element that should be filled
 */
var EmptyMJMLError = exports.EmptyMJMLError = error('EmptyMJMLError', 2);

/*
 * Triggered when an MJML is anormally null/udefined
 */
var NullElementError = exports.NullElementError = error('EmptyMJMLError', 3);

var MJMLValidationError = function () {
  function MJMLValidationError(errors) {
    _classCallCheck(this, MJMLValidationError);

    this.errors = errors;
  }

  _createClass(MJMLValidationError, [{
    key: 'getMessages',
    value: function getMessages() {
      return this.errors.map(function (error) {
        return error.formattedMessage;
      });
    }
  }, {
    key: 'getErrors',
    value: function getErrors() {
      return this.errors;
    }
  }]);

  return MJMLValidationError;
}();

exports.MJMLValidationError = MJMLValidationError;

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 274;

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _MJMLElementsCollection = __webpack_require__(47);

var _MJMLElementsCollection2 = _interopRequireDefault(_MJMLElementsCollection);

var _MJMLHead = __webpack_require__(165);

var _MJMLHead2 = _interopRequireDefault(_MJMLHead);

var _Error = __webpack_require__(235);

var _compact = __webpack_require__(587);

var _compact2 = _interopRequireDefault(_compact);

var _concat = __webpack_require__(159);

var _concat2 = _interopRequireDefault(_concat);

var _dom = __webpack_require__(102);

var _dom2 = _interopRequireDefault(_dom);

var _filter = __webpack_require__(98);

var _filter2 = _interopRequireDefault(_filter);

var _forEach = __webpack_require__(289);

var _forEach2 = _interopRequireDefault(_forEach);

var _includes = __webpack_require__(161);

var _includes2 = _interopRequireDefault(_includes);

var _map = __webpack_require__(589);

var _map2 = _interopRequireDefault(_map);

var _mapValues = __webpack_require__(591);

var _mapValues2 = _interopRequireDefault(_mapValues);

var _parseAttributes = __webpack_require__(592);

var _parseAttributes2 = _interopRequireDefault(_parseAttributes);

var _removeCDATA = __webpack_require__(593);

var _removeCDATA2 = _interopRequireDefault(_removeCDATA);

var _toArray = __webpack_require__(594);

var _toArray2 = _interopRequireDefault(_toArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var regexTag = function regexTag(tag) {
  return new RegExp('<' + tag + '([^>/]*)>([^]*?)</' + tag + '>', 'gmi');
};
var WHITELISTED_GLOBAL_TAG = ['mj-class', 'mj-all'];

/**
 * Avoid htmlparser to parse ending tags
 */
var safeEndingTags = function safeEndingTags(content) {
  var MJElements = [].concat(WHITELISTED_GLOBAL_TAG);

  (0, _forEach2.default)(_extends({}, _MJMLElementsCollection2.default, _MJMLHead2.default), function (element, name) {
    var tagName = element.tagName || name;

    MJElements.push(tagName);
  });

  var safeContent = (0, _parseAttributes2.default)(MJElements, content.replace(/\$/g, '&#36;'));

  (0, _concat2.default)(_MJMLElementsCollection.endingTags, _MJMLHead.endingTags).forEach(function (tag) {
    safeContent = safeContent.replace(regexTag(tag), _dom2.default.replaceContentByCdata(tag));
  });

  return safeContent;
};

/**
 * converts MJML body into a JSON representation
 */
var mjmlElementParser = function mjmlElementParser(elem, content) {
  if (!elem) {
    throw new _Error.NullElementError('Null element found in mjmlElementParser');
  }

  var findLine = content.substr(0, elem.startIndex).match(/\n/g);
  var lineNumber = findLine ? findLine.length + 1 : 1;
  var tagName = elem.tagName.toLowerCase();
  var attributes = (0, _mapValues2.default)(_dom2.default.getAttributes(elem), function (val) {
    return decodeURIComponent(val);
  });

  var element = { tagName: tagName, attributes: attributes, lineNumber: lineNumber };

  if (_MJMLElementsCollection.endingTags.indexOf(tagName) !== -1) {
    var $local = _dom2.default.parseXML(elem);
    element.content = (0, _removeCDATA2.default)($local(tagName).html().trim());
  } else {
    var children = _dom2.default.getChildren(elem);
    element.children = children ? (0, _compact2.default)((0, _filter2.default)(children, function (child) {
      return child.tagName;
    }).map(function (child) {
      return mjmlElementParser(child, content);
    })) : [];
  }

  return element;
};

var parseHead = function parseHead(head) {
  return (0, _map2.default)((0, _compact2.default)((0, _filter2.default)(_dom2.default.getChildren(head), function (child) {
    return child.tagName;
  })), function (el) {
    var $local = _dom2.default.parseXML(el);

    var parseElement = function parseElement(elem) {
      var endingTag = (0, _includes2.default)(_MJMLHead.endingTags, elem.tagName.toLowerCase());

      return {
        attributes: (0, _mapValues2.default)(_dom2.default.getAttributes(elem), function (val) {
          return decodeURIComponent(val);
        }),
        children: endingTag ? null : (0, _compact2.default)((0, _filter2.default)((0, _toArray2.default)(elem.childNodes), function (child) {
          return child.tagName;
        })).map(parseElement),
        content: endingTag ? (0, _removeCDATA2.default)($local(elem.tagName.toLowerCase()).html().trim()) : null,
        tagName: elem.tagName.toLowerCase()
      };
    };

    return parseElement(el);
  });
};

/**
 * Import an html document containing some mjml
 * returns JSON
 *   - container: the mjml container
 *   - mjml: a json representation of the mjml
 */
var documentParser = function documentParser(content) {
  var safeContent = safeEndingTags(content);

  var body = void 0;
  var head = void 0;

  try {
    var $ = _dom2.default.parseXML(safeContent);

    body = $('mjml > mj-body');
    head = $('mjml > mj-head');

    if (body.length > 0) {
      body = body.children().get(0);
    }
  } catch (e) {
    throw new _Error.ParseError('Error while parsing the file');
  }

  if (!body || body.length < 1) {
    throw new _Error.EmptyMJMLError('No root "<mjml>" or "<mj-body>" found in the file, or "<mj-body>" doesn\'t contain a child element.');
  }

  return {
    tagName: 'mjml',
    children: [{
      tagName: 'mj-head',
      children: head && head.length > 0 ? parseHead(head.get(0)) : []
    }, {
      tagName: 'mj-body',
      children: [mjmlElementParser(body, safeContent)]
    }]
  };
};

exports.default = documentParser;

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mjAttribute = __webpack_require__(311);

Object.keys(_mjAttribute).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mjAttribute[key];
    }
  });
});

var _html = __webpack_require__(676);

Object.keys(_html).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _html[key];
    }
  });
});

var _dom = __webpack_require__(102);

Object.defineProperty(exports, 'dom', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_dom).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = exports.defaultUnit = exports.widthParser = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mergeWith = __webpack_require__(251);

var _mergeWith2 = _interopRequireDefault(_mergeWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var unitRegex = /[\d\.,]*(\D*)$/;

var widthParser = exports.widthParser = function widthParser(width) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { parseFloatToInt: true };

  var widthUnit = unitRegex.exec(width.toString())[1];
  var unitParsers = { default: parseInt, px: parseInt, '%': opts.parseFloatToInt ? parseInt : parseFloat };
  var widthParser = unitParsers[widthUnit] || unitParsers['default'];

  return { unit: widthUnit || 'px', width: widthParser(width) };
};

var defaultUnit = exports.defaultUnit = function defaultUnit(units) {
  var defaultUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';

  if (units === undefined || units === '' || units === null) {
    return undefined;
  }

  return units.toString().split(' ').map(function (unit) {
    var parsedUnit = unitRegex.exec(unit.toString())[1];
    return parsedUnit ? unit : unit.toString() + defaultUnit;
  }).join(' ');
};

// lodash/merge merges `null` values, use mergeWith with a custom strategy to avoid this behaviour
var merge = exports.merge = function merge() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _mergeWith2.default.apply(undefined, args.concat([function (prev, next) {
    if (next == undefined) {
      return prev;
    }

    if (prev == undefined) {
      return next;
    }

    if ((typeof prev === 'undefined' ? 'undefined' : _typeof(prev)) == 'object' && (typeof next === 'undefined' ? 'undefined' : _typeof(next)) == 'object') {
      return merge({}, prev, next);
    }

    return next;
  }]));
};

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mjml2html = exports.MJMLValidator = exports.version = exports.mjIncludeRegexp = exports.documentParser = exports.rulesCollection = exports.registerMJRule = exports.formatValidationError = exports.MJMLHeadElements = exports.registerMJHeadElement = exports.helpers = exports.elements = exports.registerMJElement = exports.MJMLRenderer = exports.MJMLElement = undefined;

var _includeExternal = __webpack_require__(233);

Object.defineProperty(exports, 'mjIncludeRegexp', {
  enumerable: true,
  get: function get() {
    return _includeExternal.includes;
  }
});

var _MJMLRenderer = __webpack_require__(458);

var _MJMLRenderer2 = _interopRequireDefault(_MJMLRenderer);

var _mjmlValidator = __webpack_require__(158);

var _mjmlValidator2 = _interopRequireDefault(_mjmlValidator);

var _MJMLElementsCollection = __webpack_require__(47);

var _MJMLElementsCollection2 = _interopRequireDefault(_MJMLElementsCollection);

var _MJMLHead = __webpack_require__(165);

var _MJMLHead2 = _interopRequireDefault(_MJMLHead);

var _helpers = __webpack_require__(310);

var helpers = _interopRequireWildcard(_helpers);

var _MJMLElement2 = __webpack_require__(677);

var _MJMLElement3 = _interopRequireDefault(_MJMLElement2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MJMLElement = _MJMLElement3.default;
exports.MJMLRenderer = _MJMLRenderer2.default;
exports.registerMJElement = _MJMLElementsCollection.registerMJElement;
exports.elements = _MJMLElementsCollection2.default;
exports.helpers = helpers;
exports.registerMJHeadElement = _MJMLHead.registerMJHeadElement;
exports.MJMLHeadElements = _MJMLHead2.default;
exports.formatValidationError = _mjmlValidator.formatValidationError;
exports.registerMJRule = _mjmlValidator.registerMJRule;
exports.rulesCollection = _mjmlValidator.rulesCollection;
var documentParser = exports.documentParser = function documentParser(content, attributes) {
  var documentParser = __webpack_require__(290).default;

  return documentParser(content, attributes);
};
var version = exports.version = function version() {
  return '3.3.3';
};
var MJMLValidator = exports.MJMLValidator = _mjmlValidator2.default;
var mjml2html = exports.mjml2html = function mjml2html(mjml) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new _MJMLRenderer2.default(mjml, options).render();
};

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Error = __webpack_require__(235);

var _postRender = __webpack_require__(459);

var _mjml = __webpack_require__(460);

var _cloneDeep = __webpack_require__(508);

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _config = __webpack_require__(527);

var _config2 = _interopRequireDefault(_config);

var _curryRight = __webpack_require__(567);

var _curryRight2 = _interopRequireDefault(_curryRight);

var _each = __webpack_require__(288);

var _each2 = _interopRequireDefault(_each);

var _find = __webpack_require__(584);

var _find2 = _interopRequireDefault(_find);

var _document = __webpack_require__(290);

var _document2 = _interopRequireDefault(_document);

var _defaults = __webpack_require__(599);

var _defaults2 = _interopRequireDefault(_defaults);

var _defaultContainer = __webpack_require__(602);

var _defaultContainer2 = _interopRequireDefault(_defaultContainer);

var _listFontsImports = __webpack_require__(604);

var _listFontsImports2 = _interopRequireDefault(_listFontsImports);

var _dom = __webpack_require__(102);

var _dom2 = _interopRequireDefault(_dom);

var _he = __webpack_require__(605);

var _he2 = _interopRequireDefault(_he);

var _importFonts = __webpack_require__(606);

var _importFonts2 = _interopRequireDefault(_importFonts);

var _includeExternal = __webpack_require__(233);

var _includeExternal2 = _interopRequireDefault(_includeExternal);

var _jsBeautify = __webpack_require__(607);

var _mjmlValidator = __webpack_require__(158);

var _mjmlValidator2 = _interopRequireDefault(_mjmlValidator);

var _MJMLElementsCollection = __webpack_require__(47);

var _MJMLElementsCollection2 = _interopRequireDefault(_MJMLElementsCollection);

var _MJMLHead = __webpack_require__(165);

var _MJMLHead2 = _interopRequireDefault(_MJMLHead);

var _isBrowser = __webpack_require__(166);

var _isBrowser2 = _interopRequireDefault(_isBrowser);

var _react = __webpack_require__(55);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(292);

var _server2 = _interopRequireDefault(_server);

var _warning = __webpack_require__(91);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DANGEROUS_CHARS = ['{{', '}}', '<%', '%>', '<=', '=>', '{%', '%}', '{{{', '}}}'];
var SEED = Math.floor(Math.random() * 0x10000000000).toString(16);
var PLACEHOLDER = '__MJML__' + SEED + '__';
var mjmlSanitizer = function mjmlSanitizer(mjml) {
  if (mjml.children && mjml.children) {
    (0, _each2.default)(mjml.children, mjmlSanitizer);
  }

  if (mjml.content) {
    mjml.content = sanitizer(mjml.content);
  }
};

var sanitizer = function sanitizer(text) {
  return DANGEROUS_CHARS.reduce(function (content, char, index) {
    return content.replace(new RegExp(char, 'g'), '' + PLACEHOLDER + index);
  }, text);
};
var restore = function restore(text) {
  return DANGEROUS_CHARS.reduce(function (content, char, index) {
    return content.replace(new RegExp('' + PLACEHOLDER + index, 'g'), char);
  }, text);
};

var getMJBody = function getMJBody(root) {
  return (0, _find2.default)(root.children, ['tagName', 'mj-body']);
};
var getMJHead = function getMJHead(root) {
  return (0, _find2.default)(root.children, ['tagName', 'mj-head']);
};

var minifyHTML = function minifyHTML(htmlDocument) {
  var _require = __webpack_require__(612),
      minify = _require.minify;

  return minify(htmlDocument, { collapseWhitespace: true, removeEmptyAttributes: true, minifyCSS: true });
};
var beautifyHTML = function beautifyHTML(htmlDocument) {
  return (0, _jsBeautify.html)(htmlDocument, { indent_size: 2, wrap_attributes_indent_size: 2 });
};
var inlineExternal = function inlineExternal(htmlDocument, css) {
  if (!css || css.length == 0) {
    return htmlDocument;
  }

  var juice = __webpack_require__(613);

  return juice(htmlDocument, { extraCss: css.join('\n'), removeStyleTags: false, applyStyleTags: false, insertPreservedExtraCss: false });
};

var MJMLRenderer = function () {
  function MJMLRenderer(content) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, MJMLRenderer);

    if (!(0, _isBrowser2.default)()) {
      (0, _config2.default)(options);
    }

    this.attributes = {
      container: (0, _defaultContainer2.default)(),
      defaultAttributes: {},
      cssClasses: {},
      css: [],
      inlineCSS: [],
      fonts: (0, _cloneDeep2.default)(_listFontsImports2.default)
    };

    this.content = content;
    this.options = (0, _defaults2.default)(options, { level: "soft", disableMjStyle: false, disableMjInclude: false, disableMinify: false });

    if (typeof this.content === 'string') {
      this.parseDocument();
    }
  }

  _createClass(MJMLRenderer, [{
    key: 'parseDocument',
    value: function parseDocument() {
      if (!this.options.disableMjInclude) {
        this.content = (0, _includeExternal2.default)(this.content, this.options);
      }

      this.content = (0, _document2.default)(this.content);
    }
  }, {
    key: 'validate',
    value: function validate(root) {
      if (this.options.level == "skip") {
        this.errors = [];
        return;
      }

      this.errors = (0, _mjmlValidator2.default)(root);

      if (this.options.level == "strict" && this.errors.length > 0) {
        throw new _Error.MJMLValidationError(this.errors);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      if (!this.content || !getMJBody(this.content)) {
        throw new _Error.EmptyMJMLError('.render: No MJML to render in options ' + this.options.toString());
      }

      mjmlSanitizer(this.content);

      var body = getMJBody(this.content);
      var head = getMJHead(this.content);

      if (head && head.children.length > 0) {
        (0, _each2.default)(head.children, function (headElement) {
          var handlerName = headElement.tagName;
          var handler = _MJMLHead2.default[handlerName];

          if (handler) {
            handler(headElement, _this.attributes);
          } else {
            (0, _warning2.default)(false, 'No handler found for: ' + handlerName + ', in mj-head, skipping it');
          }
        });
      }

      var rootElement = body.children[0];

      this.validate(rootElement);

      var rootComponent = _MJMLElementsCollection2.default[rootElement.tagName];

      if (!rootComponent) {
        return { errors: this.errors };
      }

      var rootElemComponent = _react2.default.createElement(rootComponent, { mjml: (0, _mjml.parseInstance)(rootElement, this.attributes) });
      var renderedMJML = _server2.default.renderToStaticMarkup(rootElemComponent);

      var MJMLDocument = this.attributes.container.replace('__content__', renderedMJML || '').replace('__title__', this.attributes.title || '').replace('__preview__', this.attributes.preview || '');

      return { errors: this.errors, html: this.postRender(MJMLDocument) };
    }
  }, {
    key: 'postRender',
    value: function postRender(MJMLDocument) {
      var externalCSS = this.attributes.inlineCSS;

      var $ = _dom2.default.parseHTML(MJMLDocument);

      (0, _importFonts2.default)({ $: $, fonts: this.attributes.fonts });

      $ = (0, _postRender.fixLegacyAttrs)($);
      $ = (0, _postRender.insertHeadCSS)($, this.attributes.css);

      _MJMLElementsCollection.postRenders.forEach(function (postRender) {
        if (typeof postRender === 'function') {
          $ = postRender($);
        }
      });

      return [!this.options.disableMjStyle ? (0, _curryRight2.default)(inlineExternal)(externalCSS) : undefined, this.options.beautify ? beautifyHTML : undefined, !this.options.disableMinify && this.options.minify ? minifyHTML : undefined, _he2.default.decode, restore].filter(function (element) {
        return typeof element == 'function';
      }).reduce(function (res, fun) {
        return fun(res);
      }, _dom2.default.getHTML($));
    }
  }]);

  return MJMLRenderer;
}();

exports.default = MJMLRenderer;

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var insertHeadCSS = exports.insertHeadCSS = function insertHeadCSS($, headCSS) {
  if (!headCSS || headCSS.length == 0) {
    return $;
  }

  $('head').append('<style type="text/css">' + headCSS.join('') + '</style>');

  return $;
};

var fixLegacyAttrs = exports.fixLegacyAttrs = function fixLegacyAttrs($) {
  var legacyAttrs = ['align', 'valign', 'bgcolor', 'border', 'background'];

  // https://github.com/facebook/react/issues/140 ...
  // server side workaround to allow custom tags.
  legacyAttrs.forEach(function (attr) {
    var dataAttr = 'data-legacy-' + attr;

    $('[' + dataAttr + ']').each(function () {
      $(this).attr(attr, $(this).attr(dataAttr));
      $(this).removeAttr(dataAttr);
    });
  });

  $('*[class=""]').removeAttr('class');

  return $;
};

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseInstance = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _immutable = __webpack_require__(236);

var _defaultsDeep = __webpack_require__(461);

var _defaultsDeep2 = _interopRequireDefault(_defaultsDeep);

var _merge = __webpack_require__(507);

var _merge2 = _interopRequireDefault(_merge);

var _MJMLElementsCollection = __webpack_require__(47);

var _MJMLElementsCollection2 = _interopRequireDefault(_MJMLElementsCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var parseInstance = exports.parseInstance = function parseInstance(instance, attributes) {
  var parseNode = function parseNode(node) {
    node['attributes'] = node['attributes'] || {};

    var Component = _MJMLElementsCollection2.default[node.tagName];
    var nodeClasses = node['attributes']['mj-class'];

    var classAttributes = !nodeClasses ? {} : _merge2.default.apply(undefined, [{}].concat(_toConsumableArray(nodeClasses.split(' ').map(function (nodeClass) {
      return { attributes: attributes.cssClasses[nodeClass] };
    }))));

    return !Component ? {} : _extends({}, (0, _defaultsDeep2.default)(node, classAttributes, { attributes: attributes.defaultAttributes[node.tagName] }, { attributes: attributes.defaultAttributes["mj-all"] } || {}, Component.defaultMJMLDefinition), {
      // do same to children
      children: (node.children || []).map(parseNode)
    });
  };

  return (0, _immutable.fromJS)(parseNode(instance));
};

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerMJElement = exports.postRenders = exports.endingTags = undefined;

var _warning = __webpack_require__(91);

var _warning2 = _interopRequireDefault(_warning);

var _lodash = __webpack_require__(150);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var endingTags = exports.endingTags = [];
var postRenders = exports.postRenders = [];

var registerMJElement = exports.registerMJElement = function registerMJElement(Component) {
  var endingTag = Component.endingTag,
      postRender = Component.postRender,
      tagName = Component.tagName;


  if (!tagName) {
    return (0, _warning2.default)(false, 'Component has no tagName');
  }

  endingTag && !(0, _lodash.includes)(endingTags, tagName) && endingTags.push(tagName);
  postRender && postRenders.push(postRender);

  MJMLElementsCollection[tagName] = Component;
};

var MJMLElementsCollection = {};

exports.default = MJMLElementsCollection;

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = __webpack_require__(528);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(234);

var _path2 = _interopRequireDefault(_path);

var _warning = __webpack_require__(91);

var _warning2 = _interopRequireDefault(_warning);

var _some = __webpack_require__(529);

var _some2 = _interopRequireDefault(_some);

var _startsWith = __webpack_require__(551);

var _startsWith2 = _interopRequireDefault(_startsWith);

var _isEmpty = __webpack_require__(555);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _MJMLElementsCollection = __webpack_require__(47);

var _MJMLElementsCollection2 = _interopRequireDefault(_MJMLElementsCollection);

var _mjmlValidator = __webpack_require__(158);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cwd = process.cwd();

var isRelativePath = function isRelativePath(name) {
  return (0, _some2.default)(['./', '.', '../'], function (matcher) {
    return (0, _startsWith2.default)(name, matcher);
  });
};

var checkIfConfigFileExist = function checkIfConfigFileExist() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  try {
    _fs2.default.statSync((options.cwd || cwd) + '/.mjmlconfig');
    return true;
  } catch (e) {
    (0, _warning2.default)(!(0, _isEmpty2.default)(_MJMLElementsCollection2.default), 'No .mjmlconfig found in path ' + cwd + ', consider to add one');
    return false;
  }
};

var parseConfigFile = function parseConfigFile() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (!checkIfConfigFileExist(options)) {
    return false;
  }

  try {
    return JSON.parse(_fs2.default.readFileSync((options.cwd || cwd) + '/.mjmlconfig').toString());
  } catch (e) {
    (0, _warning2.default)(false, '.mjmlconfig has a ParseError: ' + e);
  }
};

var parsePackages = function parsePackages(packages) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!packages) {
    return;
  }

  packages.forEach(function (file) {
    if (!file) {
      return;
    }

    try {
      var filename = _path2.default.join(options.cwd || cwd, file);
      var Component = isRelativePath(file) ? !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()) : __webpack_require__.c[__webpack_require__.s].require(file);

      (0, _MJMLElementsCollection.registerMJElement)(Component.default || Component);
    } catch (e) {
      (0, _warning2.default)(false, '.mjmlconfig file ' + file + ' opened from ' + cwd + ' has an error : ' + e);
    }
  });
};

var parseRules = function parseRules(validators) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!validators) {
    return;
  }

  validators.forEach(function (file) {
    if (!file) {
      return;
    }

    try {
      var filename = _path2.default.join(options.cwd || cwd, file);
      var rule = isRelativePath(file) ? !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()) : __webpack_require__.c[__webpack_require__.s].require(file);

      (0, _mjmlValidator.registerMJRule)(rule);
    } catch (e) {
      (0, _warning2.default)(false, '.mjmlconfig file ' + file + ' opened from ' + cwd + ' has an error : ' + e);
    }
  });
};

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var config = parseConfigFile(options);

  if (!config) {
    return;
  }

  parsePackages(config.packages, options);
  parseRules(config.validators, options);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerMJRule = undefined;

var _warning = __webpack_require__(91);

var _warning2 = _interopRequireDefault(_warning);

var _rules = __webpack_require__(561);

var rules = _interopRequireWildcard(_rules);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MJMLRulesCollection = rules;

var registerMJRule = exports.registerMJRule = function registerMJRule(rule, name) {

  if (typeof rule != 'function' || rule.length !== 1) {
    return (0, _warning2.default)(false, 'Your rule must be a function and must have one parameter which is the element to validate');
  }

  if (name) {
    MJMLRulesCollection[name] = rule;
  } else {
    MJMLRulesCollection[rule.name] = rule;
  }
};

exports.default = MJMLRulesCollection;

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validAttributes = __webpack_require__(562);

Object.keys(_validAttributes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _validAttributes[key];
    }
  });
});

var _validChildren = __webpack_require__(565);

Object.keys(_validChildren).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _validChildren[key];
    }
  });
});

var _validTag = __webpack_require__(566);

Object.keys(_validTag).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _validTag[key];
    }
  });
});

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateAttribute = undefined;

var _mjmlCore = __webpack_require__(43);

var _concat = __webpack_require__(159);

var _concat2 = _interopRequireDefault(_concat);

var _keys = __webpack_require__(26);

var _keys2 = _interopRequireDefault(_keys);

var _includes = __webpack_require__(161);

var _includes2 = _interopRequireDefault(_includes);

var _filter = __webpack_require__(98);

var _filter2 = _interopRequireDefault(_filter);

var _ruleError = __webpack_require__(99);

var _ruleError2 = _interopRequireDefault(_ruleError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WHITELIST = ['mj-class', 'css-class'];

var validateAttribute = exports.validateAttribute = function validateAttribute(element) {
  var attributes = element.attributes,
      tagName = element.tagName;

  var Component = _mjmlCore.elements[tagName];

  if (!Component) {
    return;
  }

  var availableAttributes = (0, _concat2.default)((0, _keys2.default)(Component.defaultMJMLDefinition.attributes), WHITELIST);
  var unknownAttributes = (0, _filter2.default)((0, _keys2.default)(attributes), function (attribute) {
    return !(0, _includes2.default)(availableAttributes, attribute);
  });

  if (unknownAttributes.length == 0) {
    return;
  }

  return (0, _ruleError2.default)((unknownAttributes.length > 1 ? "Attributes" : "Attribute") + ' ' + unknownAttributes.join(', ') + ' ' + (unknownAttributes.length > 1 ? "are illegal" : "is illegal"), element);
};

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validChildren = undefined;

var _mjmlCore = __webpack_require__(43);

var _filter = __webpack_require__(98);

var _filter2 = _interopRequireDefault(_filter);

var _includes = __webpack_require__(161);

var _includes2 = _interopRequireDefault(_includes);

var _ruleError = __webpack_require__(99);

var _ruleError2 = _interopRequireDefault(_ruleError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validChildren = exports.validChildren = function validChildren(element) {
  var children = element.children,
      tagName = element.tagName;

  var Component = _mjmlCore.elements[tagName];

  if (!Component) {
    return;
  }

  if (!children || children.length == 0) {
    return;
  }

  return (0, _filter2.default)(children.map(function (child) {
    var childTagName = child.tagName;
    var ChildComponent = _mjmlCore.elements[childTagName];

    if (!ChildComponent) {
      return null;
    }

    if ((0, _includes2.default)(ChildComponent.parentTag, tagName)) {
      return null;
    }

    return (0, _ruleError2.default)(ChildComponent.tagName + ' cannot be used inside ' + tagName + ', only inside: ' + ChildComponent.parentTag.join(', '), child);
  }));
};

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateTag = undefined;

var _mjmlCore = __webpack_require__(43);

var _ruleError = __webpack_require__(99);

var _ruleError2 = _interopRequireDefault(_ruleError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateTag = exports.validateTag = function validateTag(element) {
  var tagName = element.tagName;

  var Component = _mjmlCore.elements[tagName];

  if (!Component) {
    return (0, _ruleError2.default)('Element ' + tagName + ' doesn\'t exist or is not registered', element);
  }
};

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseAttributes;

var _lodash = __webpack_require__(150);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var regexTag = function regexTag(tag) {
  return new RegExp('<' + tag + '(\\s("[^"]*"|\'[^\']*\'|[^\'">])*)?>', 'gmi');
};
var regexAttributes = /(\S+)\s*?=\s*([\'"])(.*?|)\2/gmi;

function parseAttributes(MJElements, content) {
  _lodash2.default.forEach(MJElements, function (tag) {
    content = content.replace(regexTag(tag), function (contentTag) {
      return contentTag.replace(regexAttributes, function (match, attr, around, value) {
        return attr + '=' + around + encodeURIComponent(value) + around;
      });
    });
  });

  return content;
}

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isBrowser = __webpack_require__(166);

var _isBrowser2 = _interopRequireDefault(_isBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CDATARegexp = function CDATARegexp() {
  return (0, _isBrowser2.default)() ? /<!--\[CDATA\[([^]*?)\]\]-->/gm : /<!\[CDATA\[([^]*?)\]\]>/gm;
};

exports.default = function (str) {
  return str.replace(CDATARegexp(), '$1');
};

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultStyle = __webpack_require__(603);

var _defaultStyle2 = _interopRequireDefault(_defaultStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return '<!doctype html>\n<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">\n<head>\n  <title>__title__</title>\n  <!--[if !mso]><!-- -->\n  <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n  <!--<![endif]-->\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style type="text/css">' + _defaultStyle2.default + '</style>\n<!--[if !mso]><!-->\n<style type="text/css">\n  @media only screen and (max-width:480px) {\n    @-ms-viewport { width:320px; }\n    @viewport { width:320px; }\n  }\n</style>\n<!--<![endif]-->\n<!--[if mso]>\n<xml>\n  <o:OfficeDocumentSettings>\n    <o:AllowPNG/>\n    <o:PixelsPerInch>96</o:PixelsPerInch>\n  </o:OfficeDocumentSettings>\n</xml>\n<![endif]-->\n<!--[if lte mso 11]>\n<style type="text/css">\n  .outlook-group-fix {\n    width:100% !important;\n  }\n</style>\n<![endif]-->\n</head>\n<body>\n  __preview__\n  __content__\n</body>\n</html>';
};

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  #outlook a { padding: 0; }\n  .ReadMsgBody { width: 100%; }\n  .ExternalClass { width: 100%; }\n  .ExternalClass * { line-height:100%; }\n  body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }\n  table, td { border-collapse:collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }\n  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }\n  p { display: block; margin: 13px 0; }\n";

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  name: 'Open Sans',
  url: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700'
}, {
  name: 'Droid Sans',
  url: 'https://fonts.googleapis.com/css?family=Droid+Sans:300,400,500,700'
}, {
  name: 'Lato',
  url: 'https://fonts.googleapis.com/css?family=Lato:300,400,500,700'
}, {
  name: 'Roboto',
  url: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700'
}, {
  name: 'Ubuntu',
  url: 'https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700'
}];

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(102);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildTags = function buildTags($, toImport) {
  if (!toImport.length) {
    return;
  }

  $('head').append('\n<!--[if !mso]><!-->\n    ' + toImport.map(function (url) {
    return '<link href="' + url + '" rel="stylesheet" type="text/css">';
  }).join('\n') + '\n    <style type="text/css">\n\n      ' + toImport.map(function (url) {
    return '  @import url(' + url + ');';
  }).join('\n') + '\n\n    </style>\n  <!--<![endif]-->');
};

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var fonts = options.fonts,
      $ = options.$;

  var content = _dom2.default.getHTML($);

  var toImport = [];

  fonts.forEach(function (font) {
    var name = font.name,
        url = font.url;

    var regex = new RegExp('"[^"]*font-family:[^"]*' + name + '[^"]*"');

    if (content.match(regex)) {
      toImport.push(url);
    }
  });

  return buildTags($, toImport);
};

/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var startConditionalTag = exports.startConditionalTag = '<!--[if mso | IE]>';
var endConditionalTag = exports.endConditionalTag = '<![endif]-->';
var startNegationConditionalTag = exports.startNegationConditionalTag = '<!--[if !mso | IE]><!-->';
var endNegationConditionalTag = exports.endNegationConditionalTag = '<!--<![endif]-->';

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mjAttribute = __webpack_require__(311);

var _immutable = __webpack_require__(236);

var _immutable2 = _interopRequireDefault(_immutable);

var _MJMLElementsCollection = __webpack_require__(47);

var _MJMLElementsCollection2 = _interopRequireDefault(_MJMLElementsCollection);

var _react = __webpack_require__(55);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(292);

var _server2 = _interopRequireDefault(_server);

var _trim = __webpack_require__(678);

var _trim2 = _interopRequireDefault(_trim);

var _helpers = __webpack_require__(310);

var _hoistNonReactStatics = __webpack_require__(683);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getElementWidth = function getElementWidth(_ref) {
  var element = _ref.element,
      siblings = _ref.siblings,
      parentWidth = _ref.parentWidth;
  var mjml = element.props.mjml;
  var width = element.props.width;


  if (!width && mjml) {
    width = mjml.getIn(['attributes', 'width']);
  }

  if (width == undefined) {
    return parentWidth / siblings;
  }

  var _widthParser = (0, _mjAttribute.widthParser)(width),
      parsedWidth = _widthParser.width,
      unit = _widthParser.unit;

  switch (unit) {
    case '%':
      return parsedWidth * parentWidth / 100;

    case 'px':
    default:
      return parsedWidth;
  }
};

// used to pass column count to children
var siblingCount = 1;

function createComponent(ComposedComponent) {

  var baseStyles = {
    td: {
      wordWrap: 'break-word'
    }
  };

  var MJMLElement = function (_Component) {
    _inherits(MJMLElement, _Component);

    function MJMLElement(props) {
      _classCallCheck(this, MJMLElement);

      var _this = _possibleConstructorReturn(this, (MJMLElement.__proto__ || Object.getPrototypeOf(MJMLElement)).call(this, props));

      _this.mjAttribute = function (name) {
        return _this.mjml.getIn(['attributes', name]);
      };

      _this.mjName = function () {
        return _this.constructor.tagName;
      };

      _this.mjContent = function () {
        var content = _this.mjml.get('content');

        if (content) {
          return (0, _trim2.default)(content);
        }

        return _react2.default.Children.map(_this.props.children, function (child) {
          if (typeof child === 'string') {
            return child;
          }
          return _server2.default.renderToStaticMarkup(child);
        });
      };

      _this.isInheritedAttributes = function (name) {
        return _this.mjml.get('inheritedAttributes') && _this.mjml.get('inheritedAttributes').includes(name);
      };

      _this.getWidth = function () {
        return _this.mjAttribute('rawPxWidth') || _this.mjAttribute('width');
      };

      _this.getParentWidth = function () {
        return _this.mjAttribute('parentWidth');
      };

      _this.renderWrappedOutlookChildren = function (children) {
        children = _react2.default.Children.toArray(children);

        var realChildren = children.filter(function (child) {
          return !child.props.mjml || child.props.mjml.get('tagName') !== 'mj-raw';
        });

        var prefix = _this.mjName() + '-outlook';
        var parentWidth = _this.getWidth();
        var siblings = realChildren.length;
        var elementsWidth = realChildren.map(function (element) {
          if (_this.isInheritedAttributes('width')) {
            return parseInt(parentWidth);
          }

          return getElementWidth({ element: element, siblings: siblings, parentWidth: parentWidth });
        });

        var wrappedElements = [];

        if (siblings == 0) {
          return wrappedElements;
        }

        wrappedElements.push(_react2.default.createElement('div', { key: 'outlook-open', className: prefix + '-open', 'data-width': elementsWidth[0] }));

        var i = 0;

        children.forEach(function (child) {
          var childProps = Object.assign({}, child.props);

          if (childProps.mjml) {
            childProps.mjml = childProps.mjml.setIn(['attributes', 'rawPxWidth'], elementsWidth[i]);

            if (_this.mjml.get('inheritedAttributes')) {
              childProps.mjml = childProps.mjml.mergeIn(['attributes', _this.inheritedAttributes()]);
            }
          } else {
            Object.assign(childProps, { rawPxWidth: elementsWidth[i] });

            if (_this.mjml.get('inheritedAttributes')) {
              Object.assign(childProps, _this.inheritedAttributes());
            }
          }

          var childWithProps = _react2.default.cloneElement(child, childProps);

          wrappedElements.push(childWithProps);
          if (!childWithProps.type.rawElement && i < realChildren.length - 1) {
            wrappedElements.push(_react2.default.createElement('div', { key: 'outlook-' + i, className: prefix + '-line', 'data-width': elementsWidth[++i] }));
          }
        });

        wrappedElements.push(_react2.default.createElement('div', { key: 'outlook-close', className: prefix + '-close' }));

        return wrappedElements;
      };

      _this.paddingParser = function (direction) {
        var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        var paddingDirection = _this.mjAttribute(prefix + 'padding-' + direction);
        var padding = _this.mjAttribute(prefix + 'padding');

        if (paddingDirection != null) {
          return parseInt(paddingDirection);
        }

        if (!padding) {
          return 0;
        }

        var paddings = padding.split(' ');
        var directions = {};

        switch (paddings.length) {
          case 1:
            return parseInt(padding);
          case 2:
            directions = { top: 0, bottom: 0, left: 1, right: 1 };
            break;
          case 3:
            directions = { top: 0, left: 1, right: 1, bottom: 2 };
            break;
          case 4:
            directions = { top: 0, right: 1, bottom: 2, left: 3 };
            break;
        }

        return parseInt(paddings[directions[direction]] || 0);
      };

      _this.mjml = props.mjml || _immutable2.default.fromJS(_this.constructor.defaultMJMLDefinition || {}).mergeIn(['attributes'], props);
      return _this;
    }

    _createClass(MJMLElement, [{
      key: 'getStyles',
      value: function getStyles() {
        return (0, _helpers.merge)({}, baseStyles, {
          td: {
            background: this.mjAttribute('container-background-color'),
            fontSize: '0px',
            padding: (0, _mjAttribute.defaultUnit)(this.mjAttribute('padding'), 'px'),
            paddingTop: (0, _mjAttribute.defaultUnit)(this.mjAttribute('padding-top'), 'px'),
            paddingBottom: (0, _mjAttribute.defaultUnit)(this.mjAttribute('padding-bottom'), 'px'),
            paddingRight: (0, _mjAttribute.defaultUnit)(this.mjAttribute('padding-right'), 'px'),
            paddingLeft: (0, _mjAttribute.defaultUnit)(this.mjAttribute('padding-left'), 'px')
          }
        });
      }
    }, {
      key: 'inheritedAttributes',
      value: function inheritedAttributes() {
        var _this2 = this;

        return this.mjml.get('inheritedAttributes').reduce(function (result, value) {
          result[value] = _this2.mjAttribute(value);

          return result;
        }, {});
      }
    }, {
      key: 'generateChildren',
      value: function generateChildren() {
        var _this3 = this;

        var parentMjml = this.props.mjml;


        if (!parentMjml) {
          return [];
        }

        return parentMjml.get('children').map(function (mjml, i) {
          var childMjml = mjml.setIn(['attributes', 'parentWidth'], _this3.getWidth());

          var tag = childMjml.get('tagName');
          var Element = _MJMLElementsCollection2.default[tag];

          if (!Element) {
            return null;
          }

          return _react2.default.createElement(Element, {
            key: i // eslint-disable-line react/no-array-index-key
            , mjml: childMjml,
            parentMjml: parentMjml });
        });
      }
    }, {
      key: 'validChildren',
      value: function validChildren() {
        var children = this.props.children;

        return (children && _react2.default.Children.toArray(children) || this.generateChildren()).filter(Boolean);
      }
    }, {
      key: 'buildProps',
      value: function buildProps() {
        var _this4 = this;

        var parentMjml = this.props.parentMjml;


        var childMethods = ['mjAttribute', 'mjContent', 'renderWrappedOutlookChildren'];

        // assign sibling count for element and children
        if (parentMjml) {
          siblingCount = parentMjml.get('children').size;
        }

        return _extends({}, this.props, {

          // set mjName
          mjName: this.mjName(),

          // generate children
          children: this.validChildren(),

          // siblings count, can change display
          sibling: siblingCount,

          parentWidth: this.getParentWidth(),
          getPadding: this.paddingParser,
          defaultUnit: _mjAttribute.defaultUnit

        }, childMethods.reduce(function (acc, method) {
          return _extends({}, acc, _defineProperty({}, method, _this4[method]));
        }, {}));
      }
    }, {
      key: 'render',
      value: function render() {
        if (this.props.columnElement && this.constructor.tagName != 'mj-raw') {
          this.styles = this.getStyles();

          return _react2.default.createElement(
            'tr',
            { className: this.mjAttribute('css-class') },
            _react2.default.createElement(
              'td',
              {
                'data-legacy-align': this.mjAttribute('align'),
                'data-legacy-background': this.mjAttribute('container-background-color'),
                style: this.styles.td },
              _react2.default.createElement(ComposedComponent, this.buildProps())
            )
          );
        }

        return _react2.default.createElement(ComposedComponent, this.buildProps());
      }
    }]);

    return MJMLElement;
  }(_react.Component);

  return (0, _hoistNonReactStatics2.default)(MJMLElement, ComposedComponent);
}

exports.default = createComponent;

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _mjmlCore = __webpack_require__(43);

var _classnames = __webpack_require__(685);

var _classnames2 = _interopRequireDefault(_classnames);

var _each = __webpack_require__(288);

var _each2 = _interopRequireDefault(_each);

var _react = __webpack_require__(55);

var _react2 = _interopRequireDefault(_react);

var _uniq = __webpack_require__(686);

var _uniq2 = _interopRequireDefault(_uniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tagName = 'mj-column';
var parentTag = ['mj-section', 'mj-group', 'mj-navbar'];
var defaultMJMLDefinition = {
  attributes: {
    'background': null,
    'background-color': null,
    'border': null,
    'border-bottom': null,
    'border-left': null,
    'border-radius': null,
    'border-right': null,
    'border-top': null,
    'vertical-align': null,
    'width': null
  }
};
var baseStyles = {
  div: {
    verticalAlign: 'top'
  }
};
var postRender = function postRender($) {
  var mediaQueries = [];

  (0, _each2.default)({ 'mj-column-per': '%', 'mj-column-px': 'px' }, function (unit, className) {
    var columnWidths = [];

    $('[class*="' + className + '"]').each(function () {
      columnWidths.push($(this).data('column-width'));
      $(this).removeAttr('data-column-width');
    });

    (0, _uniq2.default)(columnWidths).forEach(function (width) {
      var _helpers$widthParser = _mjmlCore.helpers.widthParser(width, { parseFloatToInt: false }),
          parsedWidth = _helpers$widthParser.width;

      var mediaQueryClass = className + '-' + parseInt(parsedWidth);

      mediaQueries.push('.' + mediaQueryClass + ' { width:' + parsedWidth + unit + '!important; }');
    });
  });

  if (mediaQueries.length > 0) {
    var mediaQuery = '<style type="text/css">\n  @media only screen and (min-width:480px) {\n    ' + mediaQueries.join('\n') + '\n  }\n</style>\n';

    $('head').append(mediaQuery);
  }

  return $;
};

var Column = (0, _mjmlCore.MJMLElement)(_class = function (_Component) {
  _inherits(Column, _Component);

  function Column() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Column);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Column.__proto__ || Object.getPrototypeOf(Column)).call.apply(_ref, [this].concat(args))), _this), _this.styles = _this.getStyles(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Column, [{
    key: 'getStyles',
    value: function getStyles() {
      var _props = this.props,
          mjAttribute = _props.mjAttribute,
          defaultUnit = _props.defaultUnit;


      return _mjmlCore.helpers.merge({}, baseStyles, {
        div: {
          display: 'inline-block',
          direction: 'ltr',
          fontSize: '13px',
          textAlign: 'left',
          verticalAlign: mjAttribute('vertical-align'),
          width: this.getMobileWidth()
        },
        table: {
          background: mjAttribute('background-color'),
          border: mjAttribute('border'),
          borderBottom: mjAttribute('border-bottom'),
          borderLeft: mjAttribute('border-left'),
          borderRadius: defaultUnit(mjAttribute('border-radius'), "px"),
          borderRight: mjAttribute('border-right'),
          borderTop: mjAttribute('border-top'),
          verticalAlign: mjAttribute('vertical-align')
        }
      });
    }
  }, {
    key: 'getColumnClass',
    value: function getColumnClass() {
      var _props2 = this.props,
          mjAttribute = _props2.mjAttribute,
          sibling = _props2.sibling;

      var width = mjAttribute('width');

      if (width == undefined) {
        return 'mj-column-per-' + parseInt(100 / sibling);
      }

      var _helpers$widthParser2 = _mjmlCore.helpers.widthParser(width),
          parsedWidth = _helpers$widthParser2.width,
          unit = _helpers$widthParser2.unit;

      switch (unit) {
        case '%':
          return 'mj-column-per-' + parsedWidth;

        case 'px':
        default:
          return 'mj-column-px-' + parsedWidth;
      }
    }
  }, {
    key: 'getMobileWidth',
    value: function getMobileWidth() {
      var _props3 = this.props,
          mjAttribute = _props3.mjAttribute,
          sibling = _props3.sibling,
          parentWidth = _props3.parentWidth,
          mobileWidth = _props3.mobileWidth;

      var width = mjAttribute('width');

      if (mobileWidth != "mobileWidth") {
        return '100%';
      } else if (width == undefined) {
        return parseInt(100 / sibling) + '%';
      }

      var _helpers$widthParser3 = _mjmlCore.helpers.widthParser(width),
          parsedWidth = _helpers$widthParser3.width,
          unit = _helpers$widthParser3.unit;

      switch (unit) {
        case '%':
          return width;
        case 'px':
        default:
          return parsedWidth / parentWidth + '%';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          mjAttribute = _props4.mjAttribute,
          children = _props4.children,
          sibling = _props4.sibling;

      var width = mjAttribute('width') || 100 / sibling + '%';
      var mjColumnClass = this.getColumnClass();
      var divClasses = (0, _classnames2.default)(mjColumnClass, 'outlook-group-fix', mjAttribute('css-class'));

      return _react2.default.createElement(
        'div',
        {
          className: divClasses,
          'data-class': mjAttribute('css-class'),
          'data-column-width': width,
          'data-vertical-align': this.styles.div.verticalAlign,
          style: this.styles.div },
        _react2.default.createElement(
          'table',
          {
            role: 'presentation',
            cellPadding: '0',
            cellSpacing: '0',
            'data-legacy-background': mjAttribute('background'),
            'data-legacy-border': '0',
            style: this.styles.table,
            width: '100%' },
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.Children.map(children, function (child) {
              return _react2.default.cloneElement(child, { columnElement: true });
            })
          )
        )
      );
    }
  }]);

  return Column;
}(_react.Component)) || _class;

Column.defaultMJMLDefinition = defaultMJMLDefinition;
Column.tagName = tagName;
Column.parentTag = parentTag;
Column.baseStyles = baseStyles;
Column.postRender = postRender;

exports.default = Column;

/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _mjmlCore = __webpack_require__(43);

var _react = __webpack_require__(55);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tagName = 'mj-table';
var parentTag = ['mj-column', 'mj-hero-content'];
var endingTag = true;
var defaultMJMLDefinition = {
  content: '',
  attributes: {
    'align': 'left',
    'cellpadding': '0',
    'cellspacing': '0',
    'color': '#000',
    'container-background-color': null,
    'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
    'font-size': '13px',
    'line-height': '22px',
    'padding-bottom': null,
    'padding-left': null,
    'padding-right': null,
    'padding-top': null,
    'padding': '10px 25px',
    'table-layout': 'auto',
    'vertical-align': null,
    'width': '100%'
  }
};

var Table = (0, _mjmlCore.MJMLElement)(_class = function (_Component) {
  _inherits(Table, _Component);

  function Table() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Table);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Table.__proto__ || Object.getPrototypeOf(Table)).call.apply(_ref, [this].concat(args))), _this), _this.styles = _this.getStyles(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Table, [{
    key: 'getStyles',
    value: function getStyles() {
      var _props = this.props,
          mjAttribute = _props.mjAttribute,
          defaultUnit = _props.defaultUnit;


      return {
        table: {
          cellpadding: mjAttribute('cellspadding'),
          cellspacing: mjAttribute('cellspacing'),
          color: mjAttribute('color'),
          fontFamily: mjAttribute('font-family'),
          fontSize: defaultUnit(mjAttribute('font-size')),
          lineHeight: mjAttribute('line-height'),
          tableLayout: mjAttribute('table-layout')
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          mjAttribute = _props2.mjAttribute,
          mjContent = _props2.mjContent;


      return _react2.default.createElement('table', {
        cellPadding: mjAttribute('cellpadding'),
        cellSpacing: mjAttribute('cellspacing'),
        dangerouslySetInnerHTML: { __html: mjContent() },
        'data-legacy-border': '0',
        style: this.styles.table,
        width: mjAttribute('width') });
    }
  }]);

  return Table;
}(_react.Component)) || _class;

Table.tagName = tagName;
Table.parentTag = parentTag;
Table.endingTag = endingTag;
Table.defaultMJMLDefinition = defaultMJMLDefinition;

exports.default = Table;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (message, element) {
  var line = element.lineNumber,
      tagName = element.tagName;


  return {
    line: line,
    message: message,
    tagName: tagName,
    formattedMessage: "Line " + line + " (" + tagName + ") \u2014 " + message
  };
};

/***/ })

});
//# sourceMappingURL=dependency-mjml.support.js.map