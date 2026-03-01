import { useNavigate } from "react-router"

function Item ({ item }) {
  const navigate = useNavigate()
    return (
      <div className="card bg-base-100 shadow-sm border border-primary">
          <figure>
            <img
              src={item.thumbnail}
              alt={item.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.description}</p>
            <p>stock: {item.stock}</p>
            <p>precio: {item.price}</p>
            <div className="card-actions justify-end">
              <button 
                onClick={() => navigate(`/item/${item.id}`)}
              className="btn btn-primary">
                Ver más
              </button>
            </div>
          </div>
        </div>)
}

export default Item