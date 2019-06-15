/* global document:readonly */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'framework7/css/framework7.bundle.css';
import Framework7React from 'framework7-react';
import Framework7 from 'framework7/framework7.esm.bundle';
import {
    App,
    Statusbar,
    View,
} from 'framework7-react';

import configureStore from './store';
import initialState from './config/initial-state';

import ViewCarbCalculator from './views/view.carb-calculator';

Framework7.use(Framework7React);

const store = configureStore(initialState);

const Index = () => (
    <Provider store={store}>
        <App params={{ theme: 'auto', name: 'Carbulator', id: 'com.wolfiezero.carbulator' }}>
            <Statusbar />
            <View main>
                <ViewCarbCalculator />
            </View>
        </App>
    </Provider>
);

ReactDOM.render(<Index />, document.querySelector('#index'));
