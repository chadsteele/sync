(this.webpackJsonpsync=this.webpackJsonpsync||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(7),s=n.n(a),o=(n(14),n(6)),r=n(3),l=n(8),d=n(9),u=new(function(){function e(t){Object(l.a)(this,e),this.node=t||this.node||window,this.cache={}}return Object(d.a)(e,[{key:"get",value:function(e){return this.cache[e]}},{key:"echo",value:function(e){this.dispatch(this.get(e))}},{key:"addListener",value:function(e,t,n){e&&(t=t||function(e){return e?e.detail:null},this.node.addEventListener(e,t,n))}},{key:"removeListener",value:function(e,t){e&&this.node.removeEventListener(e,t)}},{key:"dispatch",value:function(e,t){if(e){if(!e.type){var n=e,i=n.event||n.name||n,c=n.params||n.data||t;"object"===typeof c&&(c=Object.assign({},n.params,n.data,t)),e=new CustomEvent(i,{detail:c})}this.node.dispatchEvent(e),this.cache[e.type]=e}}}]),e}());var h=function(e,t,n,c){var a=e||"useSync";void 0===t&&(t=(u.get(a)||{}).detail);var s=Object(i.useState)(t),o=Object(r.a)(s,2),l=o[0],d=o[1];function h(e){var t=e.detail;d(t),n&&n(t)}return Object(i.useEffect)((function(){return l&&u.dispatch(a,l),u.addListener(a,h,c),function(){u.removeListener(a,h)}}),[]),[l,function(e){d(e),u.dispatch(a,e)}]},j=n(0),b=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.cells,i=h(n.name),c=Object(r.a)(i,2),a=c[0],s=c[1],o=function(e){s(e.target.value)};return n.length?Object(j.jsx)("div",{children:n.map((function(t){return Object(j.jsx)(e,{cells:t})}))}):n.name?Object(j.jsxs)("fieldset",{style:{margin:"20px",display:"inline-block"},children:[Object(j.jsxs)("label",{children:[n.name," \xa0",Object(j.jsx)("input",{type:"text",value:a,onChange:o})]}),n.children&&Object(j.jsx)(e,{cells:n.children})]}):null};var v=function(){var e=Object(i.useState)([{name:"A",children:[{name:"one",children:[]},{name:"two",children:[]}]},{name:"B",children:[{name:"one",children:[]},{name:"two",children:[]}]}]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)("div",{style:{padding:"20px",margin:"20px"},children:[Object(j.jsx)("h2",{children:"This demonstrates useSync across multiple text inputs (A, B, one and two) in multiple React components without Redux or Context"}),Object(j.jsx)("div",{children:"Type something in each box, any box, and the matching inputs will be synchronized"}),Object(j.jsx)(b,{cells:n}),Object(j.jsx)("button",{onClick:function(){c([].concat(Object(o.a)(n),Object(o.a)(n)))},children:"more"}),n.length>2&&Object(j.jsxs)("div",{children:[" ",3*n.length," synchronized inputs "]})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.e77c200a.chunk.js.map