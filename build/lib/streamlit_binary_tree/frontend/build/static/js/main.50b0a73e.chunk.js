(this.webpackJsonpstreamlit_component_template=this.webpackJsonpstreamlit_component_template||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var o=n(5),r=n.n(o),c=n(14),i=n.n(c),l=n(15),a=n(0),s=n(1),d=n(3),u=n(4),j=n(8),h=n(17),b=n.n(h),_=n(18),x=n.n(_),f={},O=Object(o.createContext)(f),m=n(2),g=function(e){var t=e.id,n=Object(o.useContext)(O),r=n.data,c=n.show_node_ids,i=r.find((function(e){return e.node_id===t}));return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"node",children:[c&&Object(m.jsx)("div",{className:"node-content-left",onClick:function(e){var n;n=t,j.Streamlit.setComponentValue(n)},style:{backgroundColor:i.color},children:Object(m.jsx)("div",{children:i.node_id})}),Object(m.jsx)("div",{className:"node-content-right",children:i.contents.map((function(e,t){return Object(m.jsx)("div",{className:"node-content-right-item",children:e},t)}))})]})})},v=function(e){var t=e.id,n=(e.isLeft,Object(o.useContext)(O).data.find((function(e){return e.node_id===t})));return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"edge-content",children:n.left.condition})})},p=function e(t){var n=t.id,r=t.depth,c=Object(o.useContext)(O),i=c.data,l=r<c.expanded_depth,a=i.find((function(e){return e.node_id===n})),s=Object(o.useState)(null!=a.childrenVisible?a.childrenVisible:l),u=Object(d.a)(s,2),j=u[0],h=u[1];a.childrenVisible=j;var b=null!=a.left&&null!=a.right,_=j?{}:{opacity:0,maxHeight:0,maxWidth:0,overflowX:"hidden"};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{id:n,depth:r}),b&&Object(m.jsx)("div",{className:"child-button",onClick:function(e){h(!j)},style:j?{}:{transform:"scaleX(-1)"}}),b&&Object(m.jsxs)("ul",{style:_,children:[Object(m.jsxs)("li",{children:[Object(m.jsx)(v,{id:n,isLeft:!0},n),Object(m.jsx)(e,{id:a.left.id,depth:r+1},a.left.id)]}),Object(m.jsxs)("li",{children:[Object(m.jsx)(v,{id:n,isLeft:!1},n),Object(m.jsx)(e,{id:a.right.id,depth:r+1},a.right.id)]})]})]})},w=(n(28),function(e){if(0===e.indexOf("#")&&(e=e.slice(1)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!==e.length)throw console.log("dfs",e),new Error("Invalid HEX color.");var t=(255-parseInt(e.slice(0,2),16)).toString(16),n=(255-parseInt(e.slice(2,4),16)).toString(16),o=(255-parseInt(e.slice(4,6),16)).toString(16);return"#"+I(t,2)+I(n,2)+I(o,2)}),y=function(e){if(0===e.indexOf("#")&&(e=e.slice(1)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!==e.length)throw new Error("Invalid Alpha-HEX color.");var t=parseInt(e.slice(0,2),16),n=parseInt(e.slice(2,4),16),o=parseInt(e.slice(4,6),16);return"".concat(t,", ").concat(n,", ").concat(o)},I=function(e,t){return t=t||2,(new Array(t).join("0")+e).slice(-t)},C=Object(j.withStreamlitConnection)((function(e){var t=e.args,n=t.key,r=t.style,c=e.theme,i=Object(o.useState)(0),l=Object(d.a)(i,2),h=l[0],_=l[1],f=Object(o.useRef)(null);!function(e,t){var n=Object(u.a)({},e);n.text_outline_color_mix="rgba(".concat(y(n.text_outline_color),", ").concat(n.text_outline_alpha,")"),"dark"===t.base&&(n.button_color=w(n.button_color),n.button_hover_color=w(n.button_hover_color),n.edge_color=w(n.edge_color),n.edge_hover_color=w(n.edge_hover_color),n.node_border_color=w(n.node_border_color),n.node_color=w(n.node_color),n.node_hover_color=w(n.node_hover_color),n.text_color=w(n.text_color),n.text_hover_color=w(n.text_hover_color),n.text_outline_color=w(n.text_outline_color),n.text_outline_color_mix="rgba(".concat(y(n.text_outline_color),", ").concat(n.text_outline_alpha,")")),Object.entries(n).forEach((function(e){var t=Object(d.a)(e,2),n=t[0],o=t[1];n="--".concat(n.replaceAll("_","-")),document.getElementById("root").style.setProperty(n,o)})),document.getElementById("root").style.setProperty("--backgroundColor",t.backgroundColor)}(r,c),Object(o.useEffect)((function(){var e=setInterval((function(){null!=f.current&&_(f.current.clientHeight)}),20);return j.Streamlit.setFrameHeight(),function(){return clearInterval(e)}}),[h]);var g=function(){var e=Object(s.a)(Object(a.a)().mark((function e(){var t,o,r,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector(".tree"),console.log(t.scrollWidth,t.clientWidth),o=t.scrollWidth,e.next=5,x()(document.querySelector(".tree"),{width:o,windowWidth:o,scale:4});case 5:r=e.sent,c=r.toDataURL("image/jpg"),b()(c,"".concat(n,".jpg"),"image/jpg");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)(O.Provider,{value:t,children:[Object(m.jsx)("button",{className:"download-button",onClick:function(e){return g()},children:"Download as Image"}),Object(m.jsx)("div",{className:"tree",ref:f,children:Object(m.jsx)("ul",{className:"rootNode",children:Object(m.jsx)("li",{children:Object(m.jsx)(p,{id:0,depth:0})})})}),Object(m.jsx)("br",{})]})}));i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(l.StreamlitProvider,{children:Object(m.jsx)(C,{})})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.50b0a73e.chunk.js.map