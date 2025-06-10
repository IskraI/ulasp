import styled from '@emotion/styled';
import { colors, transition } from '../../../styles/vars';

import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  &.active {
    text-decoration: underline;
  }
  transition: ${transition.duration};
  &:hover,
  &:focus {
    color: ${colors.accentHoverColor};
  }
`;
export const SearchUsersContainer = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: end;
  margin-bottom: 23px;
`;
export const UsersContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: start;
  /* padding-top: 4px; */
  margin-bottom: 23px;
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
  outline: none;
  position: ${(props) => props.pageType === 'list' && 'absolute'};
  top: ${(props) => props.pageType === 'list' && ' 104px'};
  right: ${(props) => props.pageType === 'list' && '60px'};
  transition: ${transition.duration};
  &:hover,
  &:focus {
    border-color: ${colors.accentHoverColor};
  }
  ::placeholder {
    text-align: right;
    color: rgba(0, 0, 0, 0.4);
  }
`;

export const Table = styled.table`
  table-layout: fixed;

  display: flex;
  flex-direction: column;
  /* margin-right: 20px; */
  width: 100%;

  border-collapse: collapse;

  th,
  td {
    /* border: 1px solid #ddd; */
    padding: 10px;
    text-align: left;
  }

  td {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  th:last-child,
  td:last-child {
    display: flex;
    justify-content: end;
    padding-right: 24px;
    flex: 0 0 15%;
  }

  tbody {
    tr:nth-of-type(odd) {
      background-color: rgba(234, 234, 234, 0.32);
      transition: ${transition.duration};
      &.hovered {
        background-color: ${colors.accentHoverColor};
      }
    }
  }
`;

export const RowTitle = styled.th`
  color: ${colors.mainFontColor};
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  padding: 8px;

  flex: ${(props) =>
    props.isFirstColumn ? '0 0 20%' : props.isLastColumn ? '0 0 10%' : '1'};
`;

export const TableRow = styled.tr`
  height: 54px;
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: ${transition.duration};

  &.hovered {
    background-color: ${colors.accentHoverColor};
  }
`;

export const TableCell = styled.td`
  padding: 8px;
  text-align: left;
  flex: ${(props) =>
    props.isFirstColumn ? '0 0 20%' : props.isLastColumn ? '0 0 10%' : '1'};
`;

export const TitleTab = styled.h3`
  color: ${colors.mainFontColor};

  font-size: 22px;
  font-weight: 400;
`;

export const TextLoader = styled.p`
  color: ${colors.mainFontColor};
  font-size: 24px;
  font-weight: 500;
`;

export const TextInfo = styled.p`
  color: ${colors.mainFontColor};
  font-size: 22px;
  font-weight: 400;
`;

export const Details = styled.div`
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

export const SearchInputWrapper = styled.div`
  width: 219px;
  height: 40px;
  outline: none;
  border: none;
`;

export const WrapperTablePagination = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;
