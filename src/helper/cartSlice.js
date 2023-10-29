import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      let isPresent = false;
      const { id, name, price, imageId } = action.payload.card.info;
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === id) {
          state.items[i].count++;
          isPresent = true;
        }
      }
      if (!isPresent)
        state.items.push({
          id: id,
          name: name,
          price: price,
          imageId: imageId,
          count: 1,
        });
    },
    clearCart: () => {
      state.items = [];
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem, clearCart } = cartSlice.actions;
