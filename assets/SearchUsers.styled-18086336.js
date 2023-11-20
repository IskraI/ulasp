import{n as t,c as o}from"./index-7c9f31d9.js";const i=t.div`

 
   display: flex;
  
   align-items: end;
   margin-bottom: 23px;

`,l=t.input`
  display: flex;
  width: 219px;
  height: 40px;
  padding: 0px 8px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid ${o.mainFontColor};
  background-color: transparent;
  /* margin-right: 64px; */
  margin-left: auto;
  /* margin-top: 29px; */
  ::placeholder {
    text-align: right;
    color: rgba(0, 0, 0, 0.4);
  }
`,a=t.table`
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
  }`,r=t.th`
  color: ${o.mainFontColor};
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  padding: 8px;
 
  flex: ${e=>e.isFirstColumn?"0 0 20%":"1"};
  
`,s=t.tr`
  height: 54px;
  border-radius: 10px;

display: flex;
  justify-content: space-between;
  align-items: center;


  
`,p=t.td`
padding: 8px;
  text-align: left;
  flex: ${e=>e.isFirstColumn?"0 0 20%":"1"};
       
 
`,d=t.h3`
  color: ${o.mainFontColor};
  /* font-size: 22px; */
  /* margin-top: 43px; */
  /* margin-left: 111px; */
  /* line-height: calc(26.4 / 22);
  font-weight: 400;
  line-height: 1.28; */

  
font-size: 22px;
font-weight: 400;

`,x=t.p`
  color: ${o.mainFontColor};
  font-size: 24px;
  font-weight: 500;
`,c=t.p`
  color: ${o.mainFontColor};
  font-size: 22px;
  font-weight: 400;
`;t.div`
  color: ${o.mainFontColor};
 font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
background-color: transparent;
 outline: none;
  border: none;

`;export{l as I,r as R,i as S,d as T,x as a,c as b,a as c,s as d,p as e};
