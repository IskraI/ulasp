import {
    ButtonCustomSwitch,
  } from "../ButtonSwitch/ButtonSwitch.styled";

export const ButtonSwitch = ({type,isTrue, onClick})=>{
    
    return(<>

{isTrue ? (
  <ButtonCustomSwitch   type={type}
  isTrue={isTrue}
  onClick={onClick}>
    On
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
    >
      <circle cx="6.5" cy="6.5" r="6" fill="#8CACD7" />
    </svg>
  </ButtonCustomSwitch>
) : (
  <ButtonCustomSwitch type={type}
  isTrue={isTrue}
  onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
    >
      <circle cx="6.5" cy="6.5" r="6" fill="#FFF3BF" />
    </svg>
    Off
  </ButtonCustomSwitch>
)}
</>)}

