import{j as e,n as i,r as p,a as G,b as H,d as l,e as K,f as Q,g as V,h as W,o as Z,u as J}from"./index-2b2ef774.js";import{f as X,S as Y,I as _}from"./AdminCabinetPage.styled-004fef33.js";const ee=({users:r})=>e.jsx(e.Fragment,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Name"}),e.jsx("th",{children:"Day of Birthday"}),e.jsx("th",{children:"Tel Number"}),e.jsx("th",{children:"Email"})]})}),e.jsx("tbody",{children:r.map((a,x)=>e.jsxs("tr",{children:[e.jsx("td",{children:a.firstName}),e.jsxs("td",{children:[a.lastName," ",a.fatherName]}),e.jsx("td",{children:a.dayOfBirthday}),e.jsx("td",{children:a.telNumber}),e.jsx("td",{children:a.email})]},x))})]})}),te=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`,se=i.div`
  width: ${r=>r.width};
  padding: ${r=>r.padding};
  border-radius: 15px;
  background: #7f99c0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,ie=i.button`
  position: absolute;
  top: 24px;
  right: 24px;
  border: none;
  background: none;
  cursor: pointer;
`,re=r=>i(r)`
  width: 24px;
  height: 24px;
`,ne=r=>p.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},p.createElement("path",{d:"M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z",fill:"#17161C"})),ae=document.querySelector("#modal-root"),le=re(ne),oe=({width:r,padding:a,bcgTransparent:x,showCloseButton:m,children:u,onClose:d})=>{p.useEffect(()=>{const s=R=>{R.code==="Escape"&&d()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[d]);const E=s=>{s.currentTarget===s.target&&d()},f={display:m?"block":"none"},M={backgroundColor:x?"rgba(0, 0, 0, 0)":"rgba(18, 20, 23, 0.5)"};return G.createPortal(e.jsx(te,{onClick:E,style:M,children:e.jsxs(se,{width:r,padding:a,children:[e.jsx(ie,{onClick:d,style:f,children:e.jsx(le,{})}),u]})}),ae)},T=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,j=/^([а-яА-ЯїЇіІєЄ'ʼ-])+$/,L=/^[0-9]+$/,k=/\d{2}\.\d{2}\.\d{4}/,U=/^\+?3?8?(0\d{2}\d{3}\d{2}\d{2})$/,ce=H().shape({name:l().required("Must be filled!").matches(j,"This is an ERROR name"),firstName:l().required("Must be filled!").matches(j,"This is an ERROR name"),lastName:l().required("Must be filled!").matches(j,"This is an ERROR name"),fatherName:l().matches(j,"This is an ERROR name"),contractNumber:l().min(6,"Must be between 6 and 16 characters!").max(16,"Must be between 6 and 16 characters!").required("Must be filled!"),taxCode:l().min(10,"Must be  10 characters!").max(10,"Must be  10 characters!").required("Must be filled!").matches(L,"This is an ERROR taxCode"),dayOfBirthday:l().required("Must be filled!").matches(k,"This is an ERROR taxCode"),telNumber:l().required("Must be filled!").matches(U,"This is an ERROR taxCode"),email:l().required("Must be filled!").matches(T,"This is an ERROR taxCode"),dateOfAccess:l().required("Must be filled!").matches(k,"This is an ERROR taxCode"),lastPay:l().required("Must be filled!").matches(k,"This is an ERROR taxCode"),contactFace:l().required("Must be filled!"),taxCodeContactFace:l().min(10,"Must be  10 characters!").max(10,"Must be  10 characters!").required("Must be filled!").matches(L,"This is an ERROR taxCode"),telNumberContactFace:l().required("Must be filled!").matches(U,"This is an ERROR taxCode"),emailContactFace:l().required("Must be filled!").matches(T,"This is an ERROR taxCode"),comment:l()});i.input`
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
`;const de=i.div`
display: block;
width: 100%;

`,xe=i.div`
margin-bottom: 24px;
/* display: block; */
/* display: flex;
justify-content: left;
gap: 48px; */


`,he=i.div`
  display: flex;
  width: 100%;
  flex-direction: column;

`,q=i.div`
  display: flex;
  gap: 24px;
  /* flex-direction: column; */

`,pe=i.div`
  display: flex;
  flex-direction: column;
 

`,me=i.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
 

`,n=i.div`
  display: flex;
  width: 558px;
  font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;


/* background: rgba(234, 234, 234, 0.32); */
height: 42px;
  
`,o=i.input`

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
  
`,c=i.label`
 /* border: 0.5px solid  #17161C; */
 border: 0.25px solid  rgba(23, 22, 28, 0.5);
 background:rgba(234, 234, 234, 0.32);
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
  
`,ge=i.button`
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
`,ue=i.textarea`

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
  
`,fe=i.label`

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

text-decoration: ${r=>r.isActive?"underline":"none"};


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

`,b=i.div`
  display: flex;
  flex-direction: column;
  width: 133px;

  `,y=i.label`
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
  `,w=i.input`
 
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

  `,C=i.button`
 display: flex;
 gap: 8px;
width: 66px;
height: 23px;
padding: 2px 10px;
border-radius: 10px;
background-color: ${r=>r.isTrue?"#FFF3BF":"#8CACD7"};
 color:  rgba(23, 22, 28, 1);
 text-transform: uppercase;
font-family: Inter;
/* font-family: Hind; */
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 120%; /* 12px */
letter-spacing: 1px;
  `,be=({onCloseModal:r})=>{const[a,x]=p.useState("NewUser"),[m,{isLoading:u}]=K(),[d,{isLoading:E}]=Q(),f=V(),{control:M,register:s,handleSubmit:R,setError:ye,clearErrors:O,formState:{errors:t,isValid:we,dirtyFields:Ce}}=W({mode:"onChange",resolver:Z(ce)}),[g,$]=p.useState(!1),S=()=>{$(g!==!0),O()},[h,z]=p.useState("fop");console.log("typeStatus",g);const D=()=>{z(h==="tov"?"fop":"tov")},P=N=>{const v={...N,status:g,userFop:h};console.log(v),h==="fop"&&m(v).unwrap().then(()=>{f("/admin/users"),r()}).catch(F=>console.log(F.data.message)),h==="tov"&&d(v).unwrap().then(()=>{f("/admin/users"),r()}).catch(F=>console.log(F.data.message))},B=N=>{x(N),O()};return console.log("ButtonSwitch.props",C),e.jsxs(de,{children:[e.jsxs(xe,{children:[e.jsx(A,{isActive:a==="NewUser",onClick:()=>B("NewUser"),children:"Новий користувач"}),e.jsx(A,{isActive:a==="MusicEditor",onClick:()=>B("MusicEditor"),children:"Музичний редактор"})]}),a==="NewUser"&&e.jsx(C,{type:"button",onClick:D,children:h==="tov"?"ТОВ":"ФОП"}),e.jsx(he,{children:e.jsxs("form",{onSubmit:R(P),children:[a==="NewUser"&&e.jsxs(q,{children:[e.jsxs(pe,{children:[e.jsx(I,{children:h==="fop"?e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:[e.jsx(y,{children:"Прізвище"}),e.jsx(w,{type:"text",placeholder:"Прізвище",...s("lastName")}),e.jsx("p",{children:t.lastName&&t.lastName.message})]}),e.jsxs(b,{children:[e.jsx(y,{children:"Ім'я"}),e.jsx(w,{type:"text",placeholder:"Ім'я",...s("firstName")}),e.jsx("p",{children:t.firstName&&t.firstName.message})]}),e.jsxs(b,{children:[e.jsx(y,{children:"По-батькові"}),e.jsx(w,{type:"text",placeholder:"По-батькові",...s("fatherName")}),e.jsx("p",{children:t.fatherName&&t.fatherName.message})]}),e.jsx(C,{type:"button",isTrue:g,onClick:()=>S(),children:g?e.jsxs(e.Fragment,{children:["On",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:e.jsx("circle",{cx:"6.5",cy:"6.5",r:"6",fill:"#8CACD7"})})]}):e.jsxs(e.Fragment,{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:e.jsx("circle",{cx:"6.5",cy:"6.5",r:"6",fill:"#FFF3BF"})}),"Off"]})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:[e.jsx(y,{children:"Назва компанії"}),e.jsx(w,{type:"text",placeholder:"Назва компанії",...s("name")}),e.jsx("p",{children:t.name&&t.lastName.message})]}),e.jsx(C,{type:"button",onClick:S,children:g==="true"?"On":"Off"})]})}),e.jsxs(n,{children:[e.jsx(c,{children:"№ договору"}),e.jsx(o,{type:"text",placeholder:"№ договору",...s("contractNumber")}),e.jsx("p",{children:t.contractNumber&&t.contractNumber.message})]}),e.jsxs(n,{children:[e.jsx(c,{children:"Код ЄДРПОУ (ІНН)*"}),e.jsx(o,{type:"text",placeholder:"Код ЄДРПОУ (ІНН)",...s("taxCode")}),e.jsx("p",{children:t.taxCode&&t.taxCode.message})]}),h==="fop"&&e.jsxs(n,{children:[e.jsx(c,{children:"Дата народження"}),e.jsx(o,{type:"text",placeholder:"Дата народження",...s("dayOfBirthday")}),e.jsx("p",{children:t.dayOfBirthday&&t.dayOfBirthday.message})]}),e.jsxs(n,{children:[e.jsx(c,{children:"Номер телефону*"}),e.jsx(o,{type:"text",placeholder:"Номер телефону",...s("telNumber")}),console.log("errors",t),e.jsx("p",{children:t.telNumber&&t.telNumber.message})]}),e.jsxs(n,{children:[e.jsx(c,{children:"E-mail*"}),e.jsx(o,{type:"text",placeholder:"E-mail",...s("email")}),e.jsx("p",{children:t.email&&t.email.message})]}),e.jsxs(n,{children:[e.jsx(c,{children:"Надання доступу до*"}),e.jsx(o,{type:"text",placeholder:"Надання доступу до",...s("dateOfAccess")}),e.jsx("p",{children:t.dateOfAccess&&t.dateOfAccess.message})]}),e.jsxs(n,{children:[e.jsx(c,{children:"Остання оплата* "}),e.jsx(o,{type:"text",placeholder:"Остання оплата",...s("lastPay")}),e.jsx("p",{children:t.lastPay&&t.lastPay.message})]}),e.jsxs(n,{children:[e.jsx(c,{children:"Контактна особа* "}),e.jsx(o,{type:"text",placeholder:"Контактна особа",...s("contactFace")}),e.jsx("p",{children:t.contactFace&&t.contactFace.message})]}),e.jsxs(n,{children:[e.jsx(c,{children:"Ідентифікаційний номер* "}),e.jsx(o,{type:"text",placeholder:"Ідентифікаційний номер",...s("taxCodeContactFace")}),e.jsx("p",{children:t.taxCodeContactFace&&t.taxCodeContactFace.message})]}),e.jsxs(n,{children:[e.jsx(c,{children:"Номер телефону* "}),e.jsx(o,{type:"text",placeholder:"Номер телефону",...s("telNumberContactFace")}),e.jsx("p",{children:t.telNumberContactFace&&t.telNumberContactFace.message})]}),e.jsxs(n,{children:[e.jsx(c,{children:"E-mail "}),e.jsx(o,{type:"text",placeholder:"E-mail",...s("emailContactFace")}),e.jsx("p",{children:t.emailContactFace&&t.emailContactFace.message})]}),e.jsx(e.Fragment,{})]}),e.jsxs(me,{children:[e.jsxs(je,{children:[e.jsx(fe,{children:"Примітка "}),e.jsx(ue,{type:"text",placeholder:"Примітка",...s("comment")}),e.jsx("p",{children:t.comment&&t.comment.message})]}),e.jsx(ge,{type:"submit",children:"Додати"})]})]}),a==="MusicEditor"&&e.jsxs("div",{children:[e.jsxs(q,{children:[e.jsxs(I,{children:[e.jsxs(n,{children:[e.jsx("label",{children:"Прізвище"}),e.jsx("input",{type:"text",placeholder:"Прізвище",...s("lastName")}),e.jsx("p",{children:t.lastName&&t.lastName.message})]}),e.jsxs(n,{children:[e.jsx("label",{children:"Ім'я"}),e.jsx("input",{type:"text",placeholder:"Ім'я",...s("firstName")}),e.jsx("p",{children:t.firstName&&t.firstName.message})]}),e.jsxs(n,{children:[e.jsx("label",{children:"По-батькові"}),e.jsx("input",{type:"text",placeholder:"По-батькові",...s("fatherName")}),e.jsx("p",{children:t.fatherName&&t.fatherName.message})]})]}),e.jsxs(n,{children:[e.jsx(c,{children:"Ідентифікаційний номер*"}),e.jsx(o,{type:"text",placeholder:"234567891",...s("taxCode")}),e.jsx("p",{children:t.taxCode&&t.taxCode.message})]}),e.jsxs(n,{children:[e.jsx(c,{children:"Дата народження"}),e.jsx(o,{type:"text",placeholder:"Дата народження",...s("dayOfBirthday")}),e.jsx("p",{children:t.dayOfBirthday&&t.dayOfBirthday.message})]}),e.jsxs(n,{children:[e.jsx(c,{children:"Номер телефону*"}),e.jsx(o,{type:"text",placeholder:"Номер телефону",...s("telNumber")}),console.log("errors",t),e.jsx("p",{children:t.telNumber&&t.telNumber.message})]}),e.jsxs(n,{children:[e.jsx(c,{children:"E-mail*"}),e.jsx(o,{type:"text",placeholder:"E-mail",...s("email")}),e.jsx("p",{children:t.email&&t.email.message})]})]}),e.jsxs(n,{children:[e.jsx("label",{children:"Примітка "}),e.jsx("textarea",{type:"text",placeholder:"Примітка",...s("comment")}),e.jsx("p",{children:t.comment&&t.comment.message})]}),e.jsx("button",{type:"submit",children:"Отправить"})]})]})})]})},ve=()=>{const{data:r,isLoading:a}=J(),[x,m]=p.useState(!1),u=()=>{m(!0)},d=()=>{m(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(X,{children:"Користувачі"}),e.jsxs(Y,{children:[e.jsx("button",{type:"button",onClick:u,children:"Додати"}),e.jsx(_,{type:"text",id:"search",name:"search",placeholder:"Пошук користувача"})]}),!a&&e.jsx(ee,{users:r.allUsers}),x&&e.jsx(oe,{width:"898px",padding:"24px",onClose:d,children:e.jsx(be,{onCloseModal:d})})]})};export{ve as default};
