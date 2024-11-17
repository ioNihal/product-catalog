import React, { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar";
import FilterBox from "../components/FilterBox";
import ProductList from "../components/ProductList";


const ProductCatalog = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/data/products.json");
                if (!response.ok) throw new Error("Failed to fetch products");
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchProducts();
    }, []);

    if (loading) {
        return <div style={{height: "80vh" }}>Loading product details....</div>;
    }

    if (!products) {
        return <div>Product not found!</div>;
    }


    const categories = [...new Set(products.map(product => product.category))];

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedFilters.length === 0 || selectedFilters.includes(product.category);

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="product-catalog">
            <div className="catalog-controls">
                <SearchBar onSearch={setSearchQuery} />
                <FilterBox
                    categories={categories}
                    selectedFilters={selectedFilters}
                    onFilterChange={setSelectedFilters}
                />
            </div>
            <ProductList products={filteredProducts} />
        </div>
    );
}

export default ProductCatalog
