import{j as t,L as r,B as m}from"./index-012e48ba.js";import{c as p,d,R as y,e as c}from"./SearchUsers.styled-186776da.js";const g=({users:l,visibleColumns:i})=>{const o=e=>{const n=new Date("2023-11-10T14:58:20.594Z"),a=String(n.getDate()).padStart(2,"0"),s=String(n.getMonth()+1).padStart(2,"0"),x=n.getFullYear();return`${a}.${s}.${x}`};return t.jsx(t.Fragment,{children:t.jsxs(p,{children:[t.jsx("thead",{children:t.jsx(d,{children:i.map((e,n)=>t.jsx(y,{isFirstColumn:n===0,children:e.label},e.key))})}),t.jsx("tbody",{children:l.map((e,n)=>t.jsx(d,{children:i.map((a,s)=>t.jsx(c,{isFirstColumn:s===0,children:a.type==="date"?o(e[a.key]):a.type==="name"?e.name?e.name:e.firstName+" "+e.lastName:a.type==="nameLink"?e.name?t.jsx(r,{to:`/admin/users/carduser/${e._id}`,children:e.name}):t.jsx(r,{to:`/admin/users/carduser/${e._id}`,children:`${e.firstName} ${e.lastName}`}):a.type==="link"?t.jsx(r,{to:`/admin/users/carduser/${e._id}`,children:"картка"}):a.key==="access"?t.jsx(t.Fragment,{children:e[a.key]==="true"?"On":"Off"}):a.key==="status"?t.jsx(t.Fragment,{children:e[a.key]==="true"?"Відкрито":"Заблоковано"}):a.key==="sendEmail"?t.jsx(m,{type:"button",text:"Відправити",padding:"8px",fontsize:"14px",onClick:()=>console.log("send email")}):e[a.key]},a.key))},n))})]})})};export{g as U};
