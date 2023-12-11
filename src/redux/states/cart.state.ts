/* import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Selector } from "../../interfaces/cart.interface";

const EmptyCartState: Selector[] = [];

const persistLocalStorageCart = (cart: Selector[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const clearLocalStorageCart = () => {
  localStorage.removeItem("cart");
};

const cartSlice = createSlice({
  name: "cart",
  initialState: localStorage.getItem("cart")
    ? (JSON.parse(localStorage.getItem("cart") as string) as Selector[])
    : EmptyCartState,
  reducers: {
    addToCart: (state, action: PayloadAction<Selector>) => {
      state.push(action.payload); // adiciono un elemento a mi carrito
      persistLocalStorageCart(state);
    },
    removePhoto: (state, action: PayloadAction<Selector>) => {
      const photoFound = state.find(
        (photo) => photo.panelId === action.payload.panelId
      );
      if (photoFound) {
        state.splice(state.indexOf(photoFound), 1);
        persistLocalStorageCart(state);
      }
    },
    resetCart: (state) => {
      clearLocalStorageCart();
      return EmptyCartState;
    },
  },
});

export const { addToCart, removePhoto, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
 */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Selector } from "../../interfaces/selector.interface";

const persistLocalStorageCart = (cart: Selector | null) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const clearLocalStorageCart = () => {
  localStorage.removeItem("cart");
};

const initialState = localStorage.getItem("cart")
  ? (JSON.parse(localStorage.getItem("cart") as string) as Selector)
  : null;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Selector>) => {
      persistLocalStorageCart(action.payload);
      return action.payload;
    },
    removePhoto: (state, action: PayloadAction<Selector>) => {
      persistLocalStorageCart(action.payload);
      return action.payload;
    },
    resetCart: (state) => {
      clearLocalStorageCart();
      return null;
    },
  },
});

export const { addToCart, removePhoto, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
