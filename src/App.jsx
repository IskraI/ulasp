import { useState } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Login from "./pages/LoginPage/LoginPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import EditorPage from "./pages/EditorPage/EditorPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route index element={<WelcomePage />} redirectTo="/" />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signin" element={<Login />} />{" "}
        {/* переходим сюда когда нажимаем Увийти на главной странице */}
        <Route path="/admin" element={<AdminPage />} />{" "}
        {/* переходим сюда когда переходим ulasp/admin */}
        <Route path="/editor" element={<EditorPage />} />{" "}
        {/* переходим сюда когда переходим ulasp/editor */}
      </Routes>
      {/* <h1>Hello ulasp</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  );
}

export default App;
