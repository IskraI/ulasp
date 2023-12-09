import{n as g,c as h,f as x,h as k,i as T,j as s,k as j,l as p}from"./index-8a86bc13.js";import{S as y,b as a}from"./Statistic.styled-9912b097.js";const m=g.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${h.mainFontColor};
`,C=["","Назва пісні","Виконавець","Тривалість","Жанр","Плейлист",""],f=()=>{const{data:i,error:o,isLoading:e}=x(),{data:n,error:l,isFetching:c}=k(),{data:d,isLoading:u,error:t,isFetching:r}=T();return s.jsxs(s.Fragment,{children:[s.jsx(m,{children:" Кабінет редактора"}),s.jsxs(y,{children:[s.jsxs(a,{children:[!c&&!l&&n.countTracks,s.jsx("br",{})," Доданої музики"]}),s.jsxs(a,{children:[!e&&!o&&i.countPlaylists,s.jsx("br",{})," Створених плейлистів"]})]}),r&&s.jsx(j,{}),!r&&!t&&s.jsx(p,{title:" Остання додана музика",tracks:d,isLoading:u,error:t,isFetching:r,rows:C})]})};export{f as default};
