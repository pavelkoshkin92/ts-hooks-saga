import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'

import rootReducer from "./root.reducer";
import rootSaga from "./root.saga";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__? : typeof compose;
    }
}

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = process.env.NODE_ENV === 'production'
    ? compose
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

const store = createStore(rootReducer, {}, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

export default store;
