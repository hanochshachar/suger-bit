import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import addCalenderSlice from '../slices/addCalenderSlice';
import calenderStartSlice from '../slices/calenderStartSlice';
import carboCountSlice from '../slices/carboCountSlice';
import carboTargetSlice from '../slices/carboTargetSlice';
import favoritesSlice from '../slices/favoritesSlice';
import getCalenderSlice from '../slices/getCalenderSlice';
import getFavoritesSlice from '../slices/getFavoritesSlice';
import privateValueSlice from '../slices/privateValueSlice';
import registerSlice from '../slices/registerSlice';
import sumAllCarboSlice from '../slices/sumAllCarboSlice';
import valuesSlice from '../slices/valuesSlice';


export const store = configureStore({
  reducer: {
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
