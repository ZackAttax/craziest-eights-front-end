import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "./userApi";

const initialState = {
  player: {
    current: {
      id: null,
      name: null,
      is_ai: false,
      game_id: null,
      hand: [],
    },
    status: "idle",
  },
};

export const getPlayerInfo = createAsyncThunk(
  "player/getPlayerInfo",
  async (id) => await userApi.player.show(id),
);

export const drawCard = createAsyncThunk(
  "player/drawCard",
  async (id) => await userApi.player.drawCard(id),
);

export const playCard = createAsyncThunk(
  "player/playCard",
  async (playerId, cardId) => await userApi.player.playCard(playerId, cardId),
);

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    // non async reducers
  },
  extraReducers: {
    // current player info
    [getPlayerInfo.pending]: (state) => {
      state.player = {
        ...state.player,
        status: "loading",
      };
    },
    [getPlayerInfo.fulfilled]: (state, action) => {
      state.player = {
        current: action.payload,
        status: "finished",
      };
    },
    [getPlayerInfo.rejected]: (state, action) => {
      state.player = {
        ...state.player,
        status: "failed",
        error: action.payload,
      };
    },

    //draw a card
    [drawCard.pending]: (state) => {
      state.player = {
        ...state.player,
        status: "loading",
      };
    },
    [drawCard.fulfilled]: (state, action) => {
      state.player = {
        current: action.payload,
        status: "finished",
      };
    },
    [drawCard.rejected]: (state, action) => {
      state.player = {
        ...state.player,
        status: "failed",
        error: action.payload,
      };
    },

    //play a card
    [playCard.pending]: (state) => {
      state.player = {
        ...state.player,
        status: "loading",
      };
    },
    [playCard.fulfilled]: (state, action) => {
      state.player = {
        current: action.payload,
        status: "finished",
      };
    },
    [playCard.rejected]: (state, action) => {
      state.player = {
        ...state.player,
        status: "failed",
        error: action.payload,
      };
    },
  },
});

export default playerSlice.reducer;
