import React, { useState, useTransition } from 'react';
import './SearchWithoutDebounce.css'; // Import CSS for styles

// Simulate a filter operation with a large dataset
const largeDataset = Array.from({ length: 40000 }, (_, index) => `Item ${index + 1}`);

function filterResults(query) {
  return largeDataset.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
}

function SearchWithoutDebounce() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    const filteredResults = filterResults(value);
    setResults(filteredResults);
    // No debouncing, filter immediately on each keystroke
    startTransition(() => {
     
    });
  };

  return (
    <div className="search-container">
      <h2 className="title">Enhanced Search With useTransition hook</h2>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className="search-input"
        placeholder="Search items..."
      />
      {isPending && <div className="loader"></div>}
      <ul className="results-list">
        {results.map((result, index) => (
          <li key={index} className="result-item">{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchWithoutDebounce;
