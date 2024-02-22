/* eslint-disable react/prop-types */
import TracksTable from "../TracksTable/TracksTable";

import ControlMediateca from "../ControlMediateca/ControlMediaTeca";
import symbol from "../../../assets/symbol.svg";
import { useNavigate, useLocation } from "react-router-dom";

const RowsTitle = [
  {
    title: "",
    type: "input",
    titleSize: "1%",
    showData: false,
  },
  {
    title: "",
    type: "button",
    titleSize: "2%",
    showData: true,
  },
  {
    title: "",
    type: "image",
    titleSize: "10%",
    showData: true,
  },
  {
    title: "",
    type: "text",
    titleSize: "25%",
    showData: true,
  },
  {
    title: "",
    type: "text",
    titleSize: "25%",
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
    titleSize: "0%",
    showData: false,
  },

  {
    title: "",
    type: "button",
    titleSize: "1%",
    showData: false,
  },
];

const NewSongs = ({ data: allTracks, isFetching, isSuccess, error }) => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(allTracks);

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
            rows={RowsTitle}
          />
        </>
      )}
    </>
  );
};

export default NewSongs;
