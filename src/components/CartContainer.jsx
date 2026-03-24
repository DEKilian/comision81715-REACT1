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

  const handleClearCart = () => {
    if (cart.length === 0) {
      toast.error("No hay productos para eliminar del carrito");
    } else {
      clearCart();
      toast.success("Carrito eliminado correctamente");
    }
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
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md shadow"
          onClick={handleClearCart}
        >
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
}

export default CartContainer;