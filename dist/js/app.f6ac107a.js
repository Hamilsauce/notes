(function(t){function e(e){for(var o,s,r=e[0],c=e[1],l=e[2],u=0,f=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={app:0},a=[];function s(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0da3a243"}[t]+".js"}function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=i[t]=[e,o]}));e.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=s(t);var l=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}i[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4bac":function(t,e,n){"use strict";var o=n("6b81"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-toolbar",{attrs:{dense:""}},[n("v-app-bar-nav-icon"),n("v-toolbar-title",[n("span",{staticClass:"title ml-0 mr-5"},[t._v(" note "),n("span",{staticClass:"font-weight-light grey darken-2 py-2 px-1 white--text"},[t._v("guy")])])]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",{on:{click:t.createNote}},[t._v("mdi-note-plus")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-dots-vertical")])],1)],1),n("main",{staticClass:"app-body"},[n("v-content",[n("HelloWorld",{attrs:{notes:t.notes},on:{updateNote:t.handleUpdate,deleteNote:t.deleteNote}})],1)],1)],1)},a=[],s=(n("c740"),n("4160"),n("a434"),n("b64b"),n("159b"),n("3835")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"white--text",staticStyle:{background:"rgba(240, 240, 240, 0.477)","padding-left":"10px","padding-right":"10px"},attrs:{"grey-1":""},on:{click:t.blurNote}},[n("v-row",[n("v-col",{staticClass:"pt-0 note-column",attrs:{cols:"12"}},[n("transitionGroup",{attrs:{name:"list"}},t._l(t.notes,(function(e){return n("note",{key:e.id,staticClass:"mt-6 mx-1 note",attrs:{note:e,activeNoteId:t.activeNoteId},on:{noteActivated:t.checkActiveNote,deactivateNote:t.deactivateNote,updateNote:t.handleNoteUpdate,deleteNote:t.deleteNote}})})),1)],1),n("v-col",{staticClass:"mb-4 text-centered"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(".")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v(" . ")])]),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(".")]),n("v-row",{attrs:{justify:"center"}})],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-color white mb-3"},[t._v(".")]),n("v-row",{attrs:{justify:"center"}},[t._v(".")])],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(".")]),n("v-row",{attrs:{justify:"center"}},[t._v(".")])],1)],1)],1)},c=[],l=(n("45fc"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"note",class:{activeNote:!0===t.isActive},on:{click:t.activateNote}},[n("section",{staticClass:"note-toolbar",class:{show:t.isActive}},[n("div",{staticClass:"toolbar-left"},[n("div",{staticClass:"button",on:{click:t.pinNote}},[n("v-icon",{attrs:{color:"rgba(50,50,50,0.5)"}},[t._v("mdi-pin")])],1)]),n("div",{staticClass:"toolbar-right"},[n("div",{staticClass:"button",on:{click:t.deactivateNote}},[n("v-icon",{attrs:{color:"rgba(50,50,50,0.5)"}},[t._v("mdi-check-bold")])],1),n("div",{staticClass:"button",on:{click:t.deleteNote}},[n("v-icon",{attrs:{color:"rgba(50,50,50,0.5)"}},[t._v("mdi-delete")])],1)])]),n("div",{staticClass:"note-title",attrs:{contenteditable:"true"},on:{click:t.selectText,dblclick:t.deselectText,keyup:t.mapUserInputs}},[t._v(t._s(t.note.title))]),n("div",{staticClass:"note-content",attrs:{contenteditable:"true"},on:{click:t.selectNoteContent,keyup:t.mapUserInputs}},[t._v(t._s(t.note.content))]),n("div",{staticClass:"note-date",attrs:{contenteditable:"false"}},[t._v(t._s(t.note.date))])])}),u=[],d=(n("d3b7"),n("25f0"),n("53ca")),f={name:"Note",components:{},props:{note:Object,activeNoteId:void 0},data:function(){return{userInputs:{title:null,content:null},modifiedNote:{},gotClicked:!1,lastEdit:null}},methods:{activateNote:function(){
//! notifies parent that note is active due to being clicked
!1===this.isActive&&this.$emit("noteActivated",this.note.id)},deactivateNote:function(){var t=this;
//! notifies parent that note is active due to being clicked
setTimeout((function(){t.$emit("deactivateNote",t.note.id)}),100)},mapUserInputs:function(t){
//! maps div textcontent as user inputs to a reactive object binding (since vue doesnt support contenteditable)
var e=t.target.textContent;console.log(t.target.textContent),t.target.classList.contains("note-title")?this.userInputs.title=e:t.target.classList.contains("note-content")&&(this.userInputs.content=e)},validateAndCommitChanges:function(t){var e=this;
//! takes an array of fields that the user made changes to, and adds those properties/values to modified note (avoids updating data that wasnt changed)
if(!1!==Array.isArray(t))"none"!==t[0]&&(t.forEach((function(t){e.modifiedNote[t]=e.userInputs[t]})),this.modifiedNote.date=(new Date).toLocaleString());else{var n=Object(d["a"])(t);console.error("Expected array, received ".concat(n))}},saveChanges:function(){if(Object.keys(this.modifiedNote).length>0){var t=[this.note.id,this.modifiedNote];for(var e in this.$emit("updateNote",t),console.log("sending changes from note"),this.modifiedNote)delete this.modifiedNote[e],this.userInputs[e]=null}else console.log("no updates made, nothing sent")},deleteNote:function(){this.$emit("deleteNote",this.note.id)},pinNote:function(){},selectText:function(t){var e=window.getSelection();if(e.toString().length>0)this.deselectText();else{var n=t.target;if(document.body.createTextRange){var o=document.body.createTextRange();o.moveToElementText(n),o.select()}else if(window.getSelection){var i=window.getSelection(),a=document.createRange();a.selectNodeContents(n),i.removeAllRanges(),i.addRange(a)}}},deselectText:function(){var t=window.getSelection();t.collapseToEnd()},selectNoteContent:function(t){var e=t.target;console.log(e),"Write a note..."===e.textContent&&(console.log(e.textContent),e.textContent="")}},computed:{isActive:function(){var t=this.activeNoteId==this.note.id;return t},userActivity:function(){
//!whnever an input changes, this outputs array of inputs that changed
return null===this.userInputs.title&&null===this.userInputs.content?["none"]:null===this.userInputs.title&&null!==this.userInputs.content?["content"]:null!==this.userInputs.title&&null===this.userInputs.content?["title"]:["title","content"]}},watch:{userActivity:function(t){"none"!==t[0]&&this.validateAndCommitChanges(t)},isActive:function(t){!1===t&&this.saveChanges()}},created:function(){},mounted:function(){},updated:function(){},destroyed:function(){}},v=f,h=(n("d2ba"),n("2877")),p=n("6544"),m=n.n(p),g=n("132d"),b=Object(h["a"])(v,l,u,!1,null,"a467aa18",null),y=b.exports;m()(b,{VIcon:g["a"]});var N={name:"HelloWorld",components:{Note:y},props:{notes:Array},data:function(){return{activeNoteId:null,ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}},methods:{checkActiveNote:function(t){this.activeNoteId=t},deactivateNote:function(){this.activeNoteId=-1},handleNoteUpdate:function(t){this.$emit("updateNote",t)},deleteNote:function(t){this.$emit("deleteNote",t)},blurNote:function(t){
//!* This checks to see if a click happened outside of a note, de-activates note if so
var e=t.path.some((function(t){try{return!0===t.classList.contains("note")}catch(e){return!1}}));console.log(e),!1===e&&(this.activeNoteId=-1)}}},w=N,x=(n("8be1"),n("62ad")),C=n("a523"),_=n("0fd9"),j=Object(h["a"])(w,r,c,!1,null,"493d6f57",null),I=j.exports;m()(j,{VCol:x["a"],VContainer:C["a"],VRow:_["a"]});var k={name:"App",components:{HelloWorld:I},data:function(){return{activeNote:null,text:"Balls",notes:[]}},methods:{initializeNotes:function(){console.log(this.text),this.notes=JSON.parse(localStorage.getItem("storedNotes"))||[{id:0,title:"note 1",content:"Write a note...",date:"4.28.2020"},{id:1,title:"note 2",content:"Write a note...",date:"4.28.2020"}]},getActiveNote:function(){this.active=!this.active,console.log(this.active)},createNote:function(){var t={id:this.generateNewId(),title:"Title",content:"Write a note...",date:(new Date).toLocaleString()};this.notes.push(t),localStorage.setItem("storedNotes",JSON.stringify(this.notes))},deleteNote:function(t){var e=this.notes.findIndex((function(e){return e.id==t}));console.log(e),this.notes.splice(e,1),localStorage.setItem("storedNotes",JSON.stringify(this.notes))},handleUpdate:function(t){var e=Object(s["a"])(t,2),n=e[0],o=e[1],i=this.notes[this.notes.findIndex((function(t){return t.id==n}))];console.log(i),Object.keys(o).forEach((function(t){i[t]=o[t]})),localStorage.setItem("storedNotes",JSON.stringify(this.notes))},generateNewId:function(){if(this.notes.sort((function(t,e){var n=t.id,o=e.id;return n>o?1:n<o?-1:n==o?0:void 0})),0===this.notes.length){var t=0;return t}var e=this.notes[this.notes.length-1];console.log(e);var n=e.id+1;return n}},created:function(){this.initializeNotes()}},A=k,O=(n("4bac"),n("7496")),S=n("5bc1"),T=n("8336"),V=n("a75b"),E=n("2fa4"),$=n("71d9"),W=n("2a7f"),P=Object(h["a"])(A,i,a,!1,null,"6a596fd6",null),L=P.exports;m()(P,{VApp:O["a"],VAppBarNavIcon:S["a"],VBtn:T["a"],VContent:V["a"],VIcon:g["a"],VSpacer:E["a"],VToolbar:$["a"],VToolbarTitle:W["a"]});var H=n("8c4f"),U=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},J=[],R={name:"Home",components:{HelloWorld:I}},M=R,q=Object(h["a"])(M,U,J,!1,null,null,null),B=q.exports;o["a"].use(H["a"]);var D=[{path:"/",name:"Home",component:B},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],z=new H["a"]({routes:D}),F=z,G=n("2f62");o["a"].use(G["a"]);var Q=new G["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Y=n("f309");o["a"].use(Y["a"]);var K=new Y["a"]({});o["a"].config.productionTip=!1,new o["a"]({router:F,store:Q,vuetify:K,render:function(t){return t(L)}}).$mount("#app")},"6b81":function(t,e,n){},"7f3d":function(t,e,n){},"8be1":function(t,e,n){"use strict";var o=n("7f3d"),i=n.n(o);i.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d24d:function(t,e,n){},d2ba:function(t,e,n){"use strict";var o=n("d24d"),i=n.n(o);i.a}});
//# sourceMappingURL=app.f6ac107a.js.map