import{n as r,f as o,g as z,h as J,i as R,r as s,j as e,B as D,M as x,k as $,l as K,m as X,o as Z,R as _,E as ee,p as te,q as oe,s as re,t as ne,v as se,w as ae}from"./index-7ba48e64.js";import"./Statistic.styled-ddf76c3c.js";r.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${o.mainFontColor};
`;const ie=r.h2`
  color: ${o.mainFontColor};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  margin-top: 24px;
  margin-bottom: 24px;
`,I=r.h2`
  color: ${o.mainFontColor};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  margin-top: 18px;
`,O=r.p`
  color: ${o.mainFontColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
  margin-top: 11px;
`,H=r.div`
  display: flex;
  gap: 135px;
  align-items: flex-start;
`,le=r.div`
  display: block;
`,de=r.form`
  margin-left: 24px;
`,ce=r.input`
  display: flex;
  width: 421px;
  height: 45px;
  padding: 8px;
  margin-top: 25px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 0.5px solid ${o.mainFontColor};
  background: rgba(234, 234, 234, 0.32);

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 20px;
  }

  &:active {
    border: none;
    outline: ${t=>t.isError?`2px solid ${o.errorColor}`:`2px solid ${o.accentHoverColor}`};
  }

  &:focus {
    border: none;
    outline: ${t=>t.isError?`2px solid ${o.errorColor}`:`2px solid ${o.accentHoverColor}`};
  }
`;r.input`
  width: 421px;
  height: 145px;
  padding: 8px;
  gap: 8px;
  border-radius: 10px;
  border: 0.5px solid ${o.mainFontColor};
  background: rgba(234, 234, 234, 0.32);
  position: relative;

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 20px;
    position: absolute;
    top: 8px;
    left: 8px;
  }
`;r.button`
  display: flex;
  width: 197px;
  height: 48px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 1px solid ${o.mainFontColor};
  background: ${o.accentHoverColor};
  color: ${o.mainFontColor};
  font-size: 20px;
  margin-top: 25px;
