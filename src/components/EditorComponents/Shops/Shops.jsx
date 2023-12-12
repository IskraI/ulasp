/* eslint-disable react/prop-types */
import { ShopsWrapper, ShopsList } from "./Shops.styled";
import ShopListItem from "./ShopsItem";
import Player from "../../Player/Player";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";
import ControlMediateca from "../ControlMediateca/ControlMediaTeca";
import symbol from "../../../assets/symbol.svg";
import { Modal } from "../../../components/Modal/Modal";
import ModalForm from "../../../components/EditorComponents/ControlMediateca/ModalForm";
import { useCreateGenreMutation } from "../../../redux/genresSlice";
import { ErrorNotFound } from "../../Errors/Errors";

import { useState } from "react";

const Shops = ({
  display,
  displayPlayer,
  data: shops,
  isFetching,
  isError,
  isSuccess,
}) => {
  const [showModal, setShowModal] = useState(false);

  //   const [createGenre, { isSuccess, isLoading, isError }] =
  //     useCreateGenreMutation();

  //   const handleSubmitGenre = async (data) => {
  //     try {
  //       closeModal();
  //       await createGenre(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const closeModal = () => {
    return setShowModal(false);
  };

  const toogleModal = () => {
    return setShowModal((prevsetShowModal) => !showModal);
  };

  return (
    <>
      <ControlMediateca
        title={"Плейлисти по типу закладу"}
        iconButton={`${symbol}#icon-plus`}
        textButton={"Заклад"}
        onClick={toogleModal}
        disabled={isError}
      />
      {isError && <ErrorNotFound />}
      {!shops && !isError && <div>Заклади ще не додані</div>}
      {!isError && isSuccess && (
        <ShopsWrapper>
          <ShopsList>
            {/*  {shops.map(({ _id, genre, genreAvatarURL }) => (
            <ShopListItem
              key={_id}
              id={_id}
              title={genre}
              icon={genreAvatarURL}
            />
          ))}*/}
          </ShopsList>
          <MediaNavigationLink link={"shops"} display={display} />
        </ShopsWrapper>
      )}
      <Player display={displayPlayer} />
      {showModal && (
        <Modal width={"814px"} onClose={toogleModal}>
          <ModalForm
            // onSubmit={handleSubmitGenre}
            idInputFirst={"shop"}
            idInputSecond={"type"}
            placeholderFirst={"Назва закладу*"}
          />
        </Modal>
      )}
    </>
  );
};

export default Shops;
