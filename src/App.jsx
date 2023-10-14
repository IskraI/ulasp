import { useState } from "react";
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

function App() {
  return (
    <>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<PublicRoute component={WelcomePage} />} />

          <Route path="/signin" element={<PublicRoute component={Login} />} />

          <Route
            path="/admin/signin"
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
            path="/adminpage"
            element={
              <PrivateRoute
                roles="editor"
                redirectTo="/"
                component={<AdminPage />}
              />
            }
          ></Route>
          <Route
            path="/adminpage"
            element={
              <PrivateRoute
                roles="admin"
                redirectTo="/"
                component={<AdminPage />}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
