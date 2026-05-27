import MenuBtn from "../../components/menuBtn";
import DashboardBalance from "./dashboardBalance";
import DashboardAccounts from "./dashboardAccounts";

const Dashboard = () => {
  return (
    <section className="w-full h-full p-4 flex flex-col gap-5">
      {/* header */}
      <div className="w-full flex justify-between">
        <h2 className="font-bold text-[#000000] text-[20px]">Overview</h2>

        <MenuBtn />
      </div>

      <DashboardBalance />

      <h3 className="text-[20px] font-semibold">Your Accounts</h3>

      <DashboardAccounts />
    </section>
  );
};

export default Dashboard;
