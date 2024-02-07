// import Shops from "../../../components/UserMediaComponent/Shops/Shops";
// import { Loader } from "../../../components/Loader/Loader";
// import TabNavigation from "../../../components/TabNavigation/TabNavigation";

// import { useGetAllShopsUserQuery } from "../../../redux/shopsUserSlice";

// const ShopsPage = () => {
//   const { data: shops, isFetching, isError, isSuccess } = useGetAllShopsUserQuery();

//   return (
//     <>
//        <TabNavigation />
//       <Shops
//         display={"none"}
//         displayPlayer={"none"}
//         data={shops}
//         isFetching={isFetching}
//         isError={isError}
//         isSuccess={isSuccess}
//         showNavigationLink={false}
//       />
//     </>
//   );
// };

// export default ShopsPage;


import MediaListItem from "../../../components/EditorComponents/MediaList/MediaList";
import MediaNavigationLink from "../../../components/NavigationLink/NavigationLink";
import { Loader } from "../../../components/Loader/Loader";
import {
  Error500,
  ErrorNotFound,
  NoData,
} from "../../../components/Errors/Errors";
// import ControlMediateca from "../../../components/EditorComponents/ControlMediateca/ControlMediaTeca";

import {
  useGetAllShopsUserQuery,
  } from "../../../redux/shopsUserSlice";

import { ShopsWrapper, ShopsList } from "./Shops.styled";


const ShopsPage = ({ showNavigationLink, limit }) => {
 
    const {
    data: shops,
    isFetching: isFetchingAllShops,
    isError: isErrorAllShops,
    error: errorAllShops,
    isSuccess: isSuccessAllShops,
  } = useGetAllShopsUserQuery(`?&limit=${limit ? 12 : ""}`);

   
  const linkToPage = "shops";

 
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
          {/* <ControlMediateca
            title={"Плейлисти по типу закладу"}
            iconButton={`${symbol}#icon-plus`}
            textButton={"Тип закладу"}
            onClick={toogleModal}
            disabled={isErrorAllShops}
          /> */}
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
         </>
  );
};

export default ShopsPage;


