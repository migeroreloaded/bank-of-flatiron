import React from 'react';

function SortButton({ onClick, label }) {
  return (
    <button onClick={onClick}>{label}</button>
  );
}

export default SortButton;
