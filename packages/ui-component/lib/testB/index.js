module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s="df52")}({"2be6":function(e,t,n){"use strict";function r(e,t,n,r,o,i,u,c){var s,a="function"===typeof e?e.options:e;if(t&&(a.render=t,a.staticRenderFns=n,a._compiled=!0),r&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),u?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},a._ssrRegister=s):o&&(s=c?function(){o.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(a.functional){a._injectStyles=s;var f=a.render;a.render=function(e,t){return s.call(t),f(e,t)}}else{var l=a.beforeCreate;a.beforeCreate=l?[].concat(l,s):[s]}return{exports:e,options:a}}n.d(t,"a",(function(){return r}))},c28c:function(e,t,n){},dda8:function(e,t,n){"use strict";n("c28c")},df52:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"test"},[e._v("测试按需引入B")])},o=[],i={name:"testB",data(){return{}}},u=i,c=(n("dda8"),n("2be6")),s=Object(c["a"])(u,r,o,!1,null,"f2779a30",null),a=s.exports;a.install=function(e){e.component(a.name,a)};t["default"]=a}});