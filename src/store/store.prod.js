import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerReducer } from 'react-router-redux';
import objectAssign from 'object-assign';

import rootSaga from "../sagas";

import reducers from "../reducers";

const initialState = {};

const saga = createSagaMiddleware();
const rootReducer = combineReducers(objectAssign({}, reducers, {
  routing: routerReducer,
}));

const enhancer = compose(
    applyMiddleware(saga),
);

const store = createStore(rootReducer, initialState, enhancer);

saga.run(rootSaga);

export default store;
