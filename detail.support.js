(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["detail"] = factory();
	else
		root["detail"] = factory();
})(this, function() {
return webpackJsonpdetail([4],{

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

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
              */Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(302);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(307);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(308);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(312);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(337);var _inherits3 = _interopRequireDefault(_inherits2);var _class;

var _react = __webpack_require__(52);var _react2 = _interopRequireDefault(_react);

var _mjmlCore = __webpack_require__(40);

var _mjmlColumn = __webpack_require__(665);var _mjmlColumn2 = _interopRequireDefault(_mjmlColumn);
var _mjmlTable = __webpack_require__(671);var _mjmlTable2 = _interopRequireDefault(_mjmlTable);

var _booleanize = __webpack_require__(672);var _booleanize2 = _interopRequireDefault(_booleanize);
var _falzy = __webpack_require__(674);var _falzy2 = _interopRequireDefault(_falzy);
var _wichevr = __webpack_require__(675);var _wichevr2 = _interopRequireDefault(_wichevr);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qc3giXSwibmFtZXMiOlsidGFnTmFtZSIsInBhcmVudFRhZyIsImVuZGluZ1RhZyIsImRlZmF1bHRNSk1MRGVmaW5pdGlvbiIsIkRFRkFVTFRfREVUQUlMX01BWElNVU1fQ09VTlQiLCJEZXRhaWwiLCJtakF0dHJpYnV0ZSIsInByb3BzIiwidGl0bGUiLCJsYWJlbCIsInZhbHVlIiwiY291bnQiLCJhbGlnbiIsInJldmVyc2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb3JlZ3JvdW5kQ29sb3IiLCJwYXJzZUludCIsImVycm9yIiwid2lkdGgiLCJNYXRoIiwicm91bmQiLCJ0aXRsZUNvbXBvbmVudCIsInZhbHVlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4REEsOEI7O0FBRUE7O0FBRUEseUM7QUFDQSx1Qzs7QUFFQSx3QztBQUNBLDhCO0FBQ0Esa0M7O0FBRUEsSUFBTUEsVUFBVSxXQUFoQjs7QUFFQSxJQUFNQyxZQUFZLENBQUUsY0FBRixFQUFrQixZQUFsQixDQUFsQjs7QUFFQSxJQUFNQyxZQUFZLEtBQWxCOztBQUVBLElBQU1DLHdCQUF3QjtBQUM3QixZQUFXLEVBRGtCO0FBRTdCLGVBQWM7QUFDYixXQUFTLEVBREk7QUFFYixXQUFTLEVBRkk7QUFHYixXQUFTLEVBSEk7QUFJYixXQUFTLENBSkk7QUFLYixXQUFTLE1BTEk7QUFNYixhQUFXLEtBTkU7QUFPYixzQkFBb0IsT0FQUDtBQVFiLHNCQUFvQixPQVJQLEVBRmUsRUFBOUI7Ozs7QUFjQSxJQUFNQywrQkFBK0IsQ0FBckMsQzs7O0FBR01DLE07QUFDSTtBQUNBQyxjQURBLEdBQ2dCLEtBQUtDLEtBRHJCLENBQ0FELFdBREE7Ozs7Ozs7Ozs7O0FBWUosUUFBS0MsS0FaRCxDQUlQQyxLQUpPLFVBSVBBLEtBSk8sQ0FLUEMsS0FMTyxVQUtQQSxLQUxPLENBTVBDLEtBTk8sVUFNUEEsS0FOTyxDQU9QQyxLQVBPLFVBT1BBLEtBUE8sQ0FRUEMsS0FSTyxVQVFQQSxLQVJPLENBU1BDLE9BVE8sVUFTUEEsT0FUTyxDQVVQQyxlQVZPLFVBVVBBLGVBVk8sQ0FXUEMsZUFYTyxVQVdQQSxlQVhPOztBQWNSUCxXQUFRLHVCQUFTQSxLQUFULEVBQWdCQyxLQUFoQixFQUF1QkgsWUFBYSxPQUFiLENBQXZCLEVBQStDQSxZQUFhLE9BQWIsQ0FBL0MsQ0FBUjs7QUFFQUksV0FBUSx1QkFBU0EsS0FBVCxFQUFnQkosWUFBYSxPQUFiLENBQWhCLENBQVI7O0FBRUEsT0FBSSxxQkFBT0ksS0FBUCxDQUFKLEVBQW9CO0FBQ25CRixZQUFRLEVBQVI7QUFDQTs7QUFFRCxPQUFHO0FBQ0ZHLFlBQVFLLFNBQVUsdUJBQVNMLEtBQVQsRUFBZ0JMLFlBQWEsT0FBYixDQUFoQixFQUF3Q0YsNEJBQXhDLENBQVYsQ0FBUjs7QUFFQSxJQUhELENBR0MsT0FBT2EsS0FBUCxFQUFjO0FBQ2ROLFlBQVFQLDRCQUFSO0FBQ0E7O0FBRUQsT0FBSWMsUUFBWUMsS0FBS0MsS0FBTCxDQUFjLE1BQU1ULEtBQVIsR0FBa0IsRUFBOUIsSUFBcUMsRUFBakQsTUFBSjs7QUFFQUMsV0FBUSx1QkFBU0EsS0FBVCxFQUFnQk4sWUFBYSxPQUFiLENBQWhCLENBQVI7O0FBRUFPLGFBQVUsMEJBQVksdUJBQVNBLE9BQVQsRUFBa0JQLFlBQWEsU0FBYixDQUFsQixDQUFaLENBQVY7O0FBRUFRLHFCQUFrQix1QkFBU0EsZUFBVCxFQUEwQlIsWUFBYSxrQkFBYixDQUExQixDQUFsQjs7QUFFQVMscUJBQWtCLHVCQUFTQSxlQUFULEVBQTBCVCxZQUFhLGtCQUFiLENBQTFCLENBQWxCOztBQUVBLE9BQUllLGlCQUFtQjtBQUNqQixZQUFRO0FBQ1AsaUJBQVcsaUJBREo7QUFFUCxrQkFBWSxNQUZMO0FBR1Asb0JBQWMsS0FIUDtBQUlQLHVCQUFpQixPQUpWO0FBS1AsdUJBQWlCLFdBTFY7QUFNUCxtQkFBYVQsS0FOTjtBQU9QLGVBQVNHLGVBUEYsRUFEUzs7O0FBV2ZQLFNBWGUsQ0FBdkI7OztBQWNBLE9BQUljLGlCQUFtQjtBQUNqQixZQUFRO0FBQ1AsaUJBQVcsaUJBREo7QUFFUCxrQkFBWSxNQUZMO0FBR1AsdUJBQWlCLE9BSFY7QUFJUCxtQkFBYVYsS0FKTjtBQUtQLGVBQVNHLGVBTEYsRUFEUzs7O0FBU2ZMLFNBVGUsQ0FBdkI7OztBQVlBLFVBQVM7QUFDTixZQUFRUSxLQURGO0FBRU4seUJBQW1CSixlQUZiOztBQUlOO0FBQ0MsYUFBUUYsS0FEVDtBQUVDLHNCQUFhLE1BRmQ7QUFHQyxhQUFNLE1BSFA7O0FBS0M7QUFDR0MsZ0JBQVNTLGNBQVQsR0FBMEJELGNBRDdCLENBTEQ7O0FBUUM7QUFDR1IsZ0JBQVNRLGNBQVQsR0FBMEJDLGNBRDdCLENBUkQsQ0FKTSxDQUFUOzs7O0FBaUJBLEc7OztBQUdGakIsT0FBT0wsT0FBUCxHQUFpQkEsT0FBakI7QUFDQUssT0FBT0osU0FBUCxHQUFtQkEsU0FBbkI7QUFDQUksT0FBT0gsU0FBUCxHQUFtQkEsU0FBbkI7QUFDQUcsT0FBT0YscUJBQVAsR0FBK0JBLHFCQUEvQixDOztBQUVlRSxNIiwiZmlsZSI6ImRldGFpbC5qc3giLCJzb3VyY2VSb290IjoiL21udC9jL1VzZXJzL3ZpbnNlL0RvY3VtZW50cy9CaXlhaGVyb2VzL2JoL2JoLW1qLWRldGFpbCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IEJpeWFoZXJvZXMgRGV2ZWxvcGVyc1xyXG5cdFx0QGVtYWlsOiBkZXZlbG9wZXJzQGJpeWFoZXJvZXMuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZGV0YWlsXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImRldGFpbC9kZXRhaWwuanN4XCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcImRldGFpbC5qc3hcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJkZXRhaWxcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJCaXlhaGVyb2VzIERldmVsb3BlcnNcIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiUm9ib3QgQml5YWhlcm9lcyA8cm9ib3RAYml5YWhlcm9lcy5jb20+XCIsXHJcblx0XHRcdFx0XCJSaWNoZXZlIFMuIEJlYmVkb3IgPHJpY2hldmUuYmViZWRvckBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJlTWFpbFwiOiBcImRldmVsb3BlcnNAYml5YWhlcm9lcy5jb21cIixcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0JpeWFoZXJvZXMvYmgtbWotZGV0YWlsLmdpdFwiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRCaXlhaGVyb2VzIE1KTUwgRGV0YWlsIENvbXBvbmVudC5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImJvb2xlYW5pemVcIjogXCJib29sZWFuaXplXCIsXHJcblx0XHRcdFwiQ29tcG9uZW50XCI6IFwicmVhY3QuQ29tcG9uZW50XCIsXHJcblx0XHRcdFwiQ29sdW1uXCI6IFwibWptbC1jb2x1bW5cIixcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXHJcblx0XHRcdFwiTUpNTEVsZW1lbnRcIjogXCJtam1sLWNvcmVcIixcclxuXHRcdFx0XCJSZWFjdFwiOiBcInJlYWN0XCIsXHJcblx0XHRcdFwiVGFibGVcIjogXCJtam1sLXRhYmxlXCIsXHJcblx0XHRcdFwid2ljaGV2clwiOiBcIndpY2hldnJcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgTUpNTEVsZW1lbnQgfSBmcm9tIFwibWptbC1jb3JlXCI7XHJcblxyXG5pbXBvcnQgQ29sdW1uIGZyb20gXCJtam1sLWNvbHVtblwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIm1qbWwtdGFibGVcIjtcclxuXHJcbmltcG9ydCBib29sZWFuaXplIGZyb20gXCJib29sZWFuaXplXCI7XHJcbmltcG9ydCBmYWx6eSBmcm9tIFwiZmFsenlcIjtcclxuaW1wb3J0IHdpY2hldnIgZnJvbSBcIndpY2hldnJcIjtcclxuXHJcbmNvbnN0IHRhZ05hbWUgPSBcIm1qLWRldGFpbFwiO1xyXG5cclxuY29uc3QgcGFyZW50VGFnID0gWyBcIm1qLWNvbnRhaW5lclwiLCBcIm1qLXNlY3Rpb25cIiBdO1xyXG5cclxuY29uc3QgZW5kaW5nVGFnID0gZmFsc2U7XHJcblxyXG5jb25zdCBkZWZhdWx0TUpNTERlZmluaXRpb24gPSB7XHJcblx0XCJjb250ZW50XCI6IFwiXCIsXHJcblx0XCJhdHRyaWJ1dGVzXCI6IHtcclxuXHRcdFwidGl0bGVcIjogXCJcIixcclxuXHRcdFwibGFiZWxcIjogXCJcIixcclxuXHRcdFwidmFsdWVcIjogXCJcIixcclxuXHRcdFwiY291bnRcIjogMyxcclxuXHRcdFwiYWxpZ25cIjogXCJsZWZ0XCIsXHJcblx0XHRcInJldmVyc2VcIjogZmFsc2UsXHJcblx0XHRcImJhY2tncm91bmQtY29sb3JcIjogXCJ3aGl0ZVwiLFxyXG5cdFx0XCJmb3JlZ3JvdW5kLWNvbG9yXCI6IFwiYmxhY2tcIlxyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IERFRkFVTFRfREVUQUlMX01BWElNVU1fQ09VTlQgPSAzO1xyXG5cclxuQE1KTUxFbGVtZW50XHJcbmNsYXNzIERldGFpbCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0cmVuZGVyKCApe1xyXG5cdFx0Y29uc3QgeyBtakF0dHJpYnV0ZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRsZXQge1xyXG5cdFx0XHR0aXRsZSxcclxuXHRcdFx0bGFiZWwsXHJcblx0XHRcdHZhbHVlLFxyXG5cdFx0XHRjb3VudCxcclxuXHRcdFx0YWxpZ24sXHJcblx0XHRcdHJldmVyc2UsXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcixcclxuXHRcdFx0Zm9yZWdyb3VuZENvbG9yXHJcblx0XHR9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHR0aXRsZSA9IHdpY2hldnIoIHRpdGxlLCBsYWJlbCwgbWpBdHRyaWJ1dGUoIFwidGl0bGVcIiApLCBtakF0dHJpYnV0ZSggXCJsYWJlbFwiICkgKTtcclxuXHJcblx0XHR2YWx1ZSA9IHdpY2hldnIoIHZhbHVlLCBtakF0dHJpYnV0ZSggXCJ2YWx1ZVwiICkgKTtcclxuXHJcblx0XHRpZiggZmFsenkoIHZhbHVlICkgKXtcclxuXHRcdFx0dGl0bGUgPSBcIlwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRyeXtcclxuXHRcdFx0Y291bnQgPSBwYXJzZUludCggd2ljaGV2ciggY291bnQsIG1qQXR0cmlidXRlKCBcImNvdW50XCIgKSwgREVGQVVMVF9ERVRBSUxfTUFYSU1VTV9DT1VOVCApICk7XHJcblxyXG5cdFx0fWNhdGNoKCBlcnJvciApe1xyXG5cdFx0XHRjb3VudCA9IERFRkFVTFRfREVUQUlMX01BWElNVU1fQ09VTlQ7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHdpZHRoID0gYCR7IE1hdGgucm91bmQoICggMTAwIC8gY291bnQgKSAvIDEwICkgKiAxMCB9JWA7XHJcblxyXG5cdFx0YWxpZ24gPSB3aWNoZXZyKCBhbGlnbiwgbWpBdHRyaWJ1dGUoIFwiYWxpZ25cIiApICk7XHJcblxyXG5cdFx0cmV2ZXJzZSA9IGJvb2xlYW5pemUoIHdpY2hldnIoIHJldmVyc2UsIG1qQXR0cmlidXRlKCBcInJldmVyc2VcIiApICkgKTtcclxuXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3IgPSB3aWNoZXZyKCBiYWNrZ3JvdW5kQ29sb3IsIG1qQXR0cmlidXRlKCBcImJhY2tncm91bmQtY29sb3JcIiApICk7XHJcblxyXG5cdFx0Zm9yZWdyb3VuZENvbG9yID0gd2ljaGV2ciggZm9yZWdyb3VuZENvbG9yLCBtakF0dHJpYnV0ZSggXCJmb3JlZ3JvdW5kLWNvbG9yXCIgKSApO1xyXG5cclxuXHRcdGxldCB0aXRsZUNvbXBvbmVudCA9ICggPHRkXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJwYWRkaW5nXCI6IFwiMHB4IDBweCAwcHggMHB4XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwiZm9udFNpemVcIjogXCIxMXB4XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwiZm9udFdlaWdodFwiOiBcIjUwMFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcImxldHRlclNwYWNpbmdcIjogXCIwLjNweFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcInRleHRUcmFuc2Zvcm1cIjogXCJ1cHBlcmNhc2VcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJ0ZXh0QWxpZ25cIjogYWxpZ24sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwiY29sb3JcIjogZm9yZWdyb3VuZENvbG9yXHJcblx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7IHRpdGxlIH1cclxuXHRcdFx0XHRcdFx0XHQ8L3RkPiApO1xyXG5cclxuXHRcdGxldCB2YWx1ZUNvbXBvbmVudCA9ICggPHRkXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJwYWRkaW5nXCI6IFwiMHB4IDBweCAwcHggMHB4XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwiZm9udFNpemVcIjogXCIxNXB4XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwibGV0dGVyU3BhY2luZ1wiOiBcIjAuM3B4XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwidGV4dEFsaWduXCI6IGFsaWduLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcImNvbG9yXCI6IGZvcmVncm91bmRDb2xvclxyXG5cdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0eyB2YWx1ZSB9XHJcblx0XHRcdFx0XHRcdFx0PC90ZD4gKTtcclxuXHJcblx0XHRyZXR1cm4gKCA8Q29sdW1uXHJcblx0XHRcdFx0XHR3aWR0aD17IHdpZHRoIH1cclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I9eyBiYWNrZ3JvdW5kQ29sb3IgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxUYWJsZVxyXG5cdFx0XHRcdFx0XHRhbGlnbj17IGFsaWduIH1cclxuXHRcdFx0XHRcdFx0dGFibGUtbGF5b3V0PVwiYXV0b1wiXHJcblx0XHRcdFx0XHRcdHdpZHRoPVwiYXV0b1wiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHR7IHJldmVyc2U/IHZhbHVlQ29tcG9uZW50IDogdGl0bGVDb21wb25lbnQgfVxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0eyByZXZlcnNlPyB0aXRsZUNvbXBvbmVudCA6IHZhbHVlQ29tcG9uZW50IH1cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDwvVGFibGU+XHJcblx0XHRcdFx0PC9Db2x1bW4+ICk7XHJcblx0fVxyXG59XHJcblxyXG5EZXRhaWwudGFnTmFtZSA9IHRhZ05hbWU7XHJcbkRldGFpbC5wYXJlbnRUYWcgPSBwYXJlbnRUYWc7XHJcbkRldGFpbC5lbmRpbmdUYWcgPSBlbmRpbmdUYWc7XHJcbkRldGFpbC5kZWZhdWx0TUpNTERlZmluaXRpb24gPSBkZWZhdWx0TUpNTERlZmluaXRpb247XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWw7XHJcbiJdfQ==

/***/ }),

/***/ 360:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 492:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 594:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 606:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[301]);
});
//# sourceMappingURL=detail.support.js.map