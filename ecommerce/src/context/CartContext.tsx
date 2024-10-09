import { createContext, ReactNode, useReducer } from "react";
import { QuantityCartItem, CartContextProps, Action } from "../types/productType"

const defaultCartContextValue = {
    cartItems: [],
    dispatch: () => {}
}

export const CartContext = createContext<CartContextProps>(defaultCartContextValue)

const reducer = (state: QuantityCartItem[], action:  Action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            {
                const existingItem = state.find((cartItem) => cartItem.id === action.payload.id)

                if (existingItem) {
                    return state.map((cartItem) =>
                        cartItem.id === action.payload.item.id
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    )
                } else {
                    return [...state, { ...action.payload, quantity: 1 }]
                }
            }
        case 'REMOVE_FROM_CART':
            {
                const existingItem = state.find((item) => item.id === action.payload)

                if (existingItem && existingItem.quantity! > 1) {
                    return state.map((item) =>
                        item.id === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                } else {
                    return state.filter((item) => item.id !== action.payload)
                }
            }
        case 'ADD_FROM_CART':
            return state.map((cartItem) =>
                cartItem.id === action.payload
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem)

        case 'CLEAR_CART_ITEM':
            return state.filter((item) => item.id !== action.payload)

        case 'CLEAR_ITEM':
            return []

        default:
            return state
    }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const initialState: QuantityCartItem[] = []

    const [cartItems, dispatch] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider value={{ cartItems, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}
