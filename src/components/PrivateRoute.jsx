import { useSelector } from "react-redux";
import { getUserState } from "../redux/userSelectors";
import { useCurrentUserQuery } from "../redux/authSlice";

import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, redirectTo = "/adminlogin" }) => {
  
  const user = useSelector(getUserState);

  // const { data, isLoading, isError } = useCurrentUserQuery("", {
  //   skip: !user.token || !user.isLoggedIn,
  // });

  console.log("зашли в приват",);
  if (isLoading) return <>Loading....</>;
  console.log("user.isLoading", isLoading);
  if (!user.isLoggedIn || !user.token) {
    // console.log("Выход из учетной записи");
    return <Navigate to={redirectTo} />;
  }

  if (user.isLoggedIn && data&&(user.adminRole||user.editorRole) ) return <Component />;

  
  // if (isError) {
  //   console.log("Ошибка в запросе");
  //   return <Navigate to={"/adminlogin"} />;
  // }



  return  <Navigate to={redirectTo} />;
};

export default PrivateRoute;
