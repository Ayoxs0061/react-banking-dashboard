import { GrAmazon } from "react-icons/gr";
import { IoMdAirplane } from "react-icons/io";
import { PiHandDepositLight } from "react-icons/pi";
import { useData } from "../../context/useData";

const iconMap = {
  deposit: <PiHandDepositLight size={30} />,
  airplane: <IoMdAirplane size={30} />,
  amazon: <GrAmazon size={30} />,
};

const YesterdayActivity = () => {
  const { transactions } = useData();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const yesterdayTransactions = transactions.filter((txn) => {
    const txnDate = new Date(txn.timestamp);
    txnDate.setHours(0, 0, 0, 0);
    return txnDate.getTime() === yesterday.getTime();
  });

  if (yesterdayTransactions.length === 0) {
    return (
      <div className="flex flex-col shadow-lg rounded-xl justify-center items-center max-h-60.75 h-full w-full p-4 bg-white text-[#75777E]">
        <p>No transactions yesterday</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col shadow-lg rounded-xl justify-between max-h-96 h-full w-full p-4 bg-white overflow-y-auto">
      {yesterdayTransactions.map((txn, idx) => (
        <div key={txn.id}>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="bg-[#D5E0F8] w-fit p-2 rounded-xl">
                {iconMap[txn.icon] || <PiHandDepositLight size={30} />}
              </div>
              <div>
                <h4 className="font-semibold text-[16px] max-[375px]:text-sm text-[#1B1B1D]">
                  {txn.merchant}
                </h4>
                <p className="text-xs max-[375px]:text-[10px] text-[#75777E] font-medium">
                  {new Date(txn.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  • {txn.category}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <h4
                className={`font-bold text-[16px] max-[375px]:text-sm ${
                  txn.type === "income" ? "text-green-600" : "text-[#1B1B1D]"
                }`}
              >
                {txn.type === "income" ? "+" : "-"}₦{txn.amount.toFixed(2)}
              </h4>
              <p className="text-[10px] max-[375px]:text-[9px] text-[#497CFF] font-medium">
                {txn.status}
              </p>
            </div>
          </div>
          {idx < yesterdayTransactions.length - 1 && (
            <hr className="w-full border-[#75777e2b]" />
          )}
        </div>
      ))}
    </div>
  );
};

export default YesterdayActivity;
