(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0efc91"],{"9a1d":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"align-space-between":"","justify-start":"",column:""}},[n("h1",{staticClass:"display-1"},[t._v("Items")]),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.elements,pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",[t._v(t._s(e.item.name))]),n("td",[t._v(t._s(e.item.type))]),n("td",[e.item.inGameSince?n("span",[t._v(t._s(t._f("moment")(e.item.inGameSince,"LLL")))]):t._e()]),n("td",{staticClass:"mono"},[t._v(t._s(e.item.inGameSinceVersion.identifier))]),n("td",{staticClass:"mono"},[t._v(t._s(e.item.id))])]}}])})],1)},a=[],s=n("8785"),r=n("d4ec"),c=n("99de"),o=n("7e84"),l=n("262e"),m=n("9ab4"),u=n("9530"),d=n.n(u),p=n("60a3");function v(){var t=Object(s["a"])(["\n\t\t\tquery {\n\t\t\t\telements: items {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\ttype\n\t\t\t\t\tinGameSince\n\t\t\t\t\tinGameSinceVersion {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tidentifier\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t"]);return v=function(){return t},t}var f=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(c["a"])(this,Object(o["a"])(e).call(this)),t.pagination={rowsPerPage:10,sortBy:"name"},t.headers=[{text:"Name ",value:"name"},{text:"Type ",value:"type"},{text:"First Time Seen ",value:"inGameSince"},{text:"Since Version ",value:"inGameSinceVersion.identifier"},{text:"ID ",value:"id",width:"306"}],t}return Object(l["a"])(e,t),e}(p["d"]);f=m["a"]([Object(p["a"])({apollo:{elements:d()(v())}}),m["b"]("design:paramtypes",[])],f);var _=f,b=_,h=n("2877"),y=Object(h["a"])(b,i,a,!1,null,null,null);y.options.__file="index.vue";e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-2d0efc91.6174a5e1.js.map