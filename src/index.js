/* global document:readonly */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import configureStore from './store';

const store = configureStore({
    carbs: {
        list: [
            // ...
        ],
        total: 0,
    },
});

const Index = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<Index />, document.querySelector('#index'));
