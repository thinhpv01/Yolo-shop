import { configureStore } from '@reduxjs/toolkit';
import productModalSlice from './product_modal/productModalSlice';
import cartItemsReducer from './shopping-cart/cartItemsSlide';

export const store = configureStore({
    reducer: {
        productModal: productModalSlice,
        cartItems: cartItemsReducer,
    },
});
