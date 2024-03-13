import "../../../app/globals.css";
import BoxNavigation from "./BoxNavigation";
import { FaRegChartBar, FaBicycle, FaBoxes, FaShoppingCart, FaTruckMoving, FaCog } from 'react-icons/fa';
import { useState } from "react";
import { TbDoorExit,TbDoorEnter } from "react-icons/tb";

const menuOptions = [
  {
    id: 1,
    name: "Metricas",
    icon: <FaRegChartBar />,
    href:'/dashboard'
  },
  {
    id: 2,
    name: "Repartidores",
    icon: <FaBicycle />,
    href:'/dashboard/deliverys'
  },
  {
    id: 3,
    name: "Inventarios",
    icon: <FaBoxes />,
    href:'/dashboard'
  },
  {
    id: 4,
    name: "Pedidos",
    icon: <FaShoppingCart />,
    href:'/dashboard/orders'
  },
  {
    id: 5,
    name: "Translado",
    icon: <FaTruckMoving />,
    href:'/dashboard'
  },
  {
    id: 6,
    name: "Ajustes",
    icon: <FaCog />,
    href:'/dashboard'
  },
];

export default function MenuLeft() {
    const [isOpen, setIsOpen]= useState(false)
    const [width, setWidth] = useState(20);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setWidth(!isOpen ? 170 : 20);
      };
    
  return (
    <div className={`bg-slate-100 border-r border-r-2 border-cyan-700 w-[${width}px] h-[100vh] transition-all`}>
      <div className="flex justify-start m-3">
        {isOpen ? (
          <TbDoorEnter size={25} color="#FFA500" onClick={toggleMenu}/>
        ) : (
          <TbDoorExit size={25} color="#4ADE80" onClick={toggleMenu} />
        )}
      </div>

      <BoxNavigation menuOptions={menuOptions} showText={isOpen} />
    </div>
  );
}
