import{n as x,c as h,h as k,i as j,k as T,j as s,l as m,m as y,P as p}from"./index-276f13b5.js";import{S as C,b as i}from"./Statistic.styled-6481a6bc.js";const F=x.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${h.mainFontColor};
`,L=["","Назва пісні","Виконавець","Тривалість","Жанр","Плейлист",""],b=()=>{const{data:e,error:o,isLoading:n}=k(),{data:c,error:l,isFetching:d}=j(),{data:t,isLoading:u,error:a,isFetching:r,isSuccess:g}=T();return s.jsxs(s.Fragment,{children:[s.jsx(F,{children:" Кабінет редактора"}),s.jsxs(C,{children:[s.jsxs(i,{children:[!d&&!l&&c.countTracks,s.jsx("br",{})," Доданої музики"]}),s.jsxs(i,{children:[!n&&!o&&e.countPlaylists,s.jsx("br",{})," Створених плейлистів"]})]}),r&&s.jsx(m,{}),!r&&!a&&s.jsxs(s.Fragment,{children:[s.jsx(y,{title:" Остання додана музика",tracks:t,isLoading:u,error:a,isFetching:r,isSuccess:g,rows:L}),s.jsx(p,{tracks:t})]})]})};export{b as default};
