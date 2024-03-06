import styled from "@emotion/styled";
import { colors } from "../../../styles/vars";

export const ErrorText = styled.p`
  color: #535250;
  text-align: center;
  font-size: 28px;
  margin: 40px 0;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  max-width: 750px;
  height: 661px;
  padding: 30px;
  background: rgba(256, 256, 256);
  margin-left: auto;
  margin-right: auto;
`;

export const TableReport = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
  /* border: 1px solid #ddd; Цвет и стиль рамки */
`;

export const TableReportRow = styled.th`
  white-space: nowrap;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.1);

  /* border: 1px solid #ddd; Цвет и стиль рамки */
  padding: 8px;
  text-align: center;
`;

export const TableReportBody = styled.tbody`
  &tr:nth-child(2n) {
    background: rgba(0, 0, 0, 0.05);
  }
`;
export const TableCell = styled.td`
  border: 0.5px solid #828282; /* Цвет и стиль рамки */
  padding: 8px;
  text-align: left;
`;
