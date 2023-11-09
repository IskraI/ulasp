import{n as e,c as r,j as o}from"./index-384c3eb5.js";const w=e.div`

 
   display: grid;
  grid-template-columns: 1fr auto auto; /* Три колонки, первая динамическая, остальные фиксированные */
  grid-gap: 20px; 
   align-items: start;
   margin-bottom: 40px;

`,j=e.input`
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
`,c=e.table`
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
  }`,g=e.th`
  color: ${r.mainFontColor};
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  padding: 8px;
 
  flex: ${t=>t.isFirstColumn?"0 0 30%":"1"};
  
`,p=e.tr`
  height: 54px;
  border-radius: 10px;

display: flex;
  justify-content: space-between;
  align-items: center;


  
`,f=e.td`
padding: 8px;
  text-align: left;
  flex: ${t=>t.isFirstColumn?"0 0 30%":"1"};
       
 
`,k=e.h3`
  color: ${r.mainFontColor};
  /* font-size: 22px; */
  margin-top: 43px;
  /* margin-left: 111px; */
  /* line-height: calc(26.4 / 22);
  font-weight: 400;
  line-height: 1.28; */

  
font-size: 24px;
font-weight: 500;

`,C=e.p`
  color: ${r.mainFontColor};
  font-size: 24px;
  font-weight: 500;
`,F=e.p`
  color: ${r.mainFontColor};
  font-size: 24px;
  font-weight: 500;
`,h=e.button`
  color: ${r.mainFontColor};
 font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
background-color: transparent;
 outline: none;
  border: none;

`,m=e.button`
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
`,b=({marginbottom:t,margintop:l,marginrigth:n,padding:a,onClick:i,type:s,text:d,ariaLabel:x,height:u})=>o.jsx(m,{type:s,"aria-label":x,marginbottom:t,margintop:l,padding:a,onClick:i,children:d}),$=({users:t,visibleColumns:l})=>o.jsx(o.Fragment,{children:o.jsxs(c,{children:[o.jsx("thead",{children:o.jsx(p,{children:l.map((n,a)=>o.jsx(g,{isFirstColumn:a===0,children:n.label},n.key))})}),o.jsx("tbody",{children:t.map((n,a)=>o.jsx(p,{children:l.map((i,s)=>o.jsx(f,{isFirstColumn:s===0,children:i.type==="name"?n.name?n.name:n.firstName+" "+n.lastName:i.type==="link"?o.jsx(h,{type:"button",onClick:console.log("DetailsBtn"),children:"картка"}):i.key==="boolean"?n[i.key]:i.key==="sendEmail"?o.jsx(b,{type:"button",text:"Відправити",padding:"8px",onClick:console.log("send email")}):n[i.key]},i.key))},a))})]})}),T=e.h2`
 color:   ${r.mainFontColor};
font-size: 24px;
font-weight: 500;


`;export{b as B,j as I,w as S,k as T,$ as U,C as a,F as b,T as c};
