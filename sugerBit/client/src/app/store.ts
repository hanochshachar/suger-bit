import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import addCalenderSlice from '../features/slices/addCalenderSlice';
import calenderStartSlice from '../features/slices/calenderStartSlice';
import carboCountSlice from '../features/slices/carboCountSlice';
import carboTargetSlice from '../features/slices/carboTargetSlice';
import favoritesSlice from '../features/slices/favoritesSlice';
import getCalenderSlice from '../features/slices/getCalenderSlice';
import getFavoritesSlice from '../features/slices/getFavoritesSlice';
import privateValueSlice from '../features/slices/privateValueSlice';
import registerSlice from '../features/slices/registerSlice';
import sumAllCarboSlice from '../features/slices/sumAllCarboSlice';
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
    getCalender: getCalenderSlice,
    addCarboTarget: carboTargetSlice,
    carboCount: carboCountSlice,
    sumAllCarbo: sumAllCarboSlice
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
