import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import s from './menu.pcss';

const Menu = ({ onLogout }, { isAuthenticated, jwtPayload }) => (
  <nav className={ s.header }>
    <ul>
      <li>
        <IndexLink to="/" activeClassName={ s.active }>JWT</IndexLink>
      </li>
      {isAuthenticated &&
      <li>
        <Link to="/" activeClassName={ s.active }>{jwtPayload.sub}</Link>
      </li>
      }
      {isAuthenticated &&
      <li>
        <Link to="/users" activeClassName={ s.active }>Users</Link>
      </li>
      }
      <li>
        <Link to="/github" activeClassName={ s.active }>GitHub</Link>
      </li>
      {!isAuthenticated &&
      <li>
        <Link to="/sign-in" activeClassName={ s.active }>Sign In</Link>
      </li>
      }
      {!isAuthenticated &&
      <li>
        <Link to="/sign-up" activeClassName={ s.active }>Sign Up</Link>
      </li>
      }
      {isAuthenticated &&
      <li className={ s.pullRight }>
        <button onClick={ onLogout }>Logout</button>
      </li>
      }
    </ul>
  </nav>
);

Menu.contextTypes = {
  isAuthenticated: PropTypes.bool,
  jwtPayload: PropTypes.object,
};

Menu.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Menu;
