import React from 'react';

function SortPanel({ sortOption, onSortOptionChange }) {
  return (
    <div className="border p-3 mb-3" style={{ borderRadius: '8px' }}>
      <h5>Sort By</h5>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="sortOption"
          value="Price"
          checked={sortOption === "Price"}
          onChange={onSortOptionChange}
        />
        <label className="form-check-label">
          Price: Low-High
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="sortOption"
          value="Experience"
          checked={sortOption === "Experience"}
          onChange={onSortOptionChange}
        />
        <label className="form-check-label">
          Experience: Most Experience First
        </label>
      </div>
    </div>
  );
}

export default SortPanel;
