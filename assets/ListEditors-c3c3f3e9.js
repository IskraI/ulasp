import{u as o,j as e}from"./index-d6a418a0.js";import{U as a}from"./UsersTable-3315595c.js";import"./SearchUsers.styled-5f97115c.js";const m=()=>{const{data:s,isLoading:t}=o(!0);console.log("data",s);const r=[{key:"firstName",label:"Ім’я",type:"name"},{key:"login",label:"Логін",type:"string"},{key:"adminRole",label:"Тип админа",type:"string"},{key:"editorRole",label:"Тип админа",type:"string"}];return e.jsx(e.Fragment,{children:!t&&e.jsx(a,{users:s.result,visibleColumns:r})})};export{m as default};
