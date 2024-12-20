import React from "react";
import { Link } from "react-router-dom";

import "../styles/Header.css"

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="brand-name">
                    <Link to="/">PRODUCT CATALOG</Link>
                </h1>
            </div>
        </header>
    );
}

export default Header;