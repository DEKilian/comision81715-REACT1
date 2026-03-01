import { useState, useEffect } from "react";

function ItemCount () {
    const [count, setCount] = useState(1)

    useEffect(() => {
        console.log('se ejecuto el efecto')

        return () => {
            console.log('se desmonto')
        }
    }, [count])



const handleSumar = () => setCount(count + 1)
const handleRestar = () => setCount(count - 1)

return (
    <div>
        <p>{count}</p>
        <button className="btn"onClick={handleSumar}>Sumar</button>
        <button className="btn"onClick={handleRestar}>Restar</button>
    </div>
    )
}

export default ItemCount