"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[827],{6827:function(n,e,t){t.r(e);var r=t(3433),i=t(1413),o=t(9439),a=t(2791),u=t(6074),c=t(5595),s=t(3734),l=t(9389),d=t(3272),f=t(3695),m=t(7309),Z=t(4997),p=t(9553),h=t(9286),g=t(184),x=c.Z.Column,j=s.Z.Option,b=l.Z.TextArea;e.default=function(){var n=(0,a.useState)(),e=(0,o.Z)(n,2),t=e[0],w=e[1],_=(0,a.useState)(!1),y=(0,o.Z)(_,2),k=y[0],v=y[1],I=(0,a.useState)(null),C=(0,o.Z)(I,2),A=C[0],S=C[1],P=d.Z.useForm(),F=(0,o.Z)(P,1)[0];(0,a.useEffect)((function(){(0,u.QZ)().then((function(n){w(n.data.map((function(n){return(0,i.Z)((0,i.Z)({},n),{},{_id:n._id.slice(0,7),id:n._id,createdAt:n.createdAt.replace(/[TZ]/g," "),updatedAt:n.updatedAt.replace(/[TZ]/g," ")})})))}))}),[]);var N=function(){v(!1),S(null),F.resetFields()};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m.Z,{type:"primary",className:"bg-blue-600",onClick:function(){return v(!0)},children:"\u53d1\u5e03\u516c\u544a"}),(0,g.jsx)(Z.Z,{title:"\u53d1\u5e03\u516c\u544a",centered:!0,visible:k,onCancel:N,width:1e3,keyboard:!1,maskClosable:!1,footer:[],children:(0,g.jsxs)(d.Z,{labelCol:{span:4},form:F,name:"control-hooks",onFinish:function(n){(0,u.yD)((0,i.Z)((0,i.Z)({},n),{},{imageUrl:A})).then((function(n){f.ZP.success("\u4fdd\u5b58\u6210\u529f"),N();var e=t.filter((function(e){return e.id!==n.data._id}));w([].concat((0,r.Z)(e),[(0,i.Z)((0,i.Z)({},n.data),{},{_id:n.data._id.slice(0,7),id:n.data._id})]))}))},children:[(0,g.jsx)(d.Z.Item,{name:"id",style:{display:"none"},children:(0,g.jsx)(l.Z,{})}),(0,g.jsx)(d.Z.Item,{name:"name",label:"\u6807\u9898",rules:[{required:!0}],children:(0,g.jsx)(l.Z,{})}),(0,g.jsx)(d.Z.Item,{name:"category",label:"\u7c7b\u522b",rules:[{required:!0}],children:(0,g.jsxs)(s.Z,{placeholder:"\u8bf7\u9009\u62e9\u516c\u544a\u7c7b\u522b",allowClear:!0,children:[(0,g.jsx)(j,{value:1,children:"\u65b0\u624b\u5165\u95e8"}),(0,g.jsx)(j,{value:2,children:"\u6bcf\u65e5\u65e9\u62a5"}),(0,g.jsx)(j,{value:3,children:"\u4f1a\u5458\u7b54\u7591"}),(0,g.jsx)(j,{value:4,children:"\u9879\u76ee\u6559\u7a0b"})]})}),(0,g.jsx)(d.Z.Item,{name:"detail",label:"\u8be6\u60c5",children:(0,g.jsx)(b,{rows:4,placeholder:"\u8f93\u5165\u516c\u544a\u5185\u5bb9"})}),(0,g.jsx)(d.Z.Item,{label:"\u7f29\u7565\u56fe",children:(0,g.jsx)(p.Z,{className:"flex justify-center items-center",name:"file",action:"/api/common/uploads",headers:localStorage.getItem("__web_token")?{Authorization:"Bearer ".concat(localStorage.__web_token)}:null,showUploadList:!1,onChange:function(n){"done"===n.file.status?(f.ZP.success("\u6587\u4ef6\u4e0a\u4f20\u6210\u529f"),S(n.file.response)):"error"===n.file.status&&f.ZP.error("\u6587\u4ef6\u4e0a\u4f20\u5931\u8d25")},children:A?(0,g.jsx)("img",{src:"/uploads/"+A,alt:"avatar",className:" w-72 h-24 bg-red-400"}):(0,g.jsx)("div",{className:"flex justify-center items-center w-24 h-24 bg-red-400",children:(0,g.jsx)(h.Z,{})})})}),(0,g.jsx)(d.Z.Item,{wrapperCol:{span:4,offset:4},children:(0,g.jsx)(m.Z,{type:"link",htmlType:"submit",children:"\u4fdd\u5b58"})})]})}),(0,g.jsxs)(c.Z,{dataSource:t,rowKey:"id",children:[(0,g.jsx)(x,{title:"ID",dataIndex:"_id"}),(0,g.jsx)(x,{title:"\u6807\u9898",dataIndex:"name"}),(0,g.jsx)(x,{title:"\u7c7b\u522b",dataIndex:"category",render:function(n,e){return(0,g.jsxs)(g.Fragment,{children:[1===e.category?(0,g.jsx)("p",{children:"\u65b0\u624b\u5165\u95e8"}):null,2===e.category?(0,g.jsx)("p",{children:"\u6bcf\u65e5\u65e9\u62a5"}):null,3===e.category?(0,g.jsx)("p",{children:"\u4f1a\u5458\u7b54\u7591"}):null,4===e.category?(0,g.jsx)("p",{children:"\u9879\u76ee\u6559\u7a0b"}):null]})}}),(0,g.jsx)(x,{title:"\u6dfb\u52a0\u65f6\u95f4",dataIndex:"createdAt"}),(0,g.jsx)(x,{title:"\u6700\u540e\u4fee\u6539\u65f6\u95f4",dataIndex:"updatedAt"}),(0,g.jsx)(x,{title:"\u64cd\u4f5c",dataIndex:"",render:function(n,e){return(0,g.jsxs)("div",{className:"flex gap-1",children:[(0,g.jsx)(m.Z,{type:"link",onClick:function(){return function(n){F.setFieldsValue(n),S(n.imageUrl),v(!0)}(e)},children:"\u4fee\u6539"}),(0,g.jsx)(m.Z,{type:"link",onClick:function(){return function(n){(0,u.jP)(n.id).then((function(e){var r=t.filter((function(e){return e.id!==n.id}));w(r)}))}(e)},children:"\u5220\u9664"})]})}})]})]})}},6074:function(n,e,t){t.d(e,{Fi:function(){return w},GG:function(){return c},Ig:function(){return i},JY:function(){return a},K9:function(){return A},Mc:function(){return v},QZ:function(){return p},_2:function(){return y},c6:function(){return x},dB:function(){return s},g4:function(){return d},jP:function(){return g},jy:function(){return m},kP:function(){return _},o7:function(){return u},pk:function(){return o},ps:function(){return Z},sV:function(){return f},t$:function(){return j},tN:function(){return l},tT:function(){return I},tu:function(){return C},ws:function(){return b},yD:function(){return h},yF:function(){return k}});var r=t(129),i=function(n){return r.Z.post("/admin/login",n)},o=function(n){return r.Z.post("/admin/register",n)},a=function(){return r.Z.get("/common/captcha")},u=function(){return r.Z.get("/admin/info/dashboard")},c=function(){return r.Z.get("/admin/user/list")},s=function(n){return r.Z.get("/admin/user/"+n)},l=function(n){return r.Z.post("/admin/user",n)},d=function(n){return r.Z.delete("/admin/user/"+n)},f=function(){return r.Z.get("/admin/info/rotate")},m=function(n){return r.Z.post("/admin/info/rotate",n)},Z=function(n){return r.Z.delete("/admin/info/rotate/"+n)},p=function(){return r.Z.get("/admin/info/post")},h=function(n){return r.Z.post("/admin/info/post",n)},g=function(n){return r.Z.delete("/admin/info/post/"+n)},x=function(){return r.Z.get("/admin/info/about")},j=function(n){return r.Z.post("/admin/info/about",n)},b=function(){return r.Z.get("/admin/info/center")},w=function(n){return r.Z.post("/admin/info/center",n)},_=function(){return r.Z.get("/admin/info/share")},y=function(n){return r.Z.post("/admin/info/share",n)},k=function(){return r.Z.get("/admin/product")},v=function(n){return r.Z.post("/admin/product",n)},I=function(n){return r.Z.delete("/admin/product/"+n)},C=function(){return r.Z.get("/admin/product/record")},A=function(){return r.Z.get("/admin/price/financial")}},129:function(n,e,t){var r=t(4569),i=t.n(r),o=t(577),a=i().create({baseURL:"/api",withCredentials:!0});a.interceptors.request.use((function(n){return localStorage.__web_token&&(n.headers.Authorization="Bearer "+localStorage.__web_token),localStorage.i18nextLng&&(n.headers["Accept-Language"]=localStorage.i18nextLng),n}),(function(n){return Promise.reject(n)})),a.interceptors.response.use((function(n){return n.data.message&&o.Am.success(n.data.message),n}),(function(n){return 401===n.response.status&&(localStorage.removeItem("__web_token"),-1===window.location.pathname.indexOf("login")&&-1===window.location.pathname.indexOf("register")&&(window.location.hash="/login")),n.response.data?(o.Am.error(n.response.data.message),Promise.reject(n)):Promise.reject(n)})),e.Z=a}}]);
//# sourceMappingURL=827.9f7a5ff8.chunk.js.map