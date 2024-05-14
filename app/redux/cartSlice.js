import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products:[],
    quantity: 0,
    total: 0,
    toggle: false
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.toggle = !state.toggle; // toggle durumunu tersine çeviriyoruz
    },
  },
});

export const { toggleCart } = cartSlice.actions;

export default cartSlice.reducer;
