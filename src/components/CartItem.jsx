function CartItem ({ el }) {
return (
    <li className="list-row">
                    <div><img className="size-10 rounded-box" src={el.thumbnail}/></div>
                    <div>
                        <div>{el.title}</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Cantidad: {el.count} x ${el.price}</div>
                    </div>
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                    </button>
                    <button className="btn btn-square btn-ghost">
                        ELIMINAR PRODUCTO DEL CARRITO 
                    </button>
                </li>
)
}

export default CartItem