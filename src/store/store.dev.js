import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import { routerReducer } from 'react-router-redux';
import objectAssign from 'object-assign';

import rootSaga from '../sagas';

import jwtMiddleware from 'fs-jwt-redux-devtools';
import DevTools from '../containers/devTools';
import reducers from '../reducers';
import actionTypes from '../actions/actionTypes';

const { SIGN_IN_SUCCESS } = actionTypes;

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
    applyMiddleware(jwtMiddleware([SIGN_IN_SUCCESS])),
    DevTools.instrument()
);

export default createStore(reducer, {}, enhancer);

saga.run(rootSaga);
