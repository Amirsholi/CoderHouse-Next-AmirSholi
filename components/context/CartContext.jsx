"use client"

import {createContext, useContext, useState} from "react"

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item)=>{
        setCart([...cart,item])
    }
    const totalQty = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }
    const totalPrice = () => {
        return cart.reduce((acc, item) => acc + item.quantity * item.price, 0)
    }
    const emptyCart = () => {
        setCart([])
    }
    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }
    const removeItem = (id) => {
        setCart( cart.filter(i => i.id !== id) )
    }

    return(
        <CartContext.Provider
        value={{
            cart,
            addToCart,
            totalQty,
            totalPrice,
            emptyCart,
            isInCart,
            removeItem
        }}
        >
            {children}
        </CartContext.Provider>
    )
}