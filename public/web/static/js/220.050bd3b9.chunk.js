"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[220],{3220:function(e,n,t){t.r(n);var r=t(9439),o=t(2791),c=t(3168),s=t(8402),u=t(184);n.default=function(){var e=(0,o.useState)(),n=(0,r.Z)(e,2),t=n[0],a=n[1],i=(0,o.useState)([]),l=(0,r.Z)(i,2),d=l[0],f=l[1],g=(0,o.useState)([]),p=(0,r.Z)(g,2),m=p[0],h=p[1],x=(0,c.$)().t;(0,o.useEffect)((function(){(0,s.kP)().then((function(e){a(e.data.imageUrl),f(e.data.rules),h(e.data.notes)}))}),[]);return(0,u.jsxs)("div",{className:"flex flex-col h-screen",children:[(0,u.jsxs)("div",{className:"w-screen h-2/4 flex flex-col justify-end items-center ",style:{backgroundImage:"url(".concat("/uploads/"+t,")"),backgroundRepeat:"no-repeat",backgroundSize:"100% 100% "},children:[(0,u.jsx)("button",{className:"rounded-2xl bg-green-600 mb-8 w-48 h-10 font-bold text-sm  ",onClick:function(){},children:x("share_now")}),(0,u.jsx)("div",{className:"flex flex-col w-screen item-start m-4 pl-4 text-white gap-2 ",children:m.map((function(e,n){return(0,u.jsxs)("div",{className:"flex gap-2 ",children:[(0,u.jsx)("p",{className:"rounded-full w-6 h-6 leading-6 bg-green-600 text-center",children:n+1}),(0,u.jsx)("p",{className:"w-10/12 tracking-wider leading-6 ",children:e.rule})]},n)}))})]}),(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)("div",{className:"p-2 w-24  m-auto border-solid border-b-2 border-b-red-500  text-center",children:x("share_rule")}),(0,u.jsx)("div",{className:"flex flex-col p-4 gap-4",children:d.map((function(e,n){return(0,u.jsxs)("div",{className:"flex gap-2 ",children:[(0,u.jsx)("p",{className:"rounded-full w-6 h-6 leading-6 bg-gray-300 text-center",children:n+1}),(0,u.jsx)("p",{className:"w-10/12 tracking-wider leading-6 ",children:e.rule})]},n)}))})]})]})}},8402:function(e,n,t){t.d(n,{c6:function(){return p},Xc:function(){return w},$C:function(){return b},NG:function(){return d},Ig:function(){return l},w2:function(){return f},QZ:function(){return m},Bw:function(){return h},ic:function(){return j},pk:function(){return i},kP:function(){return x},I6:function(){return a},MS:function(){return g},eO:function(){return k}});var r=t(4569),o=t.n(r),c=t(577),s=o().create({baseURL:"/api/web",withCredentials:!0});s.interceptors.request.use((function(e){return localStorage.__web_token&&(e.headers.Authorization="Bearer "+localStorage.__web_token),localStorage.i18nextLng&&(e.headers["Accept-Language"]=localStorage.i18nextLng),e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e.data.message&&c.Am.success(e.data.message),e}),(function(e){return 401===e.response.status&&(localStorage.removeItem("__web_token"),-1===window.location.pathname.indexOf("login")&&-1===window.location.pathname.indexOf("register")&&(window.location.hash="/login")),e.response.data?(console.log(e.response),c.Am.error(e.response.data.message),Promise.reject(e)):Promise.reject(e)}));var u=s,a=function(e){return u.post("/../common/sms",e)},i=function(e){return u.post("/register",e)},l=function(e){return u.post("/login",e)},d=function(){return u.get("/Index")},f=function(){return u.get("/user/center")},g=function(){return u.get("/user/wallet")},p=function(){return u.get("/info/about")},m=function(){return u.get("/info/post")},h=function(e){return u.delete("/info/post/"+e)},x=function(){return u.get("/info/share")},w=function(e){return u.post("/product/buy",e)},b=function(){return u.get("/product/depot")},j=function(e){return u.post("/order/recharge",e)},k=function(){return u.get("/order/withdraw")}}}]);
//# sourceMappingURL=220.050bd3b9.chunk.js.map