import{n as o,f as n,g as L,h as V,r,j as e,B as D,M as j,i as T,k as W,l as Y,R as H,m as N,o as Q,p as G,q as J,s as K,t as X}from"./index-bc9ec484.js";import"./Statistic.styled-9bbf508e.js";o.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${n.mainFontColor};
`;const Z=o.h2`
  color: ${n.mainFontColor};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  margin-top: 24px;
  margin-bottom: 24px;
`,F=o.h2`
  color: ${n.mainFontColor};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  margin-top: 18px;
`,y=o.p`
  color: ${n.mainFontColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
  margin-top: 11px;
`,z=o.div`
  display: flex;
  gap: 135px;
  align-items: flex-start;
`,_=o.div`
  display: block;
`,ee=o.form`
  margin-left: 24px;
`,te=o.input`
  display: flex;
  width: 421px;
  height: 45px;
  padding: 8px;
  margin-top: 25px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 0.5px solid ${n.mainFontColor};
  background: rgba(234, 234, 234, 0.32);

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 20px;
  }
`;o.input`
  width: 421px;
  height: 145px;
  padding: 8px;
  gap: 8px;
  border-radius: 10px;
  border: 0.5px solid ${n.mainFontColor};
  background: rgba(234, 234, 234, 0.32);
  position: relative;

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 20px;
    position: absolute;
    top: 8px;
    left: 8px;
  }
`;o.button`
  display: flex;
  width: 197px;
  height: 48px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 1px solid ${n.mainFontColor};
  background: ${n.accentHoverColor};
  color: ${n.mainFontColor};
  font-size: 20px;
  margin-top: 25px;
`;const B=o.h3`
  color: ${n.mainFontColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
  margin-top: 48px;
  margin-left: 24px;
`;o.input`
  display: flex;
  width: 422px;
  height: 213px;
  padding: 8px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 10px;
  border: 0.5px solid ${n.mainFontColor};
  background: rgba(234, 234, 234, 0.32);
  margin-top: 25px;
`;const E=o.textarea`
  background-color: rgba(234, 234, 234, 0.32);
  width: 422px;
  height: ${t=>t.height?t.height:"213px"};
  padding: 8px;
  display: flex;
  align-items: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  border-radius: 10px;
  outline: none;
  border: 0.25px solid rgba(23, 22, 28, 0.5);
  resize: none;
  margin-top: ${t=>t.marginTop?t.marginTop:"25px"};
  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 20px;
    position: absolute;
    top: 8px;
    left: 8px;
  }
