import { ApplicationAction } from "./actions";
import { ApplicationState } from "./state";


export const cartReducers = (state: ApplicationState, action: ApplicationAction): ApplicationState => {
    switch(action.type){

        case "ADD_PRODUCT_TO_CART":
            state.cartProducts.push(action.payload as TProduct)
            return {...state}

        case "REMOVE_PRODUCT_FROM_CART":
            const removeIndex = state.products.indexOf(action.payload as TProduct);
            state.cartProducts.slice(removeIndex, 1)
            return {...state}

        default:
            return {...state}
    }
}