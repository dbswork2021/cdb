"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[917],{9917:function(n,t,e){e.r(t);var r=e(2791),o=e(6074),u=e(184);t.default=function(){return(0,r.useEffect)((function(){(0,o.o7)().then((function(n){}))}),[]),(0,u.jsx)("div",{children:"dashboard"})}},6074:function(n,t,e){e.d(t,{GG:function(){return a},Ig:function(){return o},JY:function(){return i},Mc:function(){return k},QZ:function(){return l},c6:function(){return w},dB:function(){return f},g4:function(){return d},jP:function(){return h},jy:function(){return p},o7:function(){return c},pk:function(){return u},ps:function(){return g},sV:function(){return m},t$:function(){return b},tN:function(){return s},tT:function(){return j},yD:function(){return Z},yF:function(){return _}});var r=e(129),o=function(n){return r.Z.post("/admin/login",n)},u=function(n){return r.Z.post("/admin/register",n)},i=function(){return r.Z.get("/common/captcha")},c=function(){return r.Z.get("/admin/info/dashboard")},a=function(){return r.Z.get("/admin/user/list")},f=function(n){return r.Z.get("/admin/user/"+n)},s=function(n){return r.Z.post("/admin/user",n)},d=function(n){return r.Z.delete("/admin/user/"+n)},m=function(){return r.Z.get("/admin/info/rotate")},p=function(n){return r.Z.post("/admin/info/rotate",n)},g=function(n){return r.Z.delete("/admin/info/rotate/"+n)},l=function(){return r.Z.get("/admin/info/post")},Z=function(n){return r.Z.post("/admin/info/post",n)},h=function(n){return r.Z.delete("/admin/info/post/"+n)},w=function(){return r.Z.get("/admin/info/about")},b=function(n){return r.Z.post("/admin/info/about",n)},_=function(){return r.Z.get("/admin/product")},k=function(n){return r.Z.post("/admin/product",n)},j=function(n){return r.Z.delete("/admin/product/"+n)}},129:function(n,t,e){var r=e(4569),o=e.n(r),u=e(577),i=o().create({baseURL:"/api",withCredentials:!0});i.interceptors.request.use((function(n){return localStorage.__web_token&&(n.headers.Authorization="Bearer "+localStorage.__web_token),localStorage.i18nextLng&&(n.headers["Accept-Language"]=localStorage.i18nextLng),n}),(function(n){return Promise.reject(n)})),i.interceptors.response.use((function(n){return n.data.message&&u.Am.success(n.data.message),n}),(function(n){return 401===n.response.status&&(localStorage.removeItem("__web_token"),-1===window.location.pathname.indexOf("login")&&-1===window.location.pathname.indexOf("register")&&(window.location.hash="/login")),n.response.data?(console.log(n.response.data),u.Am.error(n.response.data.message),Promise.reject(n)):Promise.reject(n)})),t.Z=i}}]);
//# sourceMappingURL=917.645959ee.chunk.js.map