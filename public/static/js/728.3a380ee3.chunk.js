"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[728],{4728:function(n,e,t){t.r(e);var r=t(9439),o=t(6074),i=t(9389),u=t(3272),a=t(3695),c=t(9004),s=t(7309),f=t(2791),d=t(184),l=i.Z.TextArea;e.default=function(){var n=u.Z.useForm(),e=(0,r.Z)(n,1)[0];(0,f.useEffect)((function(){(0,o.c6)().then((function(n){e.setFieldsValue(n.data)}))}),[]);return(0,d.jsx)(c.Z,{title:"\u9879\u76ee\u8bf4\u660e",bordered:!1,style:{width:600},children:(0,d.jsxs)(u.Z,{labelCol:{span:4},form:e,name:"control-hooks",onFinish:function(n){(0,o.t$)(n).then((function(n){a.ZP.success("\u4fdd\u5b58\u6210\u529f")}))},children:[(0,d.jsx)(u.Z.Item,{name:"id",style:{display:"none"},children:(0,d.jsx)(i.Z,{})}),(0,d.jsx)(u.Z.Item,{name:"name",label:"\u6807\u9898",rules:[{required:!0}],children:(0,d.jsx)(i.Z,{})}),(0,d.jsx)(u.Z.Item,{name:"detail",label:"\u8be6\u60c5",children:(0,d.jsx)(l,{rows:4,placeholder:"\u8f93\u5165\u516c\u544a\u5185\u5bb9"})}),(0,d.jsx)(u.Z.Item,{wrapperCol:{span:4,offset:4},children:(0,d.jsx)(s.Z,{type:"link",htmlType:"submit",children:"\u4fdd\u5b58"})})]})})}},6074:function(n,e,t){t.d(e,{GG:function(){return c},Ig:function(){return o},JY:function(){return u},Mc:function(){return x},QZ:function(){return Z},c6:function(){return w},dB:function(){return s},g4:function(){return d},jP:function(){return h},jy:function(){return m},o7:function(){return a},pk:function(){return i},ps:function(){return p},sV:function(){return l},t$:function(){return b},tN:function(){return f},tT:function(){return k},yD:function(){return g},yF:function(){return j}});var r=t(129),o=function(n){return r.Z.post("/admin/login",n)},i=function(n){return r.Z.post("/admin/register",n)},u=function(){return r.Z.get("/common/captcha")},a=function(){return r.Z.get("/admin/info/dashboard")},c=function(){return r.Z.get("/admin/user/list")},s=function(n){return r.Z.get("/admin/user/"+n)},f=function(n){return r.Z.post("/admin/user",n)},d=function(n){return r.Z.delete("/admin/user/"+n)},l=function(){return r.Z.get("/admin/info/rotate")},m=function(n){return r.Z.post("/admin/info/rotate",n)},p=function(n){return r.Z.delete("/admin/info/rotate/"+n)},Z=function(){return r.Z.get("/admin/info/post")},g=function(n){return r.Z.post("/admin/info/post",n)},h=function(n){return r.Z.delete("/admin/info/post/"+n)},w=function(){return r.Z.get("/admin/info/about")},b=function(n){return r.Z.post("/admin/info/about",n)},j=function(){return r.Z.get("/admin/product")},x=function(n){return r.Z.post("/admin/product",n)},k=function(n){return r.Z.delete("/admin/product/"+n)}},129:function(n,e,t){var r=t(4569),o=t.n(r),i=t(577),u=o().create({baseURL:"/api",withCredentials:!0});u.interceptors.request.use((function(n){return localStorage.__web_token&&(n.headers.Authorization="Bearer "+localStorage.__web_token),localStorage.i18nextLng&&(n.headers["Accept-Language"]=localStorage.i18nextLng),n}),(function(n){return Promise.reject(n)})),u.interceptors.response.use((function(n){return n.data.message&&i.Am.success(n.data.message),n}),(function(n){return 401===n.response.status&&(localStorage.removeItem("__web_token"),-1===window.location.pathname.indexOf("login")&&-1===window.location.pathname.indexOf("register")&&(window.location.hash="/login")),n.response.data?(console.log(n.response.data),i.Am.error(n.response.data.message),Promise.reject(n)):Promise.reject(n)})),e.Z=u}}]);
//# sourceMappingURL=728.3a380ee3.chunk.js.map