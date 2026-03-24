import { useCart } from "../custom-hooks/useCart";

function CartItem({ el }) {
  const { removeItem } = useCart();

  return (
    <li className="list-row flex items-center gap-4 p-2">
      <div>
        <img className="size-10 rounded-box" src={el.thumbnail} alt={el.name} />
      </div>

      <div className="flex-1">
        <div>{el.name}</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          Cantidad: {el.count} x ${el.price}
        </div>
      </div>

      <button
        className="btn btn-square btn-ghost btn-error"
        onClick={() => removeItem(el.id)}
      >
        ELIMINAR
      </button>
    </li>
  );
}

export default CartItem;