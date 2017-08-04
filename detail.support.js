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

/***/ 312:
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
              */

//: @ignore:
Object.defineProperty(exports, "__esModule", { value: true });var _jsx2 = __webpack_require__(313);var _jsx3 = _interopRequireDefault(_jsx2);var _getPrototypeOf = __webpack_require__(331);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(335);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(336);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(340);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(349);var _inherits3 = _interopRequireDefault(_inherits2);var _class;
//: @end-ignore
__webpack_require__(357);
var _jquery = __webpack_require__(195);var _jquery2 = _interopRequireDefault(_jquery);
var _react = __webpack_require__(55);var _react2 = _interopRequireDefault(_react);
var _reactDom = __webpack_require__(377);var _reactDom2 = _interopRequireDefault(_reactDom);

var _mjmlCore = __webpack_require__(43);

var _mjmlColumn = __webpack_require__(684);var _mjmlColumn2 = _interopRequireDefault(_mjmlColumn);
var _mjmlTable = __webpack_require__(690);var _mjmlTable2 = _interopRequireDefault(_mjmlTable);

var _booleanize = __webpack_require__(691);var _booleanize2 = _interopRequireDefault(_booleanize);
var _falzy = __webpack_require__(693);var _falzy2 = _interopRequireDefault(_falzy);
var _wichevr = __webpack_require__(694);var _wichevr2 = _interopRequireDefault(_wichevr);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var tagName = "mj-detail";

var parentTag = ["mj-container", "mj-section"];

var endingTag = false;

var defaultMJMLDefinition = {
	"content": "",
	"attributes": {
		"name": "",
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






			this.props,name = _props.name,title = _props.title,label = _props.label,value = _props.value,count = _props.count,align = _props.align,reverse = _props.reverse,backgroundColor = _props.backgroundColor,foregroundColor = _props.foregroundColor;

			name = (0, _wichevr2.default)(name, mjAttribute("name"));

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
				"name": name,
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
				backgroundColor }, void 0, (0, _jsx3.default)(_mjmlTable2.default, { "css-class":


				"detail", align:
				align, "table-layout":
				"auto", width:
				"auto" }, void 0, (0, _jsx3.default)("tr", {}, void 0,


			reverse ? valueComponent : titleComponent), (0, _jsx3.default)("tr", {}, void 0,


			reverse ? titleComponent : valueComponent)));




		} }, { key: "componentDidMount", value: function componentDidMount()

		{
			var component = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this)).
			addClass("bh-mj-detail").
			addClass(this.state.data.name).
			append("\n\t\t\t\t<link\n\t\t\t\t\tclass=\"bh-mj-detail style\"\n\t\t\t\t\trel=\"stylesheet\"\n\t\t\t\t\ttype=\"text/css\"\n\t\t\t\t\thref=\"https://unpkg.com/bh-mj-detail/detail.css\"\n\t\t\t\t/>\n\t\t\t").







			css("width", this.state.data.width);

			/*;
                                        	@note:
                                        		This is a fix for excess comma during component rendering.
                                        	@end-note
                                        */
			var tableBody = (0, _jquery2.default)(".detail table > tbody", component).detach();
			(0, _jquery2.default)(".detail table", component).empty().append(tableBody);
		} }, { key: "componentWillUnmount", value: function componentWillUnmount()

		{
			(0, _jquery2.default)(".bh-mj-detail.style").remove();
		} }]);return Detail;}(_react.PureComponent)) || _class;


Detail.tagName = tagName;
Detail.parentTag = parentTag;
Detail.endingTag = endingTag;
Detail.defaultMJMLDefinition = defaultMJMLDefinition;exports.default =

