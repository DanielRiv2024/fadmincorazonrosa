const deliverys = [
  {
    name: "John Doe",
    status: 1,
    vehicle: 1,
    id: 1,
    travels: 0,
    contact: "example@example.com",
    description: "Experienced delivery person with reliable vehicle.",
  },
  {
    name: "Jane Smith",
    status: 0,
    vehicle: 0,
    id: 2,
    travels: 0,
    contact: "example@example.com",
    description: "Experienced delivery person with reliable vehicle.",
  },
  {
    name: "Mike Johnson",
    status: 1,
    vehicle: 1,
    id: 3,
    travels: 0,
    contact: "example@example.com",
    description: "Experienced delivery person with reliable vehicle.",
  },
  {
    name: "Emily Davis",
    status: 0,
    vehicle: 0,
    id: 4,
    travels: 0,
    contact: "example@example.com",
    description: "Experienced delivery person with reliable vehicle.",
  },
  {
    name: "David Wilson",
    status: 1,
    vehicle: 1,
    id: 5,
    travels: 0,
    contact: "example@example.com",
    description: "Experienced delivery person with reliable vehicle.",
  },
];
import { FaMotorcycle, FaCarSide, FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

export default function TableDeliverys() {
  return (
    <div>
      <div className="bg-white">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-200 dark:text-gray-400 font-medium">
            <thead className="text-xs uppercase bg-cyan-700 dark:bg-gray- dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Estado
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">Nombre</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">Contacto</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">Descripcion</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Vehiculo
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">Viajes</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  {""}
                </th>
              </tr>
            </thead>
            <tbody>
              {deliverys.map((delivery) => (
                <tr
                  key={delivery.id}
                  className="bg-white border-b dark:bg-white dark:border-slate-300"
                >
                  <td className="px-6 py-4">
                    {" "}
                    {delivery.status === 1 ? (
                      <FaCheckCircle size={25} color="green" />
                    ) : (
                      <FaCircleXmark size={25} color="red" />
                    )}
                  </td>
                  <td className="px-6 py-4">{delivery.name}</td>
                  <td className="px-6 py-4">{delivery.contact}</td>
                  <td className="px-6 py-4">{delivery.description.slice(0,15)}</td>
                  
                  <td className="px-6 py-4">
                    {delivery.vehicle === 1 ? <FaMotorcycle /> : <FaCarSide />}
                  </td>
                  <td className="px-6 py-4">{delivery.travels}</td>
                  <td className="px-6 py-4">...</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
