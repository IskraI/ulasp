import{j as e,r,u as j,T as p}from"./index-18d418b1.js";import{S,a as l}from"./Statistic.styled-c48e42b7.js";import{S as b,T as g,I as y,a as C,b as L}from"./SearchUsers.styled-a6f9b2a9.js";import{U as T}from"./UsersTable-a59c8aa6.js";const w=()=>e.jsxs(S,{children:[e.jsx(l,{children:"Нових користувачів"}),e.jsxs(l,{children:["+ ","Користувачів за вересень"]}),e.jsx(l,{children:"Доданих пісень"}),e.jsx(l,{children:"Онлайн користувачів"})]}),N=()=>{const[s,d]=r.useState(""),[i,o]=r.useState([]),[h,u]=r.useState(!1),{data:c,isLoading:m}=j(),a=r.useMemo(()=>{const t=c?c.allUsers:[];return t?t.filter(n=>n.status===!1):[]},[c]),x=s.trim()!==""?(i.length>0,"Результати пошуку:"):"Чекають на підтвердження (посилання):";r.useEffect(()=>{o(a)},[a]),r.useEffect(()=>{if(s.trim()!==""){const t=a.filter(n=>n.firstName.toLowerCase().includes(s.toLowerCase())||n.lastName.toLowerCase().includes(s.toLowerCase())||n.contractNumber.toLowerCase().includes(s.toLowerCase()));o(t),u(t.length===0)}else o(a),u(!1)},[s,a]);const f=[{key:"firstName",label:"Ім’я",type:"name"},{key:"contractNumber",label:"№ договору",type:"string"},{key:"createdAt",label:"Дата заявки",type:"date"},{key:"details",label:"Детальніше",type:"link"},{key:"sendEmail",label:"",type:"button"}];return e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:[e.jsx(g,{children:x}),e.jsx(y,{type:"text",placeholder:"Пошук користувачів",value:s,onChange:t=>d(t.target.value)})]}),m?e.jsx(C,{children:"Завантаження..."}):i.length===0&&h?e.jsx(e.Fragment,{children:e.jsx(L,{children:" не знайдено"})}):e.jsx(T,{users:i,visibleColumns:f})]})},v=()=>e.jsxs(e.Fragment,{children:[e.jsx(p,{children:"Кабінет адміністратора"}),e.jsx(w,{}),e.jsx(N,{})]});export{v as default};