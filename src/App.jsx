import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components/index';
import { Home, Cart } from './pages/index';

import './sass/style.sass';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
