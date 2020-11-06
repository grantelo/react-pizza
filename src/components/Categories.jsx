import React, { useState } from 'react';
import classNames from 'classnames';

const Categories = React.memo(function Categories({ items, onClickCategory, activeCategory }) {
  return (
    <div className="categories">
      <ul className="categories__list">
        <li
          onClick={() => onClickCategory(null)}
          className={classNames('categories__list-item', {
            active: activeCategory === null,
          })}>
          Все
        </li>
        {items.map((item, index) => {
          return (
            <li
              key={item}
              className={classNames('categories__list-item', {
                active: index === activeCategory,
              })}
              onClick={() => onClickCategory(index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
})

export default Categories;