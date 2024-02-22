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
  background: rgba(256, 256, 256);
`;

export const TableReport = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableReportRow = styled.th`
  white-space: nowrap;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.1);
`;

export const TableReportBody = styled.tbody`
  &tr:nth-child(2n) {
    background: rgba(0, 0, 0, 0.05);
  }
`;
