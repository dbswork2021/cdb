"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[643],{9643:function(e,n,t){t.r(n);var r=t(1413),s=t(9439),i=t(2791),a=t(8402),u=t(3272),o=t(6106),l=t(914),c=t(4564),d=t(9389),m=t(8243),p=t(7309),f=t(3344),h=t(2426),x=t.n(h),Z=t(184);n.default=function(){var e=u.Z.useForm(),n=(0,s.Z)(e,1)[0],t=u.Z.useForm(),h=(0,s.Z)(t,1)[0],j=u.Z.useForm(),g=(0,s.Z)(j,1)[0];(0,i.useEffect)((function(){(0,a.jg)("pay").then((function(e){n.setFieldsValue((0,r.Z)({_id:e.data._id},e.data.sets))})),(0,a.jg)("sms").then((function(e){h.setFieldsValue((0,r.Z)({_id:e.data._id},e.data.sets))})),(0,a.jg)("withdraw").then((function(e){g.setFieldsValue((0,r.Z)((0,r.Z)({},e.data.sets),{},{_id:e.data._id,time:[x()(e.data.sets.time[0]),x()(e.data.sets.time[1])]}))}))}),[]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(o.Z,{gutter:16,children:[(0,Z.jsx)(l.Z,{className:"gutter-row",span:12,children:(0,Z.jsx)(c.Z,{title:"\u652f\u4ed8\u901a\u9053\u8bbe\u7f6e",bordered:!1,style:{width:600},children:(0,Z.jsxs)(u.Z,{name:"control-hooks",onFinish:function(e){var n=e._id,t=e.payApiUrl,r=e.transferApiUrl,s=e.payId,i=e.payType,u=e.payKey,o=e.notifyUrl;(0,a.kT)({_id:n,type:"pay",sets:{payApiUrl:t,transferApiUrl:r,payId:s,payKey:u,payType:i,notifyUrl:o}})},labelCol:{span:6},form:n,children:[(0,Z.jsx)(u.Z.Item,{label:"id",name:"_id",style:{display:"none"},children:(0,Z.jsx)(d.Z,{disabled:!0})}),(0,Z.jsx)(u.Z.Item,{label:"\u652f\u4ed8\u63a5\u53e3\u5730\u5740",name:"payApiUrl",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u652f\u4ed8\u63a5\u53e3\u5730\u5740"}],children:(0,Z.jsx)(d.Z,{placeholder:"\u8bf7\u8f93\u5165\u652f\u4ed8\u63a5\u53e3\u5730\u5740"})}),(0,Z.jsx)(u.Z.Item,{label:"\u4ee3\u4ed8\u63a5\u53e3\u5730\u5740",name:"transferApiUrl",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4ee3\u4ed8\u63a5\u53e3\u5730\u5740"}],children:(0,Z.jsx)(d.Z,{placeholder:"\u8bf7\u8f93\u5165\u4ee3\u4ed8\u63a5\u53e3\u5730\u5740"})}),(0,Z.jsx)(u.Z.Item,{label:"\u5546\u6237\u53f7",name:"payId",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5546\u6237\u53f7"}],children:(0,Z.jsx)(d.Z,{placeholder:"\u8bf7\u8f93\u5165\u5546\u6237\u53f7"})}),(0,Z.jsx)(u.Z.Item,{label:"\u652f\u4ed8\u5bc6\u94a5",name:"payKey",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u652f\u4ed8\u5bc6\u94a5"}],children:(0,Z.jsx)(d.Z,{placeholder:"\u8bf7\u8f93\u5165\u652f\u4ed8\u5bc6\u94a5"})}),(0,Z.jsx)(u.Z.Item,{label:"\u652f\u4ed8\u901a\u9053\u7f16\u7801",name:"payType",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u652f\u4ed8\u901a\u9053"}],children:(0,Z.jsx)(m.Z,{placeholder:"\u8bf7\u8f93\u5165\u901a\u9053"})}),(0,Z.jsx)(u.Z.Item,{label:"\u56de\u8c03\u5730\u5740",name:"notifyUrl",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u56de\u8c03\u5730\u5740"}],extra:"http://\u4f60\u7684\u57df\u540d/common/notify",children:(0,Z.jsx)(d.Z,{placeholder:"\u8bf7\u8f93\u5165\u56de\u8c03\u5730\u5740"})}),(0,Z.jsx)(u.Z.Item,{wrapperCol:{span:4,offset:10},children:(0,Z.jsx)(p.Z,{type:"primary",htmlType:"submit",children:"\u4fdd\u5b58"})})]})})}),(0,Z.jsx)(l.Z,{className:"gutter-row",span:12,children:(0,Z.jsx)(c.Z,{title:"\u77ed\u4fe1\u63a5\u53e3\u8bbe\u7f6e",bordered:!1,style:{width:600},children:(0,Z.jsxs)(u.Z,{name:"control-hooks",onFinish:function(e){var n=e._id,t=e.smsApiUrl,r=e.appKey,s=e.secretKey,i=e.title,u=e.content;(0,a.kT)({_id:n,type:"sms",sets:{smsApiUrl:t,appKey:r,secretKey:s,title:i,content:u}})},labelCol:{span:4},form:h,children:[(0,Z.jsx)(u.Z.Item,{label:"id",name:"_id",style:{display:"none"},children:(0,Z.jsx)(d.Z,{disabled:!0})}),(0,Z.jsx)(u.Z.Item,{label:"\u63a5\u53e3\u5730\u5740",name:"smsApiUrl",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u63a5\u53e3\u5730\u5740"}],children:(0,Z.jsx)(d.Z,{placeholder:"\u8bf7\u8f93\u5165\u63a5\u53e3\u5730\u5740"})}),(0,Z.jsx)(u.Z.Item,{label:"App Key",name:"appKey",rules:[{required:!0,message:"\u8bf7\u8f93\u5165App Key"}],children:(0,Z.jsx)(d.Z,{placeholder:"\u8bf7\u8f93\u5165App Key"})}),(0,Z.jsx)(u.Z.Item,{label:"Secret Key",name:"secretKey",rules:[{required:!0,message:"\u8bf7\u8f93\u5165Secret Key"}],children:(0,Z.jsx)(d.Z,{placeholder:"\u8bf7\u8f93\u5165Secret Key"})}),(0,Z.jsx)(u.Z.Item,{label:"\u4f01\u4e1a\u7b7e\u540d",name:"title",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f01\u4e1a\u7b7e\u540d"}],extra:"\u7528\u4e8e\u5411\u5ba2\u6237\u8868\u793a\u6b64\u9a8c\u8bc1\u7801\u662f\u7531\u672c\u516c\u53f8\u53d1\u51fa",children:(0,Z.jsx)(d.Z,{placeholder:"\u8bf7\u8f93\u5165\u4f01\u4e1a\u7b7e\u540d"})}),(0,Z.jsx)(u.Z.Item,{label:"\u77ed\u4fe1\u5185\u5bb9",name:"content",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u77ed\u4fe1\u5185\u5bb9"}],children:(0,Z.jsx)(d.Z,{placeholder:"\u8bf7\u8f93\u5165\u77ed\u4fe1\u5185\u5bb9"})}),(0,Z.jsx)(u.Z.Item,{wrapperCol:{span:4,offset:10},children:(0,Z.jsx)(p.Z,{type:"primary",htmlType:"submit",children:"\u4fdd\u5b58"})})]})})})]}),(0,Z.jsx)(o.Z,{children:(0,Z.jsx)(l.Z,{className:"gutter-row",span:12,children:(0,Z.jsx)(c.Z,{title:"\u63d0\u73b0\u76f8\u5173\u8bbe\u7f6e",bordered:!1,style:{width:600,marginTop:"2rem"},children:(0,Z.jsxs)(u.Z,{name:"control-hooks",onFinish:function(e){var n=e._id,t=e.count,r=e.time,s=e.fees,i=e.min,u=e.multi;(0,a.kT)({_id:n,type:"withdraw",sets:{count:t,time:r,fees:s,min:i,multi:u}})},labelCol:{span:6},form:g,children:[(0,Z.jsx)(u.Z.Item,{label:"id",name:"_id",style:{display:"none"},children:(0,Z.jsx)(d.Z,{disabled:!0})}),(0,Z.jsx)(u.Z.Item,{label:"\u6bcf\u65e5\u6700\u591a\u63d0\u73b0\u6b21\u6570",name:"count",extra:"\u8bbe\u7f6e\u6bcf\u5929\u63d0\u73b0\u6b21\u6570",rules:[{required:!0,message:"\u8bf7\u8bbe\u7f6e\u6bcf\u5929\u63d0\u73b0\u6b21\u6570"}],children:(0,Z.jsx)(m.Z,{min:"0"})}),(0,Z.jsx)(u.Z.Item,{label:"\u63d0\u73b0\u5f00\u542f\u65f6\u95f4",name:"time",extra:"\u53ea\u5728\u8bbe\u7f6e\u7684\u65f6\u95f4\u8303\u56f4\u5185\u5f00\u542f\u63d0\u73b0\u529f\u80fd",rules:[{required:!0,message:"\u8bf7\u8bbe\u7f6e\u63d0\u73b0\u5f00\u542f\u65f6\u95f4"}],children:(0,Z.jsx)(f.Z.RangePicker,{format:"HH:mm"})}),(0,Z.jsx)(u.Z.Item,{label:"\u63d0\u73b0\u624b\u7eed\u8d39\u70b9\u4f4d",name:"fees",extra:"\u5373\u63d0\u73b0\u65f6\u8981\u6263\u9664\u7684\u624b\u7eed\u8d39\u767e\u5206\u6bd4",rules:[{required:!0,message:"\u8bf7\u8bbe\u7f6e\u5373\u63d0\u73b0\u65f6\u8981\u6263\u9664\u7684\u624b\u7eed\u8d39\u767e\u5206\u6bd4"}],children:(0,Z.jsx)(m.Z,{min:0})}),(0,Z.jsx)(u.Z.Item,{label:"\u6700\u5c0f\u63d0\u73b0\u989d\u5ea6",name:"min",extra:"\u4e00\u6b21\u6027\u63d0\u73b0\u7684\u6700\u5c11\u989d\u5ea6",rules:[{required:!0,message:"\u8bf7\u8bbe\u7f6e\u4e00\u6b21\u6027\u63d0\u73b0\u7684\u6700\u5c11\u989d\u5ea6"}],children:(0,Z.jsx)(m.Z,{min:0})}),(0,Z.jsx)(u.Z.Item,{label:"\u63d0\u73b0\u6574\u6570\u500d",name:"multi",extra:"\u8bbe\u7f6e\u63d0\u73b0\u65f6\u91d1\u989d\u7684\u500d\u6570",rules:[{required:!0,message:"\u8bbe\u7f6e\u63d0\u73b0\u65f6\u91d1\u989d\u7684\u500d\u6570"}],children:(0,Z.jsx)(m.Z,{min:0})}),(0,Z.jsx)(u.Z.Item,{wrapperCol:{span:4,offset:10},children:(0,Z.jsx)(p.Z,{type:"primary",htmlType:"submit",children:"\u4fdd\u5b58"})})]})})})})]})}},8402:function(e,n,t){t.d(n,{c6:function(){return _},t$:function(){return q},xq:function(){return h},jP:function(){return Z},fH:function(){return x},JY:function(){return c},ws:function(){return k},Fi:function(){return A},o7:function(){return d},K9:function(){return P},Ig:function(){return o},QZ:function(){return b},Ip:function(){return w},yD:function(){return I},yF:function(){return F},tT:function(){return C},Mc:function(){return T},AA:function(){return S},tu:function(){return v},pk:function(){return l},sV:function(){return j},ps:function(){return y},jy:function(){return g},jg:function(){return L},kT:function(){return N},kP:function(){return K},_2:function(){return U},dB:function(){return p},tN:function(){return f},GG:function(){return m}});var r=t(4569),s=t.n(r),i=t(3695),a=s().create({baseURL:"/api/admin",withCredentials:!0});a.interceptors.request.use((function(e){return localStorage.__admin_token&&(e.headers.Authorization="Bearer "+localStorage.__admin_token),localStorage.i18nextLng&&(e.headers["Accept-Language"]=localStorage.i18nextLng),e}),(function(e){return Promise.reject(e)})),a.interceptors.response.use((function(e){return e.data.message&&i.ZP.success(e.data.message),e}),(function(e){return 401===e.response.status&&(localStorage.removeItem("__admin_token"),-1===window.location.pathname.indexOf("login")&&-1===window.location.pathname.indexOf("register")&&(window.location.hash="/login")),e.response.data?(i.ZP.error(e.response.data.message),Promise.reject(e)):Promise.reject(e)}));var u=a,o=function(e){return u.post("/login",e)},l=function(e){return u.post("/register",e)},c=function(){return u.get("/../common/captcha")},d=function(){return u.get("/info/dashboard")},m=function(){return u.get("/user/list")},p=function(e){return u.get("/user/user/"+e)},f=function(e){return u.post("/user/user",e)},h=function(){return u.get("/user/admin")},x=function(e){return u.post("/user/admin",e)},Z=function(e){return u.delete("/user/admin/"+e)},j=function(){return u.get("/info/rotate")},g=function(e){return u.post("/info/rotate",e)},y=function(e){return u.delete("/info/rotate/"+e)},b=function(){return u.get("/info/post")},I=function(e){return u.post("/info/post",e)},w=function(e){return u.delete("/info/post/"+e)},_=function(){return u.get("/info/about")},q=function(e){return u.post("/info/about",e)},k=function(){return u.get("/info/center")},A=function(e){return u.post("/info/center",e)},K=function(){return u.get("/info/share")},U=function(e){return u.post("/info/share",e)},F=function(){return u.get("/product")},T=function(e){return u.post("/product",e)},C=function(e){return u.delete("/product/"+e)},v=function(){return u.get("/product/record")},P=function(){return u.get("/price/financial")},S=function(){return u.get("/price/rechage")},L=function(e){return u.get("/set/"+e)},N=function(e){return u.post("/set",e)}}}]);
//# sourceMappingURL=643.176d35f0.chunk.js.map