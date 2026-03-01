import ItemCount from "./ItemCount"

function ItemDetail ({ item }) {
    return (  
    <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure>
                <img
                    src={item.thumbnail}
                    alt={item.title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <h3>${item.price} </h3>
                <p>stock: {item.stock}</p>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                 <ItemCount />
                </div>
            </div>
        </div>
        )
}

export default ItemDetail