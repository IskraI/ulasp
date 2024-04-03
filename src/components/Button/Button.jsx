/* eslint-disable react/prop-types */
import { CustomButton, SvgStyled, ImgStyled } from "./Button.styled";

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
  showIcon = false,
  border,
  fillColor,
  strokeColor,
  showImg,
  imgSrc,
  borderHover,
  justifycontent,
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
      border={border}
      imgSrc={imgSrc}
      borderHover={borderHover}
      justifycontent={justifycontent}
    >
      <ImgStyled src={imgSrc} alt={text} showImg={showImg} />
      <SvgStyled
        width="24"
        height="24"
        showIcon={showIcon}
        style={{ marginRight: "8px" }}
        fillColor={fillColor}
        strokeColor={strokeColor}
      >
        <use href={icon}></use>
      </SvgStyled>
      {text}
    </CustomButton>
  );
};
