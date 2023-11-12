import { CustomButton } from "./Button.styled";

export const Button = ({
  marginbottom,
  margintop,
  marginright, 
 marginleft,
  padding,
  onClick,
  type,
  text,
  ariaLabel,
  height,
  fontsize = "20px",
  display,
}) => {
  return (
    <CustomButton
      type={type}
      aria-label={ariaLabel}
      marginbottom={marginbottom}
      margintop={margintop}
      marginright={marginright}
       marginleft={marginleft} 
      padding={padding}
      onClick={onClick}
      fontsize={fontsize}
     display={display}
    >
      {text}
    </CustomButton>
  );
};
