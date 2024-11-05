import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: JSON.parse(localStorage.getItem('cartItems')) || [],
  cartId: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingProduct = state.products.find(item => item.productId === productId);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.products.push({ productId, quantity });
      }

      localStorage.setItem('cartItems', JSON.stringify(state.products));
    },

    setCartId: (state, action) => {
      state.cartId = action.payload;
    },

    clearCart: (state) => {
      state.products = [];
      state.cartId = null;
      localStorage.removeItem('cartItems');
    },
  },
});

export const { addItemToCart, setCartId, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

