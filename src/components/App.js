import React from "react";
import "../assets/css.scss";

export default function App() {
  return (
    <div className="page-container">
      <h3 className="page-title">Ты сегодня покормил кота?</h3>
      <ul className="product-list">
        {[1, 2, 3].map((item) => (
          <li className="product-item-container" key={`${item}`}>
            <div className="product-item">
              <div className="product-item-head" />
              <div className="product-item-bg" />
              <div className="product-item-body">
                <p className="product-item-body__description">
                  Сказочное заморское яство
                </p>
                <h3 className="product-item-body__title">Нямушка</h3>
                <span className="product-item-body__subtitle">с фуа-гра</span>
                <ul className="product-item-body__features">
                  <li>
                    <mark>10</mark> порций
                  </li>
                  <li>мышь в подарок</li>
                </ul>
              </div>
              <div className="product-item-weight">
                <div className="product-item-weight__value">0,5</div>
                <div className="product-item-weight__unit">кг</div>
              </div>
              <div className="product-item-footer">
                <p>
                  Чего сидишь? Порадуй котэ, <a>купи</a>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
