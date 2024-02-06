import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { SiteBarNav } from "../../../components/SiteBarNav/SiteBarNav";
import { getPlayerState } from "../../../redux/playerSelectors";
import { PageSection, PageSubpage } from "../../AdminPage/AdminPage.styled";
import { Loader } from "../../../components/Loader/Loader";
import Player from "../../../components/Player/Player";

const EditorPage = () => {
  const playerState = useSelector(getPlayerState);

  return (
    <PageSection>
      <SiteBarNav />
      <PageSubpage>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Player tracks={playerState.src} />
      </PageSubpage>
    </PageSection>
  );
};

export default EditorPage;
