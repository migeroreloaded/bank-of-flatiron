import React, { useState } from 'react';

function AddTransaction({ onAdd }) {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data

    // Basic validation
    if (!formData.date || !formData.description || !formData.category || !formData.amount) {
      alert('Please fill in all fields');
      return;
    }

    // Validate amount as integer
    const amountInt = parseInt(formData.amount);
    if (isNaN(amountInt) || amountInt !== parseFloat(formData.amount)) {
      alert('Amount must be an integer');
      return;
    }

    // Add the new transaction using the onAdd callback
    onAdd(formData);
    // Clear the form fields
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: ''
    });
  };

  return (
    <div className='Transaction'>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder='Description'
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder='Category'
          value={formData.category}
          onChange={handleChange}
        />
        <input
          type="text"
          name="amount"
          placeholder='Amount'
          value={formData.amount}
          onChange={handleChange}
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
