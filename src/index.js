import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { HashRouter as Router } from "react-router-dom";

import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from './reducers'

// const middleware = applyMiddleware(thunk)

// const store = createStore(
//     rootReducers,
//     middleware,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));


