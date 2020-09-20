import {ADD_TOCART, REMOVE_FROMCART, UPDATE_QUANTITY, CLEARCART} from "./actionTypes";

export const addToCart = item => ({
    type: ADD_TOCART,
    payload: item
});

export const removeFromCart = sku => ({
    type: REMOVE_FROMCART,
    payload: sku
});

export const updateQuantity = (sku, quantity) => ({
    type: UPDATE_QUANTITY,
    payload: [sku, quantity]
});

export const clearCart = () => ({
    type: CLEARCART
});
