<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  userInfo: null,
};
export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },

    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    userSignOut: (state)=> {
      state.userInfo = null
    }
  },
});
export const {
  addToCart,
  deleteItem,
  resetCart,
  decrementQuantity,
  incrementQuantity,
  setUserInfo,
  userSignOut,
} = amazonSlice.actions;
export default amazonSlice.reducer;
=======
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  userInfo: null,
};
export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },

    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    userSignOut: (state)=> {
      state.userInfo = null
    }
  },
});
export const {
  addToCart,
  deleteItem,
  resetCart,
  decrementQuantity,
  incrementQuantity,
  setUserInfo,
  userSignOut,
} = amazonSlice.actions;
export default amazonSlice.reducer;
>>>>>>> 6d7858233edd166cd04ec5265f9d09fd6e302ba5
