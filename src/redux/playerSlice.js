import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  src: [],
  prevIdTrack: null,
  isLoaded: false,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,

  reducers: {
    setSrcPlayer: {
      reducer(state, action) {
        state = {
          ...state,
          src: action.payload,
          isLoaded: true,
        };
        return state;
      },
    },
    stopPlay: {
      reducer(state, action) {
        console.log(action.payload);
        state = {
          ...state,
          src: action.payload,
          isLoaded: false,
        };
        return state;
      },
    },
  },
});

export const { setSrcPlayer, stopPlay } = playerSlice.actions;

export const playerReducer = playerSlice.reducer;
