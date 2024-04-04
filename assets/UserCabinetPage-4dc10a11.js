import{n,f as o,g as z,h as P,i as R,r,j as e,B as E,M as b,k as L,l as W,m as Y,R as N,o as Q,p as G,q as J,s as K,t as X,v as Z}from"./index-d3558ec8.js";import"./Statistic.styled-c009cfaf.js";n.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${o.mainFontColor};
`;const _=n.h2`
  color: ${o.mainFontColor};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  margin-top: 24px;
  margin-bottom: 24px;
`,D=n.h2`
  color: ${o.mainFontColor};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  margin-top: 18px;
`,T=n.p`
  color: ${o.mainFontColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
  margin-top: 11px;
`,A=n.div`
  display: flex;
  gap: 135px;
  align-items: flex-start;
`,ee=n.div`
  display: block;
`,te=n.form`
  margin-left: 24px;
`,oe=n.input`
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
`;n.input`
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
`;n.button`
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
`;const U=n.h3`
  color: ${o.mainFontColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
  margin-top: 48px;
  margin-left: 24px;
`;n.input`
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
`;const V=n.textarea`
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
`,ne=({user:t})=>{const{control:x,register:c,handleSubmit:j,setValue:h}=z(),[u,{isLoading:$}]=P(),C=R({control:x,name:"subject",defaultValue:""}).trim(),S=R({control:x,name:"text",defaultValue:""}).trim(),p=d=>{const m={...d,id:t.id};u(m).unwrap().then(()=>{l("sendmail"),h("text",""),h("subject","")}).catch(w=>{var v;let f=(v=w.data)==null?void 0:v.message;M(f),l("error")}),console.log("Отправлено:",m)},[i,g]=r.useState(null),[y,M]=r.useState(""),l=d=>{console.log("modalContent",d),g(d)},a=()=>{document.body.classList.remove("modal-open"),g(null)};return e.jsxs(e.Fragment,{children:[e.jsxs(te,{onSubmit:j(p),children:[e.jsx(U,{children:"Написати адміністратору:"}),e.jsx(oe,{...c("subject"),placeholder:"Тема",maxLength:"100"}),e.jsx(V,{...c("text"),placeholder:"Текст",marginTop:"25px",height:"145px"}),e.jsx(E,{type:"submit",padding:"8px 44px",height:"48px",text:"Відправити",showIcon:!1,margintop:"24px",disabled:!C||!S})]}),i==="sendmail"&&e.jsxs(b,{width:"520px",padding:"44px 24px",onClose:a,showCloseButton:!0,flexDirection:"column",children:[e.jsx(L,{children:"Лист адміністратору відправлено"}),e.jsx(E,{type:"button",padding:"8px 44px",height:"48px",text:"Ок",showIcon:!1,margintop:"24px",onClick:a})]}),i==="error"&&e.jsx(b,{width:"520px",padding:"24px",onClose:a,showCloseButton:!0,children:e.jsxs(L,{children:[" ",y]})})]})},se=({user:t})=>{const{control:x,register:c,handleSubmit:j,setValue:h}=z(),[u,{isLoading:$}]=W(),C=R({control:x,name:"actText",defaultValue:""}).trim(),S=a=>{const d={...a,id:t.id};u(d).unwrap().then(()=>{M("sendact"),h("actText","")}).catch(m=>{var f;let w=(f=m.data)==null?void 0:f.message;y(w),M("error")})},[p,i]=r.useState(null),[g,y]=r.useState(""),M=a=>{i(a)},l=()=>{document.body.classList.remove("modal-open"),i(null)};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onSubmit:j(S),children:[e.jsx(U,{children:"Запросити акт звірки:"}),e.jsx(V,{type:"text",placeholder:"Текст для запиту (період, примітки, тощо)",...c("actText")}),e.jsx(E,{type:"submit",padding:"8px 44px",height:"48px",text:"Запросити",showIcon:!1,margintop:"24px",disabled:!C})]}),p==="sendact"&&e.jsxs(b,{width:"520px",padding:"44px 24px",onClose:l,showCloseButton:!0,flexDirection:"column",children:[e.jsx(L,{children:"Запрос на акт звірки відправлено"}),e.jsx(E,{type:"button",padding:"8px 44px",height:"48px",text:"Ок",showIcon:!1,margintop:"24px",onClick:l})]}),p==="error"&&e.jsx(b,{width:"520px",padding:"24px",onClose:l,showCloseButton:!0,children:e.jsxs(L,{children:[" ",g]})})]})},re=({user:t})=>{const[x,c]=r.useState({}),[j,h]=r.useState([]),[u,$]=r.useState(null),[C,S]=r.useState(""),p=s=>{document.body.classList.add("modal-open"),$(s)},i=()=>{document.body.classList.remove("modal-open"),$(null)},[g,{isLoading:y}]=Y(),{control:M,register:l,handleSubmit:a,formState:{errors:d,isValid:m,dirtyFields:w}}=z({mode:"onChange"}),f=s=>{let I;if(v==="date")I={dateOfStart:s.dateOfStart,dateOfEnd:s.dateOfEnd,userId:t.id},c({...s,quarterDate:"",quarterYearDate:""});else{const{formattedStartDate:F,formattedEndDate:O}=K(parseInt(s.quarterDate),parseInt(s.quarterYearDate));c({...s,dateOfStart:"",dateOfEnd:""}),I={dateOfStart:F,dateOfEnd:O,userId:t.id}}g(I).unwrap().then(F=>{h(F),p("successReport")}).catch(F=>{var k;let O=(k=F.data)==null?void 0:k.message;S(O),p("error")})},[v,q]=r.useState("date"),H=s=>{q(s)},B=r.useRef();return e.jsxs(e.Fragment,{children:[e.jsx(N,{titleText:"Звіт",handleSubmit:a(f),register:l,errors:d,dirtyFields:w,isValid:m,onSelectedOptionChange:H}),u==="successReport"&&e.jsx(e.Fragment,{children:e.jsx(b,{height:"90vh",onClose:i,showCloseButton:!0,flexDirection:"row",children:e.jsxs(Q,{children:[e.jsx(G,{targetComponent:B}),e.jsx(J,{data:j,date:x,user:t,ref:B})]})})}),u==="error"&&e.jsx(b,{width:"520px",padding:"24px",onClose:i,showCloseButton:!0,children:e.jsxs(TextModal,{children:[" ",C]})})]})},le=()=>{const t=X(Z);return e.jsxs(e.Fragment,{children:[e.jsx(_,{children:"Кабінет"}),e.jsxs(A,{children:[e.jsxs(ee,{children:[e.jsx(D,{children:"Номер договору"}),e.jsx(T,{children:t.contractNumber}),e.jsx(D,{children:"Ідентифікаційний номер (код ЄДРПОУ)"}),e.jsx(T,{children:t.taxCode}),e.jsx(D,{children:"Остання оплата"}),e.jsx(T,{children:t.lastPay}),e.jsx(D,{children:"Наступна оплата"}),e.jsx(T,{children:t.dateOfAccess})]}),e.jsx(re,{user:t})]}),e.jsxs(A,{children:[e.jsx(ne,{user:t}),e.jsx(se,{user:t})]})]})};export{le as default};
