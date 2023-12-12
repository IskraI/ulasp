import TracksTable from "../TracksTable/TracksTable";

import ControlMediateca from "../ControlMediateca/ControlMediaTeca";
import symbol from "../../../assets/symbol.svg";
import { useNavigate, useLocation } from "react-router-dom";

const RowsTitle = ["", "", "", "", ""];

const NewSongs = ({ data: allTracks, isFetching, error }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {!isFetching && !error && (
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
            title={" Остання додана музика"}
            tracks={allTracks}
            error={error}
            isFetching={isFetching}
            display="none"
            rows={RowsTitle}
          />
        </>
      )}
    </>
  );
};

export default NewSongs;
