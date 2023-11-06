import{n as g,c as m,j as e,r,u as R}from"./index-58cfc0bc.js";import{S as N,T as D,I as F,a as $,b as E,c as I,d as f,R as l,e as i,D as U,f as v}from"./AdminCabinetPage.styled-79d17ccb.js";const A=g.div`
display:flex;
gap: 8px;
margin-left: 111px;
margin-top:24px;
`,o=g.p`
display:flex;
padding: 8px;
justify-content: center;
align-items: center;
border-radius: 10px;
background: ${m.primaryColor};
color:   ${m.mainFontColor};
text-align: center;
font-size: 22px;
line-height: calc(26.4 / 22); 
`,M=()=>e.jsxs(A,{children:[e.jsx(o,{children:"Нових користувачів"}),e.jsxs(o,{children:["+ ","Користувачів за вересень"]}),e.jsx(o,{children:"Доданих пісень"}),e.jsx(o,{children:"Онлайн користувачів"})]}),k=()=>{const[s,p]=r.useState(""),[d,x]=r.useState([]);r.useState(!1);const[S,j]=r.useState(!1),{data:c,isLoading:w}=R();console.log(c);const a=r.useMemo(()=>c?c.filter(t=>t.status==="false"):[],[c]),u=s.trim()!=="";console.log(u);const C=u?d.length>0?"Результати пошуку:":"":"Чекають на підтвердження (посилання):";return r.useEffect(()=>{x(a)},[a]),r.useEffect(()=>{if(s.trim()!==""){const t=a.filter(n=>n.firstName.toLowerCase().includes(s.toLowerCase())||n.lastName.toLowerCase().includes(s.toLowerCase())||n.contractNumber.toLowerCase().includes(s.toLowerCase()));x(t),j(t.length===0)}else x(a),j(!1)},[s,a]),e.jsxs(e.Fragment,{children:[e.jsxs(N,{children:[e.jsx(D,{children:C}),e.jsx(F,{type:"text",placeholder:"Пошук користувачів",value:s,onChange:t=>p(t.target.value)})]}),w?e.jsx($,{children:"Завантаження..."}):d.length===0&&S?e.jsx(E,{children:"Результати пошуку: не знайдено"}):e.jsxs(I,{children:[e.jsx("thead",{children:e.jsxs(f,{children:[e.jsx(l,{children:"Ім’я"}),e.jsx(l,{children:"№ договору"}),e.jsx(l,{children:"Дата заявки"}),e.jsx(l,{children:"Детальніше"}),e.jsx(l,{})]})}),e.jsx("tbody",{children:d.map((t,n)=>{const h=new Date(t.createdAt),T=h.getFullYear(),b=String(h.getMonth()+1).padStart(2,"0"),y=String(h.getDate()).padStart(2,"0"),L=`${T}/${b}/${y}`;return e.jsxs(f,{children:[e.jsxs(i,{children:[t.firstName," ",t.lastName]}),e.jsx(i,{children:t.contractNumber}),e.jsx(i,{children:L}),e.jsx(i,{children:e.jsx(U,{children:"картка"})})]},n)})})]})]})},G=()=>e.jsxs(e.Fragment,{children:[e.jsx(v,{children:"Кабінет адміністратора"}),e.jsx(M,{}),e.jsx(k,{}),e.jsx(e.Fragment,{})]});export{G as default};
