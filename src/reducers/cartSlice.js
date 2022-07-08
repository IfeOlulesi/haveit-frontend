import { createSlice } from '@reduxjs/toolkit'

const priceToNum =(price) => {
  return Number(price.split('').filter((el) => parseInt(el)  ).join(''))
}

export const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    products: [],
    totalPrice: 0,
  },
  
  reducers: {
    addItem: (state, action) => {
      let {prodName, price, id, imgSrc } = action.payload
      let productExists = state.products.findIndex((el) => {
        return el.id === id
      }) > -1;
      
      if (productExists) {
        state.products = state.products.map((item) => item.id === id ? {...item, quantity: item.quantity + 1} : item)
      } 
      else {
        let model = {
          id, price,
          name: prodName,
          quantity: 1,
          imgSrc
        }
        state.products.push(model);
      }
    },
    increaseQuantity: (state, action) => {
      let subjectArray = state.products.filter(product => product.id === action.payload )
      if (subjectArray.length > 0) {
        subjectArray[0].quantity += 1
      }
    },
    decreaseQuantity: (state, action) => {
      let subjectArray = state.products.filter(product => product.id === action.payload )
      if (subjectArray.length > 0) {
        if (subjectArray[0].quantity > 1) {
          subjectArray[0].quantity -= 1
        }
        else if (subjectArray[0].quantity > 0) {
          let productIndex = state.products.findIndex(product => product.id === action.payload);
          if (productIndex > -1) {
            // state.products.pop(productIndex);
            let productId = state.products[productIndex].id;
            let oldProducts = state.products;
            let newProducts = oldProducts.filter((el) => el.id !== productId);
            state.products = [...newProducts]
  
          }
        }
      }
    },
    removeItem: (state, action) => { //still not working
      let productIndex = state.products.findIndex(product => product.id === action.payload);
      let productId = state.products[productIndex].id;
      
      if (productIndex > -1) {
        let oldProducts = state.products;
        let newProducts = oldProducts.filter((el) => el.id !== productId);
        state.products = [...newProducts]
      }
    },
    clearCart: (state, action) => {
      state.products = [];
    },
    updateTotalPrice: (state, action) => {
      state.totalPrice = state.products.reduce((acc, curr) => acc + (priceToNum(curr.price) * curr.quantity), 0);
    }
  }
})

// Action creators are generated for each case reducer function
export const { addItem, increaseQuantity, decreaseQuantity, removeItem, clearCart, updateTotalPrice} = cartSlice.actions

export default cartSlice.reducer