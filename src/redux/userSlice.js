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
        // console.log("action.payload", action.payload.admin);
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
    setCurrent: {
      reducer(state, action) {
        // console.log("action.payload setCurrent", action.payload.admin);

        state = {
          ...state,
          adminRole: action.payload.admin.adminRole,
          avatarURL: action.payload.admin.avatarURL,
          isLoggedIn: true,
        };
        
        return state;
      },
    },

    setUser: {
        reducer(state, action) {
          // console.log("action.payload setUser", action.payload.user);
          state = { ...state, ...action.payload.user, isLoggedIn: true };
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
