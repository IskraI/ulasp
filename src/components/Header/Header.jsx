import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isMobile } from 'react-device-detect';
import {
  PageHeader,
  PageLogo,
  AvatarHeader,
  HeaderPlayerWrapper
} from './Header.styled';
import pageLogoPath from '../../images/logo.png';
import { BASE_URL, defaultAvatarSrc } from '../../constants/constants';
import LogOutBtn from '../LogOutButton/LogOutButton';
import Player from '../Player/Player';
import { getPlayerState } from '../../redux/playerSelectors';
import useVisibleInHeader from '../../hooks/useVisibleInHeader';

const Header = ({ avatarURL, logo }) => {
  const avatarSrc = avatarURL ? `${BASE_URL}/${avatarURL}` : defaultAvatarSrc;
  const playerState = useSelector(getPlayerState);

  const [visibleBtn] = useVisibleInHeader({ button: true });
  const [visible] = useVisibleInHeader();

  return (
    <PageHeader>
      <Link to={logo}>
        <PageLogo src={pageLogoPath} />
      </Link>

      {visible && (
        <HeaderPlayerWrapper>
          <Player tracks={playerState.src} inHeader={true} />
        </HeaderPlayerWrapper>
      )}
      {avatarURL && (
        <>
          <AvatarHeader src={avatarSrc} alt="Avatar" />
        </>
      )}
      {visibleBtn && !isMobile && <LogOutBtn />}
    </PageHeader>
  );
};

Header.propTypes = {
  avatarURL: PropTypes.string,
  logo: PropTypes.string
};

export default Header;
