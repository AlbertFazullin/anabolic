import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-sage";

import rootSaga from "../sagas";

import reducers from "../reducers";

const initialState = {};

const saga = createSagaMiddleware();
const rootReducer = combineReducers(reducers);

const enhancer = compose(
    applyMiddleware(saga),
);

const store = createStore(rootReducer, initialState, enhancer);

saga.run(rootSaga);

export default store;
