import { ListContact, ItemContact, StyledLink } from "./ContactInfo.styled";

import { memo } from "react";

// export const ContactInfo = () => {

//   return (

//           <ListContact>
//               <ItemContact>Номер телефону:
//                   <StyledLink href="tel:+380504038208">+380504038208</StyledLink></ItemContact>
//               <ItemContact>E-mail бухгалтерії:
//                   <StyledLink href="mailto:iranak061273@gmail.com ">iranak061273@gmail.com </StyledLink></ItemContact>
//           </ListContact>

//   );

// };

export const ContactInfo = memo(function ContactInfo() {
  return (
    <ListContact>
      <ItemContact>
        Номер телефону:
        <StyledLink href="tel:+380504038208">+380504038208</StyledLink>
      </ItemContact>
      <ItemContact>
        E-mail бухгалтерії:
        <StyledLink href="mailto:iranak061273@gmail.com ">
          iranak061273@gmail.com
        </StyledLink>
      </ItemContact>
    </ListContact>
  );
});
