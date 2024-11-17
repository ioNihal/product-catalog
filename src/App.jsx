import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import ProductCatalog from "./pages/ProductCatalog"
import ProductDetails from "./pages/ProductDetails"

import "./App.css"

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<ProductCatalog />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App