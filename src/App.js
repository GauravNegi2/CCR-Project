import React from "react";
import { Routes, Route } from "react-router-dom";
import TransactionsProvider from "./components/TransactionsProvider";
import Dashboard from "./components/Dashboard";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import Settings from "./components/Settings";
import Navbar from "./Navbar";  // Import Navbar

export default function App() {
  return (
    <TransactionsProvider>
      <div className="min-h-screen bg-gray-100 font-sans dark:bg-gray-800 dark:text-white">
        <Navbar />  

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<AddTransaction />} />
            <Route path="/transactions" element={<TransactionList />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </TransactionsProvider>
  );
}
