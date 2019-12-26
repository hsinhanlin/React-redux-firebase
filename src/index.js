import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';

const sore = createStore();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);