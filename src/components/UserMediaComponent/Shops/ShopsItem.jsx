import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
// import { useDeleteShopMutation } from "../../../redux/shopsSlice";
import { useLocation } from "react-router-dom";

import {
  ShopsItem,
  ShopsImg,
  ShopsItemText,
  ShopsIconsWrapper,
  // ShopsDeleteButton,
} from "./ShopsItem.styled";

import { Link } from "react-router-dom";

const ShopListItem = ({ id, title, icon }) => {
  const location = useLocation();
  // const [deleteShop, { isLoading }] = useDeleteShopMutation();
  // const deleteMediaItem = () => {
  //   deleteShop(id);
  // };
  return (
    <>
      <ShopsItem>
        <Link
          key={id}
          to={`/editor/medialibrary/genres/${id}/playlists`}
          state={{ from: location }}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ShopsImg src={BASE_URL + "/" + icon} alt={title} />
          <ShopsItemText>{title}</ShopsItemText>
        </Link>
        {/* <ShopsIconsWrapper>
          <svg width="24" height="24">
            <use href={`${symbol}#icon-pen`}></use>
          </svg> */}

          {/* <ShopsDeleteButton
            type="button"
            onClick={deleteMediaItem}
            disabled={isLoading}
          >
            {isLoading ? (
              <svg width="24" height="24" stroke="#888889">
                <use href={`${symbol}#icon-del-basket`}></use>
              </svg>
            ) : (
              <svg width="24" height="24">
                <use href={`${symbol}#icon-del-basket`}></use>
              </svg>
            )}
          </ShopsDeleteButton> */}
        {/* </ShopsIconsWrapper> */}
      </ShopsItem>
    </>
  );
};

export default ShopListItem;
