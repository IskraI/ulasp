import{n as t,Y as n,c as o}from"./index-276f13b5.js";const a=t(n)`

 &.active {text-decoration: underline}

`,l=t.div`

 
   display: flex;
   justify-content: space-between;
  
   align-items: end;
   margin-bottom: 23px;

`,s=t.div`

 position:relative;
   display: flex;
   justify-content: space-between; 
   align-items: start;
   padding-top: 4px;
   margin-bottom: 23px;

`,r=t.input`
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

  position: ${e=>e.pageType==="list"&&"absolute"};
  top: ${e=>e.pageType==="list"&&" 104px"};
  right: ${e=>e.pageType==="list"&&"60px"};

  

  /* margin-right: 64px; */
  /* margin-left: auto; */
  /* margin-top: 29px; */
  ::placeholder {
    text-align: right;
    color: rgba(0, 0, 0, 0.4);
  }
`,p=t.table`
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
    padding: 10px;
    text-align: left;
  }

  td {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  /* th:last-child,
td:last-child{
  display:flex;
  justify-content: end;
  padding-right: 24px;
} */


  tbody {
    tr:nth-of-type(odd) {
      background-color: rgba(234, 234, 234, 0.32);
     
      
    }
  }`,d=t.th`
  color: ${o.mainFontColor};
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  padding: 8px;
 
  flex: ${e=>e.isFirstColumn?"0 0 20%":e.isLastColumn?"0 0 10%":"1"};
  
`,x=t.tr`
  height: 54px;
  border-radius: 10px;

display: flex;
  justify-content: space-between;
  align-items: center;


  
`,c=t.td`
padding: 8px;
  text-align: left;
  flex: ${e=>e.isFirstColumn?"0 0 20%":e.isLastColumn?"0 0 10%":"1"};
       
 
`,g=t.h3`
  color: ${o.mainFontColor};
  /* font-size: 22px; */
  /* margin-top: 43px; */
  /* margin-left: 111px; */
  /* line-height: calc(26.4 / 22);
  font-weight: 400;
  line-height: 1.28; */

  
font-size: 22px;
font-weight: 400;

`,f=t.p`
  color: ${o.mainFontColor};
  font-size: 24px;
  font-weight: 500;
`,h=t.p`
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

`;export{r as I,a as L,d as R,l as S,p as T,s as U,x as a,c as b,g as c,f as d,h as e};
