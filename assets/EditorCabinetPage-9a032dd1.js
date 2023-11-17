import{n as o,c as x,j as t,a as y,b as u}from"./index-f467a22a.js";import{S as b,b as p}from"./Statistic.styled-a3d3f7ac.js";const T=o.table`
  text-align: left;
  font-size: 18px;
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
`,w=o.thead``,i=o.th`
  color: ${x.mainFontColor};
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
`,S=o.tr`
  &:nth-of-type(even) {
    background-color: rgba(234, 234, 234, 0.32);
  }
`,r=o.td`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  /* padding-right: 30px; */
`,C=o.img`
  border-radius: 10%;
  margin: 0 auto;
`,F=o.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${x.mainFontColor};
  margin-top: 20px;
  margin-bottom: 24px;
`,g=o.p`
  align-self: center;
  margin-top: 40px;
  font-size: 28px;
  color: grey;
`,z=o.div`
  margin-top: 34px;
  display: flex;
  width: 100%;
  height: 86px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: yellowgreen;
`,E="http://localhost:8000/",P=" Упс... Щось пішло не так, зверніться до адміністратора",R=({tracks:e,isLoading:d,error:l})=>{console.log(e);const a=n=>{n=Math.round(n);let s=Math.trunc(n/60)+"";return n=n%60+"",s.padStart(2,0)+":"+n.padStart(2,0)};return t.jsxs(t.Fragment,{children:[l&&t.jsx(g,{children:P}),(e==null?void 0:e.length)===0&&!d&&!l&&t.jsx(g,{children:"Музика ще не завантажена"}),(e==null?void 0:e.length)!==0&&!d&&!l&&t.jsxs(t.Fragment,{children:[t.jsx(F,{children:"Остання додана музика "}),t.jsxs(T,{children:[t.jsx(w,{children:t.jsxs("tr",{children:[t.jsx(i,{}),t.jsx(i,{children:"Назва пісні"}),t.jsx(i,{children:"Виконавець"}),t.jsx(i,{children:"Тривалість"}),t.jsx(i,{children:"Жанр"}),t.jsx(i,{children:"Плейлист"}),t.jsx(i,{})]})}),t.jsx("tbody",{children:e.map(({_id:n,trackPictureURL:s,trackName:c,artist:j,trackDuration:f,trackGenre:m,playList:h})=>t.jsxs(S,{children:[t.jsx(r,{children:t.jsx(C,{src:E+s,alt:c,width:55})}),t.jsx(r,{children:c}),t.jsx(r,{children:j}),t.jsx(r,{children:a(f)}),t.jsx(r,{children:m}),t.jsx(r,{children:h==null?void 0:h.playListName}),t.jsx(r,{children:"***"})]},n))})]}),t.jsx(z,{children:"Тут будет плеер"})]})]})},L=o.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.21;
  color: ${x.mainFontColor};
`,M=()=>{const{data:e,error:d,isLoading:l}=y(),{data:a,isLoading:n,error:s}=u();return t.jsxs(t.Fragment,{children:[t.jsx(L,{children:" Кабінет редактора"}),t.jsxs(b,{children:[t.jsxs(p,{children:[!n&&a.length,t.jsx("br",{})," Доданої музики"]}),t.jsxs(p,{children:[!l&&!d&&e.countPlaylists,t.jsx("br",{})," Створених плейлистів"]})]}),!n&&t.jsx(R,{tracks:a,isLoading:n,error:s})]})};export{M as default};
