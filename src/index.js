import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AdoApp } from './AdoApp';

import './styles/styles.scss'

ReactDOM.render(
  <BrowserRouter>
    <AdoApp />
  </BrowserRouter>,
  document.getElementById('root')
);
