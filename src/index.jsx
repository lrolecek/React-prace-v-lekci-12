import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Komponenta from './components/Komponenta';

const App = () => {
  return (
    <>
      <h1>Aplikace</h1>
      <Komponenta />
    </>
  );
}

render(<App />, document.querySelector('#app'));
