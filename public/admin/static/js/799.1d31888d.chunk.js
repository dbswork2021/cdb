"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[799],{799:function(n,t,e){e.r(t);var r=e(1413),u=e(9439),o=e(2791),i=e(8402),c=e(5595),a=e(7309),f=e(184),s=c.Z.Column;t.default=function(){var n=(0,o.useState)(),t=(0,u.Z)(n,2),e=t[0],d=t[1];(0,o.useEffect)((function(){(0,i.GG)().then((function(n){d(n.data.map((function(n){return(0,r.Z)((0,r.Z)({},n),{},{_id:n._id.slice(0,7),createdAt:n.createdAt.replaceAll(/[TZ]/g," "),updatedAt:n.updatedAt.replaceAll(/[TZ]/g," ")})})))}))}),[]);return(0,f.jsxs)(c.Z,{dataSource:e,rowKey:"_id",children:[(0,f.jsx)(s,{title:"\u5e8f\u53f7",dataIndex:"_id"}),(0,f.jsx)(s,{title:"\u4f1a\u5458\u7f16\u53f7",dataIndex:"nick"}),(0,f.jsx)(s,{title:"\u5b8c\u6210\u622a\u56fe",dataIndex:"freeze",render:function(n,t){return(0,f.jsx)("img",{className:"w-24 h-24 bg-red-400"})}}),(0,f.jsx)(s,{title:"\u5956\u52b1\u91d1\u5e01",dataIndex:"blance"}),(0,f.jsx)(s,{title:"\u72b6\u6001",dataIndex:"state"}),(0,f.jsx)(s,{title:"\u64cd\u4f5c",dataIndex:"",render:function(n,t){return(0,f.jsxs)("div",{className:"flex gap-1",children:[(0,f.jsx)(a.Z,{type:"link",onClick:function(){},children:"\u5c01\u53f7"}),(0,f.jsx)(a.Z,{type:"link",onClick:function(){},children:"\u4fee\u6539"}),(0,f.jsx)(a.Z,{type:"link",onClick:function(){},children:"\u5145\u503c"}),(0,f.jsx)(a.Z,{type:"link",onClick:function(){},children:"\u5220\u9664"})]})}})]})}},8402:function(n,t,e){e.d(t,{c6:function(){return _},t$:function(){return b},JY:function(){return s},ws:function(){return A},Fi:function(){return y},o7:function(){return d},K9:function(){return L},Ig:function(){return a},QZ:function(){return k},jP:function(){return Z},yD:function(){return w},yF:function(){return P},tT:function(){return v},Mc:function(){return S},AA:function(){return T},tu:function(){return G},pk:function(){return f},sV:function(){return x},ps:function(){return j},jy:function(){return m},jg:function(){return N},kT:function(){return z},kP:function(){return C},_2:function(){return I},dB:function(){return p},g4:function(){return h},tN:function(){return g},GG:function(){return l}});var r=e(4569),u=e.n(r),o=e(3695),i=u().create({baseURL:"/api/admin",withCredentials:!0});i.interceptors.request.use((function(n){return localStorage.__admin_token&&(n.headers.Authorization="Bearer "+localStorage.__admin_token),localStorage.i18nextLng&&(n.headers["Accept-Language"]=localStorage.i18nextLng),n}),(function(n){return Promise.reject(n)})),i.interceptors.response.use((function(n){return n.data.message&&o.ZP.success(n.data.message),n}),(function(n){return 401===n.response.status&&(localStorage.removeItem("__admin_token"),-1===window.location.pathname.indexOf("login")&&-1===window.location.pathname.indexOf("register")&&(window.location.hash="/login")),n.response.data?(o.ZP.error(n.response.data.message),Promise.reject(n)):Promise.reject(n)}));var c=i,a=function(n){return c.post("/login",n)},f=function(n){return c.post("/register",n)},s=function(){return c.get("/../common/captcha")},d=function(){return c.get("/info/dashboard")},l=function(){return c.get("/user/list")},p=function(n){return c.get("/user/"+n)},g=function(n){return c.post("/user",n)},h=function(n){return c.delete("/user/"+n)},x=function(){return c.get("/info/rotate")},m=function(n){return c.post("/info/rotate",n)},j=function(n){return c.delete("/info/rotate/"+n)},k=function(){return c.get("/info/post")},w=function(n){return c.post("/info/post",n)},Z=function(n){return c.delete("/info/post/"+n)},_=function(){return c.get("/info/about")},b=function(n){return c.post("/info/about",n)},A=function(){return c.get("/info/center")},y=function(n){return c.post("/info/center",n)},C=function(){return c.get("/info/share")},I=function(n){return c.post("/info/share",n)},P=function(){return c.get("/product")},S=function(n){return c.post("/product",n)},v=function(n){return c.delete("/product/"+n)},G=function(){return c.get("/product/record")},L=function(){return c.get("/price/financial")},T=function(){return c.get("/price/rechage")},N=function(n){return c.get("/set/"+n)},z=function(n){return c.post("/set",n)}}}]);
//# sourceMappingURL=799.1d31888d.chunk.js.map