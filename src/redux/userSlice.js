import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  // _id: "",
  login: "",
  avatarURL: "",
  token: null,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAdmin: {
      reducer(state, action) {
        console.log("action.payload.value", action.payload.value);
        state = {
          ...state,
          ...action.payload.value.admin,
          token: action.payload.value.accessToken,
          isLoggedIn: true,
          adminRole: true,
          // _id: action.payload.value.accessToken.admin._id,
        };
        return state;
      },
      prepare(value) {
        return {
          payload: { value },
        };
      },
    },
    setUser: {
      reducer(state, action) {
        state = { ...state, ...action.payload.value, isLoggedIn: true };
        return state;
      },
      prepare(value) {
        return {
          payload: { value },
        };
      },
    },
    resetUser: {
      reducer(state) {
        state = initialState;
        return state;
      },
    },
  },
});

export const { setUser, resetUser, setAdmin } = userSlice.actions;

export const userReducer = userSlice.reducer;
