(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{49:function(e,t,c){e.exports={item:"QuoteItem_item__3fqgu"}},50:function(e,t,c){e.exports={list:"QuoteList_list__33yeh",sorting:"QuoteList_sorting__nWog8"}},51:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__1M_Q2"}},54:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(49),o=c.n(s),i=c(8),r=c(1),u=function(e){return Object(r.jsxs)("li",{className:o.a.item,children:[Object(r.jsxs)("figure",{children:[Object(r.jsx)("blockquote",{children:Object(r.jsx)("p",{children:e.text})}),Object(r.jsx)("figcaption",{children:e.author})]}),Object(r.jsx)(i.b,{to:"/quotes/".concat(e.id),children:Object(r.jsx)("button",{type:"button",className:"btn",children:"View Fullscreen"})})]})},a=c(50),d=c.n(a),j=c(2),l=function(e){var t,c,s=Object(j.h)(),o=Object(j.i)(),i="asc"===new URLSearchParams(o.search).get("sort"),a=(t=e.quotes,c=i,t.sort((function(e,t){return c?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(r.jsxs)(n.Fragment,{children:[Object(r.jsx)("div",{className:d.a.sorting,children:Object(r.jsxs)("button",{onClick:function(){s.push("".concat(o.pathname,"?sort=").concat(i?"desc":"asc"))},children:["Sort ",i?"Descending":"Ascending"]})}),Object(r.jsx)("ul",{className:d.a.list,children:a.map((function(e){return Object(r.jsx)(u,{id:e.id,author:e.author,text:e.quote},e.id)}))})]})},b=c(35),h=c(36),x=c(14),O=c(51),f=c.n(O),p=function(){return Object(r.jsxs)("div",{className:f.a.noquotes,children:[Object(r.jsx)("p",{children:"No quotes found!"}),Object(r.jsx)(i.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})};t.default=function(){var e=Object(b.a)(h.d,!0),t=e.sendRequest,c=e.status,s=e.data,o=e.error;return Object(n.useEffect)((function(){t()}),[t]),"pending"===c?Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(x.a,{})}):o?Object(r.jsx)("p",{className:"centered focused",children:o}):"completed"!==c||s&&0!==s.length?Object(r.jsx)(l,{quotes:s}):Object(r.jsx)(p,{})}}}]);
//# sourceMappingURL=5.0fbf72f1.chunk.js.map