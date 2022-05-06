"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[533],{4038:function(n,t,e){e.r(t);var r=e(9439),u=e(2791),o=e(8402),i=e(6871),c=e(4564),a=e(3272),s=e(9389),f=e(7309),l=e(184);t.default=function(){var n=(0,u.useState)(null),t=(0,r.Z)(n,2),e=t[0],d=t[1],p=(0,i.s0)();(0,u.useEffect)((function(){g()}),[]);var g=function(){(0,o.JY)().then((function(n){d(n.data.svg),localStorage.setItem("__admin_token",n.data.token)}))};return(0,l.jsx)(c.Z,{title:"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf",bordered:!1,style:{width:600,margin:"8rem auto",textAlign:"center"},children:(0,l.jsxs)(a.Z,{name:"basic",labelCol:{span:4},initialValues:{remember:!0},onFinish:function(n){(0,o.Ig)(n).then((function(n){localStorage.setItem("__admin_token",n.data.token),p("/admin")})).catch((function(){g()}))},autoComplete:"off",children:[(0,l.jsx)(a.Z.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d!"}],children:(0,l.jsx)(s.Z,{})}),(0,l.jsx)(a.Z.Item,{label:"\u5bc6\u7801",name:"passwd",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}],children:(0,l.jsx)(s.Z.Password,{})}),(0,l.jsxs)(a.Z.Item,{label:"\u9a8c\u8bc1\u7801",style:{marginBottom:0},children:[(0,l.jsx)(a.Z.Item,{name:"captchaCode",rules:[{required:!0}],style:{display:"inline-block",width:"calc(50% - 8px)"},children:(0,l.jsx)(s.Z,{placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"})}),(0,l.jsx)(a.Z.Item,{style:{display:"inline-block",width:"calc(50% - 8px)",margin:"0 8px"},children:e&&(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:e},onClick:function(){return g()}})})]}),(0,l.jsx)(a.Z.Item,{wrapperCol:{span:16},children:(0,l.jsx)(f.Z,{type:"primary",htmlType:"submit",children:"\u767b\u9646"})})]})})}},8402:function(n,t,e){e.d(t,{c6:function(){return y},t$:function(){return q},xq:function(){return h},jP:function(){return x},fH:function(){return w},JY:function(){return f},ws:function(){return I},Fi:function(){return P},o7:function(){return l},K9:function(){return T},Ig:function(){return a},QZ:function(){return k},Ip:function(){return v},yD:function(){return _},yF:function(){return A},tT:function(){return L},Mc:function(){return B},AA:function(){return z},tu:function(){return M},pk:function(){return s},sV:function(){return b},ps:function(){return j},jy:function(){return Z},jg:function(){return R},kT:function(){return V},kP:function(){return S},_2:function(){return C},dB:function(){return p},RZ:function(){return m},tN:function(){return g},GG:function(){return d},GW:function(){return G},Bh:function(){return H},cc:function(){return O},bK:function(){return F}});var r=e(4569),u=e.n(r),o=e(3695),i=u().create({baseURL:"/api/admin",withCredentials:!0});i.interceptors.request.use((function(n){return localStorage.__admin_token&&(n.headers.Authorization="Bearer "+localStorage.__admin_token),localStorage.i18nextLng&&(n.headers["Accept-Language"]=localStorage.i18nextLng),n}),(function(n){return Promise.reject(n)})),i.interceptors.response.use((function(n){return n.data.message&&o.ZP.success(n.data.message),n}),(function(n){return 401===n.response.status&&(localStorage.removeItem("__admin_token"),-1===window.location.pathname.indexOf("login")&&-1===window.location.pathname.indexOf("register")&&(window.location.hash="/login")),n.response.data?(o.ZP.error(n.response.data.message),Promise.reject(n)):Promise.reject(n)}));var c=i,a=function(n){return c.post("/login",n)},s=function(n){return c.post("/register",n)},f=function(){return c.get("/../common/captcha")},l=function(){return c.get("/info/dashboard")},d=function(){return c.get("/user/list")},p=function(n){return c.get("/user/user/"+n)},g=function(n){return c.post("/user/user",n)},m=function(){return c.get("/user/bank")},h=function(){return c.get("/user/admin")},w=function(n){return c.post("/user/admin",n)},x=function(n){return c.delete("/user/admin/"+n)},b=function(){return c.get("/info/rotate")},Z=function(n){return c.post("/info/rotate",n)},j=function(n){return c.delete("/info/rotate/"+n)},k=function(){return c.get("/info/post")},_=function(n){return c.post("/info/post",n)},v=function(n){return c.delete("/info/post/"+n)},y=function(){return c.get("/info/about")},q=function(n){return c.post("/info/about",n)},I=function(){return c.get("/info/center")},P=function(n){return c.post("/info/center",n)},S=function(){return c.get("/info/share")},C=function(n){return c.post("/info/share",n)},A=function(){return c.get("/product")},B=function(n){return c.post("/product",n)},L=function(n){return c.delete("/product/"+n)},M=function(){return c.get("/product/record")},T=function(){return c.get("/price/financial")},z=function(){return c.get("/price/rechage")},F=function(){return c.get("/price/withdraw")},G=function(n){return c.post("/price/withdraw",n)},H=function(n){return c.put("/price/withdraw",n)},O=function(n){return c.delete("/price/withdraw/"+n)},R=function(n){return c.get("/set/"+n)},V=function(n){return c.post("/set",n)}},9286:function(n,t,e){e.d(t,{Z:function(){return a}});var r=e(1413),u=e(2791),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},i=e(4291),c=function(n,t){return u.createElement(i.Z,(0,r.Z)((0,r.Z)({},n),{},{ref:t,icon:o}))};c.displayName="PlusOutlined";var a=u.forwardRef(c)}}]);
//# sourceMappingURL=533.70409699.chunk.js.map