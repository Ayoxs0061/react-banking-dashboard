import { useData } from "../../context/useData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DashboardBalance = () => {
  const { getTotalBalance, addFunds, accounts } = useData();
  const navigate = useNavigate();
  const totalBalance = getTotalBalance();
  const [showMenu, setShowMenu] = useState(false);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleAddFunds = () => {
    setError("");
    const numAmount = parseFloat(amount);

    if (!amount || isNaN(numAmount)) {
      setError("Please enter a valid amount");
      return;
    }

    if (numAmount <= 10) {
      setError("Amount must be greater than 10");
      return;
    }

    try {
      addFunds(accounts[0].id, numAmount);
      setAmount("");
      setShowMenu(false);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex gap-5 items-center">
      <div className="max-w-375.25 rounded-xl w-full flex flex-col gap-5 shadow-xl p-7 bg-white">
        <span className="text-xs text-[#75777E] font-semibold">
          TOTAL AVAILABLE BALANCE
        </span>

        <h1 className="text-4xl font-bold">₦{totalBalance.toFixed(2)}</h1>

        <div className="flex gap-2 items-center">
          <div className="rounded-4xl text-[#047857] bg-[#D1FAE5] p-2 text-xs w-fit">
            <span>+2.4%</span>
          </div>
          <p className="text-xs text-[#75777E]">vs last month</p>
        </div>

        <div className="w-full flex gap-3 max-[481px]:flex-wrap relative">
          <button
            onClick={() => navigate("/transfers")}
            className="bg-[#000000] rounded-xl p-3 text-white w-full hover:bg-gray-800"
          >
            Send Money
          </button>

          <div className="relative w-full">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="bg-transparent border rounded-xl border-[#C5C6CD] p-3 text-black w-full hover:bg-gray-50"
            >
              Add Funds
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-2 w-72 bg-white border border-[#C5C6CD] rounded-lg shadow-lg p-4 z-50">
                <h3 className="text-sm font-semibold mb-3">Add Funds</h3>
                <input
                  type="number"
                  placeholder="Amount (min $10.01)"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setError("");
                  }}
                  className="w-full border border-[#C5C6CD] rounded-lg p-2 text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {error && <p className="text-red-500 text-xs mb-2">{error}</p>}
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      setAmount("");
                      setError("");
                    }}
                    className="flex-1 border border-[#C5C6CD] rounded-lg p-2 text-sm hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddFunds}
                    className="flex-1 bg-[#000000] text-white rounded-lg p-2 text-sm hover:bg-gray-800"
                  >
                    Add
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBalance;
