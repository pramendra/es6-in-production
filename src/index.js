import React from 'react';
import ReactDOM from 'react-dom';

const title = 'ES6 in Production';
ReactDOM.render(
  <h1>{title}</h1>,
  document.getElementById('app')
);

module.hot.accept();