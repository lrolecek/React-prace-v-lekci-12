import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import './style.css';

import Uvod from './components/Uvod';
import Produkty from './components/Produkty';
import Onas from './components/Onas';
import Kontakt from './components/Kontakt';
import Detail from './components/Detail';

const App = () => {
  return (
    <BrowserRouter>
      <h1>Firemní stránky</h1>

      <nav>
        <Link to="/">Úvod</Link>
        |
        <Link to="/produkty">Produkty</Link>
        |
        <Link to="/onas">O nás</Link>
        |
        <Link to="/kontakt">Kontakt</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={ <Uvod /> } />
        <Route path="/produkty" element={ <Produkty /> }>
          <Route path=":id" element={ <Detail /> } />
        </Route>
        <Route path="/onas" element={ <Onas /> } />
        <Route path="/kontakt" element={ <Kontakt /> } />
      </Routes>

    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#app'));
