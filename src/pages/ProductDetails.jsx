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


    if (!product) {
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
