/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
import { Modal } from "../../Modal/Modal";
import { ErrorNotFound } from "../../Errors/Errors";

import {
  useUpdateShopByIdMutation,
  useDeleteShopMutation,
  useUpdateShopCategoryByIdMutation,
  useDeleteShopCategoryMutation,
  useUpdateShopSubCategoryByIdMutation,
  useDeleteShopSubCategoryMutation,
} from "../../../redux/shopsSlice";

import {
  MediaItem,
  MediaIconsWrapper,
  MediaItemText,
  MediaImg,
  LinkWrapper,
  MediaButton,
  SvgMedia,
  EditInputText,
  EditWrapper,
  MediaLabelPlusCover,
} from "./MediaList.styled";

import { ModalInfoText, ModalInfoTextBold } from "../../Modal/Modal.styled";
import { ErrorValidateText } from "../../Errors/errors.styled";

const MediaListItem = ({
  id: idMediaItem,
  title,
  icon,
  fieldForUpdate,
  typeCover,
  linkToPage,
  typeMediaLibrary,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showModalSuccessDelete, setShowModalSuccessDelete] = useState(false);
  const [showModalSuccessUpdate, setShowModalSuccessUpdate] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
  const [showValidateError, setShowValidateError] = useState(false);
  const [disableEditButton, setDisableEditButton] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [oldMediaTitle, setOldMediaTitle] = useState(null);

  const [mediaTitle, setMediaTitle] = useState(null);

  useEffect(() => {
    if (isEditing) {
      ref.current.focus();
    }
  }, [isEditing]);

  const ref = useRef();
  const location = useLocation();

  const [
    deleteShopCategory,
    {
      isLoading: isLoadingDeleteShopItem,
      isSuccess: isSuccessDeleteShopItem,
      isError: isErrorDeleteShopItem,
      error: errorDeleteShopSubItem,
    },
  ] = useDeleteShopCategoryMutation();

  const [
    deleteShopSubCategory,
    {
      data: dataShopSubCategory,
      isLoading: isLoadingDeleteShopSubCategory,
      isSuccess: isSuccessDeleteShopSubCategory,
      isError: isErrorDeleteShopSubCategory,
      error: errorDeleteShopSubCategory,
    },
  ] = useDeleteShopSubCategoryMutation();

  const [
    updateShop,
    {
      data: dataUpdateShop,
      isSuccess: isSuccessUpdateShop,
      isLoading: isLoadingUpdateShop,
      isError: isErrorUpdateShop,
      error: errorUpdateShop,
    },
  ] = useUpdateShopByIdMutation();

  const [
    deleteShop,
    {
      isLoading: isLoadingDeleteShop,
      isSuccess: isSuccessDeleteShop,
      isError: isErrorDeleteShop,
      error: errorDeleteShop,
    },
  ] = useDeleteShopMutation();

  const [
    updateShopCategory,
    {
      data: dataSuccessUpdateShopCategory,
      isSuccess: isSuccessUpdateShopCategory,
      isLoading: isLoadingUpdateShopCategory,
      isError: isErrorUpdateShopCategory,
      error: errorUpdateShopCategory,
    },
  ] = useUpdateShopCategoryByIdMutation();

  const [
    updateShopSubCategory,
    {
      data: dataSuccessUpdateShopSubCategory,
      isSuccess: isSuccessUpdateShopSubCategory,
      isLoading: isLoadingUpdateShopSubCategory,
      isError: isErrorUpdateShopSubCategory,
      error: errorUpdateShopSubCategory,
    },
  ] = useUpdateShopSubCategoryByIdMutation();

  //update
  let dataUpdate;
  let isLoadingUpdate;
  let errorUpdate;
  let isErrorUpdate;
  let isSuccessUpdate;
  //delete
  let isLoadingDelete;
  let errorDelete;
  let isErrorDelete;
  let isSuccessDelete;
  let shopType;
  switch (typeMediaLibrary) {
    case "shop":
      dataUpdate = dataUpdateShop;
      isLoadingUpdate = isLoadingUpdateShop;
      errorUpdate = errorUpdateShop;
      isErrorUpdate = isErrorUpdateShop;
      isSuccessUpdate = isSuccessUpdateShop;

      isLoadingDelete = isLoadingDeleteShop;
      isSuccessDelete = isSuccessDeleteShop;
      errorDelete = errorDeleteShop;
      isErrorDelete = isErrorDeleteShop;
      shopType = "Тип закладу";
      break;
    case "shopItem":
      dataUpdate = dataSuccessUpdateShopCategory;
      isLoadingUpdate = isLoadingUpdateShopCategory;
      errorUpdate = errorUpdateShopCategory;
      isErrorUpdate = isErrorUpdateShopCategory;
      isSuccessUpdate = isSuccessUpdateShopCategory;
      isLoadingDelete = isLoadingDeleteShopItem;
      isSuccessDelete = isSuccessDeleteShopItem;
      errorDelete = errorDeleteShopSubItem;
      isErrorDelete = isErrorDeleteShopItem;
      shopType = "Категорія";
      break;
    case "subCategoryShop":
      dataUpdate = dataSuccessUpdateShopSubCategory;
      isLoadingUpdate = isLoadingUpdateShopSubCategory;
      errorUpdate = errorUpdateShopSubCategory;
      isErrorUpdate = isErrorUpdateShopSubCategory;
      isSuccessUpdate = isSuccessUpdateShopSubCategory;
      isLoadingDelete = isSuccessDeleteShopSubCategory;
      isSuccessDelete = isSuccessDeleteShopSubCategory;
      errorDelete = errorDeleteShopSubCategory;
      isErrorDelete = isErrorDeleteShopSubCategory;
      shopType = "Підкатегорія";
      break;
    default:
      isLoadingDelete;
      errorDelete;
      isErrorDelete;
      isSuccessDelete;
      shopType;
  }

  const deleteMediaItem = () => {
    switch (typeMediaLibrary) {
      case "shop":
        deleteShop(idMediaItem).unwrap().then(setShowModalSuccessDelete(true));
        // .catch((e) => {
        //   if (e.status === 404) {
        //     setShowModalError(true);
        //   } else {
        //     console.log("Заебал, пошел нахуй");
        //   }
        // });
        break;
      case "shopItem":
        deleteShopCategory(idMediaItem)
          .unwrap()
          .then(setShowModalSuccessDelete(true));
        // .catch((e) => {
        //   if (e.status === 404) {
        //     setShowModalError(true);
        //   } else {
        //     console.log("Заебал, пошел нахуй");
        //   }
        // });
        break;
      case "subCategoryShop":
        deleteShopSubCategory(idMediaItem)
          .unwrap()
          .then(setShowModalSuccessDelete(true));
        // .catch((e) => {
        //   if (e.status === 404) {
        //     setShowModalError(true);
        //   } else {
        //     console.log("Заебал, пошел нахуй");
        //   }
        // });
        break;
      default:
        return console.log("Нету такого типа, иди нахуй");
    }
  };

  const updateMediaItem = async (title) => {
    const formData = new FormData();
    if (title) {
      setOldMediaTitle(title);
    }

    if (!selectedImage) {
      formData.append(fieldForUpdate, mediaTitle);
    }

    if (mediaTitle === title) {
      formData.append("picsURL", selectedImage);
      formData.append("type", typeCover);
    }

    if (selectedImage && mediaTitle !== title && mediaTitle !== "") {
      formData.append(fieldForUpdate, mediaTitle);
      formData.append("picsURL", selectedImage);
      formData.append("type", typeCover);
    }

    switch (typeMediaLibrary) {
      case "shop":
        try {
          await updateShop({ idMediaItem, formData }).unwrap();
          setShowModalSuccessUpdate(true);
          handleCloseEdit();
        } catch (error) {
          console.log(error);
          setShowModalError(true);
        }
        break;
      case "shopItem":
        try {
          await updateShopCategory({ idMediaItem, formData }).unwrap();
          setShowModalSuccessUpdate(true);
          handleCloseEdit();
        } catch (error) {
          console.log(error);
          setShowModalError(true);
        }
        break;
      case "subCategoryShop":
        try {
          await updateShopSubCategory({ idMediaItem, formData }).unwrap();
          setShowModalSuccessUpdate(true);
          handleCloseEdit();
        } catch (error) {
          console.log(error);
          setShowModalError(true);
        }
        break;
      default:
        return console.log("Нету такого типа, иди нахуй");
    }
  };

  const coverImage = selectedImage
    ? URL.createObjectURL(selectedImage)
    : BASE_URL + "/" + icon;

  const editMedia = () => {
    setIsEditing(true);
    setMediaTitle(title);
  };

  const handleChooseIcon = (event) => {
    let file;

    if (event.target.files[0] !== undefined) {
      file = event.target.files[0];
    }
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleCloseEdit = () => {
    setSelectedImage(null);
    setIsEditing(false);
  };

  useEffect(() => {
    const isEmptyMediaUpdateData = (firstStr, secondStr) => {
      if (mediaTitle.length < 2) {
        console.log("Должны быть тут");
        setDisableEditButton(true);
        return;
      }
      if (
        firstStr === "" ||
        (firstStr === secondStr && selectedImage === null)
      ) {
        setDisableEditButton(true);
        return;
      }

      if (mediaTitle.length > 28 || mediaTitle.length < 2) {
        setDisableEditButton(true);
        return;
      }
      if (firstStr !== secondStr && selectedImage !== null) {
        setDisableEditButton(false);
        return;
      }

      if (firstStr === secondStr && selectedImage !== null) {
        setDisableEditButton(false);
        return;
      }

      if (firstStr !== secondStr && selectedImage === null) {
        setDisableEditButton(false);
        return;
      }
    };
    if (isEditing) {
      console.log("Попали");
      isEmptyMediaUpdateData(mediaTitle, title);
    }
  }, [isEditing, mediaTitle, title, selectedImage]);

  const selectLinkToPage = (linkToPage) => {
    // console.log(location.pathname.split("/").includes(linkToPage));

    if (location.pathname.split("/").includes(linkToPage)) {
      return location.pathname + "/" + idMediaItem;
    }

    const link = linkToPage
      ? location.pathname + "/" + linkToPage + "/" + idMediaItem
      : location.pathname + "/" + idMediaItem;

    return link;
  };

  const closeModalSuccessDelete = () => {
    return setShowModalSuccessDelete(false);
  };

  const closeModalSuccessUpdate = () => {
    return setShowModalSuccessUpdate(false);
  };

  const closeModalError = () => {
    return setShowModalError(false);
  };

  const validateInput = (e) => {
    setMediaTitle(e.target.value);

    if (e.target.value.length > 28 || e.target.value.length < 2) {
      setShowValidateError(true);
    } else {
      setShowValidateError(false);
    }
  };

  return (
    <>
      <MediaItem>
        {isEditing ? (
          <div style={{ display: "flex", gap: "10px" }}>
            {showValidateError && (
              <ErrorValidateText>
                Мінімальна довжина 2 символи та максимальна 28 символів.
              </ErrorValidateText>
            )}
            <EditWrapper>
              <MediaImg src={coverImage} alt={title} />
              <MediaLabelPlusCover htmlFor="coverMedia">+</MediaLabelPlusCover>
              <input
                type="file"
                accept="image/*"
                id="coverMedia"
                onChange={handleChooseIcon}
                style={{ display: "none" }}
              />
            </EditWrapper>

            <EditInputText
              type="text"
              value={mediaTitle}
              onChange={validateInput}
              minLength={2}
              maxLength={"29"}
              ref={ref}
            />

            <MediaIconsWrapper>
              <MediaButton
                type="button"
                onClick={() => updateMediaItem(title)}
                disabled={disableEditButton}
              >
                <SvgMedia width="24" height="24">
                  <use href={`${symbol}#icon-check-in`}></use>
                </SvgMedia>
              </MediaButton>
              <MediaButton type="button" onClick={handleCloseEdit}>
                <SvgMedia width="24" height="24">
                  <use href={`${symbol}#icon-close`}></use>
                </SvgMedia>
              </MediaButton>
            </MediaIconsWrapper>
          </div>
        ) : (
          <>
            <LinkWrapper
              key={idMediaItem}
              // to={location.pathname + "/" + id}
              to={selectLinkToPage(linkToPage)}
              state={{ from: location.pathname }}
            >
              <MediaImg src={BASE_URL + "/" + icon} alt={title} />
              <MediaItemText>{title}</MediaItemText>
            </LinkWrapper>

            <MediaIconsWrapper>
              <MediaButton
                type="button"
                onClick={editMedia}
                disabled={isEditing}
              >
                <SvgMedia width="24" height="24">
                  <use href={`${symbol}#icon-pen`}></use>
                </SvgMedia>
              </MediaButton>

              <MediaButton
                type="button"
                onClick={deleteMediaItem}
                disabled={isLoadingDelete}
              >
                {isLoadingDelete ? (
                  <SvgMedia width="24" height="24" stroke="#888889">
                    <use href={`${symbol}#icon-del-basket`}></use>
                  </SvgMedia>
                ) : (
                  <SvgMedia width="24" height="24">
                    <use href={`${symbol}#icon-del-basket`}></use>
                  </SvgMedia>
                )}
              </MediaButton>
            </MediaIconsWrapper>
          </>
        )}
      </MediaItem>

      {showModalSuccessDelete && isSuccessDelete && (
        <Modal width={"394px"} onClose={closeModalSuccessDelete}>
          <ModalInfoText marginBottom={"34px"}>
            {shopType}
            <ModalInfoTextBold>&quot;{title}&quot;</ModalInfoTextBold>
            був видален(-а)ий
          </ModalInfoText>
        </Modal>
      )}
      {showModalError && isErrorDelete && (
        <Modal
          width={"394px"}
          onClose={closeModalError}
          showCloseButton={true}
          padding={"20px"}
        >
          <ErrorNotFound error={"Помилка видалення"}>
            {shopType}
            <ModalInfoTextBold>&quot;{title}&quot;</ModalInfoTextBold>
            <ModalInfoText
              marginTop={"4px"}
              marginBottom={"4px"}
              paddingTop={"8px"}
              paddingBottom={"4px"}
            >
              будь ласка, спробуйте ще раз...
            </ModalInfoText>
          </ErrorNotFound>
        </Modal>
      )}
      {showModalSuccessUpdate && isSuccessUpdate && !isErrorUpdate && (
        <Modal
          width={"394px"}
          onClose={closeModalSuccessUpdate}
          showCloseButton={true}
        >
          <ModalInfoText
            paddingTop={"24px"}
            paddingBottom={"4px"}
            marginTop={"34px"}
            marginBottom={"34px"}
          >
            {shopType}
            <ModalInfoTextBold>&quot;{oldMediaTitle}&quot;</ModalInfoTextBold>
            був оновлена(-ий).
          </ModalInfoText>
        </Modal>
      )}
      {showModalError && isErrorUpdate && (
        <Modal width={"494px"} onClose={closeModalError} showCloseButton={true}>
          {isErrorUpdate && (
            <ModalInfoText>
              {errorUpdate?.data.code === "4091" &&
                ((
                  <ErrorNotFound
                    error={`${shopType} ${errorUpdate?.data.object} вже використовується`}
                  />
                ) ?? <ErrorNotFound />)}
            </ModalInfoText>
          )}
        </Modal>
      )}
    </>
  );
};

export default MediaListItem;
