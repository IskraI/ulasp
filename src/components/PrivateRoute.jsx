// import { useSelector } from "react-redux";
// import {
//   selectIsLoggedIn,
//   selectIsRefreshing,
// } from "../../redux/auth-selector";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, roles, redirectTo = "/" }) => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  //     const isRefreshing = useSelector(selectIsRefreshing);
  const userRole = roles;
  console.log("userRole", userRole);
  const isLoggedIn = true;

  if (userRole != "admin" && !isLoggedIn) return <Navigate to={redirectTo} />;

  return Component;
};

export default PrivateRoute;
