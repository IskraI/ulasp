import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import Login from './pages/LoginPage/LoginPage';
import AdminLoginPage from './pages/AdminLoginPage/AdminLoginPage';
import AdminPage from './pages/AdminPage/AdminPage';
import EditorPage from './pages/Editor/EditorPage/EditorPage';
import UserPage from './pages/UserPage/UserPage/UserPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import SharedLayout from './components/SharedLayout/SharedLayout';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import PrivateUserRoute from './components/PrivateUserRoute';
import Messages from './components/AdminComponents/Messages/Messages';
import MessagesUser from './components/MessagesUser/MessagesUser';

import ReportUser from './components/ReportUser/ReportUser';

import MyPlaylists from './pages/UserPage/MyPlaylists/MyPlaylists';

// import AdminUsers from "./components/AdminUsers/AdminUsers";

import OnlineUsers from './components/AdminComponents/OnlineUsers/OnlineUsers';
import Analytics from './components/AdminComponents/Analytics/Analytics';
import CardUser from './components/AdminComponents/CardUser/CardUser';
import CardEditor from './components/AdminComponents/CardEditor/CardEditor';
import MediaLibraryPage from './pages/Editor/MediaLibraryPage/MediaLibraryPage';
import MediaLibraryForUser from './pages/UserPage/MediaLibraryForUser/MediaLibraryForUser';
import AllTracksEditor from './pages/Editor/AllTracksEditorPage/AllTracksEditorPage';
import AllGenresPage from './pages/Editor/AllGenresPage/AllGenresPage';
import NewPlaylistsPage from './pages/Editor/NewPlaylistsPage/NewPlaylistsPage';
import NewTracksPage from './pages/Editor/NewTracksPage/NewTracksPage';
import PlaylistsPageInGenre from './pages/Editor/PlaylistsPage/PlaylistsPageInGenre';
import TracksPage from './pages/Editor/TracksPage/TracksPage';
import ShopsPage from './pages/Editor/ShopsPage/ShopPage';
import ShopsItemPage from './pages/Editor/ShopsPage/ShopsItemPage';
import ShopSubCategoryPage from './pages/Editor/ShopsPage/ShopSubCategoryPage';
import PlaylistInShopSubCategoryPage from './pages/Editor/ShopsPage/PlaylistInShopSubCategoryPage';
import ShopsUserPage from './pages/UserPage/ShopsUserPage/ShopUserPage';
import TracksInGenre from './pages/UserPage/PlaylistPageUser/TracksInGenre';
import { useSelector } from 'react-redux';
import { useCurrentUserQuery } from '../src/redux/authSlice';
import { useCurrentClientQuery } from '../src/redux/authClientSlice';
import { getUserState } from '../src/redux/userSelectors';
import { lazy, useEffect } from 'react';

import AllGenresForUser from './pages/UserPage/AllGenresForUser/AllGenresForUser';
import NewPlaylistsUser from './pages/UserPage/NewPlaylistsUser/NewPlaylistsUser';
import NewTracksUser from './pages/UserPage/NewTracksUser/NewTracksUser';
import AddTracksUserPage from './pages/UserPage/AddTracksUserPage/AddTracksUserPage';
import AllTracksUser from './pages/UserPage/AllTracksUser/AllTracksUser';
import PlaylistsPageUserInGenre from './pages/UserPage/PlaylistPageUser/PlaylistPageUserInGenre';
import PlaylistsPageUserInShop from './pages/UserPage/PlaylistPageUser/PlaylistsPageUserInShop';
import TracksPageUser from './pages/UserPage/TracksPageUser/TracksPageUser';
import ShopsItemPageUser from './pages/UserPage/ShopsUserPage/ShopsItemPageUser';
import ShopSubCategoryPageUser from './pages/UserPage/ShopsUserPage/ShopSubCategoryPageUser';
import PlaylistInShopSubCategoryPageUser from './pages/UserPage/ShopsUserPage/PlaylistInShopSubCategoryPageUser';
import CreateAllPlaylists from './components/UserCabinetPage/CreatePlaylists/CreateAllPlaylists';
import AddPlayLists from './components/UserCabinetPage/AddPlaylists/AddPlaylistsItem';
import FavoritePlaylists from './components/UserCabinetPage/FavoritePlaylists/FavoritePlaylists';
import AddAllPlaylists from './components/UserCabinetPage/AddPlaylists/AddAllPlaylists';
import FavoriteAllPlaylists from './components/UserCabinetPage/FavoritePlaylists/FavoriteAllPlaylists';
import TracksPageCreateUser from './pages/UserPage/TracksPageUser/TracksCreateUser';

