(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e564f0a0"],{"0fd9":function(e,t,n){"use strict";n("4b85");var r=n("2b0e"),a=n("d9f7"),l=n("80d2");const o=["sm","md","lg","xl"],i=["start","end","center"];function u(e,t){return o.reduce((n,r)=>{return n[e+Object(l["B"])(r)]=t(),n},{})}const c=e=>[...i,"baseline","stretch"].includes(e),s=u("align",()=>({type:String,default:null,validator:c})),f=e=>[...i,"space-between","space-around"].includes(e),d=u("justify",()=>({type:String,default:null,validator:f})),p=e=>[...i,"space-between","space-around","stretch"].includes(e),g=u("alignContent",()=>({type:String,default:null,validator:p})),y={align:Object.keys(s),justify:Object.keys(d),alignContent:Object.keys(g)},b={align:"align",justify:"justify",alignContent:"align-content"};function j(e,t,n){let r=b[e];if(null!=n){if(t){const n=t.replace(e,"");r+=`-${n}`}return r+=`-${n}`,r.toLowerCase()}}const v=new Map;t["a"]=r["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...s,justify:{type:String,default:null,validator:f},...d,alignContent:{type:String,default:null,validator:p},...g},render(e,{props:t,data:n,children:r}){let l="";for(const a in t)l+=String(t[a]);let o=v.get(l);if(!o){let e;for(e in o=[],y)y[e].forEach(n=>{const r=t[n],a=j(e,n,r);a&&o.push(a)});o.push({"no-gutters":t.noGutters,"row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),v.set(l,o)}return e(t.tag,Object(a["a"])(n,{staticClass:"row",class:o}),r)}})},"60a3":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return u}));var r=n("2fe1");n.d(t,"a",(function(){return r["b"]}));var a="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function l(e,t,n){a&&(Array.isArray(e)||"function"===typeof e||"undefined"!==typeof e.type||(e.type=Reflect.getMetadata("design:type",t,n)))}function o(e,t){return void 0===t&&(t={}),function(n,a){l(t,n,a),Object(r["a"])((function(n,r){(n.props||(n.props={}))[r]=t,n.model={prop:r,event:e||r}}))(n,a)}}function i(e){return void 0===e&&(e={}),function(t,n){l(e,t,n),Object(r["a"])((function(t,n){(t.props||(t.props={}))[n]=e}))(t,n)}}function u(e,t){void 0===t&&(t={});var n=t.deep,a=void 0!==n&&n,l=t.immediate,o=void 0!==l&&l;return Object(r["a"])((function(t,n){"object"!==typeof t.watch&&(t.watch=Object.create(null));var r=t.watch;"object"!==typeof r[e]||Array.isArray(r[e])?"undefined"===typeof r[e]&&(r[e]=[]):r[e]=[r[e]],r[e].push({handler:n,deep:a,immediate:o})}))}},"62ad":function(e,t,n){"use strict";n("4b85");var r=n("2b0e"),a=n("d9f7"),l=n("80d2");const o=["sm","md","lg","xl"],i=(()=>{return o.reduce((e,t)=>{return e[t]={type:[Boolean,String,Number],default:!1},e},{})})(),u=(()=>{return o.reduce((e,t)=>{return e["offset"+Object(l["B"])(t)]={type:[String,Number],default:null},e},{})})(),c=(()=>{return o.reduce((e,t)=>{return e["order"+Object(l["B"])(t)]={type:[String,Number],default:null},e},{})})(),s={col:Object.keys(i),offset:Object.keys(u),order:Object.keys(c)};function f(e,t,n){let r=e;if(null!=n&&!1!==n){if(t){const n=t.replace(e,"");r+=`-${n}`}return"col"!==e||""!==n&&!0!==n?(r+=`-${n}`,r.toLowerCase()):r.toLowerCase()}}const d=new Map;t["a"]=r["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...u,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},justifySelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:n,children:r,parent:l}){let o="";for(const a in t)o+=String(t[a]);let i=d.get(o);if(!i){let e;for(e in i=[],s)s[e].forEach(n=>{const r=t[n],a=f(e,n,r);a&&i.push(a)});const n=i.some(e=>e.startsWith("col-"));i.push({col:!n||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf,[`justify-self-${t.justifySelf}`]:t.justifySelf}),d.set(o,i)}return e(t.tag,Object(a["a"])(n,{class:i}),r)}})},"926d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",[n("h1",{staticClass:"display-1"},[e._v("soon™")])])],1)},a=[],l=n("d4ec"),o=n("99de"),i=n("7e84"),u=n("262e"),c=n("9ab4"),s=n("2b0e"),f=n("60a3"),d=function(e){function t(){return Object(l["a"])(this,t),Object(o["a"])(this,Object(i["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),t}(s["a"]);d=Object(c["c"])([f["a"]],d);var p=d,g=p,y=n("2877"),b=n("6544"),j=n.n(b),v=n("62ad"),h=n("0fd9"),S=Object(y["a"])(g,r,a,!1,null,null,null);t["default"]=S.exports;j()(S,{VCol:v["a"],VRow:h["a"]})}}]);
//# sourceMappingURL=chunk-e564f0a0.39d438f4.js.map