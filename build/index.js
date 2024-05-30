(()=>{"use strict";var e,t={21:()=>{const e=window.wp.blocks,t=window.React,r=window.wp.i18n,a=window.wp.blockEditor,l=window.wp.components;window.wp.element;const o=JSON.parse('{"UU":"gomega-sell-block/gomega-sell-block"}');(0,e.registerBlockType)(o.UU,{edit:function({attributes:e,setAttributes:o}){const{rows:n,cols:c,colsArr:s,rowsArr:m}=e;n||o({rows:2}),c||o({cols:2}),s||o({colsArr:Array.from({length:c},((e,t)=>""))}),m||o({rowsArr:Array.from({length:n},((e,t)=>""))});const p=()=>{console.log("addColumn",p,s),s||o({colsArr:Array.from({length:c},((e,t)=>""))});const e=[...s];e.push(""),o({colsArr:e})},g=()=>{console.log("removeColumn",g,m),m||o({colsArr:Array.from({length:n},((e,t)=>""))});const e=[...m];e.pop(),o({rowsArr:e})},i=()=>{console.log("removeColumn",i,s),s||o({colsArr:Array.from({length:c},((e,t)=>""))});const e=[...s];e.pop(),o({colsArr:e})};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a.InspectorControls,null,(0,t.createElement)(l.PanelBody,{title:(0,r.__)("Settings","copyright-date-block")},(0,t.createElement)(l.Button,{text:"افزودن ستون",onClick:()=>p()}),(0,t.createElement)(l.Button,{text:"حذف ستون",onClick:()=>i()}),(0,t.createElement)(l.Button,{text:"افزودن ردیف",onClick:()=>(()=>{console.log("addColumn",p,m),m||o({colsArr:Array.from({length:n},((e,t)=>""))});const e=[...m];e.push([]),o({rowsArr:e})})()}),(0,t.createElement)(l.Button,{text:"حذف ردیف",onClick:()=>g()}))),(0,t.createElement)("div",{...(0,a.useBlockProps)()},(0,t.createElement)("div",{class:"relative overflow-x-auto",dir:"rtl"},(0,t.createElement)("table",{class:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"},(0,t.createElement)("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},(0,t.createElement)("tr",null,s&&s.map(((e,l,n)=>(0,t.createElement)(t.Fragment,null,(0,t.createElement)("th",{scope:"col",class:"px-6 py-3"},(0,t.createElement)(a.RichText,{tagName:"p",onChange:e=>{s[l]=e,o({colsArr:s})},value:s[l],placeholder:(0,r.__)("Write your paragraph...","my-custom-block")}))))))),(0,t.createElement)("tbody",null,m&&m.map(((e,l,n)=>(0,t.createElement)(t.Fragment,null,(0,t.createElement)("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},s&&s.map(((e,n,c)=>(0,t.createElement)(t.Fragment,null,0==n&&(0,t.createElement)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},(0,t.createElement)(a.RichText,{tagName:"p",onChange:e=>{m[l][n]=e,o({rowsArr:m})},value:m[l][n],placeholder:(0,r.__)("Write your paragraph...","my-custom-block")})),0!=n&&(0,t.createElement)("th",{className:"px-6 py-4"},(0,t.createElement)(a.RichText,{tagName:"p",onChange:e=>{m[l][n]=e,o({rowsArr:m})},value:m[l][n],placeholder:(0,r.__)("Write your paragraph...","my-custom-block")}))))))))))))))},save:function({attributes:e}){const{rowsArr:r,colsArr:l}=e;return(0,t.createElement)("div",{...a.useBlockProps.save()},(0,t.createElement)("div",{className:"relative overflow-x-auto",dir:"rtl"},(0,t.createElement)("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"},(0,t.createElement)("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},(0,t.createElement)("tr",null,l&&l.map(((e,r)=>(0,t.createElement)("th",{key:r,scope:"col",className:"px-6 py-3"},(0,t.createElement)(a.RichText.Content,{tagName:"p",value:e})))),"     ")),(0,t.createElement)("tbody",null,r&&r.map(((e,r)=>(0,t.createElement)("tr",{key:r,className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},e.map(((e,r)=>(0,t.createElement)("td",{key:r,className:"px-6 py-4"},(0,t.createElement)(a.RichText.Content,{tagName:"p",value:e})))))))))))}})}},r={};function a(e){var l=r[e];if(void 0!==l)return l.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,r,l,o)=>{if(!r){var n=1/0;for(p=0;p<e.length;p++){for(var[r,l,o]=e[p],c=!0,s=0;s<r.length;s++)(!1&o||n>=o)&&Object.keys(a.O).every((e=>a.O[e](r[s])))?r.splice(s--,1):(c=!1,o<n&&(n=o));if(c){e.splice(p--,1);var m=l();void 0!==m&&(t=m)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[r,l,o]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var l,o,[n,c,s]=r,m=0;if(n.some((t=>0!==e[t]))){for(l in c)a.o(c,l)&&(a.m[l]=c[l]);if(s)var p=s(a)}for(t&&t(r);m<n.length;m++)o=n[m],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(p)},r=globalThis.webpackChunkgomega_sell_block=globalThis.webpackChunkgomega_sell_block||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l=a.O(void 0,[350],(()=>a(21)));l=a.O(l)})();