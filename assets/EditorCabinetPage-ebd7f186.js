import{n as x,f as y,k as p,l as g,m as S,j as t,L as k,o as w,P as T}from"./index-4566aec9.js";import{S as j,b as r}from"./Statistic.styled-e7ef8319.js";const m=x.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${y.mainFontColor};
`,f=[{title:"",type:"input",titleSize:"2%",showData:!1},{title:"",type:"button",titleSize:"2%",showData:!1},{title:"",type:"image",titleSize:"5%",showData:!0},{title:"Назва пісні",type:"text",titleSize:"20%",showData:!0},{title:"Виконавець",type:"text",titleSize:"15%",showData:!0},{title:"Тривалість",type:"text",titleSize:"12%",showData:!0},{title:"Жанр",type:"text",titleSize:"10%",showData:!0},{title:"Плейлист",type:"text",titleSize:"15%",showData:!1},{title:"",type:"button",titleSize:"5%",showData:!0}],D=()=>{const{data:l,error:o,isLoading:n}=p(),{data:c,error:u,isFetching:h}=g(),{data:s,isLoading:d,error:i,isFetching:a,isSuccess:e}=S();return t.jsxs(t.Fragment,{children:[a&&!e&&t.jsx(k,{}),t.jsx(m,{children:" Кабінет редактора"}),e&&!i&&t.jsxs(t.Fragment,{children:[t.jsxs(j,{children:[t.jsxs(r,{children:[!h&&!u&&c.countTracks,t.jsx("br",{})," Доданої музики"]}),t.jsxs(r,{children:[!n&&!o&&l.countPlaylists,t.jsx("br",{})," Створених плейлистів"]})]}),t.jsx(w,{title:"Остання додана музика",showTitle:!0,tracks:s,isLoading:d,error:i,isFetching:a,isSuccess:e,rows:f,isInPlayList:!1}),t.jsx(T,{tracks:s})]})]})};export{D as default};
