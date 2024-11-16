import React from 'react';
import { useTransactions } from './TransactionsProvider';
import { Button, Card } from './UIComponents';

export default function Settings() {
  const { setTransactions } = useTransactions();

  const clearTransactions = () => {
    if (window.confirm("Are you sure you want to delete all transactions?")) {
      setTransactions([]);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Settings</h2>
      <Card className="flex flex-col items-start space-y-4 p-4 bg-gray-100 dark:bg-gray-700 shadow-md rounded-md">
        <p className="text-lg font-medium text-gray-900 dark:text-white">Clear All Transactions</p>
        <Button 
          onClick={clearTransactions} 
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md dark:bg-red-600 dark:hover:bg-red-700"
        >
          Clear Transactions
        </Button>
      </Card>
    </div>
  );
}

