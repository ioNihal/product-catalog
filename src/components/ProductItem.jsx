import React from "react"
import { Link } from "react-router-dom"

const ProductItem = ({ product }) => {
    return (
        <div className="product-item">
            <img style={{
                height: "200px",
                width: "200px"
            }} src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">${product.price}</p>
                <Link to={`/product/${product.id}`} className="view-details-btn">
                    VIEW DETAILS
                </Link>
            </div>
        </div>
    );
}

export default ProductItem