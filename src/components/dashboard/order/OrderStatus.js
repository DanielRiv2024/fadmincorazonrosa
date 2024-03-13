import React from 'react';
import { MdAssignment, MdLocalShipping, MdCheckCircle, MdCancel, MdMotorcycle } from 'react-icons/md';
import { FaLuggageCart } from "react-icons/fa";

const statusDelivery = [
  { id: 0, descripcion: "Creado", Icono: MdAssignment, color: '#FFA500' }, // Naranja
  { id: 1, descripcion: "Asignado", Icono: FaLuggageCart, color: '#007BFF' }, // Azul
  { id: 2, descripcion: " En camino", Icono: MdLocalShipping, color: '#FFC107' }, // Amarillo // Turquesa
  { id: 3, descripcion: "Entregado", Icono: MdCheckCircle, color: '#28A745' }, // Verde
  { id: 4, descripcion: "Cancelado", Icono: MdCancel, color: '#DC3545' }, // Rojo
];

export default function OrderStatus({ idOrder }) {
  const estado = statusDelivery.find(e => e.id === idOrder);

  return (
    <div>
      {estado ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <estado.Icono style={{ color: estado.color }} size={25} />
          <p style={{ color: estado.color }}>{estado.descripcion}</p>
        </div>
      ) : (
        <p>Estado desconocido</p>
      )}
    </div>
  );
}
