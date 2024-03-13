import BoxProduct from "./BoxProduct";
import React, { useState } from "react";
import { BiCartAdd } from "react-icons/bi";
export default function CatProducts() {
  const catalogoProductos = [
    {
      id: 1,
      name: "Ramo de Rosas Clásico",
      description:
        "Un ramo elegante de 12 rosas rojas, perfecto para expresar amor y aprecio.",
      price: 29.99,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com.mx%2Fpin%2F215539532152140010%2F&psig=AOvVaw24aS5rBXkspBlfooH-0kRX&ust=1709399196907000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCJCG1K_G04QDFQAAAAAdAAAAABAJ",
    },
    {
      id: 2,
      name: "Arreglo de Rosas Premium",
      description:
        "Una selección premium de 24 rosas rojas y blancas, dispuestas artísticamente para una impresión memorable.",
      price: 49.99,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.laflorera.cl%2Fproducto%2Framo-de-6rosas-rosadas-yeucalipto%2F&psig=AOvVaw2Y0-myFmNEbWbcMvg28FTo&ust=1709605016674000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCICl04zF2YQDFQAAAAAdAAAAABAE",
    },
    {
      id: 3,
      name: "Bouquet de Rosas Mixtas",
      description:
        "Un hermoso bouquet de rosas en una variedad de colores, ideal para cualquier ocasión.",
      price: 34.99,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com.mx%2Fpin%2F215539532152140010%2F&psig=AOvVaw24aS5rBXkspBlfooH-0kRX&ust=1709399196907000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCJCG1K_G04QDFQAAAAAdAAAAABAJ",
    },
    {
      id: 4,
      name: "Bouquet de Rosas Mixtas",
      description:
        "Un hermoso bouquet de rosas en una variedad de colores, ideal para cualquier ocasión.",
      price: 34.99,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com.mx%2Fpin%2F215539532152140010%2F&psig=AOvVaw24aS5rBXkspBlfooH-0kRX&ust=1709399196907000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCJCG1K_G04QDFQAAAAAdAAAAABAJ",
    },
  ];

  const [selectedProducts, setSelectedProducts] = useState({});

  const handleIncreaseClick = (id, event) => {
    event.preventDefault();
    setSelectedProducts((prevSelected) => ({
      ...prevSelected,
      [id]: (prevSelected[id] || 0) + 1,
    }));
  };

  const handleDecreaseClick = (id, event) => {
    event.preventDefault();
    setSelectedProducts((prevSelected) => {
      const newCount = (prevSelected[id] || 0) - 1;
      if (newCount > 0) {
        return { ...prevSelected, [id]: newCount };
      } else {
        const { [id]: _, ...rest } = prevSelected;
        return rest;
      }
    });
  };

  return (
    <div className="container mx-auto">
      <ul className="max-h-[462px] overflow-auto bg-transparent rounded-xl border border-2 border-cyan-700 p-3">
        {catalogoProductos.map((producto) => (
          <li
            key={producto.id}
            className="p-2 cursor-pointer flex justify-between items-center"
          >
            <BoxProduct product={producto} />
            <div>
              {selectedProducts[producto.id] && (
                <div className="flex items-center bg-white">
                  <button
                    onClick={(event) => handleDecreaseClick(producto.id, event)}
                    className="bg-red-500 text-white p-1 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2 font-bold">
                    {selectedProducts[producto.id]}
                  </span>
                  <button
                    onClick={(event) => handleIncreaseClick(producto.id, event)}
                    className="bg-green-500 text-white p-1 rounded"
                  >
                    +
                  </button>
                </div>
              )}
              {!selectedProducts[producto.id] && (
                <div className="bg-green-500 p-1 rounded-full">
                  <BiCartAdd
                    size={30}
                    color="white"
                    onClick={(event) => handleIncreaseClick(producto.id, event)}
                  />
                </div>
              )}
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
