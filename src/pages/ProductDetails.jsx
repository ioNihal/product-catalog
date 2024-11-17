import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/data/products.json");
                if (!response.ok) throw new Error("Failed to fetch product data");
                const data = await response.json();
                const selectedProduct = data.find((item) => item.id === parseInt(id, 10));
                setProduct(selectedProduct);
            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [id]);

    if (loading) {
        return <div>Loading product details....</div>;
    }

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <div className="product-details">
            <button className="back-button" onClick={() => { navigate(-1) }}>BACK</button>
            <div className="d-product-image">
                <img src={`../${product.image}`} alt={product.name} />
            </div>
            <div className="d-product-info">
                <h1>{product.name}</h1>
                <p className="d-category">Category: {product.category}</p>
                <p className="d-price">Price: ${product.price}</p>
                <p className="d-description">{product.description}</p>
            </div>
        </div>
    );
}

export default ProductDetails;
