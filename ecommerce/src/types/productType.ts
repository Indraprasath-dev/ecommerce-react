export interface CartItem {
    id: number,
    product: string,
    price: number,
    image: string,
}

export interface QuantityCartItem extends CartItem {
    quantity: number;
}

export interface CartContextProps {
    cartItems: QuantityCartItem[],
    addToCart: (item: CartItem) => void,
    removeFromCart: (id: number) => void,
    totalAmount: number,
    count: number,
    clearCart: () => void
}
