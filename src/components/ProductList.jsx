import React from "react"
import ProductItem from "./ProductItem"

import "../styles/ProductItem.css";

// Functional component for rendering a list of products
const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {/* Map through the products array and render a ProductItem for each product */}
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList
