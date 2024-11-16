import React from 'react';
import { Link } from 'react-router-dom';
import { useTransactions } from './TransactionsProvider'; // Import useTransactions hook
import Overview from './Overview';
import SpendingChart from './SpendingChart';
import RecentTransactions from './RecentTransactions';
import { Button } from './UIComponents';
import DownloadTransactionsPDF from './DownloadTransactionsPDF';

export default function Dashboard() {
  const { transactions } = useTransactions(); // Retrieve transactions

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h2>
        <Link to="/add">
          <Button>
            Add Transaction
          </Button>
        </Link>
      </div>
      
      {/* PDF Download Button */}
      <DownloadTransactionsPDF transactions={transactions} />

      <Overview />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <SpendingChart />
        <RecentTransactions />
      </div>
    </div>
  );
}
