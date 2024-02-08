import { useParams } from "react-router-dom";
import { useState } from "react";

// import ControlMediateca from "../../../components/EditorComponents/ControlMediateca/ControlMediaTeca";
import MediaListItem from "../../../components/UserMediaComponent/MediaList/MediaList";
import { Loader } from "../../../components/Loader/Loader";
import {
  Error500,
  ErrorNotFound,
  NoData,
} from "../../../components/Errors/Errors";
import symbol from "../../../assets/symbol.svg";
import Playlists from "../../../components/EditorComponents/PlayLists/PlayListsShop";
import { formDataFunction } from "../../../helpers/helpers";
import {
  useGetShopByIdforUserQuery,
 } from "../../../redux/shopsUserSlice";

import { ShopsList } from "./Shops.styled";


const ShopsItemPage = () => {
  const valueMediaLibrary = "shop";

  

  const { shopId: idShopLibrary } = useParams();

  const {
    data: shopItem,
    isFetching: isFetchingShopItem,
    isError: isErrorShopItem,
    error: errorShopItem,
    isSuccess: isSuccessShopItem,
  } = useGetShopByIdforUserQuery(idShopLibrary);

  
  
  return (
    <>
      {isFetchingShopItem && !isSuccessShopItem && <Loader />}
      {errorShopItem?.status === "500" && <Error500 />}
      {errorShopItem && <ErrorNotFound />}
      {isSuccessShopItem && !isErrorShopItem && (
        <>
          {/* <ControlMediateca
            title={shopItem.shop.shopCategoryName}
            iconButton={`${symbol}#icon-plus`}
            textButton={"Категорія"}
            onClick={toogleModal}
            disabled={isErrorShopItem}
          /> */}

          {shopItem.shop.shopChildItems.length === 0 ? (
            <NoData text={"На данний час, ще не додано жодної категорії."} />
          ) : (
            <ShopsList>
              {shopItem.shop.shopChildItems.map(
                ({ _id, shopItemName, shopItemAvatarURL }) => (
                  <MediaListItem
                    key={_id}
                    id={_id}
                    title={shopItemName}
                    icon={shopItemAvatarURL}
                    typeMediaLibrary={"shopItem"}
                    fieldForUpdate={"shopItemName"}
                    typeCover={"shop"}

                    // linkToPage={linkToPage}
                  />
                )
              )}
            </ShopsList>
          )}
          <Playlists
            title={`Плейлисти категорії "${shopItem.shop.shopCategoryName}"`}
            data={shopItem.allPlaylistsInShopCategory}
            // isFetching={isFetchingShopCategory}
            showNavigationLink={false}
             typeMediaLibrary={valueMediaLibrary}
            idTypeOfMediaLibrary={idShopLibrary}
                     />
              
         
        </>
      )}
    </>
  );
};

export default ShopsItemPage;
