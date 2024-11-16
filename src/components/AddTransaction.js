import React, { useState } from 'react';
import { useTransactions } from './TransactionsProvider';
import { Button, Input, Label, Select } from './UIComponents';

export default function AddTransaction() {
  const { addTransaction } = useTransactions();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // Default to today’s date

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount && category) {
      addTransaction({
        id: Date.now(),
        description,
        amount: parseFloat(amount),
        type,
        category,
        date, // Include the date here
      });
      setDescription('');
      setAmount('');
      setType('expense');
      setCategory('');
      setDate(new Date().toISOString().slice(0, 10)); // Reset to today’s date
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Add Transaction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label className="text-gray-900 dark:text-white">Description</Label>
          <Input 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
            className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 border-gray-300 dark:border-gray-600 rounded-md"
            placeholder="Enter description"
          />
        </div>
        <div>
          <Label className="text-gray-900 dark:text-white">Amount</Label>
          <Input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            required 
            className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 border-gray-300 dark:border-gray-600 rounded-md"
            placeholder="Enter amount"
          />
        </div>
        <div>
          <Label className="text-gray-900 dark:text-white">Date</Label>
          <Input 
            type="date"
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
            className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 rounded-md"
          />
        </div>
        <div>
          <Label className="text-gray-900 dark:text-white">Type</Label>
          <Select 
            value={type} 
            onChange={(e) => setType(e.target.value)} 
            className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 rounded-md"
          >
            <option value="expense" className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white">Expense</option>
            <option value="income" className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white">Income</option>
          </Select>
        </div>
        <div>
          <Label className="text-gray-900 dark:text-white">Category</Label>
          <Input 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            required 
            className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 border-gray-300 dark:border-gray-600 rounded-md"
            placeholder="Enter category"
          />
        </div>
        <Button type="submit" className="bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 rounded-md px-4 py-2 mt-4">
          Add Transaction
        </Button>
      </form>
    </div>
  );
}
