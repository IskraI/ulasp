import styled from '@emotion/styled';
import { colors } from '../../styles/vars';

export const SearchUsersContainer = styled.div`
  display: flex;
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
border: 1px solid  ${colors.mainFontColor};
background-color: transparent;
margin-right: 64px;
margin-left: auto;
margin-top: 29px;
::placeholder { 
    text-align: right;
    color: rgba(0, 0, 0, 0.4); 
  }
`;

export const Table = styled.table`
table-layout: fixed;
width: 100%;
border-collapse: collapse;
margin-left: 127px;
 
   tbody {
    tr:nth-of-type(odd) {
      background-color:  rgba(234, 234, 234, 0.32);
    }
    
  }

  thead th:nth-of-type(1) {
  width: 27%;
}

thead th:nth-of-type(2) {
  width: 18%;
}

thead th:nth-of-type(3) {
  width: 18%;
}

thead th:nth-of-type(4) {
  width: 16%;
}

thead th:nth-of-type(5) {
  width: 21%;
}
`;

export const RowTitle = styled.table`
 color:   ${colors.mainFontColor};
font-size: 16px;
font-weight: 600;
margin-top: 23px;
flex: 1;
`;


export const TableRow = styled.tr`
 display: flex;
 
 /* gap: 129px; */
 height: 54px;
    border-radius: 10px;
   `;

export const TableCell = styled.td`

  // Здесь вы можете определить стили для ячеек таблицы
         
 
`;

export const TitleTab = styled.h3`
 color:   ${colors.mainFontColor};
 font-size: 22px;
 margin-top: 43px;
 margin-left: 111px;
line-height: calc(26.4 / 22);
font-weight: 400;
  line-height: 1.28;
`;

export const TextLoader = styled.p`
  color:   ${colors.mainFontColor};
 font-size: 24px;
font-weight: 500;
`;

export const TextInfo = styled.p`
 color:   ${colors.mainFontColor};
 font-size: 24px;
font-weight: 500;
`;
 
