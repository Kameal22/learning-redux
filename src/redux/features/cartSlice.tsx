import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartInterface {
  value: { item: string; price: number }[];
}

const initialState: CartInterface = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{ item: string; price: number }>
    ) => {
      state.value.push(action.payload);
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
