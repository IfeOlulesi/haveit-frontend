import { createSlice } from '@reduxjs/toolkit';

import appleWatch from "../components/App/images/thumbnails/apple-watch.png";
import sofaImg from "../components/App/images/thumbnails/sofa-thumbnail.png";
import alarmClock from "../components/App/images/thumbnails/alarm-clock-thumbnail.png";
import rolexImage from "../components/App/images/thumbnails/rolex.png";
import officeChair from "../components/App/images/thumbnails/office-chair.png";
import sunglasses from "../components/App/images/thumbnails/sunglasses.png";


export const productSlice = createSlice({
  name: 'products',

  initialState: {
    productInViewId: 1,
    productInViewType: "furniture",
    furniture: [
      {
        id: 1, 
        categoryId: 1, 
        imgSrc: sofaImg, 
        prodName: "2 seater sofa", 
        sDesc: "Leather . Comfy", 
        price: "$359", 
        ARLink: "https://mywebar.com/p/Project_0_o4rwm79kfm", 
        ARViewable: true,
        threeDModelName: "scene.glb",
        threeDViewable: true,
      },
      {
        id: 2, 
        categoryId: 1, 
        imgSrc: alarmClock, 
        prodName: "Alarm Clock", 
        sDesc: "Noisy😉 . Red", 
        price: "$23", 
        // ARLink: "https://mywebar.com/p/Project_1_6ifcm5ayuv", 
        ARLink: "https://mywebar.com/p/Project_2_kxonwbk47v", 
        ARViewable: true,
        threeDModelName: "scene1.glb",
        threeDViewable: true,
      },
      {
        id: 3, 
        categoryId: 1, 
        imgSrc: officeChair, 
        prodName: "Office Chair", 
        sDesc: "Strong . Ergo", 
        price: "$93", 
        ARLink: "https://mywebar.com/p/Project_3_xox4skynuf", 
        ARViewable: true,
        threeDModelName: "",
        threeDViewable: false,
      },
    ],
    wearables: [
      {
        id: 4, 
        categoryId: 2, 
        imgSrc: appleWatch, 
        prodName: "Apple Watch", 
        sDesc: "Series 6 . Red", 
        price: "$359", 
        ARLink: "", 
        ARViewable: false,
        threeDModelName: "",
        threeDViewable: false,
      },
      {
        id: 5, 
        categoryId: 2, 
        imgSrc: sunglasses, 
        prodName: "Sunglasses", 
        sDesc: "😎 . Black", 
        price: "$2", 
        ARLink: "", 
        ARViewable: false,
        threeDModelName: "",
        threeDViewable: false,
      },
      {
        id: 6, 
        categoryId: 2, 
        imgSrc: rolexImage, 
        prodName: "Rolex Watch", 
        sDesc: "Shiny . Silver", 
        price: "$33", 
        ARLink: "", 
        ARViewable: false,
        threeDModelName: "",
        threeDViewable: false,
      },
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
