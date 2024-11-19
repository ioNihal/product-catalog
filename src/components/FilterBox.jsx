import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

import "../styles/FilterBox.css";

// Functional component for rendering a filter box with categories and checkboxes
const FilterBox = ({ categories, selectedFilters, onFilterChange }) => {
    const [isOpen, setIsOpen] = useState(false); // State to toggle the visibility of the filter options

    // Handler for checkbox changes, updates the selected filters
    const handleCheckBoxChange = (category) => {
        if (selectedFilters.includes(category)) {
            // If the category is already selected, remove it from the filters
            onFilterChange(selectedFilters.filter((filter) => filter !== category));
        } else {
            // If the category is not selected, add it to the filters
            onFilterChange([...selectedFilters, category]);
        }
    };

    return (
        <div className="filter-container">
            {/* Button to toggle the filter options */}
            <button
                className="filter-icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Filter Options"
            >
                <FaFilter />
            </button>

            {/* Conditionally render the filter options if isOpen is true */}
            {isOpen && (
                <div className="popover">
                    <h3>Filter by Category</h3>
                    <div className="filter-options">
                        {/* Map through the categories and render checkboxes */}
                        {categories.map((category) => (
                            <label key={category} className="filter-option">
                                <input
                                    type="checkbox"
                                    checked={selectedFilters.includes(category)} // Check if the category is selected
                                    onChange={() => handleCheckBoxChange(category)} // Handle changes to the checkbox
                                />
                                {category.toUpperCase()}
                            </label>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};


export default FilterBox;
