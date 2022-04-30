"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[290],{7290:function(e,n,t){t.r(n);var r=t(4942),o=t(1413),s=t(9439),a=t(8820),i=t(9126),c=t(7425),u=t(6871),l=t(3168),d=t(2791),m=t(577),f=t(2495),h=t(184);n.default=function(){var e=(0,u.s0)(),n=(0,l.$)().t,t=(0,d.useState)({nick:"",phone:"",passwd:"",confirmPwd:"",referrer:"",phoneCode:""}),p=(0,s.Z)(t,2),w=p[0],g=p[1],x=function(e){"phone"===e.target.name||"referrer"===e.target.name?e.target.value.length<=11&&g((0,o.Z)((0,o.Z)({},w),{},(0,r.Z)({},e.target.name,e.target.value.replace(/[^0-9]/gi,"")))):g((0,o.Z)((0,o.Z)({},w),{},(0,r.Z)({},e.target.name,e.target.value)))};return(0,h.jsxs)("div",{className:"h-screen flex flex-col justify-center items-center gap-4 bg-teal-300",children:[(0,h.jsx)("div",{className:"w-24 h-24 rounded-full shadow flex justify-center items-center border-2 border-solid border-orange-500 mb-12 bg-white",children:"logo"}),(0,h.jsxs)("div",{className:"flex  w-11/12 h-10 rounded-md bg-white justify-start items-center ",children:[(0,h.jsx)(i.me1,{className:"ml-2 mr-2"}),(0,h.jsx)("input",{className:"flex-auto outline-none",type:"text",name:"nick",value:w.nick,placeholder:n("nick_name"),onChange:x})]}),(0,h.jsxs)("div",{className:"flex  w-11/12 h-10 rounded-md bg-white justify-start items-center ",children:[(0,h.jsx)(i.me1,{className:"ml-2 mr-2"}),(0,h.jsx)("input",{className:"flex-auto outline-none",type:"text",name:"phone",value:w.phone,placeholder:n("phone_number"),onChange:x})]}),(0,h.jsxs)("div",{className:"flex bg-white justify-start items-center w-11/12 h-10 rounded-md",children:[(0,h.jsx)(c.z85,{className:"ml-2 mr-2"}),(0,h.jsx)("input",{type:"password",name:"passwd",value:w.passwd,className:"flex-auto outline-none",placeholder:n("login_pwd"),onChange:x})]}),(0,h.jsxs)("div",{className:"flex bg-white justify-start items-center w-11/12 h-10 rounded-md",children:[(0,h.jsx)(c.z85,{className:"ml-2 mr-2"}),(0,h.jsx)("input",{type:"password",name:"confirmPwd",value:w.confirmPwd,className:"flex-auto outline-none",placeholder:n("confirm_pwd"),onChange:x})]}),(0,h.jsxs)("div",{className:"flex  w-11/12 h-10 rounded-md bg-white justify-start items-center ",children:[(0,h.jsx)(a.vM4,{className:"ml-2 mr-2"}),(0,h.jsx)("input",{className:"flex-auto outline-none",type:"text",name:"referrer",value:w.referrer,placeholder:n("agent_phone"),onChange:x})]}),(0,h.jsxs)("div",{className:"flex  w-11/12 justify-between items-center ",children:[(0,h.jsx)("input",{className:" rounded-md w-8/12 h-10 outline-none p-4",type:"text",name:"phoneCode",value:w.phoneCode,placeholder:n("verify_code"),onChange:x}),(0,h.jsx)("button",{className:"rounded-md h-10 bg-white p-2 w-1/4 text-xs text-orange-500",onClick:function(){console.log("code")},children:n("get_verify_code")})]}),(0,h.jsx)("button",{className:"w-10/12 h-12 rounded-3xl bg-white mt-4 text-orange-600 font-bold",onClick:function(){if(w.passwd!==w.confirmPwd)return m.Am.error(n("passwd_confirm_fail")),!1;(0,f.pk)(w).then((function(n){localStorage.setItem("__web_token",n.data.token),e("/person")}))},children:n("reg_now")}),(0,h.jsx)("button",{className:"w-10/12 h-12 rounded-3xl border-2 border-solid text-white font-bold",onClick:function(){e("/login")},children:n("login_now")})]})}},129:function(e,n,t){var r=t(4569),o=t.n(r),s=t(577),a=o().create({baseURL:"/api",withCredentials:!0});a.interceptors.request.use((function(e){return localStorage.__web_token&&(e.headers.Authorization="Bearer "+localStorage.__web_token),localStorage.i18nextLng&&(e.headers["Accept-Language"]=localStorage.i18nextLng),e}),(function(e){return Promise.reject(e)})),a.interceptors.response.use((function(e){return e.data.message&&s.Am.success(e.data.message),e}),(function(e){return 401===e.response.status&&(localStorage.removeItem("__web_token"),-1===window.location.pathname.indexOf("login")&&-1===window.location.pathname.indexOf("register")&&(window.location.hash="/login")),e.response.data?(s.Am.error(e.response.data.message),Promise.reject(e)):Promise.reject(e)})),n.Z=a},2495:function(e,n,t){t.d(n,{DJ:function(){return d},Fe:function(){return l},Ig:function(){return s},eN:function(){return m},li:function(){return c},op:function(){return a},pk:function(){return o},s8:function(){return u},uT:function(){return f},w2:function(){return i}});var r=t(129),o=function(e){return r.Z.post("/web/register",e)},s=function(e){return r.Z.post("/web/login",e)},a=function(){return r.Z.get("/web/Index")},i=function(){return r.Z.get("/web/user/center")},c=function(){return r.Z.get("/web/info/about")},u=function(){return r.Z.get("/web/info/post")},l=function(e){return r.Z.delete("/web/info/post/"+e)},d=function(){return r.Z.get("/web/info/share")},m=function(e){return r.Z.post("/web/product/buy",e)},f=function(){return r.Z.get("/web/product/depot")}}}]);
//# sourceMappingURL=290.6b35d6fd.chunk.js.map