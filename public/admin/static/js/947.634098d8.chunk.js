"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[947],{1947:function(t,n,e){e.r(n);var r=e(1413),u=e(9439),o=e(2791),i=e(8402),c=e(5595),a=e(184),f=c.Z.Column;n.default=function(){var t=(0,o.useState)(),n=(0,u.Z)(t,2),e=n[0],s=n[1];return(0,o.useEffect)((function(){(0,i.AA)().then((function(t){s(t.data.map((function(t){return(0,r.Z)((0,r.Z)({},t),{},{id:t._id.slice(0,7),createdAt:t.createdAt.replace(/[TZ]/g," ").substring(0,19),updatedAt:t.updatedAt.replace(/[TZ]/g," ").substring(0,19)})})))}))}),[]),(0,a.jsxs)(c.Z,{dataSource:e,rowKey:"_id",children:[(0,a.jsx)(f,{title:"\u5e8f\u53f7",dataIndex:"id"}),(0,a.jsx)(f,{title:"\u4f1a\u5458\u624b\u673a",render:function(t,n){return n.user.phone}}),(0,a.jsx)(f,{title:"\u5145\u503c\u91d1\u989d",dataIndex:"amount"}),(0,a.jsx)(f,{title:"\u5145\u503c\u65b9\u5f0f",render:function(t,n){return n.payType.text}}),(0,a.jsx)(f,{title:"\u652f\u4ed8\u65f6\u95f4",render:function(t,n){return n.createdAt===n.updatedAt?"":n.updatedAt}}),(0,a.jsx)(f,{title:"\u652f\u4ed8\u8bf4\u660e",dataIndex:"note"}),(0,a.jsx)(f,{title:"\u652f\u4ed8\u72b6\u6001",render:function(t,n){return n.status?"\u5df2\u652f\u4ed8":"\u672a\u652f\u4ed8"}}),(0,a.jsx)(f,{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"createdAt"})]})}},8402:function(t,n,e){e.d(n,{c6:function(){return b},t$:function(){return k},JY:function(){return s},ws:function(){return Z},Fi:function(){return P},o7:function(){return d},K9:function(){return L},Ig:function(){return a},QZ:function(){return A},jP:function(){return _},yD:function(){return w},yF:function(){return I},tT:function(){return T},Mc:function(){return v},AA:function(){return B},tu:function(){return C},pk:function(){return f},sV:function(){return m},ps:function(){return j},jy:function(){return x},jg:function(){return F},kT:function(){return G},kP:function(){return S},_2:function(){return y},dB:function(){return g},g4:function(){return h},tN:function(){return l},GG:function(){return p}});var r=e(4569),u=e.n(r),o=e(3695),i=u().create({baseURL:"/api/admin",withCredentials:!0});i.interceptors.request.use((function(t){return localStorage.__admin_token&&(t.headers.Authorization="Bearer "+localStorage.__admin_token),localStorage.i18nextLng&&(t.headers["Accept-Language"]=localStorage.i18nextLng),t}),(function(t){return Promise.reject(t)})),i.interceptors.response.use((function(t){return t.data.message&&o.ZP.success(t.data.message),t}),(function(t){return 401===t.response.status&&(localStorage.removeItem("__admin_token"),-1===window.location.pathname.indexOf("login")&&-1===window.location.pathname.indexOf("register")&&(window.location.hash="/login")),t.response.data?(o.ZP.error(t.response.data.message),Promise.reject(t)):Promise.reject(t)}));var c=i,a=function(t){return c.post("/login",t)},f=function(t){return c.post("/register",t)},s=function(){return c.get("/../common/captcha")},d=function(){return c.get("/info/dashboard")},p=function(){return c.get("/user/list")},g=function(t){return c.get("/user/"+t)},l=function(t){return c.post("/user",t)},h=function(t){return c.delete("/user/"+t)},m=function(){return c.get("/info/rotate")},x=function(t){return c.post("/info/rotate",t)},j=function(t){return c.delete("/info/rotate/"+t)},A=function(){return c.get("/info/post")},w=function(t){return c.post("/info/post",t)},_=function(t){return c.delete("/info/post/"+t)},b=function(){return c.get("/info/about")},k=function(t){return c.post("/info/about",t)},Z=function(){return c.get("/info/center")},P=function(t){return c.post("/info/center",t)},S=function(){return c.get("/info/share")},y=function(t){return c.post("/info/share",t)},I=function(){return c.get("/product")},v=function(t){return c.post("/product",t)},T=function(t){return c.delete("/product/"+t)},C=function(){return c.get("/product/record")},L=function(){return c.get("/price/financial")},B=function(){return c.get("/price/rechage")},F=function(t){return c.get("/set/"+t)},G=function(t){return c.post("/set",t)}}}]);
//# sourceMappingURL=947.634098d8.chunk.js.map