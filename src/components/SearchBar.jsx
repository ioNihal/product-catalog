import React, { useState } from "react"

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search products..."
                className="search-input"
            />
        </div>
    );
}

export default SearchBar