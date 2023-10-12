import { Link } from "react-router-dom";
import { PageHeader, PageLogo } from "./Header.styled";
import pageLogoPath from "../../images/logo.png";

const Header = () => {
  return (
    <PageHeader>
      <Link to="/">
        <PageLogo src={pageLogoPath} width={50} />
      </Link>
    </PageHeader>
  );
};

export default Header;
