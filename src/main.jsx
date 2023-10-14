import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// import { Provider } from "react-redux";
// import { store, persistor } from "./redux/store";
// import { PersistGate } from "redux-persist/integration/react";

import "./index.scss";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter basename="/ulasp/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
