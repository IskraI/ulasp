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
        console.log("action.payload", action.payload);
        action.payload.admin &&(
        state = {
          ...state,
          ...action.payload.admin,
          token: action.payload.accessToken,
          isLoggedIn: true,
          adminRole: action.payload.admin.adminRole,
           // _id: action.payload.value.accessToken.admin._id,
        })
        
        action.payload.editor &&(
          state = {
            ...state,
            ...action.payload.editor,
            token: action.payload.accessToken,
            isLoggedIn: true,
               editorRole: action.payload.editor.editorRole,
            // _id: action.payload.value.accessToken.admin._id,
          })
        ;
        return state;
      },
    },
    setCurrent: {
      reducer(state, action) {
        // console.log("action.payload setCurrent", action.payload.admin);

        state = {
          ...state,
          adminRole: action.payload.admin ? action.payload.admin.adminRole : false,
          editorRole: action.payload.editor ? action.payload.editor.editorRole : false,
          avatarURL: action.payload.admin? action.payload.admin.avatarURL:action.payload.editor.avatarURL,
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
