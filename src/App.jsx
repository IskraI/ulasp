import { useState } from "react";
import { isMobile } from "react-device-detect";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Login from "./pages/LoginPage/LoginPage";
import AdminLoginPage from "./pages/AdminLoginPage/AdminLoginPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import UserPage from "./pages/UserPage/UserPage";

import SharedLayout from "./components/SharedLayout/SharedLayout";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import Messages from "./components/Messages/Messages";
import Users from "./components/Users/Users";
import OnlineUsers from "./components/OnlineUsers/OnlineUsers";
import Analytics from "./components/Analytics/Analytics";
import { useSelector } from "react-redux";
import { useCurrentUserQuery } from "../src/redux/authSlice";
import { getUserState } from "../src/redux/userSelectors";
import { lazy, useEffect } from "react";

const AdminCabinetPage = lazy(() =>
  import("./pages/AdminCabinetPage/AdminCabinetPage")
);

function App() {
  const user = useSelector(getUserState);
  const skip = !user.token && !user.isLoggedIn;

  const { isLoading } = useCurrentUserQuery("", { skip });
  if (isLoading) return "Loading...";

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
          <Route element={<SharedLayout />}>
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

            <Route
              path="/admin"
              element={<PrivateRoute component={AdminPage} />}
            >
              <Route path="cabinet" element={<AdminCabinetPage />} />
              <Route path="messages" element={<Messages />} />
              <Route path="users" element={<Users />} />
              <Route path="online" element={<OnlineUsers />} />
              <Route path="analytics" element={<Analytics />} />
              {/* <Route path="*" element={<ErrorPage />} /> */}
            </Route>
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
