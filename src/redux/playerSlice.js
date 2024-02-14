import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  src: [],
  indexTrack: 0,
  isLoaded: false,
  isPlaying: false,
  isPaused: false,
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
          isPlaying: false,
        };
        return state;
      },
    },
    setCurrentIndex: {
      reducer(state, action) {
        state = {
          ...state,
          indexTrack: action.payload,
          isPlaying: true,
          isPaused: false,
        };
        return state;
      },
    },
    stopPlay: {
      reducer(state, action) {
        state = {
          ...state,
          indexTrack: action.payload,
          isPlaying: false,
        };
        return state;
      },
    },
    pause: {
      reducer(state) {
        state = {
          ...state,
          isPlaying: false,
          isPaused: true,
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

export const { setSrcPlayer, stopPlay, pause, setCurrentIndex, updateIsFirstPlay } =
  playerSlice.actions;

export const playerReducer = playerSlice.reducer;
