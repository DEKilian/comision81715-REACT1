import { useNavigate } from "react-router"

function Item ({ item }) {
  const navigate = useNavigate()
    return (
      <div className="card !bg-pink-100 shadow-sm border border-primary">
          <figure>
            <img
              src={item.thumbnail}
              alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.description}</p>
            <p>precio: ${item.price}</p>
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