import { SiteBarNav } from "../../components/SiteBarNav/SiteBarNav";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import {
  PageSection,
  PageSubpage,
} from "../../pages/AdminPage/AdminPage.styled";



const AdminPage = () => {

 
  return (
    <PageSection>
      <SiteBarNav />
      <PageSubpage>
        <Suspense fallback={"Loader"}>
          <Outlet />
        </Suspense>
      </PageSubpage>
    </PageSection>
  );
};

export default AdminPage;
