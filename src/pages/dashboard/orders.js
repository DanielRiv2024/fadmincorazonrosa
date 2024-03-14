import "../../../app/globals.css";
import OrderHeader from "@/src/components/dashboard/order/OrdersHeader";
import ListOrders from "@/src/components/dashboard/order/ListOrders";
import ReportOrder from "@/src/components/dashboard/order/ReportOrder";
import MenuLeft from "@/src/components/navigation/MenuLeft";
export default function OrdersPage() {
  return (
    <div className="flex flex-row justify-between items-start">
      <MenuLeft />
      <div className="flex flex-col justify-center items-center flex-grow m-5">
        <OrderHeader />
        <ReportOrder />
        <ListOrders />
      </div>
    </div>
  );
}
