import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider ({children}) {
    const [cart, setCart] = useState ([])

    const isInCart = product => cart.some (el => el.id === product.id)

    const addToCart = product => {
        if (!isInCart(product)) {
        setCart([...cart, product])
        } else {
            const copyCart = cart.map(el => {
                if (el.id === product.id) return {...el, count: el.count + product.count}
                return el
            })

            setCart(copyCart)
        }
    }

    const getCartQuantity = () => {
        const total = cart.reduce ((acc, currrent) => acc + currrent.count, 0)
        return total
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, getCartQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider