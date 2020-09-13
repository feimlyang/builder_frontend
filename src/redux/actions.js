import {ADD_TOCART} from "./actionTypes";

export const addToCart = item => ({
    type: ADD_TOCART,
    payload: item
});