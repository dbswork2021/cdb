"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[122],{4299:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(1413),s=n(9439),a=n(3168),o=n(6871),c=n(8402),i=n(184),l=function(e){var t=e.item,n=(0,o.s0)(),r=(0,a.$)().t;return(0,i.jsxs)("div",{className:"flex flex-col mt-2 ml-4 mr-4 rounded-xl border-solid border-2 border-white shadow-lg shadow-gray-200",children:[(0,i.jsxs)("div",{className:"flex justify-start items-center h-12 mt-2",children:[(0,i.jsx)("img",{alt:"logo",src:t.imageUrl,className:"bg-red-100 m-2 h-full w-12"}),(0,i.jsxs)("div",{className:"flex flex-col justify-between gap-2 ",children:[(0,i.jsx)("p",{className:"font-bold text-black",children:t.name}),(0,i.jsx)("div",{className:"flex justify-between gap-4",children:t.tags.map((function(e,t){return(0,i.jsx)("p",{className:"text-orange-600",children:e},t)}))})]}),(0,i.jsxs)("p",{className:" ml-auto mr-4 mb-4 text-orange-600 text-sm",children:[r("di"),t.issue," ",r("qi")]})]}),(0,i.jsxs)("div",{className:"flex mt-4 justify-around items-center",children:[(0,i.jsxs)("div",{className:"flex flex-col  items-center m-1",children:[(0,i.jsx)("p",{className:"font-bold text-2xl text-orange-500",children:t.income}),(0,i.jsx)("p",{className:"text-sm text-gray-400",children:r("time_income")})]}),(0,i.jsxs)("div",{className:"flex flex-col  items-center",children:[(0,i.jsx)("p",{className:"font-bold text-2xl text-orange-500",children:t.income*t.period}),(0,i.jsx)("p",{className:"text-sm text-gray-400",children:r("all_income")})]}),(0,i.jsxs)("div",{className:"flex flex-col  items-center",children:[(0,i.jsx)("p",{className:"font-bold text-2xl text-orange-500",children:t.price}),(0,i.jsx)("p",{className:"text-sm text-gray-400",children:r("lease_fees")})]}),(0,i.jsx)("button",{className:"rounded-2xl bg-orange-500 p-2 text-white",onClick:function(){(0,c.Xc)(t).then((function(e){n("/depot")}))},children:r("lease_now")})]})]})},u=n(2791),x=n(6856),d=n(9126),f=(n(8040),n(197)),m=function(){var e=(0,a.$)().t,t=(0,o.s0)(),n=(0,u.useState)([]),m=(0,s.Z)(n,2),g=m[0],h=m[1],p=(0,u.useState)([]),j=(0,s.Z)(p,2),w=j[0],N=j[1];return(0,u.useEffect)((function(){localStorage.setItem("navBar",""),(0,c.NG)().then((function(e){h(e.data.rotates.map((function(e){return{imgUrl:"/uploads/"+e.imgUrl}}))),N(e.data.product.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{imageUrl:"/uploads/"+e.imageUrl,tags:["\u5171\u4eab\u5145\u7535","\u5171\u4eab\u6536\u76ca"]})})))}))}),[]),(0,i.jsxs)("div",{className:"flex flex-col ",children:[(0,i.jsx)(f.lr,{autoPlay:!0,infiniteLoop:!0,showThumbs:!1,showArrows:!1,showStatus:!1,children:g.map((function(e,t){return(0,i.jsx)("img",{src:e.imgUrl,alt:"",className:"h-48 w-3/4 "},t)}))}),(0,i.jsxs)("div",{className:"flex justify-around items-center h-24",children:[(0,i.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,i.jsx)(x.gi0,{className:"text-4xl text-teal-300"}),(0,i.jsx)("p",{className:"text-sm",children:e("nearby")})]}),(0,i.jsxs)("div",{className:"flex flex-col items-center gap-2",onClick:function(){return t("/post")},children:[(0,i.jsx)(d.G09,{className:"text-4xl text-teal-300"}),(0,i.jsx)("p",{className:"text-sm",children:e("post")})]}),(0,i.jsxs)("div",{className:"flex flex-col items-center gap-2",onClick:function(){return t("/download")},children:[(0,i.jsx)(d.eEq,{className:"text-4xl text-teal-300"}),(0,i.jsx)("p",{className:"text-sm",children:e("download")})]})]}),(0,i.jsx)("div",{className:" flex flex-col ",children:w.map((function(e){return(0,i.jsx)(l,{item:e},e._id)}))})]})}},8402:function(e,t,n){n.d(t,{c6:function(){return f},Xc:function(){return p},$C:function(){return j},NG:function(){return u},Ig:function(){return l},w2:function(){return x},QZ:function(){return m},Bw:function(){return g},ic:function(){return w},pk:function(){return i},kP:function(){return h},MS:function(){return d},eO:function(){return N}});var r=n(4569),s=n.n(r),a=n(577),o=s().create({baseURL:"/api/web",withCredentials:!0});o.interceptors.request.use((function(e){return localStorage.__web_token&&(e.headers.Authorization="Bearer "+localStorage.__web_token),localStorage.i18nextLng&&(e.headers["Accept-Language"]=localStorage.i18nextLng),e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){return e.data.message&&a.Am.success(e.data.message),e}),(function(e){return 401===e.response.status&&(localStorage.removeItem("__web_token"),-1===window.location.pathname.indexOf("login")&&-1===window.location.pathname.indexOf("register")&&(window.location.hash="/login")),e.response.data?(console.log(e.response),a.Am.error(e.response.data.message),Promise.reject(e)):Promise.reject(e)}));var c=o,i=function(e){return c.post("/register",e)},l=function(e){return c.post("/login",e)},u=function(){return c.get("/Index")},x=function(){return c.get("/user/center")},d=function(){return c.get("/user/wallet")},f=function(){return c.get("/info/about")},m=function(){return c.get("/info/post")},g=function(e){return c.delete("/info/post/"+e)},h=function(){return c.get("/info/share")},p=function(e){return c.post("/product/buy",e)},j=function(){return c.get("/product/depot")},w=function(e){return c.post("/order/recharge",e)},N=function(){return c.get("/order/withdraw")}}}]);
//# sourceMappingURL=122.bae16120.chunk.js.map