(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f56dd96"],{"724c":function(t,e,n){"use strict";var a=n("8dc9"),i=n.n(a);i.a},"8dc9":function(t,e,n){},ff48:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"align-space-between":"","justify-start":"",column:""}},[n("h1",{staticClass:"display-1"},[t._v("Commodities")]),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.commodities,pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",{staticClass:"mono"},[t._v(t._s(e.item.id))]),n("td",[t._v(t._s(e.item.name))]),n("td",[t._v(t._s(e.item.commodityCategory.name))])]}}])})],1)},i=[],o=n("8785"),c=n("d4ec"),s=n("99de"),r=n("7e84"),d=n("262e"),m=(n("cadf"),n("551c"),n("097d"),n("9ab4")),u=n("9530"),l=n.n(u),f=n("60a3");function p(){var t=Object(o["a"])(["\n\t\t\tquery commodities {\n\t\t\t\tcommodities {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\t... on Commodity {\n\t\t\t\t\t\tcommodityCategory {\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t"]);return p=function(){return t},t}var v=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(s["a"])(this,Object(r["a"])(e).call(this)),t.pagination={rowsPerPage:10},t.headers=[{text:"ID ",value:"id",width:"400"},{text:"Name ",value:"name"},{text:"Category ",value:"commodityCategory.name"}],t}return Object(d["a"])(e,t),e}(f["c"]);v=m["a"]([Object(f["a"])({apollo:{commodities:l()(p())}}),m["b"]("design:paramtypes",[])],v);var y=v,b=y,g=(n("724c"),n("2877")),_=Object(g["a"])(b,a,i,!1,null,"674c9fec",null);_.options.__file="item.vue";e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-4f56dd96.aeffb325.js.map