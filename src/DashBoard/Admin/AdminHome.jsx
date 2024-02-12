import AdminDailyTotalAmountChart from "./AdminDailyTotalAmountChart";
import AdminMonthChart from "./AdminMonthChart";
import Transaction from "./Transaction";

const AdminHome = () => {
  return (
    <div>
      <div className="lg:flex items-center mx-8 justify-between">
      <AdminMonthChart></AdminMonthChart>
      <AdminDailyTotalAmountChart></AdminDailyTotalAmountChart>
    </div>
    
    <Transaction></Transaction>
    </div>
  );
};

export default AdminHome;
