import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function DownloadTransactionsPDF({ transactions }) {
  const calculateTotals = () => {
    const totalIncome = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    const totalExpenses = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
    const totalSaved = totalIncome - totalExpenses;

    return { totalIncome, totalExpenses, totalSaved };
  };

  const handleDownload = () => {
    const {totalIncome, totalExpenses, totalSaved } = calculateTotals();
    const doc = new jsPDF();

    doc.text('Transactions Summary', 14, 15);
    doc.autoTable({
      head: [['Amount', 'Description', 'Category', 'Type', 'Date']],
      body: transactions.map(t => [
        `${t.amount.toFixed(2)}`,
        t.description,
        t.category,
        t.type,
        t.date || 'N/A', // Ensure date is set
      ]),
      startY: 20,
    });

    // Add totals section
    doc.text('Totals', 14, doc.lastAutoTable.finalY + 10);
    doc.autoTable({
      head: [['Total Earned', 'Total Spent', 'Total Saved']],
      body: [[
        `${totalIncome.toFixed(2)}`,
        `${totalExpenses.toFixed(2)}`,
        `${totalSaved.toFixed(2)}`
      ]],
      startY: doc.lastAutoTable.finalY + 15,
    });

    doc.save('transactions_summary.pdf');
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded"
    >
      Download PDF
    </button>
  );
}
