import{n as c,r as a,a as O,j as e,b as N,d as T,e as A,f as I,g as S,U as D,S as C,h as j,i as R,o as $,k as q,B as K,N as v,O as P}from"./index-49a4d74c.js";import{S as V,I as W}from"./SearchUsers.styled-4784f696.js";import{T as Z}from"./AdminCabinetPage.styled-c7533178.js";const z=c.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`,G=c.div`
  width: ${t=>t.width};
  padding: ${t=>t.padding};
  border-radius: 15px;
  background: #7f99c0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,H=c.button`
  position: absolute;
  top: 24px;
  right: 24px;
  border: none;
  background: none;
  cursor: pointer;
`,J=t=>c(t)`
  width: 24px;
  height: 24px;
`,Q=t=>a.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("path",{d:"M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z",fill:"#17161C"})),X=document.querySelector("#modal-root"),Y=J(Q),_=({width:t,padding:o,bcgTransparent:i,showCloseButton:n,children:l,onClose:s})=>{a.useEffect(()=>{const r=m=>{m.code==="Escape"&&s()};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[s]);const d=r=>{r.currentTarget===r.target&&s()},p={display:n?"block":"none"},g={backgroundColor:i?"rgba(0, 0, 0, 0)":"rgba(18, 20, 23, 0.5)"};return O.createPortal(e.jsx(z,{onClick:d,style:g,children:e.jsxs(G,{width:t,padding:o,children:[e.jsx(H,{onClick:s,style:p,children:e.jsx(Y,{})}),l]})}),X)},ee=({onCloseModal:t})=>{const[o,i]=a.useState("NewUser"),[n,l]=a.useState(!1),[s,d]=a.useState("fop"),[p,{isLoading:g}]=N(),[r,{isLoading:m}]=T(),f=A(),{control:L,register:b,handleSubmit:U,setError:te,clearErrors:w,formState:{errors:k,isValid:E,dirtyFields:se}}=I({mode:"onChange",resolver:$(q)}),M=()=>{l(n!==!0),w()};console.log("typeStatus",n);const F=()=>{d(s==="tov"?"fop":"tov")},B=h=>{const u={...h,status:n,userFop:s};console.log(u),s==="fop"&&p(u).unwrap().then(()=>{f("/admin/users"),t()}).catch(x=>console.log(x.data.message)),s==="tov"&&r(u).unwrap().then(()=>{f("/admin/users"),t()}).catch(x=>console.log(x.data))},y=h=>{i(h),w()};return console.log("ButtonSwitch.props",S),e.jsxs(D,{children:[e.jsxs(C,{children:[e.jsx(j,{isActive:o==="NewUser",onClick:()=>y("NewUser"),children:"Новий користувач"}),e.jsx(j,{isActive:o==="MusicEditor",onClick:()=>y("MusicEditor"),children:"Музичний редактор"})]}),o==="NewUser"&&e.jsx(S,{type:"button",onClick:F,children:s==="tov"?"ТОВ":"ФОП"}),e.jsx("form",{onSubmit:U(B),children:e.jsx(R,{control:L,handleTypeOfStatus:M,typeOfStatus:n,register:b,isValid:E,errors:k,activeSection:o,typeOfUser:s})})]})},ae=()=>{const[t,o]=a.useState(!1),i=()=>{o(!0)},n=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(V,{children:[e.jsx(Z,{children:"Користувачі"}),e.jsx(K,{type:"button",padding:"12px 46px",onClick:i,text:"Додати",ariaLabel:"  Додати користувача"}),e.jsx(W,{type:"text",id:"search",name:"search",placeholder:"Пошук користувача"})]}),e.jsxs(C,{children:[e.jsx(v,{to:"allusers",children:"Усі користувачі"}),e.jsx(v,{to:"editors",children:"Музичні редактори та адміністратори"})]}),e.jsx(P,{}),t&&e.jsx(_,{width:"898px",padding:"24px",onClose:n,showCloseButton:!0,children:e.jsx(ee,{onCloseModal:n})})]})};export{ae as default};
