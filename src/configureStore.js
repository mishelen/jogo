import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

export default (initialState = {}) => {
    const middlewares = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(logger);
    }
    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middlewares), window.devToolsExtension ? window.devToolsExtension() : f => f)
    );

    return store;
};
