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

  const { data, isLoading, isError } = useCurrentUserQuery("", {
    skip,
  });
  // console.log("user", user);
  // console.log("data", data);

  // console.log("user.adminRole", user.adminRole);

  if (user.isLoggedIn && user.adminRole&&data) return <Component />;

  if (isError || (!user.isLoggedIn && !user.token))
    return <Navigate to={redirectTo} />;

  if (isLoading) return <>Loading....</>;

  return "LoadingSpinner";
};

export default PrivateRoute;
