(function(t){function e(e){for(var a,s,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)s=o[u],r[s]&&f.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function s(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2518527e":"a3576440","chunk-2d0af8ab":"54552781","chunk-2d0b8a85":"ea8ca5e8","chunk-2d0c7ab9":"6c0d05e1","chunk-2d0e4cbd":"770ef833","chunk-2d0efc91":"fbdf254d","chunk-2d20f6d8":"27364c1b","chunk-2d217380":"5a7ea18a","chunk-2d21e786":"c8bc6a2c","chunk-2d2214fd":"dc482c28","chunk-2d230102":"a265fd1e","chunk-4e732d26":"f89ad777","chunk-714ffb8e":"ca0101a8"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=r[t]=[e,a]});e.push(n[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(t),i=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");s.type=a,s.request=i,n[1](s)}r[t]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"3b77":function(t,e,n){},4678:function(t,e,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=i(t);return n(e)}function i(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(a)},r.resolve=i,t.exports=r,r.id="4678"},"53b8":function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return f}),n.d(e,"c",function(){return b}),n.d(e,"d",function(){return h});n("96cf");var a=n("3b8d"),r=n("cebc"),i=(n("cadf"),n("551c"),n("097d"),n("2b0e")),s=n("522d"),o=n("efe7");i["default"].use(s["a"]);var c="apollo-token",l="https://web.theuke.org/graphql",u="https://web.theuke.org";i["default"].prototype.$filesRoot=u;var d={httpEndpoint:l,wsEndpoint:"wss://web.theuke.org/graphql",tokenName:c,persisting:!1,websocketsOnly:!1,ssr:!1};function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object(o["createApolloClient"])(Object(r["a"])({},d,t)),n=e.apolloClient,a=e.wsClient;n.wsClient=a;var i=new s["a"]({defaultClient:n,defaultOptions:{$query:{}},errorHandler:function(t){console.log("%cError","background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;",t.message)}});return i}function b(t,e){return p.apply(this,arguments)}function p(){return p=Object(a["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n&&localStorage.setItem(c,n),e.wsClient&&Object(o["restartWebsockets"])(e.wsClient),t.prev=2,t.next=5,e.resetStore();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](2),console.log("%cError on cache reset (login)","color: orange;",t.t0.message);case 10:case"end":return t.stop()}},t,this,[[2,7]])})),p.apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return v=Object(a["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return localStorage.removeItem(c),e.wsClient&&Object(o["restartWebsockets"])(e.wsClient),t.prev=2,t.next=5,e.resetStore();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](2),console.log("%cError on cache reset (logout)","color: orange;",t.t0.message);case 10:case"end":return t.stop()}},t,this,[[2,7]])})),v.apply(this,arguments)}},"57f3":function(t,e,n){"use strict";var a=n("3b77"),r=n.n(a);r.a},aa5a:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return l});var a=n("5d73"),r=n.n(a),i=(n("6762"),n("2fdb"),n("d225")),s=n("b0b4"),o="current-user-data",c=function(){function t(e){var n=e.id,a=e.username,r=e.token,s=e.roles;Object(i["a"])(this,t),this.id=n,this.username=a,this.token=r,this.roles=s}return Object(s["a"])(t,[{key:"hasRole",value:function(t){return this.roles.includes(t)}},{key:"hasAnyRole",value:function(t){var e=!0,n=!1,a=void 0;try{for(var i,s=r()(t);!(e=(i=s.next()).done);e=!0){var o=i.value;if(this.hasRole(o))return!0}}catch(c){n=!0,a=c}finally{try{e||null==s.return||s.return()}finally{if(n)throw a}}return!1}}]),t}();function l(){var t=localStorage.getItem(o);return null===t?null:new c(JSON.parse(t))}},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d"),n("15f5");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{clipped:"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-tile",{attrs:{to:"/trading"}},[n("v-list-tile-action",[n("v-icon",[t._v("fas fa-chart-bar")])],1),n("v-list-tile-content",[t._v("Trading")])],1),n("v-list-tile",{attrs:{to:"/location"}},[n("v-list-tile-action",[n("v-icon",[t._v("fas fa-globe")])],1),n("v-list-tile-content",[t._v("Locations")])],1),t.currentUser?[n("v-divider"),n("v-list-tile",{attrs:{to:"/my-ships"}},[n("v-list-tile-action",[n("v-icon",[t._v("fas fa-space-shuttle")])],1),n("v-list-tile-content",[t._v("My Ships")])],1),n("v-list-tile",{attrs:{to:"/my-transactions"}},[n("v-list-tile-action",[n("v-icon",[t._v("fas fa-list")])],1),n("v-list-tile-content",[t._v("My Transactions")])],1),t.currentUser.hasRole("ADMIN")?[n("v-divider"),n("v-list-group",[n("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[n("v-list-tile-content",[n("v-list-tile-title",[t._v("Administration")])],1)],1),n("v-list-tile",{attrs:{to:"/administration/account"}},[n("v-list-tile-content",[t._v("Accounts")])],1),n("v-list-tile",{attrs:{to:"/administration/game-version"}},[n("v-list-tile-content",[t._v("Game Versions")])],1),n("v-list-tile",{attrs:{to:"/administration/item"}},[n("v-list-tile-content",[t._v("Items")])],1),n("v-list-tile",{attrs:{to:"/administration/item-price"}},[n("v-list-tile-content",[t._v("Item Prices")])],1),n("v-list-tile",{attrs:{to:"/administration/location"}},[n("v-list-tile-content",[t._v("Locations")])],1),n("v-list-tile",{attrs:{to:"/administration/location-type"}},[n("v-list-tile-content",[t._v("Location Types")])],1)],1)]:t._e()]:t._e()],2)],1),n("v-toolbar",{attrs:{app:"",fixed:"","clipped-left":""}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("Star Citizen Trade Market")]),n("v-spacer"),t.currentUser?[n("span",[t._v("Sign in as "+t._s(t.currentUser.username))]),n("v-btn",{attrs:{icon:""},on:{click:t.signOut}},[n("v-icon",[t._v("fas fa-sign-in-alt")])],1)]:[n("v-btn",{attrs:{icon:"",to:"/sign-up"}},[n("v-icon",[t._v("fas fa-user-plus")])],1),n("v-btn",{attrs:{icon:"",to:"/sign-in"}},[n("v-icon",[t._v("fas fa-sign-in-alt")])],1)]],2),n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("router-view")],1)],1),n("v-footer",{attrs:{app:"",fixed:""}},[n("span",[t._v(" Copyright © 2018-2019 Christopher Quadflieg aka Shinigami")]),n("span",[t._v(" | ")]),n("router-link",{attrs:{to:"/privacy-policy"}},[t._v("Privacy Policy")]),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/Shinigami92/star-citizen-trade-market-api",target:"_blank",flat:"",icon:""}},[n("v-icon",[t._v("fab fa-github")])],1)],1)],1)},i=[],s=n("f499"),o=n.n(s),c=n("aede"),l=(n("96cf"),n("3b8d")),u=n("d225"),d=n("b0b4"),f=n("308d"),b=n("6bb5"),p=n("4e2b"),h=n("9ab4"),v=n("9530"),m=n.n(v),j=n("60a3"),g=n("53b8"),k=n("aa5a");function y(){var t=Object(c["a"])(["\n\t\t\t\tquery me {\n\t\t\t\t\tme {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tusername\n\t\t\t\t\t\troles\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"]);return y=function(){return t},t}var w=function(t){function e(){var t;return Object(u["a"])(this,e),t=Object(f["a"])(this,Object(b["a"])(e).call(this)),t.currentUser=Object(k["b"])(),t.drawer=!0,t}return Object(p["a"])(e,t),Object(d["a"])(e,[{key:"signOut",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return localStorage.removeItem(k["a"]),t.next=3,Object(g["d"])(this.$apolloProvider.defaultClient);case 3:this.$router.go(0);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"beforeMount",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,n,a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=Object(k["b"])(),null!==e){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,this.$apollo.query({query:m()(y()),errorPolicy:"ignore",fetchPolicy:"network-only"});case 5:n=t.sent,a=n.data.me,null===a?(localStorage.removeItem(k["a"]),localStorage.removeItem(g["a"]),this.$router.push("/sign-in"),this.$router.go(0)):(r=JSON.parse(localStorage.getItem(k["a"])),r.id=a.id,r.roles=a.roles,r.username=a.username,localStorage.setItem(k["a"],o()(r)));case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}]),e}(j["d"]);w=h["a"]([j["a"],h["b"]("design:paramtypes",[])],w);var V=w,O=V,_=(n("57f3"),n("0c7c")),x=Object(_["a"])(O,r,i,!1,null,null,null);x.options.__file="app.vue";var T=x.exports,S=n("2ead"),z=n.n(S);a["default"].use(z.a);var C=n("58a0"),P=n.n(C),I=(n("87df"),n("bb716")),A=n("7496"),D=n("c6a6"),R=n("2bc5"),E=n("8336"),L=n("a609"),M=n("b0af"),q=n("99d9"),$=n("12b2"),F=n("ac7c"),N=n("a523"),U=n("549c"),B=n("8fea"),J=n("2e4b"),G=n("169a"),W=n("ce7e6"),H=n("7679"),Q=n("0e8f"),K=n("553a"),X=n("4bd4"),Y=n("132d"),Z=n("a722"),tt=n("8860"),et=n("56b0"),nt=n("ba95"),at=n("40fe"),rt=n("5d23"),it=n("e449"),st=n("f774"),ot=n("b56d"),ct=n("9910"),lt=n("71a3"),ut=n("c671"),dt=n("fe57"),ft=n("2677"),bt=n("c964"),pt=n("71d9"),ht=n("706c"),vt=n("2a7f"),mt=n("3a2f");n("da64");a["default"].use(I["a"],{components:{VApp:A["a"],VAutocomplete:D["a"],VBreadcrumbs:R["a"],VBtn:E["a"],VBtnToggle:L["a"],VCard:M["a"],VCardActions:q["a"],VCardText:q["b"],VCardTitle:$["a"],VCheckbox:F["a"],VContainer:N["a"],VContent:U["a"],VDataTable:B["a"],VDatePicker:J["a"],VDialog:G["a"],VDivider:W["a"],VEditDialog:H["a"],VFlex:Q["a"],VFooter:K["a"],VForm:X["a"],VIcon:Y["a"],VLayout:Z["a"],VList:tt["a"],VListGroup:et["a"],VListTile:nt["a"],VListTileAction:at["a"],VListTileContent:rt["a"],VListTileTitle:rt["b"],VMenu:it["a"],VNavigationDrawer:st["a"],VSelect:ot["a"],VSpacer:ct["a"],VTab:lt["a"],VTabItem:ut["a"],VTabs:dt["a"],VTextField:ft["a"],VTimePicker:bt["a"],VToolbar:pt["a"],VToolbarSideIcon:ht["a"],VToolbarTitle:vt["a"],VTooltip:mt["a"]},theme:{primary:"#096689",secondary:"#0E1F79",accent:"#DA7406",error:"#DA2B06",info:"#44BF72",success:"#008030",warning:"#DA9D06"},customProperties:!0,iconfont:"fa"}),a["default"].use(P.a);var jt=n("75fc"),gt=n("8c4f"),kt=[{path:"/administration/account",name:"administration-account",component:function(){return n.e("chunk-2d20f6d8").then(n.bind(null,"b41a"))}},{path:"/administration/game-version",name:"administration-game-version",component:function(){return n.e("chunk-2d2214fd").then(n.bind(null,"ca8a"))}},{path:"/administration/item",name:"administration-item",component:function(){return n.e("chunk-2d0efc91").then(n.bind(null,"9a1d"))}},{path:"/administration/item-price",name:"administration-item-price",component:function(){return n.e("chunk-2d0b8a85").then(n.bind(null,"302d"))}},{path:"/administration/location",name:"administration-location",component:function(){return n.e("chunk-2d21e786").then(n.bind(null,"d664"))}},{path:"/administration/location-type",name:"administration-location-type",component:function(){return n.e("chunk-2d217380").then(n.bind(null,"c690"))}}];a["default"].use(gt["b"]);var yt=new gt["b"]({routes:[{path:"/",redirect:"trading"},{path:"/sign-up",name:"sign-up",component:function(){return n.e("chunk-714ffb8e").then(n.bind(null,"1e64"))}},{path:"/sign-in",name:"sign-in",component:function(){return n.e("chunk-2d0c7ab9").then(n.bind(null,"5239"))}},{path:"/privacy-policy",name:"privacy-policy",component:function(){return n.e("chunk-2d0af8ab").then(n.bind(null,"0f87"))}},{path:"/trading",name:"trading",component:function(){return n.e("chunk-4e732d26").then(n.bind(null,"9418"))}},{path:"/location/:id?",name:"location",component:function(){return n.e("chunk-2518527e").then(n.bind(null,"fa61"))}},{path:"/my-ships",name:"my-ships",component:function(){return n.e("chunk-2d230102").then(n.bind(null,"eb4c"))}},{path:"/my-transactions",name:"my-transactions",component:function(){return n.e("chunk-2d0e4cbd").then(n.bind(null,"926d"))}}].concat(Object(jt["a"])(kt),[{path:"*",redirect:"trading"}])});a["default"].config.productionTip=!1,new a["default"]({apolloProvider:Object(g["b"])(),render:function(t){return t(T)},router:yt}).$mount("#app")}});
//# sourceMappingURL=app.7045d802.js.map