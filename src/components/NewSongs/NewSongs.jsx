import { useGetAllTracksQuery } from "../../redux/tracksSlice";
import MediaListItem from "../MediaList/MediaList";
import TracksTable from "../TracksTable/TracksTable";
import {
  TitleWrapper,
  ControlWrapper,
  MediaList,
} from "../MediaList/MediaList.styled";
import { Button } from "../Button/Button";
import symbol from "../../assets/symbol.svg";

const NewSongs = () => {
  const { data: allTracks, isFetching, error } = useGetAllTracksQuery();
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
            tracks={allTracks}
            error={error}
            isFetching={isFetching}
            display="none"
          />
        </>
      )}
    </>
  );
};

export default NewSongs;
