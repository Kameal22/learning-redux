import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegisterInterface {
  user: {
    name: string;
    password: string;
  }[];
}

const initialState: RegisterInterface = {
  user: [],
};

export const registerSlice = createSlice({
  name: "Register",
  initialState,
  reducers: {
    registerUser: (
      state,
      action: PayloadAction<{ name: string; password: string }>
    ) => {
      state.user.push(action.payload);
      window.localStorage.setItem("user", action.payload.name);
    },
    logoutUser: (state) => {
      state.user = [];
      window.localStorage.removeItem("user");
    },
  },
});

export const { registerUser, logoutUser } = registerSlice.actions;

export default registerSlice.reducer;
