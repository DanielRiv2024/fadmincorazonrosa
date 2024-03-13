import "../../../../app/globals.css"
import { IoIosAddCircle } from "react-icons/io";
import Link from "next/link";

export default function OrderHeader() {
  return (
    <div className="flex w-[90%] items-center justify-between mb-[20px]">
      <p className="text-[30px] font-bold text-cyan-700 ">Pedidos</p>
      <Link
        href="/dashboard/createOrder"
        className="text-white bg-lime-400 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-[13px] px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green-500 dark:hover:bg-green-400 dark:focus:ring-green-400 gap-2">
        <IoIosAddCircle size={25} />
        Agregar Pedido
      </Link>
    </div>
  );
}
