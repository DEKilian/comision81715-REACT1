import { useCart } from "../custom-hooks/useCart"
import { useNavigate } from "react-router"
import CartList from "./CartList"

function CartContainer () {
    const { cart } = useCart()
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center">
        <CartList cart={cart} />
        <button 
            className="btn btn-success w-1/2"
            onClick={() => navigate("/checkout")}
        >
            Ir a Checkout
        </button>
        </div>
    )
}

export default CartContainer