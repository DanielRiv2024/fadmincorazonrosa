import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import "../../../../app/globals.css"

export default function ReportOrder() {
  return (
    <div className="flex justify-center gap-72">
      <div className="flex flex-col items-center">
        <GiReceiveMoney size={35} color="#4ade80" />
        <p className="font-bold text-xs text-cyan-700">Entregados: 0</p>
      </div>
      <div className="flex flex-col items-center">
        <MdOutlineLocalShipping size={35} color="#FFA500" />
        <p className="font-bold text-xs text-cyan-700">Repartidores: 0</p>
      </div>
      <div className="flex flex-col items-center">
        <IoLocationSharp size={35} color="#007BFF" />
        <p className="font-bold text-xs text-cyan-700">Zonas: 0</p>
      </div>
    </div>
  );
}
