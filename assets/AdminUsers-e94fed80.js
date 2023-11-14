import{n as l,r as a,a as g,j as e,B as w,S as m,N as d,O as f,U as y}from"./index-114bfd0f.js";import{S as j,I as L}from"./SearchUsers.styled-956c1950.js";import{T as v}from"./AdminCabinetPage.styled-6581bcaf.js";const b=l.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`,k=l.div`
  width: ${t=>t.width};
  padding: ${t=>t.padding};
  border-radius: 15px;
  background: #7f99c0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,C=l.button`
  position: absolute;
  top: 24px;
  right: 24px;
  border: none;
  background: none;
  cursor: pointer;
`,S=t=>l(t)`
  width: 24px;
  height: 24px;
`,E=t=>a.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("path",{d:"M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z",fill:"#17161C"})),M=document.querySelector("#modal-root"),B=S(E),U=({width:t,padding:n,bcgTransparent:i,showCloseButton:s,children:c,onClose:r})=>{a.useEffect(()=>{const o=u=>{u.code==="Escape"&&r()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[r]);const h=o=>{o.currentTarget===o.target&&r()},p={display:s?"block":"none"},x={backgroundColor:i?"rgba(0, 0, 0, 0)":"rgba(18, 20, 23, 0.5)"};return g.createPortal(e.jsx(b,{onClick:h,style:x,children:e.jsxs(k,{width:t,padding:n,children:[e.jsx(C,{onClick:r,style:p,children:e.jsx(B,{})}),c]})}),M)},F=()=>{const[t,n]=a.useState(!1),i=()=>{n(!0)},s=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx(v,{children:"Користувачі"}),e.jsx(w,{type:"button",padding:"12px 46px",onClick:i,text:"Додати",ariaLabel:"  Додати користувача"}),e.jsx(L,{type:"text",id:"search",name:"search",placeholder:"Пошук користувача"})]}),e.jsxs(m,{children:[e.jsx(d,{to:"allusers",children:"Усі користувачі"}),e.jsx(d,{to:"editors",children:"Музичні редактори та адміністратори"})]}),e.jsx(f,{}),t&&e.jsx(U,{width:"898px",padding:"24px",onClose:s,showCloseButton:!0,children:e.jsx(y,{onCloseModal:s,typeOfPage:"modal"})})]})};export{F as default};
