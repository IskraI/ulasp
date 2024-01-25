import Shops from "../../../components/EditorComponents/Shops/Shops";
import { Loader } from "../../../components/Loader/Loader";
import { Error500, ErrorNotFound } from "../../../components/Errors/Errors";

import { useGetAllShopsQuery } from "../../../redux/shopsSlice";

const ShopsPage = () => {
  const {
    data: shops,
    isFetching: isFetchingAllShops,
    isError: isErrorAllShops,
    error: errorAllShops,
    isSuccess: isSuccessAllShops,
  } = useGetAllShopsQuery();

  return (
    <>
      {isFetchingAllShops && !isSuccessAllShops && <Loader />}
      {errorAllShops?.status === "500" && <Error500 />}
      {errorAllShops && <ErrorNotFound />}
      {isFetchingAllShops && !isSuccessAllShops && !isErrorAllShops && (
        <Loader />
      )}
      {!isErrorAllShops && isSuccessAllShops && !shops && (
        <div>Заклади ще не додані</div>
      )}
      {isSuccessAllShops && !isErrorAllShops && (
        <Shops
          showNavigationLink={false}
          data={shops}
          isFetching={isFetchingAllShops}
          isError={isErrorAllShops}
          isSuccess={isSuccessAllShops}
        />
      )}
    </>
  );
};

export default ShopsPage;
