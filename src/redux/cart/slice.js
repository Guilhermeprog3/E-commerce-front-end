import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null, // Inicialmente nulo, será definido ao adicionar o primeiro item ou criar o carrinho
  products: JSON.parse(localStorage.getItem('cartItems')) || [],
  cartId: null, // Armazena o ID do carrinho quando ele for criado
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { userId, productId, quantity } = action.payload;
      state.userId = userId; // Define o userId ao adicionar o item
      const existingProduct = state.products.find(item => item.productId === productId);

      if (existingProduct) {
        // Se o produto já existe, aumenta a quantidade
        existingProduct.quantity += quantity;
      } else {
        // Se for um produto novo, adiciona ao array
        state.products.push({ productId, quantity });
      }

      // Atualiza o localStorage com o novo estado dos produtos
      localStorage.setItem('cartItems', JSON.stringify(state.products));
    },

    setCartId: (state, action) => {
      state.cartId = action.payload;
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

