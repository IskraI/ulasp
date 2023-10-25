import { Link } from "react-router-dom";
import { PageFooter, PageLogo, ListContact, StyledLink, ContactAdress,Content  } from "./Footer.styled"
import Logo from "../../images/logo-footer.png";


const Footer = () => {
  
 return (
    <PageFooter>
      <Link to="/">
        <PageLogo src={Logo} />
     </Link>
     <ListContact>
       <StyledLink href="tel:+380504038208">+380504038208</StyledLink>
       <StyledLink href="mailto: info@ulasp.com.ua ">info@ulasp.com.ua </StyledLink>
     </ListContact>
     <Content>
     <ContactAdress>Громадська спілка <br />
“Українська ліга авторських та суміжних прав” 02002<br />
         м. Київ, вул. Андрія Аболмасова, 52 поверх</ContactAdress>
       </Content>
    </PageFooter>
  );
};

export default Footer;







