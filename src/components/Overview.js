import React from 'react';
import { useTransactions } from './TransactionsProvider';
import { Card } from './UIComponents';

export default function Overview() {
  const { transactions } = useTransactions();

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="bg-white dark:bg-gray-800 shadow-md dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Income</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">₹{totalIncome.toFixed(2)}</p>
      </Card>
      <Card className="bg-white dark:bg-gray-800 shadow-md dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Expenses</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">₹{totalExpenses.toFixed(2)}</p>
      </Card>
      <Card className="bg-white dark:bg-gray-800 shadow-md dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Current Balance</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">₹{balance.toFixed(2)}</p>
      </Card>
    </div>
  );
}
