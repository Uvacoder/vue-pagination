(function(e){function t(t){for(var r,o,i=t[0],c=t[1],u=t[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-pagination/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2cd6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("DataTable"),n("Footer")],1)],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",[n("v-card-title",{staticClass:"grey lighten-3"},[e._v(" JSON Placeholder Post List "),n("v-spacer"),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search title, author or any keyword","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.posts,"items-per-page":10,search:e.search,"item-class":e.getRowClass},scopedSlots:e._u([{key:"item.remove",fn:function(t){var r=t.item;return[n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(r)}}},[e._v(" mdi-delete ")])]}},{key:"item.expand",fn:function(t){var r=t.item;return[n("v-icon",{attrs:{medium:""},on:{click:function(t){return e.handleSeeMoreClick(r)}}},[e._v(" "+e._s(e.expanded[r.id]?"mdi-menu-up":"mdi-menu-down")+" ")])]}},{key:"item.body",fn:function(t){var n=t.item;return[e._v(" "+e._s(n.body)+" ")]}}],null,!0)})],1)],1)},i=[],c=n("ade3"),u=(n("a434"),"grey lighten-4"),l={data:function(){return{expanded:{},search:"",headers:[{text:"Post Title",value:"title",width:"15%",class:u},{text:"Post Content",value:"body",width:"35%",class:u},{text:"See More",sortable:!1,value:"expand",width:"5%",class:u},{text:"Author",value:"name",width:"10%",class:u},{text:"Remove",value:"remove",sortable:!1,width:"5%",class:u}]}},computed:{posts:function(){return this.$store.getters.getAllPosts}},methods:{deleteItem:function(e){this.editedIndex=this.posts.indexOf(e),this.posts.splice(this.editedIndex,1)},handleSeeMoreClick:function(e){this.expanded=Object.assign({},this.expanded,Object(c["a"])({},e.id,!this.expanded[e.id]))},getRowClass:function(e){return this.expanded[e.id]?"":"row-ellipsis"}}},d=l,p=(n("bbb4"),n("2877")),f=n("6544"),h=n.n(f),m=n("b0af"),v=n("99d9"),b=n("8fea"),g=n("132d"),x=n("2fa4"),y=n("8654"),w=Object(p["a"])(d,o,i,!1,null,"d0219f12",null),_=w.exports;h()(w,{VCard:m["a"],VCardTitle:v["b"],VDataTable:b["a"],VIcon:g["a"],VSpacer:x["a"],VTextField:y["a"]});var k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{attrs:{padless:""}},[n("v-card",{staticClass:"text-center grey lighten-2"},[n("v-card-text",e._l(e.icons,(function(t){return n("v-btn",{key:t.name,staticClass:"mx-4",attrs:{icon:""}},[n("a",{attrs:{href:t.url}},[n("v-icon",{attrs:{size:"34px"}},[e._v(" "+e._s(t.name)+" ")])],1)])})),1),n("v-card-text",{staticClass:"grey lighten-2 pt-0"},[n("p",[e._v("This application was created for the needs of the recruitment process. It was built in Vue-Vuetify and Vuex.")]),n("p",[e._v("To sort, click on title, content or author. To delete click thrash can icon. If you want to see full post content click 'See More' arrow.")])]),n("v-divider"),n("v-card-text",{staticClass:"grey lighten-2"},[n("strong",[e._v("Patryk Bura")]),e._v(" "),n("span",[e._v(e._s((new Date).getFullYear())+" ")])])],1)],1)},j=[],O={data:function(){return{icons:[{name:"mdi-github",url:"https://github.com/patrykbura/vue-pagination"},{name:"mdi-email",url:"mailto:patrykbura@gmail.com"},{name:"mdi-linkedin",url:"https://www.linkedin.com/in/patrykbura/"}]}}},P=O,V=(n("ddcf"),n("8336")),C=n("ce7e"),S=n("553a"),T=Object(p["a"])(P,k,j,!1,null,"943ce868",null),A=T.exports;h()(T,{VBtn:V["a"],VCard:m["a"],VCardText:v["a"],VDivider:C["a"],VFooter:S["a"],VIcon:g["a"]});var I={name:"App",components:{DataTable:_,Footer:A},mounted:function(){this.$store.dispatch("getPosts")}},M=I,R=n("7496"),$=n("f6c4"),D=Object(p["a"])(M,a,s,!1,null,null,null),F=D.exports;h()(D,{VApp:R["a"],VMain:$["a"]});var E=n("f309");r["a"].use(E["a"]);var J=new E["a"]({}),B=n("1da1"),z=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("d81d"),n("b0c0"),n("2f62"));r["a"].use(z["a"]);var L="https://jsonplaceholder.typicode.com/posts",N="https://jsonplaceholder.typicode.com/users",Y={Accept:"application/json"},q=new z["a"].Store({state:{authors:[],posts:[],expanded:{}},mutations:{setPosts:function(e,t){e.posts=t},setAuthors:function(e,t){e.authors=t}},actions:{getPosts:function(e){return Object(B["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(L,{headers:Y});case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.next=8,Promise.all(r.map(function(){var e=Object(B["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(N,"/").concat(t.userId),{headers:Y});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,t.name=r.name,e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 8:a=t.sent,e.commit("setPosts",a);case 10:case"end":return t.stop()}}),t)})))()},getAuthors:function(e){return Object(B["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(N,{headers:Y});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,e.commit("setAuthors",r);case 7:case"end":return t.stop()}}),t)})))()}},getters:{getAllPosts:function(e){return e.posts}}});r["a"].config.productionTip=!1,new r["a"]({vuetify:J,store:q,render:function(e){return e(F)}}).$mount("#app")},a3c4:function(e,t,n){},bbb4:function(e,t,n){"use strict";n("2cd6")},ddcf:function(e,t,n){"use strict";n("a3c4")}});
//# sourceMappingURL=app.ab4a183d.js.map