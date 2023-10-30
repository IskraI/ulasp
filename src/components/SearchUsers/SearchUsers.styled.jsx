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
  // Здесь вы можете определить стили для таблицы
`;

export const RowTitle = styled.table`
 color:   ${colors.mainFontColor};
// font-family: Inter;
font-size: 16px;
// font-style: normal;
font-weight: 600;
// line-height: normal;
margin-top: 23px;
`;


export const TableRow = styled.tr`
 display: flex;
 margin-left: 127px;
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