import{j as e,u as d}from"./index-00059ef3.js";const n=({users:t})=>e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Name"}),e.jsx("th",{children:"Day of Birthday"}),e.jsx("th",{children:"Tel Number"}),e.jsx("th",{children:"Email"})]})}),e.jsx("tbody",{children:t.map((s,r)=>e.jsxs("tr",{children:[e.jsx("td",{children:s.firstName}),e.jsxs("td",{children:[s.lastName," ",s.fatherName]}),e.jsx("td",{children:s.dayOfBirthday}),e.jsx("td",{children:s.telNumber}),e.jsx("td",{children:s.email})]},r))})]}),l=()=>{const{data:t,isLoading:s}=d();return e.jsxs(e.Fragment,{children:["Користувачі",e.jsx("button",{type:"button",onClick:()=>console.log("showModal"),children:"Додати"}),e.jsx("input",{type:"text",id:"search",name:"search",placeholder:"Пошук користувача"}),!s&&e.jsx(n,{users:t})]})};export{l as default};
