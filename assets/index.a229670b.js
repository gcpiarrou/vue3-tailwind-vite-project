import{c as v,a as D,b as g,o as b,d as E,r as W,t as I,e as l,u as O,f as y,g as L,h as _,i as R,j as u,k as P,l as m,m as A,n as k,_ as x,p as T,F as j}from"./vendor.cec9b364.js";const M=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}};M();const N="modulepreload",w={},V="./",i=function(o,r){return!r||r.length===0?o():Promise.all(r.map(s=>{if(s=`${V}${s}`,s in w)return;w[s]=!0;const t=s.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const a=document.createElement("link");if(a.rel=t?"stylesheet":N,t||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),t)return new Promise((d,c)=>{a.addEventListener("load",d),a.addEventListener("error",c)})})).then(()=>o())},h=()=>i(()=>import("./Home.68836589.js"),["assets/Home.68836589.js","assets/vendor.cec9b364.js"]),S=()=>i(()=>import("./Home.68836589.js"),["assets/Home.68836589.js","assets/vendor.cec9b364.js"]),H=()=>i(()=>import("./Home.68836589.js"),["assets/Home.68836589.js","assets/vendor.cec9b364.js"]),$=()=>i(()=>import("./NotFound.2982ae0a.js"),["assets/NotFound.2982ae0a.js","assets/vendor.cec9b364.js"]),B=()=>i(()=>import("./WindowData.b209d15d.js"),["assets/WindowData.b209d15d.js","assets/vendor.cec9b364.js"]),C=()=>i(()=>import("./MobileTest.9a81df29.js"),["assets/MobileTest.9a81df29.js","assets/vendor.cec9b364.js"]);var F=[{path:"/",name:"home",component:h,meta:{text:"Home",icon:"home",visibleInDrawer:!0},children:[{path:"welcome",component:S,name:"home-welcome",meta:{text:"Welcome",icon:"sun",visibleInDrawer:!0}}]},{path:"/profile",name:"Profile",component:h,meta:{text:"Profile",icon:"user-circle",visibleInDrawer:!1}},{path:"/users",name:"Users",component:H,meta:{text:"Users",icon:"user",visibleInDrawer:!0}},{path:"/window-data",name:"window-data",component:B,meta:{text:"Window data",icon:"desktop",visibleInDrawer:!0}},{path:"/mobile-test",name:"mobile-test",component:C,meta:{text:"Mobile test",icon:"mobile-alt",visibleInDrawer:!0}},{path:"/logout",name:"logout",component:h,meta:{text:"Logout",icon:"power-off",visibleInDrawer:!1}},{path:"/:catchAll(.*)",component:$}];const U=[...F],q=v({history:D(),routes:U}),z=g({state(){return{auth:{user:{username:"",mail:""}},drawer:{isOpen:!1}}},mutations:{openDrawer(e){e.drawer.isOpen=!0},closeDrawer(e){e.drawer.isOpen=!1},toggleDrawer(e){e.drawer.isOpen=!e.drawer.isOpen}}});function K(e,o,r){b(()=>e.addEventListener(o,r)),E(()=>e.removeEventListener(o,r))}function G(){const e=W(window.innerWidth),r=I(()=>{e.value=window.innerWidth},200);return K(window,"resize",r),{windowWidth:e}}const J=()=>{const{windowWidth:e}=G();return{isMobile:l(()=>e.value<768)}};function Q(){const e=O(),o=y(),r=L(),s=l(()=>o.matched[0]),t=l(()=>o.matched),n=l(()=>o.matched[o.matched.length-1].children),a=l(()=>r.options.routes.filter(c=>c.meta)),d=l(()=>a.value.filter(c=>c.meta.visibleInDrawer));return{drawerIsOpen:l(()=>e.state.drawer.isOpen),openDrawer:()=>e.commit("openDrawer"),closeDrawer:()=>e.commit("closeDrawer"),toggleDrawer:()=>e.commit("toggleDrawer"),parentRoute:s,secondaryDrawerRoutes:t,childrenRoutes:n,mainDrawerRoutes:d}}function X(){localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.theme="light",localStorage.theme="dark",localStorage.removeItem("theme")}var Y=(e,o)=>{const r=e.__vccOpts||e;for(const[s,t]of o)r[s]=t;return r};X();const Z={components:{ReloadPWA:_(()=>i(()=>import("./ReloadPWA.08aeddc7.js"),["assets/ReloadPWA.08aeddc7.js","assets/Overlay.eacb0799.js","assets/vendor.cec9b364.js"])),Drawer:_(()=>i(()=>import("./Drawer.65e18082.js"),["assets/Drawer.65e18082.js","assets/vendor.cec9b364.js","assets/Overlay.eacb0799.js"])),NavBar:_(()=>i(()=>import("./NavBar.78a83732.js"),["assets/NavBar.78a83732.js","assets/vendor.cec9b364.js"]))},setup(){const{isMobile:e}=J(),{drawerIsOpen:o}=Q();return{isMobile:e,drawerIsOpen:o}}},ee={class:"flex h-screen text-gray-800 bg-gray-50 dark:text-white dark:bg-gray-700"},te={class:"w-full"};function oe(e,o,r,s,t,n){const a=m("Drawer"),d=m("NavBar"),c=m("router-view"),f=m("ReloadPWA");return A(),R("div",ee,[u(a),P("div",te,[u(d),u(c),u(f)])])}var re=Y(Z,[["render",oe]]);k.add(x);const p=T(re);p.use(q);p.use(z);p.component("font-awesome-icon",j);p.mount("#app");export{Y as _,J as a,G as b,Q as u};
