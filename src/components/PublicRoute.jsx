import { Navigate } from "react-router-dom";

const PublicRoute = ({ component: Component, redirectTo = "/" }) => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = true;
  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
};

export default PublicRoute;
