import MenuLeft from "@/src/components/navigation/MenuLeft"
import FormCreateOrder from "@/src/components/dashboard/order/FormCreateOrder"
export default function CreateOrder(){
    return(
        <div className="flex flex-row justify-between items-center">
        <MenuLeft/>
        <div className="flex flex-col justify-center items-center flex-grow m-5">
        <FormCreateOrder/>
        </div>
      </div>
    )
}