`,oe=({user:t})=>{const{register:x,handleSubmit:h,setValue:v}=L(),[b,{isLoading:w}]=V(),g=i=>{const f={...i,id:t.id};b(f).unwrap().then(()=>{p("sendmail")}).catch(S=>{var c;let C=(c=S.data)==null?void 0:c.message;u(C),p("error")}),console.log("Отправлено:",f)},[l,d]=r.useState(null),[m,u]=r.useState(""),p=i=>{d(i)},a=()=>{document.body.classList.remove("modal-open"),d(null)};return e.jsxs(e.Fragment,{children:[e.jsxs(ee,{onSubmit:h(g),children:[e.jsx(B,{children:"Написати адміністратору:"}),e.jsx(te,{...x("subject"),placeholder:"Тема"}),e.jsx(E,{...x("text"),placeholder:"Текст",marginTop:"25px",height:"145px"}),e.jsx(D,{type:"submit",padding:"8px 44px",height:"48px",text:"Відправити",showIcon:!1,margintop:"24px"})]}),l==="sendmail"&&e.jsxs(j,{width:"520px",padding:"44px 24px",onClose:a,showCloseButton:!0,flexDirection:"column",children:[e.jsx(T,{children:"Лист адмыныстратору відправлено"}),e.jsx(D,{type:"button",padding:"8px 44px",height:"48px",text:"Ок",showIcon:!1,margintop:"24px",onClick:a})]}),l==="error"&&e.jsx(j,{width:"520px",padding:"24px",onClose:a,showCloseButton:!0,children:e.jsxs(T,{children:[" ",m]})})]})},ne=({user:t})=>{const{register:x,handleSubmit:h,setValue:v}=L(),[b,{isLoading:w}]=W(),g=i=>{const f={...i,id:t.id};b(f).unwrap().then(()=>{p("sendact")}).catch(S=>{var c;let C=(c=S.data)==null?void 0:c.message;u(C),p("error")})},[l,d]=r.useState(null),[m,u]=r.useState(""),p=i=>{d(i)},a=()=>{document.body.classList.remove("modal-open"),d(null)};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onSubmit:h(g),children:[e.jsx(B,{children:"Запросити акт звірки:"}),e.jsx(E,{type:"text",placeholder:"Текст для запиту (період, примітки, тощо)",...x("actText")}),e.jsx(D,{type:"submit",padding:"8px 44px",height:"48px",text:"Запросити",showIcon:!1,margintop:"24px"})]}),l==="sendact"&&e.jsxs(j,{width:"520px",padding:"44px 24px",onClose:a,showCloseButton:!0,flexDirection:"column",children:[e.jsx(T,{children:"Запрос на акт звірки відправлено"}),e.jsx(D,{type:"button",padding:"8px 44px",height:"48px",text:"Ок",showIcon:!1,margintop:"24px",onClick:a})]}),l==="error"&&e.jsx(j,{width:"520px",padding:"24px",onClose:a,showCloseButton:!0,children:e.jsxs(T,{children:[" ",m]})})]})},se=({user:t})=>{const[x,h]=r.useState({}),[v,b]=r.useState([]),[w,g]=r.useState(null),[l,d]=r.useState(""),m=s=>{document.body.classList.add("modal-open"),g(s)},u=()=>{document.body.classList.remove("modal-open"),g(null)},[p,{isLoading:a}]=Y(),{control:i,register:f,handleSubmit:S,formState:{errors:C,isValid:c,dirtyFields:k}}=L({mode:"onChange"}),A=s=>{let $;if(U==="date")$={dateOfStart:s.dateOfStart,dateOfEnd:s.dateOfEnd,userId:t.id},h({...s,quarterDate:"",quarterYearDate:""});else{const{formattedStartDate:M,formattedEndDate:I}=J(parseInt(s.quarterDate),parseInt(s.quarterYearDate));h({...s,dateOfStart:"",dateOfEnd:""}),$={dateOfStart:M,dateOfEnd:I,userId:t.id}}p($).unwrap().then(M=>{b(M),m("successReport")}).catch(M=>{var R;let I=(R=M.data)==null?void 0:R.message;d(I),m("error")})},[U,q]=r.useState("date"),P=s=>{q(s)},O=r.useRef();return e.jsxs(e.Fragment,{children:[e.jsx(H,{titleText:"Звіт",handleSubmit:S(A),register:f,errors:C,dirtyFields:k,isValid:c,onSelectedOptionChange:P}),w==="successReport"&&e.jsx(e.Fragment,{children:e.jsx(j,{height:"90vh",onClose:u,showCloseButton:!0,flexDirection:"row",children:e.jsxs(N,{children:[e.jsx(Q,{targetComponent:O}),e.jsx(G,{data:v,date:x,user:t,ref:O})]})})}),w==="error"&&e.jsx(j,{width:"520px",padding:"24px",onClose:u,showCloseButton:!0,children:e.jsxs(TextModal,{children:[" ",l]})})]})},ie=()=>{const t=K(X);return e.jsxs(e.Fragment,{children:[e.jsx(Z,{children:"Кабінет"}),e.jsxs(z,{children:[e.jsxs(_,{children:[e.jsx(F,{children:"Номер договору"}),e.jsx(y,{children:t.contractNumber}),e.jsx(F,{children:"Ідентифікаційний номер (код ЄДРПОУ)"}),e.jsx(y,{children:t.taxCode}),e.jsx(F,{children:"Остання оплата"}),e.jsx(y,{children:t.lastPay}),e.jsx(F,{children:"Наступна оплата"}),e.jsx(y,{children:t.dateOfAccess})]}),e.jsx(se,{user:t})]}),e.jsxs(z,{children:[e.jsx(oe,{user:t}),e.jsx(ne,{user:t})]})]})};export{ie as default};
