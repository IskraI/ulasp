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
import CabinetAdmin from "./components/CabinetAdmin/CabinetAdmin";

function App() {
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

            <Route path="/admin" element={<AdminPage />}>
              <Route path="cabinet" element={<CabinetAdmin />} />
            </Route>
            {/* <Route
              path="/admin"
              element={<PrivateRoute component={AdminPage} />}
            > */}
            {/* <Route path="/cabinet" element={<CabinetAdmin />} /> */}
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
