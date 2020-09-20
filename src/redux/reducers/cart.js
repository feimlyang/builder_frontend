import {ADD_TOCART, REMOVE_FROMCART, UPDATE_QUANTITY, CLEARCART} from "../actionTypes";

const initialState = {
    cartProducts: [
        // {
        //     product: {},
        //     soldPrice: 0,
        //     quantity: 0
        // }
    ],
    totalPrice: 0
};

export default function (state = initialState, action) {
    //goto REMOVE_FROMCART if quantity = 0
    if (action.type === UPDATE_QUANTITY && action.payload[1] <= 0) {
        action.type = REMOVE_FROMCART;
        action.payload = action.payload[0];
    }

    switch (action.type) {
        case CLEARCART: {
            state = {
                cartProducts: [],
                totalPrice: 0
            };
            return {...state};
        }

        case UPDATE_QUANTITY: {
            const [sku, quantity] = action.payload;
            let newTotalPrice = 0;
            state.cartProducts.forEach(
                (value) => {
                    if (value.product.sku === sku){
                        value.quantity = quantity;
                    }
                    newTotalPrice += (value.soldPrice * value.quantity)
                }
            )
            state.totalPrice = newTotalPrice;
            return {...state, cartProducts: state.cartProducts.map(item => ({...item}))};
        }

        case REMOVE_FROMCART: {
            const sku = action.payload;
            let newCartProducts = state.cartProducts;
            let newTotalPrice = 0;
            state.cartProducts.forEach(
                (value, index) => {
                    if (value.product.sku === sku) {
                        newCartProducts = state.cartProducts.slice(0, index).concat(state.cartProducts.slice(index + 1, state.cartProducts.length));
                    } else {
                        newTotalPrice += (value.soldPrice * value.quantity)
                    }
                }
            )
            state.cartProducts = newCartProducts;
            state.totalPrice = newTotalPrice;
            return {...state};
        }

        case ADD_TOCART: {
            const newProduct = {
                product: action.payload,
                soldPrice: Number.parseFloat(action.payload.listPrice).toFixed(2),
                quantity: 1
            };
            //calculate quantity and update cart
            let isEmptyCart = true;
            let isFound = false;
            if (state.cartProducts.length > 0) {
                isEmptyCart = false;
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
                    newTotalPrice += (value.soldPrice * value.quantity);
                }
            )
            state.totalPrice = newTotalPrice;

            return {...state};
        }
        default:
            return {...state};
    }
}
