import React, { useState } from "react";
import "../../../../app/globals.css";
import { RiEBike2Fill } from "react-icons/ri";

const repartidores = [
  { id: 1, nombre: "Juan Pérez", vehiculo: 0 },
  { id: 2, nombre: "Ana Gómez", vehiculo: 1 }, 
  { id: 3, nombre: "Carlos Ruiz", vehiculo: 0 }, 
  { id: 4, nombre: "Lucía Hernández", vehiculo: 1 },
];

export default function DeliverysModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRepartidor, setSelectedRepartidor] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAgregar = () => {
    console.log("Repartidor seleccionado:", selectedRepartidor); 
    toggleModal();
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        type="button"
        className="text-white bg-lime-400 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-[10px] px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green-500 dark:hover:bg-green-400 dark:focus:ring-green-400 gap-2"
      >
        <RiEBike2Fill size={20} />
        Asignar
      </button>

      {isModalOpen && (
        <div
          id="popup-modal"
          tabIndex="-1"
          onClick={toggleModal}
          className="overflow-y-auto overflow-x-hidden fixed flex justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full bg-black/70"
        >
          <div
            className="relative p-4 w-full max-w-md max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center bg-white rounded-lg shadow dark:bg-white">
              <div className="p-6 flex flex-col justify-center">
                <p className="text-xl font-bold text-cyan-700 text-center">
                  Seleccionar Repartidor
                </p>
                <p className="text-xs mt-4 text-slate-400 text-center">
                  Recuerda avisar al repartidor seleccionado que tiene una nueva
                  orden asignada. Los repartidores que no aparecen en la lista
                  están inactivos en este momento. Es importante mantener una
                  comunicación clara para asegurar una entrega eficiente y
                  satisfactoria.
                </p>

                <select
                  value={selectedRepartidor}
                  onChange={(e) => setSelectedRepartidor(e.target.value)}
                  className="form-select mt-3 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-cyan-700"
                >
                  <option value="">Seleccione un repartidor</option>
                  {repartidores.map((repartidor) => (
                    <option key={repartidor.id} value={repartidor.id}>
                      {repartidor.nombre} -{" "}
                      {repartidor.vehiculo === 0 ? "Carro" : "Moto"}
                    </option>
                  ))}
                </select>
                <div className="flex justify-center gap-4 mt-6">
                  <button
                    onClick={handleAgregar}
                    className="bg-cyan-700 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Agregar
                  </button>
                  <button
                    onClick={toggleModal}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
