(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2214fd"],{ca8a:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",[a("v-col",[a("h1",{staticClass:"display-1 mb-2"},[e._v("Game Versions")]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.elements,"sort-by":"release","sort-desc":!0,"items-per-page":15,height:e.tableHeight,dense:""},scopedSlots:e._u([{key:"body",fn:function(t){var n=t.items;return[a("tbody",e._l(n,(function(t){return a("tr",{key:t.id},[a("td",{staticClass:"mono"},[e._v(e._s(t.identifier))]),a("td",[e._v(e._s(e._f("moment")(t.release,"LLL")))]),a("td",{staticClass:"mono"},[e._v(e._s(t.id))])])})),0)]}}])})],1)],1)},i=[],s=a("8785"),r=a("d4ec"),l=a("bee2"),d=a("99de"),o=a("7e84"),c=a("262e"),u=a("9ab4"),b=a("9530"),h=a.n(b),f=a("2b0e"),v=a("60a3");function p(){var e=Object(s["a"])(["\n      query {\n        elements: gameVersions {\n          id\n          identifier\n          release\n        }\n      }\n    "]);return p=function(){return e},e}var m=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(d["a"])(this,Object(o["a"])(t).call(this)),e.headers=[{text:"Identifier",width:190,value:"identifier"},{text:"Release",width:230,value:"release"},{text:"ID",width:340,value:"id"}],e.tableHeight=0,e}return Object(c["a"])(t,e),Object(l["a"])(t,[{key:"updateTableHeight",value:function(){this.tableHeight=window.innerHeight-this.$vuetify.application.top-204}},{key:"mounted",value:function(){var e=this;this.updateTableHeight(),window.addEventListener("resize",(function(){return e.updateTableHeight()}))}}]),t}(f["a"]);m=Object(u["c"])([Object(v["a"])({apollo:{elements:h()(p())}})],m);var w=m,_=w,g=a("0c7c"),y=a("6544"),j=a.n(y),O=a("62ad"),k=a("8fea"),H=a("0fd9"),C=Object(g["a"])(_,n,i,!1,null,null,null);t["default"]=C.exports;j()(C,{VCol:O["a"],VDataTable:k["a"],VRow:H["a"]})}}]);
//# sourceMappingURL=chunk-2d2214fd.3dc03fae.js.map