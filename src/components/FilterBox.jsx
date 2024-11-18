import React from "react"

import "../styles/FilterBox.css"

const FilterBox = ({ categories, selectedFilters, onFilterChange }) => {
    const handleCheckBoxChange = (category) => {
        if (selectedFilters.includes(category)) {
            onFilterChange(selectedFilters.filter((filter) => filter !== category));
        } else {
            onFilterChange([...selectedFilters, category]);
        }
    };

    return (
        <div className="filter-box">
            <h3>Filter by Category</h3>
            <div className="filter-options">
                {categories.map((category) => (
                    <label key={category} className="filter-option">
                        <input
                            type="checkbox"
                            checked={selectedFilters.includes(category)}
                            onChange={() => handleCheckBoxChange(category)}
                        />
                        {category.toUpperCase()}
                    </label>
                ))}
            </div>
        </div>
    );
}


export default FilterBox