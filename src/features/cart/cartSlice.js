import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],

  //   cart: [
  //     {
  //       pizzaId: 12,
  //       name: "Mediterrean",
  //       quantity: 2,
  //       unitPrice: 16,
  //       totalPrice: 32,
  //     },
  //   ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export function getCart(state) {
  return state.cart.cart;
}

export function getCartTotalQuantity(state) {
  return state.cart.cart.reduce((tot, item) => tot + item.quantity, 0);
}

export function getCartTotalPrice(state) {
  return state.cart.cart.reduce((tot, item) => tot + item.totalPrice, 0);
}

export function getCurrentQuantityById(id) {
  return (state) =>
    state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
}
