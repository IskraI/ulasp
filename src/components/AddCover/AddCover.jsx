import PropTypes from "prop-types";

import { useEffect } from "react";
import useChooseAvatar from "../../hooks/useChooseAvatar";
import { Cover, LabelPlusCover } from "./AddCover.styled";
import { BASE_URL } from "../../constants/constants";

const AddCover = ({ cover, coverAlt, handleChooseCover }) => {
  const [avatar, setAvatar] = useChooseAvatar();

  const coverImage = avatar
    ? URL.createObjectURL(avatar)
    : BASE_URL + "/" + cover;

  useEffect(() => {
    handleChooseCover(avatar);
  }, [avatar, handleChooseCover]);

  return (
    <>
      <Cover src={coverImage} alt={coverAlt} />
      <LabelPlusCover htmlFor="cover">+</LabelPlusCover>
      <input
        type="file"
        accept="image/*"
        id="cover"
        onChange={setAvatar}
        style={{ display: "none" }}
      />
    </>
  );
};

AddCover.propTypes = {
  cover: PropTypes.string,
  coverAlt: PropTypes.string,
  handleChooseCover: PropTypes.func,
};

export default AddCover;
