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
                 state = {
          ...state,
          ...action.payload[role],
          avatarURL: action.payload[role].avatarURL,
          isLoggedIn: true,
        };

        return state;
      }
    }},

    setUser: {
      reducer(state, action) {
        console.log("action.payload setUser", action.payload);
        state = { ...state, ...action.payload, isLoggedIn: true };
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
