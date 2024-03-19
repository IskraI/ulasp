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

  padding: 30px;
  background: rgba(256, 256, 256);
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #ddd;
`;

export const TableReport = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
  /* border: 1px solid rgba(130, 130, 130, 1); Цвет и стиль рамки */
`;

export const TableReportThead = styled.thead`
  /* border: 1px solid rgba(130, 130, 130, 1); */
`;
export const TableReportRow = styled.th`
  white-space: nowrap;
  padding: 0.5rem;
  background: rgba(234, 234, 234, 0.32);

  border: 1px solid rgba(130, 130, 130, 1);
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
export const ReportTitle = styled.h3`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
`;

export const ReportTitleDesc = styled.p`
  font-family: Inter;
  font-size: 12px; //8px
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
`;

export const ReportHeader = styled.table`
  margin: 18px 0;
  font-family: Inter;
  font-size: 12px; //8px
  font-weight: 400;
  line-height: 8px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ReportHeaderTh = styled.th`
  font-family: Inter;
  font-size: 10px; //6px
  font-weight: 400;
  line-height: 8px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ReportHeaderTr = styled.tr`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
`;

export const ReportHeaderTd1 = styled.td`
  display: flex;
  align-items: center;
  margin-top: 2px;
  padding-left: 4px;
  width: 304px;
  height: 18px;
  border: 0.5px solid rgba(130, 130, 130, 0.5);
  background: rgba(234, 234, 234, 0.32);
`;
export const ReportHeaderTd2 = styled.td`
  display: flex;
  align-items: center;
  margin-top: 2px;
  padding-left: 4px;
  width: 147px;
  height: 18px;
  border: 0.5px solid rgba(130, 130, 130, 0.5);
  background: rgba(234, 234, 234, 0.32);
`;

export const ReportFooter = styled.div`
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const ReportFooterDesc = styled.div`
  margin-top: 8px;
  font-family: Inter;
  font-size: 12px; //8px
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
`;

export const ReportFooterBlockDesc = styled.div`
  display: flex;
  width: 530px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
