import{n as g,c as h,f as x,h as k,i as j,j as s,k as T}from"./index-11af4456.js";import{S as p,b as i}from"./Statistic.styled-56de2745.js";const y=g.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${h.mainFontColor};
`,f=()=>{const{data:a,error:e,isLoading:o}=x(),{data:n,error:c,isFetching:l}=k(),{data:d,isLoading:u,error:t,isFetching:r,isSuccess:m,isUninitialized:C}=j();return s.jsxs(s.Fragment,{children:[s.jsx(y,{children:" Кабінет редактора"}),s.jsxs(p,{children:[s.jsxs(i,{children:[!l&&!c&&n.countTracks,s.jsx("br",{})," Доданої музики"]}),s.jsxs(i,{children:[!o&&!e&&a.countPlaylists,s.jsx("br",{})," Створених плейлистів"]})]}),r&&s.jsx("p",{children:"Загружаемся....."}),!r&&!t&&s.jsx(T,{tracks:d,isLoading:u,error:t,isFetching:r})]})};export{f as default};
