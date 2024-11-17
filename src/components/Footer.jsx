import React from "react";
import { Link } from "react-router-dom";

import "../styles/Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Product Catalog. All Rights Reserved.</p>
        <div className="social-links">
          <Link to="/" aria-label="Email">
            📧 Email
          </Link>
          <Link to="/" aria-label="Instagram">
            📸 Instagram
          </Link>
          <Link to="/" aria-label="Twitter">
            🐦 Twitter
          </Link>
        </div>
        <p className="address">123 Product St, Catalog City, 12345</p>
      </div>
    </footer>
  );
}

export default Footer;
