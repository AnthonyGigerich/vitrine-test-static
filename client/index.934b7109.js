import{S as a,i as t,s as e,a as s,c as n,b as r,m as o,g,d as i,t as c,e as f,f as d}from"./client.08d55549.js";import{g as $,P as u,C as l}from"./Page.95edd324.js";function p(a){let t,e;const $=[a[1],{data:a[0]}];let l={};for(let a=0;a<$.length;a+=1)l=s(l,$[a]);return t=new u({props:l}),{c(){n(t.$$.fragment)},l(a){r(t.$$.fragment,a)},m(a,s){o(t,a,s),e=!0},p(a,[e]){const s=3&e?g($,[2&e&&i(a[1]),1&e&&{data:a[0]}]):{};t.$set(s)},i(a){e||(c(t.$$.fragment,a),e=!0)},o(a){f(t.$$.fragment,a),e=!1},d(a){d(t,a)}}}async function m(a,t){const e={error:this.error,fetch:this.fetch};return await $("",t.config,e)}function h(a,t,e){let s,n,{configData:r}=t,{data:o}=t,{pageSlug:g}=t;return a.$$set=a=>{"configData"in a&&e(2,r=a.configData),"data"in a&&e(0,o=a.data),"pageSlug"in a&&e(3,g=a.pageSlug)},a.$$.update=()=>{4&a.$$.dirty&&e(4,s=new l(r)),24&a.$$.dirty&&e(1,n=s.findPageBySlug(g))},[o,n,r,g]}export default class extends a{constructor(a){super(),t(this,a,h,p,e,{configData:2,data:0,pageSlug:3})}}export{m as preload};
