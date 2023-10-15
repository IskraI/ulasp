import { CustomButton } from "./Button.styled";

export const Button = ({
  marginbottom,
  margintop,
  padding,
  onClick,
  type,
  text,
  ariaLabel,
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
