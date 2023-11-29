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
            [`${role}Role`]: action.payload[role][`${role}Role`],
          };
        }
        return state;
      },
    },
    setCurrent: {
      reducer(state, action) {
        if (action.payload.admin || action.payload.editor) {
          const role = action.payload.admin ? "admin" : "editor";
          console.log('action.payload.admin', action.payload.admin)
          state = {
            ...state,
            ...action.payload[role],
            avatarURL: action.payload[role].avatarURL,
            isLoggedIn: true,
          };
        } else {
          console.log('action.payload.user', action.payload.user)
          state = {
            ...state,
            ...action.payload.user,
            avatarURL: action.payload.user.avatarURL,
            isLoggedIn: true,
            userRole: true,
          };

          
        }
        return state;
      },
    },

    setUser: {
      reducer(state, action) {
        console.log("action.payload setUser", action.payload);
        state = {
          ...state,
          ...action.payload.user,
          token: action.payload.accessToken,
          isLoggedIn: true,
          userRole: true,
        };
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

export const { setUser, resetUser, setAdmin, setCurrent } = userSlice.actions;

export const userReducer = userSlice.reducer;
