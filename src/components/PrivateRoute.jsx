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
  const { data, isLoading, adminRole, isError } = useCurrentUserQuery("", {
    skip,
  });
  console.log("adminRole", adminRole);
  console.log("user.isLoggedIn", user.isLoggedIn);

  if (user.isLoggedIn) return <Component />;

  if (isError || (!user.isLoggedIn && !user.token))
    return <Navigate to={redirectTo} />;

  if (isLoading) return <>Loading....</>;

  return <>Loading....</>;
};

export default PrivateRoute;
