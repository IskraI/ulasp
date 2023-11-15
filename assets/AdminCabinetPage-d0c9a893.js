import{n as x,c as u,j as e,r,u as j,T as y}from"./index-7bc03f15.js";import{S as b,T as S,I as C,a as L,b as T}from"./SearchUsers.styled-f539ef13.js";import{U as w}from"./UsersTable-cafdbda5.js";const k=x.div`
display:flex;
gap: 8px;
/* margin-left: 111px; */
margin-top:24px;
    margin-bottom: 29px;
`,l=x.p`
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
`,N=()=>e.jsxs(k,{children:[e.jsx(l,{children:"Нових користувачів"}),e.jsxs(l,{children:["+ ","Користувачів за вересень"]}),e.jsx(l,{children:"Доданих пісень"}),e.jsx(l,{children:"Онлайн користувачів"})]}),U=()=>{const[t,m]=r.useState(""),[i,o]=r.useState([]),[h,d]=r.useState(!1),{data:c,isLoading:p}=j(),a=r.useMemo(()=>{const s=c?c.allUsers:[];return s?s.filter(n=>n.status==="false"):[]},[c]),f=t.trim()!==""?(i.length>0,"Результати пошуку:"):"Чекають на підтвердження (посилання):";r.useEffect(()=>{o(a)},[a]),r.useEffect(()=>{if(t.trim()!==""){const s=a.filter(n=>n.firstName.toLowerCase().includes(t.toLowerCase())||n.lastName.toLowerCase().includes(t.toLowerCase())||n.contractNumber.toLowerCase().includes(t.toLowerCase()));o(s),d(s.length===0)}else o(a),d(!1)},[t,a]);const g=[{key:"firstName",label:"Ім’я",type:"name"},{key:"contractNumber",label:"№ договору",type:"string"},{key:"createdAt",label:"Дата заявки",type:"date"},{key:"details",label:"Детальніше",type:"link"},{key:"sendEmail",label:"",type:"button"}];return e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:[e.jsx(S,{children:f}),e.jsx(C,{type:"text",placeholder:"Пошук користувачів",value:t,onChange:s=>m(s.target.value)})]}),p?e.jsx(L,{children:"Завантаження..."}):i.length===0&&h?e.jsx(e.Fragment,{children:e.jsx(T,{children:" не знайдено"})}):e.jsx(w,{users:i,visibleColumns:g})]})},I=()=>e.jsxs(e.Fragment,{children:[e.jsx(y,{children:"Кабінет адміністратора"}),e.jsx(N,{}),e.jsx(U,{})]});export{I as default};
