import{n as x,e as h,i as k,u as j,k as T,j as s,L as y,l as m,P as p}from"./index-4bea0cc9.js";import{S as L,b as e}from"./Statistic.styled-7c39d771.js";const C=x.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${h.mainFontColor};
`,F=["","Назва пісні","Виконавець","Тривалість","Жанр","Плейлист",""],b=()=>{const{data:i,error:o,isLoading:n}=k(),{data:c,error:l,isFetching:d}=j(),{data:t,isLoading:u,error:a,isFetching:r,isSuccess:g}=T();return s.jsxs(s.Fragment,{children:[s.jsx(C,{children:" Кабінет редактора"}),s.jsxs(L,{children:[s.jsxs(e,{children:[!d&&!l&&c.countTracks,s.jsx("br",{})," Доданої музики"]}),s.jsxs(e,{children:[!n&&!o&&i.countPlaylists,s.jsx("br",{})," Створених плейлистів"]})]}),r&&s.jsx(y,{}),!r&&!a&&s.jsxs(s.Fragment,{children:[s.jsx(m,{title:" Остання додана музика",tracks:t,isLoading:u,error:a,isFetching:r,isSuccess:g,rows:F}),s.jsx(p,{tracks:t})]})]})};export{b as default};
