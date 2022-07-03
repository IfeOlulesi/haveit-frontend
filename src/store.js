import { configureStore } from '@reduxjs/toolkit';

import appReducer from "./reducers/appSlice";
import cartReducer from "./reducers/cartSlice";
import surveyReducer from './reducers/surveySlice'; 
import productReducer from './reducers/productSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    cart: cartReducer,
    survey: surveyReducer,
    products: productReducer,
  }
})