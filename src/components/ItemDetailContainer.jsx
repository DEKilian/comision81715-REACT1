import { useState, useEffect } from "react"
import { useParams } from "react-router";

function ItemDetailContainer () {
    const [item, setItem] = useState ()
    const { id } = useParams()

    useEffect(() => {

    fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => setItem(data));
    
    }, [id])

    if (!item) {
        return(
            <div>cargando....</div>
        )
    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure>
                <img
                    src={item.thumbnail}
                    alt={item.title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer