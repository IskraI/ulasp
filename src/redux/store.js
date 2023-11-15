import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authSlice";
import { userReducer } from "./userSlice";
import { signInClient } from "./authUserSlice";
import { dataUsersApi } from "./dataUsersSlice";
import { statisticApi } from "./statisticSlice";

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
import { tracksApi } from "./tracksSlice";

const persistConfig = {
  key: "user",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [signInClient.reducerPath]: signInClient.reducer,
    [dataUsersApi.reducerPath]:
      dataUsersApi.reducer /*данные юзеров для админа */,
    [statisticApi.reducerPath]: statisticApi.reducer,
    [tracksApi.reducerPath]: tracksApi.reducer,
    user: persistReducer(persistConfig, userReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(authApi.middleware)
      .concat(signInClient.middleware)
      .concat(dataUsersApi.middleware)
      .concat(statisticApi.middleware)
      .concat(tracksApi.middleware),
});

export const persistor = persistStore(store);
