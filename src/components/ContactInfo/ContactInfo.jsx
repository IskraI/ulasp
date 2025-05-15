import { ListContact, ItemContact, StyledLink } from './ContactInfo.styled';

import { memo } from 'react';

export const ContactInfo = memo(function ContactInfo() {
  return (
    <ListContact>
      <ItemContact>
        Номер телефону:
        <StyledLink href="tel:+380504038208">+380504038208</StyledLink>
      </ItemContact>

      <ItemContact>
        E-mail бухгалтерія:
        <StyledLink href="mailto:buhgalter@ulasp.org.ua">
          buhgalter@ulasp.org.ua
        </StyledLink>
      </ItemContact>
      <ItemContact>
        E-mail адміністратор:
        <StyledLink href="mailto:admin_music@ulasp.com.ua">
          admin_music@ulasp.com.ua
        </StyledLink>
      </ItemContact>
    </ListContact>
  );
});
