export interface CartItem {
    id: number,
    product: string,
    price: number,
    image: string,
}

export interface QuantityCartItem extends CartItem {
    quantity: number;
}

export interface Action {
    type : string;
    payload?: any;
}

export interface CartContextProps {
    cartItems: QuantityCartItem[],
    dispatch: (action : Action) => void
}
