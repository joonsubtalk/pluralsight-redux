import 'babel-polyfill';  //things es6 can't pollyfill Object.assign; might do individually
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Providor} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/style.css'; // webpack can import css files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

render(
  <Providor store={store}>
    <Router history={browserHistory} routes={routes} />
  </Providor>,
  document.getElementById('app')
);
