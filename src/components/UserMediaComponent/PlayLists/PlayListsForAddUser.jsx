import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import PlayListItemForAdd from './PlayListsItemForAddUser';
import ControlMyplaylists from '../../UserCabinetPage/ControlMyplaylists/ControlMyplaylists';

import CreateUsersPlaylists from '../../UserCabinetPage/CreatePlaylists/CreateUsersPlaylists';

import { Modal } from '../../Modal/Modal';
import { Loader } from '../../Loader/Loader';
import { NoData } from '../../Errors/Errors';

import { useGetPlaylistCreatedUserWithoutTrackIdQuery } from '../../../redux/playlistsUserSlice';

import symbol from '../../../assets/symbol.svg';

import { ModalInfoText } from '../../Modal/Modal.styled';

import {
  TitleWrapperModal,
  MediaList,
  PlaylistModalContainer
} from './MediaList.styled';

const PlaylistsForAdd = ({ title, trackId }) => {
  const {
    data,
    isSuccess: isSuccesCreatePlaylists,
    isError: isErrorCreatePlaylists,
    isLoading
  } = useGetPlaylistCreatedUserWithoutTrackIdQuery(trackId, {
    refetchOnFocus: true
  });

  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const [showModalCreatePlaylist, setShowModalCreatePlaylist] = useState(false);

  useEffect(() => {
    if (showModalSuccess) {
      setTimeout(() => {
        setShowModalSuccess(false);
      }, 1500);
    }
  }, [showModalSuccess]);

  const toogleModal = () =>
    setShowModalCreatePlaylist(() => !showModalCreatePlaylist);

  const noPlaylists =
    'Доступних плейлистів для цієї пісні не знайдено. Ви можете створити новий плейлист';

  return (
    <PlaylistModalContainer
      alignItems={data?.playlistsWithoutTrack?.length > 3 ? 'center' : 'start'}
    >
      {isLoading && <Loader />}
      {isSuccesCreatePlaylists && (
        <>
          <TitleWrapperModal>
            {data?.playlistsWithoutTrack?.length > 0
              ? title
              : data?.countPlaylists
              ? null
              : 'Створіть свій перший плейлист'}
            {(!data?.countPlaylists ||
              data?.playlistsWithoutTrack?.length > 0) && (
              <ControlMyplaylists
                iconButton={`${symbol}#icon-playlist-add`}
                textButton={'Плейлист'}
                onClick={toogleModal}
              />
            )}
          </TitleWrapperModal>

          {!isErrorCreatePlaylists && (
            <>
              {!data?.playlistsWithoutTrack?.length &&
                data?.countPlaylists >= 1 && (
                  <div
                    style={{
                      width: '100%',
                      padding: '12px',
                      textAlign: 'center'
                    }}
                  >
                    <NoData text={noPlaylists} textColor={'grey'}>
                      <ControlMyplaylists
                        iconButton={`${symbol}#icon-playlist-add`}
                        textButton={'Плейлист'}
                        onClick={toogleModal}
                      />
                    </NoData>
                  </div>
                )}

   
                <MediaList>
                  {data?.playlistsWithoutTrack?.map(
                    ({ _id, playListName, playListAvatarURL }) => {
                      return (
                        <PlayListItemForAdd
                          key={_id}
                          id={_id}
                          title={playListName}
                          icon={playListAvatarURL}
                          trackId={trackId}
                          showSuccess={(data) => setShowModalSuccess(data)}
                        />
                      );
                    }
                  )}
                </MediaList>

            </>
          )}
        </>
      )}
      {showModalCreatePlaylist && (
        <CreateUsersPlaylists onClose={toogleModal} />
      )}
      {showModalSuccess && (
        <Modal
          width={'25vw'}
          padding={'4px'}
          borderColor={'#FFF3BF'}
          borderStyle={'solid'}
          borderWidth={'1px'}
          margintop={'2px'}
          onClose={() => setShowModalSuccess(false)}
        >
          <ModalInfoText
            marginTop={'2px'}
            paddingTop={'4px'}
            paddingBottom={'4px'}
          >
            Успішно додано
          </ModalInfoText>
        </Modal>
      )}
    </PlaylistModalContainer>
  );
};

PlaylistsForAdd.propTypes = {
  title: PropTypes.string,
  trackId: PropTypes.string
};

export default PlaylistsForAdd;
