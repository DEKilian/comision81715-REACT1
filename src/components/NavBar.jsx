import { useState } from "react";
import CartWidget from './Cartwidget.jsx'; 

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          <div className="text-xl font-bold">
            Flores del Mar
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="hover:text-gray-300">Ramos por docena</a>
            <a href="#" className="hover:text-gray-300">Ramos personalizados</a>
            <a href="#" className="hover:text-gray-300">Arboles y Plantas especiales</a>

            <CartWidget />
          </div>

        </div>
      </div>
    </nav>
  );
}