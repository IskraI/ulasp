import { SiteBarNav } from "../../../components/SiteBarNav/SiteBarNav";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { PageSection, PageSubpage } from "../../AdminPage/AdminPage.styled";
import { Loader } from "../../../components/Loader/Loader";

const EditorPage = () => {
  return (
    <PageSection>
      <SiteBarNav />
      <PageSubpage>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </PageSubpage>
    </PageSection>
  );
};

export default EditorPage;
