import PropTypes from "prop-types";
import { BASE_URL } from "../../../constants/constants";
import { Link, useLocation } from "react-router-dom";
import { MediaItem, MediaItemText, MediaImg } from "./MediaList.styled";

const MediaListItemShop = ({
  id: idMediaItem,
  title,
  icon,
  linkToPage,
  typeMediaLibrary,
}) => {
  const location = useLocation();

  const selectLinkToPage = (linkToPage) => {
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
      <Link
        key={idMediaItem}
        to={selectLinkToPage(linkToPage)}
        state={{ from: location.pathname }}
      >
        <MediaItem>
          <MediaImg src={BASE_URL + "/" + icon} alt={title} />
          <MediaItemText padding={"0px 40px 0px 6px"}>{title}</MediaItemText>
        </MediaItem>
      </Link>
    </>
  );
};

MediaListItemShop.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  linkToPage: PropTypes.string,
  typeMediaLibrary: PropTypes.string,
};

export default MediaListItemShop;
