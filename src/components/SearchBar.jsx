import React, { useState } from "react";

import "../styles/SearchBar.css";

// Functional component for rendering a search bar
const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState(""); // State to store the current search query

    // Handler function for updating the search query
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value); // Update the search query state with the input value
        onSearch(event.target.value); // Call the onSearch function passed as a prop with the updated value
    };

    return (
        <div className="search-bar">
            {/* Input field for entering the search query */}
            <input
                type="text"
                value={searchQuery} // Bind the input value to the searchQuery state
                onChange={handleSearchChange} // Trigger the handler on input change
                placeholder="Search products..."
                className="search-input"
            />
        </div>
    );
};


export default SearchBar;
