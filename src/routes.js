/**
 * Crafted by x22a on 24.03.17.
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import MainContainer from './containers/Main/Main';

export default (
  <Route path="/">
    <IndexRoute component={ MainContainer } />
  </Route>
);
