(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b8a85"],{"302d":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",[n("h1",{staticClass:"display-1 mb-2"},[e._v("Item Prices")]),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.elements,"sort-by":"scanTime","sort-desc":!0,"items-per-page":30,height:e.tableHeight,dense:""},scopedSlots:e._u([{key:"body",fn:function(t){var i=t.items;return[n("tbody",e._l(i,(function(t){return n("tr",{key:t.id},[n("td",[e._v(e._s(t.item.name)+" ("+e._s(t.item.type)+")")]),n("td",[e._v(" "+e._s(t.location.name)+" ("+e._s(t.location.type.name)+") - ("+e._s(t.location.parentLocation.name)+") ")]),n("td",{staticClass:"text-right"},[e._v(e._s(t.price.toFixed(2)))]),n("td",{staticClass:"text-right"},[e._v(e._s(t.quantity))]),n("td",{staticClass:"text-right"},[e._v(e._s(t.unitPrice.toFixed(2)))]),n("td",[e._v(e._s(t.visibility))]),n("td",[e._v(e._s(e._f("moment")(t.scanTime,"LLL")))]),n("td",[e._v(e._s(t.type))]),n("td",[e._v(e._s(t.scannedBy.username))]),n("td",{staticClass:"mono"},[e._v(e._s(t.scannedInGameVersion.identifier))]),n("td",{staticClass:"mono"},[e._v(e._s(t.id))])])})),0)]}}])})],1)],1)},a=[],s=n("8785"),c=n("d4ec"),d=n("bee2"),r=n("99de"),o=n("7e84"),l=n("262e"),u=n("9ab4"),v=n("9530"),m=n.n(v),b=n("2b0e"),h=n("60a3");function _(){var e=Object(s["a"])(["\n      query {\n        elements: itemPrices {\n          id\n          item {\n            id\n            name\n            type\n          }\n          location {\n            id\n            name\n            type {\n              id\n              name\n            }\n            parentLocation {\n              id\n              name\n            }\n          }\n          price\n          quantity\n          unitPrice\n          visibility\n          scanTime\n          type\n          scannedBy {\n            id\n            username\n          }\n          scannedInGameVersion {\n            id\n            identifier\n          }\n        }\n      }\n    "]);return _=function(){return e},e}var p=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(r["a"])(this,Object(o["a"])(t).call(this)),e.headers=[{text:"Item",width:250,value:"item.name"},{text:"Location",width:370,value:"location.name"},{text:"Price",value:"price"},{text:"Quantity",value:"quantity"},{text:"Unit Price",value:"unitPrice"},{text:"Visibility",value:"visibility"},{text:"Scan Time",width:240,value:"scanTime"},{text:"Type",value:"type"},{text:"Scanned By",value:"scannedBy.username"},{text:"Scanned In Version",width:190,value:"scannedInGameVersion.identifier"},{text:"ID",width:340,value:"id"}],e.tableHeight=0,e}return Object(l["a"])(t,e),Object(d["a"])(t,[{key:"updateTableHeight",value:function(){this.tableHeight=window.innerHeight-this.$vuetify.application.top-204}},{key:"mounted",value:function(){var e=this;this.updateTableHeight(),window.addEventListener("resize",(function(){return e.updateTableHeight()}))}}]),t}(b["a"]);p=Object(u["c"])([Object(h["a"])({apollo:{elements:m()(_())}})],p);var y=p,f=y,w=n("0c7c"),x=n("6544"),g=n.n(x),T=n("62ad"),j=n("8fea"),O=n("0fd9"),C=Object(w["a"])(f,i,a,!1,null,null,null);t["default"]=C.exports;g()(C,{VCol:T["a"],VDataTable:j["a"],VRow:O["a"]})}}]);
//# sourceMappingURL=chunk-2d0b8a85.188d3eab.js.map