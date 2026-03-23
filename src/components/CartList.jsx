import CartItem from "./CartItem"

function CartList ({ cart }) {
    return (<div className="md:ms-20 lg:mx-60">
            <ul className="list bg-base-100 rounded-box shadow-md">
  
            <li className="p-4 pb-2 opacity-60 tracking-wide uppercase">Tu Carrito:</li>
  
            {cart.map(el => <CartItem el={el} key={el.id} />)}
        </ul>
    </div>)
}

export default CartList