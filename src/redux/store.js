import { configureStore } from '@reduxjs/toolkit';

import gamesSlice from './gamesSlice';

export const store = configureStore({
  reducer: {
    games: gamesSlice
  },
})
