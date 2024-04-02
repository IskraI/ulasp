/* eslint-disable react/prop-types */

import ShopListItem from "./ShopsItem";
import MediaNavigationLink from "../../NavigationLink/NavigationLink";

import { ErrorNotFound } from "../../Errors/Errors";
import { Loader } from "../../Loader/Loader";

import { ShopsWrapper, ShopsList, TitleWrapper } from "./Shops.styled";

const Shops = ({
  showNavigationLink,
  data: shops,
  isFetching,
  isError,
  isSuccess,
}) => {
  return (
    <>
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
          <MediaNavigationLink
            link={"shops"}
            showNavigationLink={showNavigationLink}
          />
        </ShopsWrapper>
      )}
    </>
  );
};

export default Shops;
