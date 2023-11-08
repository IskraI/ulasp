import{n as f,c as u,j as e,r as a,u as L}from"./index-6eb2183b.js";import{S as R,T as N,I as D,a as U,b as $,c as E,d as m,R as l,e as i,D as F,f as I}from"./AdminCabinetPage.styled-9ee8a951.js";const v=f.div`
display:flex;
gap: 8px;
/* margin-left: 111px; */
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
`,A=()=>e.jsxs(v,{children:[e.jsx(c,{children:"Нових користувачів"}),e.jsxs(c,{children:["+ ","Користувачів за вересень"]}),e.jsx(c,{children:"Доданих пісень"}),e.jsx(c,{children:"Онлайн користувачів"})]}),M=()=>{const[t,p]=a.useState(""),[o,d]=a.useState([]);a.useState(!1);const[g,j]=a.useState(!1),{data:h,isLoading:S}=L(),n=a.useMemo(()=>{const s=h?h.allUsers:[];return s?s.filter(r=>r.status==="false"):[]},[h]),w=t.trim()!==""?o.length>0?"Результати пошуку:":"":"Чекають на підтвердження (посилання):";return a.useEffect(()=>{d(n)},[n]),a.useEffect(()=>{if(t.trim()!==""){const s=n.filter(r=>r.firstName.toLowerCase().includes(t.toLowerCase())||r.lastName.toLowerCase().includes(t.toLowerCase())||r.contractNumber.toLowerCase().includes(t.toLowerCase()));d(s),j(s.length===0)}else d(n),j(!1)},[t,n]),e.jsxs(e.Fragment,{children:[e.jsxs(R,{children:[e.jsx(N,{children:w}),e.jsx(D,{type:"text",placeholder:"Пошук користувачів",value:t,onChange:s=>p(s.target.value)})]}),S?e.jsx(U,{children:"Завантаження..."}):o.length===0&&g?e.jsx($,{children:"Результати пошуку: не знайдено"}):e.jsxs(E,{children:[e.jsx("thead",{children:e.jsxs(m,{children:[e.jsx(l,{children:"Ім’я"}),e.jsx(l,{children:"№ договору"}),e.jsx(l,{children:"Дата заявки"}),e.jsx(l,{children:"Детальніше"}),e.jsx(l,{})]})}),e.jsx("tbody",{children:o.map((s,r)=>{const x=new Date(s.createdAt),C=x.getFullYear(),T=String(x.getMonth()+1).padStart(2,"0"),b=String(x.getDate()).padStart(2,"0"),y=`${C}/${T}/${b}`;return e.jsxs(m,{children:[e.jsxs(i,{children:[s.firstName," ",s.lastName]}),e.jsx(i,{children:s.contractNumber}),e.jsx(i,{children:y}),e.jsx(i,{children:e.jsx(F,{children:"картка"})})]},r)})})]})]})},G=()=>e.jsxs(e.Fragment,{children:[e.jsx(I,{children:"Кабінет адміністратора"}),e.jsx(A,{}),e.jsx(M,{})]});export{G as default};
