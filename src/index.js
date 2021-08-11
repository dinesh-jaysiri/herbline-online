import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./Contexts/Cart";
import { ProductProvider } from "./Contexts/Product";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
