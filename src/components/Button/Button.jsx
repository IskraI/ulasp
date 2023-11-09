import { CustomButton } from "./Button.styled";

export const Button = ({
  marginbottom,
  margintop,
  marginrigth,
  padding,
  onClick,
  type,
  text,
  ariaLabel,
  height
}) => {
  return (
    <CustomButton
      type={type}
      aria-label={ariaLabel}
      marginbottom={marginbottom}
      margintop={margintop}
      padding={padding}
      onClick={onClick}
      
    >
      {text}
    </CustomButton>
  );
};
