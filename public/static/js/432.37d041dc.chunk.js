"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[432],{2072:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var s=n(1413),r=n(9439),a=n(3168),l=n(6871),o=n(2495),i=n(184),c=function(e){var t=e.item,n=(0,l.s0)(),s=(0,a.$)().t;return(0,i.jsxs)("div",{className:"flex flex-col mt-2 ml-4 mr-4 rounded-xl border-solid border-2 border-white shadow-lg shadow-gray-200",children:[(0,i.jsxs)("div",{className:"flex justify-start items-center h-12 mt-2",children:[(0,i.jsx)("img",{alt:"logo",src:t.imageUrl,className:"bg-red-100 m-2 h-full w-12"}),(0,i.jsxs)("div",{className:"flex flex-col justify-between gap-2 ",children:[(0,i.jsx)("p",{className:"font-bold text-black",children:t.name}),(0,i.jsx)("div",{className:"flex justify-between gap-4",children:t.tags.map((function(e,t){return(0,i.jsx)("p",{className:"text-orange-600",children:e},t)}))})]}),(0,i.jsxs)("p",{className:" ml-auto mr-4 mb-4 text-orange-600 text-sm",children:[s("di"),t.issue," ",s("qi")]})]}),(0,i.jsxs)("div",{className:"flex mt-4 justify-around items-center",children:[(0,i.jsxs)("div",{className:"flex flex-col  items-center m-1",children:[(0,i.jsx)("p",{className:"font-bold text-2xl text-orange-500",children:t.income}),(0,i.jsx)("p",{className:"text-sm text-gray-400",children:s("time_income")})]}),(0,i.jsxs)("div",{className:"flex flex-col  items-center",children:[(0,i.jsx)("p",{className:"font-bold text-2xl text-orange-500",children:t.income*t.period}),(0,i.jsx)("p",{className:"text-sm text-gray-400",children:s("all_income")})]}),(0,i.jsxs)("div",{className:"flex flex-col  items-center",children:[(0,i.jsx)("p",{className:"font-bold text-2xl text-orange-500",children:t.price}),(0,i.jsx)("p",{className:"text-sm text-gray-400",children:s("lease_fees")})]}),(0,i.jsx)("button",{className:"rounded-2xl bg-orange-500 p-2 text-white",onClick:function(){(0,o.eN)(t).then((function(e){n("/depot")}))},children:s("lease_now")})]})]})},u=n(2791),x=n(6856),m=n(9126),d=(n(8040),n(197)),f=function(){var e=(0,a.$)().t,t=(0,l.s0)(),n=(0,u.useState)([]),f=(0,r.Z)(n,2),p=f[0],g=f[1],h=(0,u.useState)([]),j=(0,r.Z)(h,2),w=j[0],b=j[1];return(0,u.useEffect)((function(){localStorage.setItem("navBar",""),(0,o.op)().then((function(e){g(e.data.rotates.map((function(e){return{imgUrl:"/uploads/"+e.imgUrl}}))),b(e.data.product.map((function(e){return(0,s.Z)((0,s.Z)({},e),{},{imageUrl:"/uploads/"+e.imageUrl,tags:["\u5171\u4eab\u5145\u7535","\u5171\u4eab\u6536\u76ca"]})})))}))}),[]),(0,i.jsxs)("div",{className:"flex flex-col ",children:[(0,i.jsx)(d.lr,{autoPlay:!0,infiniteLoop:!0,showThumbs:!1,showArrows:!1,showStatus:!1,children:p.map((function(e,t){return(0,i.jsx)("img",{src:e.imgUrl,alt:"",className:"h-48 w-3/4 "},t)}))}),(0,i.jsxs)("div",{className:"flex justify-around items-center h-24",children:[(0,i.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,i.jsx)(x.gi0,{className:"text-4xl text-teal-300"}),(0,i.jsx)("p",{className:"text-sm",children:e("nearby")})]}),(0,i.jsxs)("div",{className:"flex flex-col items-center gap-2",onClick:function(){return t("/post")},children:[(0,i.jsx)(m.G09,{className:"text-4xl text-teal-300"}),(0,i.jsx)("p",{className:"text-sm",children:e("post")})]}),(0,i.jsxs)("div",{className:"flex flex-col items-center gap-2",onClick:function(){return t("/download")},children:[(0,i.jsx)(m.eEq,{className:"text-4xl text-teal-300"}),(0,i.jsx)("p",{className:"text-sm",children:e("download")})]})]}),(0,i.jsx)("div",{className:" flex flex-col ",children:w.map((function(e){return(0,i.jsx)(c,{item:e},e._id)}))})]})}},129:function(e,t,n){var s=n(4569),r=n.n(s),a=n(577),l=r().create({baseURL:"/api",withCredentials:!0});l.interceptors.request.use((function(e){return localStorage.__web_token&&(e.headers.Authorization="Bearer "+localStorage.__web_token),localStorage.i18nextLng&&(e.headers["Accept-Language"]=localStorage.i18nextLng),e}),(function(e){return Promise.reject(e)})),l.interceptors.response.use((function(e){return e.data.message&&a.Am.success(e.data.message),e}),(function(e){return 401===e.response.status&&(localStorage.removeItem("__web_token"),-1===window.location.pathname.indexOf("login")&&-1===window.location.pathname.indexOf("register")&&(window.location.hash="/login")),e.response.data?(a.Am.error(e.response.data.message),Promise.reject(e)):Promise.reject(e)})),t.Z=l},2495:function(e,t,n){n.d(t,{DJ:function(){return x},Fe:function(){return u},Ig:function(){return a},eN:function(){return m},li:function(){return i},op:function(){return l},pk:function(){return r},s8:function(){return c},uT:function(){return d},w2:function(){return o}});var s=n(129),r=function(e){return s.Z.post("/web/register",e)},a=function(e){return s.Z.post("/web/login",e)},l=function(){return s.Z.get("/web/Index")},o=function(){return s.Z.get("/web/user/center")},i=function(){return s.Z.get("/web/info/about")},c=function(){return s.Z.get("/web/info/post")},u=function(e){return s.Z.delete("/web/info/post/"+e)},x=function(){return s.Z.get("/web/info/share")},m=function(e){return s.Z.post("/web/product/buy",e)},d=function(){return s.Z.get("/web/product/depot")}}}]);
//# sourceMappingURL=432.37d041dc.chunk.js.map