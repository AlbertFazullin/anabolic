import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-sage';

import reducers from '../reducers';

const initialState = {};

const saga = createSagaMiddleware();
const rootReducer = combineReducers(reducers);

const enhancer = compose(
    applyMiddleware(saga),
);

const store = createStore(rootReducer, initialState, enhancer);

export default store;
