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
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
                backgroundColor: "#f9f9f9",
                fontFamily: "Aboreto, system-ui",
                fontSize: "1.2rem",
                color: "#4A4947"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <div style={{
                        width: "50px",
                        height: "50px",
                        border: "5px solid #eadbc8",
                        borderTop: "5px solid #4a4947",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite"
                    }} />
                    <p>Loading product details...</p>
                </div>
                <style>
                    {`@keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }`}
                </style>
            </div>
        );
    }


    if (!products) {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
                backgroundColor: "#FEFAF6",
                fontFamily: "Aboreto, system-ui",
                fontSize: "1.2rem",
                color: "#4A4947"
            }}>
                <h2>Oops! Product not found.</h2>
                <p>We couldn't find the product you're looking for.</p>
                <button
                    style={{
                        marginTop: "1rem",
                        padding: "10px 15px",
                        backgroundColor: "#4A4947",
                        color: "#EADBC8",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "1rem"
                    }}
                    onClick={() => navigate(-1)}
                >
                    Go Back
                </button>
            </div>
        );
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
