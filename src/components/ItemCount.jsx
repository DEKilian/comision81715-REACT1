import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function ItemCount ({ item }) {
    const [count, setCount] = useState(1)
    const { addToCart } = useContext(CartContext)

const handleSumar = () => setCount(count + 1)
const handleRestar = () => setCount(count - 1)

const handleAddToCart = () => {
    addToCart({...item, count})
}

return (
    <div>
        <p>{count}</p>
        <button className="btn"onClick={handleSumar}>Sumar</button>
        <button 
        className="btn"
        onClick={handleRestar}
        disabled={count===1}
        >
            Restar
        </button>
        <button className="btn btn-outline" onClick={handleAddToCart}>agregar al carrito</button>
     </div>
    )
}

export default ItemCount