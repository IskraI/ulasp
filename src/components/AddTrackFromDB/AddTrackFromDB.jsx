import PropTypes from "prop-types";
import { useState, useCallback } from "react";

import { useGetAllTracksQuery } from "../../redux/tracksSlice";

import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import SearchTracks from "../../pages/Editor/SearchTracks/SearchTracks";
import TracksTableModal from "../EditorComponents/TracksTable/TracksTableModal";
import RowsAddTrackFromDB from "./RowsAddTrackFromDB";

import { ControlWrapper } from "../EditorComponents/MediaList/MediaList.styled";
import { Wrapper, TitleSearchInput } from "./AddTrackFromDB.styled";
import { Loader } from "../Loader/Loader";
const AddTrackFromDB = ({ iconButton, textButton }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const {
    data: allTracks,
    error: errorLoadingAllTracks,
    isFetching: isFetchingAllTracks,
    isSuccess: isSuccessAllTracks,
    isLoading: isLoadingAllTracks,
  } = useGetAllTracksQuery({
    page: currentPage,
    limit: pageSize,
    query,
    forseRefetch: true,
  });

  const onPageChange = (page) => {
    console.log("4 Step - setCurrentPage in mutation AddTrackFromDB", page);
    setCurrentPage(page);
    setIsSearching(false);
  };

  const onPageSizeChange = (size) => {
    console.log(size);
    setPageSize(size);
  };

  const handleSearchTracks = useCallback((data, isActive) => {
    if (isActive) {
      setQuery(data);
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  }, []);

  return (
    <>
      <ControlWrapper marginBottom={"0px"} style={{ marginLeft: "auto" }}>
        <Button
          type={"button"}
          text={textButton}
          width={"198px"}
          showIcon={true}
          icon={iconButton}
          fontsize={"24px"}
          padding={"8px"}
          marginbottom={"0"}
          onClick={() => setShowModal(true)}
        ></Button>
      </ControlWrapper>

      {showModal && (
        <Modal
          width={"75vw"}
          height={"75vh"}
          padding={"16px"}
          flexDirection={"column"}
          showCloseButton={true}
          bcgTransparent={false}
          onClose={() => {
            setShowModal(false);
            setCurrentPage(1);
            setQuery("");
          }}
        >
          {isFetchingAllTracks && <Loader loaderHeight={"100%"} />}
          <Wrapper>
            <TitleSearchInput>Пошук пісень:</TitleSearchInput>
            <SearchTracks
              handleSearchTracks={handleSearchTracks}
              width={"100%"}
            />
            {!isFetchingAllTracks && (
              <>
                {query !== "" && (
                  <TracksTableModal
                    // title={" Остання додана музика"}
                    rows={RowsAddTrackFromDB()}
                    isInPlayList={false}
                    marginTopWrapper={"24px"}
                    tracks={allTracks.latestTracks}
                    // tracksSRC={allTracks.tracksSRC}
                    totalTracks={allTracks.totalTracks}
                    error={errorLoadingAllTracks}
                    isFetching={isFetchingAllTracks}
                    isSuccess={isSuccessAllTracks}
                    isLoading={isLoadingAllTracks}
                    onChangeCurrentPage={onPageChange}
                    onChangeSizePage={onPageSizeChange}
                    currentPage={currentPage}
                    pageSize={pageSize}
                    totalPages={allTracks.totalPages}
                    isSearching={isSearching}
                    deleteButton={false}
                  />
                )}
              </>
            )}
          </Wrapper>
        </Modal>
      )}
    </>
  );
};

AddTrackFromDB.propTypes = {
  iconButton: PropTypes.string,
  textButton: PropTypes.string,
  tracks: PropTypes.object,
};

export default AddTrackFromDB;
