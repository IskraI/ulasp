import { CustomButton } from "./Button.styled";
import symbol from "../../assets/symbol.svg";

export const Button = ({
  width,
  marginbottom,
  margintop,
  marginright,
  marginleft,
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
      <svg width="24" height="24" style={{ display, marginRight: "8px" }}>
        <use href={icon}></use>
      </svg>
      {text}
    </CustomButton>
  );
};
