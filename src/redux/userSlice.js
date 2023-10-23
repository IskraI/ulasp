import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  // _id: "",

  login: "",
  avatarURL: "",
  token: null,
  isLoggedIn: false,
  adminRole: false,
  editorRole: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAdmin: {
      reducer(state, action) {
        console.log("action.payload", action.payload.admin);
        state = {
          ...state,
          ...action.payload.admin,
          token: action.payload.accessToken,
          isLoggedIn: true,
          adminRole: true,
          // _id: action.payload.value.accessToken.admin._id,
        };
        return state;
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
