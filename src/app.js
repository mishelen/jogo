import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import Root from './components';
import './styles/index.scss';

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('app'));
