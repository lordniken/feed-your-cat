import React, { useState } from "react";
import { default as cn } from "classnames";

export default function Product({ data }) {
  const [isHovered, setHoverState] = useState(false);
  const [isSelected, setSelectState] = useState(data.isSelected);

  const classNames = (defaultName) =>
    cn({
      [`${defaultName}`]: true,
      [`${defaultName}${isSelected ? "__selected" : ""}__hovered`]: isHovered,
      [`${defaultName}__selected`]: isSelected,
      [`${defaultName}__disabled`]: data.isDisabled,
    });

  return (
    <div className="product-item-container">
      <div
        className={classNames("product-item-mask")}
        onMouseEnter={() => !data.isDisabled && setHoverState(true)}
        onMouseLeave={() => !data.isDisabled && setHoverState(false)}
        onClick={() => !data.isDisabled && setSelectState(!isSelected)}
      />

      <div className={classNames("product-item")}>
        <div className={classNames("product-item-head")} />
        <div className="product-item-bg" />
        <div className="product-item-body">
          <p className={classNames("product-item-body__description")}>
            Сказочное заморское яство
          </p>
          <h3 className="product-item-body__title">Нямушка</h3>
          <span className="product-item-body__subtitle">{data.subtitle}</span>
          <ul className={classNames("product-item-body__features")}>
            {data.features &&
              data.features.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
          </ul>
        </div>
        <div className={classNames("product-item-weight")}>
          <div className="product-item-weight__value">{data.weight}</div>
          <div className="product-item-weight__unit">кг</div>
        </div>
        <div className={classNames("product-item-catty")} />
        <div className="product-item-footer">
          <p>
            Чего сидишь? Порадуй котэ, <a>купи</a>
          </p>
        </div>
        <div className="product-item-link" />
      </div>
    </div>
  );
}
