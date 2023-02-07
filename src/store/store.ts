import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import playListReducer from "../store/playlistSlice";
import favouriteReducer from "../store/favouriteSlice";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

// export const store = configureStore({
//   reducer: {
//     playlists: playListReducer,
//     favourites: favouriteReducer,
//   },
// });

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  playlists: playListReducer,
  favourites: favouriteReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
