import { AiOutlineStock } from "react-icons/ai";
import { PiPiggyBankFill, PiVaultBold } from "react-icons/pi";
import { useData } from "../../context/useData";

const iconMap = {
  vault: <PiVaultBold size={24} />,
  piggy: <PiPiggyBankFill size={24} />,
  stock: <AiOutlineStock size={24} />,
};

const colorMap = {
  checking: { bg: "#0D1C32", text: "text-white" },
  savings: { bg: "#497CFF", text: "text-white" },
  investment: { bg: "#000000", text: "text-white" },
};

const DashboardAccounts = () => {
  const { accounts } = useData();

  return (
    <div className="flex gap-5 items-start max-[1001px]:flex-wrap max-[1001px]:h-fit min-[1001px]:max-h-56.75 min-[1001px]:h-full">
      {accounts.map((account) => {
        const colors = colorMap[account.type] || colorMap.checking;
        const icon = iconMap[account.icon] || iconMap.vault;

        return (
          <div
            key={account.id}
            className={`max-w-full w-full max-[1001px]:h-fit min-[1001px]:h-full shadow-xl rounded-xl ${
              colors.bg === "#000000" ? "bg-black" : "bg-white"
            } p-4 flex flex-col justify-between`}
          >
            <div
              style={{ backgroundColor: colors.bg }}
              className={`${colors.text} p-2 rounded-xl w-fit`}
            >
              {icon}
            </div>

            <div className="">
              <span
                className={`text-xs ${
                  colors.bg === "#000000" ? "text-gray-400" : "text-[#75777E]"
                } font-semibold`}
              >
                {account.name}
              </span>

              <h3
                className={`text-2xl font-semibold ${
                  colors.bg === "#000000" ? "text-white" : "text-[#1B1B1D]"
                }`}
              >
                ₦{account.balance.toFixed(2)}
              </h3>
            </div>

            <div
              className={`border-t ${
                colors.bg === "#000000"
                  ? "border-gray-700 text-gray-400"
                  : "border-[#EAE7EA] text-[#75777E]"
              } text-sm pt-4`}
            >
              <p>{account.lastActivity}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardAccounts;
