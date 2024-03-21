import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserState } from "../redux/userSelectors";
import { lazy, useEffect, useState } from "react";
const PublicRoute = ({ component: Component, redirectTo = "/" }) => {
  const user = useSelector(getUserState);
  console.log("isLoggedIn wwww :>> ", user);

  const [redirectTo1, setRedirectTo] = useState(null);
  console.log("redirectTo :>> ", redirectTo1);
  useEffect(() => {
    if (user && user.isLoggedIn) {
      if (user.adminRole) {
        setRedirectTo("/admin/cabinet");
      } else if (user.editorRole) {
        setRedirectTo("/editor/cabinet");
      } else if (user.userRole) {
        setRedirectTo("/user/cabinet");
      }
    }
  }, []);

  return !user.isLoggedIn ? <Component /> : <Navigate to={redirectTo1} />;
};

export default PublicRoute;
