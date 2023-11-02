import{j as e,n as i,r as a,a as m,u as j}from"./index-18c1dc7c.js";const u=({users:t})=>e.jsx(e.Fragment,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Name"}),e.jsx("th",{children:"Day of Birthday"}),e.jsx("th",{children:"Tel Number"}),e.jsx("th",{children:"Email"})]})}),e.jsx("tbody",{children:t.map((n,o)=>e.jsxs("tr",{children:[e.jsx("td",{children:n.firstName}),e.jsxs("td",{children:[n.lastName," ",n.fatherName]}),e.jsx("td",{children:n.dayOfBirthday}),e.jsx("td",{children:n.telNumber}),e.jsx("td",{children:n.email})]},o))})]})}),g=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`,y=i.div`
  width: ${t=>t.width};
  padding: ${t=>t.padding};
  border-radius: 15px;
  background: #7f99c0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,w=i.button`
  position: absolute;
  top: 24px;
  right: 24px;
  border: none;
  background: none;
  cursor: pointer;
`,b=t=>i(t)`
  width: 24px;
  height: 24px;
`,f=t=>a.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("path",{d:"M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z",fill:"#17161C"})),v=document.querySelector("#modal-root"),L=b(f),k=({width:t,padding:n,bcgTransparent:o,showCloseButton:d,children:s,onClose:r})=>{a.useEffect(()=>{const l=p=>{p.code==="Escape"&&r()};return window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}},[r]);const c=l=>{l.currentTarget===l.target&&r()},h={display:d?"block":"none"},x={backgroundColor:o?"rgba(0, 0, 0, 0)":"rgba(18, 20, 23, 0.5)"};return m.createPortal(e.jsx(g,{onClick:c,style:x,children:e.jsxs(y,{width:t,padding:n,children:[e.jsx(w,{onClick:r,style:h,children:e.jsx(L,{})}),s]})}),v)},C=({showModal:t})=>{console.log("showModal bp UserCreateModal ",t);const n=()=>{t=!t},o=d=>{d.preventDefault();const s=new FormData;console.log("formData",s)};return e.jsx(k,{width:"898px",padding:"24px",onClose:n,children:e.jsx("div",{children:e.jsxs("form",{onSubmit:o,children:[e.jsx("div",{children:e.jsx("input",{name:"name",type:"text"})}),e.jsx("button",{type:"submit",children:"Додати"})]})})})},E=()=>{const{data:t,isLoading:n}=j(),[o,d]=a.useState(!1),s=()=>{d(r=>!r),console.log("showModal",o)};return e.jsxs(e.Fragment,{children:["Користувачі",e.jsx("button",{type:"button",onClick:s,children:"Додати"}),e.jsx("input",{type:"text",id:"search",name:"search",placeholder:"Пошук користувача"}),!n&&e.jsx(u,{users:t}),o&&e.jsx(C,{showModal:s})]})};export{E as default};
