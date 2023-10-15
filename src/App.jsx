import { useState } from "react";
import { isMobile } from "react-device-detect";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Login from "./pages/LoginPage/LoginPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import EditorPage from "./pages/EditorPage/EditorPage";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
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
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<WelcomePage />} redirectTo="/" />
            <Route path="/" element={<WelcomePage />} />
            <Route path="/signin" element={<Login />} />
            {/* переходим сюда когда нажимаем Увийти на главной странице */}
            <Route path="/admin" element={<AdminPage />} />
            {/* переходим сюда когда переходим ulasp/admin */}
            <Route path="/editor" element={<EditorPage />} />
            {/* переходим сюда когда переходим ulasp/editor */}
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
