import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from "./store";
import routes from './routes';
import Root from "./containers/Root";

import "./index.html";

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Root store={ store } routing={ routes }
      history={ history }
    />,
    document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root/index', () => {
    const NewRoot = require('./containers/Root/index').default;
    render(
            <NewRoot store={ store } routing={ routes }
              history={ history }
            />,
            document.getElementById('root')
        );
  });
}
