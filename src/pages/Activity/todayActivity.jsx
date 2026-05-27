import { BsForkKnife } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useData } from "../../context/useData";

const iconMap = {
  shopping: <MdOutlineShoppingCart size={30} />,
  fork: <BsForkKnife size={30} />,
};

const TodayActivity = () => {
  const { transactions } = useData();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const todayTransactions = transactions.filter((txn) => {
    const txnDate = new Date(txn.timestamp);
    txnDate.setHours(0, 0, 0, 0);
    return txnDate.getTime() === today.getTime();
  });

  if (todayTransactions.length === 0) {
    return (
      <div className="flex flex-col shadow-lg rounded-xl justify-center items-center max-h-40.5 h-full w-full p-4 bg-white text-[#75777E]">
        <p>No transactions today</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col shadow-lg rounded-xl justify-between max-h-96 h-full w-full p-4 bg-white overflow-y-auto">
      {todayTransactions.map((txn, idx) => (
        <div key={txn.id}>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="bg-[#D5E0F8] w-fit p-2 rounded-xl max-[375px]:text-sm">
                {iconMap[txn.icon] || <MdOutlineShoppingCart size={30} />}
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
                className={`font-bold text-[16px] ${
                  txn.type === "income" ? "text-green-600" : "text-[#1B1B1D]"
                }`}
              >
                {txn.type === "income" ? "+" : "-"}₦{txn.amount.toFixed(2)}
              </h4>
              <p
                className={`text-[10px] font-medium ${
                  txn.status === "COMPLETED"
                    ? "text-[#497CFF]"
                    : "text-orange-500"
                }`}
              >
                {txn.status}
              </p>
            </div>
          </div>
          {idx < todayTransactions.length - 1 && (
            <hr className="w-full border-[#75777e2b]" />
          )}
        </div>
      ))}
    </div>
  );
};

export default TodayActivity;
