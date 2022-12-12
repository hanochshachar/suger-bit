import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import privateValueSlice from '../features/slices/privateValueSlice';
import registerSlice from '../features/slices/registerSlice';
import valuesSlice from '../features/slices/valuesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    register: registerSlice,
    allValues: valuesSlice,
    privateValues: privateValueSlice
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
