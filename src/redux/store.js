import { configureStore } from "@reduxjs/toolkit";

import gameSlice from "./gamesSlice";
import playerSlice from "./playerSlice";

export const store = configureStore({
  reducers: {
    game: gameSlice,
    player: playerSlice,
  },
});
