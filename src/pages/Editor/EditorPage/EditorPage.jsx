import { SiteBarNav } from "../../../components/SiteBarNav/SiteBarNav";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { PageSection, PageSubpage } from "../../AdminPage/AdminPage.styled";
import { Loader } from "../../../components/Loader/Loader";
import Player from "../../../components/Player/Player";

const EditorPage = () => {
  return (
    <PageSection>
      <SiteBarNav />
      <PageSubpage>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        {/* <Player /> */}
      </PageSubpage>
    </PageSection>
  );
};

export default EditorPage;
