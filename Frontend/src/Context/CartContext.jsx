import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null)

export const Cartprovider = ({ children }) => {
    const [CartItem, setCartItem] = useState([])

    const addToCart = (product) => { 
    setCartItem([...CartItem, product])
}


    return (
        <CartContext.Provider value={{ CartItem, setCartItem, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
