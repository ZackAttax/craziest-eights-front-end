import { configureStore } from "@reduxjs/toolkit";

import gameSlice from "./gameSlice";
import playerSlice from "./playerSlice";

export const store = configureStore({
  reducers: {
    game: gameSlice,
    player: playerSlice,
  },
});
