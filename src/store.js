import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const middleware = applyMiddleware(thunk);

const configureStore = (preloadedState = {}) => {
    return createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(middleware)
    );
};

export default configureStore;
