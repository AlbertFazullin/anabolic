import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import s from './header.pcss';

export default class Header extends Component {
  static contextTypes = {
    isAuthenticated: PropTypes.bool,
  }

  static propTypes = {
    onLogout: PropTypes.func.isRequired,
  }

  constructor(props, context) {
    super(props, context);

    this._logout = ::this._logout;
  }

  _logout() {
    this.props.onLogout();
  }

  render() {
    const { isAuthenticated } = this.context;

    return (
      <div className={ s.header }>
        <ul>
          <li>
            <IndexLink to="/" activeClassName={ s.active }>JWT</IndexLink>
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
                <button onClick={ this._logout }>Logout</button>
            </li>
          }
        </ul>
      </div>
    );
  }
}
