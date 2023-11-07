import{n as f,c as u,j as e,r,u as L}from"./index-597a5863.js";import{S as R,T as N,I as D,a as F,b as $,c as E,d as m,R as l,e as i,D as I,f as U}from"./AdminCabinetPage.styled-a8add875.js";const v=f.div`
display:flex;
gap: 8px;
margin-left: 111px;
margin-top:24px;
`,c=f.p`
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
`,A=()=>e.jsxs(v,{children:[e.jsx(c,{children:"Нових користувачів"}),e.jsxs(c,{children:["+ ","Користувачів за вересень"]}),e.jsx(c,{children:"Доданих пісень"}),e.jsx(c,{children:"Онлайн користувачів"})]}),M=()=>{const[s,p]=r.useState(""),[o,d]=r.useState([]);r.useState(!1);const[g,j]=r.useState(!1),{data:x,isLoading:S}=L(),a=r.useMemo(()=>x?x.filter(t=>t.status==="false"):[],[x]),w=s.trim()!==""?o.length>0?"Результати пошуку:":"":"Чекають на підтвердження (посилання):";return r.useEffect(()=>{d(a)},[a]),r.useEffect(()=>{if(s.trim()!==""){const t=a.filter(n=>n.firstName.toLowerCase().includes(s.toLowerCase())||n.lastName.toLowerCase().includes(s.toLowerCase())||n.contractNumber.toLowerCase().includes(s.toLowerCase()));d(t),j(t.length===0)}else d(a),j(!1)},[s,a]),e.jsxs(e.Fragment,{children:[e.jsxs(R,{children:[e.jsx(N,{children:w}),e.jsx(D,{type:"text",placeholder:"Пошук користувачів",value:s,onChange:t=>p(t.target.value)})]}),S?e.jsx(F,{children:"Завантаження..."}):o.length===0&&g?e.jsx($,{children:"Результати пошуку: не знайдено"}):e.jsxs(E,{children:[e.jsx("thead",{children:e.jsxs(m,{children:[e.jsx(l,{children:"Ім’я"}),e.jsx(l,{children:"№ договору"}),e.jsx(l,{children:"Дата заявки"}),e.jsx(l,{children:"Детальніше"}),e.jsx(l,{})]})}),e.jsx("tbody",{children:o.map((t,n)=>{const h=new Date(t.createdAt),C=h.getFullYear(),T=String(h.getMonth()+1).padStart(2,"0"),b=String(h.getDate()).padStart(2,"0"),y=`${C}/${T}/${b}`;return e.jsxs(m,{children:[e.jsxs(i,{children:[t.firstName," ",t.lastName]}),e.jsx(i,{children:t.contractNumber}),e.jsx(i,{children:y}),e.jsx(i,{children:e.jsx(I,{children:"картка"})})]},n)})})]})]})},G=()=>e.jsxs(e.Fragment,{children:[e.jsx(U,{children:"Кабінет адміністратора"}),e.jsx(A,{}),e.jsx(M,{}),e.jsx(e.Fragment,{})]});export{G as default};
