(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f6d8"],{b41a:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"align-space-between":"","justify-start":"",column:""}},[n("h1",{staticClass:"display-1"},[t._v("Accounts")]),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.elements,pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",{staticClass:"mono"},[t._v(t._s(e.item.id))]),n("td",[t._v(t._s(e.item.username))]),n("td",[t._v(t._s(e.item.handle))]),n("td",[t._v(t._s(e.item.roles.join(", ")))])]}}])})],1)},s=[],i=n("aede"),r=n("d225"),l=n("308d"),o=n("6bb5"),u=n("4e2b"),c=n("9ab4"),d=n("9530"),m=n.n(d),p=n("60a3");function v(){var t=Object(i["a"])(["\n\t\t\tquery {\n\t\t\t\telements: accounts {\n\t\t\t\t\tid\n\t\t\t\t\tusername\n\t\t\t\t\thandle\n\t\t\t\t\t# email\n\t\t\t\t\troles\n\t\t\t\t}\n\t\t\t}\n\t\t"]);return v=function(){return t},t}var b=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(l["a"])(this,Object(o["a"])(e).call(this)),t.pagination={rowsPerPage:10,sortBy:"username"},t.headers=[{text:"ID ",value:"id",width:"306"},{text:"Username ",value:"username"},{text:"Handle ",value:"handle"},{text:"Roles ",value:"roles"}],t}return Object(u["a"])(e,t),e}(p["d"]);b=c["a"]([Object(p["a"])({apollo:{elements:m()(v())}}),c["b"]("design:paramtypes",[])],b);var f=b,h=f,_=n("0c7c"),j=Object(_["a"])(h,a,s,!1,null,null,null);j.options.__file="index.vue";e["default"]=j.exports}}]);
//# sourceMappingURL=chunk-2d20f6d8.27364c1b.js.map