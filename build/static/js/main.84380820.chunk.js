(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var r=t(15),c=t.n(r),a=t(6),o=t(3),u=t(1),i=t(0),d=function(e){var n=e.value,t=e.onChange;return Object(i.jsxs)("div",{children:["filter shown with: ",Object(i.jsx)("input",{value:n,onChange:t})]})},l=function(e){var n=e.person,t=e.handleDelete;return Object(i.jsxs)("div",{children:[n.name," ",n.number,Object(i.jsx)("button",{onClick:function(){return t(n)},children:"delete"})]})},s=function(e){var n=e.persons,t=e.handleDelete;return Object(i.jsx)("div",{children:n.map((function(e){return Object(i.jsx)(l,{person:e,handleDelete:t},e.id)}))})},b=function(e){var n=e.onSubmit,t=e.nameValue,r=e.numValue,c=e.nameChange,a=e.numChange;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:t,onChange:c})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:r,onChange:a})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},j=function(e){var n=e.message,t=e.color;if(null===n)return null;var r={background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"};return r.color=t,Object(i.jsx)("div",{style:r,children:n})},f=t(4),h=t.n(f),m="/api/persons",O=function(){return h.a.get(m).then((function(e){return e.data}))},v=function(e){return h.a.post(m,e).then((function(e){return e.data}))},p=function(e,n){return h.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},x=function(e){return h.a.delete("".concat(m,"/").concat(e.id)).then((function(e){return e.data}))};var g=function(){var e=Object(u.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],c=Object(u.useState)(""),l=Object(o.a)(c,2),f=l[0],h=l[1],m=Object(u.useState)(""),g=Object(o.a)(m,2),w=g[0],C=g[1],S=Object(u.useState)(""),k=Object(o.a)(S,2),y=k[0],D=k[1],V=Object(u.useState)(null),A=Object(o.a)(V,2),B=A[0],E=A[1],I=Object(u.useState)("green"),J=Object(o.a)(I,2),L=J[0],T=J[1];Object(u.useEffect)((function(){O().then((function(e){r(e)}))}),[]);var z=function(e){E(e),setTimeout((function(){E(null)}),5e3)},N=""===y?t:t.filter((function(e){return n=e.name,t=y,n=n.toLowerCase(),t=t.toLowerCase(),null!==n.match(t);var n,t}));return Object(i.jsxs)("div",{children:[Object(i.jsx)(j,{message:B,color:L}),Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(d,{value:y,onChange:function(e){return D(e.target.value)}}),Object(i.jsx)("h3",{children:"Add a new"}),Object(i.jsx)(b,{onSubmit:function(e){e.preventDefault();var n=t.find((function(e){return e.name===f}));if(null==n){var c={name:f,number:w,id:t.length+1};v(c).then((function(e){r(t.concat(e)),T("green"),z("Added ".concat(f))}))}else{if(n.number===w)window.alert("".concat(f," is already added to phonebook"));else if(window.confirm("".concat(f," is already added to phonebook, replace the old number with a new one? "))){var o=Object(a.a)(Object(a.a)({},n),{},{number:w});p(o.id,o).then((function(e){r(t.map((function(n){return n.id!==o.id?n:e}))),T("green"),z("Updated ".concat(f))})).catch((function(e){T("red"),z("Information of ".concat(f," has already been removed from server")),r(t.filter((function(e){return e.id!==o.id})))}))}}h(""),C("")},nameValue:f,numValue:w,nameChange:function(e){return h(e.target.value)},numChange:function(e){return C(e.target.value)}}),Object(i.jsx)("h3",{children:"Numbers"}),Object(i.jsx)(s,{persons:N,handleDelete:function(e){window.confirm("Delete ".concat(e.name,"?"))&&x(e).then((function(){r(t.filter((function(n){return n.id!==e.id})))})).catch((function(){alert("The person ".concat(e.name," was already deleted from the server.")),r(t.filter((function(n){return n.id!==e.id})))}))}})]})};c.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.84380820.chunk.js.map