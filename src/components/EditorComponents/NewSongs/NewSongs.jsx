import TracksTable from "../TracksTable/TracksTable";
import { TitleWrapper, ControlWrapper } from "../MediaList/MediaList.styled";
import { Button } from "../../Button/Button";
import symbol from "../../../assets/symbol.svg";

const RowsTitle = ["", "", "", "", ""];

const NewSongs = ({ data: allTracks, isFetching, error }) => {
  return (
    <>
      {!isFetching && !error && (
        <>
          <ControlWrapper>
            <TitleWrapper>Нові пісні</TitleWrapper>

            <Button
              icon={`${symbol}#icon-redo-active`}
              type="button"
              text={"Музику"}
              width="198px"
              display="block"
              fontsize="24px"
              padding="8px"
            />
          </ControlWrapper>
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
