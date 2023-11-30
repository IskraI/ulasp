import{n as i,c,a as h,j as e,b as d,g as j}from"./index-563703e0.js";import"./Statistic.styled-f75bb09b.js";i.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${c.mainFontColor};
`;const l=i.h2`
 color: ${c.mainFontColor};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
 
`,r=i.p`
 color: ${c.mainFontColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
 
`,a=i.h3`
 color: ${c.mainFontColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
 
`,u=()=>{const{register:s,handleSubmit:t,setValue:x}=h(),n=o=>{console.log("Отправлено:",o)};return e.jsxs("form",{onSubmit:t(n),children:[e.jsx("label",{children:e.jsx("input",{...s("Тема"),placeholder:"Тема"})}),e.jsx("br",{}),e.jsx("label",{children:e.jsx("input",{...s("Текст"),placeholder:"Текст"})}),e.jsx("br",{}),e.jsx("button",{type:"submit",children:"Відправити"})]})},m=()=>{const{register:s,handleSubmit:t,setValue:x}=h(),n=o=>{console.log("Запрос отправлен:",o)};return e.jsxs("form",{onSubmit:t(n),children:[e.jsx("label",{children:e.jsx("input",{...s("Акт"),placeholder:"Прошу зробити акт звірки по номеру договора № 28948749"})}),e.jsx("button",{type:"submit",children:"Запросити"})]})},b=()=>{const{register:s,handleSubmit:t,setValue:x}=h(),n=o=>{console.log("Отчет создан:",o)};return e.jsxs("form",{onSubmit:t(n),children:[e.jsx("h3",{children:"Звіт:"}),e.jsxs("label",{children:["З",e.jsx("input",{...s("Дата"),placeholder:"Дата"})]}),e.jsxs("label",{children:["по:",e.jsx("input",{...s("Дата"),placeholder:"Дата"})]}),e.jsx("br",{}),e.jsxs("label",{children:["За",e.jsx("input",{...s("З"),placeholder:"З"})]}),e.jsx("br",{}),e.jsx("button",{type:"submit",children:"Сформувати"})]})},f=()=>{const s=d(j);return console.log("User",s),e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Кабінет"}),e.jsx(l,{children:"Номер договору"}),e.jsx(r,{children:s.contractNumber}),e.jsx(l,{children:"Ідентифікаційний номер (код ЄДРПОУ)"}),e.jsx(r,{children:s.taxCode}),e.jsx(l,{children:"Остання оплата"}),e.jsx(r,{children:s.lastPay}),e.jsx(l,{children:"Наступна оплата"}),e.jsx(r,{children:s.dateOfAccess}),e.jsx(a,{children:"Написати адміністратору:"}),e.jsx(u,{}),e.jsx(a,{children:"Запросити акт звірки:"}),e.jsx(m,{}),e.jsx(b,{})]})};export{f as default};
