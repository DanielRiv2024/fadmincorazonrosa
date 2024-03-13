import { useState } from "react";
import MapContainer from "./MapContainer";
import CatProducts from "../product/CatProducts";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";

export default function FormCreateOrder() {
  const [senderName, setSenderName] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [senderPhoneNumber, setSenderPhoneNumber] = useState("");
  const [recipientPhoneNumber, setRecipientPhoneNumber] = useState("");

  const handleSenderNameChange = (e) => {
    setSenderName(e.target.value);
  };

  const handleRecipientNameChange = (e) => {
    setRecipientName(e.target.value);
  };

  const handleSenderPhoneNumberChange = (e) => {
    setSenderPhoneNumber(e.target.value);
  };

  const handleRecipientPhoneNumberChange = (e) => {
    setRecipientPhoneNumber(e.target.value);
  };

  return (
    <div className="bg-white p-6 rounded-md">
      <p className="text-[30px] font-bold text-cyan-700 text-center ">
        Ingresa una nueva orden
      </p>
      <form>
        <div className="flex flex-row gap-4">
          <div>
          <div className="mb-4">
            <label
              htmlFor="senderName"
              className="block text-black font-bold mb-2"
            >
              Nombre de la persona que envía:
            </label>
            <input
              type="text"
              id="senderName"
              value={senderName}
              onChange={handleSenderNameChange}
              className="border border-2 border-cyan-700 rounded w-full py-2 px-3 text-cyan-700 leading-tight focus:outline-none focus:border-cyan-500 bg-white font-semibold"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="recipientName"
              className="block text-black font-bold mb-2"
            >
              Nombre de la persona que recibe:
            </label>
            <input
              type="text"
              id="recipientName"
              value={recipientName}
              onChange={handleRecipientNameChange}
              className="border border-2 border-cyan-700 rounded w-full py-2 px-3 text-cyan-700 leading-tight focus:outline-none focus:border-cyan-500 bg-white font-semibold"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="senderPhoneNumber"
              className="block text-black font-bold mb-2"
            >
              Número de teléfono del remitente:
            </label>
            <input
              type="tel"
              id="senderPhoneNumber"
              value={senderPhoneNumber}
              onChange={handleSenderPhoneNumberChange}
              className="border border-2 border-cyan-700 rounded w-full py-2 px-3 text-cyan-700 leading-tight focus:outline-none focus:border-cyan-500 bg-white font-semibold"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="recipientPhoneNumber"
              className="block text-black font-bold mb-2"
            >
              Número de teléfono del destinatario:
            </label>
            <input
              type="tel"
              id="recipientPhoneNumber"
              value={recipientPhoneNumber}
              onChange={handleRecipientPhoneNumberChange}
              className="border border-2 border-cyan-700 rounded w-full py-2 px-3 text-cyan-700 leading-tight focus:outline-none focus:border-cyan-500 bg-white font-semibold"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="recipientName"
              className="block text-black font-bold mb-2"
            >
              Descripcion
            </label>
            <input
              type="text"
              id="recipientName"
              value={recipientName}
              onChange={handleRecipientNameChange}
              className="border border-2 border-cyan-700 rounded w-full py-10 px-3 text-cyan-700 leading-tight focus:outline-none focus:border-cyan-500 bg-white font-semibold"
            />
          </div>
        </div>
        <div className="">
        <label
              htmlFor="recipientName"
              className="block text-black font-bold mb-[-12px]"
            >
              Elige una ubicacion
            </label>
          
          <MapContainer />
        </div>
        <div className="">
        <p  className="block text-black font-bold" >Catalogo</p>
          <CatProducts />
        </div>
        <div className="">
        <p  className="block text-black font-bold">Extras</p>
          <CatProducts />
        </div>
        </div>
       
        <div className="flex flex-row justify-center gap-10 mt-5">
          <button type="button" className="bg-green-500 hover:bg-green-400 px-8 py-2 text-white font-bold rounded-md items-center flex gap-2" ><FaShoppingCart /> Agregar</button>
          <button type="button" className="bg-red-500 px-8 py-2 hover:bg-red-400 text-white font-bold rounded-md items-center flex gap-2" ><MdOutlineDoNotDisturbOn size={20}/> Agregar</button>
        </div>
        
      </form>
    </div>
  );
}
