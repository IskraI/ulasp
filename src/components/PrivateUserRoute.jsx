import { useSelector } from "react-redux";
import { getUserState } from "../redux/userSelectors";
import { useCurrentClientQuery } from "../redux/authClientSlice";

import { Navigate } from "react-router-dom";

const PrivateUserRoute = ({ component: Component, redirectTo = "/signin" }) => {
  const user = useSelector(getUserState);
  const skip = !user.token && !user.isLoggedIn;


  const { data, isLoading, isError } = useCurrentClientQuery("", {
    skip,
  });

  console.log("user.isLoggedIn из страниці юзера", user.isLoggedIn);
  console.log('isError', isError)
  
  // if (isLoading) return <>Loading....</>;
  // console.log("user.isLoggedIn", user.isLoggedIn);


  if (user.isLoggedIn ) return <Component />;

  
  if (isError) {
    console.log("Ошибка в запросе");
    return <Navigate to={"/signin"} />;
  }



  return  <Navigate to={redirectTo} />;
};

export default PrivateUserRoute;
