import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import "../../../../app/globals.css";
import { FaMotorcycle, FaCarSide, FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
export default function ReportDeliverys() {
  return (
    <div className="flex justify-center gap-72">
      <div className="flex flex-col items-center">
        <FaCheckCircle size={35} color="#4ade80" />
        <p className="font-bold text-xs text-cyan-700">Disponibles: 0</p>
      </div>
      <div className="flex flex-col items-center">
        <FaMotorcycle size={35} color="#FFA500" />
        <p className="font-bold text-xs text-cyan-700">Motocicletas: 0</p>
      </div>
      <div className="flex flex-col items-center">
        <FaCarSide size={35} color="#007BFF" />
        <p className="font-bold text-xs text-cyan-700">Automoviles: 0</p>
      </div>
    </div>
  );
}
