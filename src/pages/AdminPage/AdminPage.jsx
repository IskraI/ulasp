import { SiteBarNav } from "../../components/SiteBarNav/SiteBarNav";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import {
  PageSection,
  PageSubpage,
} from "../../pages/AdminPage/AdminPage.styled";



const AdminPage = ({user}) => {

 
  return (
    <PageSection>
      <SiteBarNav user = {user}/>
      <PageSubpage>
        <Suspense fallback={"Loader"}>
          <Outlet />
        </Suspense>
      </PageSubpage>
    </PageSection>
  );
};

export default AdminPage;
