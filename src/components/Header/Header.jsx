/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { PageHeader, PageLogo, AvatarHeader } from "./Header.styled";
import pageLogoPath from "../../images/logo.png";
import { BASE_URL, defaultAvatarSrc } from "../../constants/constants";

const Header = ({ avatarURL, logo }) => {
  const avatarSrc = avatarURL ? `${BASE_URL}/${avatarURL}` : defaultAvatarSrc;

  return (
    <PageHeader>
      <Link to={logo}>
        <PageLogo src={pageLogoPath} width={50} />
      </Link>
      {/* <AvatarHeader> */}
      {avatarURL && (
        <>
          <AvatarHeader
            src={avatarSrc}
            alt="Avatar"
            style={{
              display: "block",
              width: "50px",
              height: "50px",
              borderRadius: "50px",
              // background: `url(${avatarURL}) lightgray 50% / cover no-repeat`,
            }}
          />
        </>
      )}
      {/* </AvatarHeader> */}
    </PageHeader>
  );
};

export default Header;
