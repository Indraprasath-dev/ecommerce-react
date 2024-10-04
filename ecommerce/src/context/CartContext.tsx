import { createContext, useState, ReactNode, useMemo } from "react";
import { CartItem, QuantityCartItem, CartContextProps } from "../types/productType"

export const CartContext = createContext<CartContextProps | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<QuantityCartItem[]>([])

    const addToCart = (item: CartItem) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((cartItem) => cartItem.id === item.id)

            if (existingItem) {
                return prevItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            } else {
                return [...prevItems, { ...item, quantity: 1 }]
            }
        })
    }

    const removeFromCart = (id: number) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === id)

            if (existingItem && existingItem.quantity! > 1) {
                return prevItems.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            } else {
                return prevItems.filter((item) => item.id !== id)
            }
        })
    }

    const addFromCart = (id: number) => {
        setCartItems((prevItems)=>{
            return prevItems.map((cartItem) =>
                cartItem.id === id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem)
        })
    }

    const clearCartItem = (id: number) => {
        setCartItems((prevItems)=>{
            return prevItems.filter((item)=>item.id !== id)
        })
    }

    const totalAmount = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    }, [cartItems])

    const count = useMemo(() => {
        return cartItems.reduce((total) => total + 1, 0)
    }, [cartItems])

    const clearCart = () => {
        setCartItems([])
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, addFromCart, clearCartItem, totalAmount, count, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}
