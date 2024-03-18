import React, { forwardRef } from "react";
import ReportUserTable from "./ReportUserTable";

const ReportPrint = forwardRef(({ data, date, user }, ref) => {
  return <ReportUserTable ref={ref} data={data} date={date} user={user} />;
});

export default ReportPrint;
