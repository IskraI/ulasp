import{n,f as t,g as l,j as o,h as x,i as d}from"./index-144fa81e.js";import"./Statistic.styled-7f877e03.js";n.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${t.mainFontColor};
`;const c=n.h2`
  color: ${t.mainFontColor};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  margin-top: 24px;
  margin-bottom: 24px;
`,i=n.h2`
  color: ${t.mainFontColor};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  margin-top: 18px;
`,r=n.p`
  color: ${t.mainFontColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
  margin-top: 11px;
`,h=n.div`
  display: flex;
  justify-content: space-around;
  gap: 135px;
  position: relative;
`,g=n.form`
  margin-left: 24px;
`,m=n.input`
  display: flex;
  width: 421px;
  height: 45px;
  padding: 8px;
  margin-top: 25px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 0.5px solid ${t.mainFontColor};
  background: rgba(234, 234, 234, 0.32);

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 20px;
  }
`,u=n.input`
  width: 421px;
  height: 145px;
  padding: 8px;
  gap: 8px;
  border-radius: 10px;
  border: 0.5px solid ${t.mainFontColor};
  background: rgba(234, 234, 234, 0.32);
  position: relative;

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 20px;
    position: absolute;
    top: 8px;
    left: 8px;
  }
`,b=n.button`
  display: flex;
  width: 197px;
  height: 48px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 1px solid ${t.mainFontColor};
  background: ${t.accentHoverColor};
  color: ${t.mainFontColor};
  font-size: 20px;
  margin-top: 25px;
`,f=n.h3`
  color: ${t.mainFontColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
  /* margin-top: 48px; */
  margin-left: 24px;
`;n.input`
  display: flex;
  width: 422px;
  height: 213px;
  padding: 8px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 10px;
  border: 0.5px solid ${t.mainFontColor};
  background: rgba(234, 234, 234, 0.32);
  margin-top: 25px;
`;const j=()=>{const{register:e,handleSubmit:s,setValue:F}=l(),p=a=>{console.log("Отправлено:",a)};return o.jsxs(g,{onSubmit:s(p),children:[o.jsx(f,{children:"Написати адміністратору:"}),o.jsx(m,{...e("Тема"),placeholder:"Тема"}),o.jsx("br",{}),o.jsx(u,{...e("Текст"),placeholder:"Текст"}),o.jsx("br",{}),o.jsx(b,{type:"submit",children:"Відправити"})]})},w=()=>{const e=x(d);return o.jsxs(o.Fragment,{children:[o.jsx(c,{children:"Кабінет"}),o.jsxs(h,{children:[o.jsxs("div",{children:[o.jsx(i,{children:"Номер договору"}),o.jsx(r,{children:e.contractNumber}),o.jsx(i,{children:"Ідентифікаційний номер (код ЄДРПОУ)"}),o.jsx(r,{children:e.taxCode}),o.jsx(i,{children:"Остання оплата"}),o.jsx(r,{children:e.lastPay}),o.jsx(i,{children:"Наступна оплата"}),o.jsx(r,{children:e.dateOfAccess})]}),o.jsx(j,{})]})]})};export{w as default};
