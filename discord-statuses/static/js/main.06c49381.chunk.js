(this["webpackJsonpdiscord-status"]=this["webpackJsonpdiscord-status"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),s=(n(11),n(12),n(13),n(1)),i=n.n(s),l=n(2),u=n(5);function m(e,t){return p.apply(this,arguments)}function p(){return(p=Object(l.a)(i.a.mark((function e(t,n){var a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={captcha_key:null,email:t,gift_code_sku_id:null,login_source:null,password:n,undelete:!1},e.next=3,fetch("https://discord.com/api/v6/auth/login",{method:"POST",headers:{"content-type":"application/json",origin:"https://stasrikan.github.io/build/"},body:JSON.stringify(a)}).then((function(e){return e}));case 3:return r=e.sent,e.next=6,r.json();case 6:if(o=e.sent,!r.ok){e.next=9;break}return e.abrupt("return",{token:o.token,status:!0});case 9:return e.abrupt("return",{error:Object.values(o)[0][0],status:!1});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=function(e){var t=e.text;return r.a.createElement("div",{className:"error-wrapper flex-container"},r.a.createElement("img",{className:"icon",src:"imgs/error.svg",alt:"Error"}),r.a.createElement("p",null,t))};var d=function(){return r.a.createElement("div",{className:"success-wrapper flex-container"},r.a.createElement("img",{className:"icon",src:"imgs/success.svg",alt:"Success"}),r.a.createElement("p",null,"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u043e\u0448\u043b\u0438!"))};var g=function(){function e(e){e.preventDefault();var t={};return document.querySelector(".login-form").querySelectorAll("input").forEach((function(e){t[e.name]=e.value})),console.log(t),t}var t=Object(a.useState)(0),n=Object(u.a)(t,2),o=n[0],c=n[1];return r.a.createElement("main",{className:"container flex-container login-form-wrapper"},r.a.createElement("h1",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0442 Discord"),r.a.createElement("form",{action:"",className:"login-form flex-container"},r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{name:"login",type:"text",className:"login-form__login",placeholder:"\u041b\u043e\u0433\u0438\u043d"})),r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{name:"password",type:"password",className:"login-form__password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"})),r.a.createElement("button",{onClick:function(){var t=Object(l.a)(i.a.mark((function t(n){var a,r,s,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e(n),r=a.login,s=a.password,t.next=4,m(r,s);case 4:l=t.sent,c(l),console.log(o);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),type:"submit",className:"login-form__submit"},"\u0412\u043e\u0439\u0442\u0438"),o?o.status?r.a.createElement(d,null):r.a.createElement(f,{text:o.error}):""))};var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.06c49381.chunk.js.map