function CartItem ({ el }) {
return (
    <li className="list-row">
                    <div><img className="size-10 rounded-box" src={el.thumbnail}/></div>
                    <div>
                        <div>{el.name}</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Cantidad: {el.count} x ${el.price}</div>
                    </div>
                    <button className="btn btn-square btn-ghost btn-success">
                        ELIMINAR PRODUCTO DEL CARRITO 
                    </button>
                </li>
)
}

export default CartItem