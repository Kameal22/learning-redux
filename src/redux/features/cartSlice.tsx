import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

interface cartInterface {
  value: { name: string; price: number; id: string }[];
}

const initialState: cartInterface = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{ name: string; price: number; id: string }>
    ) => {
      action.payload.id = uuid();
      state.value.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<{ id: string }>) => {
      const stateAfterRemove = state.value.filter(
        (value) => value.id !== action.payload.id
      );
      state.value = stateAfterRemove;
    },
    editItem: (state, action: PayloadAction<{ name: string; id: string }>) => {
      const itemToEdit = state.value.findIndex(
        (index) => index.id === action.payload.id
      );

      state.value[itemToEdit].name = action.payload.name;
    },
  },
});

export const { addItem, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
