import{n as x,c as h,j as e,r as s,u as N}from"./index-2a903511.js";import{S as C,T as $,I as F,a as E,b as L,c as k,d as I}from"./AdminCabinetPage.styled-31e3bce7.js";const R=x.div`
display:flex;
gap: 8px;
margin-left: 111px;
margin-top:24px;
`,a=x.p`
display:flex;
padding: 8px;
justify-content: center;
align-items: center;
border-radius: 10px;
background: ${h.primaryColor};
color:   ${h.mainFontColor};
text-align: center;
font-size: 22px;
line-height: calc(26.4 / 22); 
`,w=()=>e.jsxs(R,{children:[e.jsx(a,{children:"Нових користувачів"}),e.jsxs(a,{children:["+ ","Користувачів за вересень"]}),e.jsx(a,{children:"Доданих пісень"}),e.jsx(a,{children:"Онлайн користувачів"})]}),l={_id:{$oid:"653d71507a484cf7a52cb57a"},firstName:"Про",lastName:"Про",taxCode:"$2b$10$8uCq8.7EazWa4kIHllsDVuiCNO9QrSui.koMET3ycZ0oi2umWrtBy",dayOfBirthday:"10.10.2010",contractNumber:"TEST234459",accessToken:"",refreshToken:"",avatarURL:null,userFop:!0,telNumber:"+380501413134",email:"iw2@ua.com",contactFace:"Юзер4 Юзеров4",taxCodeContactFace:"9308797531",telNumberContactFace:"+380303154404",emailContactFace:"ia4@ua.com",status:"false",dateOfAccess:"0",lastPay:"10.10.2020",quantityPlaylists:0,quantitySongs:0,kind:"fop",createdAt:{$date:"2023-10-28T20:38:40.906Z"},updatedAt:{$date:"2023-10-28T20:38:40.906Z"}},A=()=>{const[r,u]=s.useState(""),[m,i]=s.useState([l]),[j,n]=s.useState(!1),[p,o]=s.useState(!1),{data:d,isLoading:f}=N();return console.log("users",d),s.useEffect(()=>{r.trim()!==""?(n(!0),i([l]),n(!1),o(!1)):(i([l]),n(!1),o(!1))},[r]),e.jsxs(e.Fragment,{children:[e.jsxs(C,{children:[e.jsx($,{children:"Чекають на підтвердження (посилання):"}),e.jsx(F,{type:"text",placeholder:"Пошук користувачів",value:r,onChange:t=>u(t.target.value)})]}),j?e.jsx(E,{children:"Завантаження..."}):m.length===0&&p?e.jsx(L,{children:"Результати пошуку: не знайдено"}):e.jsxs(k,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Name"}),e.jsx("th",{children:"Day "}),e.jsx("th",{children:"Tel Number"}),e.jsx("th",{children:"Email"})]})}),e.jsx("tbody",{children:!f&&d.map((t,g)=>{const c=new Date(t.createdAt),S=c.getFullYear(),y=String(c.getMonth()+1).padStart(2,"0"),T=String(c.getDate()).padStart(2,"0"),b=`${S}-${y}-${T}`;return e.jsxs("tr",{children:[e.jsx("td",{children:t.firstName}),e.jsxs("td",{children:[t.lastName," ",t.fatherName]}),e.jsx("td",{children:b}),e.jsx("td",{children:t.telNumber}),e.jsx("td",{children:t.email})]},g)})})]})]})},U=()=>e.jsxs(e.Fragment,{children:[e.jsx(I,{children:"Кабінет адміністратора"}),e.jsx(w,{}),e.jsx(A,{}),e.jsx(e.Fragment,{})]});export{U as default};
