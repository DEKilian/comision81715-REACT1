import { useCart } from "../custom-hooks/useCart";
import { useNavigate } from "react-router";
import CartList from "./CartList";
import toast from "react-hot-toast";

function CartContainer() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("El carrito está vacío. Agregá productos antes de continuar.");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="flex flex-col items-center">
      <CartList cart={cart} />
      <button 
        className="btn btn-success w-1/2"
        onClick={handleCheckout}
      >
        Ir a Checkout
      </button>
    </div>
  );
}

export default CartContainer;