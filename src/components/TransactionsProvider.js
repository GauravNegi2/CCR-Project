import React, { createContext, useContext, useState, useEffect } from 'react';

const TransactionsContext = createContext();

export function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  // Load transactions from localStorage when the page is loaded or refreshed (F5)
  useEffect(() => {
    const storedTransactions = localStorage.getItem('transactions');
    if (storedTransactions) {
      try {
        setTransactions(JSON.parse(storedTransactions));  // Parse and set the transactions in state
      } catch (error) {
        console.error('Error parsing transactions from localStorage:', error); // Handle potential parsing error
      }
    }
  }, []);  // Empty dependency array, so this runs only on mount (first render or refresh)

  // Save transactions to localStorage whenever the transactions state changes
  useEffect(() => {
    if (transactions.length > 0) {
      localStorage.setItem('transactions', JSON.stringify(transactions));  // Save updated transactions to localStorage
    }
  }, [transactions]);  // This runs whenever the transactions state changes

  // Add a transaction to state
  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  // Delete a transaction by id
  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions, addTransaction, deleteTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  if (!context) throw new Error('useTransactions must be used within a TransactionsProvider');
  return context;
}

export default TransactionsProvider;
