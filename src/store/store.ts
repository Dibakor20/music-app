import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import playListReducer from '../store/playlistSlice';

export const store = configureStore({
  reducer: {
   playlists: playListReducer
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
