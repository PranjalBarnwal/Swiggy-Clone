import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {


    addItem: (state, action) => {
      let isPresent = false;
      const { id, name, price, imageId } = action.payload;
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
    removeItem:(state,action)=>{
      console.log(action.payload);
        for(let i=0;i<state.items.length;i++){
          if(state.items[i].id===action.payload.id){
            state.items[i].count--;
            if(state.items[i].count===0){
              state.items.splice(i,1);
              // state.items.splice(i, 0, "");
            }
          }
        }
    },

    clearCart: () => {
      state.items = [];
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem, clearCart } = cartSlice.actions;
