import React, { memo } from 'react';
import { useTransactions } from './TransactionsProvider';
import { Button, Card } from './UIComponents';

const TransactionList = memo(() => {
  const { transactions, deleteTransaction } = useTransactions();

  if (transactions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Transactions</h2>
        <p className="text-gray-500">No transactions recorded.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Transactions</h2>
      <ul className="space-y-4">
        {transactions.map(({ id, description, category, type, amount }) => (
          <Card key={id} className="bg-white dark:bg-gray-800 dark:text-white p-4">
            <li className="flex justify-between items-center">
              <div>
                <p className="font-medium text-lg">{description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-300">{category}</p>
              </div>
              <div>
                <p className={`font-medium text-lg ${type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                  {type === 'income' ? '+' : '-'}₹{amount.toFixed(2)}
                </p>
              </div>
              <Button onClick={() => deleteTransaction(id)} className="bg-red-500 ml-4">
                Delete
              </Button>
            </li>
          </Card>
        ))}
      </ul>
    </div>
  );
});

export default TransactionList;
