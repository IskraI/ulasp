import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  preloadSrc: [],
  src: [],
  indexTrack: 0,
  isLoaded: false,
  isPlaying: false,
  isPaused: false,
  isFirstPlay: true,
  isLastTrack: false,
  isLastPage: false,
  currentPage: 1,
  nextPage: null,
  pageSize: null,
  location: null,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,

  reducers: {
    setPreloadSrcPlayer: {
      reducer(state, action) {
        state = {
          ...state,
          preloadSrc: action.payload.preloadSrc,
          isLoaded: true,
          isPlaying: state.isPlaying ? true : false,

          currentPage: action.payload.currentPage,
          isLastTrack: false,
          isLastPage: false,
          pageSize: action.payload.pageSize,
          location: action.payload.location,
        };
        return state;
      },
    },
    setDefaultPreloadSrc: {
      reducer(state) {
        state = {
          ...state,
          preloadSrc: [],
          isLoaded: false,
          isPlaying: true,
        };
        return state;
      },
    },
    setSrcPlaying: {
      reducer(state, action) {
        console.log(action);
        state = {
          ...state,
          src: state.preloadSrc,
          // indexTrack: action.payload.indexTrack,
          preloadSrc: [],
          indexTrack: action?.payload
            ? action.payload.indexTrack
            : state.indexTrack,
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
          isPaused: state.isPaused ? false : state.isPaused,
          nextPage: state.isPaused ? state.nextPage : null,
          isLastTrack: state.isPaused ? state.isLastTrack : false,
          isLastPage: state.isPaused ? state.isLastTrack : false,
          // isFirstPlay: state.isPaused ? false : true,
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
          isFirstPlay: true,
        };
        return state;
      },
    },
    pause: {
      reducer(state) {
        // console.log("action.payload pause ", state.isPaused);
        state = {
          ...state,
          isPlaying: state.isPlaying ? false : true,
          isPaused: state.isPaused ? false : true,
          isLoaded: true,
          // isFirstPlay: false,
        };
        return state;
      },
    },
    updateIsFirstPlay: {
      reducer(state, action) {
        console.log("updateIsFirstPlay :>> ", action.payload);
        state = {
          ...state,

          isFirstPlay: action.payload,
        };

        return state;
      },
    },
    setLastTrack: {
      reducer(state, action) {
        // console.log("setLastTrack", action.payload);
        state = {
          ...state,
          // isLastPage, isLastTrack
          ...action.payload,
        };
        return state;
      },
    },
    setDefaultState: {
      reducer(state) {
        console.log(state);
        state = {
          ...initialState,
        };
        return state;
      },
    },
    setNextPage: {
      reducer(state, action) {
        state = {
          ...state,
          // preloadSrc: [],
          src: state.src.length === 0 ? state.preloadSrc : state.src,
          currentPage: action.payload.currentPage,
        };
        return state;
      },
    },
  },
});

export const {
  setPreloadSrcPlayer,
  setSrcPlaying,
  stopPlay,
  pause,
  setCurrentIndex,
  updateIsFirstPlay,
  setLastTrack,
  setDefaultState,
  setDefaultPreloadSrc,
  setNextPage,
  isFirstPlay,
} = playerSlice.actions;

export const playerReducer = playerSlice.reducer;
