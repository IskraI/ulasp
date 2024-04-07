import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PageHeader, PageLogo, AvatarHeader } from "./Header.styled";
import pageLogoPath from "../../images/logo.png";
import { BASE_URL, defaultAvatarSrc } from "../../constants/constants";
import LogOutBtn from "../LogOutButton/LogOutButton";
import Player from "../Player/Player";

import { getPlayerState } from "../../redux/playerSelectors";

import useVisibleInHeader from "../../hooks/useVisibleInHeader";

const Header = ({ avatarURL, logo }) => {
  const avatarSrc = avatarURL ? `${BASE_URL}/${avatarURL}` : defaultAvatarSrc;
  const playerState = useSelector(getPlayerState);

  const [visible] = useVisibleInHeader();

  return (
    <PageHeader>
      <Link to={logo}>
        <PageLogo
          src={pageLogoPath}
          // width={50}
          style={{ marginRight: "auto" }}
        />
      </Link>
      {visible && (
        <div style={{ width: "100%", display: "flex" }}>
          <Player tracks={playerState.src} inHeader={true} />
        </div>
      )}
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
      {visible && <LogOutBtn />}

      {/* </AvatarHeader> */}
    </PageHeader>
  );
};

Header.propTypes = {
  avatarURL: PropTypes.string,
  logo: PropTypes.string,
};

export default Header;
