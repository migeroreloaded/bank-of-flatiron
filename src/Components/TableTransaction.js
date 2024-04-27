import React from 'react';
import TransactionRow from './TransactionRow';

function TableTransaction({records}) {
    let rows = [];
    records.forEach(data => {
        rows.push(< TransactionRow 
            date={data.date} 
            description={data.description}
            category={data.category}
            amount={data.amount}
            />)
    }
    
    )
    return (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
}

export default TableTransaction