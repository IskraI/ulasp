import{n as o,c as i,j as t,L as c,k as g}from"./index-1b7c2b38.js";const k=o.div`

 
   display: flex;
  
   align-items: end;
   margin-bottom: 23px;

`,j=o.input`
  display: flex;
  width: 219px;
  height: 40px;
  padding: 0px 8px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid ${i.mainFontColor};
  background-color: transparent;
  /* margin-right: 64px; */
  margin-left: auto;
  /* margin-top: 29px; */
  ::placeholder {
    text-align: right;
    color: rgba(0, 0, 0, 0.4);
  }
`,f=o.table`
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
  }`,h=o.th`
  color: ${i.mainFontColor};
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  padding: 8px;
 
  flex: ${r=>r.isFirstColumn?"0 0 30%":"1"};
  
`,d=o.tr`
  height: 54px;
  border-radius: 10px;

display: flex;
  justify-content: space-between;
  align-items: center;


  
`,m=o.td`
padding: 8px;
  text-align: left;
  flex: ${r=>r.isFirstColumn?"0 0 30%":"1"};
       
 
`,u=o.h3`
  color: ${i.mainFontColor};
  /* font-size: 22px; */
  /* margin-top: 43px; */
  /* margin-left: 111px; */
  /* line-height: calc(26.4 / 22);
  font-weight: 400;
  line-height: 1.28; */

  
font-size: 22px;
font-weight: 400;

`,C=o.p`
  color: ${i.mainFontColor};
  font-size: 24px;
  font-weight: 500;
`,F=o.p`
  color: ${i.mainFontColor};
  font-size: 22px;
  font-weight: 400;
`,b=o.button`
  color: ${i.mainFontColor};
 font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
background-color: transparent;
 outline: none;
  border: none;

`,T=({users:r,visibleColumns:s})=>{const p=e=>{const a=new Date("2023-11-10T14:58:20.594Z"),n=String(a.getDate()).padStart(2,"0"),l=String(a.getMonth()+1).padStart(2,"0"),x=a.getFullYear();return`${n}.${l}.${x}`};return t.jsx(t.Fragment,{children:t.jsxs(f,{children:[t.jsx("thead",{children:t.jsx(d,{children:s.map((e,a)=>t.jsx(h,{isFirstColumn:a===0,children:e.label},e.key))})}),t.jsx("tbody",{children:r.map((e,a)=>t.jsx(d,{children:s.map((n,l)=>t.jsx(m,{isFirstColumn:l===0,children:n.type==="date"?p(e[n.key]):n.type==="name"?e.name?e.name:e.firstName+" "+e.lastName:n.type==="link"?t.jsx(c,{to:"/admin/users/carduser",children:t.jsx(b,{type:"link",children:"картка"})}):n.key==="boolean"?e[n.key]:n.key==="sendEmail"?t.jsx(g,{type:"button",text:"Відправити",padding:"8px",fontsize:"14px",onClick:()=>console.log("send email")}):e[n.key]},n.key))},a))})]})})},$=o.h2`
 color:   ${i.mainFontColor};
font-size: 24px;
font-weight: 500;


`;export{j as I,k as S,u as T,T as U,C as a,F as b,$ as c};
