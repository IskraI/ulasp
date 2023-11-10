import{n as o,c as r,j as e,L as c}from"./index-d533876a.js";const j=o.div`

 
   display: grid;
  grid-template-columns: 1fr auto auto; /* Три колонки, первая динамическая, остальные фиксированные */
  grid-gap: 20px; 
   align-items: start;
   margin-bottom: 40px;

`,k=o.input`
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
`,g=o.table`
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
  }`,f=o.th`
  color: ${r.mainFontColor};
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  padding: 8px;
 
  flex: ${t=>t.isFirstColumn?"0 0 30%":"1"};
  
`,d=o.tr`
  height: 54px;
  border-radius: 10px;

display: flex;
  justify-content: space-between;
  align-items: center;


  
`,h=o.td`
padding: 8px;
  text-align: left;
  flex: ${t=>t.isFirstColumn?"0 0 30%":"1"};
       
 
`,C=o.h3`
  color: ${r.mainFontColor};
  /* font-size: 22px; */
  margin-top: 43px;
  /* margin-left: 111px; */
  /* line-height: calc(26.4 / 22);
  font-weight: 400;
  line-height: 1.28; */

  
font-size: 24px;
font-weight: 500;

`,F=o.p`
  color: ${r.mainFontColor};
  font-size: 24px;
  font-weight: 500;
`,$=o.p`
  color: ${r.mainFontColor};
  font-size: 24px;
  font-weight: 500;
`,m=o.button`
  color: ${r.mainFontColor};
 font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
background-color: transparent;
 outline: none;
  border: none;

`,b=o.button`
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
`,u=({marginbottom:t,margintop:l,marginrigth:n,padding:a,onClick:i,type:s,text:p,ariaLabel:x,height:y})=>e.jsx(b,{type:s,"aria-label":x,marginbottom:t,margintop:l,padding:a,onClick:i,children:p}),T=({users:t,visibleColumns:l})=>e.jsx(e.Fragment,{children:e.jsxs(g,{children:[e.jsx("thead",{children:e.jsx(d,{children:l.map((n,a)=>e.jsx(f,{isFirstColumn:a===0,children:n.label},n.key))})}),e.jsx("tbody",{children:t.map((n,a)=>e.jsx(d,{children:l.map((i,s)=>e.jsx(h,{isFirstColumn:s===0,children:i.type==="name"?n.name?n.name:n.firstName+" "+n.lastName:i.type==="link"?e.jsx(c,{to:"/admin/users/carduser",children:e.jsx(m,{type:"link",children:"картка"})}):i.key==="boolean"?n[i.key]:i.key==="sendEmail"?e.jsx(u,{type:"button",text:"Відправити",padding:"8px",onClick:()=>console.log("send email")}):n[i.key]},i.key))},a))})]})}),z=o.h2`
 color:   ${r.mainFontColor};
font-size: 24px;
font-weight: 500;


`;export{u as B,k as I,j as S,C as T,T as U,F as a,$ as b,z as c};
