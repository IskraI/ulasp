import { useState } from "react";
import { isMobile } from "react-device-detect";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Login from "./pages/LoginPage/LoginPage";
import AdminLoginPage from "./pages/AdminLoginPage/AdminLoginPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import EditorPage from "./pages/EditorPage/EditorPage";
import UserPage from "./pages/UserPage/UserPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import Messages from "./components/Messages/Messages";
// import AdminUsers from "./components/AdminUsers/AdminUsers";
import OnlineUsers from "./components/OnlineUsers/OnlineUsers";
import Analytics from "./components/Analytics/Analytics";
import CardUser from "./components/CardUser/CardUser";
import CardEditor from "./components/CardEditor/CardEditor";
import { useSelector } from "react-redux";
import { useCurrentUserQuery } from "../src/redux/authSlice";
import { getUserState } from "../src/redux/userSelectors";
import { lazy, useEffect } from "react";

import { Navigate } from "react-router-dom";
const AdminCabinetPage = lazy(() =>
  import("./components/AdminCabinetPage/AdminCabinetPage")
);
const ListUsers = lazy(() => import("./components/AdminUsers/ListUsers"));
const ListEditors = lazy(() => import("./components/AdminUsers/ListEditors"));
const EditorCabinetPage = lazy(() =>
  import("./components/EditorCabinetPage/EditorCabinetPage")
);
const AdminUsers = lazy(() => import("./components/AdminUsers/AdminUsers"));

function App() {
  const user = useSelector(getUserState);
  const skip = !user.token && !user.isLoggedIn;

  const { isLoading, isError, error } = useCurrentUserQuery("", { skip });

  if (isLoading) return "Loading...";
  // if (isError) {
  //   console.log("Ошибка в запросе");
  //   return      <Routes>
  //   <Route element={<SharedLayout />}>
  //      <Route
  //   path="/adminlogin"
  //   element={<PublicRoute component={AdminLoginPage} />}
  // />;</Route>
  // </Routes>
  // }

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
           

            <Route
              path="/user"
              element={
                <PrivateRoute
                  roles="user"
                  redirectTo="/"
                  component={<UserPage />}
                />
              }
            ></Route>

            {user.adminRole && (
              <Route
                path="/admin"
                element={<PrivateRoute component={AdminPage} />}
              >
                <Route index element={<AdminCabinetPage />} />
                <Route path="cabinet" element={<AdminCabinetPage />} />
                <Route path="messages" element={<Messages />} />

                <Route path="users" element={<AdminUsers />}>
                  <Route index element={<ListUsers />} />
                  <Route path="allusers" element={<ListUsers />} />
                  <Route path="editors" element={<ListEditors />} />
                </Route>
                <Route path="users/carduser/:id" element={<CardUser />} />

                <Route path="users/cardeditor" element={<CardEditor />} />

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
                <Route path="*" element={<ErrorPage />} />
              </Route>
            )}
 {isError &&  <Route path="/signin" element={<PublicRoute component={Login} />} />}
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
