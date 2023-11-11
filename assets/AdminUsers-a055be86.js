import{n as d,r,a as F,j as e,b as B,d as O,e as N,f as T,B as S,U as A,S as I,g as b,h as D,o as P,i as R,u as $,k as q}from"./index-ea0c84a2.js";import{S as G,c as K,I as Q,U as V}from"./AdminCabinetPage.styled-c39e2178.js";const W=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`,Z=d.div`
  width: ${t=>t.width};
  padding: ${t=>t.padding};
  border-radius: 15px;
  background: #7f99c0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,z=d.button`
  position: absolute;
  top: 24px;
  right: 24px;
  border: none;
  background: none;
  cursor: pointer;
`,H=t=>d(t)`
  width: 24px;
  height: 24px;
`,J=t=>r.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{d:"M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z",fill:"#17161C"})),X=document.querySelector("#modal-root"),Y=H(J),_=({width:t,padding:n,bcgTransparent:i,showCloseButton:o,children:c,onClose:s})=>{r.useEffect(()=>{const a=m=>{m.code==="Escape"&&s()};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[s]);const l=a=>{a.currentTarget===a.target&&s()},p={display:o?"block":"none"},y={backgroundColor:i?"rgba(0, 0, 0, 0)":"rgba(18, 20, 23, 0.5)"};return F.createPortal(e.jsx(W,{onClick:l,style:y,children:e.jsxs(Z,{width:t,padding:n,children:[e.jsx(z,{onClick:s,style:p,children:e.jsx(Y,{})}),c]})}),X)},ee=({onCloseModal:t})=>{const[n,i]=r.useState("NewUser"),[o,c]=r.useState(!1),[s,l]=r.useState("fop"),[p,{isLoading:y}]=B(),[a,{isLoading:m}]=O(),x=N(),{control:v,register:C,handleSubmit:j,setError:te,clearErrors:f,formState:{errors:k,isValid:U,dirtyFields:se}}=T({mode:"onChange",resolver:P(R)}),L=()=>{c(o!==!0),f()};console.log("typeStatus",o);const E=()=>{l(s==="tov"?"fop":"tov")},M=u=>{const h={...u,status:o,userFop:s};console.log(h),s==="fop"&&p(h).unwrap().then(()=>{x("/admin/users"),t()}).catch(g=>console.log(g.data.message)),s==="tov"&&a(h).unwrap().then(()=>{x("/admin/users"),t()}).catch(g=>console.log(g.data))},w=u=>{i(u),f()};return console.log("ButtonSwitch.props",S),e.jsxs(A,{children:[e.jsxs(I,{children:[e.jsx(b,{isActive:n==="NewUser",onClick:()=>w("NewUser"),children:"Новий користувач"}),e.jsx(b,{isActive:n==="MusicEditor",onClick:()=>w("MusicEditor"),children:"Музичний редактор"})]}),n==="NewUser"&&e.jsx(S,{type:"button",onClick:E,children:s==="tov"?"ТОВ":"ФОП"}),e.jsx("form",{onSubmit:j(M),children:e.jsx(D,{control:v,handleTypeOfStatus:L,typeOfStatus:o,register:C,isValid:U,errors:k,activeSection:n,typeOfUser:s})})]})},ae=()=>{const{data:t,isLoading:n}=$(),[i,o]=r.useState(!1),c=()=>{o(!0)},s=()=>{o(!1)},l=[{key:"firstName",label:"Ім’я",type:"name"},{key:"contractNumber",label:"№ договору",type:"string"},{key:"status",label:"Статус",type:"boolean"},{key:"lastPay",label:"Дата оплати",type:"string"},{key:"dateOfAccess",label:"Відкрито до",type:"string"},{key:"acces",label:"Допуск",type:"string"}];return e.jsxs(e.Fragment,{children:[e.jsxs(G,{children:[e.jsx(K,{children:"Користувачі"}),e.jsx(q,{type:"button",padding:"12px 46px",onClick:c,text:"Додати",ariaLabel:"  Додати користувача"}),e.jsx(Q,{type:"text",id:"search",name:"search",placeholder:"Пошук користувача"})]}),!n&&e.jsx(V,{users:t.allUsers,visibleColumns:l}),i&&e.jsx(_,{width:"898px",padding:"24px",onClose:s,showCloseButton:!0,children:e.jsx(ee,{onCloseModal:s})})]})};export{ae as default};
