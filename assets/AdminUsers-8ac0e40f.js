import{j as a,R as z,q as x,s as p,t as h,v as o,w as G,x as f,y as v,z as T,B as H,F as J,A as K,C as Q,D as C,G as V,H as X,I as Y,J as Z,K as S,r as N,M as _,N as aa,O as ea,P as ta,g as sa,Q as ca,U as ia,V as r,W as E,X as la,Y as na,Z as oa,_ as da,$ as ma,a0 as xa,T as pa,a1 as ha,a2 as ua,a3 as U,a4 as ja,a5 as Na}from"./index-e9615bdd.js";const ba=({register:c,errors:e,margintop:l,control:s,dirtyFields:i})=>a.jsxs(z,{margintop:l,children:[a.jsxs(x,{children:[a.jsx(p,{children:"Контактна особа* "}),a.jsx(h,{type:"text",placeholder:"Контактна особа","aria-describedby":"contactFaceTooltip",className:`${e.contactFace?"invalid":""}${!e.contactFace&&i.contactFace?"valid":""}`,...c("contactFace")}),a.jsxs(o,{id:"contactFaceTooltip",className:`${e.contactFace?"visible":""}`,children:[" ",e.contactFace&&e.contactFace.message]})]}),a.jsxs(x,{children:[a.jsx(p,{children:"Ідентифікаційний номер* "}),a.jsx(h,{type:"text",placeholder:"Ідентифікаційний номер","aria-describedby":"contactFaceTaxCodeTooltip",className:`${e.contactFaceTaxCode?"invalid":""}${!e.contactFaceTaxCode&&i.contactFaceTaxCode?"valid":""}`,...c("contactFaceTaxCode")}),a.jsxs(o,{id:"contactFaceTaxCodeTooltip",className:`${e.contactFaceTaxCode?"visible":""}`,children:[" ",e.contactFaceTaxCode&&e.contactFaceTaxCode.message]})]}),a.jsxs(x,{children:[a.jsx(p,{children:"Номер телефону* "}),a.jsx(h,{type:"text",placeholder:"Номер телефону","aria-describedby":"contactFaceTelNumberTooltip",className:`${e.contactFaceTelNumber?"invalid":""}${!e.contactFaceTelNumber&&i.contactFaceTelNumber?"valid":""}`,...c("contactFaceTelNumber")}),a.jsxs(o,{id:"contactFaceTelNumberTooltip",className:`${e.contactFaceTelNumber?"visible":""}`,children:[" ",e.contactFaceTelNumber&&e.contactFaceTelNumber.message]}),a.jsx("p",{})]}),a.jsxs(x,{children:[a.jsx(p,{children:"E-mail "}),a.jsx(h,{type:"text",placeholder:"E-mail","aria-describedby":"contactFaceEmailTooltip",className:`${e.contactFaceEmail?"invalid":""}${!e.contactFaceEmail&&i.contactFaceEmail?"valid":""}`,...c("contactFaceEmail")}),a.jsxs(o,{id:"contactFaceEmailTooltip",className:`${e.contactFaceEmail?"visible":""}`,children:[" ",e.contactFaceEmail&&e.contactFaceEmail.message]})]})]}),fa=({register:c,errors:e,typeOfUser:l,typeOfStatus:s,handleTypeOfStatus:i,isValid:m,activeSection:t,dirtyFields:n})=>a.jsxs(G,{children:[l==="fop"||t==="MusicEditor"?a.jsxs(a.Fragment,{children:[a.jsxs(f,{children:[a.jsx(v,{children:"Прізвище"}),a.jsx(T,{type:"text",placeholder:"Прізвище","aria-describedby":"lastNameTooltip",className:`${e.lastName?"invalid":""}${!e.lastName&&n.lastName?"valid":""}`,...c("lastName")}),a.jsx(o,{id:"lastNameTooltip",className:`${e.lastName?"visible":""}`,children:e.lastName&&e.lastName.message})]}),a.jsxs(f,{children:[a.jsx(v,{children:"Ім'я"}),a.jsx(T,{type:"text",placeholder:"Ім'я","aria-describedby":"firstNameTooltip",className:`${e.firstName?"invalid":""}${!e.firstName&&n.firstName?"valid":""}`,...c("firstName")}),a.jsx(o,{id:"firstNameTooltip",className:`${e.firstName?"visible":""}`,children:e.firstName&&e.firstName.message})]}),a.jsxs(f,{children:[a.jsx(v,{children:"По-батькові"}),a.jsx(T,{type:"text",placeholder:"По-батькові","aria-describedby":"fatherNameTooltip",className:`${e.fatherName?"invalid":""}${!e.fatherName&&n.fatherName?"valid":""}`,...c("fatherName")}),a.jsx(o,{id:"firstNameTooltip",className:`${e.fatherName?"visible":""}`,children:e.fatherName&&e.fatherName.message})]})]}):a.jsxs(f,{children:[a.jsx(v,{children:"Назва компанії"}),a.jsx(T,{type:"text",placeholder:"Назва компанії","aria-describedby":"nameTooltip",className:`${e.name?"invalid":""}${!e.name&&n.name?"valid":""}`,...c("name")}),"  ",a.jsx(o,{id:"firstNameTooltip",className:`${e.name?"visible":""}`,children:e.name&&e.name.message})]}),a.jsx(H,{type:"button",isTrue:s,onClick:()=>i(),form:!0})]}),O=({dirtyFields:c,control:e,isValid:l,errors:s,register:i,typeOfUser:m})=>a.jsxs(a.Fragment,{children:[a.jsxs(x,{children:[a.jsx(p,{children:"Код ЄДРПОУ (ІНН)*"}),a.jsx(h,{type:"text",placeholder:"Код ЄДРПОУ (ІНН)","aria-describedby":"taxCodeTooltip",className:`${s.taxCode?"invalid":""}${!s.taxCode&&c.taxCode?"valid":""}`,...i("taxCode")}),a.jsx(o,{id:"taxCodeTooltip",className:`${s.taxCode?"visible":""}`,children:s.taxCode&&s.taxCode.message})]}),a.jsxs(x,{children:[a.jsx(p,{children:"Назва закладу"}),a.jsx(h,{type:"text",placeholder:"Назва закладу","aria-describedby":"institutionTooltip",className:`${s.institution?"invalid":""}${!s.institution&&c.institution?"valid":""}`,...i("institution")}),a.jsx(o,{id:"institutionTooltip",className:`${s.institution?"visible":""}`,children:s.institution&&s.institution.message})]}),a.jsxs(x,{children:[a.jsx(p,{children:"Номер телефону*"}),a.jsx(h,{type:"text",placeholder:"Номер телефону","aria-describedby":"telNumberTooltip",className:`${s.telNumber?"invalid":""}${!s.telNumber&&c.telNumber?"valid":""}`,...i("telNumber")}),a.jsx(o,{id:"telNumberTooltip",className:`${s.telNumber?"visible":""}`,children:s.telNumber&&s.telNumber.message})]}),a.jsxs(x,{children:[a.jsx(p,{children:"E-mail*"}),a.jsx(h,{type:"text",placeholder:"E-mail","aria-describedby":"emailTooltip",className:`${s.email?"invalid":""}${!s.email&&c.email?"valid":""}`,...i("email")})," ",a.jsx(o,{id:"emailTooltip",className:`${s.email?"visible":""}`,children:s.email&&s.email.message})]})]}),va=({control:c,handleTypeOfStatus:e,activeSection:l,typeOfStatus:s,typeOfUser:i,isValid:m,errors:t,register:n,dirtyFields:d})=>a.jsxs(J,{children:[a.jsxs(K,{children:[a.jsx(fa,{handleTypeOfStatus:e,register:n,errors:t,typeOfUser:i,typeOfStatus:s,isValid:m,activeSection:l,dirtyFields:d}),l==="User"&&a.jsxs(a.Fragment,{children:[a.jsxs(x,{children:[a.jsx(p,{children:"№ договору"}),a.jsx(h,{type:"text",placeholder:"№ договору","aria-describedby":"contractNumberTooltip",className:`${t.contractNumber?"invalid":""}${!t.contractNumber&&d.contractNumber?"valid":""}`,...n("contractNumber")}),a.jsx(o,{id:"contractNumberTooltip",className:`${t.contractNumber?"visible":""}`,children:t.contractNumber&&t.contractNumber.message})]}),a.jsx(O,{typeOfUser:i,register:n,control:c,isValid:m,errors:t,readOnly:"false",dirtyFields:d}),a.jsxs(x,{children:[a.jsx(p,{children:"Надання доступу до*"}),a.jsx(h,{type:"text",placeholder:"Надання доступу до","aria-describedby":"dateOfAccessTooltip",className:`${t.dateOfAccess?"invalid":""}${!t.dateOfAccess&&d.dateOfAccess?"valid":""}`,...n("dateOfAccess")}),a.jsx(o,{id:"dateOfAccessTooltip",className:`${t.dateOfAccess?"visible":""}`,children:t.dateOfAccess&&t.dateOfAccess.message})]}),a.jsxs(x,{children:[a.jsx(p,{children:"Остання оплата* "}),a.jsx(h,{type:"text",placeholder:"Остання оплата","aria-describedby":"lastPayTooltip",className:`${t.lastPay?"invalid":""}${!t.lastPay&&d.lastPay?"valid":""}`,...n("lastPay")}),a.jsx(o,{id:"lastPayTooltip",className:`${t.lastPay?"visible":""}`,children:t.lastPay&&t.lastPay.message})]}),a.jsx(ba,{control:c,register:n,errors:t,margintop:"36px",isValid:m,dirtyFields:d})]}),l==="MusicEditor"&&a.jsxs(a.Fragment,{children:[a.jsx(O,{typeOfUser:"fop",register:n,control:c,isValid:m,errors:t,readOnly:"false",dirtyFields:d}),a.jsxs(Q,{children:[a.jsx(C,{type:"text",placeholder:"Логін",className:`${t.login?"invalid":""}${!t.login&&d.login?"valid":""}`,...n("login")}),a.jsx(C,{type:"text",placeholder:"Пароль",className:`${t.password?"invalid":""}${!t.password&&d.password?"valid":""}`,...n("password")})]})]})]}),a.jsxs(V,{children:[a.jsxs(X,{children:[a.jsx(Y,{children:"Примітка "}),a.jsx(Z,{type:"text",placeholder:"Примітка",...n("comment")})]}),a.jsx(S,{type:"submit",padding:"8px",text:"Додати",disabled:!m||d.dateOfAccess&&t.dateOfAccess,showIcon:!1})]})]}),Ta=({onCloseModal:c,section:e})=>{const[l,s]=N.useState(e),[i,m]=N.useState(!1),[t,n]=N.useState("fop"),[d,{isLoading:$a}]=_(),[A,{isLoading:ga}]=aa(),[M,{isLoading:Fa}]=ea(),$=ta();let R=l==="MusicEditor"?na:t==="fop"?oa:da;const{control:w,register:L,handleSubmit:k,setError:ya,clearErrors:Ca,reset:g,setValue:Ea,formState:{errors:P,isValid:B,dirtyFields:I}}=sa({mode:"onChange",resolver:ca(R)}),D=()=>{m(i!==!0)},W=b=>{if(l==="MusicEditor"){const j={...b,editorRole:!0,status:!0};M(j).unwrap().then(()=>{$("/admin/users/editors"),c()}).catch(u=>{var y;return((y=u==null?void 0:u.data)==null?void 0:y.message)&&alert(u.data.message)});return}if(t==="fop"){const j={...b,access:i,userFop:t};console.log(j),d(j).unwrap().then(()=>{c(),$("/admin/users/allusers")}).catch(u=>alert(u.data.message))}if(t==="tov"){const j={...b,access:i,userFop:t};console.log(j),A(j).unwrap().then(()=>{$("/admin/users"),c()}).catch(u=>console.log(u.data))}},F=b=>{s(b),g()},q=()=>{n(t==="tov"?"fop":"tov"),g()};return console.log("activeSection",l),a.jsxs(ia,{children:[a.jsxs(r,{children:[a.jsx(E,{isActive:l==="User",onClick:()=>F("User"),children:"Новий користувач"}),a.jsx(E,{isActive:l==="MusicEditor",onClick:()=>F("MusicEditor"),children:"Музичний редактор"})]}),l==="User"&&a.jsx(la,{type:"button",onClick:q,children:t==="tov"?"ТОВ":"ФОП"}),a.jsx("form",{onSubmit:k(W),children:a.jsx(va,{control:w,handleTypeOfStatus:D,typeOfStatus:i,register:L,isValid:B,errors:P,activeSection:l,typeOfUser:t,dirtyFields:I})})]})},Oa=()=>{const[c,e]=N.useState(!1),[l,s]=N.useState("User"),i=ma();N.useEffect(()=>{const n=i.pathname.split("/").pop();n==="allusers"?s("User"):n==="editors"&&s("MusicEditor")},[i.pathname]);const m=()=>{e(!0)},t=()=>{e(!1)};return a.jsxs(a.Fragment,{children:[a.jsxs(xa,{children:[a.jsx(pa,{children:"Користувачі"}),a.jsx(S,{showIcon:!0,icon:`${ha}#icon-plus`,type:"button",padding:"12px 46px",onClick:m,marginright:"24px",marginleft:"auto",text:"Додати",ariaLabel:"Додати користувача"}),a.jsx(ua,{})]}),a.jsxs(r,{children:[a.jsx(U,{to:"allusers",activeclassname:l==="User"?"active":"",onClick:()=>s("User"),children:"Усі користувачі"}),a.jsx(U,{to:"editors",activeclassname:l==="MusicEditor"?"active":"",onClick:()=>{s("MusicEditor")},children:"Музичні редактори та адміністратори"})]}),a.jsx(ja,{}),c&&a.jsx(Na,{width:"898px",padding:"24px",onClose:t,showCloseButton:!0,children:a.jsx(Ta,{onCloseModal:t,section:l})})]})};export{Oa as default};
