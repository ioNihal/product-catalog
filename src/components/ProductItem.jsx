import React from "react";
import { Link } from "react-router-dom";

import "../styles/ProductList.css";

// Functional component for rendering individual product items
const ProductItem = ({ product }) => {
    return (
        <div className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">${product.price}</p>
                {/* Link to the product details page using product ID */}
                <Link to={`/product/${product.id}`} className="view-details-btn">
                    VIEW DETAILS
                </Link>
            </div>
        </div>
    );
};


export default ProductItem;
