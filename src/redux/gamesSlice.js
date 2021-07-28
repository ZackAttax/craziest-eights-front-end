import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    games: [],
    game: {
      players: {
        id: "",
        name: "",
        playerCount: "pending",
        creator: ""
      },
      cards: {
        nextStock: "",
        topOfDiscard: "",
        playerCardCounts: "",
      },
      turn: {
        totalTurns: "",
        currentUserId: "",
      },
      state: ""
    },
    player: {
      id: "",
      hand: ""
    }
  }
  
const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        // non async logic goes here
    },
    extraReducers: {
        //READ
      getGames: (state, action) => {
        state.games = {
          ...state.games,
        };
      },
    }
})


export const { getGames } = gamesSlice.actions

export default gamesSlice.reducer