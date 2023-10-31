import { SiteBarNav } from "../../components/SiteBarNav/SiteBarNav";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import {
  AdminSection,
  AdminSubpage,
} from "../../pages/AdminPage/AdminPage.styled";



const AdminPage = () => {

 
  return (
    <AdminSection>
      <SiteBarNav />
      <AdminSubpage>
        <Suspense fallback={"Loader"}>
          <Outlet />
        </Suspense>
      </AdminSubpage>
    </AdminSection>
  );
};

export default AdminPage;
