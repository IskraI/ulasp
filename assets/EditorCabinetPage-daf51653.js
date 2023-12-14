import{n as g,c as h,h as x,i as k,k as T,j as s,l as j,m}from"./index-961c2349.js";import{S as p,b as a}from"./Statistic.styled-7f306276.js";const y=g.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${h.mainFontColor};
`,C=["","Назва пісні","Виконавець","Тривалість","Жанр","Плейлист",""],b=()=>{const{data:i,error:o,isLoading:e}=x(),{data:n,error:l,isFetching:c}=k(),{data:d,isLoading:u,error:t,isFetching:r}=T();return s.jsxs(s.Fragment,{children:[s.jsx(y,{children:" Кабінет редактора"}),s.jsxs(p,{children:[s.jsxs(a,{children:[!c&&!l&&n.countTracks,s.jsx("br",{})," Доданої музики"]}),s.jsxs(a,{children:[!e&&!o&&i.countPlaylists,s.jsx("br",{})," Створених плейлистів"]})]}),r&&s.jsx(j,{}),!r&&!t&&s.jsx(m,{title:" Остання додана музика",tracks:d,isLoading:u,error:t,isFetching:r,rows:C})]})};export{b as default};
