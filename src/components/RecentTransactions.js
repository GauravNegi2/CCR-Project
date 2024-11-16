import React from 'react';
import { useTransactions } from './TransactionsProvider';

export default function RecentTransactions() {
  const { transactions } = useTransactions();
  const recentTransactions = transactions.slice(0, 5);

  return (
    <div className="space-y-4">
      {recentTransactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center justify-between">
          <div>
            <p className="font-medium">{transaction.description}</p>
            <p className="text-sm text-gray-500">{transaction.category}</p>
            {/* Add the transaction date */}
            <p className="text-xs text-gray-400">{new Date(transaction.date).toLocaleDateString()}</p>
          </div>
          <p className={`font-medium ${transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
            {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount.toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
}
