import { useSelector } from "react-redux";
import { getUserState } from "../redux/userSelectors";
import { useCurrentUserQuery } from "../redux/authSlice";

import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const user = useSelector(getUserState);
  const skip = !user.token && !user.isLoggedIn;

  const { data, isLoading, isError } = useCurrentUserQuery("", {
    skip,
  });
  // console.log("user", user);
  // console.log("data", data);
  if (isLoading) return <>Loading....</>;
  // console.log("user.isLoggedIn", user.isLoggedIn);
  if (!user.isLoggedIn || !user.token) {
    // console.log("Выход из учетной записи");
    return <Navigate to={redirectTo} />;
  }

  if (user.isLoggedIn&& (user.adminRole||user.editorRole) ) return <Component />;

  
  if (isError) {
    // console.log("Ошибка в запросе");
    return <Navigate to={redirectTo} />;
  }



  return  <Navigate to={redirectTo} />;
};

export default PrivateRoute;
