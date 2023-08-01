import { IProduct } from '@/types/globalTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICart {
  products: IProduct[];
}

const initialState: ICart = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find((p) => p._id === action.payload._id);
      if (existing) {
        existing.quantity!++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    minusFromCart: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find((p) => p._id == action.payload._id);
      if (existing!.quantity! > 1) {
        existing!.quantity!--;
      } else {
        const filteredData = state.products.filter(
          (p) => p._id != action.payload._id
        );
        state.products = filteredData;
      }
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      const filteredData = state.products.filter(
        (p) => p._id != action.payload._id
      );
      state.products = filteredData;
    },
  },
});

export const { addToCart, minusFromCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
