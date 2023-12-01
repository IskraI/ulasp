import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authSlice";
import { userReducer } from "./userSlice";
import { authClientApi } from "./authClientSlice";
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
import { genresApi } from "./genresSlice";
import { playlistsApi } from "./playlistsSlice";

const persistConfig = {
  key: "user",
  storage,
  whitelist: ["token","adminRole", "userRole", "editorRole", "isLoggedIn"],
  // whitelist: ["token","adminRole", "userRole", "editorRole", "isLoggedIn"],
};

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [authClientApi.reducerPath]: authClientApi.reducer,
    [dataUsersApi.reducerPath]:
      dataUsersApi.reducer /*данные юзеров для админа */,
    [statisticApi.reducerPath]: statisticApi.reducer,
    [tracksApi.reducerPath]: tracksApi.reducer,
    [genresApi.reducerPath]: genresApi.reducer,
    [playlistsApi.reducerPath]: playlistsApi.reducer,
    user: persistReducer(persistConfig, userReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(authApi.middleware)
      .concat(authClientApi.middleware)
      .concat(dataUsersApi.middleware)
      .concat(statisticApi.middleware)
      .concat(tracksApi.middleware)
      .concat(genresApi.middleware)
      .concat(playlistsApi.middleware),
});

export const persistor = persistStore(store);
