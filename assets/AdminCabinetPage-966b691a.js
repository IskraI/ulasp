import{n as e,c as n,j as t,r as s,u as S}from"./index-ffb0a480.js";const C=e.div`
display:flex;
gap: 8px;
margin-left: 111px;
margin-top:24px;
`,i=e.p`
display:flex;
padding: 8px;
justify-content: center;
align-items: center;
border-radius: 10px;
background: ${n.primaryColor};
color:   ${n.mainFontColor};
text-align: center;
font-size: 22px;
line-height: calc(26.4 / 22); 
`,F=()=>t.jsxs(C,{children:[t.jsx(i,{children:"Нових користувачів"}),t.jsxs(i,{children:["+ ","Користувачів за вересень"]}),t.jsx(i,{children:"Доданих пісень"}),t.jsx(i,{children:"Онлайн користувачів"})]}),$=e.div`
  display: flex;
`,T=e.input`
  display: flex;
  width: 219px;
  height: 40px;
  padding: 0px 8px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid ${n.mainFontColor};
  background-color: transparent;
  margin-right: 64px;
  margin-left: auto;
  margin-top: 29px;
  ::placeholder {
    text-align: right;
    color: rgba(0, 0, 0, 0.4);
  }
`,z=e.table`
  table-layout: fixed;
  /* width: 100%; */
  border-collapse: collapse;
  margin-left: 127px;

  tbody {
    tr:nth-of-type(odd) {
      background-color: rgba(234, 234, 234, 0.32);
    }
  }

  thead th:nth-of-type(1) {
    width: 30%;
  }

  thead th:nth-of-type(2) {
    width: 20%;
  }

  thead th:nth-of-type(3) {
    width: 15%;
  }

  thead th:nth-of-type(4) {
    width: 15%;
  }

  thead th:nth-of-type(5) {
    width: 20%;
  }

  tbody td:nth-of-type(1) {
    width: 30%;
  }

  tbody td:nth-of-type(2) {
    width: 20%;
  }

  tbody td:nth-of-type(3) {
    width: 15%;
  }

  thead td:nth-of-type(4) {
    width: 15%;
  }

  tbody td:nth-of-type(5) {
    width: 20%;
  }
`,r=e.th`
  color: ${n.mainFontColor};
  font-size: 16px;
  font-weight: 600;
  margin-top: 23px;
  text-align: left;
    /* flex: 1; */
`,p=e.tr`
  display: flex;
  /* flex: 1; */
  /* gap: 129px; */
  height: 54px;
  border-radius: 10px;
  display: flex;
  align-items: center;
padding-left: 16px;
`,a=e.td`
text-align: left;

 /* flex: 1; */
  // Здесь вы можете определить стили для ячеек таблицы
         
 
`,L=e.h3`
  color: ${n.mainFontColor};
  font-size: 22px;
  margin-top: 43px;
  /* margin-left: 111px; */
  line-height: calc(26.4 / 22);
  font-weight: 400;
  line-height: 1.28;
`,k=e.p`
  color: ${n.mainFontColor};
  font-size: 24px;
  font-weight: 500;
`,I=e.p`
  color: ${n.mainFontColor};
  font-size: 24px;
  font-weight: 500;
`,N=e.button`
  color: ${n.mainFontColor};
 font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
background-color: transparent;
 outline: none;
  border: none;

`,R=()=>{const[l,f]=s.useState(""),[D,d]=s.useState(!1),[g,x]=s.useState(!1),{data:h,isLoading:m}=S();return console.log(h),s.useEffect(()=>{l.trim()!==""?(d(!0),d(!1),x(!1)):(d(!1),x(!1))},[l]),t.jsxs(t.Fragment,{children:[t.jsxs($,{children:[t.jsx(L,{children:"Чекають на підтвердження (посилання):"}),t.jsx(T,{type:"text",placeholder:"Пошук користувачів",value:l,onChange:o=>f(o.target.value)})]}),m?t.jsx(k,{children:"Завантаження..."}):h.length===0&&g?t.jsx(I,{children:"Результати пошуку: не знайдено"}):t.jsxs(z,{children:[t.jsx("thead",{children:t.jsxs(p,{children:[t.jsx(r,{children:"Ім’я"}),t.jsx(r,{children:"№ договору"}),t.jsx(r,{children:"Дата заявки"}),t.jsx(r,{children:"Детальніше"}),t.jsx(r,{})]})}),t.jsx("tbody",{children:h.map((o,j)=>{const c=new Date(o.createdAt),y=c.getFullYear(),u=String(c.getMonth()+1).padStart(2,"0"),b=String(c.getDate()).padStart(2,"0"),w=`${y}/${u}/${b}`;return t.jsxs(p,{children:[t.jsxs(a,{children:[o.firstName," ",o.lastName]}),t.jsx(a,{children:o.contractNumber}),t.jsx(a,{children:w}),t.jsx(a,{children:t.jsx(N,{children:"картка"})})]},j)})})]})]})},v=e.h2`
 color:   ${n.mainFontColor};
font-size: 24px;
font-weight: 500;

`,U=()=>t.jsxs(t.Fragment,{children:[t.jsx(v,{children:"Кабінет адміністратора"}),t.jsx(F,{}),t.jsx(R,{}),t.jsx(t.Fragment,{})]});export{U as default};
