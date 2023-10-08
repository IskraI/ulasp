import { useState } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route index element={<WelcomePage />} redirectTo="/main" />
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
