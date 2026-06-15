import { configureStore } from "@reduxjs/toolkit";
import authReducer, { type authState } from "../features/auth/authSlice";
import chatReducer from "../features/chat/chathSlice";
import { baseApi } from "../services/baseApi";

import storageModule from "redux-persist/lib/storage";
const storage = (storageModule as any).default;
console.log("STORAGE =>", storage);
import { persistStore, persistReducer, createTransform } from "redux-persist";

const authTransform = createTransform(
  (inboundState: authState) => ({
    token: inboundState.token,
  }),
  (outboundState: { token: string | null }) => ({
    token: outboundState.token,
    user: null,
  }),
  { whitelist: ["auth"] },
);

const persistConfig = {
  key: "root",
  storage,
  transforms: [authTransform],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    chat:chatReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware,
    ),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
