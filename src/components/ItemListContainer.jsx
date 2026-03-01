import { useState, useEffect } from 'react'

const products = [
  {
    id: 1,
    nombre: "Rosa Roja",
    categoria: "Flor",
    precio: 15.99,
    stock: 25,
    descripcion: "Rosa roja fresca ideal para regalos románticos"
  },
  {
    id: 2,
    nombre: "Orquídea Blanca",
    categoria: "Flor",
    precio: 29.99,
    stock: 10,
    descripcion: "Orquídea elegante en maceta decorativa"
  },
  {
    id: 3,
    nombre: "Suculenta Mini",
    categoria: "Planta",
    precio: 8.50,
    stock: 40,
    descripcion: "Planta suculenta fácil de cuidar"
  },
  {
    id: 4,
    nombre: "Helecho Boston",
    categoria: "Planta",
    precio: 18.75,
    stock: 15,
    descripcion: "Planta colgante ideal para interiores"
  },
  {
    id: 5,
    nombre: "Girasol",
    categoria: "Flor",
    precio: 12.00,
    stock: 30,
    descripcion: "Girasol natural de tallo largo"
  }
]

function ItemListContainer() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = () =>
      new Promise((res) => {
        setTimeout(() => {
          res(products)
        }, 3000)
      })

    getItems().then(data => setItems(data))
  }, [])

  // Mensaje mientras carga
  if (items.length === 0) {
    return <h2>Cargando productos...</h2>
  }

  return (
    <div>
      {items.map(item => (
        <div key={item.id} className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt={item.nombre}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.nombre}</h2>
            <p>{item.descripcion}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Ver más</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemListContainer;