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

/***/ 303:
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
              */Object.defineProperty(exports, "__esModule", { value: true });var _jsx2 = __webpack_require__(304);var _jsx3 = _interopRequireDefault(_jsx2);var _getPrototypeOf = __webpack_require__(322);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(326);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(327);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(331);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(340);var _inherits3 = _interopRequireDefault(_inherits2);var _class;

var _react = __webpack_require__(52);var _react2 = _interopRequireDefault(_react);

var _mjmlCore = __webpack_require__(40);

var _mjmlColumn = __webpack_require__(669);var _mjmlColumn2 = _interopRequireDefault(_mjmlColumn);
var _mjmlTable = __webpack_require__(675);var _mjmlTable2 = _interopRequireDefault(_mjmlTable);

var _booleanize = __webpack_require__(676);var _booleanize2 = _interopRequireDefault(_booleanize);
var _falzy = __webpack_require__(678);var _falzy2 = _interopRequireDefault(_falzy);
var _wichevr = __webpack_require__(679);var _wichevr2 = _interopRequireDefault(_wichevr);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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


Detail = (0, _mjmlCore.MJMLElement)(_class = function (_PureComponent) {(0, _inherits3.default)(Detail, _PureComponent);function Detail() {(0, _classCallCheck3.default)(this, Detail);return (0, _possibleConstructorReturn3.default)(this, (Detail.__proto__ || (0, _getPrototypeOf2.default)(Detail)).apply(this, arguments));}(0, _createClass3.default)(Detail, [{ key: "resolve", value: function resolve(
		property) {var
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

			return {
				"title": title,
				"value": value,
				"align": align,
				"width": width,
				"reverse": reverse,
				"backgroundColor": backgroundColor,
				"foregroundColor": foregroundColor };

		} }, { key: "componentWillMount", value: function componentWillMount()

		{
			this.setState({ "data": this.resolve(this.props) });
		} }, { key: "componentWillReceiveProps", value: function componentWillReceiveProps(

		property) {
			this.setState({ "data": this.resolve(property) });
		} }, { key: "render", value: function render()

		{var _state$data =




			this.state.data,title = _state$data.title,value = _state$data.value,align = _state$data.align,width = _state$data.width,reverse = _state$data.reverse,backgroundColor = _state$data.backgroundColor,foregroundColor = _state$data.foregroundColor;

			var titleComponent = (0, _jsx3.default)("td", { style:

				{
					"padding": "0px 0px 0px 0px",
					"fontSize": "11px",
					"fontWeight": "500",
					"letterSpacing": "0.3px",
					"textTransform": "uppercase",
					"textAlign": align,
					"color": foregroundColor } }, void 0,


			title);



			var valueComponent = (0, _jsx3.default)("td", { style:

				{
					"padding": "0px 0px 0px 0px",
					"fontSize": "15px",
					"letterSpacing": "0.3px",
					"textAlign": align,
					"color": foregroundColor } }, void 0,


			value);



			return (0, _jsx3.default)(_mjmlColumn2.default, { width:

				width, "background-color":
				backgroundColor }, void 0, (0, _jsx3.default)(_mjmlTable2.default, { align:


				align, "table-layout":
				"auto", width:
				"auto" }, void 0, (0, _jsx3.default)("tr", {}, void 0,


			reverse ? valueComponent : titleComponent), (0, _jsx3.default)("tr", {}, void 0,


			reverse ? titleComponent : valueComponent)));




		} }]);return Detail;}(_react.PureComponent)) || _class;


Detail.tagName = tagName;
Detail.parentTag = parentTag;
Detail.endingTag = endingTag;
Detail.defaultMJMLDefinition = defaultMJMLDefinition;exports.default =

