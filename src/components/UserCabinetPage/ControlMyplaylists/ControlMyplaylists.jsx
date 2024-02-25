/* eslint-disable react/prop-types */
import { TitleWrapper, ControlWrapper } from "../../UserMediaComponent/MediaList/MediaList.styled";

import { Button } from "../../Button/Button";

const ControlMyplaylists = ({
  title,
  iconButton,
  textButton,
  onClick,
  disabled,
}) => {
  return (
    <ControlWrapper>
      <TitleWrapper>{title}</TitleWrapper>
      <Button
        icon={iconButton}
        type="button"
        text={textButton}
        width="198px"
        showIcon={true}
        fontsize="24px"
        padding="8px"
        onClick={onClick}
        disabled={disabled}
      />
    </ControlWrapper>
  );
};

export default ControlMyplaylists;
