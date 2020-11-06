import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../components/index'
import { CartItem } from '../components/index'
import { plusCartItem, removeCartItem, minusCartItem, clearCart } from '../redux/actions/cart';

function Cart() {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  const addedPizzas = Object.keys(items).map((key) => {
    return items[key].items[0];
  })

  const onRemoveItem = (id) => {
    if (window.confirm("Вы действительно хотите удалить пиццу?")) dispatch(removeCartItem(id));
  }

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
  }

  const onMinusItem = (id) => {
    dispatch(minusCartItem(id))
  }

  const onClearCart = () => {
    if (window.confirm("Вы действительно хотите очистить корзину?")) dispatch(clearCart());
  }

  return (
    <div class="container container--cart">
      {totalCount ? (
        <div class="cart" >
          <div class="cart__top">
            <div class="cart__title-box">
              <img src="./img/cart/cart.svg" alt="" />
              <h2 class="cart__title">Корзина</h2>
            </div>
            <div class="cart__clear">
              <img src="./img/cart/trash.svg" alt="" />
              <span onClick={onClearCart}>Очистить корзину</span>
            </div>
          </div>
          <div class="cart__items">
            {addedPizzas.map((obj) => (
              <CartItem
                key={obj.id}
                id={obj.id}
                imageUrl={obj.imageUrl}
                name={obj.name}
                type={obj.type}
                size={obj.size}
                totalPrice={items[obj.id].totalPrice}
                totalCount={Object.keys(items[obj.id].items).length}
                onRemove={onRemoveItem}
                onPlus={onPlusItem}
                onMinus={onMinusItem}
              />
            ))
            }
          </div>
          <div class="cart__details">
            <span>
              Всего пицц: <b>{totalCount} шт.</b>
            </span>
            <span>
              Сумма заказа: <b>{totalPrice}₽</b>
            </span>
          </div>
          <div class="cart__bottom">
            <a class="button button--go-back">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 13L1 6.93015L6.86175 1"
                  stroke="#D3D3D3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Link to="/">
                <span>Вернуться назад</span>
              </Link>
            </a>
            <Button className="button button--pay">Оплатить сейчас</Button>
          </div>
        </div >)
        :
        (
          <div class="cart-empty">
            <div class="container container--cart-empty">
              <h2>Корзина пустая <i>😕</i></h2>
              <p>Вероятней всего, вы не заказывали ещё пиццу.
              Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
              <img srcset="./img/cart-empty/cart-empty.png 2x" alt="" />
              <Link to="/">
                <button class="button button--black">Вернуться назад</button>
              </Link>
            </div>
          </div>
        )
      }
    </div >
  );
}

export default Cart;
