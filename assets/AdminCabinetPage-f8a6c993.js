import{n as e,c as a,j as t,r as s}from"./index-18c1dc7c.js";const j=e.div`
display:flex;
gap: 8px;
margin-left: 111px;
margin-top:24px;
`,r=e.p`
display:flex;
padding: 8px;
justify-content: center;
align-items: center;
border-radius: 10px;
background: ${a.primaryColor};
color:   ${a.mainFontColor};
text-align: center;
font-size: 22px;
line-height: calc(26.4 / 22); 
`,y=()=>t.jsxs(j,{children:[t.jsx(r,{children:"Нових користувачів"}),t.jsxs(r,{children:["+ ","Користувачів за вересень"]}),t.jsx(r,{children:"Доданих пісень"}),t.jsx(r,{children:"Онлайн користувачів"})]}),b=e.div`
  display: flex;
`,C=e.input`
  display: flex;
  width: 219px;
  height: 40px;
  padding: 0px 8px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid ${a.mainFontColor};
  background-color: transparent;
  margin-right: 64px;
  margin-left: auto;
  margin-top: 29px;
  ::placeholder {
    text-align: right;
    color: rgba(0, 0, 0, 0.4);
  }
`,w=e.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  margin-left: 127px;

  tbody {
    tr:nth-of-type(odd) {
      background-color: rgba(234, 234, 234, 0.32);
    }
  }

  thead th:nth-of-type(1) {
    width: 27%;
  }

  thead th:nth-of-type(2) {
    width: 18%;
  }

  thead th:nth-of-type(3) {
    width: 18%;
  }

  thead th:nth-of-type(4) {
    width: 16%;
  }

  thead th:nth-of-type(5) {
    width: 21%;
  }
`,o=e.th`
  color: ${a.mainFontColor};
  font-size: 16px;
  font-weight: 600;
  margin-top: 23px;
  flex: 1;
`,f=e.tr`
  display: flex;
  flex: 1;
  /* gap: 129px; */
  height: 54px;
  border-radius: 10px;
`,i=e.td`
 flex: 1;
  // Здесь вы можете определить стили для ячеек таблицы
`,T=e.h3`
  color: ${a.mainFontColor};
  font-size: 22px;
  margin-top: 43px;
  margin-left: 111px;
  line-height: calc(26.4 / 22);
  font-weight: 400;
  line-height: 1.28;
`,S=e.p`
  color: ${a.mainFontColor};
  font-size: 24px;
  font-weight: 500;
`,$=e.p`
  color: ${a.mainFontColor};
  font-size: 24px;
  font-weight: 500;
`,d={_id:{$oid:"653d71507a484cf7a52cb57a"},firstName:"Про",lastName:"Про",taxCode:"$2b$10$8uCq8.7EazWa4kIHllsDVuiCNO9QrSui.koMET3ycZ0oi2umWrtBy",dayOfBirthday:"10.10.2010",contractNumber:"TEST234459",accessToken:"",refreshToken:"",avatarURL:null,userFop:!0,telNumber:"+380501413134",email:"iw2@ua.com",contactFace:"Юзер4 Юзеров4",taxCodeContactFace:"9308797531",telNumberContactFace:"+380303154404",emailContactFace:"ia4@ua.com",status:"false",dateOfAccess:"0",lastPay:"10.10.2020",quantityPlaylists:0,quantitySongs:0,kind:"fop",createdAt:{$date:"2023-10-28T20:38:40.906Z"},updatedAt:{$date:"2023-10-28T20:38:40.906Z"}},F=()=>{const[l,g]=s.useState(""),[h,x]=s.useState([d]),[m,c]=s.useState(!1),[u,p]=s.useState(!1);return s.useEffect(()=>{l.trim()!==""?(c(!0),x([d]),c(!1),p(!1)):(x([d]),c(!1),p(!1))},[l]),t.jsxs(t.Fragment,{children:[t.jsxs(b,{children:[t.jsx(T,{children:"Чекають на підтвердження (посилання):"}),t.jsx(C,{type:"text",placeholder:"Пошук користувачів",value:l,onChange:n=>g(n.target.value)})]}),m?t.jsx(S,{children:"Завантаження..."}):h.length===0&&u?t.jsx($,{children:"Результати пошуку: не знайдено"}):t.jsxs(w,{children:[t.jsx("thead",{children:t.jsxs(f,{children:[t.jsx(o,{style:{marginRight:"243px"},children:"Ім’я"}),t.jsx(o,{style:{marginRight:"94px"},children:"№ договору"}),t.jsx(o,{style:{marginRight:"102px"},children:"Дата заявки"}),t.jsx(o,{children:"Детальніше"}),t.jsx(o,{})]})}),t.jsx("tbody",{children:h.map(n=>t.jsxs(f,{children:[t.jsxs(i,{children:[n.firstName," ",n.lastName]}),t.jsx(i,{children:n.contractNumber}),t.jsx(i,{children:n.createdAt.$date}),t.jsx(i,{children:t.jsx("button",{children:"картка"})})]},n._id.$oid))})]})]})},N=e.h2`
 color:   ${a.mainFontColor};
font-size: 24px;
font-weight: 500;

`,k=()=>t.jsxs(t.Fragment,{children:[t.jsx(N,{children:"Кабінет адміністратора"}),t.jsx(y,{}),t.jsx(F,{}),t.jsx(t.Fragment,{})]});export{k as default};
