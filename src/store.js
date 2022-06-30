import { configureStore } from '@reduxjs/toolkit';

import appReducer from "./reducers/appSlice";
import cartReducer from "./reducers/cartSlice";

export default configureStore({
  reducer: {
    app: appReducer,
    cart: cartReducer,
  }
})