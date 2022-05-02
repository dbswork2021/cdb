"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[455],{6783:function(n,e,t){t.r(e);var o=t(9439),r=t(2791),a=t(8402),i=t(3695),u=t(3272),c=t(9553),s=t(7309),l=t(9286),d=t(184);e.default=function(){var n=(0,r.useState)(null),e=(0,o.Z)(n,2),t=e[0],f=e[1],p=(0,r.useState)(null),g=(0,o.Z)(p,2),m=g[0],h=g[1];(0,r.useEffect)((function(){(0,a.ws)().then((function(n){f(n.data.imageUrl),h(n.data.avatarUrl)}))}),[]);var v=function(n,e){"done"===n.file.status?(i.ZP.success("\u6587\u4ef6\u4e0a\u4f20\u6210\u529f"),"img"===e?f(n.file.response):"avatar"===e&&h(n.file.response)):"error"===n.file.status&&i.ZP.error("\u6587\u4ef6\u4e0a\u4f20\u5931\u8d25")};return(0,d.jsx)("div",{children:(0,d.jsxs)(u.Z,{labelCol:{span:4},name:"control-hooks",onFinish:function(){(0,a.Fi)({imageUrl:t,avatarUrl:m}).then((function(n){i.ZP.success("\u4fdd\u5b58\u6210\u529f")}))},children:[(0,d.jsx)(u.Z.Item,{label:"\u4e2a\u4eba\u4e2d\u5fc3\u6a2a\u5e45",children:(0,d.jsx)(c.Z,{className:"flex justify-center items-center",name:"file",action:"/api/common/uploads",headers:localStorage.getItem("__admin_token")?{Authorization:"Bearer ".concat(localStorage.__admin_token)}:null,showUploadList:!1,onChange:function(n){return v(n,"img")},children:t?(0,d.jsx)("img",{src:"/uploads/"+t,alt:"avatar",className:" w-72 h-24 bg-red-400"}):(0,d.jsx)("div",{className:"flex justify-center items-center w-72 h-24 bg-red-400",children:(0,d.jsx)(l.Z,{})})})}),(0,d.jsx)(u.Z.Item,{label:"\u7528\u6237\u5934\u50cf",children:(0,d.jsx)(c.Z,{className:"flex justify-center items-center",name:"file",action:"/api/common/uploads",headers:localStorage.getItem("__admin_token")?{Authorization:"Bearer ".concat(localStorage.__admin_token)}:null,showUploadList:!1,onChange:function(n){return v(n,"avatar")},children:m?(0,d.jsx)("img",{src:"/uploads/"+m,alt:"avatar",className:" w-24 h-24 bg-red-400"}):(0,d.jsx)("div",{className:"flex justify-center items-center w-24 h-24 bg-red-400",children:(0,d.jsx)(l.Z,{})})})}),(0,d.jsx)(u.Z.Item,{wrapperCol:{span:4,offset:4},children:(0,d.jsx)(s.Z,{type:"link",htmlType:"submit",children:"\u4fdd\u5b58"})})]})})}},8402:function(n,e,t){t.d(e,{c6:function(){return S},t$:function(){return b},JY:function(){return l},ws:function(){return C},Fi:function(){return j},o7:function(){return d},K9:function(){return D},Ig:function(){return c},QZ:function(){return w},jP:function(){return k},yD:function(){return x},yF:function(){return P},tT:function(){return L},Mc:function(){return E},AA:function(){return T},tu:function(){return M},pk:function(){return s},sV:function(){return h},ps:function(){return y},jy:function(){return v},jg:function(){return U},kT:function(){return I},kP:function(){return Z},_2:function(){return _},dB:function(){return p},g4:function(){return m},tN:function(){return g},GG:function(){return f}});var o=t(4569),r=t.n(o),a=t(3695),i=r().create({baseURL:"/api/admin",withCredentials:!0});i.interceptors.request.use((function(n){return localStorage.__admin_token&&(n.headers.Authorization="Bearer "+localStorage.__admin_token),localStorage.i18nextLng&&(n.headers["Accept-Language"]=localStorage.i18nextLng),n}),(function(n){return Promise.reject(n)})),i.interceptors.response.use((function(n){return n.data.message&&a.ZP.success(n.data.message),n}),(function(n){return 401===n.response.status&&(localStorage.removeItem("__admin_token"),-1===window.location.pathname.indexOf("login")&&-1===window.location.pathname.indexOf("register")&&(window.location.hash="/login")),n.response.data?(a.ZP.error(n.response.data.message),Promise.reject(n)):Promise.reject(n)}));var u=i,c=function(n){return u.post("/login",n)},s=function(n){return u.post("/register",n)},l=function(){return u.get("/../common/captcha")},d=function(){return u.get("/info/dashboard")},f=function(){return u.get("/user/list")},p=function(n){return u.get("/user/"+n)},g=function(n){return u.post("/user",n)},m=function(n){return u.delete("/user/"+n)},h=function(){return u.get("/info/rotate")},v=function(n){return u.post("/info/rotate",n)},y=function(n){return u.delete("/info/rotate/"+n)},w=function(){return u.get("/info/post")},x=function(n){return u.post("/info/post",n)},k=function(n){return u.delete("/info/post/"+n)},S=function(){return u.get("/info/about")},b=function(n){return u.post("/info/about",n)},C=function(){return u.get("/info/center")},j=function(n){return u.post("/info/center",n)},Z=function(){return u.get("/info/share")},_=function(n){return u.post("/info/share",n)},P=function(){return u.get("/product")},E=function(n){return u.post("/product",n)},L=function(n){return u.delete("/product/"+n)},M=function(){return u.get("/product/record")},D=function(){return u.get("/price/financial")},T=function(){return u.get("/price/rechage")},U=function(n){return u.get("/set/"+n)},I=function(n){return u.post("/set",n)}},7575:function(n,e,t){t.d(e,{Z:function(){return c}});var o=t(1413),r=t(2791),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},i=t(4291),u=function(n,e){return r.createElement(i.Z,(0,o.Z)((0,o.Z)({},n),{},{ref:e,icon:a}))};u.displayName="CheckOutlined";var c=r.forwardRef(u)},9581:function(n,e,t){t.d(e,{Z:function(){return a}});var o=t(9439),r=t(2791);function a(){var n=r.useReducer((function(n){return n+1}),0);return(0,o.Z)(n,2)[1]}},4170:function(n,e,t){t.d(e,{Z:function(){return c}});var o=t(1413),r="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),a="aria-",i="data-";function u(n,e){return 0===n.indexOf(e)}function c(n){var e,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e=!1===t?{aria:!0,data:!0,attr:!0}:!0===t?{aria:!0}:(0,o.Z)({},t);var c={};return Object.keys(n).forEach((function(t){(e.aria&&("role"===t||u(t,a))||e.data&&u(t,i)||e.attr&&r.includes(t))&&(c[t]=n[t])})),c}}}]);
//# sourceMappingURL=455.68eecb37.chunk.js.map