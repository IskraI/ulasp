import { Link } from 'react-router-dom';
import {
  PageFooter,
  PageLogo,
  ListContact,
  StyledLink,
  ContactAdress,
  Content
} from './Footer.styled';
import Logo from '../../images/logo-footer.png';
import RetinaLogo from '../../images/logo-footer@2x.png';

const Footer = () => {
  return (
    <PageFooter>
      <Content>
        <Link to="/">
          <picture>
            <source srcSet={RetinaLogo} media="(min-resolution: 192dpi)" />
            <PageLogo src={Logo} alt="Footer logo" />
          </picture>
        </Link>
        <ListContact>
          <StyledLink href="tel:+380504038208">+380504038208</StyledLink>
          <StyledLink href="mailto: info@ulasp.com.ua ">
            info@ulasp.com.ua
          </StyledLink>
        </ListContact>
      </Content>
   
   
   
   
      <Content>
        <ContactAdress>
          Громадська спілка <br />
          “Українська ліга авторських та суміжних прав” 02002
          <br />
          м. Київ, вул. Андрія Аболмасова 5, 2 поверх
        </ContactAdress>
      </Content>
    </PageFooter>
  );
};

export default Footer;
