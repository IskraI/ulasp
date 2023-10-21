import { useSelector } from "react-redux";
import { getUserState } from "../redux/userSelectors";
import { useCurrentUserQuery } from "../redux/authSlice";
// import {
//   selectIsLoggedIn,
//   selectIsRefreshing,
// } from "../../redux/auth-selector";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const user = useSelector(getUserState);
  const skip = !user.token && !user.isLoggedIn;
  console.log("skip ", skip);
  console.log("user private page", user);

  const { data, isLoading, adminRole, isError } = useCurrentUserQuery("", {
    skip,
  });
  console.log("data current private page ", data);

  console.log("user.isLoggedIn private page", user.isLoggedIn);

  // if (user.isLoggedIn && user.adminRole && data) return <Component />;

  if (!user.isLoggedIn || !user.adminRole) return <Navigate to={redirectTo} />;

  if (isError || (!user.isLoggedIn && !user.token))
    return <Navigate to={redirectTo} />;

  if (isLoading) return <>Loading....</>;

  return <Component />;
};

export default PrivateRoute;
