import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import TokenHook, { catchToken, injectToken } from 'fs-jwt-xhr-hook';

import { loginUrl, usersUrl } from './actions/urls';

import store from './store';
import routes from './routes';
import Root from "./containers/Root";

import "./index.html";

const history = syncHistoryWithStore(browserHistory, store);
const hook = new TokenHook();

hook.installHook(loginUrl, catchToken);
hook.installHook(usersUrl, injectToken);

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
