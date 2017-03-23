import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import DevTools from '../devTools';
import { Router } from 'react-router';

const Root = ({ history, routing, store }) => (
  <Provider store={ store }>
    <div>
      <Router history={ history }>
        { routing }
      </Router>
      <DevTools/>
    </div>
  </Provider>
);

Root.propTypes = {
  history: PropTypes.object.isRequired,
  routing: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default Root;
