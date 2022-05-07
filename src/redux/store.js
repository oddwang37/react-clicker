import { configureStore } from '@reduxjs/toolkit';
import upgradeReducer from './features/upgradesSlice';

export const store = configureStore({
  reducer: { upgrades: upgradeReducer },
});