Detail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5tb2R1bGUuanN4Il0sIm5hbWVzIjpbInRhZ05hbWUiLCJwYXJlbnRUYWciLCJlbmRpbmdUYWciLCJkZWZhdWx0TUpNTERlZmluaXRpb24iLCJERUZBVUxUX0RFVEFJTF9NQVhJTVVNX0NPVU5UIiwiRGV0YWlsIiwicHJvcGVydHkiLCJtakF0dHJpYnV0ZSIsInByb3BzIiwibmFtZSIsInRpdGxlIiwibGFiZWwiLCJ2YWx1ZSIsImNvdW50IiwiYWxpZ24iLCJyZXZlcnNlIiwiYmFja2dyb3VuZENvbG9yIiwiZm9yZWdyb3VuZENvbG9yIiwicGFyc2VJbnQiLCJlcnJvciIsIndpZHRoIiwiTWF0aCIsInJvdW5kIiwic2V0U3RhdGUiLCJyZXNvbHZlIiwic3RhdGUiLCJkYXRhIiwidGl0bGVDb21wb25lbnQiLCJ2YWx1ZUNvbXBvbmVudCIsImNvbXBvbmVudCIsImZpbmRET01Ob2RlIiwiYWRkQ2xhc3MiLCJhcHBlbmQiLCJjc3MiLCJ0YWJsZUJvZHkiLCJkZXRhY2giLCJlbXB0eSIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOERBOztBQUVBO0FBREE7QUFHQSxnQztBQUNBLDhCO0FBQ0EscUM7O0FBRUE7O0FBRUEseUM7QUFDQSx1Qzs7QUFFQSx3QztBQUNBLDhCO0FBQ0Esa0M7O0FBRUEsSUFBTUEsVUFBVSxXQUFoQjs7QUFFQSxJQUFNQyxZQUFZLENBQUUsY0FBRixFQUFrQixZQUFsQixDQUFsQjs7QUFFQSxJQUFNQyxZQUFZLEtBQWxCOztBQUVBLElBQU1DLHdCQUF3QjtBQUM3QixZQUFXLEVBRGtCO0FBRTdCLGVBQWM7QUFDYixVQUFRLEVBREs7QUFFYixXQUFTLEVBRkk7QUFHYixXQUFTLEVBSEk7QUFJYixXQUFTLEVBSkk7QUFLYixXQUFTLENBTEk7QUFNYixXQUFTLE1BTkk7QUFPYixhQUFXLEtBUEU7QUFR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QUFpQixPQUhWO0FBSVAsa0JBQWFkLEtBSk47QUFLUCxjQUFTRyxlQUxGLEVBRk47OztBQVVBTCxRQVZBLENBQUo7Ozs7QUFjQTs7QUFFVVEsU0FGVjtBQUdxQkosbUJBSHJCOzs7QUFNYSxZQU5iO0FBT1dGLFNBUFg7QUFRZ0IsVUFSaEI7QUFTUyxVQVRUOzs7QUFZTUMsYUFBU2EsY0FBVCxHQUEwQkQsY0FaaEM7OztBQWVNWixhQUFTWSxjQUFULEdBQTBCQyxjQWZoQzs7Ozs7QUFvQkEsRzs7QUFFbUI7QUFDbkIsT0FBSUMsWUFBWSxzQkFBRyxtQkFBU0MsV0FBVCxDQUFzQixJQUF0QixDQUFIO0FBQ2RDLFdBRGMsQ0FDSixjQURJO0FBRWRBLFdBRmMsQ0FFSixLQUFLTixLQUFMLENBQVdDLElBQVgsQ0FBZ0JqQixJQUZaO0FBR2R1QixTQUhjOzs7Ozs7OztBQVdkQyxNQVhjLENBV1QsT0FYUyxFQVdBLEtBQUtSLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQk4sS0FYaEIsQ0FBaEI7O0FBYUE7Ozs7O0FBS0EsT0FBSWMsWUFBWSxzQkFBRyx1QkFBSCxFQUE0QkwsU0FBNUIsRUFBd0NNLE1BQXhDLEVBQWhCO0FBQ0EseUJBQUcsZUFBSCxFQUFvQk4sU0FBcEIsRUFBZ0NPLEtBQWhDLEdBQXlDSixNQUF6QyxDQUFpREUsU0FBakQ7QUFDQSxHOztBQUVzQjtBQUN0Qix5QkFBRyxxQkFBSCxFQUEyQkcsTUFBM0I7QUFDQSxHOzs7QUFHRmhDLE9BQU9MLE9BQVAsR0FBaUJBLE9BQWpCO0FBQ0FLLE9BQU9KLFNBQVAsR0FBbUJBLFNBQW5CO0FBQ0FJLE9BQU9ILFNBQVAsR0FBbUJBLFNBQW5CO0FBQ0FHLE9BQU9GLHFCQUFQLEdBQStCQSxxQkFBL0IsQzs7QUFFZUUsTSIsImZpbGUiOiJkZXRhaWwubW9kdWxlLmpzeCIsInNvdXJjZVJvb3QiOiIvaG9tZS9yaWNoZXZlL2JoL2JoLW1qLWRldGFpbCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBCaXlhaGVyb2VzIERldmVsb3BlcnNcblx0XHRAZW1haWw6IGRldmVsb3BlcnNAYml5YWhlcm9lcy5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImRldGFpbFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZGV0YWlsL2RldGFpbC5qc3hcIixcblx0XHRcdFwiZmlsZVwiOiBcImRldGFpbC5qc3hcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZGV0YWlsXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIkJpeWFoZXJvZXMgRGV2ZWxvcGVyc1wiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIlJvYm90IEJpeWFoZXJvZXMgPHJvYm90QGJpeWFoZXJvZXMuY29tPlwiLFxuXHRcdFx0XHRcIlJpY2hldmUgUy4gQmViZWRvciA8cmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJkZXZlbG9wZXJzQGJpeWFoZXJvZXMuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vQml5YWhlcm9lcy9iaC1tai1kZXRhaWwuZ2l0XCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEJpeWFoZXJvZXMgTUpNTCBEZXRhaWwgQ29tcG9uZW50LlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJib29sZWFuaXplXCI6IFwiYm9vbGVhbml6ZVwiLFxuXHRcdFx0XCJDb21wb25lbnRcIjogXCJyZWFjdC5Db21wb25lbnRcIixcblx0XHRcdFwiQ29sdW1uXCI6IFwibWptbC1jb2x1bW5cIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJNSk1MRWxlbWVudFwiOiBcIm1qbWwtY29yZVwiLFxuXHRcdFx0XCJSZWFjdFwiOiBcInJlYWN0XCIsXG5cdFx0XHRcIlRhYmxlXCI6IFwibWptbC10YWJsZVwiLFxuXHRcdFx0XCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbi8vOiBAaWdub3JlOlxuaW1wb3J0IFwiLi9kZXRhaWwuc2Nzc1wiO1xuLy86IEBlbmQtaWdub3JlXG5cbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5pbXBvcnQgeyBNSk1MRWxlbWVudCB9IGZyb20gXCJtam1sLWNvcmVcIjtcblxuaW1wb3J0IENvbHVtbiBmcm9tIFwibWptbC1jb2x1bW5cIjtcbmltcG9ydCBUYWJsZSBmcm9tIFwibWptbC10YWJsZVwiO1xuXG5pbXBvcnQgYm9vbGVhbml6ZSBmcm9tIFwiYm9vbGVhbml6ZVwiO1xuaW1wb3J0IGZhbHp5IGZyb20gXCJmYWx6eVwiO1xuaW1wb3J0IHdpY2hldnIgZnJvbSBcIndpY2hldnJcIjtcblxuY29uc3QgdGFnTmFtZSA9IFwibWotZGV0YWlsXCI7XG5cbmNvbnN0IHBhcmVudFRhZyA9IFsgXCJtai1jb250YWluZXJcIiwgXCJtai1zZWN0aW9uXCIgXTtcblxuY29uc3QgZW5kaW5nVGFnID0gZmFsc2U7XG5cbmNvbnN0IGRlZmF1bHRNSk1MRGVmaW5pdGlvbiA9IHtcblx0XCJjb250ZW50XCI6IFwiXCIsXG5cdFwiYXR0cmlidXRlc1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwiXCIsXG5cdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFwibGFiZWxcIjogXCJcIixcblx0XHRcInZhbHVlXCI6IFwiXCIsXG5cdFx0XCJjb3VudFwiOiAzLFxuXHRcdFwiYWxpZ25cIjogXCJsZWZ0XCIsXG5cdFx0XCJyZXZlcnNlXCI6IGZhbHNlLFxuXHRcdFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIndoaXRlXCIsXG5cdFx0XCJmb3JlZ3JvdW5kLWNvbG9yXCI6IFwiYmxhY2tcIlxuXHR9XG59O1xuXG5jb25zdCBERUZBVUxUX0RFVEFJTF9NQVhJTVVNX0NPVU5UID0gMztcblxuQE1KTUxFbGVtZW50XG5jbGFzcyBEZXRhaWwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblx0cmVzb2x2ZSggcHJvcGVydHkgKXtcblx0XHRjb25zdCB7IG1qQXR0cmlidXRlIH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0bGV0IHtcblx0XHRcdG5hbWUsXG5cdFx0XHR0aXRsZSwgbGFiZWwsIHZhbHVlLFxuXHRcdFx0Y291bnQsIGFsaWduLCByZXZlcnNlLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yLCBmb3JlZ3JvdW5kQ29sb3Jcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdG5hbWUgPSB3aWNoZXZyKCBuYW1lLCBtakF0dHJpYnV0ZSggXCJuYW1lXCIgKSApO1xuXG5cdFx0dGl0bGUgPSB3aWNoZXZyKCB0aXRsZSwgbGFiZWwsIG1qQXR0cmlidXRlKCBcInRpdGxlXCIgKSwgbWpBdHRyaWJ1dGUoIFwibGFiZWxcIiApICk7XG5cblx0XHR2YWx1ZSA9IHdpY2hldnIoIHZhbHVlLCBtakF0dHJpYnV0ZSggXCJ2YWx1ZVwiICkgKTtcblxuXHRcdGlmKCBmYWx6eSggdmFsdWUgKSApe1xuXHRcdFx0dGl0bGUgPSBcIlwiO1xuXHRcdH1cblxuXHRcdHRyeXtcblx0XHRcdGNvdW50ID0gcGFyc2VJbnQoIHdpY2hldnIoIGNvdW50LCBtakF0dHJpYnV0ZSggXCJjb3VudFwiICksIERFRkFVTFRfREVUQUlMX01BWElNVU1fQ09VTlQgKSApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0Y291bnQgPSBERUZBVUxUX0RFVEFJTF9NQVhJTVVNX0NPVU5UO1xuXHRcdH1cblxuXHRcdGxldCB3aWR0aCA9IGAkeyBNYXRoLnJvdW5kKCAoIDEwMCAvIGNvdW50ICkgLyAxMCApICogMTAgfSVgO1xuXG5cdFx0YWxpZ24gPSB3aWNoZXZyKCBhbGlnbiwgbWpBdHRyaWJ1dGUoIFwiYWxpZ25cIiApICk7XG5cblx0XHRyZXZlcnNlID0gYm9vbGVhbml6ZSggd2ljaGV2ciggcmV2ZXJzZSwgbWpBdHRyaWJ1dGUoIFwicmV2ZXJzZVwiICkgKSApO1xuXG5cdFx0YmFja2dyb3VuZENvbG9yID0gd2ljaGV2ciggYmFja2dyb3VuZENvbG9yLCBtakF0dHJpYnV0ZSggXCJiYWNrZ3JvdW5kLWNvbG9yXCIgKSApO1xuXG5cdFx0Zm9yZWdyb3VuZENvbG9yID0gd2ljaGV2ciggZm9yZWdyb3VuZENvbG9yLCBtakF0dHJpYnV0ZSggXCJmb3JlZ3JvdW5kLWNvbG9yXCIgKSApO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdFwibmFtZVwiOiBuYW1lLFxuXHRcdFx0XCJ0aXRsZVwiOiB0aXRsZSxcblx0XHRcdFwidmFsdWVcIjogdmFsdWUsXG5cdFx0XHRcImFsaWduXCI6IGFsaWduLFxuXHRcdFx0XCJ3aWR0aFwiOiB3aWR0aCxcblx0XHRcdFwicmV2ZXJzZVwiOiByZXZlcnNlLFxuXHRcdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogYmFja2dyb3VuZENvbG9yLFxuXHRcdFx0XCJmb3JlZ3JvdW5kQ29sb3JcIjogZm9yZWdyb3VuZENvbG9yXG5cdFx0fTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCggKXtcblx0XHR0aGlzLnNldFN0YXRlKCB7IFwiZGF0YVwiOiB0aGlzLnJlc29sdmUoIHRoaXMucHJvcHMgKSB9ICk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCBwcm9wZXJ0eSApe1xuXHRcdHRoaXMuc2V0U3RhdGUoIHsgXCJkYXRhXCI6IHRoaXMucmVzb2x2ZSggcHJvcGVydHkgKSB9ICk7XG5cdH1cblxuXHRyZW5kZXIoICl7XG5cdFx0bGV0IHtcblx0XHRcdHRpdGxlLCB2YWx1ZSxcblx0XHRcdGFsaWduLCB3aWR0aCwgcmV2ZXJzZSxcblx0XHRcdGJhY2tncm91bmRDb2xvciwgZm9yZWdyb3VuZENvbG9yXG5cdFx0fSA9IHRoaXMuc3RhdGUuZGF0YTtcblxuXHRcdGxldCB0aXRsZUNvbXBvbmVudCA9IChcblx0XHRcdDx0ZFxuXHRcdFx0XHRzdHlsZT17IHtcblx0XHRcdFx0XHRcInBhZGRpbmdcIjogXCIwcHggMHB4IDBweCAwcHhcIixcblx0XHRcdFx0XHRcImZvbnRTaXplXCI6IFwiMTFweFwiLFxuXHRcdFx0XHRcdFwiZm9udFdlaWdodFwiOiBcIjUwMFwiLFxuXHRcdFx0XHRcdFwibGV0dGVyU3BhY2luZ1wiOiBcIjAuM3B4XCIsXG5cdFx0XHRcdFx0XCJ0ZXh0VHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCIsXG5cdFx0XHRcdFx0XCJ0ZXh0QWxpZ25cIjogYWxpZ24sXG5cdFx0XHRcdFx0XCJjb2xvclwiOiBmb3JlZ3JvdW5kQ29sb3Jcblx0XHRcdFx0fSB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgdGl0bGUgfVxuXHRcdFx0PC90ZD5cblx0XHQpO1xuXG5cdFx0bGV0IHZhbHVlQ29tcG9uZW50ID0gKFxuXHRcdFx0PHRkXG5cdFx0XHRcdHN0eWxlPXsge1xuXHRcdFx0XHRcdFwicGFkZGluZ1wiOiBcIjBweCAwcHggMHB4IDBweFwiLFxuXHRcdFx0XHRcdFwiZm9udFNpemVcIjogXCIxNXB4XCIsXG5cdFx0XHRcdFx0XCJsZXR0ZXJTcGFjaW5nXCI6IFwiMC4zcHhcIixcblx0XHRcdFx0XHRcInRleHRBbGlnblwiOiBhbGlnbixcblx0XHRcdFx0XHRcImNvbG9yXCI6IGZvcmVncm91bmRDb2xvclxuXHRcdFx0XHR9IH1cblx0XHRcdD5cblx0XHRcdFx0eyB2YWx1ZSB9XG5cdFx0XHQ8L3RkPlxuXHRcdCk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PENvbHVtblxuXHRcdFx0XHR3aWR0aD17IHdpZHRoIH1cblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcj17IGJhY2tncm91bmRDb2xvciB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxUYWJsZVxuXHRcdFx0XHRcdGNzcy1jbGFzcz1cImRldGFpbFwiXG5cdFx0XHRcdFx0YWxpZ249eyBhbGlnbiB9XG5cdFx0XHRcdFx0dGFibGUtbGF5b3V0PVwiYXV0b1wiXG5cdFx0XHRcdFx0d2lkdGg9XCJhdXRvXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdHsgcmV2ZXJzZT8gdmFsdWVDb21wb25lbnQgOiB0aXRsZUNvbXBvbmVudCB9XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHR7IHJldmVyc2U/IHRpdGxlQ29tcG9uZW50IDogdmFsdWVDb21wb25lbnQgfVxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdDwvVGFibGU+XG5cdFx0XHQ8L0NvbHVtbj5cblx0XHQpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoICl7XG5cdFx0bGV0IGNvbXBvbmVudCA9ICQoIFJlYWN0RE9NLmZpbmRET01Ob2RlKCB0aGlzICkgKVxuXHRcdFx0LmFkZENsYXNzKCBcImJoLW1qLWRldGFpbFwiIClcblx0XHRcdC5hZGRDbGFzcyggdGhpcy5zdGF0ZS5kYXRhLm5hbWUgKVxuXHRcdFx0LmFwcGVuZCggYFxuXHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdGNsYXNzPVwiYmgtbWotZGV0YWlsIHN0eWxlXCJcblx0XHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcblx0XHRcdFx0XHR0eXBlPVwidGV4dC9jc3NcIlxuXHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9iaC1tai1kZXRhaWwvZGV0YWlsLmNzc1wiXG5cdFx0XHRcdC8+XG5cdFx0XHRgIClcblx0XHRcdC5jc3MoIFwid2lkdGhcIiwgdGhpcy5zdGF0ZS5kYXRhLndpZHRoICk7XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRUaGlzIGlzIGEgZml4IGZvciBleGNlc3MgY29tbWEgZHVyaW5nIGNvbXBvbmVudCByZW5kZXJpbmcuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGxldCB0YWJsZUJvZHkgPSAkKCBcIi5kZXRhaWwgdGFibGUgPiB0Ym9keVwiLCBjb21wb25lbnQgKS5kZXRhY2goICk7XG5cdFx0JCggXCIuZGV0YWlsIHRhYmxlXCIsIGNvbXBvbmVudCApLmVtcHR5KCApLmFwcGVuZCggdGFibGVCb2R5ICk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCggKXtcblx0XHQkKCBcIi5iaC1tai1kZXRhaWwuc3R5bGVcIiApLnJlbW92ZSggKTtcblx0fVxufVxuXG5EZXRhaWwudGFnTmFtZSA9IHRhZ05hbWU7XG5EZXRhaWwucGFyZW50VGFnID0gcGFyZW50VGFnO1xuRGV0YWlsLmVuZGluZ1RhZyA9IGVuZGluZ1RhZztcbkRldGFpbC5kZWZhdWx0TUpNTERlZmluaXRpb24gPSBkZWZhdWx0TUpNTERlZmluaXRpb247XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbDtcbiJdfQ==

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(358);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"singleton":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(360)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/css-loader/index.js??ref--1-1!./node_modules/resolve-url-loader/index.js??ref--1-2!./node_modules/sass-loader/lib/loader.js??ref--1-3!./detail.scss", function() {
			var newContent = require("!!./node_modules/css-loader/index.js??ref--1-1!./node_modules/resolve-url-loader/index.js??ref--1-2!./node_modules/sass-loader/lib/loader.js??ref--1-3!./detail.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(359)(true);
// imports


// module
exports.push([module.i, ".bh-mj-detail .detail > td {\n  padding-top: 10px !important;\n  padding-right: 25px !important;\n  padding-bottom: 10px !important;\n  padding-left: 25px !important;\n}\n\n", "", {"version":3,"sources":["/home/richeve/bh/bh-mj-detail/detail.scss"],"names":[],"mappings":"AAAA;EAEE,6BAAA;EACA,+BAAA;EACA,gCAAA;EACA,8BAAA;CAAD","file":"detail.scss","sourcesContent":[".bh-mj-detail {\n\t.detail > td {\n\t\tpadding-top: 10px !important;\n\t\tpadding-right: 25px !important;\n\t\tpadding-bottom: 10px !important;\n\t\tpadding-left: 25px !important;\n\t}\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 457:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 528:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 635:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[312]);
});
//# sourceMappingURL=detail.support.js.map