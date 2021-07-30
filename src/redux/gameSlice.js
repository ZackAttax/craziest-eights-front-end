import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "./userApi";

const initialState = {
  pending: {
    games: [],
    status: "idle",
  },
  current: {
    players: [],
    cards: {
      nextStock: "",
      openCard: "",
      playerCardCounts: "",
    },
    turn: {
      totalTurns: "",
      currentPlayer: "",
    },
    state: "",
  },
};

export const getPendingGames = createAsyncThunk(
  "game/getPendingGames",
  async () => await userApi.game.index(),
);

export const getCurrentGame = createAsyncThunk(
  "game/getCurrentGame",
  async (id) => await userApi.game.show(id),
);

export const addPlayer = createAsyncThunk(
  "game/addPlayer",
  async (gameId, player) => await userApi.game.newPlayer(gameId, player),
);

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    // non async logic goes here
  },
  extraReducers: {
    //READ
    [getPendingGames.pending]: (state) => {
      state.game = {
        ...state.game,
        pending: {
          status: "loading",
        },
      };
    },
    [getPendingGames.fulfilled]: (state, action) => {
      state.game = {
        ...state.game,
        pending: {
          status: "finished",
          games: action.payload,
        },
      };
    },
    [getPendingGames.rejected]: (state, action) => {
      state.game = {
        ...state.game,
        pending: {
          status: "failed",
          error: action.payload,
        },
      };
    },
  },
});

export default gameSlice.reducer;
