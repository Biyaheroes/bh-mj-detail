!function webpackUniversalModuleDefinition(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.component=t():e.component=t()}(this,function(){return webpackJsonpcomponent([4],{308:function(e,t,o){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var l,u=o(309),r=_interopRequireDefault(u),a=o(182),i=_interopRequireDefault(a),n=o(38),f=(_interopRequireDefault(n),o(344)),d=_interopRequireDefault(f),p=o(415),c=_interopRequireDefault(p);d.default.render((0,i.default)(c.default,(l={title:"Hello World",value:"This is a normal value"},(0,r.default)(l,"title","Hello World"),(0,r.default)(l,"value","This is a normal value"),(0,r.default)(l,"reverse","true"),(0,r.default)(l,"title","Hello World"),(0,r.default)(l,"value","This is a normal value"),(0,r.default)(l,"align","center"),(0,r.default)(l,"title","Hello World"),(0,r.default)(l,"value","This is a normal value"),(0,r.default)(l,"background-color","blue"),(0,r.default)(l,"foreground-color","white"),l)),document.getElementById("root"))},415:function(e,t,o){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l,u=o(182),r=_interopRequireDefault(u),a=o(416),i=_interopRequireDefault(a),n=o(420),f=_interopRequireDefault(n),d=o(421),p=_interopRequireDefault(d),c=o(422),s=_interopRequireDefault(c),v=o(431),g=_interopRequireDefault(v),_=o(38),D=(_interopRequireDefault(_),o(42)),h=o(667),m=_interopRequireDefault(h),b=o(673),R=_interopRequireDefault(b),q=o(674),x=_interopRequireDefault(q),y=o(676),k=_interopRequireDefault(y),M=o(677),W=_interopRequireDefault(M),j=["mj-container","mj-section"],w={content:"",attributes:{title:"",label:"",value:"",count:3,align:"left",reverse:!1,"background-color":"white","foreground-color":"black"}},C=(0,D.MJMLElement)(l=function(e){function Detail(){return(0,f.default)(this,Detail),(0,s.default)(this,(Detail.__proto__||(0,i.default)(Detail)).apply(this,arguments))}return(0,g.default)(Detail,e),(0,p.default)(Detail,[{key:"resolve",value:function resolve(e){var t=this.props.mjAttribute,o=this.props,l=o.title,u=o.label,r=o.value,a=o.count,i=o.align,n=o.reverse,f=o.backgroundColor,d=o.foregroundColor;l=(0,W.default)(l,u,t("title"),t("label")),r=(0,W.default)(r,t("value")),(0,k.default)(r)&&(l="");try{a=parseInt((0,W.default)(a,t("count"),3))}catch(e){a=3}var p=10*Math.round(100/a/10)+"%";return i=(0,W.default)(i,t("align")),n=(0,x.default)((0,W.default)(n,t("reverse"))),f=(0,W.default)(f,t("background-color")),d=(0,W.default)(d,t("foreground-color")),{title:l,value:r,align:i,width:p,reverse:n,backgroundColor:f,foregroundColor:d}}},{key:"componentWillMount",value:function componentWillMount(){this.setState({data:this.resolve(this.props)})}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(e){this.setState({data:this.resolve(e)})}},{key:"render",value:function render(){var e=this.state.data,t=e.title,o=e.value,l=e.align,u=e.width,a=e.reverse,i=e.backgroundColor,n=e.foregroundColor,f=(0,r.default)("td",{style:{padding:"0px 0px 0px 0px",fontSize:"11px",fontWeight:"500",letterSpacing:"0.3px",textTransform:"uppercase",textAlign:l,color:n}},void 0,t),d=(0,r.default)("td",{style:{padding:"0px 0px 0px 0px",fontSize:"15px",letterSpacing:"0.3px",textAlign:l,color:n}},void 0,o);return(0,r.default)(m.default,{width:u,"background-color":i},void 0,(0,r.default)(R.default,{align:l,"table-layout":"auto",width:"auto"},void 0,(0,r.default)("tr",{},void 0,a?d:f),(0,r.default)("tr",{},void 0,a?f:d)))}}]),Detail}(_.PureComponent))||l;C.tagName="mj-detail",C.parentTag=j,C.endingTag=!1,C.defaultMJMLDefinition=w,t.default=C},439:function(e,t){},510:function(e,t){},571:function(e,t){},595:function(e,t){},607:function(e,t){},618:function(e,t){}},[308])});
//# sourceMappingURL=component.js.map