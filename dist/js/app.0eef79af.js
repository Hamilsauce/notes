(function(t){function e(e){for(var o,s,r=e[0],c=e[1],l=e[2],u=0,f=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={app:0},a=[];function s(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0da3a243"}[t]+".js"}function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=i[t]=[e,o]}));e.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=s(t);var l=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}i[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-toolbar",{attrs:{dense:""}},[n("v-app-bar-nav-icon"),n("v-toolbar-title",[n("span",{staticClass:"title ml-0 mr-5"},[t._v(" note "),n("span",{staticClass:"font-weight-light grey darken-2 py-2 px-1 white--text"},[t._v("guy")])])]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-heart")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-dots-vertical")])],1)],1),n("main",{staticClass:"app-body"},[n("v-content",[n("HelloWorld",{attrs:{notes:t.notes},on:{updateNote:t.handleUpdate}})],1)],1)],1)},a=[],s=(n("c740"),n("4160"),n("b64b"),n("159b"),n("3835")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},t._l(t.notes,(function(e){return n("note",{key:e.id,staticClass:"mt-6 mx-2",attrs:{note:e,activeNoteId:t.activeNoteId},on:{noteClicked:t.checkActiveNote,updateNote:t.handleNoteUpdate}})})),1),n("v-col",{staticClass:"mb-4 text-centered"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"}),n("p",{staticClass:"subheading font-weight-regular"})]),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"}),n("v-row",{attrs:{justify:"center"}})],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-color white mb-3"},[t._v(".")]),n("v-row",{attrs:{justify:"center"}},[t._v(" . ")])],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(".")]),n("v-row",{attrs:{justify:"center"}},[t._v(" . ")])],1)],1)],1)},c=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"note",class:{active:!0===t.isActive},on:{click:t.handleClick}},[n("div",{staticClass:"note-toolbar",class:{show:t.isActive}},[n("div",{staticClass:"button"},[t._v("Save")]),n("div",{staticClass:"button"},[t._v("Delete")])]),n("div",{staticClass:"note-title",attrs:{contenteditable:"true"},on:{keyup:t.getUserInput}},[t._v(t._s(t.note.title))]),n("div",{staticClass:"note-content",attrs:{contenteditable:"true"},on:{keyup:t.getUserInput}},[t._v(t._s(t.note.content))]),n("div",{staticClass:"note-date",attrs:{contenteditable:"false"}},[t._v(t._s(t.note.date))])])},u=[],d={name:"Note",components:{},props:{note:Object,activeNoteId:void 0},data:function(){return{modifiedNote:{title:"",content:"",date:(new Date).toLocaleString(),id:this.note.id},active:!1,gotClicked:!1,lastEdit:""}},methods:{handleClick:function(){this.$emit("noteClicked",this.note.id),this.title="i got clicked"},getUserInput:function(t){var e=t.target.textContent;console.log(t.target.textContent),t.target.classList.contains("note-title")?this.modifiedNote.title=e:t.target.classList.contains("note-content")&&(this.modifiedNote.content=e)},autoSave:function(){var t=this;setInterval((function(){var e=[t.note.id,t.modifiedNote];t.$emit("updateNote",e),console.log("saved")}),5e3)}},computed:{isActive:function(){var t=this.activeNoteId==this.note.id;return t}},watch:{isActive:function(t){if(!1===t){var e=[this.note.id,this.modifiedNote];this.$emit("updateNote",e)}}},created:function(){},mounted:function(){this.modifiedNote=this.note},updated:function(){},destroyed:function(){}},f=d,v=(n("a333"),n("2877")),p=Object(v["a"])(f,l,u,!1,null,"5e88f506",null),h=p.exports,m={name:"HelloWorld",components:{Note:h},props:{notes:Array},data:function(){return{activeNoteId:null,ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}},methods:{checkActiveNote:function(t){this.activeNoteId=t},handleNoteUpdate:function(t){this.$emit("updateNote",t)}}},b=m,g=n("6544"),y=n.n(g),w=n("62ad"),C=n("a523"),x=n("0fd9"),N=Object(v["a"])(b,r,c,!1,null,null,null),j=N.exports;y()(N,{VCol:w["a"],VContainer:C["a"],VRow:x["a"]});var _={name:"App",components:{HelloWorld:j},data:function(){return{activeNote:null,text:"Balls",notes:[{id:0,title:"note 1",content:"Write a message",date:"4.28.2020"},{id:1,title:"note 2",content:"Write a message",date:"4.28.2020"}]}},methods:{initializeNotes:function(){console.log(this.text),this.notes=JSON.parse(localStorage.getItem("storedNotes"))||[{id:0,title:"note 1",content:"Write a message",date:"4.28.2020"},{id:1,title:"note 2",content:"Write a message",date:"4.28.2020"}]},getActiveNote:function(){this.active=!this.active,console.log(this.active)},handleUpdate:function(t){var e=Object(s["a"])(t,2),n=e[0],o=e[1],i=this.notes[this.notes.findIndex((function(t){return t.id==n}))];Object.keys(i).forEach((function(t){i[t]=o[t]})),console.log(JSON.stringify(this.notes)),localStorage.setItem("storedNotes",JSON.stringify(this.notes))}},created:function(){this.initializeNotes()}},k=_,O=n("7496"),A=n("5bc1"),S=n("8336"),I=n("a75b"),V=n("132d"),E=n("2fa4"),W=n("71d9"),P=n("2a7f"),T=Object(v["a"])(k,i,a,!1,null,null,null),$=T.exports;y()(T,{VApp:O["a"],VAppBarNavIcon:A["a"],VBtn:S["a"],VContent:I["a"],VIcon:V["a"],VSpacer:E["a"],VToolbar:W["a"],VToolbarTitle:P["a"]});n("d3b7");var H=n("8c4f"),U=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},L=[],J={name:"Home",components:{HelloWorld:j}},M=J,q=Object(v["a"])(M,U,L,!1,null,null,null),B=q.exports;o["a"].use(H["a"]);var D=[{path:"/",name:"Home",component:B},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],z=new H["a"]({routes:D}),F=z,Q=n("2f62");o["a"].use(Q["a"]);var R=new Q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Y=n("f309");o["a"].use(Y["a"]);var G=new Y["a"]({});o["a"].config.productionTip=!1,new o["a"]({router:F,store:R,vuetify:G,render:function(t){return t($)}}).$mount("#app")},9583:function(t,e,n){},a333:function(t,e,n){"use strict";var o=n("9583"),i=n.n(o);i.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.0eef79af.js.map