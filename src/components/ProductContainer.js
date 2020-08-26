import React, { useState } from "react";
import { default as cn } from "classnames";
import Product from "./Product";

export default function ProductContainer({ data }) {
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
    <Product
      onEnter={onEnterHandler}
      onLeave={onLeaveHandler}
      onClick={onClickHandler}
      classNames={classNames}
      classNamesDisabled={classNamesDisabled}
      footerText={footerText}
      descriptionState={descriptionState}
      subtitle={data.subtitle}
      features={data.features}
      weight={data.weight}
    />
  );
}
