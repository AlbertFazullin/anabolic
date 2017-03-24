/**
 * Crafted by x22a on 24.03.17.
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import MainContainer from './containers/Main/Main';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';

export default (
  <Route path="/">
    <IndexRoute component={ MainContainer } />
    <Route path="sign-in" component={ SignIn } />
    <Route path="sign-up" component={ SignUp } />
  </Route>
);
