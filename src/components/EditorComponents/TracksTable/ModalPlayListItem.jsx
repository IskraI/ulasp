import { BASE_URL } from "../../../constants/constants";

import {
  MediaItem,
  MediaImg,
  MediaItemText,
} from "../MediaList/MediaList.styled";

const ModalPlayListItem = ({ key, title, icon }) => {
  return (
    <MediaItem key={key}>
      <MediaImg src={BASE_URL + "/" + icon} alt={title} />
      <MediaItemText>{title}</MediaItemText>
    </MediaItem>
  );
};

export default ModalPlayListItem;
