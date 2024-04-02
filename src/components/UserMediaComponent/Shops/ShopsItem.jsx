/* eslint-disable react/prop-types */
import { BASE_URL } from "../../../constants/constants";

import { useLocation, Link } from "react-router-dom";

import { ShopsItem, ShopsImg, ShopsItemText } from "./ShopsItem.styled";

const ShopListItem = ({ id, title, icon }) => {
  const location = useLocation();

  return (
    <>
      <ShopsItem>
        <Link
          key={id}
          to={`/user/medialibrary/shops`}
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
      </ShopsItem>
    </>
  );
};

export default ShopListItem;
