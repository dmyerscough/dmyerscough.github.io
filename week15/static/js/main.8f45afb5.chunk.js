(this.webpackJsonpatm=this.webpackJsonpatm||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(4),o=a.n(s),i=(a(9),a(2)),l=a(0),d=function(e){var t=e.onChange,a=e.isDeposit,n=e.atmMode,c=e.validTransaction,s=["Deposit","Cash Back"];console.log("ATM isDeposit: ".concat(a));var o="";return c||(o=Object(l.jsxs)("div",{className:"alert alert-danger",children:[Object(l.jsx)("strong",{children:"Insufficient Funds."})," There is not enough funds within your account."]})),s.includes(n)?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:s[Number(!a)]}),Object(l.jsx)("div",{className:"form-floating mb-3",children:Object(l.jsx)("input",{type:"number",className:"form-control rounded-4",id:"floatingInput",onChange:t,min:"0"})}),Object(l.jsx)("button",{className:"w-100 mb-2 btn btn-lg rounded-4 btn-primary",type:"submit",disabled:!c,children:"Submit"}),o]}):Object(l.jsx)(l.Fragment,{})},r=function(){var e=c.a.useState(0),t=Object(i.a)(e,2),a=t[0],n=t[1],s=c.a.useState(0),o=Object(i.a)(s,2),r=o[0],b=o[1],j=c.a.useState(!0),u=Object(i.a)(j,2),m=u[0],h=u[1],g=c.a.useState(""),O=Object(i.a)(g,2),p=O[0],v=O[1],x=c.a.useState(!1),f=Object(i.a)(x,2),N=f[0],C=f[1],k="Account Balance $".concat(r," ");console.log("Account Rendered with isDeposit: ".concat(m));return Object(l.jsx)("div",{className:"modal modal-signin d-block bg-secondary py-5",tabIndex:"-1",role:"dialog",id:"modalSignin",children:Object(l.jsx)("div",{className:"modal-dialog",children:Object(l.jsxs)("div",{className:"modal-content rounded-5 shadow",children:[Object(l.jsx)("div",{className:"modal-header pb-4 border-bottom-0",children:Object(l.jsx)("h2",{className:"fw-bold mb-0",children:"ATM"})}),Object(l.jsxs)("div",{className:"modal-body pt-0",children:[Object(l.jsx)("h3",{id:"total",children:k}),Object(l.jsxs)("form",{onSubmit:function(e){var t=m?r+a:r-a;t>=0?b(t):C(!1),e.preventDefault()},children:[Object(l.jsxs)("select",{className:"custom-select",onChange:function(e){return v((t=e).target.value),void("Deposit"===t.target.value?(h(!0),C(!0)):"Cash Back"===t.target.value&&h(!1));var t},name:"mode",id:"modeselect",children:[Object(l.jsx)("option",{id:"no-selection",value:""}),Object(l.jsx)("option",{id:"deposit-selection",value:"Deposit",children:"Deposit"}),Object(l.jsx)("option",{id:"cashback-selection",value:"Cash Back",children:"Cash Back"})]}),Object(l.jsx)(d,{onChange:function(e){console.log("handleChange ".concat(e.target.value)),n(Number(e.target.value)),"Cash Back"===p&&r-Number(e.target.value)<0?C(!1):C(!0)},isDeposit:m,atmMode:p,validTransaction:N})]})]})]})})})};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(r,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[11,1,2]]]);