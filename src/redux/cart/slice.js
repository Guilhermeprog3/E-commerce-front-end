import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null,
  products: JSON.parse(localStorage.getItem('cartItems')) || [],
  cartId: null,
};

const savedCart = JSON.parse(localStorage.getItem('cart')) || initialState;

const cartSlice = createSlice({
  name: 'cart',
  initialState: savedCart,
  reducers: {
    addItemToCart: (state, action) => {
      const { cartId, userId, productId, quantity } = action.payload;
      const existingProduct = state.products.find(item => item.productId === productId);

      if (existingProduct && state.userId === userId) {
        existingProduct.quantity += quantity;
      } else if (state.cartId && state.userId !== userId) {
        state.userId = null;
        state.products = [];
        state.cartId = null;
        localStorage.removeItem('cartItems');
      }
      else {
        state.products.push({ productId, quantity });
        state.cartId = cartId;
        state.userId = userId;
      }

      localStorage.setItem('cartItems', JSON.stringify(state.products));
      localStorage.setItem('cart', JSON.stringify(state));
    },

    clearCart: (state) => {
      state.userId = null;
      state.products = [];
      state.cartId = null;
      localStorage.removeItem('cartItems');
    },
  },
});

export const { addItemToCart, setCartId, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

