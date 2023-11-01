import{n as t,c as r,j as e,r as i}from"./index-e9829634.js";const f=t.div`
display:flex;
gap: 8px;
margin-left: 111px;
margin-top:24px;
`,l=t.p`
display:flex;
padding: 8px;
justify-content: center;
align-items: center;
border-radius: 10px;
background: ${r.primaryColor};
color:   ${r.mainFontColor};
text-align: center;
font-size: 22px;
line-height: calc(26.4 / 22); 
`,u=()=>e.jsxs(f,{children:[e.jsx(l,{children:"Нових користувачів"}),e.jsxs(l,{children:["+ ","Користувачів за вересень"]}),e.jsx(l,{children:"Доданих пісень"}),e.jsx(l,{children:"Онлайн користувачів"})]}),b=t.div`
  display: flex;
`,y=t.input`
display: flex;
width: 219px;
height: 40px;
padding: 0px 8px;
justify-content: flex-end;
align-items: center;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid  ${r.mainFontColor};
background-color: transparent;
margin-right: 64px;
margin-left: auto;
margin-top: 29px;
::placeholder { 
    text-align: right;
    color: rgba(0, 0, 0, 0.4); 
  }
`,S=t.table`
  // Здесь вы можете определить стили для таблицы
`,a=t.table`
 color:   ${r.mainFontColor};
// font-family: Inter;
font-size: 16px;
// font-style: normal;
font-weight: 600;
// line-height: normal;
margin-top: 23px;
`,o=t.tr`
 display: flex;
 margin-left: 127px;
`,s=t.td`
  // Здесь вы можете определить стили для ячеек таблицы
`,C=t.h3`
 color:   ${r.mainFontColor};
 font-size: 22px;
 margin-top: 43px;
 margin-left: 111px;
line-height: calc(26.4 / 22);
font-weight: 400;
  line-height: 1.28;
`,R=()=>{const[c,p]=i.useState(""),[x,g]=i.useState([]),[m,h]=i.useState(!1),[j,d]=i.useState(!1);return i.useEffect(()=>{c.trim()!==""?(h(!0),d(!1)):(g([]),h(!1),d(!1))},[c]),e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:[e.jsx(C,{children:"Чекають на  підтвердження (посилання):"}),e.jsx(y,{type:"text",placeholder:"Пошук користувачів",value:c,onChange:n=>p(n.target.value)})]}),e.jsxs(S,{children:[e.jsx("thead",{children:e.jsxs(o,{children:[e.jsx(a,{style:{marginRight:"243px"},children:"Ім’я"}),e.jsx(a,{style:{marginRight:"94px"},children:"№ договору"}),e.jsx(a,{style:{marginRight:"102px"},children:"Дата заявки"}),e.jsx(a,{children:"Детальніше"})]})}),e.jsx("tbody",{children:m?e.jsx(o,{children:e.jsx(s,{colSpan:"3",children:"Завантаження..."})}):x.length===0&&j?e.jsx(o,{children:e.jsx(s,{colSpan:"4",children:"Результати пошуку: не знайдено"})}):x.map(n=>e.jsxs(o,{children:[e.jsxs(s,{children:[n.firstName," ",n.lastName]}),e.jsx(s,{children:n.contractNumber}),e.jsx(s,{children:n.createdAt}),e.jsx(s,{children:e.jsx("button",{children:"картка"})})]},n.id))})]})]})},w=t.h2`
 color:   ${r.mainFontColor};
font-size: 24px;
font-weight: 500;
`,F=()=>e.jsxs(e.Fragment,{children:[e.jsx(w,{children:"Кабінет адміністратора"}),e.jsx(u,{}),e.jsx(R,{})]});export{F as default};
