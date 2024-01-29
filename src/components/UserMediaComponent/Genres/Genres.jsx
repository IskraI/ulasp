import { GenresWrapper } from "./Genres.styled";
import MediaListItem from "../MediaList/MediaList";
// import { MockPlayer } from "../TracksTable/TracksTable.styled";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";
import {
  TitleWrapper,
  ControlWrapper,
  MediaList,
} from "../MediaList/MediaList.styled";
import { Button } from "../../Button/Button";
import symbol from "../../../assets/symbol.svg";
// import { Modal } from "../../Modal/Modal";
import { useState, useEffect } from "react";
// import { useCreateGenreMutation } from "../../../redux/genresSlice";

const Genres = ({
  display,
  displayPlayer,
  data: genres,
  isFetching,
  error,
   showNavigationLink
}) => {
  // const [createGenre, { isSuccess }] = useCreateGenreMutation();
  // const [showModal, setShowModal] = useState(false);
  
  
  // const [genre, setGenre] = useState(null);
  
  
  // const toogleModal = () => {
  //   return setShowModal((prevsetShowModal) => !showModal);
  // };

  // const handleSubmit = (e) => {
  //   const content = e.currentTarget.elements.genre.value;
  //   e.preventDefault();
  //   // setGenre(content);
  //   createGenre(content);
  //   e.currentTarget.reset();

  //   if (isSuccess) {
  //     toogleModal();
  //   }
  // };
  // useEffect(() => {}, [genre]);
  return (
    <>
      {!isFetching && !error && (
        <GenresWrapper>
          <ControlWrapper>
            <TitleWrapper>Жанри</TitleWrapper>

            {/* <Button
              icon={`${symbol}#icon-music-album`}
              type="button"
              text={"Жанр"}
              width="198px"
              display="block"
              fontsize="24px"
              padding="8px"
              onClick={toogleModal}
            /> */}
          </ControlWrapper>
          <MediaList>
            {genres.map(({ _id, genre, genreAvatarURL }) => (
              <MediaListItem key={_id} id={_id} title={genre} icon={genreAvatarURL} />
            ))}
          </MediaList>
          <MediaNavigationLink  link={"genres"}
            showNavigationLink={showNavigationLink} />
        </GenresWrapper>
      )}
      {/* <MockPlayer style={{ display: displayPlayer }}>
        Тут будет плеер
      </MockPlayer> */}
      {/* {showModal && (
        <Modal width={"814px"} onClose={toogleModal}>
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <input
              // value={genre}
              // onChange={setGenre}
              style={{
                width: "649px",
                height: "64px",
                padding: 8,
                marginTop: 64,
                marginBottom: 24,
                borderRadius: 10,
                border: "none",
                fontSize: 20,

                backgroundColor: "rgba(234, 234, 234, 0.32)",
              }}
              type="text"
              id="genre"
              placeholder="Назва жанру*"
            />
            <Button
              type="Submit"
              text={"Створити"}
              width="198px"
              display="none"
              fontsize="24px"
              padding="8px"
              marginleft={"auto"}
              marginbottom={"28px"}
            />
          </form>
        </Modal>
      )} */}
    </>
  );
};

export default Genres;
