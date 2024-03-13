import { IoAddCircle } from "react-icons/io5";
import '../../../../app/globals.css'

export default function ProductsHeader (){
    return(
        <div className="flex w-[80%] items-center justify-between">
            <p className="headerTitle">Productos en Inventario</p>
            <IoAddCircle size={45} color="#08FF08" />
        </div>
    )
}