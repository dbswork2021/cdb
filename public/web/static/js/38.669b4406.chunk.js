"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[38],{4038:function(e,n,t){t.r(n);var r=t(4942),o=t(1413),u=t(9439),i=t(2791),a=t(3168),s=t(7692),c=t(7425),l=t(6871),f=t(8402),d=t(184);n.default=function(){var e=(0,l.s0)(),n=(0,a.$)().t,t=(0,i.useState)({phone:"",passwd:""}),g=(0,u.Z)(t,2),p=g[0],m=g[1];(0,i.useEffect)((function(){localStorage.removeItem("__web_token")}),[]);var h=function(e){"phone"===e.target.name?e.target.value.length<=11&&m((0,o.Z)((0,o.Z)({},p),{},(0,r.Z)({},e.target.name,e.target.value.replace(/[^0-9]/gi,"")))):m((0,o.Z)((0,o.Z)({},p),{},(0,r.Z)({},e.target.name,e.target.value)))};return(0,d.jsxs)("div",{className:"h-screen flex flex-col justify-center items-center  gap-4 bg-teal-300",children:[(0,d.jsx)("div",{className:"w-24 h-24 rounded-full shadow flex justify-center items-center border-2 border-solid border-orange-500 bg-white",children:"logo"}),(0,d.jsxs)("div",{className:"flex  w-11/12 h-10 rounded-md bg-white justify-start items-center ",children:[(0,d.jsx)(s.EDj,{className:"ml-2 mr-2"}),(0,d.jsx)("input",{className:"outline-none w-full",type:"text",name:"phone",value:p.phone,placeholder:n("phone_number"),onChange:h})]}),(0,d.jsxs)("div",{className:"flex bg-white justify-start items-center w-11/12 h-10 rounded-md",children:[(0,d.jsx)(c.z85,{className:"ml-2 mr-2"}),(0,d.jsx)("input",{type:"password",name:"passwd",value:p.passwd,className:"w-full outline-none",placeholder:n("login_pwd"),onChange:h})]}),(0,d.jsx)("button",{className:"w-10/12 h-12 rounded-xl bg-white mt-4 font-bold text-orange-600",onClick:function(n){n.preventDefault(),(0,f.Ig)(p).then((function(n){localStorage.setItem("__web_token",n.data.token),e("/person")}))},children:n("login_now")}),(0,d.jsx)("button",{className:"w-10/12 h-12 rounded-xl border-2 border-solid font-bold text-white",onClick:function(){e("/register")},children:n("reg_now")})]})}},8402:function(e,n,t){t.d(n,{c6:function(){return h},Dc:function(){return k},Xc:function(){return b},$C:function(){return x},cm:function(){return _},NG:function(){return f},Ig:function(){return l},w2:function(){return d},QZ:function(){return p},Bw:function(){return m},ic:function(){return j},pk:function(){return c},kP:function(){return w},I6:function(){return s},MS:function(){return g},SP:function(){return v},HU:function(){return N}});var r=t(4569),o=t.n(r),u=t(577),i=o().create({baseURL:"/api/web",withCredentials:!0});i.interceptors.request.use((function(e){return localStorage.__web_token&&(e.headers.Authorization="Bearer "+localStorage.__web_token),localStorage.i18nextLng&&(e.headers["Accept-Language"]=localStorage.i18nextLng),e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){return e.data.message&&u.Am.success(e.data.message),e}),(function(e){return 401===e.response.status&&(localStorage.removeItem("__web_token"),-1===window.location.pathname.indexOf("login")&&-1===window.location.pathname.indexOf("register")&&(window.location.hash="/login")),e.response.data?(u.Am.error(e.response.data.message),Promise.reject(e)):Promise.reject(e)}));var a=i,s=function(e){return a.post("/../common/sms",e)},c=function(e){return a.post("/public/register",e)},l=function(e){return a.post("/public/login",e)},f=function(){return a.get("/public/Index")},d=function(){return a.get("/user/center")},g=function(){return a.get("/wallet")},p=function(){return a.get("/info/post")},m=function(e){return a.delete("/info/post/"+e)},h=function(){return a.get("/info/about")},w=function(){return a.get("/info/share")},b=function(e){return a.post("/product/buy",e)},x=function(){return a.get("/product/depot")},_=function(e){return a.post("/product/depot",e)},j=function(e){return a.post("/recharge",e)},v=function(){return a.get("/withdraw")},k=function(e){return a.post("/bank",e)},N=function(e){return a.post("/withdraw",e)}}}]);
//# sourceMappingURL=38.669b4406.chunk.js.map