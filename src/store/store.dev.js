import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import createLogger from "redux-logger";
import { routerReducer } from 'react-router-redux';
import objectAssign from 'object-assign';

import rootSaga from "../sagas";

import DevTools from "../containers/devTools";
import reducers from "../reducers";

const reducer = combineReducers(objectAssign({}, reducers, {
  routing: routerReducer,
}));

const saga = createSagaMiddleware();

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const enhancer = compose(
    applyMiddleware(saga, logger),
    DevTools.instrument()
);

export default createStore(reducer, {}, enhancer);

saga.run(rootSaga);
