import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

const DEFAULT_STATE = {
  accounts: [
    {
      id: "apex-checking",
      name: "Apex Platinum Checking",
      type: "checking",
      balance: 42380.0,
      icon: "vault",
      lastActivity: "today",
      accountNumber: "9021",
    },
    {
      id: "apex-savings",
      name: "Apex High-Yield Savings",
      type: "savings",
      balance: 100470.42,
      icon: "piggy",
      lastActivity: "4.50% APY Active",
      accountNumber: "5847",
    },
    {
      id: "apex-wealth",
      name: "Apex Wealth Management",
      type: "investment",
      balance: 358000.0,
      icon: "stock",
      lastActivity: "Portfolio +12.4%",
      accountNumber: "3562",
    },
  ],
  transactions: [
    {
      id: "txn-001",
      fromAccount: "apex-checking",
      toAccount: "external",
      merchant: "Apple Store",
      category: "Electronics",
      amount: 1299.0,
      type: "expense",
      status: "PENDING",
      timestamp: new Date(2024, 9, 24, 10, 45),
      icon: "shopping",
    },
    {
      id: "txn-002",
      fromAccount: "apex-checking",
      toAccount: "external",
      merchant: "The Blue Door Bistro",
      category: "Dining",
      amount: 42.5,
      type: "expense",
      status: "COMPLETED",
      timestamp: new Date(2024, 9, 24, 8, 12),
      icon: "fork",
    },
    {
      id: "txn-003",
      fromAccount: "apex-savings",
      toAccount: "external",
      merchant: "Salary Deposit",
      category: "Income",
      amount: 8450.0,
      type: "income",
      status: "COMPLETED",
      timestamp: new Date(2024, 9, 23, 16, 30),
      icon: "deposit",
    },
    {
      id: "txn-004",
      fromAccount: "apex-checking",
      toAccount: "external",
      merchant: "Delta Airlines",
      category: "Travel",
      amount: 640.2,
      type: "expense",
      status: "COMPLETED",
      timestamp: new Date(2024, 9, 23, 13, 15),
      icon: "airplane",
    },
    {
      id: "txn-005",
      fromAccount: "apex-checking",
      toAccount: "external",
      merchant: "Amazon.com",
      category: "Shopping",
      amount: 112.99,
      type: "expense",
      status: "COMPLETED",
      timestamp: new Date(2024, 9, 23, 11, 2),
      icon: "amazon",
    },
  ],
};

export const DataProvider = ({ children }) => {
  const [accounts, setAccounts] = useState(DEFAULT_STATE.accounts);
  const [transactions, setTransactions] = useState(DEFAULT_STATE.transactions);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedAccounts = localStorage.getItem("bankingAppAccounts");
    const savedTransactions = localStorage.getItem("bankingAppTransactions");

    if (savedAccounts) {
      setAccounts(JSON.parse(savedAccounts));
    }
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("bankingAppAccounts", JSON.stringify(accounts));
  }, [accounts]);

  useEffect(() => {
    localStorage.setItem("bankingAppTransactions", JSON.stringify(transactions));
  }, [transactions]);

  const getTotalBalance = () => {
    return accounts.reduce((sum, acc) => sum + acc.balance, 0);
  };

  const getAccountById = (id) => {
    return accounts.find((acc) => acc.id === id);
  };

  const performTransfer = (fromAccountId, toAccountId, amount, note) => {
    const fromAccount = getAccountById(fromAccountId);
    const toAccount = getAccountById(toAccountId);

    if (!fromAccount) {
      throw new Error("From account not found");
    }

    if (fromAccount.balance < amount) {
      throw new Error("Insufficient funds");
    }

    const isInternalTransfer = toAccount && toAccountId !== "external";

    const updatedAccounts = accounts.map((acc) => {
      if (acc.id === fromAccountId) {
        return { ...acc, balance: acc.balance - amount };
      }
      if (isInternalTransfer && acc.id === toAccountId) {
        return { ...acc, balance: acc.balance + amount };
      }
      return acc;
    });

    setAccounts(updatedAccounts);

    const newTransaction = {
      id: `txn-${Date.now()}`,
      fromAccount: fromAccountId,
      toAccount: toAccountId,
      merchant: toAccount ? toAccount.name : "External Transfer",
      category: note || "Transfer",
      amount,
      type: toAccountId === "external" ? "transfer-out" : "transfer-internal",
      status: isInternalTransfer ? "COMPLETED" : "PENDING",
      timestamp: new Date(),
      note,
    };

    setTransactions((prev) => [newTransaction, ...prev]);

    return newTransaction;
  };

  const getTransactionsByAccount = (accountId) => {
    return transactions.filter(
      (txn) => txn.fromAccount === accountId || txn.toAccount === accountId
    );
  };

  const getRecentTransactions = (limit = 5) => {
    return transactions.slice(0, limit);
  };

  const addFunds = (accountId, amount) => {
    if (amount <= 10) {
      throw new Error("Amount must be greater than 10");
    }

    const updatedAccounts = accounts.map((acc) => {
      if (acc.id === accountId) {
        return { ...acc, balance: acc.balance + amount };
      }
      return acc;
    });

    setAccounts(updatedAccounts);

    const account = getAccountById(accountId);
    const newTransaction = {
      id: `txn-${Date.now()}`,
      fromAccount: "external",
      toAccount: accountId,
      merchant: "Add Funds",
      category: "Income",
      amount,
      type: "income",
      status: "COMPLETED",
      timestamp: new Date(),
      icon: "deposit",
    };

    setTransactions((prev) => [newTransaction, ...prev]);
    return newTransaction;
  };

  const resetData = () => {
    setAccounts(DEFAULT_STATE.accounts);
    setTransactions(DEFAULT_STATE.transactions);
    localStorage.removeItem("bankingAppAccounts");
    localStorage.removeItem("bankingAppTransactions");
  };

  const value = {
    accounts,
    transactions,
    isLoading,
    getTotalBalance,
    getAccountById,
    performTransfer,
    getTransactionsByAccount,
    getRecentTransactions,
    addFunds,
    resetData,
  };

  return (
    <DataContext.Provider value={value}>{children}</DataContext.Provider>
  );
};
