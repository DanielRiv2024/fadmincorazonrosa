const orders = [
  {
    id: 1,
    ubicacion: "Calle Flores 123, Ciudad Jardín",
    aNombreDe: "Marta Ruiz",
    quienRecibe: "Laura Jiménez",
    telefonoEnvia: "+34 600 123 456",
    telefonoRecibe: "+34 600 789 012",
    descripcion:
      "Ramo variado con rosas, tulipanes y margaritas. Nota: 'Con cariño, para alegrar tu día'.",
    estado: 0,
    creadoPor: "Jesús",
    fechaDeEnvio: "2024-03-01",
    fechaDeEntrega: "2024-03-03",
  },
  {
    id: 2,
    ubicacion: "Avenida Petunia 456, Floravista",
    aNombreDe: "Carlos Pérez",
    quienRecibe: "Sofía González",
    telefonoEnvia: "+34 601 234 567",
    telefonoRecibe: "+34 601 890 123",
    descripcion:
      "Ramo de girasoles con un toque de eucalipto. Nota: 'Que el sol siempre ilumine tu camino'.",
    estado: 3,
    creadoPor: "María",
    fechaDeEnvio: "2024-03-05",
    fechaDeEntrega: "2024-03-07",
  },
  {
    id: 3,
    ubicacion: "Avenida Petunia 456, Floravista",
    aNombreDe: "Carlos Pérez",
    quienRecibe: "Sofía González",
    telefonoEnvia: "+34 601 234 567",
    telefonoRecibe: "+34 601 890 123",
    descripcion:
      "Ramo de girasoles con un toque de eucalipto. Nota: 'Que el sol siempre ilumine tu camino'.",
    estado: 1,
    creadoPor: "Andrea",
    fechaDeEnvio: "2024-03-10",
    fechaDeEntrega: "2024-03-12",
  },
  {
    id: 4,
    ubicacion: "Avenida Petunia 456, Floravista",
    aNombreDe: "Carlos Pérez",
    quienRecibe: "Sofía González",
    telefonoEnvia: "+34 601 234 567",
    telefonoRecibe: "+34 601 890 123",
    descripcion:
      "Ramo de girasoles con un toque de eucalipto. Nota: 'Que el sol siempre ilumine tu camino'.",
    estado: 2,
    creadoPor: "José",
    fechaDeEnvio: "2024-03-15",
    fechaDeEntrega: "2024-03-17",
  },
  {
    id: 5,
    ubicacion: "Avenida Petunia 456, Floravista",
    aNombreDe: "Carlos Pérez",
    quienRecibe: "Sofía González",
    telefonoEnvia: "+34 601 234 567",
    telefonoRecibe: "+34 601 890 123",
    descripcion:
      "Ramo de girasoles con un toque de eucalipto. Nota: 'Que el sol siempre ilumine tu camino'.",
    estado: 3,
    creadoPor: "Jesús",
    fechaDeEnvio: "2024-03-20",
    fechaDeEntrega: "2024-03-22",
  },
  {
    id: 6,
    ubicacion: "Avenida Petunia 456, Floravista",
    aNombreDe: "Carlos Pérez",
    quienRecibe: "Sofía González",
    telefonoEnvia: "+34 601 234 567",
    telefonoRecibe: "+34 601 890 123",
    descripcion:
      "Ramo de girasoles con un toque de eucalipto. Nota: 'Que el sol siempre ilumine tu camino'.",
    repartidor: "Daniel Rivera Miranda",
    estado: 4,
    creadoPor: "María",
    fechaDeEnvio: "2024-03-25",
    fechaDeEntrega: "2024-03-27",
  },
];

import OptionsTable from "./OptionesTable";
import "../../../../app/globals.css"
import DeliverysModal from "@/src/components/dashboard/delivery/deliverysModal";
import OrderStatus from "./OrderStatus";
export default function ListOrders() {
  return (
    <div className="bg-white">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-200 dark:text-gray-400 font-medium">
          <thead className="text-xs uppercase bg-cyan-700 dark:bg-gray- dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Estado
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Creado</div>
              </th>
              <th scope="col" className="px-6 py-3">
                Ubicacion
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Recibe</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center"># Recibe</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Entrega</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Descripcion</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Repartidor</div>
              </th>
              <th scope="col" className="px-6 py-3">
                {""}
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((entrega) => (
              <tr
                key={entrega.id}
                className="bg-white border-b dark:bg-white dark:border-slate-300"
              >
                <td className="px-6 py-4">
                  {" "}
                  <OrderStatus idOrder={entrega.estado} />
                </td>
                <td className="px-6 py-4">{entrega.creadoPor}</td>
                <td className="px-6 py-4">{entrega.ubicacion.slice(0, 14)}</td>
                <td className="px-6 py-4">{entrega.quienRecibe}</td>
                <td className="px-6 py-4">{entrega.telefonoRecibe}</td>
                <td className="px-6 py-4">{entrega.fechaDeEntrega}</td>
                <td className="px-6 py-4">
                  {entrega.descripcion.slice(0, 20)}
                </td>
                <td className="px-6 py-4">
                  {entrega.repartidor || <DeliverysModal />}
                </td>
                <td className="px-6 py-4">
                  <OptionsTable />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
