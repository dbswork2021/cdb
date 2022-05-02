"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[485],{285:function(n,e,t){t.r(e);var r=t(6871),u=t(3695),o=t(8402),i=t(9004),s=t(3272),c=t(9389),a=t(7309),f=t(184);e.default=function(){var n=(0,r.s0)();return(0,f.jsx)(i.Z,{title:"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf-\u6ce8\u518c",bordered:!1,style:{width:500,margin:"8rem auto",textAlign:"center"},children:(0,f.jsxs)(s.Z,{name:"basic",labelCol:{span:4},initialValues:{remember:!0},onFinish:function(e){e.comfirmPasswd===e.passwd?(0,o.pk)(e).then((function(e){localStorage.setItem("__admin_token",e.data.token),n("/admin")})):u.ZP.error("\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4")},autoComplete:"off",children:[(0,f.jsx)(s.Z.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d!"}],children:(0,f.jsx)(c.Z,{})}),(0,f.jsx)(s.Z.Item,{label:"\u5bc6\u7801",name:"passwd",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}],children:(0,f.jsx)(c.Z.Password,{})}),(0,f.jsx)(s.Z.Item,{label:"\u786e\u8ba4\u5bc6\u7801",name:"comfirmPasswd",rules:[{required:!0,message:"\u8bf7\u518d\u6b21\u8f93\u5165\u5bc6\u7801"}],children:(0,f.jsx)(c.Z.Password,{})}),(0,f.jsx)(s.Z.Item,{label:"\u5b89\u5168\u7801",name:"secretCode",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d!"}],children:(0,f.jsx)(c.Z,{})}),(0,f.jsx)(s.Z.Item,{wrapperCol:{span:16},children:(0,f.jsx)(a.Z,{type:"primary",htmlType:"submit",children:"\u6ce8\u518c"})})]})})}},8402:function(n,e,t){t.d(e,{c6:function(){return k},t$:function(){return q},JY:function(){return f},ws:function(){return P},Fi:function(){return _},o7:function(){return l},K9:function(){return L},Ig:function(){return c},QZ:function(){return b},jP:function(){return x},yD:function(){return j},yF:function(){return I},tT:function(){return S},Mc:function(){return C},AA:function(){return z},tu:function(){return A},pk:function(){return a},sV:function(){return h},ps:function(){return Z},jy:function(){return w},jg:function(){return B},kT:function(){return F},kP:function(){return v},_2:function(){return y},dB:function(){return m},g4:function(){return g},tN:function(){return p},GG:function(){return d}});var r=t(4569),u=t.n(r),o=t(3695),i=u().create({baseURL:"/api/admin",withCredentials:!0});i.interceptors.request.use((function(n){return localStorage.__admin_token&&(n.headers.Authorization="Bearer "+localStorage.__admin_token),localStorage.i18nextLng&&(n.headers["Accept-Language"]=localStorage.i18nextLng),n}),(function(n){return Promise.reject(n)})),i.interceptors.response.use((function(n){return n.data.message&&o.ZP.success(n.data.message),n}),(function(n){return 401===n.response.status&&(localStorage.removeItem("__admin_token"),-1===window.location.pathname.indexOf("login")&&-1===window.location.pathname.indexOf("register")&&(window.location.hash="/login")),n.response.data?(o.ZP.error(n.response.data.message),Promise.reject(n)):Promise.reject(n)}));var s=i,c=function(n){return s.post("/login",n)},a=function(n){return s.post("/register",n)},f=function(){return s.get("/../common/captcha")},l=function(){return s.get("/info/dashboard")},d=function(){return s.get("/user/list")},m=function(n){return s.get("/user/"+n)},p=function(n){return s.post("/user",n)},g=function(n){return s.delete("/user/"+n)},h=function(){return s.get("/info/rotate")},w=function(n){return s.post("/info/rotate",n)},Z=function(n){return s.delete("/info/rotate/"+n)},b=function(){return s.get("/info/post")},j=function(n){return s.post("/info/post",n)},x=function(n){return s.delete("/info/post/"+n)},k=function(){return s.get("/info/about")},q=function(n){return s.post("/info/about",n)},P=function(){return s.get("/info/center")},_=function(n){return s.post("/info/center",n)},v=function(){return s.get("/info/share")},y=function(n){return s.post("/info/share",n)},I=function(){return s.get("/product")},C=function(n){return s.post("/product",n)},S=function(n){return s.delete("/product/"+n)},A=function(){return s.get("/product/record")},L=function(){return s.get("/price/financial")},z=function(){return s.get("/price/rechage")},B=function(n){return s.get("/set/"+n)},F=function(n){return s.post("/set",n)}},9286:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(1413),u=t(2791),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},i=t(4291),s=function(n,e){return u.createElement(i.Z,(0,r.Z)((0,r.Z)({},n),{},{ref:e,icon:o}))};s.displayName="PlusOutlined";var c=u.forwardRef(s)}}]);
//# sourceMappingURL=485.9895bbf0.chunk.js.map