import{n,c as t,a,j as o,b as m,g as b}from"./index-01d750f0.js";import"./Statistic.styled-c5b265e6.js";n.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${t.mainFontColor};
`;const u=n.h2`
 color: ${t.mainFontColor};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  margin-top: 24px;
 margin-bottom: 24px;
`,l=n.h2`
 color: ${t.mainFontColor};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  margin-top: 18px;
 
`,p=n.p`
 color: ${t.mainFontColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
 margin-top: 11px;
`,f=n.div`
 display: flex;
 gap: 135px;
 position: relative;
`,j=n.form`
margin-left: 24px;
 
`,F=n.input`
 display: flex;
width: 421px;
height: 45px;
padding: 8px;
margin-top: 25px;
align-items: center;
gap: 8px;
border-radius: 10px;
border: 0.5px solid ${t.mainFontColor};
background:  rgba(234, 234, 234, 0.32);

::placeholder{
    color: rgba(0, 0, 0, 0.30);
font-size: 20px;
}
`,C=n.input`
width: 421px;
height: 145px;
padding: 8px;
gap: 8px;
border-radius: 10px;
border: 0.5px solid ${t.mainFontColor};
background:  rgba(234, 234, 234, 0.32);
position: relative;

::placeholder{
    color: rgba(0, 0, 0, 0.30);
font-size: 20px;
position: absolute;
    top: 8px; 
    left: 8px; 
}
`,g=n.button`
 display: flex;
width: 197px;
height: 48px;
padding: 8px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 10px;
border: 1px solid ${t.mainFontColor};
background:  ${t.accentHoverColor};
color: ${t.mainFontColor};
font-size: 20px;
margin-top: 25px;
`,h=n.h3`
 color: ${t.mainFontColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
 margin-top:48px;
 margin-left: 24px;
`,$=n.input`
 display: flex;
width: 422px;
height: 213px;
padding: 8px;
align-items: flex-start;
gap: 8px;
border-radius: 10px;
border: 0.5px solid ${t.mainFontColor};
background:  rgba(234, 234, 234, 0.32);
margin-top: 25px;
`,y=()=>{const{register:e,handleSubmit:i,setValue:x}=a(),r=s=>{console.log("Отправлено:",s)};return o.jsxs(j,{onSubmit:i(r),children:[o.jsx(h,{children:"Написати адміністратору:"}),o.jsx(F,{...e("Тема"),placeholder:"Тема"}),o.jsx("br",{}),o.jsx(C,{...e("Текст"),placeholder:"Текст"}),o.jsx("br",{}),o.jsx(g,{type:"submit",children:"Відправити"})]})},w=()=>{const{register:e,handleSubmit:i,setValue:x}=a(),r=s=>{console.log("Запрос отправлен:",s)};return o.jsxs("form",{onSubmit:i(r),children:[o.jsx(h,{children:"Запросити акт звірки:"}),o.jsx($,{...e("Акт")}),o.jsx(g,{type:"submit",children:"Запросити"})]})},z=n.form`
 width: 421px;
height: 230px;
flex-shrink: 0;
border-radius: 10px;
border: 0.5px solid ${t.mainFontColor};
background:  rgba(234, 234, 234, 0.32);
position: absolute;
margin-left:580px;
margin-top: 86px;
`,S=n.h3`
 color: ${t.mainFontColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
 margin-top:16px;
 text-align: center;
 margin-bottom: 16px;
`,k=n.button`
display: block;
width: 198px;
height: 48px;
padding: 8px;
justify-content: center;
align-items: center;
gap: 8px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid ${t.mainFontColor};
background:  rgba(164, 188, 212, 0.30);
color: ${t.mainFontColor};
text-align: center;
font-size: 20px;
margin-left: 211px;
margin-top: 24px;
`,I=n.div`
display: flex;
`,c=n.input`
height: 31px;
width:154px;
padding: 3px 7px 4px 40px;
justify-content: flex-end;
align-items: flex-start;
gap: 38px;
border-radius: 10px;
border: 1px solid ${t.mainFontColor};
background:  rgba(234, 234, 234, 0.32);
margin-left:8px;

::placeholder {
color:  rgba(0, 0, 0, 0.40);
font-size: 20px;
justify-content: center;
line-height: calc(24/20);
}
`,d=n.label`
margin-left:12px;
color: ${t.mainFontColor};
font-family: Inter;
font-size: 20px;
line-height: calc(24/20); 

`,T=n.input`
height: 31px;
width:59px;
padding: 3px 6px 4px 14px;
justify-content: flex-end;
align-items: flex-start;
gap: 12px;
border-radius: 10px;
border: 1px solid  ${t.mainFontColor};
background:  rgba(234, 234, 234, 0.32);
margin-left:8px;
margin-right: 8px;

::placeholder {
color:  rgba(0, 0, 0, 0.40);
font-size: 20px;
line-height: calc(24/20);
justify-content: center;
}
`,v=n.label`
margin-left:12px;
color: ${t.mainFontColor};
font-family: Inter;
font-size: 20px;
line-height: calc(24/20); 
margin-top: 16px;
`,A=()=>{const{register:e,handleSubmit:i,setValue:x}=a(),r=s=>{console.log("Отчет создан:",s)};return o.jsxs(z,{onSubmit:i(r),children:[o.jsx(S,{children:"Звіт:"}),o.jsxs(I,{children:[o.jsxs(d,{children:["З",o.jsx(c,{...e("Дата"),placeholder:"Дата"})]}),o.jsxs(d,{children:["по:",o.jsx(c,{...e("Дата"),placeholder:"Дата"})]})]}),o.jsx("br",{}),o.jsxs(v,{children:["За",o.jsx(T,{...e("З"),placeholder:"З"}),o.jsx("span",{children:"квартал "})]}),o.jsx("br",{}),o.jsx(k,{type:"submit",children:"Сформувати"})]})},V=()=>{const e=m(b);return console.log("User",e),o.jsxs(o.Fragment,{children:[o.jsx(u,{children:"Кабінет"}),o.jsx(l,{children:"Номер договору"}),o.jsx(p,{children:e.contractNumber}),o.jsx(l,{children:"Ідентифікаційний номер (код ЄДРПОУ)"}),o.jsx(p,{children:e.taxCode}),o.jsx(l,{children:"Остання оплата"}),o.jsx(p,{children:e.lastPay}),o.jsx(l,{children:"Наступна оплата"}),o.jsx(p,{children:e.dateOfAccess}),o.jsxs(f,{children:[o.jsx(y,{}),o.jsx(w,{})]}),o.jsx(A,{})]})};export{V as default};
