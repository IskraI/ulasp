import { BASE_URL } from "../../../constants/constants";
import symbol from "../../../assets/symbol.svg";
import { useLocation } from "react-router-dom";
import {
  MediaItem,
  MediaItemText,
  MediaImg,
} from "./MediaList.styled";

import { Link } from "react-router-dom";

const MediaListItem = ({ id, title, icon }) => {
 const location = useLocation();

  return (
    <>
      <MediaItem>
        <Link
          key={id}
          to={`/user/medialibrary/genres/${id}/playlists`}
          state={{ from: location }}
          style={{
           width: "100%",
      display: "flex",
      // flexDirection: "column", 
      alignItems: "center",
      // justifyContent: "center",
      textAlign: "center",
          }}
        >
        <MediaImg src={BASE_URL + "/" + icon} alt={title} />
           {/* <div style={{ flex: 1 }}>  */}
    <MediaItemText>{title}</MediaItemText>
  {/* </div> */}
          </Link>
        </MediaItem>
    </>
  );
};

export default MediaListItem;
