import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { HashRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import { saveState } from './helpers/localStorage'

store.subscribe(() => {
    saveState(store.getState().favoritesData)
})

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);


