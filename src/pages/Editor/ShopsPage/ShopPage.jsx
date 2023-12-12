import Shops from "../../../components/EditorComponents/Shops/Shops";
import { Loader } from "../../../components/Loader/Loader";

import { useGetAllShopsQuery } from "../../../redux/shopsSlice";

const ShopsPage = () => {
  const { data: shops, isFetching, isError, isSuccess } = useGetAllShopsQuery();

  return (
    <>
      <Shops
        display={"none"}
        displayPlayer={"none"}
        data={shops}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
      />
    </>
  );
};

export default ShopsPage;
