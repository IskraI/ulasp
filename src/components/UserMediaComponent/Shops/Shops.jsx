/* eslint-disable react/prop-types */
import { ShopsWrapper, ShopsList, TitleWrapper } from "./Shops.styled";
import ShopListItem from "./ShopsItem";
import Player from "../../Player/Player";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";
// import ControlMediateca from "../ControlMediateca/ControlMediaTeca";
import symbol from "../../../assets/symbol.svg";
import { Modal } from "../../../components/Modal/Modal";
import ModalForm from "../../../components/EditorComponents/ControlMediateca/ModalForm";
import { ErrorNotFound } from "../../Errors/Errors";
// import { useCreateShopMutation } from "../../../redux/shopsSlice";
import { Loader } from "../../Loader/Loader";

import { useState } from "react";

const Shops = ({
  display,
  displayPlayer,
  data: shops,
  isFetching,
  isError,
  isSuccess,
}) => {
  // const [showModal, setShowModal] = useState(false);

  // const [
  //   createShop,
  //   { isSuccess: isSuccessCreateShop, isLoading, isError: isErrorCreateShop },
  // ] = useCreateShopMutation();

  // const handleSubmitShop = async (data) => {
  //   try {
  //     closeModal();
  //     await createShop(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const closeModal = () => {
  //   return setShowModal(false);
  // };

  // const toogleModal = () => {
  //   return setShowModal((prevsetShowModal) => !showModal);
  // };
  return (
    <>
      {/* <ControlMediateca
        title={"Плейлисти по типу закладу"}
        // iconButton={`${symbol}#icon-plus`}
        // textButton={"Заклад"}
        // onClick={toogleModal}
        // disabled={isError}
      /> */}
      <TitleWrapper>Плейлисти по типу закладу</TitleWrapper>
      {isError && <ErrorNotFound />}
      {isFetching && !isSuccess && !isError && <Loader />}
      {!isError && isSuccess && !shops && <div>Заклади ще не додані</div>}

      {!isError && isSuccess && (
        <ShopsWrapper>
          <ShopsList>
            {shops.map(({ _id, shopCategoryName, shopAvatarURL }) => (
              <ShopListItem
                key={_id}
                id={_id}
                title={shopCategoryName}
                icon={shopAvatarURL}
              />
            ))}
          </ShopsList>
          <MediaNavigationLink link={"shops"} display={display} />
        </ShopsWrapper>
      )}
      <Player display={displayPlayer} />
      {/* {showModal && (
        <Modal width={"814px"} onClose={toogleModal}>
          <ModalForm
            onSubmit={handleSubmitShop}
            idInputFirst={"shopCategoryName"}
            idInputSecond={"type"}
            placeholderFirst={"Назва закладу*"}
          />
        </Modal> */}
      {/* )} */}
    </>
  );
};

export default Shops;
