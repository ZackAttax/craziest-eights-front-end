import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import gameReducer from "./gameSlice";
import playerReducer from "./playerSlice";

const rootReducer = combineReducers({
  game: gameReducer,
  player: playerReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
