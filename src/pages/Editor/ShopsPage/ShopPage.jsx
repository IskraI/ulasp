/* eslint-disable react/prop-types */
import { useState } from "react";

import MediaListItem from "../../../components/EditorComponents/MediaList/MediaList";
import MediaNavigationLink from "../../../components/NavigationLink/NavigationLink";
import { Loader } from "../../../components/Loader/Loader";
import { Modal } from "../../../components/Modal/Modal";

import ModalForm from "../../../components/EditorComponents/ControlMediateca/ModalForm";
import symbol from "../../../assets/symbol.svg";

import {
  Error500,
  ErrorNotFound,
  NoData,
} from "../../../components/Errors/Errors";
import ControlMediateca from "../../../components/EditorComponents/ControlMediateca/ControlMediaTeca";

import {
  useGetAllShopsQuery,
  useCreateShopMutation,
} from "../../../redux/shopsSlice";

import { ShopsWrapper, ShopsList } from "./Shops.styled";
import {
  ModalInfoText,
  ModalInfoTextBold,
} from "../../../components/Modal/Modal.styled";

const ShopsPage = ({ showNavigationLink, limit }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalSuccessCreate, setShowModalSuccessCreate] = useState(false);

  const [showModalError, setShowModalError] = useState(false);

  const {
    data: shops,
    isFetching: isFetchingAllShops,
    isError: isErrorAllShops,
    error: errorAllShops,
    isSuccess: isSuccessAllShops,
  } = useGetAllShopsQuery(`?&limit=${limit ? 12 : ""}`);

  const [
    createShop,
    {
      data: dataCreateShop,
      isSuccess: isSuccessCreateShop,
      isLoading: isLoadingCreateShop,
      isError: isErrorCreateShop,
      error: errorCreateShop,
    },
  ] = useCreateShopMutation();

  const handleSubmitShop = async (data) => {
    try {
      closeModal();
      await createShop(data)
        .unwrap()
        .then(() => setShowModalSuccessCreate(true));
    } catch (error) {
      console.log(error);
      setShowModalError(true);
    }
  };

  const closeModal = () => {
    return setShowModal(false);
  };

  const toogleModal = () => {
    return setShowModal(!showModal);
  };

  const closeModalError = () => {
    return setShowModalError(false);
  };

  const closeModalSuccessCreate = () => {
    return setShowModalSuccessCreate(false);
  };

  const linkToPage = "shops";

  console.log(dataCreateShop);

  const newShop =
    dataCreateShop?.newShop?.shopCategoryName ??
    "Назва нової категорії не була введена";

  return (
    <>
      {isFetchingAllShops && !isSuccessAllShops && <Loader />}
      {errorAllShops?.status === "500" && <Error500 />}
      {errorAllShops && <ErrorNotFound />}
      {isFetchingAllShops && !isSuccessAllShops && !isErrorAllShops && (
        <Loader />
      )}
      {!isErrorAllShops && isSuccessAllShops && !shops && (
        <NoData text={"Заклади ще не додані"} />
      )}
      {isSuccessAllShops && !isErrorAllShops && (
        <>
          <ControlMediateca
            title={"Плейлисти по типу закладу"}
            iconButton={`${symbol}#icon-plus`}
            textButton={"Тип закладу"}
            onClick={toogleModal}
            disabled={isErrorAllShops}
          />
          <ShopsWrapper>
            <ShopsList>
              {shops.map(({ _id, shopCategoryName, shopAvatarURL }) => (
                <MediaListItem
                  key={_id}
                  id={_id}
                  title={shopCategoryName}
                  icon={shopAvatarURL}
                  typeMediaLibrary={"shop"}
                  fieldForUpdate={"shopCategoryName"}
                  typeCover={"shop"}
                  linkToPage={linkToPage}
                />
              ))}
            </ShopsList>
            <MediaNavigationLink
              link={linkToPage}
              showNavigationLink={showNavigationLink}
            />
          </ShopsWrapper>
        </>
      )}
      {showModal && (
        <Modal width={"814px"} onClose={toogleModal} showCloseButton={true}>
          <ModalForm
            onSubmit={handleSubmitShop}
            idInputFirst={"shopCategoryName"}
            idInputSecond={"type"}
            valueInputSecond={"shop"}
            placeholderFirst={"Тип закладу*"}
            cover={false}
          />
        </Modal>
      )}
      {showModalSuccessCreate && isSuccessCreateShop && !isErrorCreateShop && (
        <Modal
          width={"394px"}
          onClose={closeModalSuccessCreate}
          showCloseButton={true}
        >
          <ModalInfoText marginBottom={"34px"}>
            Тип закладу
            <ModalInfoTextBold>&quot;{newShop}&quot;</ModalInfoTextBold>
            був створений
          </ModalInfoText>
        </Modal>
      )}
      {showModalError && isErrorCreateShop && (
        <Modal width={"494px"} onClose={closeModalError} showCloseButton={true}>
          <ModalInfoText>
            {errorCreateShop.data.code === "4091" &&
              ((
                <ErrorNotFound
                  error={`Тип закладу ${errorCreateShop?.data.object} вже використовується`}
                />
              ) ?? <ErrorNotFound />)}
          </ModalInfoText>
        </Modal>
      )}
    </>
  );
};

export default ShopsPage;
