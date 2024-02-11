import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  src: [],
  indexTrack: 0,
  isLoaded: false,
  isFirstPlay: true,
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
    setCurrentIndex: {
      reducer(state, action) {
        console.log(action.payload);
        state = {
          ...state,
          indexTrack: action.payload,
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
          isFirstPlay: true,
        };
        return state;
      },
    },
    updateIsFirstPlay: {
      reducer(state, action) {
        state = {
          ...state,
          isFirstPlay: action.payload,
        };
        return state;
      },
    },
  },
});

export const { setSrcPlayer, stopPlay, setCurrentIndex, updateIsFirstPlay } =
  playerSlice.actions;

export const playerReducer = playerSlice.reducer;
