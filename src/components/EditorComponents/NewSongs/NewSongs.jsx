/* eslint-disable react/prop-types */
import TracksTable from "../TracksTable/TracksTable";

import ControlMediateca from "../ControlMediateca/ControlMediaTeca";
import symbol from "../../../assets/symbol.svg";
import { useNavigate, useLocation } from "react-router-dom";

const RowsTitle = [
  {
    title: "",
    type: "input",
    titleSize: "2%",
    showData: false,
  },
  {
    title: "",
    type: "button",
    titleSize: "2%",
    showData: false,
  },
  {
    title: "",
    type: "image",
    titleSize: "5%",
    showData: true,
  },
  {
    title: "",
    type: "text",
    titleSize: "20%",
    showData: true,
  },
  {
    title: "",
    type: "text",
    titleSize: "15%",
    showData: true,
  },
  {
    title: "",
    type: "text",
    titleSize: "12%",
    showData: true,
  },
  {
    title: "",
    type: "text",
    titleSize: "10%",
    showData: true,
  },
  {
    title: "",
    type: "text",
    titleSize: "15%",
    showData: false,
  },

  {
    title: "",
    type: "button",
    titleSize: "5%",
    showData: false,
  },
];

const NewSongs = ({ data: allTracks, isFetching, isSuccess, error }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {isSuccess && !error && (
        <>
          <ControlMediateca
            title={"Нові пісні"}
            iconButton={`${symbol}#icon-plus`}
            textButton={"Музику"}
            onClick={() =>
              navigate(`${location.pathname}/newtracks`, { replace: true })
            }
          />
          <TracksTable
            showTitle={false}
            tracks={allTracks}
            error={error}
            isFetching={isFetching}
            isSuccess={isSuccess}
            display="none"
            rows={RowsTitle}
          />
        </>
      )}
    </>
  );
};

export default NewSongs;
