import { useParams } from "react-router-dom";

import {  useGetShopByIdforUserQuery} from "../../../redux/shopsUserSlice";
import LatestPlaylists from "../../../components/UserMediaComponent/PlayLists/PlayLists";
import { Loader } from "../../../components/Loader/Loader";
import TabNavigation from "../../../components/TabNavigation/TabNavigation";

const PlaylistsPageUserInGenre = () => {
  const { shopId } = useParams();

  const { data, isFetching, isError, isSuccess } =
        useGetShopByIdforUserQuery(shopId);
    
    

  return (
    <>
      {isFetching && !isError && <Loader />}
      {!isError && isSuccess && (
              <>
              <TabNavigation/>    
              <LatestPlaylists
            title={'Плейлисти'}
            shopCategoryName={data.shopCategoryName}
            display={"none"}
            displayPlayer={"none"}
            data={data.playList}
            isFetching={isFetching}
          />
        </>
      )}
    </>
  );
};

export default PlaylistsPageUserInGenre;
