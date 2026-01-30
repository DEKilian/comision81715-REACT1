import React from "react";

export default function ItemListContainer() {

  const text = "Bienvenido a nuestra tienda. Deja que la brisa de las flores inunde tu hogar.";

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900">{text}</h2>
    </div>
  );
}