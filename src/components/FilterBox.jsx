import React, { useState } from "react";
import { FaFilter } from "react-icons/fa"; // Install react-icons if not already

import "../styles/FilterBox.css";

const FilterBox = ({ categories, selectedFilters, onFilterChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCheckBoxChange = (category) => {
        if (selectedFilters.includes(category)) {
            onFilterChange(selectedFilters.filter((filter) => filter !== category));
        } else {
            onFilterChange([...selectedFilters, category]);
        }
    };

    return (
        <div className="filter-container">
            <button
                className="filter-icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Filter Options"
            >
                <FaFilter />
            </button>
            {isOpen && (
                <div className="popover">
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
            )}
        </div>
    );
};

export default FilterBox;
