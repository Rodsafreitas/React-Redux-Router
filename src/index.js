import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Router } from 'react-router-dom';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import  store  from './store';
import { Header } from './components/Header';
  
ReactDOM.render(
<Provider store={store}>
    <Routes />
</Provider>
,document.getElementById('app'));

registerServiceWorker();