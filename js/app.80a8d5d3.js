(function(t){function e(e){for(var o,a,r=e[0],c=e[1],l=e[2],u=0,f=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(o=!1)}o&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={app:0},s=[];function a(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ee01932d"}[t]+".js"}function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=i[t]=[e,o]}));e.push(n[2]=o);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=a(t);var l=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",l.name="ChunkLoadError",l.type=o,l.request=s,n[1](l)}i[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("8a23"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-toolbar",{staticStyle:{position:"sticky",top:"0px",left:"0px","z-index":"5"},attrs:{dense:""}},[n("v-app-bar-nav-icon"),n("span",{staticClass:"title ml-0 mr-5"},[t._v(" note "),n("span",{staticClass:"font-weight-light grey darken-2 py-1 px-1 white--text"},[t._v("guy")])]),n("v-toolbar-title"),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",{on:{click:t.createNote}},[t._v("mdi-note-plus")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-dots-vertical")])],1)],1),n("main",{staticClass:"app-body"},[n("v-content",[n("HelloWorld",{attrs:{notes:t.notes},on:{updateNote:t.handleUpdate,deleteNote:t.deleteNote}})],1)],1)],1)},s=[],a=(n("c740"),n("4160"),n("a434"),n("b64b"),n("159b"),n("3835")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"white--text",staticStyle:{background:"rgba(240, 240, 240, 0.477)","padding-left":"10px","padding-right":"10px"},attrs:{"grey-1":""},on:{click:t.blurNote}},[n("v-row",[n("v-col",{staticClass:"pt-0 note-column",attrs:{cols:"12"}},[n("transitionGroup",{attrs:{name:"list"}},t._l(t.notes,(function(e){return n("note",{key:e.id,staticClass:"mt-6 mx-1 note",attrs:{note:e,activeNoteId:t.activeNoteId},on:{noteActivated:t.checkActiveNote,deactivateNote:t.deactivateNote,updateNote:t.handleNoteUpdate,deleteNote:t.deleteNote}})})),1)],1),n("v-col",{staticClass:"mb-4 text-centered"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(".")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v(" . ")])]),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(".")]),n("v-row",{attrs:{justify:"center"}})],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-color white mb-3"},[t._v(".")]),n("v-row",{attrs:{justify:"center"}},[t._v(".")])],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(".")]),n("v-row",{attrs:{justify:"center"}},[t._v(".")])],1)],1)],1)},c=[],l=(n("45fc"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"note",class:{activeNote:!0===t.isActive},on:{click:t.activateNote}},[n("section",{staticClass:"note-toolbar",class:{show:t.isActive}},[n("div",{staticClass:"toolbar-left"},[n("v-btn",{attrs:{color:"rgba(100, 100, 100, 0.8)",text:"",icon:""},on:{click:t.pinNote}},[n("v-icon",{attrs:{alt:"pin note"}},[t._v("mdi-pin")])],1)],1),n("div",{staticClass:"toolbar-right"},[n("v-btn",{attrs:{color:"rgba(53, 116, 28, 0.8)",text:"",icon:""},on:{click:t.deactivateNote}},[n("v-icon",[t._v("mdi-check-bold")])],1),n("v-btn",{attrs:{color:"rgba(150, 60, 15, 0.8)",text:"",icon:""},on:{click:t.deleteNote}},[n("v-icon",{staticClass:"button deleteButton",on:{click:t.deleteNote}},[t._v("mdi-delete")])],1)],1)]),n("div",{staticClass:"note-title",attrs:{contenteditable:"true"},on:{click:t.selectText,dblclick:t.deselectText,keyup:t.mapUserInputs}},[t._v(t._s(t.note.title))]),n("div",{staticClass:"content-box-container"},[n("div",{staticClass:"content-toolbar",class:{hideNoteToolbar:!1===t.isActive}},[n("v-btn",{attrs:{color:"rgba(100, 100, 100, 0.8)","x-small":"",text:"",icon:"",right:""},on:{click:t.toggleContentCollapse}},[!1===t.contentCollapsed?n("v-icon",{staticClass:"expandArrow",class:{expandArrowLarge:!1===t.isActive}},[t._v("mdi-arrow-collapse")]):t._e(),!0===t.contentCollapsed?n("v-icon",{staticClass:"expandArrow",class:{expandArrowLarge:!1===t.isActive}},[t._v("mdi-arrow-expand")]):t._e()],1)],1),n("div",{ref:"content",staticClass:"note-content",class:{contentCollapsed:!1===t.contentCollapsed},attrs:{contenteditable:"true"},on:{click:t.selectNoteContent,keyup:t.mapUserInputs}})]),n("div",{staticClass:"note-date",attrs:{contenteditable:"false"}},[t._v(t._s(t.note.date))])])}),u=[],d=(n("d3b7"),n("25f0"),n("53ca")),f={name:"Note",components:{},props:{note:Object,activeNoteId:void 0},data:function(){return{contentElement:this.$refs.content,userInputs:{title:null,content:null},modifiedNote:{},gotClicked:!1,contentCollapsed:!1,lastEdit:null}},methods:{activateNote:function(){
//! notifies parent that note is active due to being clicked
!1===this.isActive&&this.$emit("noteActivated",this.note.id)},deactivateNote:function(){var t=this;
//! notifies parent that note is noactive due to being clicked
setTimeout((function(){t.$emit("deactivateNote",t.note.id)}),100)},mapUserInputs:function(t){
//! maps div textcontent as user inputs to a reactive object binding (since vue doesnt support contenteditable)
var e=t.target.innerHTML;console.log(t.target.innerHTML),t.target.classList.contains("note-title")?this.userInputs.title=e:t.target.classList.contains("note-content")&&(this.userInputs.content=e)},validateAndCommitChanges:function(t){var e=this;
//! takes an array of fields that the user made changes to, and adds those properties/values to modified note (avoids updating data that wasnt changed)
if(!1!==Array.isArray(t))"none"!==t[0]&&(t.forEach((function(t){e.modifiedNote[t]=e.userInputs[t]})),this.modifiedNote.date=(new Date).toLocaleString());else{var n=Object(d["a"])(t);console.error("Expected array, received ".concat(n))}},saveChanges:function(){if(Object.keys(this.modifiedNote).length>0){var t=[this.note.id,this.modifiedNote];for(var e in this.$emit("updateNote",t),console.log("sending changes from note"),this.modifiedNote)delete this.modifiedNote[e],this.userInputs[e]=null}else console.log("no updates made, nothing sent")},deleteNote:function(){this.$emit("deleteNote",this.note.id)},pinNote:function(){},selectText:function(t){var e=window.getSelection();if(e.toString().length>0)this.deselectText();else{var n=t.target;if(document.body.createTextRange){var o=document.body.createTextRange();o.moveToElementText(n),o.select()}else if(window.getSelection){var i=window.getSelection(),s=document.createRange();s.selectNodeContents(n),i.removeAllRanges(),i.addRange(s)}}},deselectText:function(){var t=window.getSelection();t.collapseToEnd()},selectNoteContent:function(t){var e=t.target;"Write a note..."===e.textContent&&(e.textContent="")},toggleContentCollapse:function(){var t=this;if(this.contentCollapsed=!this.contentCollapsed,!0===this.contentCollapsed){var e=this.$refs.content.scrollHeight;console.log(this.$refs.content),console.log(e),this.$refs.content.style.height=e+"px";var n=function e(){t.$refs.content.removeEventListener("transitioned",e),t.$refs.content.style.height=null};this.$refs.content.addEventListener("transitioned",n)}else{var o=this.$refs.content.scrollHeight,i=this.$refs.content.style.transition;this.$refs.content.style.transition="",requestAnimationFrame((function(){t.$refs.content.style.height=o+"px",t.$refs.content.style.transition=i,requestAnimationFrame((function(){t.$refs.content.style.height="0px"}))}))}},collapseNoteContent:function(){}},computed:{isActive:function(){var t=this.activeNoteId==this.note.id;return t},userActivity:function(){
//!whnever an input changes, this outputs array of inputs that changed
return null===this.userInputs.title&&null===this.userInputs.content?["none"]:null===this.userInputs.title&&null!==this.userInputs.content?["content"]:null!==this.userInputs.title&&null===this.userInputs.content?["title"]:["title","content"]}},watch:{userActivity:function(t){"none"!==t[0]&&this.validateAndCommitChanges(t)},isActive:function(t){!1===t&&this.saveChanges()}},created:function(){var t=this;setTimeout((function(){console.log(t.$refs),t.$refs.content.innerHTML=t.note.content}),2e3)},mounted:function(){},updated:function(){},destroyed:function(){}},h=f,v=(n("c6b8"),n("2877")),p=n("6544"),m=n.n(p),g=n("8336"),b=n("132d"),y=Object(v["a"])(h,l,u,!1,null,"04f72136",null),N=y.exports;m()(y,{VBtn:g["a"],VIcon:b["a"]});var x={name:"HelloWorld",components:{Note:N},props:{notes:Array},data:function(){return{activeNoteId:null,ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}},methods:{checkActiveNote:function(t){this.activeNoteId=t},deactivateNote:function(){this.activeNoteId=-1},handleNoteUpdate:function(t){this.$emit("updateNote",t)},deleteNote:function(t){this.$emit("deleteNote",t)},blurNote:function(t){
//!* This checks to see if a click happened outside of a note, de-activates note if so
var e=t.path.some((function(t){try{return!0===t.classList.contains("note")}catch(e){return!1}}));console.log(e),!1===e&&(this.activeNoteId=-1)}}},C=x,w=(n("8be1"),n("62ad")),_=n("a523"),A=n("0fd9"),j=Object(v["a"])(C,r,c,!1,null,"493d6f57",null),I=j.exports;m()(j,{VCol:w["a"],VContainer:_["a"],VRow:A["a"]});var k={name:"App",components:{HelloWorld:I},data:function(){return{activeNote:null,text:"Balls",notes:[]}},methods:{initializeNotes:function(){console.log(this.text),this.notes=this.getfromLocalStorage("storedNotes")||[{id:0,title:"note 1",content:"Write a note...",date:"4.28.2020"},{id:1,title:"note 2",content:"Write a note...",date:"4.28.2020"}]},getActiveNote:function(){this.active=!this.active,console.log(this.active)},createNote:function(){var t={id:this.generateNewId(),title:"Title",content:"Write a note...",date:(new Date).toLocaleString()};this.notes.push(t),localStorage.setItem("storedNotes",JSON.stringify(this.notes)),this.sendToLocalStorage("storedNotes",this.notes)},deleteNote:function(t){var e=this.notes.findIndex((function(e){return e.id==t}));console.log(e),this.notes.splice(e,1),localStorage.setItem("storedNotes",JSON.stringify(this.notes)),this.sendToLocalStorage("storedNotes",this.notes)},handleUpdate:function(t){var e=Object(a["a"])(t,2),n=e[0],o=e[1],i=this.notes[this.notes.findIndex((function(t){return t.id==n}))];console.log(i),Object.keys(o).forEach((function(t){i[t]=o[t]})),this.sendToLocalStorage("storedNotes",this.notes)},generateNewId:function(){if(this.notes.sort((function(t,e){var n=t.id,o=e.id;return n>o?1:n<o?-1:n==o?0:void 0})),0===this.notes.length){var t=0;return t}var e=this.notes[this.notes.length-1];console.log(e);var n=e.id+1;return n},sendToLocalStorage:function(t,e){localStorage.setItem(t,JSON.stringify(e))},getfromLocalStorage:function(t){return JSON.parse(localStorage.getItem(t))}},created:function(){this.initializeNotes()}},S=k,T=(n("034f"),n("7496")),$=n("5bc1"),O=n("a75b"),L=n("2fa4"),E=n("71d9"),V=n("2a7f"),H=Object(v["a"])(S,i,s,!1,null,null,null),W=H.exports;m()(H,{VApp:T["a"],VAppBarNavIcon:$["a"],VBtn:g["a"],VContent:O["a"],VIcon:b["a"],VSpacer:L["a"],VToolbar:E["a"],VToolbarTitle:V["a"]});var P=n("8c4f"),M=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},U=[],q={name:"Home",components:{HelloWorld:I}},J=q,R=Object(v["a"])(J,M,U,!1,null,null,null),B=R.exports;o["a"].use(P["a"]);var z=[{path:"/",name:"Home",component:B},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],D=new P["a"]({routes:z}),F=D,G=n("2f62");o["a"].use(G["a"]);var Q=new G["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Y=n("f309");o["a"].use(Y["a"]);var K=new Y["a"]({});o["a"].config.productionTip=!1,new o["a"]({router:F,store:Q,vuetify:K,render:function(t){return t(W)}}).$mount("#app")},"7f3d":function(t,e,n){},"821a":function(t,e,n){},"8a23":function(t,e,n){},"8be1":function(t,e,n){"use strict";var o=n("7f3d"),i=n.n(o);i.a},c6b8:function(t,e,n){"use strict";var o=n("821a"),i=n.n(o);i.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.80a8d5d3.js.map