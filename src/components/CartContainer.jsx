import { useCart } from "../custom-hooks/useCart";
import { useNavigate } from "react-router";
import CartList from "./CartList";
import toast from "react-hot-toast";

function CartContainer() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("El carrito está vacío. Agregá productos antes de continuar.");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <CartList cart={cart} />

      <div className="flex gap-4">
        <button 
          className="btn btn-success"
          onClick={handleCheckout}
        >
          Ir a Checkout
        </button>

        <button
          className="btn btn-error"
          onClick={() => {
            clearCart();
            toast.success("Carrito eliminado correctamente");
          }}
        >
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
}

export default CartContainer;