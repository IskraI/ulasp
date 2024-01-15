/* eslint-disable react/prop-types */
import { CustomButton, SvgStyled } from "./Button.styled";

export const Button = ({
  width,
  marginbottom,
  margintop,
  marginright,
  marginleft,
  color,
  background,
  padding,
  onClick,
  type,
  icon,
  text,
  ariaLabel,
  height,
  fontsize = "20px",
  display,
  disabled,
}) => {
  return (
    <CustomButton
      type={type}
      width={width}
      height={height}
      color={color}
      background={background}
      aria-label={ariaLabel}
      marginbottom={marginbottom}
      margintop={margintop}
      marginright={marginright}
      marginleft={marginleft}
      padding={padding}
      onClick={onClick}
      fontsize={fontsize}
      display={display}
      disabled={disabled}
    >
      <SvgStyled width="24" height="24" style={{ display, marginRight: "8px" }}>
        <use href={icon}></use>
      </SvgStyled>
      {text}
    </CustomButton>
  );
};
