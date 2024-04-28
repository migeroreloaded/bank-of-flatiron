import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBox from './Components/Search';
import AddTransaction from './Components/AddTransaction';
import TableTransaction from './Components/TableTransaction';

function App() {
  const initialTransactionRecords = [
    { date: "2024-04-01", description: "Grocery shopping", category: "Food", amount: 150.00 },
    { date: "2024-04-03", description: "Monthly subscription", category: "Entertainment", amount: 12.99 },
    { date: "2024-04-04", description: "Gym membership", category: "Health", amount: 40.00 },
    { date: "2024-04-05", description: "Coffee with friends", category: "Social", amount: 8.50 },
    { date: "2024-04-06", description: "Internet bill", category: "Utilities", amount: 60.00 },
    { date: "2024-04-10", description: "Textbooks", category: "Education", amount: 120.00 }
  ];

  const [transactionRecords, setTransactionRecords] = useState(initialTransactionRecords);
  const [filteredTransactions, setFilteredTransactions] = useState(initialTransactionRecords);

  // Function to handle search
  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      // If search term is empty, show all transactions
      setFilteredTransactions(transactionRecords);
    } else {
      // Filter transactions based on search term
      const filtered = transactionRecords.filter(transaction =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTransactions(filtered);
    }
  };

  // Function to add new transaction
  const handleAddTransaction = (newTransaction) => {
    // Add the new transaction to the TransactionRecords array
    const updatedTransactions = [...transactionRecords, newTransaction];
    setTransactionRecords(updatedTransactions);

    // Update filteredTransactions based on the current search term
    const searchTerm = ''; // Set the default search term
    if (!searchTerm) {
      // If search term is empty, show all transactions
      setFilteredTransactions(updatedTransactions);
    } else {
      // Filter transactions based on search term
      const filtered = updatedTransactions.filter(transaction =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTransactions(filtered);
    }
  };

  // Reset filteredTransactions when transactionRecords change
  useEffect(() => {
    setFilteredTransactions(transactionRecords);
  }, [transactionRecords]);

  return (
    <div className="App">
      <div className='royaltitle'>The Royal Bank of Flatiron</div>
      <SearchBox transactions={filteredTransactions} onSearch={handleSearch} />
      <AddTransaction onAdd={handleAddTransaction} />
      <TableTransaction records={filteredTransactions} />
    </div>
  );
}

export default App;
