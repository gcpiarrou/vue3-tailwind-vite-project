import{c as v,a as D,b as g,o as E,d as W,r as b,t as y,e as l,u as O,f as I,g as L,h as _,i as R,j as u,k as P,l as m,m as A,n as k,_ as x,p as N,F as j}from"./vendor.55fd1cae.js";const S=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}};S();const T="modulepreload",h={},V="./",c=function(o,r){return!r||r.length===0?o():Promise.all(r.map(s=>{if(s=`${V}${s}`,s in h)return;h[s]=!0;const t=s.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const a=document.createElement("link");if(a.rel=t?"stylesheet":T,t||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),t)return new Promise((d,i)=>{a.addEventListener("load",d),a.addEventListener("error",i)})})).then(()=>o())},f=()=>c(()=>import("./Home.9d49a636.js"),["assets/Home.9d49a636.js","assets/vendor.55fd1cae.js"]),H=()=>c(()=>import("./Home.9d49a636.js"),["assets/Home.9d49a636.js","assets/vendor.55fd1cae.js"]),M=()=>c(()=>import("./Home.9d49a636.js"),["assets/Home.9d49a636.js","assets/vendor.55fd1cae.js"]),$=()=>c(()=>import("./NotFound.571068fc.js"),["assets/NotFound.571068fc.js","assets/vendor.55fd1cae.js"]),B=()=>c(()=>import("./WindowData.f8b8f240.js"),["assets/WindowData.f8b8f240.js","assets/vendor.55fd1cae.js"]);var C=[{path:"/",name:"home",component:f,meta:{text:"Home",icon:"home",visibleInDrawer:!0},children:[{path:"welcome",component:H,name:"home-welcome",meta:{text:"Welcome",icon:"sun",visibleInDrawer:!0}}]},{path:"/profile",name:"Profile",component:f,meta:{text:"Profile",icon:"user-circle",visibleInDrawer:!1}},{path:"/users",name:"Users",component:M,meta:{text:"Users",icon:"user",visibleInDrawer:!0}},{path:"/window-data",name:"window-data",component:B,meta:{text:"Window data",icon:"desktop",visibleInDrawer:!0}},{path:"/logout",name:"logout",component:f,meta:{text:"Logout",icon:"power-off",visibleInDrawer:!1}},{path:"/:catchAll(.*)",component:$}];const F=[...C],U=v({history:D(),routes:F}),q=g({state(){return{auth:{user:{username:"",mail:""}},drawer:{isOpen:!1}}},mutations:{openDrawer(e){e.drawer.isOpen=!0},closeDrawer(e){e.drawer.isOpen=!1},toggleDrawer(e){e.drawer.isOpen=!e.drawer.isOpen}}});function z(e,o,r){E(()=>e.addEventListener(o,r)),W(()=>e.removeEventListener(o,r))}function K(){const e=b(window.innerWidth),r=y(()=>{e.value=window.innerWidth},200);return z(window,"resize",r),{windowWidth:e}}const G=()=>{const{windowWidth:e}=K();return{isMobile:l(()=>e.value<600)}};function J(){const e=O(),o=I(),r=L(),s=l(()=>o.matched[0]),t=l(()=>o.matched),n=l(()=>o.matched[o.matched.length-1].children),a=l(()=>r.options.routes.filter(i=>i.meta)),d=l(()=>a.value.filter(i=>i.meta.visibleInDrawer));return{drawerIsOpen:l(()=>e.state.drawer.isOpen),openDrawer:()=>e.commit("openDrawer"),closeDrawer:()=>e.commit("closeDrawer"),toggleDrawer:()=>e.commit("toggleDrawer"),parentRoute:s,secondaryDrawerRoutes:t,childrenRoutes:n,mainDrawerRoutes:d}}function Q(){localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.theme="light",localStorage.theme="dark",localStorage.removeItem("theme")}var X=(e,o)=>{const r=e.__vccOpts||e;for(const[s,t]of o)r[s]=t;return r};Q();const Y={components:{ReloadPWA:_(()=>c(()=>import("./ReloadPWA.72db7eac.js"),["assets/ReloadPWA.72db7eac.js","assets/Overlay.de570033.js","assets/vendor.55fd1cae.js"])),Drawer:_(()=>c(()=>import("./Drawer.07e476ff.js"),["assets/Drawer.07e476ff.js","assets/vendor.55fd1cae.js","assets/Overlay.de570033.js"])),NavBar:_(()=>c(()=>import("./NavBar.0b8d76a9.js"),["assets/NavBar.0b8d76a9.js","assets/vendor.55fd1cae.js"]))},setup(){const{isMobile:e}=G(),{drawerIsOpen:o}=J();return{isMobile:e,drawerIsOpen:o}}},Z={class:"flex h-screen text-gray-800 bg-gray-50 dark:text-white dark:bg-gray-700"},ee={class:"w-full"};function te(e,o,r,s,t,n){const a=m("Drawer"),d=m("NavBar"),i=m("router-view"),w=m("ReloadPWA");return A(),R("div",Z,[u(a),P("div",ee,[u(d),u(i),u(w)])])}var oe=X(Y,[["render",te]]);k.add(x);const p=N(oe);p.use(U);p.use(q);p.component("font-awesome-icon",j);p.mount("#app");export{X as _,G as a,K as b,J as u};