import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null,
  products: JSON.parse(localStorage.getItem('cart')) || [],
};

// Recupera o estado salvo no localStorage ou usa initialState como fallback
const savedCart = JSON.parse(localStorage.getItem('cart')) || initialState;

const cartSlice = createSlice({
  name: 'cart',
  initialState: savedCart,
  reducers: {
    addItemToCart: (state, action) => {
      const { userId, productId, quantity } = action.payload;
      const existingProduct = state.products.find(item => item.productId === productId);

      if (existingProduct && state.userId === userId) {
        existingProduct.quantity += quantity;
      } else {
        state.products.push({ productId, quantity });
        state.userId = userId;
      }

      localStorage.setItem('cart', JSON.stringify(state));
    },

    removeProduct: (state, action) => {
      const { productId } = action.payload;
      state.products = state.products.filter(item => item.productId !== productId);
      localStorage.setItem("cart", JSON.stringify(state));
    },

    incrementQuantity: (state, action) => {
      const { productId } = action.payload;
      const product = state.products.find(item => item.productId === productId);

      if (product) {
        product.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },

    decrementQuantity: (state, action) => {
      const { productId } = action.payload;
      const product = state.products.find(item => item.productId === productId);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },

    selectCartProducts: (state) => {
      return (state) => state.products;
    },

    clearCart: (state) => {
      state.userId = null;
      state.products = [];
      localStorage.removeItem('cart');
    },
  },
});

export const {
  addItemToCart,
  removeProduct,
  incrementQuantity,
  decrementQuantity,
  selectCartProducts,
  clearCart } = cartSlice.actions;

export default cartSlice.reducer;

