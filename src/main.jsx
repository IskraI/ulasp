import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';

import './index.scss';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import ScrollToTop from './helpers/scrollToTop.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <BrowserRouter basename="/ulasp/"> */}
        <BrowserRouter basename="/">
          <ScrollToTop />
          <App />
          <Toaster richColors={true} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
