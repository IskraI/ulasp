import{n as h,c as x,h as k,i as T,k as j,j as s,l as m,m as p}from"./index-9d643b49.js";import{S as y,b as a}from"./Statistic.styled-74135a2d.js";const C=h.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${x.mainFontColor};
`,L=["","Назва пісні","Виконавець","Тривалість","Жанр","Плейлист",""],b=()=>{const{data:i,error:e,isLoading:o}=k(),{data:n,error:c,isFetching:l}=T(),{data:d,isLoading:u,error:t,isFetching:r,isSuccess:g}=j();return s.jsxs(s.Fragment,{children:[s.jsx(C,{children:" Кабінет редактора"}),s.jsxs(y,{children:[s.jsxs(a,{children:[!l&&!c&&n.countTracks,s.jsx("br",{})," Доданої музики"]}),s.jsxs(a,{children:[!o&&!e&&i.countPlaylists,s.jsx("br",{})," Створених плейлистів"]})]}),r&&s.jsx(m,{}),!r&&!t&&s.jsx(p,{title:" Остання додана музика",tracks:d,isLoading:u,error:t,isFetching:r,isSuccess:g,rows:L})]})};export{b as default};
