import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "./userApi";

const initialState = {
  game: {
    pending: {
      games: [],
      status: "idle",
    },
    current: {
      game: {
        id: null,
        name: null,
        turn: null,
        state: null,
        turn_player_id: null,
        winner: null,
        open_card: {},
        players: [],
      },
      status: "idle",
    },
    client: {
      player_id: null,
      game_id: null,
    },
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

export const newGame = createAsyncThunk(
  "game/newGame",
  async (name, playerName) => await userApi.game.create(name, playerName),
);

export const joinGame = createAsyncThunk(
  "game/joinGame",
  async (gameId, playerName) => {
    let player = { name: playerName, is_ai: false };
    return await userApi.game.newPlayer(gameId, player);
  },
);

export const addAIPlayer = createAsyncThunk(
  "game/addAIPlayer",
  async (gameId, playerName) => {
    let player = { name: playerName, is_ai: true };
    return await userApi.game.newPlayer(gameId, player);
  },
);

export const startGame = createAsyncThunk(
  "game/startGame",
  async (gameId) => await userApi.game.start(gameId),
);

export const finishGame = createAsyncThunk(
  "game/finishGame",
  async (gameId) => await userApi.game.finish(gameId),
);

export const deleteGame = createAsyncThunk(
  "game/deleteGame",
  async (gameId) => await userApi.game.destroy(gameId),
);

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    // non async logic goes here
  },
  extraReducers: {
    // index pending games
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
          games: action.payload,
          status: "finished",
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

    // get state of current game
    [getCurrentGame.pending]: (state) => {
      state.game = {
        ...state.game,
        current: {
          ...state.game.current,
          status: "loading",
        },
      };
    },
    [getCurrentGame.fulfilled]: (state, action) => {
      state.game = {
        ...state.game,
        current: {
          game: action.payload,
          status: "finished",
        },
      };
    },
    [getCurrentGame.rejected]: (state, action) => {
      state.game = {
        ...state.game,
        current: {
          error: action.payload,
          status: "failed",
        },
      };
    },

    // new game
    [newGame.pending]: (state) => {
      state.game = {
        ...state.game,
        current: {
          ...state.game.current,
          status: "loading",
        },
      };
    },
    [newGame.fulfilled]: (state, action) => {
      state.game = {
        ...state.game,
        current: {
          game: action.payload,
          status: "finished",
        },
        client: {
          player_id: action.payload.players[0].id,
          game_id: action.payload.id,
        },
      };
    },
    [newGame.rejected]: (state, action) => {
      state.game = {
        ...state.game,
        current: {
          error: action.payload,
          status: "failed",
        },
      };
    },

    // join game
    [joinGame.pending]: (state) => {
      state.game = {
        ...state.game,
        current: {
          ...state.game.current,
          status: "loading",
        },
      };
    },
    [joinGame.fulfilled]: (state, action) => {
      state.game = {
        ...state.game,
        current: {
          game: action.payload,
          status: "finished",
        },
        client: {
          player_id: action.payload.players[0].id,
          game_id: action.payload.id,
        },
      };
    },
    [joinGame.rejected]: (state, action) => {
      state.game = {
        ...state.game,
        current: {
          error: action.payload,
          status: "failed",
        },
      };
    },

    // add AI player
    [addAIPlayer.pending]: (state) => {
      state.game = {
        ...state.game,
        current: {
          ...state.game.current,
          status: "loading",
        },
      };
    },
    [addAIPlayer.fulfilled]: (state, action) => {
      state.game = {
        ...state.game,
        current: {
          game: action.payload,
          status: "finished",
        },
      };
    },
    [addAIPlayer.rejected]: (state, action) => {
      state.game = {
        ...state.game,
        current: {
          ...state.game.current,
          error: action.payload,
          status: "failed",
        },
      };
    },

    // start game
    [startGame.pending]: (state) => {
      state.game = {
        ...state.game,
        current: {
          ...state.game.current,
          status: "loading",
        },
      };
    },
    [startGame.fulfilled]: (state, action) => {
      state.game = {
        ...state.game,
        current: {
          game: action.payload,
          status: "finished",
        },
      };
    },
    [startGame.rejected]: (state, action) => {
      state.game = {
        ...state.game,
        current: {
          ...state.game.current,
          error: action.payload,
          status: "failed",
        },
      };
    },

    // finish game
    [finishGame.pending]: (state) => {
      state.game = {
        ...state.game,
        current: {
          ...state.game.current,
          status: "loading",
        },
      };
    },
    [finishGame.fulfilled]: (state, action) => {
      state.game = {
        ...state.game,
        current: {
          game: action.payload,
          status: "finished",
        },
      };
    },
    [finishGame.rejected]: (state, action) => {
      state.game = {
        ...state.game,
        current: {
          ...state.game.current,
          error: action.payload,
          status: "failed",
        },
      };
    },

    // delete game
    [deleteGame.pending]: (state) => {
      state.game = {
        ...state.game,
        current: {
          ...state.game.current,
          status: "loading",
        },
      };
    },
    [deleteGame.fulfilled]: (state) => {
      state.game = {
        ...state.game,
        current: {
          ...initialState.current,
        },
        client: {
          ...initialState.client,
        },
      };
    },
    // if delete fails, game state is still cleared in client
    [deleteGame.rejected]: (state, action) => {
      state.game = {
        ...state.game,
        current: {
          ...initialState.current,
          error: action.payload,
        },
        client: {
          ...initialState.client,
        },
      };
    },
  },
});

export default gameSlice.reducer;
