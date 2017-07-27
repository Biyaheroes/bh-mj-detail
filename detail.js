"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Biyaheroes Developers
              		@email: developers@biyaheroes.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "detail",
              			"path": "detail/detail.jsx",
              			"file": "detail.jsx",
              			"module": "detail",
              			"author": "Biyaheroes Developers",
              			"contributors": [
              				"Robot Biyaheroes <robot@biyaheroes.com>",
              				"Richeve S. Bebedor <richeve.bebedor@gmail.com>"
              			],
              			"eMail": "developers@biyaheroes.com",
              			"repository": "https://github.com/Biyaheroes/bh-mj-detail.git",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Biyaheroes MJML Detail Component.
              	@end-module-documentation
              
              	@include:
              		{
              			"booleanize": "booleanize",
              			"Component": "react.Component",
              			"Column": "mjml-column",
              			"falzy": "falzy",
              			"MJMLElement": "mjml-core",
              			"React": "react",
              			"Table": "mjml-table",
              			"wichevr": "wichevr"
              		}
              	@end-include
              */Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);var _class;

var _react = require("react");var _react2 = _interopRequireDefault(_react);

var _mjmlCore = require("mjml-core");

var _mjmlColumn = require("mjml-column");var _mjmlColumn2 = _interopRequireDefault(_mjmlColumn);
var _mjmlTable = require("mjml-table");var _mjmlTable2 = _interopRequireDefault(_mjmlTable);

var _booleanize = require("booleanize");var _booleanize2 = _interopRequireDefault(_booleanize);
var _falzy = require("falzy");var _falzy2 = _interopRequireDefault(_falzy);
var _wichevr = require("wichevr");var _wichevr2 = _interopRequireDefault(_wichevr);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var tagName = "mj-detail";

var parentTag = ["mj-container", "mj-section"];

var endingTag = false;

var defaultMJMLDefinition = {
	"content": "",
	"attributes": {
		"title": "",
		"label": "",
		"value": "",
		"count": 3,
		"align": "left",
		"reverse": false,
		"background-color": "white",
		"foreground-color": "black" } };



var DEFAULT_DETAIL_MAXIMUM_COUNT = 3;var


Detail = (0, _mjmlCore.MJMLElement)(_class = function (_Component) {(0, _inherits3.default)(Detail, _Component);function Detail() {(0, _classCallCheck3.default)(this, Detail);return (0, _possibleConstructorReturn3.default)(this, (Detail.__proto__ || (0, _getPrototypeOf2.default)(Detail)).apply(this, arguments));}(0, _createClass3.default)(Detail, [{ key: "render", value: function render()
		{var
			mjAttribute = this.props.mjAttribute;var _props =










			this.props,title = _props.title,label = _props.label,value = _props.value,count = _props.count,align = _props.align,reverse = _props.reverse,backgroundColor = _props.backgroundColor,foregroundColor = _props.foregroundColor;

			title = (0, _wichevr2.default)(title, label, mjAttribute("title"), mjAttribute("label"));

			value = (0, _wichevr2.default)(value, mjAttribute("value"));

			if ((0, _falzy2.default)(value)) {
				title = "";
			}

			try {
				count = parseInt((0, _wichevr2.default)(count, mjAttribute("count"), DEFAULT_DETAIL_MAXIMUM_COUNT));

			} catch (error) {
				count = DEFAULT_DETAIL_MAXIMUM_COUNT;
			}

			var width = Math.round(100 / count / 10) * 10 + "%";

			align = (0, _wichevr2.default)(align, mjAttribute("align"));

			reverse = (0, _booleanize2.default)((0, _wichevr2.default)(reverse, mjAttribute("reverse")));

			backgroundColor = (0, _wichevr2.default)(backgroundColor, mjAttribute("background-color"));

			foregroundColor = (0, _wichevr2.default)(foregroundColor, mjAttribute("foreground-color"));

			var titleComponent = _react2.default.createElement("td", {
					style: {
						"padding": "0px 0px 0px 0px",
						"fontSize": "11px",
						"fontWeight": "500",
						"letterSpacing": "0.3px",
						"textTransform": "uppercase",
						"textAlign": align,
						"color": foregroundColor } },


				title);


			var valueComponent = _react2.default.createElement("td", {
					style: {
						"padding": "0px 0px 0px 0px",
						"fontSize": "15px",
						"letterSpacing": "0.3px",
						"textAlign": align,
						"color": foregroundColor } },


				value);


			return _react2.default.createElement(_mjmlColumn2.default, {
					width: width,
					"background-color": backgroundColor },

				_react2.default.createElement(_mjmlTable2.default, {
						align: align,
						"table-layout": "auto",
						width: "auto" },

					_react2.default.createElement("tr", null,
						reverse ? valueComponent : titleComponent),

					_react2.default.createElement("tr", null,
						reverse ? titleComponent : valueComponent)));



		} }]);return Detail;}(_react.Component)) || _class;


Detail.tagName = tagName;
Detail.parentTag = parentTag;
Detail.endingTag = endingTag;
Detail.defaultMJMLDefinition = defaultMJMLDefinition;exports.default =

Detail;

//# sourceMappingURL=detail.js.map