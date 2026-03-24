import ItemCount from "./ItemCount"

function ItemDetail ({ item }) {
    return (  
    <div className="card lg:card-side !bg-pink-100 shadow-sm">
            <figure>
                <img
                    src={item.thumbnail}
                    alt={item.title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <h3>${item.price} </h3>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                 <ItemCount item={item} />
                </div>
            </div>
        </div>
        )
}

export default ItemDetail