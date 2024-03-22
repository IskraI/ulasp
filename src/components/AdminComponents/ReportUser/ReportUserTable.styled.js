import styled from "@emotion/styled";
import { colors } from "../../../styles/vars";

export const ErrorText = styled.p`
  color: #535250;
  text-align: center;
  font-size: 28px;
  margin: 40px 0;
`;

export const TableWrapper = styled.div`
  overflow-y: auto;
  max-width: 750px;
  height: 100%;
  padding: 30px;
  background: rgba(256, 256, 256);
  margin-left: auto;
  margin-right: auto;
  border: none;
`;

export const TableReport = styled.table`
  width: 100%;

  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
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
  margin-bottom: 12px;
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
  align-items: center;
`;
export const ReportFooterDesc = styled.p`
  margin-top: 8px;
  font-family: Inter;
  font-size: 10px; //8px
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  position: relative;
`;

export const ReportFooterDate = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-direction: row; */
  align-items: flex-start;
  justify-content: space-between;
`;

export const UnderlineDescDiv = styled.div`
  display: inline-block;
`;
export const UnderlinedText = styled.span`
  display: inline-block;
  position: relative;
  text-decoration: none;
`;
export const LineAndYearContainer = styled.div`
  display: flex;
  /* flex-direction: row; */
  align-items: flex-end;
`;
export const FlexChild = styled.div`
  align-self: ${(props) => props.alignSelf};
`;
export const UnderlinedTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UnderlineDate = styled.span`
  /* display: inline-block; */
  width: 60px;
  flex-grow: 1;
  height: 1px;
  background-color: black;
`;
export const YearText = styled.span`
  margin-left: 8px; /* Расстояние между линией и текстом с годом */
`;
export const NoteText = styled.span`
  /* margin-top: 2px; Расстояние между годом и текстом с примечанием */
  font-family: Inter;
  font-size: 10px; //8px
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
`;

export const Underline = styled.span`
  position: absolute;
  top: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: black;
`;
export const TextWithUnderline = styled.span`
  position: relative;
  display: inline-block;
  &:before {
    content: "${(props) => props.text}";
    position: absolute;
    top: 10%;
    left: ${(props) => props.underlineLeft ?? "0%"};
    width: ${(props) => props.underlineWidth ?? "70%"};
    height: 1px;
    background-color: black;
  }
`;
export const ReportFooterBlockDesc = styled.div`
  display: flex;
  width: 100%;
  /* flex-direction: row; */
  align-items: flex-start;
  justify-content: space-between;
`;

export const ReportFooterComment = styled.p`
  font-family: Inter;
  font-size: 12px; //8px
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 24px;
`;

// export const TextWithUnderline = ({ text, underlineWidth, underlineLeft }) => (
//   <Underline width={underlineWidth} left={underlineLeft}>
//     {text}
//   </Underline>
// );
