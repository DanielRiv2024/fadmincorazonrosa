import MenuLeft from "@/src/components/navigation/MenuLeft"
import TableDeliverys from "@/src/components/dashboard/delivery/TableDeliverys"
import ReportDeliverys from "@/src/components/dashboard/delivery/ReportDeliverys"
import HeaderDeliverys from "@/src/components/dashboard/delivery/HeaderDeliverys"
export default function DeliverysPage(){
    return(
        <div className="flex flex-row justify-between items-start">
        <MenuLeft/>
        <div className="flex flex-col justify-end items-center flex-grow m-5">
         <HeaderDeliverys/>
          <ReportDeliverys/>
        <TableDeliverys/>
        </div>
      </div>
    )
}