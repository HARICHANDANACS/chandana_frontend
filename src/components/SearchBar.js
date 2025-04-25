import React, { useState } from "react";

function SearchBar({ searchQuery, onSearchChange, suggestions }) {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    onSearchChange(e);
    setShowSuggestions(true); // Show suggestions when user starts typing
  };

  const handleSuggestionClick = (suggestion) => {
    onSearchChange({ target: { value: suggestion } });
    setShowSuggestions(false); // Hide suggestions after selecting
  };

  return (
    <div>
      <div
        className="fixed-top"
        style={{ backgroundColor: "#003366", padding: "10px 0" }}
      >
        <div className="container">
          <input
            type="text"
            placeholder="Search doctors"
            value={searchQuery}
            onChange={handleInputChange}
            className="form-control mb-4"
            data-testid="autocomplete-input"
            style={{ width: "100%", padding: "15px" }}
          />
          {showSuggestions && (
            <div
              style={{
                backgroundColor: "white",
                border: "1px solid #ccc",
                maxHeight: "200px",
                overflowY: "scroll",
                position: "absolute",
                width: "100%",
                zIndex: 10,
              }}
            >
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  data-testid="suggestion-item"
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
