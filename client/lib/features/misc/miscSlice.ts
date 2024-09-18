import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface MiscState {
  theme: "light" | "dark";
}

const initialState: MiscState = {
  theme: "light",
};

const miscSlice = createSlice({
  name: "misc",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<"light" | "dark">) {
      state.theme = action.payload;
    },
  },
});

export const {setTheme} = miscSlice.actions;
export default miscSlice.reducer;
