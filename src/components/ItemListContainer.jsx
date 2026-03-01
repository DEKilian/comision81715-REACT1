import { useState, useEffect } from 'react'
import ItemList from './ItemList'

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
    const getItems = () => new Promise((res,rej) => {
        setTimeout(() => {
          res(products)
        }, 3000)
      })

    getItems().then(data => setItems(data))
  }, [])

  return (
    <ItemList items={items} />
  );
}

export default ItemListContainer;