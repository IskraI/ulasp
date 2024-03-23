import PropTypes from "prop-types";

import { useState } from "react";
import { Cover, LabelPlusCover } from "./AddCover.styled";
import { BASE_URL } from "../../constants/constants";

const AddCover = ({ cover, coverAlt, handleChooseCover }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const coverImage = selectedImage
    ? URL.createObjectURL(selectedImage)
    : BASE_URL + "/" + cover;

  const handleChooseIcon = (event) => {
    let file;

    if (event.target.files[0] !== undefined) {
      file = event.target.files[0];
    }
    if (file) {
      setSelectedImage(file);
      handleChooseCover(file);
    }
  };

  return (
    <>
      <Cover src={coverImage} alt={coverAlt} />
      <LabelPlusCover htmlFor="cover">+</LabelPlusCover>
      <input
        type="file"
        accept="image/*"
        id="cover"
        onChange={handleChooseIcon}
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
