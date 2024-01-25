import ControlMediateca from "../../../components/EditorComponents/ControlMediateca/ControlMediaTeca";
import symbol from "../../../assets/symbol.svg";
const ShopsItemPage = () => {


  return (
    <>
      <ControlMediateca
        title={""}
        iconButton={`${symbol}#icon-plus`}
        textButton={"Категорія"}
        // onClick={toogleModal}
        // disabled={isError}
      />
      {/* {isFetchingAllShops && !isSuccessAllShops && <Loader />}
      {errorAllShops?.status === "500" && <Error500 />}
      {errorAllShops && <ErrorNotFound />}
      {isFetchingAllShops && !isSuccessAllShops && !isErrorAllShops && (
        <Loader />
      )}
      {!isErrorAllShops && isSuccessAllShops && !shops && (
        <div>Заклади ще не додані</div>
      )} */}
      {/* {isSuccessAllShops && !isErrorAllShops && (
        <Shops
          showNavigationLink={false}
          data={shops}
          isFetching={isFetchingAllShops}
          isError={isErrorAllShops}
          isSuccess={isSuccessAllShops}
        />
      )} */}

      <p>Заклади</p>
    </>
  );
};

export default ShopsItemPage;
