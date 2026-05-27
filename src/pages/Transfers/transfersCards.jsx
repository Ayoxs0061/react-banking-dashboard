import { RiSecurePaymentLine } from "react-icons/ri";
import { useData } from "../../context/useData";

const TransfersCards = () => {
  const { getRecentTransactions, accounts } = useData();
  const recentTransfers = getRecentTransactions(2);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="flex flex-wrap max-[1001px]:justify-center gap-4 w-full">
      <div className="max-w-78 w-full max-h-41.5 h-full bg-[#EAE7EA] rounded-xl p-4 flex flex-col gap-5">
        <h3 className="text-xs text-[#44474D] font-semibold">DAILY LIMITS</h3>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between w-full">
            <p className="text-sm text-[#1B1B1D]">Internal</p>

            <p className="text-sm text-[#1B1B1D]">₦50,000.00 left</p>
          </div>

          <div className="bg-[#497CFF] w-[80%] h-2 rounded-4xl" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between w-full">
            <p className="text-sm text-[#1B1B1D]">External</p>

            <p className="text-sm text-[#1B1B1D]">₦10,000.00 left</p>
          </div>

          <div className="bg-[#497CFF] w-full h-2 rounded-4xl" />
        </div>
      </div>

      <div className="max-w-78 w-full max-h-31 h-full bg-[#D5E0F8] rounded-xl p-4 flex gap-2">
        <RiSecurePaymentLine size={24} className="w-[10%]" />

        <div className="flex flex-col gap-1.5 w-full">
          <h3 className="text-[#111C2D] text-xs font-semibold">
            Secure Transfer
          </h3>

          <p className="text-xs text-[#586377] leading-5">
            Your transaction is protected by bank-grade 256-bit encryption and
            multi-factor authentication.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 max-w-78 w-full">
        <h3 className="text-[#44474D] text-xs font-semibold">
          Recent Transfers
        </h3>

        {recentTransfers.map((txn) => (
          <div
            key={txn.id}
            className="flex gap-2 items-center bg-white p-3 rounded-xl"
          >
            <div className="bg-[#EFEDEF] p-3 w-fit rounded-full text-xs font-semibold">
              {getInitials(txn.merchant)}
            </div>

            <div className="flex flex-col flex-1">
              <p className="text-[#1B1B1D] text-sm">{txn.merchant}</p>
              <p className="text-xs text-[#75777E]">₦{txn.amount.toFixed(2)}</p>
            </div>
          </div>
        ))}

        {recentTransfers.length === 0 && (
          <p className="text-xs text-[#75777E] text-center py-2">
            No recent transfers
          </p>
        )}
      </div>
    </div>
  );
};

export default TransfersCards;
