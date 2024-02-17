import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  futureSrc: [],
  src: [],
  indexTrack: 0,
  isLoaded: false,
  isPlaying: false,
  isPaused: false,
  isFirstPlay: true,
  isLastTrack: false,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,

  reducers: {
    setSrcPlayer: {
      reducer(state, action) {
        state = {
          ...state,
          futureSrc: action.payload,
          isLoaded: true,
          isPlaying: state.isPlaying ? true : false,
        };
        return state;
      },
    },
    setDefaultPreloadSrc: {
      reducer(state) {
        state = {
          ...state,
          futureSrc: [],
          isLoaded: false,
          isPlaying: true,
        };
        return state;
      },
    },
    setSrcPlaying: {
      reducer(state, action) {
        state = {
          ...state,
          src: state.futureSrc,
          isLoaded: true,
          isPlaying: true,
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
          isLoaded: true,
          isFirstPlay: false,
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
    setLastTrack: {
      reducer(state) {
        state = {
          ...state,
          isLastTrack: true,
          src: [],
        };
        return state;
      },
    },
    setDefaultState: {
      reducer(state) {
        state = {
          ...initialState,
        };
        return state;
      },
    },
  },
});

export const {
  setSrcPlayer,
  setSrcPlaying,
  stopPlay,
  pause,
  setCurrentIndex,
  updateIsFirstPlay,
  setLastTrack,
  setDefaultState,
  setDefaultPreloadSrc,
} = playerSlice.actions;

export const playerReducer = playerSlice.reducer;
