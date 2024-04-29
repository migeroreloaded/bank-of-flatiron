import React, { useState } from 'react';

function SearchBox({ transactions, onSearch }) {
    // State to hold the search term
    const [searchTerm, setSearchTerm] = useState('');

    // Function to handle input change
    const handleInputChange = (event) => {
        const {value} = event.target;
        setSearchTerm(value);
        onSearch(value);
    }

    // Render an input element for searching transactions
    return (
        <input 
            type="text" 
            className="SearchInput" 
            placeholder="Search Your Recents Transactions..."
            value={searchTerm}
            onChange={handleInputChange}
        />
    );
}

export default SearchBox;