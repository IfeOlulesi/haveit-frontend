import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    products: [
      {
        id: 1,
        name: "2020 Apple iPad Air 10.9",
        price: "$579.00",
        amount: 1,
        // imgUrl: tempProductImage,
      },
      {
        id: 2,
        name: "APPLE AirPods Pro-White",
        price: "$375.00",
        amount: 3,
        // imgUrl: tempProductImage,
      },
      {
        id: 3,
        name: "Leather Sofa Two-seater Brown",
        price: "$200.00",
        amount: 1,
        // imgUrl: tempProductImage,
      },
      {
        id: 4,
        name: "Yamaha Trumpet Silver",
        price: "$342.00",
        amount: 1,
        // imgUrl: tempProductImage,
      },
    ],
  },
  
  reducers: {
    addItem: (state, action) => {
      state.products.push(action.payload);
    },
    increaseQuantity: (state, action) => {
      let subjectArray = state.products.filter(product => product.id === action.payload )
      if (subjectArray.length > 0) {
        subjectArray[0].amount += 1
      }
    },
    decreaseQuantity: (state, action) => {
      let subjectArray = state.products.filter(product => product.id === action.payload )
      if (subjectArray.length > 0) {
        if (subjectArray[0].amount > 1) {
          subjectArray[0].amount -= 1
        }
        else if (subjectArray[0].amount > 0) {
          let productIndex = state.products.findIndex(product => product.id === action.payload);
          if (productIndex > -1) {
            state.products.pop(productIndex);
          }
        }
      }
    },
    removeItem: (state, action) => {
      let productIndex = state.products.findIndex(product => product.id === action.payload);
      if (productIndex > -1) {
        state.products.pop(productIndex);
      }
    },
  }
})

// Action creators are generated for each case reducer function
export const { addItem, increaseQuantity, decreaseQuantity, removeItem} = cartSlice.actions

export default cartSlice.reducer