const AdminCabinetPage = lazy(() =>
  import('./components/AdminComponents/AdminCabinetPage/AdminCabinetPage')
);
const UserCabinetPage = lazy(() =>
  import('./pages/UserPage/UserCabinetPage/UserCabinetPage')
);
const ListUsers = lazy(() =>
  import('./components/AdminComponents/AdminUsers/ListUsers')
);
const ListEditors = lazy(() =>
  import('./components/AdminComponents/AdminUsers/ListEditors')
);
const EditorCabinetPage = lazy(() =>
  import('./pages/Editor/EditorCabinetPage/EditorCabinetPage')
);
const AdminUsers = lazy(() =>
  import('./components/AdminComponents/AdminUsers/AdminUsers')
);

function App() {
  const user = useSelector(getUserState);
  const navigate = useNavigate();

  // console.log("user APP", user);
  // console.log(" user.access", user.access);
  // console.log("user.adminRole", user.adminRole);
  // console.log("user.userRole", user.userRole);
  // console.log("user.isLoggedIn", user.isLoggedIn);

  const skipAdmin = (!user.token && !user.isLoggedIn) || user.userRole;
  // console.log("skipAdmin", skipAdmin);

  const skipClient =
    (!user.token && !user.isLoggedIn) || user.adminRole || user.editorRole;

  // console.log("skipClient", skipClient);
  const { data, isLoading, isError, error } = useCurrentUserQuery('', {
    skip: skipAdmin
  }); //если пользователь клиент, то скип = тру и єтот запрос пропустится

  const {
    data: dataClient,
    isLoading: isLoadingClient,
    isError: isErrorClient,
    error: errorClient
  } = useCurrentClientQuery('', {
    skip: skipClient
  });

  //если пользователь админ или редаткор, то скип = тру и єтот запрос пропустится

  // if (isMobile) {
  //   return (
  //     <div>
  //       <p>На даному пристрої додаток недоступний.</p>
  //     </div>
  //   );
  // }
  return (
    <>
      <Routes>
        <Route
          element={
            <SharedLayout
              avatarURL={user.avatarURL}
              logo={
                user.adminRole
                  ? '/admin/cabinet'
                  : user.editorRole
                  ? '/editor/cabinet'
                  : user.userRole
                  ? '/user/cabinet'
                  : '/'
              }
            />
          }
        >
          <Route
            path="/"
            element={<PublicRoute component={WelcomePage} user={user} />}
          />

          <Route path="/signin" element={<PublicRoute component={Login} />} />

          <Route
            path="/adminlogin"
            element={<PublicRoute component={AdminLoginPage} />}
          />
          <Route
            path="/error"
            element={<PublicRoute component={ErrorPage} />}
          />
          {/* && user.acces */}
          {user.userRole && user.access && (
            <Route
              path="/user"
              element={<PrivateUserRoute component={UserPage} />}
            >
              <Route index element={<UserCabinetPage />} />
              <Route path="cabinet" element={<UserCabinetPage />} />
              <Route path="cabinet/messages" element={<MessagesUser />} />
              {user.status && (
                <>
                  <Route
                    path="medialibrary"
                    element={<MediaLibraryForUser />}
                  />
                  <Route
                    path="medialibrary/genres"
                    element={<AllGenresForUser display={'none'} />}
                  />
                  <Route
                    path="medialibrary/genres/:genreId/playlists"
                    element={<PlaylistsPageUserInGenre />}
                  />
                  <Route
                    path="medialibrary/genres/:genreId/tracks"
                    element={<TracksInGenre />}
                  />
                  <Route
                    path="medialibrary/genres/:genreId/playlists/:playlistId/tracks"
                    element={<TracksPageUser display={'none'} />}
                  />
                  <Route
                    path="medialibrary/shops"
                    element={<ShopsUserPage />}
                  />
                  <Route
                    path="medialibrary/shops/:shopId"
                    element={<ShopsItemPageUser />}
                  />
                  <Route
                    path="medialibrary/shops/:shopId/:shopItemId"
                    element={<ShopSubCategoryPageUser />}
                  />
                  <Route
                    path="medialibrary/shops/:shopId/:shopItemId/:shopSubCategoryId"
                    element={<PlaylistInShopSubCategoryPageUser />}
                  />
                  <Route
                    path="medialibrary/shops/:shopId/:shopItemId/:shopSubCategoryId/:playlistId/tracks"
                    element={<TracksPageUser />}
                  />
                  <Route
                    path="medialibrary/shops/:shopId/:shopItemId/:playlistId/tracks"
                    element={<TracksPageUser />}
                  />
                  <Route
                    path="medialibrary/shops/:shopId/:playlistId/tracks"
                    element={<TracksPageUser />}
                  />
                  {/* <Route
                  path="medialibrary/shops/:shopId/playlists"
                  element={<PlaylistsPageUserInShop />}
                /> */}
                  {/* <Route
                  path="medialibrary/shops/:shopId/playlists/:playlistId/tracks"
                  element={<TracksPageUser display={"none"} />}
                /> */}
                  <Route
                    path="medialibrary/:playlistId/tracks"
                    element={<TracksPageUser />}
                  />
                  <Route
                    path="medialibrary/newplaylists"
                    element={<NewPlaylistsUser />}
                  />
                  <Route
                    path="medialibrary/newplaylists/:playlistId/tracks"
                    element={<TracksPageUser />}
                  />
                  <Route
                    path="medialibrary/newtracks"
                    element={<NewTracksUser />}
                  />
                  <Route path="cabinet/myplaylists" element={<MyPlaylists />} />
                  <Route
                    path="cabinet/myplaylists/createplaylists"
                    element={<CreateAllPlaylists />}
                  />
                  <Route
                    path="cabinet/myplaylists/createplaylists/:playlistId/tracks"
                    element={<TracksPageCreateUser />}
                  />
                  <Route
                    path="cabinet/myplaylists/addplaylists"
                    element={<AddAllPlaylists />}
                  />
                  <Route
                    path="cabinet/myplaylists/addplaylists/:playlistId/tracks"
                    element={<TracksPageUser />}
                  />
                  <Route
                    path="cabinet/myplaylists/favoriteplaylists"
                    element={<FavoriteAllPlaylists />}
                  />
                  <Route
                    path="cabinet/myplaylists/favoriteplaylists/:playlistId/tracks"
                    element={<TracksPageUser />}
                  />
                  <Route
                    path="cabinet/myplaylists/:playlistId/tracks"
                    element={<TracksPageUser />}
                  />
                  <Route
                    path="cabinet/myplaylists/newtracks"
                    element={<AllTracksUser />}
                  />
                  <Route
                    path="cabinet/myplaylists/addtracks"
                    element={<AddTracksUserPage />}
                  />
                </>
              )}

              <Route path="*" element={<ErrorPage />} />
            </Route>
          )}

          {user.adminRole && (
            <Route
              path="/admin"
              element={<PrivateRoute component={AdminPage} />}
            >
              <Route index element={<AdminCabinetPage />} />
              <Route path="cabinet" element={<AdminCabinetPage />} />
              <Route path="messages" element={<Messages />} />
              <Route path="users" element={<AdminUsers />}>
                <Route index element={<Navigate to="allusers" />} />
                <Route path="allusers" element={<ListUsers />} />
                <Route path="editors" element={<ListEditors />} />
              </Route>
              <Route path="users/carduser/:id" element={<CardUser />} />
              <Route path="users/carduser/:id/data" element={<ReportUser />} />
              <Route path="users/cardeditor/:id" element={<CardEditor />} />
              <Route path="online" element={<OnlineUsers />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          )}
          {user.editorRole && (
            <Route
              path="/editor"
              element={<PrivateRoute component={EditorPage} />}
            >
              <Route index element={<EditorCabinetPage />} />
              <Route path="cabinet" element={<EditorCabinetPage />} />

              <Route path="medialibrary" element={<MediaLibraryPage />} />
              <Route path="medialibrary/genres" element={<AllGenresPage />} />

              <Route
                path="medialibrary/genres/:genreId/playlists"
                element={<PlaylistsPageInGenre />}
              />
              <Route
                path="medialibrary/genres/:genreId/playlists/:playlistId/tracks"
                element={<TracksPage />}
              />
              <Route path="medialibrary/shops" element={<ShopsPage />} />
              <Route
                path="medialibrary/shops/:shopId"
                element={<ShopsItemPage />}
              />
              <Route
                path="medialibrary/shops/:shopId/:shopItemId"
                element={<ShopSubCategoryPage />}
              />
              <Route
                path="medialibrary/shops/:shopId/:shopItemId/:shopSubCategoryId"
                element={<PlaylistInShopSubCategoryPage />}
              />
              <Route
                path="medialibrary/shops/:shopId/:shopItemId/:shopSubCategoryId/:playlistId/tracks"
                element={<TracksPage />}
              />
              <Route
                path="medialibrary/shops/:shopId/:shopItemId/:playlistId/tracks"
                element={<TracksPage />}
              />
              <Route
                path="medialibrary/shops/:shopId/:playlistId/tracks"
                element={<TracksPage />}
              />

              <Route
                path="medialibrary/newplaylists"
                element={<NewPlaylistsPage />}
              />
              <Route
                path="medialibrary/newplaylists/:playlistId/tracks"
                element={<TracksPage />}
              />
              <Route
                path="medialibrary/newtracks"
                element={<NewTracksPage />}
              />

              <Route path="shops" element={<AllGenresPage />} />
              <Route path="allmusic" element={<AllTracksEditor />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          )}

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
