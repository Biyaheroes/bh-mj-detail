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
*/Object.defineProperty(exports,"__esModule",{value:true});var _jsx2=require("babel-runtime/helpers/jsx");var _jsx3=_interopRequireDefault(_jsx2);var _getPrototypeOf=require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require("babel-runtime/helpers/inherits");var _inherits3=_interopRequireDefault(_inherits2);var _class;



var _jquery=require("jquery");var _jquery2=_interopRequireDefault(_jquery);
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactDom=require("react-dom");var _reactDom2=_interopRequireDefault(_reactDom);

var _mjmlCore=require("mjml-core");

var _mjmlColumn=require("mjml-column");var _mjmlColumn2=_interopRequireDefault(_mjmlColumn);
var _mjmlTable=require("mjml-table");var _mjmlTable2=_interopRequireDefault(_mjmlTable);

var _booleanize=require("booleanize");var _booleanize2=_interopRequireDefault(_booleanize);
var _falzy=require("falzy");var _falzy2=_interopRequireDefault(_falzy);
var _wichevr=require("wichevr");var _wichevr2=_interopRequireDefault(_wichevr);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

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

//# sourceMappingURL=detail.js.map