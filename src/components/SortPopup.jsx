import React from 'react';
import classNames from 'classnames';

const Sort = React.memo(function Sort({ items, onClickSortBy, activeSortBy }) {
  const sortRef = React.useRef();
  const [visiblePopup, setVisiblePopup] = React.useState(false);

  console.log(items);
  const activeLabel = items.find((item) => item.type === activeSortBy).name;

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const onSelectItem = (obj) => {
    setVisiblePopup(false);
    onClickSortBy(obj);
  };

  React.useEffect(() => {
    document.addEventListener('click', (event) => {
      if (event.target.closest('.sort') !== sortRef.current) {
        setVisiblePopup(false);
      }
    });
  });


  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <img src={require('../assets/img/content/arrow.svg')} alt="arrow" />
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {items.map((obj) => {
              return (
                <li
                  className={classNames({
                    active: obj.type === activeSortBy,
                  })}
                  key={obj.type}
                  onClick={() => onSelectItem(obj)}>
                  {obj.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
})

export default Sort;
