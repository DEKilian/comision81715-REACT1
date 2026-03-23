import { useCart } from "../custom-hooks/useCart"
import CartList from "./CartList"

function CartContainer () {
    const { cart } = useCart()

    return (
        <CartList cart={cart} />
    )
}

export default CartContainer