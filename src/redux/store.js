import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { authApi } from "./authSlice";

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

// // import { persistedAuthReducer } from "./authSlice";

// const PersistConfig = {
//   key: "user",
//   storage,
//   whitelist: ["token", "role"],
// };

// // const rootReducer = combineReducers({
// //   [authApi.reducerPath]: authApi.reducer,
// //   user: persistReducer(persistConfig),
// // });

// export const store = configureStore({
//   reducer: {
//     auth: persistedAuthReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
