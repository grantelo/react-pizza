import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from './Button';

function Header() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <Link className="header__logo-link">
            <img src={require('../assets/img/header/logo.svg')} alt="" />
          </Link>
        </div>
        <div className="header__cart">
          <Link>
            <Button href="./assets/cart-empty.html" className="button button--cart">
              <span>{totalPrice}₽</span>
              <div className="button__delimiter"></div>
              <img src={require('../assets/img/header/cart.svg')} alt="cart" />
              <span>{totalCount}</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
