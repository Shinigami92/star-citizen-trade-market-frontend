(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8ed522dc"],{"10cc":function(e,n,t){"use strict";t.r(n);var r=t("ad67");function a(e,n){if(!e)throw new Error(n)}function i(e){"function"===typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e.prototype,Symbol.toStringTag,{get:function(){return this.constructor.name}})}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=function(e,n,t){c(this,"body",void 0),c(this,"name",void 0),c(this,"locationOffset",void 0),this.body=e,this.name=n||"GraphQL request",this.locationOffset=t||{line:1,column:1},this.locationOffset.line>0||a(0,"line in locationOffset is 1-indexed and must be positive"),this.locationOffset.column>0||a(0,"column in locationOffset is 1-indexed and must be positive")};function u(e,n){var t,r=/\r\n|[\n\r]/g,a=1,i=n+1;while((t=r.exec(e.body))&&t.index<n)a+=1,i=n+1-(t.index+t[0].length);return{line:a,column:i}}function l(e){var n=[];if(e.nodes){var t=!0,r=!1,a=void 0;try{for(var i,c=e.nodes[Symbol.iterator]();!(t=(i=c.next()).done);t=!0){var o=i.value;o.loc&&n.push(s(o.loc.source,u(o.loc.source,o.loc.start)))}}catch(I){r=!0,a=I}finally{try{t||null==c.return||c.return()}finally{if(r)throw a}}}else if(e.source&&e.locations){var l=e.source,f=!0,d=!1,v=void 0;try{for(var E,N=e.locations[Symbol.iterator]();!(f=(E=N.next()).done);f=!0){var h=E.value;n.push(s(l,h))}}catch(I){d=!0,v=I}finally{try{f||null==N.return||N.return()}finally{if(d)throw v}}}return 0===n.length?e.message:[e.message].concat(n).join("\n\n")+"\n"}function s(e,n){var t=e.locationOffset.column-1,r=d(t)+e.body,a=n.line-1,i=e.locationOffset.line-1,c=n.line+i,o=1===n.line?t:0,u=n.column+o,l=r.split(/\r\n|[\n\r]/g);return"".concat(e.name," (").concat(c,":").concat(u,")\n")+f([["".concat(c-1,": "),l[a-1]],["".concat(c,": "),l[a]],["",d(u-1)+"^"],["".concat(c+1,": "),l[a+1]]])}function f(e){var n=e.filter(function(e){e[0];var n=e[1];return void 0!==n}),t=0,r=!0,a=!1,i=void 0;try{for(var c,o=n[Symbol.iterator]();!(r=(c=o.next()).done);r=!0){var u=c.value,l=u[0];t=Math.max(t,l.length)}}catch(s){a=!0,i=s}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return n.map(function(e){var n=e[0],r=e[1];return v(t,n)+r}).join("\n")}function d(e){return Array(e+1).join(" ")}function v(e,n){return d(e-n.length)+n}function E(e,n,t,r,a,i,c){var o=Array.isArray(n)?0!==n.length?n:void 0:n?[n]:void 0,l=t;if(!l&&o){var s=o[0];l=s&&s.loc&&s.loc.source}var f,d=r;!d&&o&&(d=o.reduce(function(e,n){return n.loc&&e.push(n.loc.start),e},[])),d&&0===d.length&&(d=void 0),r&&t?f=r.map(function(e){return u(t,e)}):o&&(f=o.reduce(function(e,n){return n.loc&&e.push(u(n.loc.source,n.loc.start)),e},[]));var v=c||i&&i.extensions;Object.defineProperties(this,{message:{value:e,enumerable:!0,writable:!0},locations:{value:f||void 0,enumerable:Boolean(f)},path:{value:a||void 0,enumerable:Boolean(a)},nodes:{value:o||void 0},source:{value:l||void 0},positions:{value:d||void 0},originalError:{value:i},extensions:{value:v||void 0,enumerable:Boolean(v)}}),i&&i.stack?Object.defineProperty(this,"stack",{value:i.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,E):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}function N(e,n,t){return new E("Syntax Error: ".concat(t),void 0,e,[n])}function h(e){for(var n=e.split(/\r\n|[\n\r]/g),t=null,r=1;r<n.length;r++){var a=n[r],i=I(a);if(i<a.length&&(null===t||i<t)&&(t=i,0===t))break}if(t)for(var c=1;c<n.length;c++)n[c]=n[c].slice(t);while(n.length>0&&p(n[0]))n.shift();while(n.length>0&&p(n[n.length-1]))n.pop();return n.join("\n")}function I(e){var n=0;while(n<e.length&&(" "===e[n]||"\t"===e[n]))n++;return n}function p(e){return I(e)===e.length}function k(e,n){var t=new w(O.SOF,0,0,0,0,null),r={source:e,options:n,lastToken:t,token:t,line:1,lineStart:0,advance:A,lookahead:T};return r}function A(){this.lastToken=this.token;var e=this.token=this.lookahead();return e}function T(){var e=this.token;if(e.kind!==O.EOF)do{e=e.next||(e.next=C(this,e))}while(e.kind===O.COMMENT);return e}i(o),E.prototype=Object.create(Error.prototype,{constructor:{value:E},name:{value:"GraphQLError"},toString:{value:function(){return l(this)}}});var O=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"});function R(e){var n=e.value;return n?"".concat(e.kind,' "').concat(n,'"'):e.kind}var _=String.prototype.charCodeAt,m=String.prototype.slice;function w(e,n,t,r,a,i,c){this.kind=e,this.start=n,this.end=t,this.line=r,this.column=a,this.value=c,this.prev=i,this.next=null}function L(e){return isNaN(e)?O.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function C(e,n){var t=e.source,r=t.body,a=r.length,i=g(r,n.end,e),c=e.line,o=1+i-e.lineStart;if(i>=a)return new w(O.EOF,a,a,c,o,n);var u=_.call(r,i);switch(u){case 33:return new w(O.BANG,i,i+1,c,o,n);case 35:return b(t,i,c,o,n);case 36:return new w(O.DOLLAR,i,i+1,c,o,n);case 38:return new w(O.AMP,i,i+1,c,o,n);case 40:return new w(O.PAREN_L,i,i+1,c,o,n);case 41:return new w(O.PAREN_R,i,i+1,c,o,n);case 46:if(46===_.call(r,i+1)&&46===_.call(r,i+2))return new w(O.SPREAD,i,i+3,c,o,n);break;case 58:return new w(O.COLON,i,i+1,c,o,n);case 61:return new w(O.EQUALS,i,i+1,c,o,n);case 64:return new w(O.AT,i,i+1,c,o,n);case 91:return new w(O.BRACKET_L,i,i+1,c,o,n);case 93:return new w(O.BRACKET_R,i,i+1,c,o,n);case 123:return new w(O.BRACE_L,i,i+1,c,o,n);case 124:return new w(O.PIPE,i,i+1,c,o,n);case 125:return new w(O.BRACE_R,i,i+1,c,o,n);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return U(t,i,c,o,n);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return S(t,i,u,c,o,n);case 34:return 34===_.call(r,i+1)&&34===_.call(r,i+2)?B(t,i,c,o,n):P(t,i,c,o,n)}throw N(t,i,y(u))}function y(e){return e<32&&9!==e&&10!==e&&13!==e?"Cannot contain the invalid character ".concat(L(e),"."):39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(L(e),".")}function g(e,n,t){var r=e.length,a=n;while(a<r){var i=_.call(e,a);if(9===i||32===i||44===i||65279===i)++a;else if(10===i)++a,++t.line,t.lineStart=a;else{if(13!==i)break;10===_.call(e,a+1)?a+=2:++a,++t.line,t.lineStart=a}}return a}function b(e,n,t,r,a){var i,c=e.body,o=n;do{i=_.call(c,++o)}while(null!==i&&(i>31||9===i));return new w(O.COMMENT,n,o,t,r,a,m.call(c,n+1,o))}function S(e,n,t,r,a,i){var c=e.body,o=t,u=n,l=!1;if(45===o&&(o=_.call(c,++u)),48===o){if(o=_.call(c,++u),o>=48&&o<=57)throw N(e,u,"Invalid number, unexpected digit after 0: ".concat(L(o),"."))}else u=F(e,u,o),o=_.call(c,u);return 46===o&&(l=!0,o=_.call(c,++u),u=F(e,u,o),o=_.call(c,u)),69!==o&&101!==o||(l=!0,o=_.call(c,++u),43!==o&&45!==o||(o=_.call(c,++u)),u=F(e,u,o)),new w(l?O.FLOAT:O.INT,n,u,r,a,i,m.call(c,n,u))}function F(e,n,t){var r=e.body,a=n,i=t;if(i>=48&&i<=57){do{i=_.call(r,++a)}while(i>=48&&i<=57);return a}throw N(e,a,"Invalid number, expected digit but got: ".concat(L(i),"."))}function P(e,n,t,r,a){var i=e.body,c=n+1,o=c,u=0,l="";while(c<i.length&&null!==(u=_.call(i,c))&&10!==u&&13!==u){if(34===u)return l+=m.call(i,o,c),new w(O.STRING,n,c+1,t,r,a,l);if(u<32&&9!==u)throw N(e,c,"Invalid character within String: ".concat(L(u),"."));if(++c,92===u){switch(l+=m.call(i,o,c-1),u=_.call(i,c),u){case 34:l+='"';break;case 47:l+="/";break;case 92:l+="\\";break;case 98:l+="\b";break;case 102:l+="\f";break;case 110:l+="\n";break;case 114:l+="\r";break;case 116:l+="\t";break;case 117:var s=D(_.call(i,c+1),_.call(i,c+2),_.call(i,c+3),_.call(i,c+4));if(s<0)throw N(e,c,"Invalid character escape sequence: "+"\\u".concat(i.slice(c+1,c+5),"."));l+=String.fromCharCode(s),c+=4;break;default:throw N(e,c,"Invalid character escape sequence: \\".concat(String.fromCharCode(u),"."))}++c,o=c}}throw N(e,c,"Unterminated string.")}function B(e,n,t,r,a){var i=e.body,c=n+3,o=c,u=0,l="";while(c<i.length&&null!==(u=_.call(i,c))){if(34===u&&34===_.call(i,c+1)&&34===_.call(i,c+2))return l+=m.call(i,o,c),new w(O.BLOCK_STRING,n,c+3,t,r,a,h(l));if(u<32&&9!==u&&10!==u&&13!==u)throw N(e,c,"Invalid character within String: ".concat(L(u),"."));92===u&&34===_.call(i,c+1)&&34===_.call(i,c+2)&&34===_.call(i,c+3)?(l+=m.call(i,o,c)+'"""',c+=4,o=c):++c}throw N(e,c,"Unterminated string.")}function D(e,n,t,r){return M(e)<<12|M(n)<<8|M(t)<<4|M(r)}function M(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function U(e,n,t,r,a){var i=e.body,c=i.length,o=n+1,u=0;while(o!==c&&null!==(u=_.call(i,o))&&(95===u||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122))++o;return new w(O.NAME,n,o,t,r,a,m.call(i,n,o))}w.prototype.toJSON=w.prototype.inspect=function(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}};var x=t("fe35"),G=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"});function j(e,n){var t="string"===typeof e?new o(e):e;if(!(t instanceof o))throw new TypeError("Must provide Source. Received: ".concat(Object(r["a"])(t)));var a=k(t,n||{});return K(a)}function V(e,n){var t="string"===typeof e?new o(e):e,r=k(t,n||{});en(r,O.SOF);var a=ue(r,!1);return en(r,O.EOF),a}function Y(e,n){var t="string"===typeof e?new o(e):e,r=k(t,n||{});en(r,O.SOF);var a=Ie(r);return en(r,O.EOF),a}function J(e){var n=en(e,O.NAME);return{kind:x["a"].NAME,value:n.value,loc:He(e,n)}}function K(e){var n=e.token;return{kind:x["a"].DOCUMENT,definitions:an(e,O.SOF,q,O.EOF),loc:He(e,n)}}function q(e){if($e(e,O.NAME))switch(e.token.value){case"query":case"mutation":case"subscription":case"fragment":return Q(e);case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return ke(e);case"extend":return xe(e)}else{if($e(e,O.BRACE_L))return Q(e);if(Ae(e))return ke(e)}throw tn(e)}function Q(e){if($e(e,O.NAME))switch(e.token.value){case"query":case"mutation":case"subscription":return X(e);case"fragment":return ce(e)}else if($e(e,O.BRACE_L))return X(e);throw tn(e)}function X(e){var n=e.token;if($e(e,O.BRACE_L))return{kind:x["a"].OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:Z(e),loc:He(e,n)};var t,r=z(e);return $e(e,O.NAME)&&(t=J(e)),{kind:x["a"].OPERATION_DEFINITION,operation:r,name:t,variableDefinitions:H(e),directives:Ne(e,!1),selectionSet:Z(e),loc:He(e,n)}}function z(e){var n=en(e,O.NAME);switch(n.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw tn(e,n)}function H(e){return $e(e,O.PAREN_L)?an(e,O.PAREN_L,W,O.PAREN_R):[]}function W(e){var n=e.token;return e.options.experimentalVariableDefinitionDirectives?{kind:x["a"].VARIABLE_DEFINITION,variable:$(e),type:(en(e,O.COLON),Ie(e)),defaultValue:Ze(e,O.EQUALS)?ue(e,!0):void 0,directives:Ne(e,!0),loc:He(e,n)}:{kind:x["a"].VARIABLE_DEFINITION,variable:$(e),type:(en(e,O.COLON),Ie(e)),defaultValue:Ze(e,O.EQUALS)?ue(e,!0):void 0,loc:He(e,n)}}function $(e){var n=e.token;return en(e,O.DOLLAR),{kind:x["a"].VARIABLE,name:J(e),loc:He(e,n)}}function Z(e){var n=e.token;return{kind:x["a"].SELECTION_SET,selections:an(e,O.BRACE_L,ee,O.BRACE_R),loc:He(e,n)}}function ee(e){return $e(e,O.SPREAD)?ie(e):ne(e)}function ne(e){var n,t,r=e.token,a=J(e);return Ze(e,O.COLON)?(n=a,t=J(e)):t=a,{kind:x["a"].FIELD,alias:n,name:t,arguments:te(e,!1),directives:Ne(e,!1),selectionSet:$e(e,O.BRACE_L)?Z(e):void 0,loc:He(e,r)}}function te(e,n){var t=n?ae:re;return $e(e,O.PAREN_L)?an(e,O.PAREN_L,t,O.PAREN_R):[]}function re(e){var n=e.token;return{kind:x["a"].ARGUMENT,name:J(e),value:(en(e,O.COLON),ue(e,!1)),loc:He(e,n)}}function ae(e){var n=e.token;return{kind:x["a"].ARGUMENT,name:J(e),value:(en(e,O.COLON),se(e)),loc:He(e,n)}}function ie(e){var n,t=e.token;return en(e,O.SPREAD),$e(e,O.NAME)&&"on"!==e.token.value?{kind:x["a"].FRAGMENT_SPREAD,name:oe(e),directives:Ne(e,!1),loc:He(e,t)}:("on"===e.token.value&&(e.advance(),n=pe(e)),{kind:x["a"].INLINE_FRAGMENT,typeCondition:n,directives:Ne(e,!1),selectionSet:Z(e),loc:He(e,t)})}function ce(e){var n=e.token;return nn(e,"fragment"),e.options.experimentalFragmentVariables?{kind:x["a"].FRAGMENT_DEFINITION,name:oe(e),variableDefinitions:H(e),typeCondition:(nn(e,"on"),pe(e)),directives:Ne(e,!1),selectionSet:Z(e),loc:He(e,n)}:{kind:x["a"].FRAGMENT_DEFINITION,name:oe(e),typeCondition:(nn(e,"on"),pe(e)),directives:Ne(e,!1),selectionSet:Z(e),loc:He(e,n)}}function oe(e){if("on"===e.token.value)throw tn(e);return J(e)}function ue(e,n){var t=e.token;switch(t.kind){case O.BRACKET_L:return de(e,n);case O.BRACE_L:return ve(e,n);case O.INT:return e.advance(),{kind:x["a"].INT,value:t.value,loc:He(e,t)};case O.FLOAT:return e.advance(),{kind:x["a"].FLOAT,value:t.value,loc:He(e,t)};case O.STRING:case O.BLOCK_STRING:return le(e);case O.NAME:return"true"===t.value||"false"===t.value?(e.advance(),{kind:x["a"].BOOLEAN,value:"true"===t.value,loc:He(e,t)}):"null"===t.value?(e.advance(),{kind:x["a"].NULL,loc:He(e,t)}):(e.advance(),{kind:x["a"].ENUM,value:t.value,loc:He(e,t)});case O.DOLLAR:if(!n)return $(e);break}throw tn(e)}function le(e){var n=e.token;return e.advance(),{kind:x["a"].STRING,value:n.value,block:n.kind===O.BLOCK_STRING,loc:He(e,n)}}function se(e){return ue(e,!0)}function fe(e){return ue(e,!1)}function de(e,n){var t=e.token,r=n?se:fe;return{kind:x["a"].LIST,values:rn(e,O.BRACKET_L,r,O.BRACKET_R),loc:He(e,t)}}function ve(e,n){var t=e.token;en(e,O.BRACE_L);var r=[];while(!Ze(e,O.BRACE_R))r.push(Ee(e,n));return{kind:x["a"].OBJECT,fields:r,loc:He(e,t)}}function Ee(e,n){var t=e.token;return{kind:x["a"].OBJECT_FIELD,name:J(e),value:(en(e,O.COLON),ue(e,n)),loc:He(e,t)}}function Ne(e,n){var t=[];while($e(e,O.AT))t.push(he(e,n));return t}function he(e,n){var t=e.token;return en(e,O.AT),{kind:x["a"].DIRECTIVE,name:J(e),arguments:te(e,n),loc:He(e,t)}}function Ie(e){var n,t=e.token;return Ze(e,O.BRACKET_L)?(n=Ie(e),en(e,O.BRACKET_R),n={kind:x["a"].LIST_TYPE,type:n,loc:He(e,t)}):n=pe(e),Ze(e,O.BANG)?{kind:x["a"].NON_NULL_TYPE,type:n,loc:He(e,t)}:n}function pe(e){var n=e.token;return{kind:x["a"].NAMED_TYPE,name:J(e),loc:He(e,n)}}function ke(e){var n=Ae(e)?e.lookahead():e.token;if(n.kind===O.NAME)switch(n.value){case"schema":return Oe(e);case"scalar":return _e(e);case"type":return me(e);case"interface":return be(e);case"union":return Se(e);case"enum":return Pe(e);case"input":return Me(e);case"directive":return Qe(e)}throw tn(e,n)}function Ae(e){return $e(e,O.STRING)||$e(e,O.BLOCK_STRING)}function Te(e){if(Ae(e))return le(e)}function Oe(e){var n=e.token;nn(e,"schema");var t=Ne(e,!0),r=an(e,O.BRACE_L,Re,O.BRACE_R);return{kind:x["a"].SCHEMA_DEFINITION,directives:t,operationTypes:r,loc:He(e,n)}}function Re(e){var n=e.token,t=z(e);en(e,O.COLON);var r=pe(e);return{kind:x["a"].OPERATION_TYPE_DEFINITION,operation:t,type:r,loc:He(e,n)}}function _e(e){var n=e.token,t=Te(e);nn(e,"scalar");var r=J(e),a=Ne(e,!0);return{kind:x["a"].SCALAR_TYPE_DEFINITION,description:t,name:r,directives:a,loc:He(e,n)}}function me(e){var n=e.token,t=Te(e);nn(e,"type");var r=J(e),a=we(e),i=Ne(e,!0),c=Le(e);return{kind:x["a"].OBJECT_TYPE_DEFINITION,description:t,name:r,interfaces:a,directives:i,fields:c,loc:He(e,n)}}function we(e){var n=[];if("implements"===e.token.value){e.advance(),Ze(e,O.AMP);do{n.push(pe(e))}while(Ze(e,O.AMP)||e.options.allowLegacySDLImplementsInterfaces&&$e(e,O.NAME))}return n}function Le(e){return e.options.allowLegacySDLEmptyFields&&$e(e,O.BRACE_L)&&e.lookahead().kind===O.BRACE_R?(e.advance(),e.advance(),[]):$e(e,O.BRACE_L)?an(e,O.BRACE_L,Ce,O.BRACE_R):[]}function Ce(e){var n=e.token,t=Te(e),r=J(e),a=ye(e);en(e,O.COLON);var i=Ie(e),c=Ne(e,!0);return{kind:x["a"].FIELD_DEFINITION,description:t,name:r,arguments:a,type:i,directives:c,loc:He(e,n)}}function ye(e){return $e(e,O.PAREN_L)?an(e,O.PAREN_L,ge,O.PAREN_R):[]}function ge(e){var n=e.token,t=Te(e),r=J(e);en(e,O.COLON);var a,i=Ie(e);Ze(e,O.EQUALS)&&(a=se(e));var c=Ne(e,!0);return{kind:x["a"].INPUT_VALUE_DEFINITION,description:t,name:r,type:i,defaultValue:a,directives:c,loc:He(e,n)}}function be(e){var n=e.token,t=Te(e);nn(e,"interface");var r=J(e),a=Ne(e,!0),i=Le(e);return{kind:x["a"].INTERFACE_TYPE_DEFINITION,description:t,name:r,directives:a,fields:i,loc:He(e,n)}}function Se(e){var n=e.token,t=Te(e);nn(e,"union");var r=J(e),a=Ne(e,!0),i=Fe(e);return{kind:x["a"].UNION_TYPE_DEFINITION,description:t,name:r,directives:a,types:i,loc:He(e,n)}}function Fe(e){var n=[];if(Ze(e,O.EQUALS)){Ze(e,O.PIPE);do{n.push(pe(e))}while(Ze(e,O.PIPE))}return n}function Pe(e){var n=e.token,t=Te(e);nn(e,"enum");var r=J(e),a=Ne(e,!0),i=Be(e);return{kind:x["a"].ENUM_TYPE_DEFINITION,description:t,name:r,directives:a,values:i,loc:He(e,n)}}function Be(e){return $e(e,O.BRACE_L)?an(e,O.BRACE_L,De,O.BRACE_R):[]}function De(e){var n=e.token,t=Te(e),r=J(e),a=Ne(e,!0);return{kind:x["a"].ENUM_VALUE_DEFINITION,description:t,name:r,directives:a,loc:He(e,n)}}function Me(e){var n=e.token,t=Te(e);nn(e,"input");var r=J(e),a=Ne(e,!0),i=Ue(e);return{kind:x["a"].INPUT_OBJECT_TYPE_DEFINITION,description:t,name:r,directives:a,fields:i,loc:He(e,n)}}function Ue(e){return $e(e,O.BRACE_L)?an(e,O.BRACE_L,ge,O.BRACE_R):[]}function xe(e){var n=e.lookahead();if(n.kind===O.NAME)switch(n.value){case"schema":return Ge(e);case"scalar":return je(e);case"type":return Ve(e);case"interface":return Ye(e);case"union":return Je(e);case"enum":return Ke(e);case"input":return qe(e)}throw tn(e,n)}function Ge(e){var n=e.token;nn(e,"extend"),nn(e,"schema");var t=Ne(e,!0),r=$e(e,O.BRACE_L)?an(e,O.BRACE_L,Re,O.BRACE_R):[];if(0===t.length&&0===r.length)throw tn(e);return{kind:x["a"].SCHEMA_EXTENSION,directives:t,operationTypes:r,loc:He(e,n)}}function je(e){var n=e.token;nn(e,"extend"),nn(e,"scalar");var t=J(e),r=Ne(e,!0);if(0===r.length)throw tn(e);return{kind:x["a"].SCALAR_TYPE_EXTENSION,name:t,directives:r,loc:He(e,n)}}function Ve(e){var n=e.token;nn(e,"extend"),nn(e,"type");var t=J(e),r=we(e),a=Ne(e,!0),i=Le(e);if(0===r.length&&0===a.length&&0===i.length)throw tn(e);return{kind:x["a"].OBJECT_TYPE_EXTENSION,name:t,interfaces:r,directives:a,fields:i,loc:He(e,n)}}function Ye(e){var n=e.token;nn(e,"extend"),nn(e,"interface");var t=J(e),r=Ne(e,!0),a=Le(e);if(0===r.length&&0===a.length)throw tn(e);return{kind:x["a"].INTERFACE_TYPE_EXTENSION,name:t,directives:r,fields:a,loc:He(e,n)}}function Je(e){var n=e.token;nn(e,"extend"),nn(e,"union");var t=J(e),r=Ne(e,!0),a=Fe(e);if(0===r.length&&0===a.length)throw tn(e);return{kind:x["a"].UNION_TYPE_EXTENSION,name:t,directives:r,types:a,loc:He(e,n)}}function Ke(e){var n=e.token;nn(e,"extend"),nn(e,"enum");var t=J(e),r=Ne(e,!0),a=Be(e);if(0===r.length&&0===a.length)throw tn(e);return{kind:x["a"].ENUM_TYPE_EXTENSION,name:t,directives:r,values:a,loc:He(e,n)}}function qe(e){var n=e.token;nn(e,"extend"),nn(e,"input");var t=J(e),r=Ne(e,!0),a=Ue(e);if(0===r.length&&0===a.length)throw tn(e);return{kind:x["a"].INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:r,fields:a,loc:He(e,n)}}function Qe(e){var n=e.token,t=Te(e);nn(e,"directive"),en(e,O.AT);var r=J(e),a=ye(e);nn(e,"on");var i=Xe(e);return{kind:x["a"].DIRECTIVE_DEFINITION,description:t,name:r,arguments:a,locations:i,loc:He(e,n)}}function Xe(e){Ze(e,O.PIPE);var n=[];do{n.push(ze(e))}while(Ze(e,O.PIPE));return n}function ze(e){var n=e.token,t=J(e);if(G.hasOwnProperty(t.value))return t;throw tn(e,n)}function He(e,n){if(!e.options.noLocation)return new We(n,e.lastToken,e.source)}function We(e,n,t){this.start=e.start,this.end=n.end,this.startToken=e,this.endToken=n,this.source=t}function $e(e,n){return e.token.kind===n}function Ze(e,n){var t=e.token.kind===n;return t&&e.advance(),t}function en(e,n){var t=e.token;if(t.kind===n)return e.advance(),t;throw N(e.source,t.start,"Expected ".concat(n,", found ").concat(R(t)))}function nn(e,n){var t=e.token;if(t.kind===O.NAME&&t.value===n)return e.advance(),t;throw N(e.source,t.start,'Expected "'.concat(n,'", found ').concat(R(t)))}function tn(e,n){var t=n||e.token;return N(e.source,t.start,"Unexpected ".concat(R(t)))}function rn(e,n,t,r){en(e,n);var a=[];while(!Ze(e,r))a.push(t(e));return a}function an(e,n,t,r){en(e,n);var a=[t(e)];while(!Ze(e,r))a.push(t(e));return a}t.d(n,"parse",function(){return j}),t.d(n,"parseValue",function(){return V}),t.d(n,"parseType",function(){return Y}),t.d(n,"parseConstValue",function(){return se}),t.d(n,"parseTypeReference",function(){return Ie}),t.d(n,"parseNamedType",function(){return pe}),We.prototype.toJSON=We.prototype.inspect=function(){return{start:this.start,end:this.end}}},8785:function(e,n,t){"use strict";function r(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,"a",function(){return r})},9530:function(e,n,t){var r=t("10cc"),a=r.parse;function i(e){return e.replace(/[\s,]+/g," ").trim()}var c={},o={};function u(e){return i(e.source.body.substring(e.start,e.end))}function l(){c={},o={}}var s=!0;function f(e){for(var n={},t=[],r=0;r<e.definitions.length;r++){var a=e.definitions[r];if("FragmentDefinition"===a.kind){var i=a.name.value,c=u(a.loc);o.hasOwnProperty(i)&&!o[i][c]?(s&&console.warn("Warning: fragment with name "+i+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"),o[i][c]=!0):o.hasOwnProperty(i)||(o[i]={},o[i][c]=!0),n[c]||(n[c]=!0,t.push(a))}else t.push(a)}return e.definitions=t,e}function d(){s=!1}function v(e,n){var t=Object.prototype.toString.call(e);if("[object Array]"===t)return e.map(function(e){return v(e,n)});if("[object Object]"!==t)throw new Error("Unexpected input.");n&&e.loc&&delete e.loc,e.loc&&(delete e.loc.startToken,delete e.loc.endToken);var r,a,i,c=Object.keys(e);for(r in c)c.hasOwnProperty(r)&&(a=e[c[r]],i=Object.prototype.toString.call(a),"[object Object]"!==i&&"[object Array]"!==i||(e[c[r]]=v(a,!0)));return e}var E=!1;function N(e){var n=i(e);if(c[n])return c[n];var t=a(e,{experimentalFragmentVariables:E});if(!t||"Document"!==t.kind)throw new Error("Not a valid GraphQL document.");return t=f(t),t=v(t,!1),c[n]=t,t}function h(){E=!0}function I(){E=!1}function p(){for(var e=Array.prototype.slice.call(arguments),n=e[0],t="string"===typeof n?n:n[0],r=1;r<e.length;r++)e[r]&&e[r].kind&&"Document"===e[r].kind?t+=e[r].loc.source.body:t+=e[r],t+=n[r];return N(t)}p.default=p,p.resetCaches=l,p.disableFragmentWarnings=d,p.enableExperimentalFragmentVariables=h,p.disableExperimentalFragmentVariables=I,e.exports=p}}]);
//# sourceMappingURL=chunk-8ed522dc.9bb0caeb.js.map