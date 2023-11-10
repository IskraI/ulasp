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
  height, fontsize="20px"
}) => {
  return (
    <CustomButton
      type={type}
      aria-label={ariaLabel}
      marginbottom={marginbottom}
      margintop={margintop}
      padding={padding}
      onClick={onClick}
      fontsize ={fontsize}
    >
      {text}
    </CustomButton>
  );
};
