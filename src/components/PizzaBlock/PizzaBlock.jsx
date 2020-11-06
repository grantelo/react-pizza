import React from 'react';
import classNames from 'classnames';

import Button from '../Button';

const availableTypes = ['тонкое', 'традиционное'];
const availableSizes = [26, 30, 40];

const PizzaBlock = React.memo(function PizzaBlock({ id, name, imageUrl, types, sizes, price, onClickAddPizza, totalCount }) {
  const [activeSize, setActiveSize] = React.useState(sizes[0]);
  const [activeType, setActiveType] = React.useState(types[0]);

  const onSelectSize = (item) => {
    setActiveSize(item);
  };

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onAddPizza = () => {
    const obj = {
      id,
      imageUrl,
      name,
      type: availableTypes[activeType],
      size: activeSize,
      price,
    };

    onClickAddPizza(obj);
  };


  return (
    <div className="pizza-block">
      <img srcSet={imageUrl} alt="pizza" className="pizza-block__image" />
      <h3 className="pizza-block__title">{name}</h3>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((item, index) => {
            return (
              <li
                key={item}
                onClick={() => onSelectType(index)}
                className={classNames({
                  active: index === activeType,
                  disabled: !types.includes(index),
                })}>
                {item}
              </li>
            );
          })}
        </ul>
        <ul>
          {availableSizes.map((item) => (
            <li
              key={item}
              onClick={() => onSelectSize(item)}
              className={classNames({
                active: item === activeSize,
                disabled: !sizes.includes(item),
              })}>
              {item} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <span className="pizza-block__price">от {price} ₽</span>
        <Button onClick={onAddPizza} className="button button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="#EB5A1E"
            />
          </svg>
          <span>Добавить {totalCount && <i>{totalCount}</i>}</span>
        </Button>
      </div>
    </div>
  );
})

export default PizzaBlock;
