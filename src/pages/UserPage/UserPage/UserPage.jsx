import { SiteBarNav } from '../../../components/SiteBarNav/SiteBarNav';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { useSelector } from "react-redux";
// import { getPlayerState } from "../../../redux/playerSelectors";
import { Loader } from '../../../components/Loader/Loader';
import { PageSection, PageSubpage } from '../../AdminPage/AdminPage.styled';
// import Player from "../../../components/Player/Player";
import MobileSidebar from '../../../components/SiteBarNav/SiteBarNav.mobile';

const UserPage = () => {
  // const playerState = useSelector(getPlayerState);

  return (
    <PageSection>
      <SiteBarNav />
      {/* <MobileSidebar /> */}
      <PageSubpage>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        {/* <Player tracks={playerState.src} /> */}
      </PageSubpage>
    </PageSection>
  );
};

export default UserPage;
