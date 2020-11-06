import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, SortPopup } from '../components/index';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { addPizzaToCart } from '../redux/actions/cart';
import { fetchPizzas } from '../redux/actions/pizzas';
import PizzaLoadingBlock from '../components/PizzaBlock/PizzaLoadingBlock';

const categoryItems = ['Мясные', 'Вегетерианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цена', type: 'price', order: 'asc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const items = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [sortBy, category]);

  const onSelectCategory = React.useCallback(
    (catIndex) => {
      dispatch(setCategory(catIndex));
    },
    [],
  )

  const onSelectSortBy = React.useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [],
  )

  const handleAddPizzaToCart = React.useCallback(
    (pizzaObj) => {
      dispatch(addPizzaToCart(pizzaObj));
    },
    []
  )

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categoryItems}
          onClickCategory={onSelectCategory}
          activeCategory={category}
        />
        <SortPopup items={sortItems} onClickSortBy={onSelectSortBy} activeSortBy={sortBy.type} />
      </div>
      <h2 className="content__title">Все пиццы:</h2>
      <div className="content__items">
        {isLoaded ?
          pizzas.map((obj) => {
            return (
              <PizzaBlock
                totalCount={items[obj.id] && items[obj.id].totalCount}
                {...obj}
                key={obj.id}
                onClickAddPizza={handleAddPizzaToCart}
              />
            );
          })
          : Array(8).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)
        }
      </div>
    </div>
  );
}

export default Home;
