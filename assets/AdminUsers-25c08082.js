import{j as a,F as ea,G as m,H as p,I as h,J as o,K as sa,N as C,O as $,P as y,Q as ta,U as ca,V as ia,W as la,X as R,Y as na,Z as oa,_ as da,$ as ma,B as F,r as b,a0 as xa,a1 as pa,a2 as ha,a3 as ua,g as ja,a4 as ba,a5 as Na,a6 as I,a7 as L,a8 as fa,M as U,k,a9 as ra,aa as va,ab as ga,ac as Ta,ad as Ca,ae as $a,T as ya,af as Fa,ag as Ma,ah as B,ai as Ea}from"./index-8e968c07.js";const wa=({register:d,errors:t,margintop:s,control:c,dirtyFields:i})=>a.jsxs(ea,{margintop:s,children:[a.jsxs(m,{children:[a.jsx(p,{children:"Контактна особа* "}),a.jsx(h,{type:"text",placeholder:"Контактна особа","aria-describedby":"contactFaceTooltip",className:`${t.contactFace?"invalid":""}${!t.contactFace&&i.contactFace?"valid":""}`,...d("contactFace")}),a.jsxs(o,{id:"contactFaceTooltip",className:`${t.contactFace?"visible":""}`,children:[" ",t.contactFace&&t.contactFace.message]})]}),a.jsxs(m,{children:[a.jsx(p,{children:"Ідентифікаційний номер* "}),a.jsx(h,{type:"text",placeholder:"Ідентифікаційний номер","aria-describedby":"contactFaceTaxCodeTooltip",className:`${t.contactFaceTaxCode?"invalid":""}${!t.contactFaceTaxCode&&i.contactFaceTaxCode?"valid":""}`,...d("contactFaceTaxCode")}),a.jsxs(o,{id:"contactFaceTaxCodeTooltip",className:`${t.contactFaceTaxCode?"visible":""}`,children:[" ",t.contactFaceTaxCode&&t.contactFaceTaxCode.message]})]}),a.jsxs(m,{children:[a.jsx(p,{children:"Номер телефону* "}),a.jsx(h,{type:"text",placeholder:"Номер телефону","aria-describedby":"contactFaceTelNumberTooltip",className:`${t.contactFaceTelNumber?"invalid":""}${!t.contactFaceTelNumber&&i.contactFaceTelNumber?"valid":""}`,...d("contactFaceTelNumber")}),a.jsxs(o,{id:"contactFaceTelNumberTooltip",className:`${t.contactFaceTelNumber?"visible":""}`,children:[" ",t.contactFaceTelNumber&&t.contactFaceTelNumber.message]}),a.jsx("p",{})]}),a.jsxs(m,{children:[a.jsx(p,{children:"E-mail "}),a.jsx(h,{type:"text",placeholder:"E-mail","aria-describedby":"contactFaceEmailTooltip",className:`${t.contactFaceEmail?"invalid":""}${!t.contactFaceEmail&&i.contactFaceEmail?"valid":""}`,...d("contactFaceEmail")}),a.jsxs(o,{id:"contactFaceEmailTooltip",className:`${t.contactFaceEmail?"visible":""}`,children:[" ",t.contactFaceEmail&&t.contactFaceEmail.message]})]})]}),Ua=({form:d,register:t,errors:s,typeOfUser:c,typeOfStatus:i,handleTypeOfAccess:u,isValid:l,activeSection:e,dirtyFields:n})=>a.jsxs(sa,{children:[c==="fop"||e==="MusicEditor"?a.jsxs(a.Fragment,{children:[a.jsxs(C,{children:[a.jsx($,{children:"Прізвище"}),a.jsx(y,{type:"text",placeholder:"Прізвище","aria-describedby":"lastNameTooltip",className:`${s.lastName?"invalid":""}${!s.lastName&&n.lastName?"valid":""}`,...t("lastName")}),a.jsx(o,{id:"lastNameTooltip",className:`${s.lastName?"visible":""}`,children:s.lastName&&s.lastName.message})]}),a.jsxs(C,{children:[a.jsx($,{children:"Ім'я"}),a.jsx(y,{type:"text",placeholder:"Ім'я","aria-describedby":"firstNameTooltip",className:`${s.firstName?"invalid":""}${!s.firstName&&n.firstName?"valid":""}`,...t("firstName")}),a.jsx(o,{id:"firstNameTooltip",className:`${s.firstName?"visible":""}`,children:s.firstName&&s.firstName.message})]}),a.jsxs(C,{children:[a.jsx($,{children:"По-батькові"}),a.jsx(y,{type:"text",placeholder:"По-батькові","aria-describedby":"fatherNameTooltip",className:`${s.fatherName?"invalid":""}${!s.fatherName&&n.fatherName?"valid":""}`,...t("fatherName")}),a.jsx(o,{id:"firstNameTooltip",className:`${s.fatherName?"visible":""}`,children:s.fatherName&&s.fatherName.message})]})]}):a.jsxs(C,{children:[a.jsx($,{children:"Назва компанії"}),a.jsx(y,{type:"text",width:"100%",placeholder:"Назва компанії","aria-describedby":"nameTooltip",className:`${s.name?"invalid":""}${!s.name&&n.name?"valid":""}`,...t("name")})," ",a.jsx(o,{id:"firstNameTooltip",className:`${s.name?"visible":""}`,children:s.name&&s.name.message})]}),a.jsx(ta,{type:"button",isTrue:i,handleTypeOfAccess:u,form:!0})]}),P=({dirtyFields:d,control:t,isValid:s,errors:c,register:i,typeOfUser:u})=>a.jsxs(a.Fragment,{children:[a.jsxs(m,{children:[a.jsx(p,{children:"Код ЄДРПОУ (ІНН)*"}),a.jsx(h,{type:"text",placeholder:"Код ЄДРПОУ (ІНН)","aria-describedby":"taxCodeTooltip",className:`${c.taxCode?"invalid":""}${!c.taxCode&&d.taxCode?"valid":""}`,...i("taxCode")}),a.jsx(o,{id:"taxCodeTooltip",className:`${c.taxCode?"visible":""}`,children:c.taxCode&&c.taxCode.message})]}),a.jsxs(m,{children:[a.jsx(p,{children:"Назва закладу"}),a.jsx(h,{type:"text",placeholder:"Назва закладу","aria-describedby":"institutionTooltip",className:`${c.institution?"invalid":""}${!c.institution&&d.institution?"valid":""}`,...i("institution")}),a.jsx(o,{id:"institutionTooltip",className:`${c.institution?"visible":""}`,children:c.institution&&c.institution.message})]}),a.jsxs(m,{children:[a.jsx(p,{children:"Номер телефону*"}),a.jsx(h,{type:"text",placeholder:"Номер телефону","aria-describedby":"telNumberTooltip",className:`${c.telNumber?"invalid":""}${!c.telNumber&&d.telNumber?"valid":""}`,...i("telNumber")}),a.jsx(o,{id:"telNumberTooltip",className:`${c.telNumber?"visible":""}`,children:c.telNumber&&c.telNumber.message})]}),a.jsxs(m,{children:[a.jsx(p,{children:"E-mail*"}),a.jsx(h,{type:"text",placeholder:"E-mail","aria-describedby":"emailTooltip",className:`${c.email?"invalid":""}${!c.email&&d.email?"valid":""}`,...i("email")})," ",a.jsx(o,{id:"emailTooltip",className:`${c.email?"visible":""}`,children:c.email&&c.email.message})]})]}),Aa=({form:d,control:t,handleTypeOfAccess:s,activeSection:c,typeOfStatus:i,typeOfUser:u,isValid:l,errors:e,register:n,dirtyFields:x})=>a.jsxs(ca,{children:[a.jsxs(ia,{children:[a.jsx(Ua,{form:d,handleTypeOfAccess:s,register:n,errors:e,typeOfUser:u,typeOfStatus:i,isValid:l,activeSection:c,dirtyFields:x}),c==="User"&&a.jsxs(a.Fragment,{children:[a.jsxs(m,{children:[a.jsx(p,{children:"№ договору"}),a.jsx(h,{type:"text",placeholder:"№ договору","aria-describedby":"contractNumberTooltip",className:`${e.contractNumber?"invalid":""}${!e.contractNumber&&x.contractNumber?"valid":""}`,...n("contractNumber")}),a.jsx(o,{id:"contractNumberTooltip",className:`${e.contractNumber?"visible":""}`,children:e.contractNumber&&e.contractNumber.message})]}),a.jsx(P,{typeOfUser:u,register:n,control:t,isValid:l,errors:e,readOnly:"false",dirtyFields:x}),a.jsxs(m,{children:[a.jsx(p,{children:"Надання доступу до*"}),a.jsx(h,{type:"text",placeholder:"Надання доступу до","aria-describedby":"dateOfAccessTooltip",className:`${e.dateOfAccess?"invalid":""}${!e.dateOfAccess&&x.dateOfAccess?"valid":""}`,...n("dateOfAccess")}),a.jsx(o,{id:"dateOfAccessTooltip",className:`${e.dateOfAccess?"visible":""}`,children:e.dateOfAccess&&e.dateOfAccess.message})]}),a.jsxs(m,{children:[a.jsx(p,{children:"Остання оплата* "}),a.jsx(h,{type:"text",placeholder:"Остання оплата","aria-describedby":"lastPayTooltip",className:`${e.lastPay?"invalid":""}${!e.lastPay&&x.lastPay?"valid":""}`,...n("lastPay")}),a.jsx(o,{id:"lastPayTooltip",className:`${e.lastPay?"visible":""}`,children:e.lastPay&&e.lastPay.message})]}),a.jsx(wa,{control:t,register:n,errors:e,margintop:"36px",isValid:l,dirtyFields:x})]}),c==="MusicEditor"&&a.jsxs(a.Fragment,{children:[a.jsx(P,{typeOfUser:"fop",register:n,control:t,isValid:l,errors:e,readOnly:"false",dirtyFields:x}),a.jsxs(la,{children:[a.jsxs(m,{children:[a.jsx(R,{type:"text",placeholder:"Логін","aria-describedby":"loginTooltip",className:`${e.login?"invalid":""}${!e.login&&x.login?"valid":""}`,...n("login")}),a.jsx(o,{id:"loginTooltip",className:`${e.login?"visible":""}`,children:e.login&&e.login.message})]}),a.jsxs(m,{children:[a.jsx(R,{type:"text",placeholder:"Пароль","aria-describedby":"passwordTooltip",className:`${e.password?"invalid":""}${!e.password&&x.password?"valid":""}`,...n("password")}),a.jsx(o,{id:"passwordTooltip",className:`${e.password?"visible":""}`,children:e.password&&e.password.message})]})]})]})]}),a.jsxs(na,{children:[a.jsxs(oa,{children:[a.jsx(da,{children:"Примітка "}),a.jsx(ma,{type:"text",placeholder:"Примітка",...n("comment")})]}),a.jsx(F,{type:"submit",padding:"8px",text:"Додати",disabled:!l||x.dateOfAccess&&e.dateOfAccess,showIcon:!1})]})]}),Sa=({onCloseModal:d,section:t})=>{const[s,c]=b.useState(t),[i,u]=b.useState(!1),[l,e]=b.useState("fop"),[n,{isLoading:x}]=xa(),[D,{isLoading:Oa}]=pa(),[W,{isLoading:Ra}]=ha(),M=ua();let G=s==="MusicEditor"?va:l==="fop"?ga:Ta;const{control:H,register:J,handleSubmit:K,reset:E,formState:{errors:Q,isValid:X,dirtyFields:Y}}=ja({mode:"onChange",resolver:ba(G)}),[A,T]=b.useState(null),[Z,w]=b.useState(""),f=N=>{T(N)},_=()=>{T(null)},q=()=>{E(),T(null)},S=()=>{d(),T(null)},z=()=>{u(i!==!0)},V=N=>{if(s==="MusicEditor"){const r={...N,editorRole:!0,status:!0,access:i};W(r).unwrap().then(()=>{M("/admin/users/editors"),f("successAdd")}).catch(v=>{var j;let g=(j=v.data)==null?void 0:j.message;w(g),f("error")});return}if(l==="fop"){const r={...N,access:i,userFop:l};n(r).unwrap().then(()=>{f("successAdd"),M("/admin/users/allusers")}).catch(v=>{var j;let g=(j=v.data)==null?void 0:j.message;w(g),f("error")})}if(l==="tov"){const r={...N,access:i,userFop:l};D(r).unwrap().then(()=>{M("/admin/users/allusers"),f("successAdd")}).catch(v=>{var j;let g=(j=v.data)==null?void 0:j.message;w(g),f("error")})}},O=N=>{c(N),E()},aa=()=>{e(l==="tov"?"fop":"tov"),E()};return a.jsxs(a.Fragment,{children:[a.jsxs(Na,{children:[a.jsxs(I,{children:[a.jsx(L,{isActive:s==="User",onClick:()=>O("User"),children:"Новий користувач"}),a.jsx(L,{isActive:s==="MusicEditor",onClick:()=>O("MusicEditor"),children:"Музичний редактор"})]}),s==="User"&&a.jsx(fa,{type:"button",onClick:aa,children:l==="tov"?"ТОВ":"ФОП"}),a.jsx("form",{onSubmit:K(V),children:a.jsx(Aa,{control:H,handleTypeOfAccess:z,typeOfStatus:i,register:J,isValid:X,errors:Q,activeSection:s,typeOfUser:l,dirtyFields:Y})})]}),A==="successAdd"&&a.jsxs(U,{width:"664px",padding:"138px 138px 74px",onClose:S,showCloseButton:!0,flexDirection:"column",children:[a.jsx(k,{children:"Новий користувач успішно додан"}),a.jsxs(ra,{children:[a.jsx(F,{type:"button",padding:"8px 37px",height:"48px",text:"Готово",showIcon:!1,onClick:S}),a.jsx(F,{type:"button",padding:"8px 44px",height:"48px",text:"Додати ще",showIcon:!1,marginleft:"31px",onClick:q})]})]}),A==="error"&&a.jsx(U,{width:"520px",padding:"24px",onClose:_,showCloseButton:!0,children:a.jsxs(k,{children:[" ",Z]})})]})},ka=()=>{const[d,t]=b.useState(!1),[s,c]=b.useState("User"),i=Ca();b.useEffect(()=>{const e=i.pathname.split("/").pop();e==="allusers"?c("User"):e==="editors"&&c("MusicEditor")},[i.pathname]);const u=()=>{t(!0),document.body.classList.add("modal-open")},l=()=>{document.body.classList.remove("modal-open"),t(!1)};return a.jsxs(a.Fragment,{children:[a.jsxs($a,{children:[a.jsx(ya,{children:"Користувачі"}),a.jsx(F,{showIcon:!0,icon:`${Fa}#icon-plus`,type:"button",padding:"12px 46px",onClick:u,marginright:"24px",marginleft:"auto",text:"Додати",ariaLabel:"Додати користувача"}),a.jsx(Ma,{})]}),a.jsxs(I,{children:[a.jsx(B,{to:"allusers",activeclassname:s==="User"?"active":"",onClick:()=>c("User"),children:"Усі користувачі"}),a.jsx(B,{to:"editors",activeclassname:s==="MusicEditor"?"active":"",onClick:()=>{c("MusicEditor")},children:"Музичні редактори та адміністратори"})]}),a.jsx(Ea,{}),d&&a.jsx(U,{width:"898px",padding:"24px",onClose:l,showCloseButton:!0,children:a.jsx(Sa,{onCloseModal:l,section:s})})]})};export{ka as default};
