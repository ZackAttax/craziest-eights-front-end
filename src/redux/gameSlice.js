import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "./userApi";

const initialState = {
  games: [],
  game: {
    players: {
      id: "",
      name: "",
      playerCount: "0",
      creator: "",
    },
    cards: {
      nextStock: "",
      openCard: "",
      playerCardCounts: "",
    },
    turn: {
      totalTurns: "",
      currentUserId: "",
    },
    state: "",
  },
};

export const getGame = createAsyncThunk("games");

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    // non async logic goes here
  },
  extraReducers: {
    //READ
    [getGames.pending]: (state) => {
      state.games = {
        ...state.games,
        status: "loading",
      };
    },
    [getGames.fulfilled]: (state, action) => {
      state.games = {
        ...state.games,
        status: "finished",
        data: action.payload,
      };
    },
    [getGames.rejected]: (state, action) => {
      state.games = {
        ...state.games,
        status: "failed",
        error: action.payload,
      };
    },
  },
});

export default gameSlice.reducer;
