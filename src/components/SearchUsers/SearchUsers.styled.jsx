import styled from "@emotion/styled";
import { colors } from "../../styles/vars";

export const SearchUsersContainer = styled.div`

 
   display: grid;
  grid-template-columns: 1fr auto auto; /* Три колонки, первая динамическая, остальные фиксированные */
  grid-gap: 20px; 
   align-items: start;
   margin-bottom: 40px;

`;

export const Input = styled.input`
  display: flex;
  width: 219px;
  height: 40px;
  padding: 0px 8px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid ${colors.mainFontColor};
  background-color: transparent;
  /* margin-right: 64px; */
  margin-left: auto;
  /* margin-top: 29px; */
  ::placeholder {
    text-align: right;
    color: rgba(0, 0, 0, 0.4);
  }
`;

export const Table = styled.table`
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
  }`;

  /* thead th:nth-of-type(1) {
    width: 30%;
  }

  thead th:nth-of-type(2) {
    width: 20%;
  }

  thead th:nth-of-type(3) {
    width: 15%;
  }

  thead th:nth-of-type(4) {
    width: 15%;
  }

  thead th:nth-of-type(5) {
    width: 20%;
  }

  tbody td:nth-of-type(1) {
    width: 30%;
  }

  tbody td:nth-of-type(2) {
    width: 20%;
  }

  tbody td:nth-of-type(3) {
    width: 15%;
  }

  thead td:nth-of-type(4) {
    width: 15%;
  }

  tbody td:nth-of-type(5) {
    width: 20%;
  } */


export const RowTitle = styled.th`
  color: ${colors.mainFontColor};
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  padding: 8px;
 
  flex: ${(props) => (props.isFirstColumn ? '0 0 30%' : '1')};
  
`;

export const TableRow = styled.tr`
  height: 54px;
  border-radius: 10px;

display: flex;
  justify-content: space-between;
  align-items: center;


  
`;

export const TableCell = styled.td`
padding: 8px;
  text-align: left;
  flex: ${(props) => (props.isFirstColumn ? '0 0 30%' : '1')};
       
 
`;

export const TitleTab = styled.h3`
  color: ${colors.mainFontColor};
  /* font-size: 22px; */
  margin-top: 43px;
  /* margin-left: 111px; */
  /* line-height: calc(26.4 / 22);
  font-weight: 400;
  line-height: 1.28; */

  
font-size: 24px;
font-weight: 500;

`;

export const TextLoader = styled.p`
  color: ${colors.mainFontColor};
  font-size: 24px;
  font-weight: 500;
`;

export const TextInfo = styled.p`
  color: ${colors.mainFontColor};
  font-size: 24px;
  font-weight: 500;
`;

export const DetailsBtn = styled.button`
  color: ${colors.mainFontColor};
 font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
background-color: transparent;
 outline: none;
  border: none;

`;
