import{_ as c,a as i,u as d}from"./index.7b67686f.js";import{i as s,k as l,E as m,j as f,s as b,l as p,m as t}from"./vendor.cec9b364.js";const _={setup(){const{isMobile:r}=i(),{openDrawer:e}=d();return{isMobile:r,openDrawer:e}}},u={class:"flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300 dark:border-gray-600 justify-between dark:bg-gray-700"},g={class:"text-lg font-medium"};function k(r,e,x,o,y,w){const a=p("font-awesome-icon");return t(),s("div",u,[l("h1",g,m(r.$route.meta.text),1),o.isMobile?(t(),s("button",{key:0,class:"flex items-center justify-center w-10 h-10 rounded hover:bg-gray-300 dark:hover:bg-gray-700",onClick:e[0]||(e[0]=(...n)=>o.openDrawer&&o.openDrawer(...n))},[f(a,{icon:"bars"})])):b("",!0)])}var j=c(_,[["render",k]]);export{j as default};