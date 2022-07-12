export interface ApplicationState {
    products: TProduct[];
    cartProducts: TProduct[];
}

export const initialState = ():ApplicationState => ({
    products: [],
    cartProducts: [],
})