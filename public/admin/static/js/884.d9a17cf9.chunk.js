"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[884],{7884:function(e,n,t){t.r(n);var r=t(3433),i=t(1413),o=t(9439),u=t(2791),s=t(8402),c=t(5595),a=t(3734),l=t(9389),d=t(3272),f=t(3695),m=t(7309),h=t(4997),p=t(8243),x=t(9553),j=t(9286),g=t(184),Z=c.Z.Column,b=a.Z.Option,I=l.Z.TextArea;n.default=function(){var e=(0,u.useState)(),n=(0,o.Z)(e,2),t=n[0],_=n[1],k=(0,u.useState)(!1),w=(0,o.Z)(k,2),y=w[0],C=w[1],v=(0,u.useState)(null),S=(0,o.Z)(v,2),P=S[0],q=S[1],F=d.Z.useForm(),A=(0,o.Z)(F,1)[0];(0,u.useEffect)((function(){(0,s.yF)().then((function(e){_(e.data.map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{_id:e._id.slice(0,7),id:e._id})})))}))}),[]);var L=function(){C(!1),q(null),A.resetFields()};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m.Z,{type:"primary",className:"bg-blue-600",onClick:function(){return C(!0)},children:"\u6dfb\u52a0\u4ea7\u54c1"}),(0,g.jsx)(h.Z,{title:"\u6dfb\u52a0\u4ea7\u54c1",centered:!0,visible:y,onCancel:L,width:1e3,keyboard:!1,maskClosable:!1,footer:[],children:(0,g.jsxs)(d.Z,{labelCol:{span:4},form:A,name:"control-hooks",onFinish:function(e){(0,s.Mc)((0,i.Z)((0,i.Z)({},e),{},{imageUrl:P})).then((function(e){f.ZP.success("\u4fdd\u5b58\u6210\u529f"),L();var n=t.filter((function(n){return n.id!==e.data._id}));_([].concat((0,r.Z)(n),[(0,i.Z)((0,i.Z)({},e.data),{},{_id:e.data._id.slice(0,7),id:e.data._id})]))}))},children:[(0,g.jsx)(d.Z.Item,{name:"id",style:{display:"none"},children:(0,g.jsx)(l.Z,{})}),(0,g.jsx)(d.Z.Item,{name:"name",label:"\u4ea7\u54c1\u540d\u79f0",rules:[{required:!0}],children:(0,g.jsx)(l.Z,{})}),(0,g.jsx)(d.Z.Item,{name:"issue",label:"\u671f\u6570",rules:[{required:!0}],children:(0,g.jsx)(p.Z,{min:1})}),(0,g.jsx)(d.Z.Item,{name:"price",label:"\u5355\u4ef7",rules:[{required:!0}],children:(0,g.jsx)(p.Z,{min:1})}),(0,g.jsx)(d.Z.Item,{name:"stock",label:"\u5e93\u5b58",rules:[{required:!0}],children:(0,g.jsx)(p.Z,{min:1})}),(0,g.jsx)(d.Z.Item,{name:"period",label:"\u8fd0\u884c\u5468\u671f",rules:[{required:!0}],children:(0,g.jsx)(p.Z,{min:1})}),(0,g.jsx)(d.Z.Item,{name:"income",label:"\u6536\u76ca",rules:[{required:!0}],children:(0,g.jsx)(p.Z,{min:0,stringMode:!0})}),(0,g.jsx)(d.Z.Item,{name:"limit",label:"\u9650\u8d2d",rules:[{required:!0}],children:(0,g.jsx)(p.Z,{min:1})}),(0,g.jsx)(d.Z.Item,{name:"status",label:"\u72b6\u6001",rules:[{required:!0}],children:(0,g.jsxs)(a.Z,{placeholder:"\u8bf7\u9009\u62e9\u4ea7\u54c1\u662f\u4e0a\u67b6\u8fd8\u662f\u4e0b\u67b6",allowClear:!0,children:[(0,g.jsx)(b,{value:0,children:"\u4e0a\u67b6"}),(0,g.jsx)(b,{value:1,children:"\u4e0b\u67b6"})]})}),(0,g.jsx)(d.Z.Item,{name:"detail",label:"\u8be6\u60c5",children:(0,g.jsx)(I,{rows:4,placeholder:"\u8f93\u5165\u4ea7\u54c1\u63cf\u8ff0"})}),(0,g.jsx)(d.Z.Item,{label:"\u7f29\u7565\u56fe",children:(0,g.jsx)(x.Z,{style:{display:"flex",justifyContent:"center",alignItems:"center"},name:"file",action:"/api/common/uploads",headers:localStorage.getItem("__admin_token")?{Authorization:"Bearer ".concat(localStorage.__admin_token)}:null,showUploadList:!1,onChange:function(e){"done"===e.file.status?(f.ZP.success("\u6587\u4ef6\u4e0a\u4f20\u6210\u529f"),q(e.file.response)):"error"===e.file.status&&f.ZP.error("\u6587\u4ef6\u4e0a\u4f20\u5931\u8d25")},children:P?(0,g.jsx)("img",{src:"/uploads/"+P,alt:"avatar",style:{width:"18rem",height:"6rem"}}):(0,g.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"6rem",height:"6rem"},children:(0,g.jsx)(j.Z,{})})})}),(0,g.jsx)(d.Z.Item,{wrapperCol:{span:4,offset:4},children:(0,g.jsx)(m.Z,{type:"link",htmlType:"submit",children:"\u4fdd\u5b58"})})]})}),(0,g.jsxs)(c.Z,{dataSource:t,rowKey:"id",children:[(0,g.jsx)(Z,{title:"\u7f16\u53f7",dataIndex:"_id"}),(0,g.jsx)(Z,{title:"\u540d\u79f0",dataIndex:"name"}),(0,g.jsx)(Z,{title:"\u5c01\u9875\u56fe\u7247",dataIndex:"freeze",render:function(e,n){return(0,g.jsx)("img",{src:"/uploads/"+n.imageUrl,alt:"product",className:"w-24 h-24 bg-red-400"})}}),(0,g.jsx)(Z,{title:"\u5355\u4ef7",dataIndex:"price"}),(0,g.jsx)(Z,{title:"\u6536\u76ca",dataIndex:"income"}),(0,g.jsx)(Z,{title:"\u8d2d\u4e70\u603b\u6570",dataIndex:"stock"}),(0,g.jsx)(Z,{title:"\u9650\u8d2d\u6570\u91cf",dataIndex:"limit"}),(0,g.jsx)(Z,{title:"\u64cd\u4f5c",dataIndex:"",render:function(e,n){return(0,g.jsxs)("div",{children:[(0,g.jsx)(m.Z,{type:"link",onClick:function(){return function(e){A.setFieldsValue(e),q(e.imageUrl),C(!0)}(n)},children:"\u4fee\u6539"}),(0,g.jsx)(m.Z,{type:"link",onClick:function(){return function(e){(0,s.tT)(e.id).then((function(n){var r=t.filter((function(n){return n.id!==e.id}));_(r)}))}(n)},children:"\u5220\u9664"})]})}})]})]})}},8402:function(e,n,t){t.d(n,{c6:function(){return _},t$:function(){return k},JY:function(){return l},ws:function(){return w},Fi:function(){return y},o7:function(){return d},K9:function(){return A},Ig:function(){return c},QZ:function(){return Z},jP:function(){return I},yD:function(){return b},yF:function(){return S},tT:function(){return q},Mc:function(){return P},AA:function(){return L},tu:function(){return F},pk:function(){return a},sV:function(){return x},ps:function(){return g},jy:function(){return j},jg:function(){return T},kT:function(){return U},kP:function(){return C},_2:function(){return v},dB:function(){return m},g4:function(){return p},tN:function(){return h},GG:function(){return f}});var r=t(4569),i=t.n(r),o=t(3695),u=i().create({baseURL:"/api/admin",withCredentials:!0});u.interceptors.request.use((function(e){return localStorage.__admin_token&&(e.headers.Authorization="Bearer "+localStorage.__admin_token),localStorage.i18nextLng&&(e.headers["Accept-Language"]=localStorage.i18nextLng),e}),(function(e){return Promise.reject(e)})),u.interceptors.response.use((function(e){return e.data.message&&o.ZP.success(e.data.message),e}),(function(e){return 401===e.response.status&&(localStorage.removeItem("__admin_token"),-1===window.location.pathname.indexOf("login")&&-1===window.location.pathname.indexOf("register")&&(window.location.hash="/login")),e.response.data?(o.ZP.error(e.response.data.message),Promise.reject(e)):Promise.reject(e)}));var s=u,c=function(e){return s.post("/login",e)},a=function(e){return s.post("/register",e)},l=function(){return s.get("/../common/captcha")},d=function(){return s.get("/info/dashboard")},f=function(){return s.get("/user/list")},m=function(e){return s.get("/user/"+e)},h=function(e){return s.post("/user",e)},p=function(e){return s.delete("/user/"+e)},x=function(){return s.get("/info/rotate")},j=function(e){return s.post("/info/rotate",e)},g=function(e){return s.delete("/info/rotate/"+e)},Z=function(){return s.get("/info/post")},b=function(e){return s.post("/info/post",e)},I=function(e){return s.delete("/info/post/"+e)},_=function(){return s.get("/info/about")},k=function(e){return s.post("/info/about",e)},w=function(){return s.get("/info/center")},y=function(e){return s.post("/info/center",e)},C=function(){return s.get("/info/share")},v=function(e){return s.post("/info/share",e)},S=function(){return s.get("/product")},P=function(e){return s.post("/product",e)},q=function(e){return s.delete("/product/"+e)},F=function(){return s.get("/product/record")},A=function(){return s.get("/price/financial")},L=function(){return s.get("/price/rechage")},T=function(e){return s.get("/set/"+e)},U=function(e){return s.post("/set",e)}}}]);
//# sourceMappingURL=884.d9a17cf9.chunk.js.map