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
Object.defineProperty(exports,"__esModule",{value:true});var _jsx2=__webpack_require__(313);var _jsx3=_interopRequireDefault(_jsx2);var _getPrototypeOf=__webpack_require__(331);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(335);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(336);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(340);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(349);var _inherits3=_interopRequireDefault(_inherits2);var _class;
//: @end-ignore
__webpack_require__(357);
var _jquery=__webpack_require__(195);var _jquery2=_interopRequireDefault(_jquery);
var _react=__webpack_require__(55);var _react2=_interopRequireDefault(_react);
var _reactDom=__webpack_require__(377);var _reactDom2=_interopRequireDefault(_reactDom);

var _mjmlCore=__webpack_require__(43);

var _mjmlColumn=__webpack_require__(684);var _mjmlColumn2=_interopRequireDefault(_mjmlColumn);
var _mjmlTable=__webpack_require__(690);var _mjmlTable2=_interopRequireDefault(_mjmlTable);

var _booleanize=__webpack_require__(691);var _booleanize2=_interopRequireDefault(_booleanize);
var _falzy=__webpack_require__(693);var _falzy2=_interopRequireDefault(_falzy);
var _wichevr=__webpack_require__(694);var _wichevr2=_interopRequireDefault(_wichevr);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var tagName="mj-detail";

var parentTag=["mj-container","mj-section"];

var endingTag=false;

var defaultMJMLDefinition={
"content":"",
"attributes":{
"name":"",
"title":"",
"label":"",
"value":"",
"count":3,
"align":"left",
"reverse":false,
"background-color":"white",
"foreground-color":"black"}};



var DEFAULT_DETAIL_MAXIMUM_COUNT=3;var


Detail=(0,_mjmlCore.MJMLElement)(_class=function(_PureComponent){(0,_inherits3.default)(Detail,_PureComponent);function Detail(){(0,_classCallCheck3.default)(this,Detail);return(0,_possibleConstructorReturn3.default)(this,(Detail.__proto__||(0,_getPrototypeOf2.default)(Detail)).apply(this,arguments));}(0,_createClass3.default)(Detail,[{key:"resolve",value:function resolve(
property){var
mjAttribute=this.props.mjAttribute;var _props=






this.props,name=_props.name,title=_props.title,label=_props.label,value=_props.value,count=_props.count,align=_props.align,reverse=_props.reverse,backgroundColor=_props.backgroundColor,foregroundColor=_props.foregroundColor;

name=(0,_wichevr2.default)(name,mjAttribute("name"));

title=(0,_wichevr2.default)(title,label,mjAttribute("title"),mjAttribute("label"));

value=(0,_wichevr2.default)(value,mjAttribute("value"));

if((0,_falzy2.default)(value)){
title="";
}

try{
count=parseInt((0,_wichevr2.default)(count,mjAttribute("count"),DEFAULT_DETAIL_MAXIMUM_COUNT));

}catch(error){
count=DEFAULT_DETAIL_MAXIMUM_COUNT;
}

var width=Math.round(100/count/10)*10+"%";

align=(0,_wichevr2.default)(align,mjAttribute("align"));

reverse=(0,_booleanize2.default)((0,_wichevr2.default)(reverse,mjAttribute("reverse")));

backgroundColor=(0,_wichevr2.default)(backgroundColor,mjAttribute("background-color"));

foregroundColor=(0,_wichevr2.default)(foregroundColor,mjAttribute("foreground-color"));

return{
"name":name,
"title":title,
"value":value,
"align":align,
"width":width,
"reverse":reverse,
"backgroundColor":backgroundColor,
"foregroundColor":foregroundColor};

}},{key:"componentWillMount",value:function componentWillMount()

{
this.setState({"data":this.resolve(this.props)});
}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(

property){
this.setState({"data":this.resolve(property)});
}},{key:"render",value:function render()

{var _state$data=




this.state.data,title=_state$data.title,value=_state$data.value,align=_state$data.align,width=_state$data.width,reverse=_state$data.reverse,backgroundColor=_state$data.backgroundColor,foregroundColor=_state$data.foregroundColor;

var titleComponent=(0,_jsx3.default)("td",{style:

{
"padding":"0px 0px 0px 0px",
"fontSize":"11px",
"fontWeight":"500",
"letterSpacing":"0.3px",
"textTransform":"uppercase",
"textAlign":align,
"color":foregroundColor}},void 0,


title);



var valueComponent=(0,_jsx3.default)("td",{style:

{
"padding":"0px 0px 0px 0px",
"fontSize":"15px",
"letterSpacing":"0.3px",
"textAlign":align,
"color":foregroundColor}},void 0,


value);



return(0,_jsx3.default)(_mjmlColumn2.default,{width:

width,"background-color":
backgroundColor},void 0,(0,_jsx3.default)(_mjmlTable2.default,{"css-class":


"detail",align:
align,"table-layout":
"auto",width:
"auto"},void 0,(0,_jsx3.default)("tbody",{},void 0,(0,_jsx3.default)("tr",{},void 0,



reverse?valueComponent:titleComponent),(0,_jsx3.default)("tr",{},void 0,


reverse?titleComponent:valueComponent))));





}},{key:"componentDidMount",value:function componentDidMount()

{
var component=(0,_jquery2.default)(_reactDom2.default.findDOMNode(this)).
addClass("bh-mj-detail").
addClass(this.state.data.name).
append("\n\t\t\t\t<link\n\t\t\t\t\tclass=\"bh-mj-detail style\"\n\t\t\t\t\trel=\"stylesheet\"\n\t\t\t\t\ttype=\"text/css\"\n\t\t\t\t\thref=\"https://unpkg.com/bh-mj-detail/detail.css\"\n\t\t\t\t/>\n\t\t\t").







css("width",this.state.data.width);

/*;
			@note:
				This is a fix for excess comma during component rendering.
			@end-note
		*/
// let tableBody = $( ".detail table > tbody", component ).detach( );
// $( ".detail table", component ).empty( ).append( tableBody );
}},{key:"componentWillUnmount",value:function componentWillUnmount()

{
(0,_jquery2.default)(".bh-mj-detail.style").remove();
}}]);return Detail;}(_react.PureComponent))||_class;


