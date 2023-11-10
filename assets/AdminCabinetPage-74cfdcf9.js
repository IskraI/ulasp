import{n as x,c as u,j as e,r,u as j}from"./index-78df6f8a.js";import{S as y,T as b,I as S,a as C,b as L,U as w,c as T}from"./AdminCabinetPage.styled-2feeeb95.js";const k=x.div`
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
`,N=()=>e.jsxs(k,{children:[e.jsx(l,{children:"Нових користувачів"}),e.jsxs(l,{children:["+ ","Користувачів за вересень"]}),e.jsx(l,{children:"Доданих пісень"}),e.jsx(l,{children:"Онлайн користувачів"})]}),U=()=>{const[s,h]=r.useState(""),[i,o]=r.useState([]),[m,d]=r.useState(!1),{data:c,isLoading:p}=j(),a=r.useMemo(()=>{const t=c?c.allUsers:[];return t?t.filter(n=>n.status==="false"):[]},[c]),f=s.trim()!==""?(i.length>0,"Результати пошуку:"):"Чекають на підтвердження (посилання):";r.useEffect(()=>{o(a)},[a]),r.useEffect(()=>{if(s.trim()!==""){const t=a.filter(n=>n.firstName.toLowerCase().includes(s.toLowerCase())||n.lastName.toLowerCase().includes(s.toLowerCase())||n.contractNumber.toLowerCase().includes(s.toLowerCase()));o(t),d(t.length===0)}else o(a),d(!1)},[s,a]);const g=[{key:"firstName",label:"Ім’я",type:"name"},{key:"contractNumber",label:"№ договору",type:"string"},{key:"createdAt",label:"Дата заявки",type:"date"},{key:"details",label:"Детальніше",type:"link"},{key:"sendEmail",label:"",type:"button"}];return e.jsxs(e.Fragment,{children:[e.jsxs(y,{children:[e.jsx(b,{children:f}),e.jsx(S,{type:"text",placeholder:"Пошук користувачів",value:s,onChange:t=>h(t.target.value)})]}),p?e.jsx(C,{children:"Завантаження..."}):i.length===0&&m?e.jsx(e.Fragment,{children:e.jsx(L,{children:" не знайдено"})}):e.jsx(w,{users:i,visibleColumns:g})]})},F=()=>e.jsxs(e.Fragment,{children:[e.jsx(T,{children:"Кабінет адміністратора"}),e.jsx(N,{}),e.jsx(U,{})]});export{F as default};
