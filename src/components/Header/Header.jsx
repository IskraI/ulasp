/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { PageHeader, PageLogo, AvatarHeader } from "./Header.styled";
import pageLogoPath from "../../images/logo.png";
import { BASE_URL, defaultAvatarSrc } from "../../constants/constants";
import LogOutBtn from "../LogOutButton/LogOutButton";

const Header = ({ avatarURL, logo }) => {
  const avatarSrc = avatarURL ? `${BASE_URL}/${avatarURL}` : defaultAvatarSrc;
  console.log("logo :>> ", logo);
  return (
    <PageHeader>
      <Link to={logo}>
        <PageLogo
          src={pageLogoPath}
          width={50}
          style={{ marginRight: "auto" }}
        />
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
              marginLeft: "auto",
              // background: `url(${avatarURL}) lightgray 50% / cover no-repeat`,
            }}
          />
        </>
      )}
      <LogOutBtn />

      {/* </AvatarHeader> */}
    </PageHeader>
  );
};

export default Header;
