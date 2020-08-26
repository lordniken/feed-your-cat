import React from "react";
import "../assets/css.scss";
import ProductContainer from "../components/ProductContainer";
import { productsData } from "./data";

export default function App() {
  return (
    <div className="page-container">
      <h3 className="page-title">Ты сегодня покормил кота?</h3>
      <ul className="product-list">
        {productsData.map((item, index) => (
          <ProductContainer key={index} data={item} />
        ))}
      </ul>
    </div>
  );
}
