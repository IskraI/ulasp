import { SiteBarNav } from "../../components/SiteBarNav/SiteBarNav";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const AdminPage = () => {
  console.log("AdminUsersPage");
  return (
    <>
        <SiteBarNav/>
      <Suspense fallback={"Loader"}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default AdminPage;
