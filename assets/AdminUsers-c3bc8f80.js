import{j as e,n as i,r as m,a as z,b as G,d as l,e as K,f as Q,g as V,h as W,o as Z,u as H}from"./index-59a03836.js";import{f as J,S as X,I as Y}from"./AdminCabinetPage.styled-8d7415b6.js";const _=({users:r})=>e.jsx(e.Fragment,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Name"}),e.jsx("th",{children:"Day of Birthday"}),e.jsx("th",{children:"Tel Number"}),e.jsx("th",{children:"Email"})]})}),e.jsx("tbody",{children:r.map((n,h)=>e.jsxs("tr",{children:[e.jsx("td",{children:n.firstName}),e.jsxs("td",{children:[n.lastName," ",n.fatherName]}),e.jsx("td",{children:n.dayOfBirthday}),e.jsx("td",{children:n.telNumber}),e.jsx("td",{children:n.email})]},h))})]})}),ee=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`,te=i.div`
  width: ${r=>r.width};
  padding: ${r=>r.padding};
  border-radius: 15px;
  background: #7f99c0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,se=i.button`
  position: absolute;
  top: 24px;
  right: 24px;
  border: none;
  background: none;
  cursor: pointer;
`,ae=r=>i(r)`
  width: 24px;
  height: 24px;
`,re=r=>m.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},m.createElement("path",{d:"M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z",fill:"#17161C"})),ie=document.querySelector("#modal-root"),ne=ae(re),le=({width:r,padding:n,bcgTransparent:h,showCloseButton:p,children:u,onClose:o})=>{m.useEffect(()=>{const s=C=>{C.code==="Escape"&&o()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[o]);const F=s=>{s.currentTarget===s.target&&o()},f={display:p?"block":"none"},M={backgroundColor:h?"rgba(0, 0, 0, 0)":"rgba(18, 20, 23, 0.5)"};return z.createPortal(e.jsx(ee,{onClick:F,style:M,children:e.jsxs(te,{width:r,padding:n,children:[e.jsx(se,{onClick:o,style:f,children:e.jsx(ne,{})}),u]})}),ie)},S=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,g=/^([а-яА-ЯїЇіІєЄ'ʼ-])+$/,L=/^[0-9]+$/,v=/\d{2}\.\d{2}\.\d{4}/,T=/^\+?3?8?(0\d{2}\d{3}\d{2}\d{2})$/,ce=G().shape({name:l().required("Must be filled!").matches(g,"This is an ERROR name"),firstName:l().required("Must be filled!").matches(g,"This is an ERROR name"),lastName:l().required("Must be filled!").matches(g,"This is an ERROR name"),fatherName:l().matches(g,"This is an ERROR name"),contractNumber:l().min(6,"Must be between 6 and 16 characters!").max(16,"Must be between 6 and 16 characters!").required("Must be filled!"),taxCode:l().min(10,"Must be  10 characters!").max(10,"Must be  10 characters!").required("Must be filled!").matches(L,"This is an ERROR taxCode"),dayOfBirthday:l().required("Must be filled!").matches(v,"This is an ERROR taxCode"),telNumber:l().required("Must be filled!").matches(T,"This is an ERROR taxCode"),email:l().required("Must be filled!").matches(S,"This is an ERROR taxCode"),dateOfAccess:l().required("Must be filled!").matches(v,"This is an ERROR taxCode"),lastPay:l().required("Must be filled!").matches(v,"This is an ERROR taxCode"),contactFace:l().required("Must be filled!"),taxCodeContactFace:l().min(10,"Must be  10 characters!").max(10,"Must be  10 characters!").required("Must be filled!").matches(L,"This is an ERROR taxCode"),telNumberContactFace:l().required("Must be filled!").matches(T,"This is an ERROR taxCode"),emailContactFace:l().required("Must be filled!").matches(S,"This is an ERROR taxCode"),comment:l()});i.input`
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

`,oe=i.div`
margin-bottom: 24px;
/* display: block; */
/* display: flex;
justify-content: left;
gap: 48px; */


`,he=i.div`
  display: flex;
  width: 100%;
  flex-direction: column;

`,U=i.div`
  display: flex;
  flex-direction: column;

`,a=i.div`
  display: flex;
  width: 558px;
  font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;


background: rgba(234, 234, 234, 0.32);
height: 42px;
  
`,c=i.input`

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
  
`,d=i.label`
 /* border: 0.5px solid  #17161C; */
 border: 0.25px solid  rgba(23, 22, 28, 0.5);
 background:rgba(234, 234, 234, 0.32);
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
  
`,B=i.button`
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


`,q=i.div`
  display: flex;
  
`;i.div`
  display: flex;
  flex-direction: column;
  `;const b=i.div`
  display: flex;
  flex-direction: column;
  border: 0.25px solid  rgba(23, 22, 28, 0.5);
 background:rgba(234, 234, 234, 0.32);
  `,y=i.label`
  display: flex;
  flex-direction: column;
  border:none;
 background:rgba(234, 234, 234, 0.32);
  `,E=i.input`
  display: flex;
  flex-direction: column;
  border: 0.25px solid  rgba(23, 22, 28, 0.5);
 background:rgba(234, 234, 234, 0.32);
  `,xe=({onCloseModal:r})=>{const[n,h]=m.useState("NewUser"),[p,{isLoading:u}]=K(),[o,{isLoading:F}]=Q(),f=V(),{control:M,register:s,handleSubmit:C,setError:me,clearErrors:A,formState:{errors:t,isValid:pe,dirtyFields:je}}=W({mode:"onChange",resolver:Z(ce)}),[j,$]=m.useState("false"),O=()=>{$(j==="true"?"false":"true"),console.log("typeStatus",j)},[x,I]=m.useState("fop"),P=()=>{I(x==="tov"?"fop":"tov")},D=N=>{const R={...N,status:j,userFop:x};console.log(R),x==="fop"&&p(R).unwrap().then(()=>{f("/admin/users"),r()}).catch(w=>console.log(w.data.message)),x==="tov"&&o(R).unwrap().then(()=>{f("/admin/users"),r()}).catch(w=>console.log(w.data.message))},k=N=>{h(N),A()};return e.jsxs(de,{children:[e.jsxs(oe,{children:[e.jsx(B,{isActive:n==="NewUser",onClick:()=>k("NewUser"),children:"Новий користувач"}),e.jsx(B,{isActive:n==="MusicEditor",onClick:()=>k("MusicEditor"),children:"Музичний редактор"})]}),n==="NewUser"&&e.jsx("button",{onClick:P,children:x==="tov"?"ТОВ":"ФОП"}),e.jsx(he,{children:e.jsx("form",{onSubmit:C(D),children:e.jsxs("div",{children:[n==="NewUser"&&e.jsxs(e.Fragment,{children:[e.jsxs(U,{children:[e.jsx(q,{children:x==="fop"?e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:[e.jsx(y,{children:"Прізвище"}),e.jsx("input",{type:"text",placeholder:"Прізвище",...s("lastName")}),e.jsx("p",{children:t.lastName&&t.lastName.message})]}),e.jsxs(b,{children:[e.jsx(y,{children:"Ім'я"}),e.jsx(E,{type:"text",placeholder:"Ім'я",...s("firstName")}),e.jsx("p",{children:t.firstName&&t.firstName.message})]}),e.jsxs(b,{children:[e.jsx(y,{children:"По-батькові"}),e.jsx(E,{type:"text",placeholder:"По-батькові",...s("fatherName")}),e.jsx("p",{children:t.fatherName&&t.fatherName.message})]}),e.jsx("button",{onClick:O,children:j==="true"?"On":"Off"})]}):e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:[e.jsx(y,{children:"Назва компанії"}),e.jsx(E,{type:"text",placeholder:"Назва компанії",...s("name")}),e.jsx("p",{children:t.name&&t.lastName.message})]}),e.jsx("button",{onClick:O,children:j==="true"?"On":"Off"})]})}),e.jsxs(a,{children:[e.jsx(d,{children:"№ договору"}),e.jsx(c,{type:"text",placeholder:"№ договору",...s("contractNumber")}),e.jsx("p",{children:t.contractNumber&&t.contractNumber.message})]}),e.jsxs(a,{children:[e.jsx(d,{children:"Код ЄДРПОУ (ІНН)*"}),e.jsx(c,{type:"text",placeholder:"Код ЄДРПОУ (ІНН)",...s("taxCode")}),e.jsx("p",{children:t.taxCode&&t.taxCode.message})]}),x==="fop"&&e.jsxs(a,{children:[e.jsx(d,{children:"Дата народження"}),e.jsx(c,{type:"text",placeholder:"Дата народження",...s("dayOfBirthday")}),e.jsx("p",{children:t.dayOfBirthday&&t.dayOfBirthday.message})]}),e.jsxs(a,{children:[e.jsx(d,{children:"Номер телефону*"}),e.jsx(c,{type:"text",placeholder:"Номер телефону",...s("telNumber")}),console.log("errors",t),e.jsx("p",{children:t.telNumber&&t.telNumber.message})]}),e.jsxs(a,{children:[e.jsx(d,{children:"E-mail*"}),e.jsx(c,{type:"text",placeholder:"E-mail",...s("email")}),e.jsx("p",{children:t.email&&t.email.message})]}),e.jsxs(a,{children:[e.jsx(d,{children:"Надання доступу до*"}),e.jsx(c,{type:"text",placeholder:"Надання доступу до",...s("dateOfAccess")}),e.jsx("p",{children:t.dateOfAccess&&t.dateOfAccess.message})]}),e.jsxs(a,{children:[e.jsx(d,{children:"Остання оплата* "}),e.jsx(c,{type:"text",placeholder:"Остання оплата",...s("lastPay")}),e.jsx("p",{children:t.lastPay&&t.lastPay.message})]}),e.jsxs(a,{children:[e.jsx(d,{children:"Контактна особа* "}),e.jsx(c,{type:"text",placeholder:"Контактна особа",...s("contactFace")}),e.jsx("p",{children:t.contactFace&&t.contactFace.message})]}),e.jsxs(a,{children:[e.jsx(d,{children:"Ідентифікаційний номер* "}),e.jsx(c,{type:"text",placeholder:"Ідентифікаційний номер",...s("taxCodeContactFace")}),e.jsx("p",{children:t.taxCodeContactFace&&t.taxCodeContactFace.message})]}),e.jsxs(a,{children:[e.jsx(d,{children:"Номер телефону* "}),e.jsx(c,{type:"text",placeholder:"Номер телефону",...s("telNumberContactFace")}),e.jsx("p",{children:t.telNumberContactFace&&t.telNumberContactFace.message})]}),e.jsxs(a,{children:[e.jsx(d,{children:"E-mail "}),e.jsx(c,{type:"text",placeholder:"E-mail",...s("emailContactFace")}),e.jsx("p",{children:t.emailContactFace&&t.emailContactFace.message})]}),e.jsx(e.Fragment,{})]}),e.jsxs(a,{children:[e.jsx("label",{children:"Примітка "}),e.jsx("textarea",{type:"text",placeholder:"Примітка",...s("comment")}),e.jsx("p",{children:t.comment&&t.comment.message})]}),e.jsx("button",{type:"submit",children:"Отправить"})]}),n==="MusicEditor"&&e.jsxs("div",{children:[e.jsxs(U,{children:[e.jsxs(q,{children:[e.jsxs(a,{children:[e.jsx("label",{children:"Прізвище"}),e.jsx("input",{type:"text",placeholder:"Прізвище",...s("lastName")}),e.jsx("p",{children:t.lastName&&t.lastName.message})]}),e.jsxs(a,{children:[e.jsx("label",{children:"Ім'я"}),e.jsx("input",{type:"text",placeholder:"Ім'я",...s("firstName")}),e.jsx("p",{children:t.firstName&&t.firstName.message})]}),e.jsxs(a,{children:[e.jsx("label",{children:"По-батькові"}),e.jsx("input",{type:"text",placeholder:"По-батькові",...s("fatherName")}),e.jsx("p",{children:t.fatherName&&t.fatherName.message})]})]}),e.jsxs(a,{children:[e.jsx(d,{children:"Ідентифікаційний номер*"}),e.jsx(c,{type:"text",placeholder:"234567891",...s("taxCode")}),e.jsx("p",{children:t.taxCode&&t.taxCode.message})]}),e.jsxs(a,{children:[e.jsx(d,{children:"Дата народження"}),e.jsx(c,{type:"text",placeholder:"Дата народження",...s("dayOfBirthday")}),e.jsx("p",{children:t.dayOfBirthday&&t.dayOfBirthday.message})]}),e.jsxs(a,{children:[e.jsx(d,{children:"Номер телефону*"}),e.jsx(c,{type:"text",placeholder:"Номер телефону",...s("telNumber")}),console.log("errors",t),e.jsx("p",{children:t.telNumber&&t.telNumber.message})]}),e.jsxs(a,{children:[e.jsx(d,{children:"E-mail*"}),e.jsx(c,{type:"text",placeholder:"E-mail",...s("email")}),e.jsx("p",{children:t.email&&t.email.message})]})]}),e.jsxs(a,{children:[e.jsx("label",{children:"Примітка "}),e.jsx("textarea",{type:"text",placeholder:"Примітка",...s("comment")}),e.jsx("p",{children:t.comment&&t.comment.message})]}),e.jsx("button",{type:"submit",children:"Отправить"})]})]})})})]})},ge=()=>{const{data:r,isLoading:n}=H(),[h,p]=m.useState(!1),u=()=>{p(!0)},o=()=>{p(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(J,{children:"Користувачі"}),e.jsxs(X,{children:[e.jsx("button",{type:"button",onClick:u,children:"Додати"}),e.jsx(Y,{type:"text",id:"search",name:"search",placeholder:"Пошук користувача"})]}),!n&&e.jsx(_,{users:r}),h&&e.jsx(le,{width:"898px",padding:"24px",onClose:o,children:e.jsx(xe,{onCloseModal:o})})]})};export{ge as default};
