import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import addCalenderSlice from '../features/slices/addCalenderSlice';
import calenderStartSlice from '../features/slices/calenderStartSlice';
import favoritesSlice from '../features/slices/favoritesSlice';
import getCalenderSlice from '../features/slices/getCalenderSlice';
import getFavoritesSlice from '../features/slices/getFavoritesSlice';
import privateValueSlice from '../features/slices/privateValueSlice';
import registerSlice from '../features/slices/registerSlice';
import valuesSlice from '../features/slices/valuesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    register: registerSlice,
    allValues: valuesSlice,
    privateValues: privateValueSlice, 
    addFavorites: favoritesSlice,
    getFavorites: getFavoritesSlice,
    startCalender: calenderStartSlice,
    addCalender: addCalenderSlice,
    getCalender: getCalenderSlice
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