`;const N=r.h3`
  color: ${o.mainFontColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
  margin-top: 48px;
  margin-left: 24px;
`;r.input`
  display: flex;
  width: 422px;
  height: 213px;
  padding: 8px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 10px;
  border: 0.5px solid ${o.mainFontColor};
  background: rgba(234, 234, 234, 0.32);
  margin-top: 25px;
`;const P=r.textarea`
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

  &:active {
    border: none;
    outline: ${t=>t.isError?`2px solid ${o.errorColor}`:`2px solid ${o.accentHoverColor}`};
  }

  &:focus {
    border: none;
    outline: ${t=>t.isError?`2px solid ${o.errorColor}`:`2px solid ${o.accentHoverColor}`};
  }
`,pe=({user:t})=>{const{control:l,register:a,handleSubmit:S,setValue:h}=z(),[u,{isLoading:E}]=J(),g=R({control:l,name:"subject",defaultValue:""}).trim(),w=R({control:l,name:"text",defaultValue:""}).trim(),m=c=>{const j={...c,id:t.id};u(j).unwrap().then(()=>{d("sendmail"),h("text",""),h("subject","")}).catch(M=>{var y;let C=(y=M.data)==null?void 0:y.message;b(C),d("error")}),console.log("Отправлено:",j)},[p,f]=s.useState(null),[v,b]=s.useState(""),d=c=>{console.log("modalContent",c),f(c)},i=()=>{document.body.classList.remove("modal-open"),f(null)};return e.jsxs(e.Fragment,{children:[e.jsxs(de,{onSubmit:S(m),children:[e.jsx(N,{children:"Написати адміністратору:"}),e.jsx(ce,{...a("subject"),placeholder:"Тема",maxLength:"100"}),e.jsx(P,{...a("text"),placeholder:"Текст",marginTop:"25px",height:"145px"}),e.jsx(D,{type:"submit",padding:"8px 44px",height:"48px",text:"Відправити",showIcon:!1,margintop:"24px",disabled:!g||!w})]}),p==="sendmail"&&e.jsxs(x,{width:"520px",padding:"44px 24px",onClose:i,showCloseButton:!0,flexDirection:"column",children:[e.jsx($,{children:"Лист адміністратору відправлено"}),e.jsx(D,{type:"button",padding:"8px 44px",height:"48px",text:"Ок",showIcon:!1,margintop:"24px",onClick:i})]}),p==="error"&&e.jsx(x,{width:"520px",padding:"24px",onClose:i,showCloseButton:!0,children:e.jsxs($,{children:[" ",v]})})]})},xe=({user:t})=>{const{control:l,register:a,handleSubmit:S,setValue:h}=z(),[u,{isLoading:E}]=K(),g=R({control:l,name:"actText",defaultValue:""}).trim(),w=i=>{const c={...i,id:t.id};u(c).unwrap().then(()=>{b("sendact"),h("actText","")}).catch(j=>{var C;let M=(C=j.data)==null?void 0:C.message;v(M),b("error")})},[m,p]=s.useState(null),[f,v]=s.useState(""),b=i=>{p(i)},d=()=>{document.body.classList.remove("modal-open"),p(null)};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onSubmit:S(w),children:[e.jsx(N,{children:"Запросити акт звірки:"}),e.jsx(P,{type:"text",placeholder:"Текст для запиту (період, примітки, тощо)",...a("actText")}),e.jsx(D,{type:"submit",padding:"8px 44px",height:"48px",text:"Запросити",showIcon:!1,margintop:"24px",disabled:!g})]}),m==="sendact"&&e.jsxs(x,{width:"520px",padding:"44px 24px",onClose:d,showCloseButton:!0,flexDirection:"column",children:[e.jsx($,{children:"Запрос на акт звірки відправлено"}),e.jsx(D,{type:"button",padding:"8px 44px",height:"48px",text:"Ок",showIcon:!1,margintop:"24px",onClick:d})]}),m==="error"&&e.jsx(x,{width:"520px",padding:"24px",onClose:d,showCloseButton:!0,children:e.jsxs($,{children:[" ",f]})})]})},he=({user:t,userpage:l})=>{const[a,S]=s.useState([]),[h,u]=s.useState({}),{id:E}=X(),g=l?t.id:E,[w,m]=s.useState("date"),p=n=>{m(n)},[f,{isLoading:v}]=Z(),{control:b,register:d,handleSubmit:i,formState:{errors:c,isValid:j,dirtyFields:M},setError:C,getValues:y,reset:W}=z({mode:"onChange"}),Y=n=>{let L;if(w==="date")L={dateOfStart:n.dateOfStart,dateOfEnd:n.dateOfEnd,userId:g},u({...n,quarterDate:"",quarterYearDate:""});else{const{formattedStartDate:F,formattedEndDate:B}=ne(parseInt(n.quarterDate),parseInt(n.quarterYearDate));u({...n,dateOfStart:"",dateOfEnd:""}),L={dateOfStart:F,dateOfEnd:B,userId:g}}f(L).unwrap().then(F=>{S(F),k("successReport")}).catch(F=>{var q;let B=(q=F.data)==null?void 0:q.message;G(B),k("error")})},[U,V]=s.useState(null),[Q,G]=s.useState(""),k=n=>{document.body.classList.add("modal-open"),V(n)},T=()=>{document.body.classList.remove("modal-open"),V(null)},A=s.useRef();return e.jsxs(e.Fragment,{children:[e.jsx(_,{titleText:l?"Звіт":void 0,handleSubmit:i(Y),register:d,errors:c,dirtyFields:M,isValid:j,setError:C,control:b,getValues:y,onSelectedOptionChange:p,reset:W}),U==="successReport"&&l&&e.jsx(e.Fragment,{children:(a==null?void 0:a.length)===0?e.jsx(x,{width:"30vw",padding:"44px 64px 44px 24px",onClose:T,showCloseButton:!0,flexDirection:"row",children:e.jsx(ee,{children:"Bикористаних Об’єктів суміжних прав та Об’єктів авторского права за обраний період немає"})}):e.jsx(x,{height:"90vh",onClose:T,showCloseButton:!0,flexDirection:"row",children:e.jsxs(te,{children:[e.jsx(oe,{targetComponent:A}),e.jsx(re,{data:a,date:h,user:t,ref:A})]})})}),U==="error"&&e.jsx(x,{width:"520px",padding:"24px",onClose:T,showCloseButton:!0,children:e.jsxs($,{children:[" ",Q]})})]})},me=()=>{const t=se(ae);return console.log("User",t),e.jsxs(e.Fragment,{children:[e.jsx(ie,{children:"Кабінет"}),e.jsxs(H,{children:[e.jsxs(le,{children:[e.jsx(I,{children:"Номер договору"}),e.jsx(O,{children:t.contractNumberDoc?t.contractNumberDoc:t.contractNumber}),e.jsx(I,{children:"Ідентифікаційний номер (код ЄДРПОУ)"}),e.jsx(O,{children:t.taxCode}),e.jsx(I,{children:"Надання доступу до"}),e.jsx(O,{children:t.dateOfAccess})]}),e.jsx(he,{user:t,userpage:!0})]}),e.jsxs(H,{children:[e.jsx(pe,{user:t}),e.jsx(xe,{user:t})]})]})};export{me as default};
