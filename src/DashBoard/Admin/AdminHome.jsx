import AdminDailyTotalAmountChart from "./AdminDailyTotalAmountChart";
import AdminMonthChart from "./AdminMonthChart";
import Transaction from "./Transaction";
import TransactionHeader from "./TransactionHeader";

const AdminHome = () => {
  return (
    <div>
      <div className="lg:flex items-center mx-8 justify-between">
        <AdminMonthChart></AdminMonthChart>
        <AdminDailyTotalAmountChart></AdminDailyTotalAmountChart>
      </div>

      <Transaction></Transaction>
      <TransactionHeader></TransactionHeader>
    </div>
  );
};

export default AdminHome;
