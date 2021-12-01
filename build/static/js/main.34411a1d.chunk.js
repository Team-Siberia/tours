(this.webpackJsonptours=this.webpackJsonptours||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(5),a=n.n(s),l=(n(11),n(4)),o=n.n(l),i=n(6),u=n(2),d=n(0);var b=function(e){var t=e.tour,n=e.id,c=e.handleRemove,s=Object(r.useState)(null),a=Object(u.a)(s,2),l=a[0],o=a[1];return Object(d.jsxs)("section",{className:"w-10/12 md:w-4/6 border-2 min-h-0 flex flex-col rounded-md overflow-hidden shadow-md",children:[Object(d.jsx)("img",{src:t.image,className:"w-full h-96 object-cover",alt:"Tour pic"}),Object(d.jsxs)("div",{className:"w-full min-h-0 p-10 flex flex-col",children:[Object(d.jsxs)("div",{className:"flex justify-between w-full mb-5",children:[Object(d.jsx)("h2",{className:"text-2xl font-bold",children:t.name}),Object(d.jsx)("button",{className:"text-green-900 bg-green-100 rounded-md py-1 px-2",children:"$ "+t.price})]}),Object(d.jsxs)("p",{children:[l===t.id?t.info:"".concat(t.info.substring(0,250),"..."),Object(d.jsx)("span",{onClick:function(){return function(e){o(e===l?null:e)}(t.id)},className:"text-green-900 ml-2 cursor-pointer",children:l===t.id?"Show Less":"Show More"})]}),Object(d.jsx)("button",{className:"border-red-500 text-red-500 border w-60 self-center m-5 rounded-md shadow p-1",onClick:function(){return c(n)},children:"NOT INTERESTED"})]})]})};var j=function(e){var t=e.tours,n=e.handleRemove;return Object(d.jsx)("div",{className:"flex flex-col items-center gap-8 md:gap-12",children:t.length>0?t.map((function(e){return Object(d.jsx)(b,{tour:e,id:e.id,handleRemove:n},e.id)})):null})};var m=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(!1),a=Object(u.a)(s,2),l=a[0],b=a[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,fetch("https://course-api.com/react-tours-project");case 4:return e.next=6,e.sent.json();case 6:t=e.sent,c(t),b(!1),e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),l?Object(d.jsx)("p",{className:"text-4xl font-black text-center h-96 mt-96",children:" Loading... "}):n&&Object(d.jsxs)("main",{className:"flex items-center w-full min-h-screen flex-col my-5 md:my-24 text-gray-700",children:[Object(d.jsx)("h1",{className:"font-black text-4xl border-b-4 border-blue-400 mb-10",children:"Our Tours"}),n.length>0?Object(d.jsx)(j,{tours:n,handleRemove:function(e){var t=n.slice();t.splice(e,1),c(t)}}):Object(d.jsx)("p",{className:"text-2xl font-black text-center h-96 my-auto",children:" No more tours... "})]})};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.34411a1d.chunk.js.map