import{n as i,c as r,j as n,L as g}from"./index-fad82072.js";const k=i.div`

 
   display: grid;
  grid-template-columns: 1fr auto auto; /* Три колонки, первая динамическая, остальные фиксированные */
  grid-gap: 20px; 
   align-items: start;
   margin-bottom: 40px;

`,j=i.input`
  display: flex;
  width: 219px;
  height: 40px;
  padding: 0px 8px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid ${r.mainFontColor};
  background-color: transparent;
  /* margin-right: 64px; */
  margin-left: auto;
  /* margin-top: 29px; */
  ::placeholder {
    text-align: right;
    color: rgba(0, 0, 0, 0.4);
  }
`,f=i.table`
  table-layout: fixed; 
  /* width: 100%; */
  /* border-collapse: collapse; */
  /* margin-left: 127px; */
  display: flex;
  flex-direction: column;
  /* grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); // Здесь можно настроить ширину колонок
  gap: 8px;   */ 
margin-right: 20px;
  width: 100%;
  border-collapse: collapse;

 

  th, td {
    /* border: 1px solid #ddd; */
    padding: 8px;
    text-align: left;
  }

  td {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }


  tbody {
    tr:nth-of-type(odd) {
      background-color: rgba(234, 234, 234, 0.32);
     
      
    }
  }`,h=i.th`
  color: ${r.mainFontColor};
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  padding: 8px;
 
  flex: ${t=>t.isFirstColumn?"0 0 30%":"1"};
  
`,x=i.tr`
  height: 54px;
  border-radius: 10px;

display: flex;
  justify-content: space-between;
  align-items: center;


  
`,m=i.td`
padding: 8px;
  text-align: left;
  flex: ${t=>t.isFirstColumn?"0 0 30%":"1"};
       
 
`,$=i.h3`
  color: ${r.mainFontColor};
  /* font-size: 22px; */
  margin-top: 43px;
  /* margin-left: 111px; */
  /* line-height: calc(26.4 / 22);
  font-weight: 400;
  line-height: 1.28; */

  
font-size: 24px;
font-weight: 500;

`,C=i.p`
  color: ${r.mainFontColor};
  font-size: 24px;
  font-weight: 500;
`,F=i.p`
  color: ${r.mainFontColor};
  font-size: 24px;
  font-weight: 500;
`,b=i.button`
  color: ${r.mainFontColor};
 font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
background-color: transparent;
 outline: none;
  border: none;

`,y=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #17161c;
  font-family: inherit;
  font-size: 20px;
  font-weight: 400;
  color: #17161c;
  outline: none;
  background: rgba(164, 188, 212, 0.3);
  margin-top: ${t=>t.margintop};
  margin-bottom: ${t=>t.marginbottom};
  padding: ${t=>t.padding};


  &:hover,
  :focus {
    background: #fff3bf;
    border: 1px solid #17161c;
  }

  &:active {
    background: #fff3bf;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4) inset;
    border: 1px solid #17161c;
  }
`,u=({marginbottom:t,margintop:s,marginrigth:p,padding:e,onClick:a,type:o,text:l,ariaLabel:d,height:c})=>n.jsx(y,{type:o,"aria-label":d,marginbottom:t,margintop:s,padding:e,onClick:a,children:l}),T=({users:t,visibleColumns:s})=>{const p=e=>{const a=new Date("2023-11-10T14:58:20.594Z"),o=String(a.getDate()).padStart(2,"0"),l=String(a.getMonth()+1).padStart(2,"0"),d=a.getFullYear();return`${o}.${l}.${d}`};return n.jsx(n.Fragment,{children:n.jsxs(f,{children:[n.jsx("thead",{children:n.jsx(x,{children:s.map((e,a)=>n.jsx(h,{isFirstColumn:a===0,children:e.label},e.key))})}),n.jsx("tbody",{children:t.map((e,a)=>n.jsx(x,{children:s.map((o,l)=>n.jsx(m,{isFirstColumn:l===0,children:o.type==="date"?p(e[o.key]):o.type==="name"?e.name?e.name:e.firstName+" "+e.lastName:o.type==="link"?n.jsx(g,{to:"/admin/users/carduser",children:n.jsx(b,{type:"link",children:"картка"})}):o.key==="boolean"?e[o.key]:o.key==="sendEmail"?n.jsx(u,{type:"button",text:"Відправити",padding:"8px",onClick:()=>console.log("send email")}):e[o.key]},o.key))},a))})]})})},z=i.h2`
 color:   ${r.mainFontColor};
font-size: 24px;
font-weight: 500;


`;export{u as B,j as I,k as S,$ as T,T as U,C as a,F as b,z as c};
