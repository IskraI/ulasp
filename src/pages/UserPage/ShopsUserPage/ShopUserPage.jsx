import Shops from "../../../components/UserMediaComponent/Shops/Shops";
import { Loader } from "../../../components/Loader/Loader";
import TabNavigation from "../../../components/TabNavigation/TabNavigation";

import { useGetAllShopsUserQuery } from "../../../redux/shopsUserSlice";

const ShopsPage = () => {
  const { data: shops, isFetching, isError, isSuccess } = useGetAllShopsUserQuery();

  return (
    <>
       <TabNavigation /> 
      <Shops
        display={"none"}
        displayPlayer={"none"}
        data={shops}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        showNavigationLink={false}
      />
    </>
  );
};

export default ShopsPage;
