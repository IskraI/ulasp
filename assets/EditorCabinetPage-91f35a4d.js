import{n as e,c as j,j as t,d as m,e as y,f as T}from"./index-a4f01415.js";import{S as b,b as f}from"./Statistic.styled-98a991e5.js";const w=e.table`
  text-align: left;
  font-size: 18px;
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
`,F=e.thead``,o=e.th`
  color: ${j.mainFontColor};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.21;
  text-align: left;

  padding-top: 8px;
  padding-bottom: 18px;
  padding-right: 30px;
  padding-left: 10px;

  &:nth-of-type(1) {
    width: 5%;
  }
  &:nth-of-type(2) {
    width: 25%;
  }
  &:nth-of-type(3) {
    width: 15%;
  }
  &:nth-of-type(4) {
    width: 10%;
  }
  &:nth-of-type(5) {
    width: 10%;
  }
  &:nth-of-type(6) {
    width: 10%;
  }
  &:nth-of-type(7) {
    width: 5%;
  }
`,C=e.tr`
  &:nth-of-type(even) {
    background-color: rgba(234, 234, 234, 0.32);
  }
`,r=e.td`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  /* padding-right: 30px; */
`,S=e.img`
  border-radius: 10%;
  margin: 0 auto;
`,z=e.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${j.mainFontColor};
  margin-top: 20px;
  margin-bottom: 24px;
`,u=e.p`
  align-self: center;
  margin-top: 40px;
  font-size: 28px;
  color: grey;
`,E=e.div`
  margin-top: 34px;
  display: flex;
  width: 100%;
  height: 86px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: yellowgreen;
`,k="http://localhost:8000/",P=" Упс... Щось пішло не так, зверніться до адміністратора",R=({tracks:i,isLoading:a,error:s})=>{const p=n=>{n=Math.round(n);let l=Math.trunc(n/60)+"";return n=n%60+"",l.padStart(2,0)+":"+n.padStart(2,0)};return t.jsxs(t.Fragment,{children:[s&&t.jsx(u,{children:P}),(i==null?void 0:i.length)===0&&!a&&!s&&t.jsx(u,{children:"Музика ще не завантажена"}),(i==null?void 0:i.length)!==0&&!a&&!s&&t.jsxs(t.Fragment,{children:[t.jsx(z,{children:"Остання додана музика "}),t.jsxs(w,{children:[t.jsx(F,{children:t.jsxs("tr",{children:[t.jsx(o,{}),t.jsx(o,{children:"Назва пісні"}),t.jsx(o,{children:"Виконавець"}),t.jsx(o,{children:"Тривалість"}),t.jsx(o,{children:"Жанр"}),t.jsx(o,{children:"Плейлист"}),t.jsx(o,{})]})}),t.jsx("tbody",{children:i.map(({_id:n,trackPictureURL:l,trackName:c,artist:g,trackDuration:h,trackGenre:d,playList:x})=>t.jsxs(C,{children:[t.jsx(r,{children:t.jsx(S,{src:k+l,alt:c,width:55})}),t.jsx(r,{children:c}),t.jsx(r,{children:g}),t.jsx(r,{children:p(h)}),t.jsx(r,{children:d}),t.jsx(r,{children:x==null?void 0:x.playListName}),t.jsx(r,{children:"***"})]},n))})]}),t.jsx(E,{children:"Тут будет плеер"})]})]})},A=e.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${j.mainFontColor};
`,M=()=>{const{data:i,error:a,isLoading:s}=m(),{data:p,error:n,isFetching:l}=y(),{data:c,isLoading:g,error:h,isFetching:d,isSuccess:x,isUninitialized:L}=T();return t.jsxs(t.Fragment,{children:[t.jsx(A,{children:" Кабінет редактора"}),t.jsxs(b,{children:[t.jsxs(f,{children:[!l&&!n&&p.countTracks,t.jsx("br",{})," Доданої музики"]}),t.jsxs(f,{children:[!s&&!a&&i.countPlaylists,t.jsx("br",{})," Створених плейлистів"]})]}),d&&t.jsx("p",{children:"Загружаемся....."}),!d&&!h&&t.jsx(R,{tracks:c,isLoading:g,error:h,isFetching:d})]})};export{M as default};
