import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';

import DevTools from '../containers/devTools';
import reducers from '../reducers';

const reducer = combineReducers(reducers);
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
