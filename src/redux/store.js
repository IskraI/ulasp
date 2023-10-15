import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authSlice";
import { userReducer } from "./userSlice";
import {signInClient} from "./authUserSlice"

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "user",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [signInClient.reducerPath]: signInClient.reducer,
    user: persistReducer(persistConfig, userReducer),
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware).concat(signInClient.middleware),
});

export const persistor = persistStore(store);
