import React, { useState, useEffect } from 'react';
import TransactionRow from './TransactionRow';
import SortButton from './SortButton';

function TableTransaction({ records }) {
  // State to hold sorted records
  const [sortedRecords, setSortedRecords] = useState([...records]);

  // Function to sort records by category
  const sortRecordsByCategory = () => {
    const sorted = [...sortedRecords].sort((a, b) => a.category.localeCompare(b.category));
    setSortedRecords(sorted);
  };
  
  // Function to sort records by description
  const sortRecordsByDescription = () => {
    const sorted = [...sortedRecords].sort((a, b) => a.description.localeCompare(b.description));
    setSortedRecords(sorted);
  };

  useEffect(() => {
    // Sort records when records prop changes
    setSortedRecords([...records]);
  }, [records]);

  return (
    <div>
      <SortButton onClick={sortRecordsByCategory} label="Sort by Category" />
      <SortButton onClick={sortRecordsByDescription} label="Sort by Description" />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* Render each transaction row */}
          {sortedRecords.map((data, index) => (
            <TransactionRow
              key={index}
              date={data.date}
              description={data.description}
              category={data.category}
              amount={data.amount}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableTransaction;
