(function(e){function t(t){for(var n,a,c=t[0],s=t[1],l=t[2],u=0,f=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,c=1;c<o.length;c++){var s=o[c];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={app:0},i=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/todo-app-challenge/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=s;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"4d99":function(e){e.exports=JSON.parse('{"name":"vuetify-todo-pwa","short_name":"vuetify-todo","icons":[{"src":"./img/icons/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"./img/icons/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}],"start_url":".","display":"standalone","background_color":"#000000","theme_color":"#4DBA87"}')},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var e=this,t=e._self._c;return t("v-app",{attrs:{id:"app"}},[t("v-content",[t("v-container",{attrs:{id:"container"}},[t("router-view")],1)],1)],1)},i=[],a=(o("f1ff"),o("2877")),c={},s=Object(a["a"])(c,r,i,!1,null,null,null),l=s.exports,d=o("8c4f"),u=function(){var e=this,t=e._self._c;return t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{"text-xs-center":""}},[t("h1",{staticClass:"primary--text display-3 font-weight-medium my-3"},[e._v("TODOS")]),t("v-card",[t("v-list",{staticClass:"pa-0"},[t("v-list-tile",[t("v-list-tile-action",[e.todos.length>0?t("v-checkbox",{attrs:{"input-value":e.allChecked,color:"primary"},on:{change:function(t){return e.toggleAll(!e.allChecked)}}}):t("v-icon",{attrs:{color:"primary"}},[e._v("check")])],1),t("v-text-field",{attrs:{label:"New todo input",autofocus:"","browser-autocomplete":"off",clearable:"",color:"primary",flat:"","hide-details":"",maxlength:"1023",placeholder:"What needs to be done?",solo:""},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo.apply(null,arguments)}},model:{value:e.newTodo,callback:function(t){e.newTodo=t},expression:"newTodo"}})],1)],1)],1),t("v-card",{directives:[{name:"show",rawName:"v-show",value:e.todos.length,expression:"todos.length"}],staticClass:"mt-3"},[t("v-progress-linear",{staticClass:"my-0",model:{value:e.progressPercentage,callback:function(t){e.progressPercentage=t},expression:"progressPercentage"}}),t("v-card-actions",{directives:[{name:"show",rawName:"v-show",value:e.todos.length,expression:"todos.length"}],staticClass:"px-3"},[t("span",{staticClass:"primary--text"}),t("v-spacer"),t("v-btn-toggle",{directives:[{name:"show",rawName:"v-show",value:e.todos.length,expression:"todos.length"}],staticClass:"elevation-0",attrs:{mandatory:""},model:{value:e.visibility,callback:function(t){e.visibility=t},expression:"visibility"}},e._l(e.filters,(function(o,n){return t("v-btn",{key:n,staticClass:"mx-0",attrs:{to:n,value:n,color:"primary",flat:"",small:""}},[e._v("\n            "+e._s(e._f("capitalize")(n))+"\n          ")])})),1)],1),t("v-list",{staticClass:"pa-0"},[e._l(e.filteredTodos,(function(o){return[t("v-divider",{key:"".concat(o.uid,"-divider")}),t("v-list-tile",{key:o.uid,staticClass:"todo-item",class:{editing:e.editing}},[t("v-list-tile-action",[e.editing?t("v-icon",{attrs:{color:"primary"}},[e._v("edit")]):t("v-checkbox",{attrs:{"input-value":o.done,color:"primary"},on:{change:function(t){return e.toggleTodo(o)}}})],1),e.editing?t("v-text-field",{directives:[{name:"focus",rawName:"v-focus",value:e.editing,expression:"editing"}],ref:"input",refInFor:!0,attrs:{value:o.text,clearable:"",color:"primary",flat:"","hide-details":"",maxlength:"1023",solo:""},on:{blur:e.doneEdit,keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doneEdit.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.cancelEdit.apply(null,arguments)}]}}):[t("v-list-tile-content",{class:{"primary--text":o.done},on:{dblclick:function(t){e.editing=!0}}},[e._v("\n                "+e._s(o.text)+"\n              ")]),t("v-list-tile-action",[t("v-btn",{attrs:{color:"red lighten-3",flat:"",icon:""},on:{click:function(t){return e.removeTodo(o)}}},[t("v-icon",[e._v("close")])],1)],1)]],2)]}))],2)],1),t("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.todos.length>e.remaining,expression:"todos.length > remaining"}],staticClass:"mt-3",attrs:{block:"",color:"primary",depressed:"",round:""},on:{click:e.clearCompleted}},[e._v("\n      Clear completed\n    ")]),t("footer",{staticClass:"caption"},[t("p",[e._v("Double-click to edit a todo")])])],1)],1)},f=[],p=(o("8e6e"),o("ac6a"),o("456d"),o("ade3")),v=o("2f62");function g(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function m(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?g(Object(o),!0).forEach((function(t){Object(p["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):g(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var h={all:function(e){return e},active:function(e){return e.filter((function(e){return console.log("INGRESÓ A ACTIVE"),!e.done}))},completed:function(e){return e.filter((function(e){return e.done}))}};function y(e,t){return console.log("holaaa"),1===e?t:t+"s"}var b={props:["filter"],data:function(){return{newTodo:"",filters:h,visibility:this.filter,editing:!1}},directives:{focus:function(e,t,o){t.value&&o.context.$nextTick((function(){return o.context.$refs.input.focus()}))}},computed:{todos:function(){return this.$store.state.todos},allChecked:function(){return this.todos.every((function(e){return e.done}))},filteredTodos:function(){return h[this.visibility](this.todos)},remaining:function(){console.log({A:this.todos})},progressPercentage:function(){var e=this.todos.length;return 100*(e-this.remaining)/e}},methods:m(m({},v["a"].mapActions(["toggleAll","clearCompleted","editTodo","removeTodo","toggleTodo"])),{},{addTodo:function(){var e=this.newTodo.trim();e&&this.$store.dispatch("addTodo",e),this.newTodo=""},doneEdit:function(e){var t=e.target.value.trim(),o=this.todo;t?this.editing&&(this.editTodo({todo:o,value:t}),this.editing=!1):this.removeTodo(o)},cancelEdit:function(){this.editing=!1}}),filters:{pluralize:function(e,t){return console.log("TODO"),y(e,t)},capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}},w=b,x=(o("633f"),Object(a["a"])(w,u,f,!1,null,null,null)),O=x.exports;n["default"].use(d["a"]);var k=new d["a"]({scrollBehavior:function(){return{y:0}},routes:[{path:"/:filter",name:"home",component:O,props:!0}]});function T(e,t,o){return["all","active","completed"].some((function(t){return t===e.params.filter}))?o():o("/all")}k.beforeEach((function(e,t,o){return T(e,t,o)}));var _=k;n["default"].use(v["a"]);var C="vuetify-todos",j=function(){var e="";return e=window.localStorage.getItem(C)?window.localStorage.getItem(C):"[]",console.log("parseado!"),JSON.parse(e)},P={todos:j()},E={addTodo:function(e,t){e.todos.push(t)},removeTodo:function(e,t){e.todos.splice(e.todos.indexOf(t),1)},editTodo:function(e,t){var o=e.todos.map((function(e){return e.id})).indexOf(t.id);e.todos[o]=t}},S={addTodo:function(e,t){e.commit("addTodo",{uid:Date.now(),text:t,done:!1})},removeTodo:function(e,t){e.commit("removeTodo",t)},toggleTodo:function(e,t){e.commit("editTodo",{todo:t,done:!t.done,text:t.text})},editTodo:function(e,t){e.commit("editTodo",{todo:t.todo,text:t.value})},toggleAll:function(e,t){e.state.todos.forEach((function(o){return e.commit("editTodo",{todo:o,done:t})}))},clearCompleted:function(e){e.state.todos.filter((function(e){return e.done})).forEach((function(t){return e.commit("removeTodo",t)}))}},A=[function(e){e.subscribe((function(e,t){window.localStorage.setItem(C,JSON.stringify(t.todos))}))}],N=new v["a"].Store({state:P,mutations:E,actions:S,plugins:A}),V=o("9483");Object(V["a"])("".concat("/todo-app-challenge/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});o("da64");var D=o("4d99"),I=o("d437"),z=o.n(I),B=o("d421"),J=o.n(B),$=o("5d92"),F=o.n($),M=o("eed0"),G=o.n(M),L=o("c713"),q=o.n(L),R=o("10a1"),U=o.n(R),W=o("68d6"),H=o.n(W),K=o("d553"),Q=o.n(K),X=o("6a6f"),Y=o.n(X),Z=o("e1f0"),ee=o.n(Z),te=o("5933"),oe=o.n(te),ne=o("db3b"),re=o.n(ne);n["default"].use(z.a,{components:{VApp:J.a,VBtn:F.a,VBtnToggle:G.a,VCard:q.a,VCheckbox:U.a,VDivider:H.a,VGrid:Q.a,VIcon:Y.a,VList:ee.a,VProgressLinear:oe.a,VTextField:re.a},theme:{primary:D.theme_color}}),n["default"].config.productionTip=!1,new n["default"]({router:_,store:N,render:function(e){return e(l)}}).$mount("#app")},"633f":function(e,t,o){"use strict";o("8e21")},"8e21":function(e,t,o){},ac53:function(e,t,o){},f1ff:function(e,t,o){"use strict";o("ac53")}});
//# sourceMappingURL=app.00eaa56d.js.map