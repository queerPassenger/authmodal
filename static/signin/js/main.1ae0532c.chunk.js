(this["webpackJsonpauthmodal-ui"]=this["webpackJsonpauthmodal-ui"]||[]).push([[0],{12:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var c=t(0),s=t(1),i=t.n(s),r=t(5),a=t.n(r),o=(t(12),t(2)),l=t.n(o),u=t(3),d=t(6),j=function(e){e&&(window.location.href=e)},h=function(e){return Object(c.jsx)("header",{children:Object(c.jsxs)("div",{className:"header-container",children:[Object(c.jsxs)("div",{className:"logo",onClick:function(){},children:[Object(c.jsx)("img",{src:"https://avatars2.githubusercontent.com/u/29197735?s=400&u=ef6c2f39d34e624bd215f5f4afc5d35ae385db9c&v=4",alt:"logo"}),Object(c.jsxs)("div",{className:"logo-txt",children:[Object(c.jsx)("div",{children:"QueerPassenger"}),Object(c.jsx)("div",{children:"initiative"})]})]}),e.auth&&Object(c.jsx)("div",{className:"logout",children:Object(c.jsx)("div",{onClick:function(){fetch("/logout").then(function(){var e=Object(u.a)(l.a.mark((function e(n){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==n.status){e.next=4;break}j("/signin"),e.next=14;break;case 4:return e.prev=4,e.next=7,n.json();case 7:t=e.sent,alert(t.msg?t.msg:"Something went wrong"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),alert("Something went wrong");case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){alert("Something went wrong")}))},children:"Logout"})})]})})},b=function(){var e=Object(s.useRef)(),n=Object(s.useRef)(),t=Object(s.useState)(""),i=Object(d.a)(t,2),r=i[0],a=i[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(h,{}),Object(c.jsx)("section",{className:"sign-section",children:Object(c.jsx)("div",{className:"sign-container",children:Object(c.jsxs)("div",{className:"sign-sub-container",children:[Object(c.jsx)("h1",{children:"Sign In"}),Object(c.jsxs)("div",{className:"sign-fields-container",children:[Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("label",{children:"Username"}),Object(c.jsx)("input",{type:"text",autoFocus:!0,ref:e})]}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("label",{children:"Password"}),Object(c.jsx)("input",{type:"password",ref:n})]})]}),Object(c.jsxs)("div",{className:"sign-actions-container",children:[Object(c.jsx)("button",{onClick:function(){var t=e.current.value,c=n.current.value;if(t)if(c){var s={username:t,password:c},i=new Headers;i.append("Content-Type","application/json");var r=new Request("/signin",{method:"POST",body:JSON.stringify(s),headers:i});fetch(r).then(function(){var e=Object(u.a)(l.a.mark((function e(n){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==n.status){e.next=4;break}j("/home"),e.next=14;break;case 4:return e.prev=4,e.next=7,n.json();case 7:t=e.sent,a(t.msg?t.msg:"Something went wrong"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),a("Something went wrong");case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){a("Something went wrong"),console.log("Error",e)}))}else a("Please fill password");else a("Please fill username")},children:"Sign In"}),Object(c.jsx)("div",{className:"error-text",children:Object(c.jsx)("span",{children:r})}),Object(c.jsx)("button",{onClick:function(){return j("/signup")},children:"Sign Up"})]})]})})})]})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),c(e),s(e),i(e),r(e)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),f()}},[[14,1,2]]]);
//# sourceMappingURL=main.1ae0532c.chunk.js.map