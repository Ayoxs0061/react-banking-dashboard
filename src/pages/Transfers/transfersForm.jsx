import { useState } from "react";
import { useData } from "../../context/useData";

const TransfersForm = () => {
  const { accounts, performTransfer, getAccountById } = useData();
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const selectedFromAccount = getAccountById(fromAccount);
  const selectedToAccount = toAccount ? getAccountById(toAccount) : null;
  const availableBalance = selectedFromAccount?.balance || 0;

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d+\.?\d{0,2}$/.test(value)) {
      setAmount(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!fromAccount) {
      setError("Please select a from account");
      return;
    }

    if (!toAccount) {
      setError("Please select a to account");
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      setError("Please enter a valid amount");
      return;
    }

    if (fromAccount === toAccount) {
      setError("Cannot transfer to the same account");
      return;
    }

    const numAmount = parseFloat(amount);
    if (numAmount > availableBalance) {
      setError("Insufficient funds");
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      performTransfer(fromAccount, toAccount, numAmount, note);

      setSuccess(
        `Transfer of $${numAmount.toFixed(2)} completed successfully!`,
      );
      setFromAccount("");
      setToAccount("");
      setAmount("");
      setNote("");

      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(err.message || "Transfer failed");
    } finally {
      setIsLoading(false);
    }
  };

  const accountOptions = [
    { id: "", name: "Select source account" },
    ...accounts.map((acc) => ({
      id: acc.id,
      name: `${acc.name} (...${acc.accountNumber})`,
    })),
  ];

  const destinationOptions = [
    { id: "", name: "Select destination" },
    ...accounts
      .filter((acc) => acc.id !== fromAccount)
      .map((acc) => ({
        id: acc.id,
        name: `${acc.name} (...${acc.accountNumber})`,
      })),
    { id: "external", name: "External Account" },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-162.5 w-full max-[681px]:h-fit min-[681px]:max-h-148 min-[681px]:h-full flex flex-col gap-6 bg-white p-5 shadow-xs rounded-xl"
    >
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
          {success}
        </div>
      )}

      <fieldset className="flex flex-col gap-7 border-b border-[#C5C6CD] pb-6">
        <div className="flex max-[681px]:flex-wrap gap-4 items-start">
          <label className="input-labels flex-1">
            From Account
            <div className="input-styling">
              <select
                required
                value={fromAccount}
                onChange={(e) => setFromAccount(e.target.value)}
                className="outline-none w-full bg-transparent"
              >
                {accountOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.name}
                  </option>
                ))}
              </select>
            </div>
          </label>

          <label className="input-labels flex-1">
            To Account
            <div className="input-styling">
              <select
                required
                value={toAccount}
                onChange={(e) => setToAccount(e.target.value)}
                className="outline-none w-full bg-transparent"
              >
                {destinationOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.name}
                  </option>
                ))}
              </select>
            </div>
          </label>
        </div>

        <span className="text-[#76849F] text-[11px]">
          Available: ${availableBalance.toFixed(2)}
        </span>

        <p className="text-[#44474D] text-xs font-semibold self-center">
          Amount to Transfer
        </p>

        <div className="w-full flex gap-5 items-center justify-center">
          <h3 className="font-bold text-4xl text-[#44474D]">₦</h3>

          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            placeholder="0.00"
            className="font-bold text-4xl text-[#44474D] outline-none border-b border-[#C5C6CD] pb-2 max-w-48 text-right"
          />
        </div>
      </fieldset>

      <fieldset>
        <label className="input-labels">
          Transfer Note (Optional)
          <textarea
            placeholder="Reference or message for this transfer..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="h-23.5 resize-none input-styling"
          />
        </label>
      </fieldset>

      <div className="w-full flex flex-col gap-2">
        <button
          type="submit"
          disabled={isLoading}
          className="text-white bg-[#000000] py-3 rounded-xl w-full hover:bg-gray-800 disabled:bg-gray-400 transition"
        >
          {isLoading ? "Processing..." : "Confirm Transfer"}
        </button>

        <p className="text-[11px] text-[#75777E] self-center">
          Transfers between internal accounts are instant. External transfers
          may take 1-3 business days.
        </p>
      </div>
    </form>
  );
};

export default TransfersForm;
