import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const appStore = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>
    , document.querySelector('#root'));