import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
import { useLocation } from "react-router-dom";
import { MediaItem, MediaItemText, MediaImg } from "./MediaList.styled";

import { Link } from "react-router-dom";

const MediaListItemShop = ({
  id: idMediaItem,
  title,
  icon,
  linkToPage,
  typeMediaLibrary,
}) => {
  const location = useLocation();

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

  return (
    <>
      <MediaItem>
        <Link
          key={idMediaItem}
          to={selectLinkToPage(linkToPage)}
          state={{ from: location.pathname }}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <MediaImg src={BASE_URL + "/" + icon} alt={title} />
          <MediaItemText>{title}</MediaItemText>
        </Link>
      </MediaItem>
    </>
  );
};

export default MediaListItemShop;
