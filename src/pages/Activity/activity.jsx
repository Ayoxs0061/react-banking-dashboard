import { GoSearch } from "react-icons/go";
import TodayActivity from "./todayActivity";
import MenuBtn from "../../components/menuBtn";
import YesterdayActivity from "./yesterdayActivity";

const activity = () => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const todayDate = today.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const yesterdayDate = yesterday.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <section className="w-full h-full p-4 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="font-bold text-[#000000] text-[20px] max-[768px]:text-lg">
            Transaction History
          </h2>

          <p className="text-[#44474D] text-sm max-[768px]:text-xs max-[320px]:text-[10px]">
            Manage and track your global expenditures
          </p>
        </div>

        <MenuBtn />
      </div>

      <div className="flex gap-2 items-center shadow-xl max-w-370 w-full p-4 bg-[white] rounded-xl">
        <GoSearch />
        <input
          className="w-full outline-none h-full text-sm"
          placeholder="Search merchant, ID, or amount..."
        />
      </div>

      <h3 className="text-xs font-semibold text-[#C5C6CD]">
        TODAY, {todayDate.toUpperCase()}
      </h3>

      <TodayActivity />

      <h3 className="text-xs font-semibold text-[#C5C6CD]">
        YESTERDAY, {yesterdayDate.toUpperCase()}
      </h3>

      <YesterdayActivity />
    </section>
  );
};

export default activity;