Detail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qc3giXSwibmFtZXMiOlsidGFnTmFtZSIsInBhcmVudFRhZyIsImVuZGluZ1RhZyIsImRlZmF1bHRNSk1MRGVmaW5pdGlvbiIsIkRFRkFVTFRfREVUQUlMX01BWElNVU1fQ09VTlQiLCJEZXRhaWwiLCJwcm9wZXJ0eSIsIm1qQXR0cmlidXRlIiwicHJvcHMiLCJ0aXRsZSIsImxhYmVsIiwidmFsdWUiLCJjb3VudCIsImFsaWduIiwicmV2ZXJzZSIsImJhY2tncm91bmRDb2xvciIsImZvcmVncm91bmRDb2xvciIsInBhcnNlSW50IiwiZXJyb3IiLCJ3aWR0aCIsIk1hdGgiLCJyb3VuZCIsInNldFN0YXRlIiwicmVzb2x2ZSIsInN0YXRlIiwiZGF0YSIsInRpdGxlQ29tcG9uZW50IiwidmFsdWVDb21wb25lbnQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQSw4Qjs7QUFFQTs7QUFFQSx5QztBQUNBLHVDOztBQUVBLHdDO0FBQ0EsOEI7QUFDQSxrQzs7QUFFQSxJQUFNQSxVQUFVLFdBQWhCOztBQUVBLElBQU1DLFlBQVksQ0FBRSxjQUFGLEVBQWtCLFlBQWxCLENBQWxCOztBQUVBLElBQU1DLFlBQVksS0FBbEI7O0FBRUEsSUFBTUMsd0JBQXdCO0FBQzdCLFlBQVcsRUFEa0I7QUFFN0IsZUFBYztBQUNiLFdBQVMsRUFESTtBQUViLFdBQVMsRUFGSTtBQUdiLFdBQVMsRUFISTtBQUliLFdBQVMsQ0FKSTtBQUtiLFdBQVMsTUFMSTtBQU1iLGFBQVcsS0FORTtBQU9iLHNCQUFvQixPQVBQO0FBUWIsc0JBQW9CLE9BUlAsRUFGZSxFQUE5Qjs7OztBQWNBLElBQU1DLCtCQUErQixDQUFyQyxDOzs7QUFHTUMsTTtBQUNJQyxVLEVBQVU7QUFDVkMsY0FEVSxHQUNNLEtBQUtDLEtBRFgsQ0FDVkQsV0FEVTs7Ozs7O0FBT2QsUUFBS0MsS0FQ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Q0FLLE9BQU9KLFNBQVAsR0FBbUJBLFNBQW5CO0FBQ0FJLE9BQU9ILFNBQVAsR0FBbUJBLFNBQW5CO0FBQ0FHLE9BQU9GLHFCQUFQLEdBQStCQSxxQkFBL0IsQzs7QUFFZUUsTSIsImZpbGUiOiJkZXRhaWwuanN4Iiwic291cmNlUm9vdCI6Ii9ob21lL3JpY2hldmUvYmgvYmgtbWotZGV0YWlsIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IEJpeWFoZXJvZXMgRGV2ZWxvcGVyc1xuXHRcdEBlbWFpbDogZGV2ZWxvcGVyc0BiaXlhaGVyb2VzLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZGV0YWlsXCIsXG5cdFx0XHRcInBhdGhcIjogXCJkZXRhaWwvZGV0YWlsLmpzeFwiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZGV0YWlsLmpzeFwiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJkZXRhaWxcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiQml5YWhlcm9lcyBEZXZlbG9wZXJzXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiUm9ib3QgQml5YWhlcm9lcyA8cm9ib3RAYml5YWhlcm9lcy5jb20+XCIsXG5cdFx0XHRcdFwiUmljaGV2ZSBTLiBCZWJlZG9yIDxyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJlTWFpbFwiOiBcImRldmVsb3BlcnNAYml5YWhlcm9lcy5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9CaXlhaGVyb2VzL2JoLW1qLWRldGFpbC5naXRcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0Qml5YWhlcm9lcyBNSk1MIERldGFpbCBDb21wb25lbnQuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImJvb2xlYW5pemVcIjogXCJib29sZWFuaXplXCIsXG5cdFx0XHRcIkNvbXBvbmVudFwiOiBcInJlYWN0LkNvbXBvbmVudFwiLFxuXHRcdFx0XCJDb2x1bW5cIjogXCJtam1sLWNvbHVtblwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcIk1KTUxFbGVtZW50XCI6IFwibWptbC1jb3JlXCIsXG5cdFx0XHRcIlJlYWN0XCI6IFwicmVhY3RcIixcblx0XHRcdFwiVGFibGVcIjogXCJtam1sLXRhYmxlXCIsXG5cdFx0XHRcIndpY2hldnJcIjogXCJ3aWNoZXZyXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgTUpNTEVsZW1lbnQgfSBmcm9tIFwibWptbC1jb3JlXCI7XG5cbmltcG9ydCBDb2x1bW4gZnJvbSBcIm1qbWwtY29sdW1uXCI7XG5pbXBvcnQgVGFibGUgZnJvbSBcIm1qbWwtdGFibGVcIjtcblxuaW1wb3J0IGJvb2xlYW5pemUgZnJvbSBcImJvb2xlYW5pemVcIjtcbmltcG9ydCBmYWx6eSBmcm9tIFwiZmFsenlcIjtcbmltcG9ydCB3aWNoZXZyIGZyb20gXCJ3aWNoZXZyXCI7XG5cbmNvbnN0IHRhZ05hbWUgPSBcIm1qLWRldGFpbFwiO1xuXG5jb25zdCBwYXJlbnRUYWcgPSBbIFwibWotY29udGFpbmVyXCIsIFwibWotc2VjdGlvblwiIF07XG5cbmNvbnN0IGVuZGluZ1RhZyA9IGZhbHNlO1xuXG5jb25zdCBkZWZhdWx0TUpNTERlZmluaXRpb24gPSB7XG5cdFwiY29udGVudFwiOiBcIlwiLFxuXHRcImF0dHJpYnV0ZXNcIjoge1xuXHRcdFwidGl0bGVcIjogXCJcIixcblx0XHRcImxhYmVsXCI6IFwiXCIsXG5cdFx0XCJ2YWx1ZVwiOiBcIlwiLFxuXHRcdFwiY291bnRcIjogMyxcblx0XHRcImFsaWduXCI6IFwibGVmdFwiLFxuXHRcdFwicmV2ZXJzZVwiOiBmYWxzZSxcblx0XHRcImJhY2tncm91bmQtY29sb3JcIjogXCJ3aGl0ZVwiLFxuXHRcdFwiZm9yZWdyb3VuZC1jb2xvclwiOiBcImJsYWNrXCJcblx0fVxufTtcblxuY29uc3QgREVGQVVMVF9ERVRBSUxfTUFYSU1VTV9DT1VOVCA9IDM7XG5cbkBNSk1MRWxlbWVudFxuY2xhc3MgRGV0YWlsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cdHJlc29sdmUoIHByb3BlcnR5ICl7XG5cdFx0Y29uc3QgeyBtakF0dHJpYnV0ZSB9ID0gdGhpcy5wcm9wcztcblxuXHRcdGxldCB7XG5cdFx0XHR0aXRsZSwgbGFiZWwsIHZhbHVlLFxuXHRcdFx0Y291bnQsIGFsaWduLCByZXZlcnNlLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yLCBmb3JlZ3JvdW5kQ29sb3Jcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdHRpdGxlID0gd2ljaGV2ciggdGl0bGUsIGxhYmVsLCBtakF0dHJpYnV0ZSggXCJ0aXRsZVwiICksIG1qQXR0cmlidXRlKCBcImxhYmVsXCIgKSApO1xuXG5cdFx0dmFsdWUgPSB3aWNoZXZyKCB2YWx1ZSwgbWpBdHRyaWJ1dGUoIFwidmFsdWVcIiApICk7XG5cblx0XHRpZiggZmFsenkoIHZhbHVlICkgKXtcblx0XHRcdHRpdGxlID0gXCJcIjtcblx0XHR9XG5cblx0XHR0cnl7XG5cdFx0XHRjb3VudCA9IHBhcnNlSW50KCB3aWNoZXZyKCBjb3VudCwgbWpBdHRyaWJ1dGUoIFwiY291bnRcIiApLCBERUZBVUxUX0RFVEFJTF9NQVhJTVVNX0NPVU5UICkgKTtcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdGNvdW50ID0gREVGQVVMVF9ERVRBSUxfTUFYSU1VTV9DT1VOVDtcblx0XHR9XG5cblx0XHRsZXQgd2lkdGggPSBgJHsgTWF0aC5yb3VuZCggKCAxMDAgLyBjb3VudCApIC8gMTAgKSAqIDEwIH0lYDtcblxuXHRcdGFsaWduID0gd2ljaGV2ciggYWxpZ24sIG1qQXR0cmlidXRlKCBcImFsaWduXCIgKSApO1xuXG5cdFx0cmV2ZXJzZSA9IGJvb2xlYW5pemUoIHdpY2hldnIoIHJldmVyc2UsIG1qQXR0cmlidXRlKCBcInJldmVyc2VcIiApICkgKTtcblxuXHRcdGJhY2tncm91bmRDb2xvciA9IHdpY2hldnIoIGJhY2tncm91bmRDb2xvciwgbWpBdHRyaWJ1dGUoIFwiYmFja2dyb3VuZC1jb2xvclwiICkgKTtcblxuXHRcdGZvcmVncm91bmRDb2xvciA9IHdpY2hldnIoIGZvcmVncm91bmRDb2xvciwgbWpBdHRyaWJ1dGUoIFwiZm9yZWdyb3VuZC1jb2xvclwiICkgKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRcInRpdGxlXCI6IHRpdGxlLFxuXHRcdFx0XCJ2YWx1ZVwiOiB2YWx1ZSxcblx0XHRcdFwiYWxpZ25cIjogYWxpZ24sXG5cdFx0XHRcIndpZHRoXCI6IHdpZHRoLFxuXHRcdFx0XCJyZXZlcnNlXCI6IHJldmVyc2UsXG5cdFx0XHRcImJhY2tncm91bmRDb2xvclwiOiBiYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRcImZvcmVncm91bmRDb2xvclwiOiBmb3JlZ3JvdW5kQ29sb3Jcblx0XHR9O1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCApe1xuXHRcdHRoaXMuc2V0U3RhdGUoIHsgXCJkYXRhXCI6IHRoaXMucmVzb2x2ZSggdGhpcy5wcm9wcyApIH0gKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoIHByb3BlcnR5ICl7XG5cdFx0dGhpcy5zZXRTdGF0ZSggeyBcImRhdGFcIjogdGhpcy5yZXNvbHZlKCBwcm9wZXJ0eSApIH0gKTtcblx0fVxuXG5cdHJlbmRlciggKXtcblx0XHRsZXQge1xuXHRcdFx0dGl0bGUsIHZhbHVlLFxuXHRcdFx0YWxpZ24sIHdpZHRoLCByZXZlcnNlLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yLCBmb3JlZ3JvdW5kQ29sb3Jcblx0XHR9ID0gdGhpcy5zdGF0ZS5kYXRhO1xuXG5cdFx0bGV0IHRpdGxlQ29tcG9uZW50ID0gKFxuXHRcdFx0PHRkXG5cdFx0XHRcdHN0eWxlPXsge1xuXHRcdFx0XHRcdFwicGFkZGluZ1wiOiBcIjBweCAwcHggMHB4IDBweFwiLFxuXHRcdFx0XHRcdFwiZm9udFNpemVcIjogXCIxMXB4XCIsXG5cdFx0XHRcdFx0XCJmb250V2VpZ2h0XCI6IFwiNTAwXCIsXG5cdFx0XHRcdFx0XCJsZXR0ZXJTcGFjaW5nXCI6IFwiMC4zcHhcIixcblx0XHRcdFx0XHRcInRleHRUcmFuc2Zvcm1cIjogXCJ1cHBlcmNhc2VcIixcblx0XHRcdFx0XHRcInRleHRBbGlnblwiOiBhbGlnbixcblx0XHRcdFx0XHRcImNvbG9yXCI6IGZvcmVncm91bmRDb2xvclxuXHRcdFx0XHR9IH1cblx0XHRcdD5cblx0XHRcdFx0eyB0aXRsZSB9XG5cdFx0XHQ8L3RkPlxuXHRcdCk7XG5cblx0XHRsZXQgdmFsdWVDb21wb25lbnQgPSAoXG5cdFx0XHQ8dGRcblx0XHRcdFx0c3R5bGU9eyB7XG5cdFx0XHRcdFx0XCJwYWRkaW5nXCI6IFwiMHB4IDBweCAwcHggMHB4XCIsXG5cdFx0XHRcdFx0XCJmb250U2l6ZVwiOiBcIjE1cHhcIixcblx0XHRcdFx0XHRcImxldHRlclNwYWNpbmdcIjogXCIwLjNweFwiLFxuXHRcdFx0XHRcdFwidGV4dEFsaWduXCI6IGFsaWduLFxuXHRcdFx0XHRcdFwiY29sb3JcIjogZm9yZWdyb3VuZENvbG9yXG5cdFx0XHRcdH0gfVxuXHRcdFx0PlxuXHRcdFx0XHR7IHZhbHVlIH1cblx0XHRcdDwvdGQ+XG5cdFx0KTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8Q29sdW1uXG5cdFx0XHRcdHdpZHRoPXsgd2lkdGggfVxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yPXsgYmFja2dyb3VuZENvbG9yIH1cblx0XHRcdD5cblx0XHRcdFx0PFRhYmxlXG5cdFx0XHRcdFx0YWxpZ249eyBhbGlnbiB9XG5cdFx0XHRcdFx0dGFibGUtbGF5b3V0PVwiYXV0b1wiXG5cdFx0XHRcdFx0d2lkdGg9XCJhdXRvXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdHsgcmV2ZXJzZT8gdmFsdWVDb21wb25lbnQgOiB0aXRsZUNvbXBvbmVudCB9XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHR7IHJldmVyc2U/IHRpdGxlQ29tcG9uZW50IDogdmFsdWVDb21wb25lbnQgfVxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdDwvVGFibGU+XG5cdFx0XHQ8L0NvbHVtbj5cblx0XHQpO1xuXHR9XG59XG5cbkRldGFpbC50YWdOYW1lID0gdGFnTmFtZTtcbkRldGFpbC5wYXJlbnRUYWcgPSBwYXJlbnRUYWc7XG5EZXRhaWwuZW5kaW5nVGFnID0gZW5kaW5nVGFnO1xuRGV0YWlsLmRlZmF1bHRNSk1MRGVmaW5pdGlvbiA9IGRlZmF1bHRNSk1MRGVmaW5pdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsO1xuIl19

/***/ }),

/***/ 363:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 434:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 495:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 597:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 609:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[303]);
});
//# sourceMappingURL=detail.support.js.map