import{u as r,j as e}from"./index-4eb25bc7.js";import{U as l}from"./UsersTable-6001a33d.js";import"./SearchUsers.styled-95c2e112.js";const o=()=>{const{data:s,isLoading:t}=r(),a=[{key:"firstName",label:"Ім’я",type:"nameLink"},{key:"contractNumber",label:"№ договору",type:"string"},{key:"taxCode",label:"ИНН",type:"string"},{key:"status",label:"Статус",type:"status"},{key:"lastPay",label:"Дата оплати",type:"string"},{key:"dateOfAccess",label:"Відкрито до",type:"string"},{key:"access",label:"Допуск",type:"access"}];return e.jsx(e.Fragment,{children:!t&&e.jsx(l,{users:s.allUsers,visibleColumns:a})})};export{o as default};
