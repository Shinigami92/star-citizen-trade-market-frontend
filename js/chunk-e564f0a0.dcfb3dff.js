(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e564f0a0"],{"0fd9":function(e,t,n){"use strict";n("4b85");var a=n("2b0e"),r=n("d9f7"),o=n("80d2");const l=["sm","md","lg","xl"],i=["start","end","center"];function c(e,t){return l.reduce((n,a)=>(n[e+Object(o["F"])(a)]=t(),n),{})}const u=e=>[...i,"baseline","stretch"].includes(e),s=c("align",()=>({type:String,default:null,validator:u})),f=e=>[...i,"space-between","space-around"].includes(e),d=c("justify",()=>({type:String,default:null,validator:f})),p=e=>[...i,"space-between","space-around","stretch"].includes(e),g=c("alignContent",()=>({type:String,default:null,validator:p})),y={align:Object.keys(s),justify:Object.keys(d),alignContent:Object.keys(g)},b={align:"align",justify:"justify",alignContent:"align-content"};function j(e,t,n){let a=b[e];if(null!=n){if(t){const n=t.replace(e,"");a+="-"+n}return a+="-"+n,a.toLowerCase()}}const v=new Map;t["a"]=a["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...s,justify:{type:String,default:null,validator:f},...d,alignContent:{type:String,default:null,validator:p},...g},render(e,{props:t,data:n,children:a}){let o="";for(const r in t)o+=String(t[r]);let l=v.get(o);if(!l){let e;for(e in l=[],y)y[e].forEach(n=>{const a=t[n],r=j(e,n,a);r&&l.push(r)});l.push({"no-gutters":t.noGutters,"row--dense":t.dense,["align-"+t.align]:t.align,["justify-"+t.justify]:t.justify,["align-content-"+t.alignContent]:t.alignContent}),v.set(o,l)}return e(t.tag,Object(r["a"])(n,{staticClass:"row",class:l}),a)}})},"60a3":function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return c}));var a=n("2fe1");n.d(t,"a",(function(){return a["b"]}));var r="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function o(e,t,n){if(r&&!Array.isArray(e)&&"function"!==typeof e&&"undefined"===typeof e.type){var a=Reflect.getMetadata("design:type",t,n);a!==Object&&(e.type=a)}}function l(e,t){return void 0===t&&(t={}),function(n,r){o(t,n,r),Object(a["a"])((function(n,a){(n.props||(n.props={}))[a]=t,n.model={prop:a,event:e||a}}))(n,r)}}function i(e){return void 0===e&&(e={}),function(t,n){o(e,t,n),Object(a["a"])((function(t,n){(t.props||(t.props={}))[n]=e}))(t,n)}}function c(e,t){void 0===t&&(t={});var n=t.deep,r=void 0!==n&&n,o=t.immediate,l=void 0!==o&&o;return Object(a["a"])((function(t,n){"object"!==typeof t.watch&&(t.watch=Object.create(null));var a=t.watch;"object"!==typeof a[e]||Array.isArray(a[e])?"undefined"===typeof a[e]&&(a[e]=[]):a[e]=[a[e]],a[e].push({handler:n,deep:r,immediate:l})}))}},"62ad":function(e,t,n){"use strict";n("4b85");var a=n("2b0e"),r=n("d9f7"),o=n("80d2");const l=["sm","md","lg","xl"],i=(()=>l.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),c=(()=>l.reduce((e,t)=>(e["offset"+Object(o["F"])(t)]={type:[String,Number],default:null},e),{}))(),u=(()=>l.reduce((e,t)=>(e["order"+Object(o["F"])(t)]={type:[String,Number],default:null},e),{}))(),s={col:Object.keys(i),offset:Object.keys(c),order:Object.keys(u)};function f(e,t,n){let a=e;if(null!=n&&!1!==n){if(t){const n=t.replace(e,"");a+="-"+n}return"col"!==e||""!==n&&!0!==n?(a+="-"+n,a.toLowerCase()):a.toLowerCase()}}const d=new Map;t["a"]=a["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...c,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:n,children:a,parent:o}){let l="";for(const r in t)l+=String(t[r]);let i=d.get(l);if(!i){let e;for(e in i=[],s)s[e].forEach(n=>{const a=t[n],r=f(e,n,a);r&&i.push(r)});const n=i.some(e=>e.startsWith("col-"));i.push({col:!n||!t.cols,["col-"+t.cols]:t.cols,["offset-"+t.offset]:t.offset,["order-"+t.order]:t.order,["align-self-"+t.alignSelf]:t.alignSelf}),d.set(l,i)}return e(t.tag,Object(r["a"])(n,{class:i}),a)}})},"926d":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",[n("h1",{staticClass:"display-1"},[e._v("soon™")])])],1)},r=[],o=n("d4ec"),l=n("262e"),i=n("2caf"),c=n("9ab4"),u=n("2b0e"),s=n("60a3"),f=function(e){Object(l["a"])(n,e);var t=Object(i["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return n}(u["a"]);f=Object(c["c"])([s["a"]],f);var d=f,p=d,g=n("2877"),y=n("6544"),b=n.n(y),j=n("62ad"),v=n("0fd9"),h=Object(g["a"])(p,a,r,!1,null,null,null);t["default"]=h.exports;b()(h,{VCol:j["a"],VRow:v["a"]})}}]);
//# sourceMappingURL=chunk-e564f0a0.dcfb3dff.js.map