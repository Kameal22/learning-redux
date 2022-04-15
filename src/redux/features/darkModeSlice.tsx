import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DarkModeInterface {
  value: boolean;
}

const initialState: DarkModeInterface = {
  value: false,
};

export const darkModeSlice = createSlice({
  name: "dark mode",
  initialState,
  reducers: {
    switchMode: (state) => {
      state.value = !state.value;
    },
  },
});

export const { switchMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
