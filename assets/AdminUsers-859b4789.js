import{n as l,r as a,d as w,j as e,T as f,B as m,S as y,N as d,O as j,U as L}from"./index-73ca7e04.js";import{S as v,I as b}from"./SearchUsers.styled-89eaf52d.js";const k=l.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`,C=l.div`
  width: ${t=>t.width};
  padding: ${t=>t.padding};
  flex-direction:${t=>t.flexDirection};
  border-radius: 15px;
  background: #7f99c0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,S=l.button`
  position: absolute;
  top: 24px;
  right: 24px;
  border: none;
  background: none;
  cursor: pointer;
`,E=t=>l(t)`
  width: 24px;
  height: 24px;
`,M=t=>a.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("path",{d:"M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z",fill:"#17161C"})),B=document.querySelector("#modal-root"),U=E(M),I=({width:t,padding:n,bcgTransparent:i,showCloseButton:s,children:c,onClose:r,flexDirection:h})=>{a.useEffect(()=>{const o=g=>{g.code==="Escape"&&r()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[r]);const x=o=>{o.currentTarget===o.target&&r()},p={display:s?"block":"none"},u={backgroundColor:i?"rgba(0, 0, 0, 0)":"rgba(18, 20, 23, 0.5)"};return w.createPortal(e.jsx(k,{onClick:x,style:u,children:e.jsxs(C,{width:t,padding:n,flexDirection:h,children:[e.jsx(S,{onClick:r,style:p,children:e.jsx(U,{})}),c]})}),B)},$=()=>{const[t,n]=a.useState(!1),i=()=>{n(!0)},s=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(v,{children:[e.jsx(f,{children:"Користувачі"}),e.jsx(m,{type:"button",padding:"12px 46px",onClick:i,text:"Додати",ariaLabel:"  Додати користувача"}),e.jsx(b,{type:"text",id:"search",name:"search",placeholder:"Пошук користувача"})]}),e.jsxs(y,{children:[e.jsx(d,{to:"allusers",children:"Усі користувачі"}),e.jsx(d,{to:"editors",children:"Музичні редактори та адміністратори"})]}),e.jsx(j,{}),t&&e.jsx(I,{width:"898px",padding:"24px",onClose:s,showCloseButton:!0,children:e.jsx(L,{onCloseModal:s,typeOfPage:"modal"})})]})};export{$ as default};
