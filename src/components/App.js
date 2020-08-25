import React from "react";
import "../assets/css.scss";
import Product from "./Product";
import { productsData } from "./data";

export default function App() {
  return (
    <div className="page-container">
      <h3 className="page-title">Ты сегодня покормил кота?</h3>
      <ul className="product-list">
        {productsData.data.map((item, index) => (
          <Product key={index} data={item} />
        ))}
      </ul>
    </div>
  );
}
