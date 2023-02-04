import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./carts/cartSlice"
import productReducer from "./menu/productsSlice"
import addressReducer from "./userinfo/addressSlice";

const rootReducer = combineReducers(
  {
    cart: cartReducer,
    products: productReducer,
    address: addressReducer
  }
);

export default rootReducer;