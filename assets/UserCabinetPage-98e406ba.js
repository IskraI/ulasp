import{n as o,f as r,g,j as e,r as a,h as B,R as A,M as C,i as q,B as P,k as V,l as W,m as Y,o as H}from"./index-40d79683.js";import"./Statistic.styled-dacdac68.js";o.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${r.mainFontColor};
`;const N=o.h2`
  color: ${r.mainFontColor};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  margin-top: 24px;
  margin-bottom: 24px;
`,p=o.h2`
  color: ${r.mainFontColor};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  margin-top: 18px;
`,x=o.p`
  color: ${r.mainFontColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
  margin-top: 11px;
`,w=o.div`
  display: flex;
  gap: 135px;
  align-items: flex-start;
`,Q=o.div`
  display: block;
`,G=o.form`
  margin-left: 24px;
`,J=o.input`
  display: flex;
  width: 421px;
  height: 45px;
  padding: 8px;
  margin-top: 25px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 0.5px solid ${r.mainFontColor};
  background: rgba(234, 234, 234, 0.32);

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 20px;
  }
`,K=o.input`
  width: 421px;
  height: 145px;
  padding: 8px;
  gap: 8px;
  border-radius: 10px;
  border: 0.5px solid ${r.mainFontColor};
  background: rgba(234, 234, 234, 0.32);
  position: relative;

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 20px;
    position: absolute;
    top: 8px;
    left: 8px;
  }
`,y=o.button`
  display: flex;
  width: 197px;
  height: 48px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 1px solid ${r.mainFontColor};
  background: ${r.accentHoverColor};
  color: ${r.mainFontColor};
  font-size: 20px;
  margin-top: 25px;
`,D=o.h3`
  color: ${r.mainFontColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;
  margin-top: 48px;
  margin-left: 24px;
`,X=o.input`
  display: flex;
  width: 422px;
  height: 213px;
  padding: 8px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 10px;
  border: 0.5px solid ${r.mainFontColor};
  background: rgba(234, 234, 234, 0.32);
  margin-top: 25px;
`,Z=()=>{const{register:t,handleSubmit:i,setValue:c}=g(),l=d=>{console.log("Отправлено:",d)};return e.jsxs(G,{onSubmit:i(l),children:[e.jsx(D,{children:"Написати адміністратору:"}),e.jsx(J,{...t("Тема"),placeholder:"Тема"}),e.jsx("br",{}),e.jsx(K,{...t("Текст"),placeholder:"Текст"}),e.jsx("br",{}),e.jsx(y,{type:"submit",children:"Відправити"})]})},_=()=>{const{register:t,handleSubmit:i,setValue:c}=g(),l=d=>{console.log("Запрос отправлен:",d)};return e.jsxs("form",{onSubmit:i(l),children:[e.jsx(D,{children:"Запросити акт звірки:"}),e.jsx(X,{...t("Акт")}),e.jsx(y,{type:"submit",children:"Запросити"})]})},ee=({user:t})=>{const[i,c]=a.useState({}),[l,d]=a.useState([]),[u,f]=a.useState(null),[O,M]=a.useState(""),b=n=>{document.body.classList.add("modal-open"),f(n)},j=()=>{document.body.classList.remove("modal-open"),f(null)},[R,{isLoading:te}]=B(),{control:oe,register:$,handleSubmit:I,formState:{errors:z,isValid:E,dirtyFields:T}}=g({mode:"onChange"}),v=n=>{console.log("data :>> ",n);let h;if(L==="date")h={dateOfStart:n.dateOfStart,dateOfEnd:n.dateOfEnd,userId:t.id},c({...n,quarterDate:"",quarterYearDate:""});else{const{formattedStartDate:s,formattedEndDate:m}=W(parseInt(n.quarterDate),parseInt(n.quarterYearDate));c({...n,dateOfStart:"",dateOfEnd:""}),h={dateOfStart:s,dateOfEnd:m,userId:t.id}}R(h).unwrap().then(s=>{d(s),b("successReport"),console.log("responseData :>> ",s)}).catch(s=>{var S;let m=(S=s.data)==null?void 0:S.message;M(m),b("error")})},[L,U]=a.useState("date"),k=n=>{U(n)},F=a.useRef();return e.jsxs(e.Fragment,{children:[e.jsx(A,{titleText:"Звіт",handleSubmit:I(v),register:$,errors:z,dirtyFields:T,isValid:E,onSelectedOptionChange:k}),u==="successReport"&&e.jsx(e.Fragment,{children:e.jsx(C,{onClose:j,showCloseButton:!0,flexDirection:"row",children:e.jsxs(q,{children:[e.jsx(P,{targetComponent:F}),e.jsx(V,{data:l,date:i,user:t,ref:F})]})})}),u==="error"&&e.jsx(C,{width:"520px",padding:"24px",onClose:j,showCloseButton:!0,children:e.jsxs(TextModal,{children:[" ",O]})})]})},se=()=>{const t=Y(H);return e.jsxs(e.Fragment,{children:[e.jsx(N,{children:"Кабінет"}),e.jsxs(w,{children:[e.jsxs(Q,{children:[e.jsx(p,{children:"Номер договору"}),e.jsx(x,{children:t.contractNumber}),e.jsx(p,{children:"Ідентифікаційний номер (код ЄДРПОУ)"}),e.jsx(x,{children:t.taxCode}),e.jsx(p,{children:"Остання оплата"}),e.jsx(x,{children:t.lastPay}),e.jsx(p,{children:"Наступна оплата"}),e.jsx(x,{children:t.dateOfAccess})]}),e.jsx(ee,{user:t})]}),e.jsxs(w,{children:[e.jsx(Z,{}),e.jsx(_,{})]})]})};export{se as default};
