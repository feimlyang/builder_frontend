import {ADD_TOCART} from "../actionTypes";

const initialState = {
    cartProducts: [
        // {
        //     product: {}, //action.payload
        //     soldPrice: 0,
        //     quantity: 0
        // }
    ],
    totalPrice: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TOCART: {
            const newProduct = {
                product: action.payload,
                soldPrice: parseFloat(action.payload.listPrice),
                quantity: 1
            };
            // console.log("new product:" + newProduct);
            // console.log("new product. sku:" + newProduct.product.sku);
            // console.log("new product. product:" + newProduct.product.listPrice);
            // console.log("new product. soldPrice:" + newProduct.soldPrice);
            // console.log("length init: " + state.cartProducts.length)

            //calculate quantity and update cart
            let isEmptyCart = true;
            let isFound = false;
            if (state.cartProducts.length > 0) {
                isEmptyCart = false;
                console.log("length: " + state.cartProducts.length)
                for (let eachProduct of state.cartProducts) {
                    if (eachProduct.product.sku === newProduct.product.sku) {
                        eachProduct.quantity++;
                        isFound = true;
                    }
                }
            }
            if (isEmptyCart === true || (isEmptyCart === false && isFound === false)) {
                state.cartProducts = [...state.cartProducts, newProduct]
            }

            //calculate totalPrice
            let newTotalPrice = 0;
            state.cartProducts.forEach(
                (value) => {
                    return newTotalPrice += (value.soldPrice * value.quantity);
                }
            )
            state.totalPrice = newTotalPrice;
            console.log("total price: " + state.totalPrice);
            console.log("new state: " + state);

            return {...state};
        }
        default:
            return state;
    }
}
