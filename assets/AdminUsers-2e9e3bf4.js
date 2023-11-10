import{n as i,r as h,a as G,j as e,b as H,d as r,e as K,f as Q,g as V,h as W,o as Z,u as J}from"./index-78df6f8a.js";import{S as X,c as Y,B as _,I as ee,U as te}from"./AdminCabinetPage.styled-2feeeb95.js";const se=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`,ie=i.div`
  width: ${n=>n.width};
  padding: ${n=>n.padding};
  border-radius: 15px;
  background: #7f99c0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,ae=i.button`
  position: absolute;
  top: 24px;
  right: 24px;
  border: none;
  background: none;
  cursor: pointer;
`,ne=n=>i(n)`
  width: 24px;
  height: 24px;
`,re=n=>h.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},h.createElement("path",{d:"M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z",fill:"#17161C"})),le=document.querySelector("#modal-root"),oe=ne(re),ce=({width:n,padding:c,bcgTransparent:g,showCloseButton:p,children:u,onClose:d})=>{h.useEffect(()=>{const s=N=>{N.code==="Escape"&&d()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[d]);const f=s=>{s.currentTarget===s.target&&d()},b={display:p?"block":"none"},O={backgroundColor:g?"rgba(0, 0, 0, 0)":"rgba(18, 20, 23, 0.5)"};return G.createPortal(e.jsx(se,{onClick:f,style:O,children:e.jsxs(ie,{width:n,padding:c,children:[e.jsx(ae,{onClick:d,style:b,children:e.jsx(oe,{})}),u]})}),le)},B=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,y=/^([а-яА-ЯїЇіІєЄ'ʼ-])+$/,L=/^[0-9]+$/,E=/\d{2}\.\d{2}\.\d{4}/,U=/^\+?3?8?(0\d{2}\d{3}\d{2}\d{2})$/,de=H().shape({name:r().matches(y,"This is an ERROR name"),firstName:r().required("Must be filled!").matches(y,"This is an ERROR name"),lastName:r().required("Must be filled!").matches(y,"This is an ERROR name"),fatherName:r().matches(y,"This is an ERROR name"),contractNumber:r().min(6,"Must be between 6 and 16 characters!").max(16,"Must be between 6 and 16 characters!").required("Must be filled!"),taxCode:r().min(10,"Must be  10 characters!").max(10,"Must be  10 characters!").required("Must be filled!").matches(L,"This is an ERROR taxCode"),dayOfBirthday:r().required("Must be filled!").matches(E,"This is an ERROR taxCode"),telNumber:r().required("Must be filled!").matches(U,"This is an ERROR taxCode"),email:r().required("Must be filled!").matches(B,"This is an ERROR taxCode"),dateOfAccess:r().required("Must be filled!").matches(E,"This is an ERROR taxCode"),lastPay:r().required("Must be filled!").matches(E,"This is an ERROR taxCode"),contactFace:r().required("Must be filled!"),contactFaceTaxCode:r().min(10,"Must be  10 characters!").max(10,"Must be  10 characters!").required("Must be filled!").matches(L,"This is an ERROR taxCode"),contactFaceTelNumber:r().required("Must be filled!").matches(U,"This is an ERROR taxCode"),contactFaceEmail:r().required("Must be filled!").matches(B,"This is an ERROR taxCode"),comment:r()});i.input`
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
`;const xe=i.div`
display: block;
width: 100%;

`,he=i.div`
margin-bottom: 24px;
/* display: block; */
/* display: flex;
justify-content: left;
gap: 48px; */


`,pe=i.div`
  display: flex;
  width: 100%;
  flex-direction: column;

`,q=i.div`
  display: flex;
  gap: 24px;
  /* flex-direction: column; */

`,me=i.div`
  display: flex;
  flex-direction: column;
 