Detail.tagName=tagName;
Detail.parentTag=parentTag;
Detail.endingTag=endingTag;
Detail.defaultMJMLDefinition=defaultMJMLDefinition;exports.default=

Detail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5tb2R1bGUuanN4Il0sIm5hbWVzIjpbInRhZ05hbWUiLCJwYXJlbnRUYWciLCJlbmRpbmdUYWciLCJkZWZhdWx0TUpNTERlZmluaXRpb24iLCJERUZBVUxUX0RFVEFJTF9NQVhJTVVNX0NPVU5UIiwiRGV0YWlsIiwicHJvcGVydHkiLCJtakF0dHJpYnV0ZSIsInByb3BzIiwibmFtZSIsInRpdGxlIiwibGFiZWwiLCJ2YWx1ZSIsImNvdW50IiwiYWxpZ24iLCJyZXZlcnNlIiwiYmFja2dyb3VuZENvbG9yIiwiZm9yZWdyb3VuZENvbG9yIiwicGFyc2VJbnQiLCJlcnJvciIsIndpZHRoIiwiTWF0aCIsInJvdW5kIiwic2V0U3RhdGUiLCJyZXNvbHZlIiwic3RhdGUiLCJkYXRhIiwidGl0bGVDb21wb25lbnQiLCJ2YWx1ZUNvbXBvbmVudCIsImNvbXBvbmVudCIsImZpbmRET01Ob2RlIiwiYWRkQ2xhc3MiLCJhcHBlbmQiLCJjc3MiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQTs7QUFFQTtBQURBO0FBR0EsOEI7QUFDQSw0QjtBQUNBLG1DOztBQUVBOztBQUVBLHVDO0FBQ0EscUM7O0FBRUEsc0M7QUFDQSw0QjtBQUNBLGdDOztBQUVBLEdBQU1BLFNBQVUsV0FBaEI7O0FBRUEsR0FBTUMsV0FBWSxDQUFFLGNBQUYsQ0FBa0IsWUFBbEIsQ0FBbEI7O0FBRUEsR0FBTUMsV0FBWSxLQUFsQjs7QUFFQSxHQUFNQyx1QkFBd0I7QUFDN0IsVUFBVyxFQURrQjtBQUU3QixhQUFjO0FBQ2IsT0FBUSxFQURLO0FBRWIsUUFBUyxFQUZJO0FBR2IsUUFBUyxFQUhJO0FBSWIsUUFBUyxFQUpJO0FBS2IsUUFBUyxDQUxJO0FBTWIsUUFBUyxNQU5JO0FBT2IsVUFBVyxLQVBFO0FBUWIsbUJBQW9CLE9BUlA7QUFTYixtQkFBb0IsT0FU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Tjs7O0FBVUFMLEtBVkEsQ0FBSjs7OztBQWNBOztBQUVVUSxLQUZWO0FBR3FCSixlQUhyQjs7O0FBTWEsUUFOYjtBQU9XRixLQVBYO0FBUWdCLE1BUmhCO0FBU1MsTUFUVDs7OztBQWFPQyxRQUFTYSxjQUFULENBQTBCRCxjQWJqQzs7O0FBZ0JPWixRQUFTWSxjQUFULENBQTBCQyxjQWhCakM7Ozs7OztBQXNCQSxDOztBQUVtQjtBQUNuQixHQUFJQyxXQUFZLHFCQUFHLG1CQUFTQyxXQUFULENBQXNCLElBQXRCLENBQUg7QUFDZEMsUUFEYyxDQUNKLGNBREk7QUFFZEEsUUFGYyxDQUVKLEtBQUtOLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQmpCLElBRlo7QUFHZHVCLE1BSGM7Ozs7Ozs7O0FBV2RDLEdBWGMsQ0FXVCxPQVhTLENBV0EsS0FBS1IsS0FBTCxDQUFXQyxJQUFYLENBQWdCTixLQVhoQixDQUFoQjs7QUFhQTs7Ozs7QUFLQTtBQUNBO0FBQ0EsQzs7QUFFc0I7QUFDdEIscUJBQUcscUJBQUgsRUFBMkJjLE1BQTNCO0FBQ0EsQzs7O0FBR0Y3QixPQUFPTCxPQUFQLENBQWlCQSxPQUFqQjtBQUNBSyxPQUFPSixTQUFQLENBQW1CQSxTQUFuQjtBQUNBSSxPQUFPSCxTQUFQLENBQW1CQSxTQUFuQjtBQUNBRyxPQUFPRixxQkFBUCxDQUErQkEscUJBQS9CLEM7O0FBRWVFLE0iLCJmaWxlIjoiZGV0YWlsLm1vZHVsZS5qc3giLCJzb3VyY2VSb290IjoiL2hvbWUvcmljaGV2ZS9iaC9iaC1tai1kZXRhaWwiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgQml5YWhlcm9lcyBEZXZlbG9wZXJzXG5cdFx0QGVtYWlsOiBkZXZlbG9wZXJzQGJpeWFoZXJvZXMuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJkZXRhaWxcIixcblx0XHRcdFwicGF0aFwiOiBcImRldGFpbC9kZXRhaWwuanN4XCIsXG5cdFx0XHRcImZpbGVcIjogXCJkZXRhaWwuanN4XCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImRldGFpbFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJCaXlhaGVyb2VzIERldmVsb3BlcnNcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJSb2JvdCBCaXlhaGVyb2VzIDxyb2JvdEBiaXlhaGVyb2VzLmNvbT5cIixcblx0XHRcdFx0XCJSaWNoZXZlIFMuIEJlYmVkb3IgPHJpY2hldmUuYmViZWRvckBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwiZGV2ZWxvcGVyc0BiaXlhaGVyb2VzLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0JpeWFoZXJvZXMvYmgtbWotZGV0YWlsLmdpdFwiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRCaXlhaGVyb2VzIE1KTUwgRGV0YWlsIENvbXBvbmVudC5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYm9vbGVhbml6ZVwiOiBcImJvb2xlYW5pemVcIixcblx0XHRcdFwiQ29tcG9uZW50XCI6IFwicmVhY3QuQ29tcG9uZW50XCIsXG5cdFx0XHRcIkNvbHVtblwiOiBcIm1qbWwtY29sdW1uXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiTUpNTEVsZW1lbnRcIjogXCJtam1sLWNvcmVcIixcblx0XHRcdFwiUmVhY3RcIjogXCJyZWFjdFwiLFxuXHRcdFx0XCJUYWJsZVwiOiBcIm1qbWwtdGFibGVcIixcblx0XHRcdFwid2ljaGV2clwiOiBcIndpY2hldnJcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG4vLzogQGlnbm9yZTpcbmltcG9ydCBcIi4vZGV0YWlsLnNjc3NcIjtcbi8vOiBAZW5kLWlnbm9yZVxuXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuaW1wb3J0IHsgTUpNTEVsZW1lbnQgfSBmcm9tIFwibWptbC1jb3JlXCI7XG5cbmltcG9ydCBDb2x1bW4gZnJvbSBcIm1qbWwtY29sdW1uXCI7XG5pbXBvcnQgVGFibGUgZnJvbSBcIm1qbWwtdGFibGVcIjtcblxuaW1wb3J0IGJvb2xlYW5pemUgZnJvbSBcImJvb2xlYW5pemVcIjtcbmltcG9ydCBmYWx6eSBmcm9tIFwiZmFsenlcIjtcbmltcG9ydCB3aWNoZXZyIGZyb20gXCJ3aWNoZXZyXCI7XG5cbmNvbnN0IHRhZ05hbWUgPSBcIm1qLWRldGFpbFwiO1xuXG5jb25zdCBwYXJlbnRUYWcgPSBbIFwibWotY29udGFpbmVyXCIsIFwibWotc2VjdGlvblwiIF07XG5cbmNvbnN0IGVuZGluZ1RhZyA9IGZhbHNlO1xuXG5jb25zdCBkZWZhdWx0TUpNTERlZmluaXRpb24gPSB7XG5cdFwiY29udGVudFwiOiBcIlwiLFxuXHRcImF0dHJpYnV0ZXNcIjoge1xuXHRcdFwibmFtZVwiOiBcIlwiLFxuXHRcdFwidGl0bGVcIjogXCJcIixcblx0XHRcImxhYmVsXCI6IFwiXCIsXG5cdFx0XCJ2YWx1ZVwiOiBcIlwiLFxuXHRcdFwiY291bnRcIjogMyxcblx0XHRcImFsaWduXCI6IFwibGVmdFwiLFxuXHRcdFwicmV2ZXJzZVwiOiBmYWxzZSxcblx0XHRcImJhY2tncm91bmQtY29sb3JcIjogXCJ3aGl0ZVwiLFxuXHRcdFwiZm9yZWdyb3VuZC1jb2xvclwiOiBcImJsYWNrXCJcblx0fVxufTtcblxuY29uc3QgREVGQVVMVF9ERVRBSUxfTUFYSU1VTV9DT1VOVCA9IDM7XG5cbkBNSk1MRWxlbWVudFxuY2xhc3MgRGV0YWlsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cdHJlc29sdmUoIHByb3BlcnR5ICl7XG5cdFx0Y29uc3QgeyBtakF0dHJpYnV0ZSB9ID0gdGhpcy5wcm9wcztcblxuXHRcdGxldCB7XG5cdFx0XHRuYW1lLFxuXHRcdFx0dGl0bGUsIGxhYmVsLCB2YWx1ZSxcblx0XHRcdGNvdW50LCBhbGlnbiwgcmV2ZXJzZSxcblx0XHRcdGJhY2tncm91bmRDb2xvciwgZm9yZWdyb3VuZENvbG9yXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRuYW1lID0gd2ljaGV2ciggbmFtZSwgbWpBdHRyaWJ1dGUoIFwibmFtZVwiICkgKTtcblxuXHRcdHRpdGxlID0gd2ljaGV2ciggdGl0bGUsIGxhYmVsLCBtakF0dHJpYnV0ZSggXCJ0aXRsZVwiICksIG1qQXR0cmlidXRlKCBcImxhYmVsXCIgKSApO1xuXG5cdFx0dmFsdWUgPSB3aWNoZXZyKCB2YWx1ZSwgbWpBdHRyaWJ1dGUoIFwidmFsdWVcIiApICk7XG5cblx0XHRpZiggZmFsenkoIHZhbHVlICkgKXtcblx0XHRcdHRpdGxlID0gXCJcIjtcblx0XHR9XG5cblx0XHR0cnl7XG5cdFx0XHRjb3VudCA9IHBhcnNlSW50KCB3aWNoZXZyKCBjb3VudCwgbWpBdHRyaWJ1dGUoIFwiY291bnRcIiApLCBERUZBVUxUX0RFVEFJTF9NQVhJTVVNX0NPVU5UICkgKTtcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdGNvdW50ID0gREVGQVVMVF9ERVRBSUxfTUFYSU1VTV9DT1VOVDtcblx0XHR9XG5cblx0XHRsZXQgd2lkdGggPSBgJHsgTWF0aC5yb3VuZCggKCAxMDAgLyBjb3VudCApIC8gMTAgKSAqIDEwIH0lYDtcblxuXHRcdGFsaWduID0gd2ljaGV2ciggYWxpZ24sIG1qQXR0cmlidXRlKCBcImFsaWduXCIgKSApO1xuXG5cdFx0cmV2ZXJzZSA9IGJvb2xlYW5pemUoIHdpY2hldnIoIHJldmVyc2UsIG1qQXR0cmlidXRlKCBcInJldmVyc2VcIiApICkgKTtcblxuXHRcdGJhY2tncm91bmRDb2xvciA9IHdpY2hldnIoIGJhY2tncm91bmRDb2xvciwgbWpBdHRyaWJ1dGUoIFwiYmFja2dyb3VuZC1jb2xvclwiICkgKTtcblxuXHRcdGZvcmVncm91bmRDb2xvciA9IHdpY2hldnIoIGZvcmVncm91bmRDb2xvciwgbWpBdHRyaWJ1dGUoIFwiZm9yZWdyb3VuZC1jb2xvclwiICkgKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRcIm5hbWVcIjogbmFtZSxcblx0XHRcdFwidGl0bGVcIjogdGl0bGUsXG5cdFx0XHRcInZhbHVlXCI6IHZhbHVlLFxuXHRcdFx0XCJhbGlnblwiOiBhbGlnbixcblx0XHRcdFwid2lkdGhcIjogd2lkdGgsXG5cdFx0XHRcInJldmVyc2VcIjogcmV2ZXJzZSxcblx0XHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IGJhY2tncm91bmRDb2xvcixcblx0XHRcdFwiZm9yZWdyb3VuZENvbG9yXCI6IGZvcmVncm91bmRDb2xvclxuXHRcdH07XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoICl7XG5cdFx0dGhpcy5zZXRTdGF0ZSggeyBcImRhdGFcIjogdGhpcy5yZXNvbHZlKCB0aGlzLnByb3BzICkgfSApO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyggcHJvcGVydHkgKXtcblx0XHR0aGlzLnNldFN0YXRlKCB7IFwiZGF0YVwiOiB0aGlzLnJlc29sdmUoIHByb3BlcnR5ICkgfSApO1xuXHR9XG5cblx0cmVuZGVyKCApe1xuXHRcdGxldCB7XG5cdFx0XHR0aXRsZSwgdmFsdWUsXG5cdFx0XHRhbGlnbiwgd2lkdGgsIHJldmVyc2UsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IsIGZvcmVncm91bmRDb2xvclxuXHRcdH0gPSB0aGlzLnN0YXRlLmRhdGE7XG5cblx0XHRsZXQgdGl0bGVDb21wb25lbnQgPSAoXG5cdFx0XHQ8dGRcblx0XHRcdFx0c3R5bGU9eyB7XG5cdFx0XHRcdFx0XCJwYWRkaW5nXCI6IFwiMHB4IDBweCAwcHggMHB4XCIsXG5cdFx0XHRcdFx0XCJmb250U2l6ZVwiOiBcIjExcHhcIixcblx0XHRcdFx0XHRcImZvbnRXZWlnaHRcIjogXCI1MDBcIixcblx0XHRcdFx0XHRcImxldHRlclNwYWNpbmdcIjogXCIwLjNweFwiLFxuXHRcdFx0XHRcdFwidGV4dFRyYW5zZm9ybVwiOiBcInVwcGVyY2FzZVwiLFxuXHRcdFx0XHRcdFwidGV4dEFsaWduXCI6IGFsaWduLFxuXHRcdFx0XHRcdFwiY29sb3JcIjogZm9yZWdyb3VuZENvbG9yXG5cdFx0XHRcdH0gfVxuXHRcdFx0PlxuXHRcdFx0XHR7IHRpdGxlIH1cblx0XHRcdDwvdGQ+XG5cdFx0KTtcblxuXHRcdGxldCB2YWx1ZUNvbXBvbmVudCA9IChcblx0XHRcdDx0ZFxuXHRcdFx0XHRzdHlsZT17IHtcblx0XHRcdFx0XHRcInBhZGRpbmdcIjogXCIwcHggMHB4IDBweCAwcHhcIixcblx0XHRcdFx0XHRcImZvbnRTaXplXCI6IFwiMTVweFwiLFxuXHRcdFx0XHRcdFwibGV0dGVyU3BhY2luZ1wiOiBcIjAuM3B4XCIsXG5cdFx0XHRcdFx0XCJ0ZXh0QWxpZ25cIjogYWxpZ24sXG5cdFx0XHRcdFx0XCJjb2xvclwiOiBmb3JlZ3JvdW5kQ29sb3Jcblx0XHRcdFx0fSB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgdmFsdWUgfVxuXHRcdFx0PC90ZD5cblx0XHQpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxDb2x1bW5cblx0XHRcdFx0d2lkdGg9eyB3aWR0aCB9XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I9eyBiYWNrZ3JvdW5kQ29sb3IgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8VGFibGVcblx0XHRcdFx0XHRjc3MtY2xhc3M9XCJkZXRhaWxcIlxuXHRcdFx0XHRcdGFsaWduPXsgYWxpZ24gfVxuXHRcdFx0XHRcdHRhYmxlLWxheW91dD1cImF1dG9cIlxuXHRcdFx0XHRcdHdpZHRoPVwiYXV0b1wiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdHsgcmV2ZXJzZT8gdmFsdWVDb21wb25lbnQgOiB0aXRsZUNvbXBvbmVudCB9XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHR7IHJldmVyc2U/IHRpdGxlQ29tcG9uZW50IDogdmFsdWVDb21wb25lbnQgfVxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHQ8L1RhYmxlPlxuXHRcdFx0PC9Db2x1bW4+XG5cdFx0KTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCApe1xuXHRcdGxldCBjb21wb25lbnQgPSAkKCBSZWFjdERPTS5maW5kRE9NTm9kZSggdGhpcyApIClcblx0XHRcdC5hZGRDbGFzcyggXCJiaC1tai1kZXRhaWxcIiApXG5cdFx0XHQuYWRkQ2xhc3MoIHRoaXMuc3RhdGUuZGF0YS5uYW1lIClcblx0XHRcdC5hcHBlbmQoIGBcblx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRjbGFzcz1cImJoLW1qLWRldGFpbCBzdHlsZVwiXG5cdFx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXG5cdFx0XHRcdFx0dHlwZT1cInRleHQvY3NzXCJcblx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vYmgtbWotZGV0YWlsL2RldGFpbC5jc3NcIlxuXHRcdFx0XHQvPlxuXHRcdFx0YCApXG5cdFx0XHQuY3NzKCBcIndpZHRoXCIsIHRoaXMuc3RhdGUuZGF0YS53aWR0aCApO1xuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0VGhpcyBpcyBhIGZpeCBmb3IgZXhjZXNzIGNvbW1hIGR1cmluZyBjb21wb25lbnQgcmVuZGVyaW5nLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHQvLyBsZXQgdGFibGVCb2R5ID0gJCggXCIuZGV0YWlsIHRhYmxlID4gdGJvZHlcIiwgY29tcG9uZW50ICkuZGV0YWNoKCApO1xuXHRcdC8vICQoIFwiLmRldGFpbCB0YWJsZVwiLCBjb21wb25lbnQgKS5lbXB0eSggKS5hcHBlbmQoIHRhYmxlQm9keSApO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoICl7XG5cdFx0JCggXCIuYmgtbWotZGV0YWlsLnN0eWxlXCIgKS5yZW1vdmUoICk7XG5cdH1cbn1cblxuRGV0YWlsLnRhZ05hbWUgPSB0YWdOYW1lO1xuRGV0YWlsLnBhcmVudFRhZyA9IHBhcmVudFRhZztcbkRldGFpbC5lbmRpbmdUYWcgPSBlbmRpbmdUYWc7XG5EZXRhaWwuZGVmYXVsdE1KTUxEZWZpbml0aW9uID0gZGVmYXVsdE1KTUxEZWZpbml0aW9uO1xuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWw7XG4iXX0=

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