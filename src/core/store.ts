import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'

import { loadState, saveState } from "../utils";

import rootReducer from "./root.reducer";
import rootSaga from "./root.saga";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__? : typeof compose;
    }
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = process.env.NODE_ENV === 'production'
    ? compose
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

store.subscribe(() => {
    saveState({
        auth: store.getState().auth
    })
});

sagaMiddleware.run(rootSaga);

export default store;
