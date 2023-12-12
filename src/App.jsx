import { useState } from "react";
import { isMobile } from "react-device-detect";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Login from "./pages/LoginPage/LoginPage";
import AdminLoginPage from "./pages/AdminLoginPage/AdminLoginPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import EditorPage from "./pages/Editor/EditorPage/EditorPage";
import UserPage from "./pages/UserPage/UserPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import PrivateUserRoute from "./components/PrivateUserRoute";
import Messages from "./components/Messages/Messages";
import MessagesUser from "./components/MessagesUser/MessagesUser";
import MyPlaylistsUser from "./components/MyPlaylistsUser/MyPlaylistsUser";
// import AdminUsers from "./components/AdminUsers/AdminUsers";
import OnlineUsers from "./components/OnlineUsers/OnlineUsers";
import Analytics from "./components/Analytics/Analytics";
import CardUser from "./components/CardUser/CardUser";
import CardEditor from "./components/CardEditor/CardEditor";
import MediaLibraryPage from "./pages/Editor/MediaLibraryPage/MediaLibraryPage";
import MediaLibraryForUser from "./pages/UserPage/MediaLibraryForUser/MediaLibraryForUser";
import AllTracksEditor from "./pages/Editor/AllTracksEditorPage/AllTracksEditorPage";
import AllGenresPage from "./pages/Editor/AllGenresPage/AllGenresPage";
import NewPlaylistsPage from "./pages/Editor/NewPlaylistsPage/NewPlaylistsPage";
import NewTracksPage from "./pages/Editor/NewTracksPage/NewTracksPage";
import PlaylistsPageInGenre from "./pages/Editor/PlaylistsPage/PlaylistsPageInGenre";
import TracksPage from "./pages/Editor/TracksPage/TracksPage";
import ShopsPage from "./pages/Editor/ShopsPage/ShopPage";
import { useSelector } from "react-redux";
import { useCurrentUserQuery } from "../src/redux/authSlice";
import { useCurrentClientQuery } from "../src/redux/authClientSlice";
import { getUserState } from "../src/redux/userSelectors";
import { lazy, useEffect } from "react";

import { Navigate } from "react-router-dom";

const AdminCabinetPage = lazy(() =>
  import("./components/AdminCabinetPage/AdminCabinetPage")
);
const UserCabinetPage = lazy(() =>
  import("./components/UserCabinetPage/UserCabinetPage")
);
const ListUsers = lazy(() => import("./components/AdminUsers/ListUsers"));
const ListEditors = lazy(() => import("./components/AdminUsers/ListEditors"));
const EditorCabinetPage = lazy(() =>
  import("./pages/Editor/EditorCabinetPage/EditorCabinetPage")
);
const AdminUsers = lazy(() => import("./components/AdminUsers/AdminUsers"));

function App() {
  const user = useSelector(getUserState);
  // console.log("App user", user);

  const skipAdmin = (!user.token && !user.isLoggedIn) || user.userRole;
  const skipClient =
    (!user.token && !user.isLoggedIn) || user.adminRole || user.editorRole;

  const { data, isLoading, isError, error } = useCurrentUserQuery("", {
    skip: skipAdmin,
  }); //если пользователь клиент, то скип = тру и єтот запрос пропустится

  const {
    data: dataClient,
    isLoading: isLoadingClient,
    isError: isErrorClient,
    error: errorClient,
  } = useCurrentClientQuery("", {
    skip: skipClient,
  });

  //если пользователь админ или редаткор, то скип = тру и єтот запрос пропустится

  if (isMobile) {
    return (
      <div>
        <p>На даному пристрої додаток недоступний.</p>
      </div>
    );
  } else {
    return (
      <>
        <Routes>
          <Route element={<SharedLayout avatarURL={user.avatarURL} />}>
            <Route path="/" element={<PublicRoute component={WelcomePage} />} />

            <Route path="/signin" element={<PublicRoute component={Login} />} />

            <Route
              path="/adminlogin"
              element={<PublicRoute component={AdminLoginPage} />}
            />

            {user.userRole && (
              <Route
                path="/user"
                element={<PrivateUserRoute component={UserPage} />}
              >
                <Route index element={<UserCabinetPage />} />
                <Route path="cabinet" element={<UserCabinetPage />} />
                <Route path="messages" element={<MessagesUser />} />
                <Route path="medialibrary" element={<MediaLibraryForUser />} />
                <Route path="myplaylists" element={<MyPlaylistsUser />} />
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
                <Route
                  path="medialibrary/genres"
                  element={<AllGenresPage display={"none"} />}
                />
                <Route path="medialibrary/shops" element={<ShopsPage />} />
                <Route
                  path="medialibrary/genres/:genreId/playlists"
                  element={<PlaylistsPageInGenre />}
                />
                <Route
                  path="medialibrary/genres/:genreId/playlists/:playlistId/tracks"
                  element={<TracksPage />}
                />

                <Route
                  path="medialibrary/newplaylists"
                  element={<NewPlaylistsPage display={"none"} />}
                />
                <Route
                  path="medialibrary/newplaylists/:playlistId/tracks"
                  element={<TracksPage display={"none"} />}
                />
                <Route
                  path="medialibrary/newtracks"
                  element={<AllTracksEditor display={"none"} />}
                />

                <Route path="shops" element={<AllGenresPage />} />
                <Route path="allmusic" element={<NewTracksPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Route>
            )}

            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
