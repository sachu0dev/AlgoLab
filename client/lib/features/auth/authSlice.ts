import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
  user: null | string;
  isAdmin: boolean;
  loader: boolean;
}

const initialState: AuthState = {
  user: "lskjkl",
  isAdmin: false,
  loader: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.user = action.payload.user;
      state.isAdmin = action.payload.isAdmin;
      state.loader = false;
    },
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },
  },
});

export const {setAuth, setLoader} = authSlice.actions;
export default authSlice.reducer;
