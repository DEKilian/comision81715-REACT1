import { useState, useEffect } from "react";
import CartWidget from './CartWidget.jsx'; 

export default function NavBar() {
  const [open, setOpen] = useState(false); // controla si el dropdown está abierto
  const [categories, setCategories] = useState([])
  
  useEffect(() => { 
  fetch('https://dummyjson.com/products/category-list')
    .then(res => res.json())
    .then(data => setCategories(data))
  }, [])
  return (
    <nav className="bg-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          <div className="text-xl font-bold">
            Flores del Mar
          </div>

          <div className="flex-1 flex justify-center relative">

            <button 
              onClick={() => setOpen(!open)}
              className="hover:text-gray-300 px-4 py-2"
            >
              Categorías
            </button>

            {open && (
              <ul className="absolute top-full mt-2 bg-pink-100 text-pink-900 rounded shadow w-40 left-1/2 transform -translate-x-1/2 z-50">
                {categories.map(cat => <li key={cat}><a>{cat}</a></li>)}
              </ul>
            )}

          </div>

          <div className="flex items-center">
            <CartWidget />
          </div>

        </div>
      </div>
    </nav>
  );
}