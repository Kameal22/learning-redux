import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OptionsInterface {
  value: { item: string; price: number; id: string }[];
}

const initialState: OptionsInterface = {
  value: [],
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    fetchItems: (
      state,
      action: PayloadAction<{ item: string; price: number; id: string }>
    ) => {
      state.value.push(action.payload);
    },
  },
});

export const { fetchItems } = optionsSlice.actions;

export default optionsSlice.reducer;
