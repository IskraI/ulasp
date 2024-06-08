import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  // _id: "",

  login: "",
  avatarURL: "",
  token: null,
  isLoggedIn: false,
  adminRole: false,
  editorRole: false,
  userRole: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAdmin: {
      reducer(state, action) {
        // console.log("action.payload", action.payload);
        if (action.payload.admin || action.payload.editor) {
          const role = action.payload.admin ? "admin" : "editor";

          state = {
            ...state,
            ...action.payload[role],
            token: action.payload.accessToken,
            isLoggedIn: true,
            userRole: false,
            [`${role}Role`]: action.payload[role][`${role}Role`],
          };
        }

        return state;
      },
    },
    setAvatar: {
      reducer(state, action) {
        state = {
          ...state,
          avatarURL: action.payload.avatarURL,
        };

        return state;
      },
    },
    setUser: {
      reducer(state, action) {
        // console.log("action.payload setUser", action.payload);
        state = {
          ...state,
          ...action.payload.user,
          token: action.payload.accessToken,
          isLoggedIn: true,
          userRole: true,
          adminRole: false,
          editorRole: false,
        };
        return state;
      },
    },
    setUserisLoggedIn: {
      reducer(state) {
        // console.log("action.payload setUser", action.payload);
        state = {
          ...state,
          token: "",
          isLoggedIn: false,
          // userRole: true,
          // adminRole: false,
          // editorRole: false,
        };
        return state;
      },
    },
    setCurrent: {
      reducer(state, action) {
        if (action.payload.admin || action.payload.editor) {
          const role = action.payload.admin ? "admin" : "editor";
          // console.log("action.payload.admin", action.payload.admin);
          state = {
            ...state,
            ...action.payload[role],
            avatarURL: action.payload[role].avatarURL,
            isLoggedIn: true,
          };
        } else {
          // console.log("action.payload.user setCurrent", action.payload.user);
          state = {
            ...state,
            ...action.payload.user,
            // token: action.payload.accessToken,
            avatarURL: action.payload.user.avatarURL,
            isLoggedIn: true,
            // userRole: true,
            // adminRole: false,
            // editorRole: false,
          };
        }
        return state;
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

export const {
  setUser,
  resetUser,
  setAdmin,
  setCurrent,
  setAvatar,
  setUserisLoggedIn,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