`,ge=i.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
 

`,a=i.div`
  display: flex;
  width: 558px;
  font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;


/* background: rgba(234, 234, 234, 0.32); */
height: 42px;
  
`,l=i.input`

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
  
`,o=i.label`
 /* border: 0.5px solid  #17161C; */
 border: 0.25px solid  rgba(23, 22, 28, 0.5);
 background:rgba(234, 234, 234, 0.32);
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
  
`,ue=i.button`
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
`,fe=i.textarea`

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
  
`,be=i.label`

font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
color:  #17161C;
  
`,A=i.button`
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

text-decoration: ${n=>n.isActive?"underline":"none"};


`;i.div`
  display: flex;
  flex-direction: column;
  `;const I=i.div`
  display: flex;
  padding: 8px 24px 4px 10px;
  width: 558px;
  gap: 16px;
  border: 0.25px solid  rgba(23, 22, 28, 0.5);
 background:rgba(234, 234, 234, 0.32);
`,je=i.div`
  display: flex;
  flex-direction: column;
 
  width: 100%;
  gap: 13px;
  border:none;

`,w=i.div`
  display: flex;
  flex-direction: column;
  width: 133px;

  `,C=i.label`
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
  `,R=i.input`
 
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

  `,v=i.button`
 display: flex;
 gap: 8px;
width: 66px;
height: 23px;
padding: 2px 10px;
border-radius: 10px;
background-color: ${n=>n.isTrue?"#FFF3BF":"#8CACD7"};
 color:  rgba(23, 22, 28, 1);
 text-transform: uppercase;
font-family: Inter;
/* font-family: Hind; */
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 120%; /* 12px */
letter-spacing: 1px;
  `;i.div`
display: flex;
flex-direction: column;
/* width: 133px; */

`;const ye=({onCloseModal:n})=>{const[c,g]=h.useState("NewUser"),[p,{isLoading:u}]=K(),[d,{isLoading:f}]=Q(),b=V(),{control:O,register:s,handleSubmit:N,setError:we,clearErrors:M,formState:{errors:t,isValid:Ce,dirtyFields:Re}}=W({mode:"onChange",resolver:Z(de)}),[m,$]=h.useState(!1),S=()=>{$(m!==!0),M()},[x,z]=h.useState("fop");console.log("typeStatus",m);const P=()=>{z(x==="tov"?"fop":"tov")},D=j=>{console.log(j);const k={...j,status:m,userFop:x};console.log(k),x==="fop"&&p(k).unwrap().then(()=>{b("/admin/users"),n()}).catch(F=>console.log(F.data.message)),x==="tov"&&d(k).unwrap().then(()=>{b("/admin/users"),n()}).catch(F=>console.log(F.data))},T=j=>{g(j),M()};return console.log("ButtonSwitch.props",v),e.jsxs(xe,{children:[e.jsxs(he,{children:[e.jsx(A,{isActive:c==="NewUser",onClick:()=>T("NewUser"),children:"Новий користувач"}),e.jsx(A,{isActive:c==="MusicEditor",onClick:()=>T("MusicEditor"),children:"Музичний редактор"})]}),c==="NewUser"&&e.jsx(v,{type:"button",onClick:P,children:x==="tov"?"ТОВ":"ФОП"}),e.jsx(pe,{children:e.jsxs("form",{onSubmit:N(D),children:[c==="NewUser"&&e.jsxs(q,{children:[e.jsxs(me,{children:[e.jsx(I,{children:x==="fop"?e.jsxs(e.Fragment,{children:[e.jsxs(w,{children:[e.jsx(C,{children:"Прізвище"}),e.jsx(R,{type:"text",placeholder:"Прізвище",...s("lastName")}),e.jsx("p",{children:t.lastName&&t.lastName.message})]}),e.jsxs(w,{children:[e.jsx(C,{children:"Ім'я"}),e.jsx(R,{type:"text",placeholder:"Ім'я",...s("firstName")}),e.jsx("p",{children:t.firstName&&t.firstName.message})]}),e.jsxs(w,{children:[e.jsx(C,{children:"По-батькові"}),e.jsx(R,{type:"text",placeholder:"По-батькові",...s("fatherName")}),e.jsx("p",{children:t.fatherName&&t.fatherName.message})]}),e.jsx(v,{type:"button",isTrue:m,onClick:()=>S(),children:m?e.jsxs(e.Fragment,{children:["On",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:e.jsx("circle",{cx:"6.5",cy:"6.5",r:"6",fill:"#8CACD7"})})]}):e.jsxs(e.Fragment,{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:e.jsx("circle",{cx:"6.5",cy:"6.5",r:"6",fill:"#FFF3BF"})}),"Off"]})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(w,{children:[e.jsx(C,{children:"Назва компанії"}),e.jsx(R,{type:"text",placeholder:"Назва компанії",...s("name")}),e.jsx("p",{children:t.name&&t.lastName.message})]}),e.jsx(v,{type:"button",onClick:S,children:m==="true"?"On":"Off"})]})}),e.jsxs(a,{children:[e.jsx(o,{children:"№ договору"}),e.jsx(l,{type:"text",placeholder:"№ договору",...s("contractNumber")}),e.jsx("p",{children:t.contractNumber&&t.contractNumber.message})]}),e.jsxs(a,{children:[e.jsx(o,{children:"Код ЄДРПОУ (ІНН)*"}),e.jsx(l,{type:"text",placeholder:"Код ЄДРПОУ (ІНН)",...s("taxCode")}),e.jsx("p",{children:t.taxCode&&t.taxCode.message})]}),x==="fop"&&e.jsxs(a,{children:[e.jsx(o,{children:"Дата народження"}),e.jsx(l,{type:"text",placeholder:"Дата народження",...s("dayOfBirthday")}),e.jsx("p",{children:t.dayOfBirthday&&t.dayOfBirthday.message})]}),e.jsxs(a,{children:[e.jsx(o,{children:"Номер телефону*"}),e.jsx(l,{type:"text",placeholder:"Номер телефону",...s("telNumber")}),console.log("errors",t),e.jsx("p",{children:t.telNumber&&t.telNumber.message})]}),e.jsxs(a,{children:[e.jsx(o,{children:"E-mail*"}),e.jsx(l,{type:"text",placeholder:"E-mail",...s("email")}),e.jsx("p",{children:t.email&&t.email.message})]}),e.jsxs(a,{children:[e.jsx(o,{children:"Надання доступу до*"}),e.jsx(l,{type:"text",placeholder:"Надання доступу до",...s("dateOfAccess")}),e.jsx("p",{children:t.dateOfAccess&&t.dateOfAccess.message})]}),e.jsxs(a,{children:[e.jsx(o,{children:"Остання оплата* "}),e.jsx(l,{type:"text",placeholder:"Остання оплата",...s("lastPay")}),e.jsx("p",{children:t.lastPay&&t.lastPay.message})]}),e.jsxs(a,{children:[e.jsx(o,{children:"Контактна особа* "}),e.jsx(l,{type:"text",placeholder:"Контактна особа",...s("contactFace")}),e.jsx("p",{children:t.contactFace&&t.contactFace.message})]}),e.jsxs(a,{children:[e.jsx(o,{children:"Ідентифікаційний номер* "}),e.jsx(l,{type:"text",placeholder:"Ідентифікаційний номер",...s("contactFaceTaxCode")}),e.jsx("p",{children:t.taxCodeContactFace&&t.taxCodeContactFace.message})]}),e.jsxs(a,{children:[e.jsx(o,{children:"Номер телефону* "}),e.jsx(l,{type:"text",placeholder:"Номер телефону",...s("contactFaceTelNumber")}),e.jsx("p",{children:t.telNumberContactFace&&t.telNumberContactFace.message})]}),e.jsxs(a,{children:[e.jsx(o,{children:"E-mail "}),e.jsx(l,{type:"text",placeholder:"E-mail",...s("contactFaceEmail")}),e.jsx("p",{children:t.emailContactFace&&t.emailContactFace.message})]}),e.jsx(e.Fragment,{})]}),e.jsxs(ge,{children:[e.jsxs(je,{children:[e.jsx(be,{children:"Примітка "}),e.jsx(fe,{type:"text",placeholder:"Примітка",...s("comment")}),e.jsx("p",{children:t.comment&&t.comment.message})]}),e.jsx(ue,{type:"submit",children:"Додати"})]})]}),c==="MusicEditor"&&e.jsxs("div",{children:[e.jsxs(q,{children:[e.jsxs(I,{children:[e.jsxs(a,{children:[e.jsx("label",{children:"Прізвище"}),e.jsx("input",{type:"text",placeholder:"Прізвище",...s("lastName")}),e.jsx("p",{children:t.lastName&&t.lastName.message})]}),e.jsxs(a,{children:[e.jsx("label",{children:"Ім'я"}),e.jsx("input",{type:"text",placeholder:"Ім'я",...s("firstName")}),e.jsx("p",{children:t.firstName&&t.firstName.message})]}),e.jsxs(a,{children:[e.jsx("label",{children:"По-батькові"}),e.jsx("input",{type:"text",placeholder:"По-батькові",...s("fatherName")}),e.jsx("p",{children:t.fatherName&&t.fatherName.message})]})]}),e.jsxs(a,{children:[e.jsx(o,{children:"Ідентифікаційний номер*"}),e.jsx(l,{type:"text",placeholder:"234567891",...s("taxCode")}),e.jsx("p",{children:t.taxCode&&t.taxCode.message})]}),e.jsxs(a,{children:[e.jsx(o,{children:"Дата народження"}),e.jsx(l,{type:"text",placeholder:"Дата народження",...s("dayOfBirthday")}),e.jsx("p",{children:t.dayOfBirthday&&t.dayOfBirthday.message})]}),e.jsxs(a,{children:[e.jsx(o,{children:"Номер телефону*"}),e.jsx(l,{type:"text",placeholder:"Номер телефону",...s("telNumber")}),console.log("errors",t),e.jsx("p",{children:t.telNumber&&t.telNumber.message})]}),e.jsxs(a,{children:[e.jsx(o,{children:"E-mail*"}),e.jsx(l,{type:"text",placeholder:"E-mail",...s("email")}),e.jsx("p",{children:t.email&&t.email.message})]})]}),e.jsxs(a,{children:[e.jsx("label",{children:"Примітка "}),e.jsx("textarea",{type:"text",placeholder:"Примітка",...s("comment")}),e.jsx("p",{children:t.comment&&t.comment.message})]}),e.jsx("button",{type:"submit",children:"Отправить"})]})]})})]})},ke=()=>{const{data:n,isLoading:c}=J(),[g,p]=h.useState(!1),u=()=>{p(!0)},d=()=>{p(!1)},f=[{key:"firstName",label:"Ім’я",type:"name"},{key:"contractNumber",label:"№ договору",type:"string"},{key:"status",label:"Статус",type:"boolean"},{key:"lastPay",label:"Дата оплати",type:"string"},{key:"dateOfAccess",label:"Відкрито до",type:"string"},{key:"acces",label:"Допуск",type:"string"}];return e.jsxs(e.Fragment,{children:[e.jsxs(X,{children:[e.jsx(Y,{children:"Користувачі"}),e.jsx(_,{type:"button",padding:"12px 46px",onClick:u,text:"Додати",ariaLabel:"  Додати користувача"}),e.jsx(ee,{type:"text",id:"search",name:"search",placeholder:"Пошук користувача"})]}),!c&&e.jsx(te,{users:n.allUsers,visibleColumns:f}),g&&e.jsx(ce,{width:"898px",padding:"24px",onClose:d,children:e.jsx(ye,{onCloseModal:d})})]})};export{ke as default};
