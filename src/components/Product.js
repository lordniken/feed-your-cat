import React, { useState } from "react";
import { default as cn } from "classnames";

export default function Product({ data }, defaultFooterText) {
  const [isHovered, setHoverState] = useState(false);
  const [isSelected, setSelectState] = useState(data.isSelected);
  const [descriptionState, setDescriptionState] = useState(false);

  const classNames = (defaultName) =>
    cn({
      [`${defaultName}`]: true,
      [`${defaultName}${isSelected ? "__selected" : ""}__hovered`]: isHovered,
      [`${defaultName}__selected`]: isSelected,
      [`${defaultName}__disabled`]: data.isDisabled,
    });

  const classNamesDisabled = (defaultName) =>
    data.isDisabled ? `${defaultName} ${defaultName}__disabled` : defaultName;

  const onClickHandler = () => {
    !data.isDisabled && setSelectState(!isSelected);
    setDescriptionState(false);
  };

  const onEnterHandler = () => {
    if (!data.isDisabled) {
      setHoverState(true);
      isSelected && setDescriptionState(true);
    }
  };

  const onLeaveHandler = () => {
    !data.isDisabled && setHoverState(false);
    setDescriptionState(false);
  };

  const footerText = () => {
    return data.isDisabled ? (
      data.footerTexts["disabled"]
    ) : isSelected ? (
      data.footerTexts["selected"]
    ) : (
      <>
        Чего сидишь? Порадуй котэ, <a onClick={onClickHandler}>купи</a>
      </>
    );
  };

  return (
    <div className="product-item-container">
      <div
        className={classNamesDisabled("product-item-mask")}
        onMouseEnter={onEnterHandler}
        onMouseLeave={onLeaveHandler}
        onClick={onClickHandler}
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
          <span className="product-item-body__subtitle">{data.subtitle}</span>
          <ul className={classNamesDisabled("product-item-body__features")}>
            {data.features.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
        <div className={classNames("product-item-weight")}>
          <div className="product-item-weight__value">{data.weight}</div>
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
//Чего сидишь? Порадуй котэ, <a>купи</a>
