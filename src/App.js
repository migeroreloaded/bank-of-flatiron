import React, { useState } from 'react';
import './App.css';
import SearchBox from './Components/SearchBox';
import AddTransaction from './Components/AddTransaction';
import TableTransaction from './Components/TableTransaction';

function App() {
  // Initial Transaction Records
  const initialTransactionRecords = [
    { date: "2024-05-15", description: "Movie night", category: "Entertainment", amount: 25.00 },
    { date: "2024-05-18", description: "Dinner at restaurant", category: "Food", amount: 50.00 },
    { date: "2024-05-20", description: "New sneakers", category: "Shopping", amount: 80.00 },
    { date: "2024-05-22", description: "Phone bill", category: "Utilities", amount: 45.00 },
    { date: "2024-05-25", description: "Fitness class", category: "Health", amount: 30.00 },
    { date: "2024-05-28", description: "Book purchase", category: "Education", amount: 20.00 }
  ];

  // State to manage transaction records
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
    // Add the new transaction to the transactionRecords array
    const updatedTransactions = [...transactionRecords, newTransaction];
    setTransactionRecords(updatedTransactions);
    setFilteredTransactions(updatedTransactions); // Update filtered transactions directly
  };

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
