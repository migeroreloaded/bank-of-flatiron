import React, { useState } from 'react';

function SearchBox({ transactions, onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        const {value} = event.target;
        setSearchTerm(value);
        onSearch(value);
    }

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