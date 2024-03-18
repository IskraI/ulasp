import {ButtonLabel} from "./AddTracksUser.styled"

const AddTracksUser = ({ playlistId, iconButton, textButton }) => {
  

  return (
    <>
      <ButtonLabel htmlFor="tracks_input">
            <svg width="24" height="24" style={{ marginRight: "8px" }}>
              <use href={iconButton}></use>
            </svg>
            {textButton}
          </ButtonLabel>
    </>
  );
};

export default AddTracksUser;
