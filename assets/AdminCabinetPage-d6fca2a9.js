import{n as m,c as u,j as e,r,u as j}from"./index-d6a418a0.js";import{S as y,T as b,I as S,a as C,b as L}from"./SearchUsers.styled-5f97115c.js";import{U as T}from"./UsersTable-3315595c.js";import{T as w}from"./AdminCabinetPage.styled-587531a5.js";const k=m.div`
display:flex;
gap: 8px;
/* margin-left: 111px; */
margin-top:24px;
    margin-bottom: 29px;
`,l=m.p`
display:flex;
padding: 8px;
justify-content: center;
align-items: center;
border-radius: 10px;
background: ${u.primaryColor};
color:   ${u.mainFontColor};
text-align: center;
font-size: 22px;
line-height: calc(26.4 / 22); 
`,N=()=>e.jsxs(k,{children:[e.jsx(l,{children:"Нових користувачів"}),e.jsxs(l,{children:["+ ","Користувачів за вересень"]}),e.jsx(l,{children:"Доданих пісень"}),e.jsx(l,{children:"Онлайн користувачів"})]}),U=()=>{const[t,x]=r.useState(""),[i,o]=r.useState([]),[p,d]=r.useState(!1),{data:c,isLoading:h}=j(),a=r.useMemo(()=>{const s=c?c.allUsers:[];return s?s.filter(n=>n.status==="false"):[]},[c]),f=t.trim()!==""?(i.length>0,"Результати пошуку:"):"Чекають на підтвердження (посилання):";r.useEffect(()=>{o(a)},[a]),r.useEffect(()=>{if(t.trim()!==""){const s=a.filter(n=>n.firstName.toLowerCase().includes(t.toLowerCase())||n.lastName.toLowerCase().includes(t.toLowerCase())||n.contractNumber.toLowerCase().includes(t.toLowerCase()));o(s),d(s.length===0)}else o(a),d(!1)},[t,a]);const g=[{key:"firstName",label:"Ім’я",type:"name"},{key:"contractNumber",label:"№ договору",type:"string"},{key:"createdAt",label:"Дата заявки",type:"date"},{key:"details",label:"Детальніше",type:"link"},{key:"sendEmail",label:"",type:"button"}];return e.jsxs(e.Fragment,{children:[e.jsxs(y,{children:[e.jsx(b,{children:f}),e.jsx(S,{type:"text",placeholder:"Пошук користувачів",value:t,onChange:s=>x(s.target.value)})]}),h?e.jsx(C,{children:"Завантаження..."}):i.length===0&&p?e.jsx(e.Fragment,{children:e.jsx(L,{children:" не знайдено"})}):e.jsx(T,{users:i,visibleColumns:g})]})},A=()=>e.jsxs(e.Fragment,{children:[e.jsx(w,{children:"Кабінет адміністратора"}),e.jsx(N,{}),e.jsx(U,{})]});export{A as default};
