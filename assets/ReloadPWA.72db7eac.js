import{O as C}from"./Overlay.de570033.js";import{r as E,q as O,i as p,j as A,k as h,s as W,v as U,l as I,m}from"./vendor.55fd1cae.js";import{_ as N}from"./index.555add83.js";try{self["workbox:window:6.4.1"]&&_()}catch{}function x(e,n){return new Promise(function(r){var i=new MessageChannel;i.port1.onmessage=function(u){r(u.data)},e.postMessage(n,[i.port2])})}function B(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function L(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,i=new Array(n);r<n;r++)i[r]=e[r];return i}function M(e,n){var r;if(typeof Symbol=="undefined"||e[Symbol.iterator]==null){if(Array.isArray(e)||(r=function(u,v){if(u){if(typeof u=="string")return L(u,v);var s=Object.prototype.toString.call(u).slice(8,-1);return s==="Object"&&u.constructor&&(s=u.constructor.name),s==="Map"||s==="Set"?Array.from(u):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?L(u,v):void 0}}(e))||n&&e&&typeof e.length=="number"){r&&(e=r);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(r=e[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:6.4.1"]&&_()}catch{}var S=function(){var e=this;this.promise=new Promise(function(n,r){e.resolve=n,e.reject=r})};function R(e,n){var r=location.href;return new URL(e,r).href===new URL(n,r).href}var y=function(e,n){this.type=e,Object.assign(this,n)};function w(e,n,r){return r?n?n(e):e:(e&&e.then||(e=Promise.resolve(e)),n?e.then(n):e)}function $(){}var z={type:"SKIP_WAITING"};function P(e,n){if(!n)return e&&e.then?e.then($):Promise.resolve()}var T=function(e){var n,r;function i(a,d){var t,o;return d===void 0&&(d={}),(t=e.call(this)||this).nn={},t.tn=0,t.rn=new S,t.en=new S,t.on=new S,t.un=0,t.an=new Set,t.cn=function(){var c=t.fn,l=c.installing;t.tn>0||!R(l.scriptURL,t.sn.toString())||performance.now()>t.un+6e4?(t.vn=l,c.removeEventListener("updatefound",t.cn)):(t.hn=l,t.an.add(l),t.rn.resolve(l)),++t.tn,l.addEventListener("statechange",t.ln)},t.ln=function(c){var l=t.fn,f=c.target,g=f.state,b=f===t.vn,k={sw:f,isExternal:b,originalEvent:c};!b&&t.mn&&(k.isUpdate=!0),t.dispatchEvent(new y(g,k)),g==="installed"?t.wn=self.setTimeout(function(){g==="installed"&&l.waiting===f&&t.dispatchEvent(new y("waiting",k))},200):g==="activating"&&(clearTimeout(t.wn),b||t.en.resolve(f))},t.dn=function(c){var l=t.hn,f=l!==navigator.serviceWorker.controller;t.dispatchEvent(new y("controlling",{isExternal:f,originalEvent:c,sw:l,isUpdate:t.mn})),f||t.on.resolve(l)},t.gn=(o=function(c){var l=c.data,f=c.ports,g=c.source;return w(t.getSW(),function(){t.an.has(g)&&t.dispatchEvent(new y("message",{data:l,originalEvent:c,ports:f,sw:g}))})},function(){for(var c=[],l=0;l<arguments.length;l++)c[l]=arguments[l];try{return Promise.resolve(o.apply(this,c))}catch(f){return Promise.reject(f)}}),t.sn=a,t.nn=d,navigator.serviceWorker.addEventListener("message",t.gn),t}r=e,(n=i).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var u,v,s=i.prototype;return s.register=function(a){var d=(a===void 0?{}:a).immediate,t=d!==void 0&&d;try{var o=this;return function(c,l){var f=c();return f&&f.then?f.then(l):l(f)}(function(){if(!t&&document.readyState!=="complete")return P(new Promise(function(c){return window.addEventListener("load",c)}))},function(){return o.mn=Boolean(navigator.serviceWorker.controller),o.yn=o.pn(),w(o.bn(),function(c){o.fn=c,o.yn&&(o.hn=o.yn,o.en.resolve(o.yn),o.on.resolve(o.yn),o.yn.addEventListener("statechange",o.ln,{once:!0}));var l=o.fn.waiting;return l&&R(l.scriptURL,o.sn.toString())&&(o.hn=l,Promise.resolve().then(function(){o.dispatchEvent(new y("waiting",{sw:l,wasWaitingBeforeRegister:!0}))}).then(function(){})),o.hn&&(o.rn.resolve(o.hn),o.an.add(o.hn)),o.fn.addEventListener("updatefound",o.cn),navigator.serviceWorker.addEventListener("controllerchange",o.dn),o.fn})})}catch(c){return Promise.reject(c)}},s.update=function(){try{return this.fn?P(this.fn.update()):void 0}catch(a){return Promise.reject(a)}},s.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},s.messageSW=function(a){try{return w(this.getSW(),function(d){return x(d,a)})}catch(d){return Promise.reject(d)}},s.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&x(this.fn.waiting,z)},s.pn=function(){var a=navigator.serviceWorker.controller;return a&&R(a.scriptURL,this.sn.toString())?a:void 0},s.bn=function(){try{var a=this;return function(d,t){try{var o=d()}catch(c){return t(c)}return o&&o.then?o.then(void 0,t):o}(function(){return w(navigator.serviceWorker.register(a.sn,a.nn),function(d){return a.un=performance.now(),d})},function(d){throw d})}catch(d){return Promise.reject(d)}},u=i,(v=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&B(u.prototype,v),i}(function(){function e(){this.Pn=new Map}var n=e.prototype;return n.addEventListener=function(r,i){this.Sn(r).add(i)},n.removeEventListener=function(r,i){this.Sn(r).delete(i)},n.dispatchEvent=function(r){r.target=this;for(var i,u=M(this.Sn(r.type));!(i=u()).done;)(0,i.value)(r)},n.Sn=function(r){return this.Pn.has(r)||this.Pn.set(r,new Set),this.Pn.get(r)},e}());function F(e={}){const{immediate:n=!1,onNeedRefresh:r,onOfflineReady:i,onRegistered:u,onRegisterError:v}=e;let s,a;const d=async(t=!0)=>{t&&(s==null||s.addEventListener("controlling",o=>{o.isUpdate&&window.location.reload()})),a&&a.waiting&&await x(a.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){s=new T("./sw.js",{scope:"./",type:"classic"}),s.addEventListener("activated",t=>{t.isUpdate||i==null||i()});{const t=()=>{r==null||r()};s.addEventListener("waiting",t),s.addEventListener("externalwaiting",t)}s.register({immediate:n}).then(t=>{a=t,u==null||u(t)}).catch(t=>{v==null||v(t)})}return d}function j(e={}){const{immediate:n=!0,onNeedRefresh:r,onOfflineReady:i,onRegistered:u,onRegisterError:v}=e,s=E(!1),a=E(!1);return{updateServiceWorker:F({immediate:n,onNeedRefresh(){s.value=!0,r==null||r()},onOfflineReady(){a.value=!0,i==null||i()},onRegistered:u,onRegisterError:v}),offlineReady:a,needRefresh:s}}const{updateServiceWorker:V}=j(),q=O({name:"ReloadPWA",components:{Overlay:C},setup(){const{offlineReady:e,needRefresh:n,updateServiceWorker:r}=j();return{offlineReady:e,needRefresh:n,updateServiceWorker:r,close:async()=>{e.value=!1,n.value=!1}}},methods:{async close(){this.offlineReady.value=!1,this.needRefresh.value=!1},async updateServiceWorker(){await V()}}}),G={key:0,class:"overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-full flex"},K={class:"relative px-4 w-full max-w-md h-auto"},D={class:"relative bg-white rounded-lg shadow dark:bg-gray-700"},H=h("div",{class:"flex justify-end p-2"},[h("button",{type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white","data-modal-toggle":"popup-modal"},[h("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[h("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})])])],-1),J={class:"p-6 pt-0 text-center"},Q=h("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),X=[Q],Y={key:0,class:"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"},Z={key:1,class:"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"};function ee(e,n,r,i,u,v){const s=I("Overlay");return m(),p(U,null,[A(s,{visible:e.offlineReady||e.needRefresh,onClickFunction:e.close},null,8,["visible","onClickFunction"]),e.offlineReady||e.needRefresh?(m(),p("div",G,[h("div",K,[h("div",D,[H,h("div",J,[(m(),p("svg",{onClick:n[0]||(n[0]=(...a)=>e.close&&e.close(...a)),class:"mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},X)),e.offlineReady?(m(),p("h3",Y," La aplicaci\xF3n est\xE1 lista para funcionar offline. ")):(m(),p("h3",Z," Nuevo contenido disponible, toque en refrescar para actualizar la p\xE1gina. ")),e.needRefresh?(m(),p("button",{key:2,onClick:n[1]||(n[1]=a=>e.updateServiceWorker()),type:"button",class:"text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"}," Refrescar ")):W("",!0),h("button",{onClick:n[2]||(n[2]=(...a)=>e.close&&e.close(...a)),type:"button",class:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"}," Cerrar ")])])])])):W("",!0)],64)}var oe=N(q,[["render",ee]]);export{oe as default};