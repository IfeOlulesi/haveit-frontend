import { createSlice } from '@reduxjs/toolkit';

import appleWatch from "../components/App/images/thumbnails/apple-watch.png";
import sofaImg from "../components/App/images/thumbnails/sofa-thumbnail.png";

export const productSlice = createSlice({
  name: 'products',

  initialState: {
    productInViewId: 1,
    productInViewType: "furniture",
    furniture: [
      {id: 1, imgSrc: sofaImg, prodName: "2 seater sofa", sDesc: "Leather . Brown", price: "$359"},
      {id: 2, imgSrc: appleWatch, prodName: "Bedside Lamp", sDesc: "Neon Lamp . New", price: "$23"},
      {id: 3, imgSrc: sofaImg, prodName: "Office Chair", sDesc: "Steel . Black", price: "$93"},
      // {imgSrc: "", prodName: "Grape Watch", sDesc: "Series 6 . Purple", price: "$9,923"},
      // {imgSrc: "", prodName: "Watermelon Watch", sDesc: "Series 6 . Red", price: "$59"},
    ],
    wearables: [
      {id: 1, imgSrc: appleWatch, prodName: "Apple Watch", sDesc: "Series 6 . Red", price: "$359"},
      {id: 2, imgSrc: sofaImg, prodName: "Sunglasses", sDesc: "Sunglare . Yellow", price: "$2"},
      {id: 3, imgSrc: appleWatch, prodName: "Fancy Glasses", sDesc: "Designer . Green", price: "$33"},
      // {imgSrc: "", prodName: "Grape Watch", sDesc: "Series 6 . Purple", price: "$9,923"},
      // {imgSrc: "", prodName: "Watermelon Watch", sDesc: "Series 6 . Red", price: "$59"},
    ],
  },

  
  reducers: {
    updateProductInViewId: (state, payload) => {
      state.productInViewId = payload.payload
      },
    updateProductInViewType: (state, payload) => {
      state.productInViewType = payload.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateProductInViewId, updateProductInViewType } = productSlice.actions

export default productSlice.reducer