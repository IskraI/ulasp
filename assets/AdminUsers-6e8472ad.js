import{j as e,n as r,r as m,a as G,b as H,d as l,e as K,f as Q,g as V,h as W,o as Z,u as J}from"./index-7fee1598.js";import{S as X,f as Y,I as _}from"./AdminCabinetPage.styled-2aaf9dae.js";const ee=({users:i})=>e.jsx(e.Fragment,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Name"}),e.jsx("th",{children:"Day of Birthday"}),e.jsx("th",{children:"Tel Number"}),e.jsx("th",{children:"Email"})]})}),e.jsx("tbody",{children:i.map((a,x)=>e.jsxs("tr",{children:[e.jsx("td",{children:a.firstName}),e.jsxs("td",{children:[a.lastName," ",a.fatherName]}),e.jsx("td",{children:a.dayOfBirthday}),e.jsx("td",{children:a.telNumber}),e.jsx("td",{children:a.email})]},x))})]})}),te=r.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`,se=r.div`
  width: ${i=>i.width};
  padding: ${i=>i.padding};
  border-radius: 15px;
  background: #7f99c0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,ie=r.button`
  position: absolute;
  top: 24px;
  right: 24px;
  border: none;
  background: none;
  cursor: pointer;
`,re=i=>r(i)`
  width: 24px;
  height: 24px;
`,ne=i=>m.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},m.createElement("path",{d:"M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z",fill:"#17161C"})),ae=document.querySelector("#modal-root"),le=re(ne),oe=({width:i,padding:a,bcgTransparent:x,showCloseButton:h,children:g,onClose:c})=>{m.useEffect(()=>{const s=v=>{v.code==="Escape"&&c()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[c]);const j=s=>{s.currentTarget===s.target&&c()},f={display:h?"block":"none"},N={backgroundColor:x?"rgba(0, 0, 0, 0)":"rgba(18, 20, 23, 0.5)"};return G.createPortal(e.jsx(te,{onClick:j,style:N,children:e.jsxs(se,{width:i,padding:a,children:[e.jsx(ie,{onClick:c,style:f,children:e.jsx(le,{})}),g]})}),ae)},de=r.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #17161c;
  font-family: inherit;
  font-size: 20px;
  font-weight: 400;
  color: #17161c;
  outline: none;
  background: rgba(164, 188, 212, 0.3);
  margin-top: ${i=>i.margintop};
  margin-bottom: ${i=>i.marginbottom};
  padding: ${i=>i.padding};


  &:hover,
  :focus {
    background: #fff3bf;
    border: 1px solid #17161c;
  }

  &:active {
    background: #fff3bf;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4) inset;
    border: 1px solid #17161c;
  }
`,ce=({marginbottom:i,margintop:a,marginrigth:x,padding:h,onClick:g,type:c,text:j,ariaLabel:f,height:N})=>e.jsx(de,{type:c,"aria-label":f,marginbottom:i,margintop:a,padding:h,onClick:g,children:j}),L=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,b=/^([а-яА-ЯїЇіІєЄ'ʼ-])+$/,T=/^[0-9]+$/,M=/\d{2}\.\d{2}\.\d{4}/,U=/^\+?3?8?(0\d{2}\d{3}\d{2}\d{2})$/,xe=H().shape({name:l().required("Must be filled!").matches(b,"This is an ERROR name"),firstName:l().required("Must be filled!").matches(b,"This is an ERROR name"),lastName:l().required("Must be filled!").matches(b,"This is an ERROR name"),fatherName:l().matches(b,"This is an ERROR name"),contractNumber:l().min(6,"Must be between 6 and 16 characters!").max(16,"Must be between 6 and 16 characters!").required("Must be filled!"),taxCode:l().min(10,"Must be  10 characters!").max(10,"Must be  10 characters!").required("Must be filled!").matches(T,"This is an ERROR taxCode"),dayOfBirthday:l().required("Must be filled!").matches(M,"This is an ERROR taxCode"),telNumber:l().required("Must be filled!").matches(U,"This is an ERROR taxCode"),email:l().required("Must be filled!").matches(L,"This is an ERROR taxCode"),dateOfAccess:l().required("Must be filled!").matches(M,"This is an ERROR taxCode"),lastPay:l().required("Must be filled!").matches(M,"This is an ERROR taxCode"),contactFace:l().required("Must be filled!"),taxCodeContactFace:l().min(10,"Must be  10 characters!").max(10,"Must be  10 characters!").required("Must be filled!").matches(T,"This is an ERROR taxCode"),telNumberContactFace:l().required("Must be filled!").matches(U,"This is an ERROR taxCode"),emailContactFace:l().required("Must be filled!").matches(L,"This is an ERROR taxCode"),comment:l()});r.input`
position: relative;
width: 200px;
margin-top: 5px;
width: 100%;


&[title]:hover::before {
  content: attr(title);
  display: block;
  background-color: #f5f5f5;
  color: #333;
  padding: 5px;
  border: 1px solid #ccc;
  position: absolute;
  z-index: 1;
  width: 200px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s;
}

&[title]:hover::before {
  visibility: visible;
  opacity: 1;
}
`;const he=r.div`
display: block;
width: 100%;

`,pe=r.div`
margin-bottom: 24px;
/* display: block; */
/* display: flex;
justify-content: left;
gap: 48px; */


`,me=r.div`
  display: flex;
  width: 100%;
  flex-direction: column;

`,q=r.div`
  display: flex;
  gap: 24px;
  /* flex-direction: column; */

`,ge=r.div`
  display: flex;
  flex-direction: column;
 

`,fe=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
 

`,n=r.div`
  display: flex;
  width: 558px;
  font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;


/* background: rgba(234, 234, 234, 0.32); */
height: 42px;
  
`,o=r.input`

background-color:  rgba(234, 234, 234, 0.32);
  width: 100%;
  padding-left: 8px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  border: 0.25px solid  rgba(23, 22, 28, 0.5);
 /* border: 0.5px solid  #17161C; */
 /* stroke-width: 0.5px; */
  
`,d=r.label`
 /* border: 0.5px solid  #17161C; */
 border: 0.25px solid  rgba(23, 22, 28, 0.5);
 background:rgba(234, 234, 234, 0.32);
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
  
`,ue=r.button`
display: flex;
width: 198px;
height: 48px;
padding: 8px;
justify-content: center;
align-items: center;
gap: 8px;
display: block;
justify-content: center;
text-align: center;
border-radius: 10px;
border: 1px solid #17161C;
background:  rgba(164, 188, 212, 0.30);
text-transform: uppercase;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
`,je=r.textarea`

background-color:  rgba(234, 234, 234, 0.32);
  width: 100%;
  height: 220px;
  padding: 8px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  outline: none;
  border: 0.25px solid  rgba(23, 22, 28, 0.5);
 /* border: 0.5px solid  #17161C; */
 /* stroke-width: 0.5px; */
  
`,be=r.label`

font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
color:  #17161C;
  
`,A=r.button`
display: inline-block;
border: none;
background-color: inherit ;
justify-content: left;
margin-right: 48px;
color:  #17161C;
text-align: center;
font-family: Inter;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: 120%;

text-decoration: ${i=>i.isActive?"underline":"none"};


`;r.div`
  display: flex;
  flex-direction: column;
  `;const $=r.div`
  display: flex;
  padding: 8px 24px 4px 10px;
  width: 558px;
  gap: 16px;
  border: 0.25px solid  rgba(23, 22, 28, 0.5);
 background:rgba(234, 234, 234, 0.32);
`,ye=r.div`
  display: flex;
  flex-direction: column;
 
  width: 100%;
  gap: 13px;
  border:none;

`,y=r.div`
  display: flex;
  flex-direction: column;
  width: 133px;

  `,w=r.label`
  display: flex;
  flex-direction: column;
  border:none;
 /* background:rgba(234, 234, 234, 0.32); */
 color:  rgba(0, 0, 0, 0.40);
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px;
  `,C=r.input`
 
  /* border: 0.25px solid  rgba(23, 22, 28, 0.5); */
 /* background:rgba(234, 234, 234, 0.32); */
 display: flex;
 background-color: inherit;
width: 133px;
height: 32px;
padding: 4px 8px;
align-items: center;
gap: 8px;
border-radius: 10px;
border: 1px solid  rgba(0, 0, 0, 0.40);
/* background: var(--Color-input1, rgba(234, 234, 234, 0.32)); */

  `,R=r.button`
 display: flex;
 gap: 8px;
width: 66px;
height: 23px;
padding: 2px 10px;
border-radius: 10px;
background-color: ${i=>i.isTrue?"#FFF3BF":"#8CACD7"};
 color:  rgba(23, 22, 28, 1);
 text-transform: uppercase;
font-family: Inter;
/* font-family: Hind; */
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 120%; /* 12px */
letter-spacing: 1px;
  `,we=({onCloseModal:i})=>{const[a,x]=m.useState("NewUser"),[h,{isLoading:g}]=K(),[c,{isLoading:j}]=Q(),f=V(),{control:N,register:s,handleSubmit:v,setError:Ce,clearErrors:O,formState:{errors:t,isValid:Re,dirtyFields:Ne}}=W({mode:"onChange",resolver:Z(xe)}),[u,I]=m.useState(!1),S=()=>{I(u!==!0),O()},[p,z]=m.useState("fop");console.log("typeStatus",u);const D=()=>{z(p==="tov"?"fop":"tov")},P=k=>{const F={...k,status:u,userFop:p};console.log(F),p==="fop"&&h(F).unwrap().then(()=>{f("/admin/users"),i()}).catch(E=>console.log(E.data.message)),p==="tov"&&c(F).unwrap().then(()=>{f("/admin/users"),i()}).catch(E=>console.log(E.data.message))},B=k=>{x(k),O()};return console.log("ButtonSwitch.props",R),e.jsxs(he,{children:[e.jsxs(pe,{children:[e.jsx(A,{isActive:a==="NewUser",onClick:()=>B("NewUser"),children:"Новий користувач"}),e.jsx(A,{isActive:a==="MusicEditor",onClick:()=>B("MusicEditor"),children:"Музичний редактор"})]}),a==="NewUser"&&e.jsx(R,{type:"button",onClick:D,children:p==="tov"?"ТОВ":"ФОП"}),e.jsx(me,{children:e.jsxs("form",{onSubmit:v(P),children:[a==="NewUser"&&e.jsxs(q,{children:[e.jsxs(ge,{children:[e.jsx($,{children:p==="fop"?e.jsxs(e.Fragment,{children:[e.jsxs(y,{children:[e.jsx(w,{children:"Прізвище"}),e.jsx(C,{type:"text",placeholder:"Прізвище",...s("lastName")}),e.jsx("p",{children:t.lastName&&t.lastName.message})]}),e.jsxs(y,{children:[e.jsx(w,{children:"Ім'я"}),e.jsx(C,{type:"text",placeholder:"Ім'я",...s("firstName")}),e.jsx("p",{children:t.firstName&&t.firstName.message})]}),e.jsxs(y,{children:[e.jsx(w,{children:"По-батькові"}),e.jsx(C,{type:"text",placeholder:"По-батькові",...s("fatherName")}),e.jsx("p",{children:t.fatherName&&t.fatherName.message})]}),e.jsx(R,{type:"button",isTrue:u,onClick:()=>S(),children:u?e.jsxs(e.Fragment,{children:["On",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:e.jsx("circle",{cx:"6.5",cy:"6.5",r:"6",fill:"#8CACD7"})})]}):e.jsxs(e.Fragment,{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:e.jsx("circle",{cx:"6.5",cy:"6.5",r:"6",fill:"#FFF3BF"})}),"Off"]})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(y,{children:[e.jsx(w,{children:"Назва компанії"}),e.jsx(C,{type:"text",placeholder:"Назва компанії",...s("name")}),e.jsx("p",{children:t.name&&t.lastName.message})]}),e.jsx(R,{type:"button",onClick:S,children:u==="true"?"On":"Off"})]})}),e.jsxs(n,{children:[e.jsx(d,{children:"№ договору"}),e.jsx(o,{type:"text",placeholder:"№ договору",...s("contractNumber")}),e.jsx("p",{children:t.contractNumber&&t.contractNumber.message})]}),e.jsxs(n,{children:[e.jsx(d,{children:"Код ЄДРПОУ (ІНН)*"}),e.jsx(o,{type:"text",placeholder:"Код ЄДРПОУ (ІНН)",...s("taxCode")}),e.jsx("p",{children:t.taxCode&&t.taxCode.message})]}),p==="fop"&&e.jsxs(n,{children:[e.jsx(d,{children:"Дата народження"}),e.jsx(o,{type:"text",placeholder:"Дата народження",...s("dayOfBirthday")}),e.jsx("p",{children:t.dayOfBirthday&&t.dayOfBirthday.message})]}),e.jsxs(n,{children:[e.jsx(d,{children:"Номер телефону*"}),e.jsx(o,{type:"text",placeholder:"Номер телефону",...s("telNumber")}),console.log("errors",t),e.jsx("p",{children:t.telNumber&&t.telNumber.message})]}),e.jsxs(n,{children:[e.jsx(d,{children:"E-mail*"}),e.jsx(o,{type:"text",placeholder:"E-mail",...s("email")}),e.jsx("p",{children:t.email&&t.email.message})]}),e.jsxs(n,{children:[e.jsx(d,{children:"Надання доступу до*"}),e.jsx(o,{type:"text",placeholder:"Надання доступу до",...s("dateOfAccess")}),e.jsx("p",{children:t.dateOfAccess&&t.dateOfAccess.message})]}),e.jsxs(n,{children:[e.jsx(d,{children:"Остання оплата* "}),e.jsx(o,{type:"text",placeholder:"Остання оплата",...s("lastPay")}),e.jsx("p",{children:t.lastPay&&t.lastPay.message})]}),e.jsxs(n,{children:[e.jsx(d,{children:"Контактна особа* "}),e.jsx(o,{type:"text",placeholder:"Контактна особа",...s("contactFace")}),e.jsx("p",{children:t.contactFace&&t.contactFace.message})]}),e.jsxs(n,{children:[e.jsx(d,{children:"Ідентифікаційний номер* "}),e.jsx(o,{type:"text",placeholder:"Ідентифікаційний номер",...s("taxCodeContactFace")}),e.jsx("p",{children:t.taxCodeContactFace&&t.taxCodeContactFace.message})]}),e.jsxs(n,{children:[e.jsx(d,{children:"Номер телефону* "}),e.jsx(o,{type:"text",placeholder:"Номер телефону",...s("telNumberContactFace")}),e.jsx("p",{children:t.telNumberContactFace&&t.telNumberContactFace.message})]}),e.jsxs(n,{children:[e.jsx(d,{children:"E-mail "}),e.jsx(o,{type:"text",placeholder:"E-mail",...s("emailContactFace")}),e.jsx("p",{children:t.emailContactFace&&t.emailContactFace.message})]}),e.jsx(e.Fragment,{})]}),e.jsxs(fe,{children:[e.jsxs(ye,{children:[e.jsx(be,{children:"Примітка "}),e.jsx(je,{type:"text",placeholder:"Примітка",...s("comment")}),e.jsx("p",{children:t.comment&&t.comment.message})]}),e.jsx(ue,{type:"submit",children:"Додати"})]})]}),a==="MusicEditor"&&e.jsxs("div",{children:[e.jsxs(q,{children:[e.jsxs($,{children:[e.jsxs(n,{children:[e.jsx("label",{children:"Прізвище"}),e.jsx("input",{type:"text",placeholder:"Прізвище",...s("lastName")}),e.jsx("p",{children:t.lastName&&t.lastName.message})]}),e.jsxs(n,{children:[e.jsx("label",{children:"Ім'я"}),e.jsx("input",{type:"text",placeholder:"Ім'я",...s("firstName")}),e.jsx("p",{children:t.firstName&&t.firstName.message})]}),e.jsxs(n,{children:[e.jsx("label",{children:"По-батькові"}),e.jsx("input",{type:"text",placeholder:"По-батькові",...s("fatherName")}),e.jsx("p",{children:t.fatherName&&t.fatherName.message})]})]}),e.jsxs(n,{children:[e.jsx(d,{children:"Ідентифікаційний номер*"}),e.jsx(o,{type:"text",placeholder:"234567891",...s("taxCode")}),e.jsx("p",{children:t.taxCode&&t.taxCode.message})]}),e.jsxs(n,{children:[e.jsx(d,{children:"Дата народження"}),e.jsx(o,{type:"text",placeholder:"Дата народження",...s("dayOfBirthday")}),e.jsx("p",{children:t.dayOfBirthday&&t.dayOfBirthday.message})]}),e.jsxs(n,{children:[e.jsx(d,{children:"Номер телефону*"}),e.jsx(o,{type:"text",placeholder:"Номер телефону",...s("telNumber")}),console.log("errors",t),e.jsx("p",{children:t.telNumber&&t.telNumber.message})]}),e.jsxs(n,{children:[e.jsx(d,{children:"E-mail*"}),e.jsx(o,{type:"text",placeholder:"E-mail",...s("email")}),e.jsx("p",{children:t.email&&t.email.message})]})]}),e.jsxs(n,{children:[e.jsx("label",{children:"Примітка "}),e.jsx("textarea",{type:"text",placeholder:"Примітка",...s("comment")}),e.jsx("p",{children:t.comment&&t.comment.message})]}),e.jsx("button",{type:"submit",children:"Отправить"})]})]})})]})},Fe=()=>{const{data:i,isLoading:a}=J(),[x,h]=m.useState(!1),g=()=>{h(!0)},c=()=>{h(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(X,{children:[e.jsx(Y,{children:"Користувачі"}),e.jsx(ce,{type:"button",padding:"12px 46px",onClick:g,text:"Додати",ariaLabel:"  Додати користувача"}),e.jsx(_,{type:"text",id:"search",name:"search",placeholder:"Пошук користувача"})]}),!a&&e.jsx(ee,{users:i.allUsers}),x&&e.jsx(oe,{width:"898px",padding:"24px",onClose:c,children:e.jsx(we,{onCloseModal:c})})]})};export{Fe as default};
