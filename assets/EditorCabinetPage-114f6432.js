import{n as g,c as h,f as x,h as k,i as T,j as s,k as j}from"./index-c99c90a2.js";import{S as p,b as a}from"./Statistic.styled-d4a3f229.js";const y=g.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${h.mainFontColor};
`,m=["","Назва пісні","Виконавець","Тривалість","Жанр","Плейлист",""],L=()=>{const{data:i,error:o,isLoading:e}=x(),{data:n,error:l,isFetching:c}=k(),{data:d,isLoading:u,error:t,isFetching:r}=T();return s.jsxs(s.Fragment,{children:[s.jsx(y,{children:" Кабінет редактора"}),s.jsxs(p,{children:[s.jsxs(a,{children:[!c&&!l&&n.countTracks,s.jsx("br",{})," Доданої музики"]}),s.jsxs(a,{children:[!e&&!o&&i.countPlaylists,s.jsx("br",{})," Створених плейлистів"]})]}),r&&s.jsx("p",{children:"Загружаемся....."}),!r&&!t&&s.jsx(j,{tracks:d,isLoading:u,error:t,isFetching:r,rows:m})]})};export{L as default};
