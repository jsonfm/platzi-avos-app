export interface AddProductToCart {
    type: "ADD_PRODUCT_TO_CART";
    payload: TProduct;
};


export interface RemoveProductFromCart {
    type: "REMOVE_PRODUCT_FROM_CART";
    payload: TProduct;
}


export type ApplicationAction = 
    | AddProductToCart
    | RemoveProductFromCart