import { useCart } from "../custom-hooks/useCart";
import toast from "react-hot-toast";

function CartItem({ el }) {
  const { removeItem } = useCart();

  const handleRemove = () => {
    removeItem(el.id);
    toast.success(`Se eliminó ${el.name} del carrito`);
  };

  return (
    <li className="list-row flex items-center gap-6 p-4 bg-pink-50 rounded-md">
      <div>
        <img
          className="w-24 h-24 rounded-box object-cover"
          src={el.thumbnail}
          alt={el.name}
        />
      </div>

      <div className="flex-1">
        <div className="text-lg font-semibold">{el.name}</div>
        <div className="text-sm uppercase font-medium opacity-80 mt-1">
          Cantidad: {el.count} x ${el.price}
        </div>
      </div>

      <button
        className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg"
        onClick={handleRemove}
      >
        ELIMINAR
      </button>
    </li>
  );
}

export default CartItem;