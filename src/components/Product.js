import React from "react";

export default function Product({
  onEnter,
  onLeave,
  onClick,
  classNames,
  classNamesDisabled,
  footerText,
  descriptionState,
  subtitle,
  features,
  weight,
}) {
  return (
    <div className="product-item-container">
      <div
        className={classNamesDisabled("product-item-mask")}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={onClick}
      />

      <div className={classNames("product-item")}>
        <div className={classNames("product-item-head")} />
        <div className="product-item-bg" />
        <div className="product-item-body">
          <p
            className={[
              classNamesDisabled("product-item-body__description"),
              descriptionState ? "product-item-body__description__bad" : "",
            ].join(" ")}
          >
            {descriptionState
              ? "Котэ не одобряет?"
              : "Сказочное заморское яство"}
          </p>
          <h3 className="product-item-body__title">Нямушка</h3>
          <span className="product-item-body__subtitle">{subtitle}</span>
          <ul className={classNamesDisabled("product-item-body__features")}>
            {features.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
        <div className={classNames("product-item-weight")}>
          <div className="product-item-weight__value">{weight}</div>
          <div className="product-item-weight__unit">кг</div>
        </div>
        <div className={classNamesDisabled("product-item-catty")} />
        <div className={classNamesDisabled("product-item-footer")}>
          <p>{footerText()}</p>
        </div>
        <div className="product-item-link" />
      </div>
    </div>
  );
}
