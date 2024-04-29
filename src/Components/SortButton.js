import React from 'react';

function SortButton({ onClick, label }) {
    // Render a button with onClick event handler and label text
    return (
        <button onClick={onClick}>{label}</button>
    );
}

export default SortButton;
