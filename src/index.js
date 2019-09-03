import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import './styles/index.css';

ReactDOM.render(<App store={store}/>, document.getElementById('root'));