import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    cartItems: [], // Tableau des produits dans le panier
  },
  mutations: {
    addToCart(state, product) {
      console.log("product", product);
      // Vérifie si le produit est déjà dans le panier
      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
      this.commit("saveCartToLocalStorage");
    },
    removeFromCart(state, productId) {
      // Supprime le produit du panier
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
      this.commit("saveCartToLocalStorage");
    },
    updateCartItemQuantity(state, payload) {
      // Met à jour la quantité d'un produit dans le panier
      const { product, quantity } = payload;
      const cartItem = state.cartItems.find((item) => item.id === product.id);
      if (cartItem) {
        cartItem.quantity = quantity;
      }
    },
    clearCart(state) {
      // Vide le panier
      state.cartItems = [];
    },
    saveCartToLocalStorage(state) {
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    loadCartFromLocalStorage(state) {
      const cart = localStorage.getItem("cart");
      if (cart) {
        state.cartItems = JSON.parse(cart);
      }
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit("addToCart", product);
    },
    removeFromCart({ commit }, product) {
      commit("removeFromCart", product);
    },
    updateCartItemQuantity({ commit }, payload) {
      commit("updateCartItemQuantity", payload);
    },
    clearCart({ commit }) {
      commit("clearCart");
    },
  },
  getters: {
    cartItems: (state) => state.cartItems,
    cartTotalItems: (state) => state.cartItems.length,
    cartTotalPrice: (state) => {
      return state.cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
  },
});
