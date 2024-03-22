import{n,f as t,g as a,j as o,h,i as g}from"./index-61800ec8.js";import"./Statistic.styled-975d075e.js";n.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${t.mainFontColor};
`;const m=n.h2`
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
`,u=n.div`
  display: flex;
  gap: 135px;
  position: relative;
`,b=n.form`
  margin-left: 24px;
`,f=n.input`
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
`,j=n.input`
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
`,x=n.button`
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
`,d=n.h3`
  color: ${t.mainFontColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
  margin-top: 48px;
  margin-left: 24px;
`,F=n.input`
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
`,C=()=>{const{register:e,handleSubmit:s,setValue:c}=a(),l=p=>{console.log("Отправлено:",p)};return o.jsxs(b,{onSubmit:s(l),children:[o.jsx(d,{children:"Написати адміністратору:"}),o.jsx(f,{...e("Тема"),placeholder:"Тема"}),o.jsx("br",{}),o.jsx(j,{...e("Текст"),placeholder:"Текст"}),o.jsx("br",{}),o.jsx(x,{type:"submit",children:"Відправити"})]})},$=()=>{const{register:e,handleSubmit:s,setValue:c}=a(),l=p=>{console.log("Запрос отправлен:",p)};return o.jsxs("form",{onSubmit:s(l),children:[o.jsx(d,{children:"Запросити акт звірки:"}),o.jsx(F,{...e("Акт")}),o.jsx(x,{type:"submit",children:"Запросити"})]})},y=()=>{const e=h(g);return o.jsxs(o.Fragment,{children:[o.jsx(m,{children:"Кабінет"}),o.jsx(i,{children:"Номер договору"}),o.jsx(r,{children:e.contractNumber}),o.jsx(i,{children:"Ідентифікаційний номер (код ЄДРПОУ)"}),o.jsx(r,{children:e.taxCode}),o.jsx(i,{children:"Остання оплата"}),o.jsx(r,{children:e.lastPay}),o.jsx(i,{children:"Наступна оплата"}),o.jsx(r,{children:e.dateOfAccess}),o.jsxs(u,{children:[o.jsx(C,{}),o.jsx($,{})]})]})};export{y as default};
