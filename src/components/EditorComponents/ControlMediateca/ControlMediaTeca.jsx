/* eslint-disable react/prop-types */
import { TitleWrapper, ControlWrapper } from "../MediaList/MediaList.styled";

import { Button } from "../../Button/Button";

const ControlMediateca = ({
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
        display="block"
        fontsize="24px"
        padding="8px"
        onClick={onClick}
        disabled={disabled}
      />
    </ControlWrapper>
  );
};

export default ControlMediateca;
