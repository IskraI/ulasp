import{n as g,c as h,d as x,e as j,f as k,j as s,g as T}from"./index-929549f5.js";import{S as p,b as i}from"./Statistic.styled-b844e082.js";const y=g.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${h.mainFontColor};
`,f=()=>{const{data:a,error:e,isLoading:o}=x(),{data:n,error:c,isFetching:l}=j(),{data:d,isLoading:u,error:t,isFetching:r,isSuccess:m,isUninitialized:C}=k();return s.jsxs(s.Fragment,{children:[s.jsx(y,{children:" Кабінет редактора"}),s.jsxs(p,{children:[s.jsxs(i,{children:[!l&&!c&&n.countTracks,s.jsx("br",{})," Доданої музики"]}),s.jsxs(i,{children:[!o&&!e&&a.countPlaylists,s.jsx("br",{})," Створених плейлистів"]})]}),r&&s.jsx("p",{children:"Загружаемся....."}),!r&&!t&&s.jsx(T,{tracks:d,isLoading:u,error:t,isFetching:r})]})};export{f as default};
