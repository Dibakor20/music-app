import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import playListReducer from '../store/playlistSlice';
import favouriteReducer from '../store/favouriteSlice';

export const store = configureStore({
  reducer: {
    playlists: playListReducer,
    favourites: favouriteReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
