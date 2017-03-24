import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import s from './header.pcss';

export default class Header extends Component {
  render() {
    return (
      <div className={ s.header }>
        <ul>
          <li>
            <IndexLink to="/" activeClassName={ s.active }>JWT</IndexLink>
          </li>
          <li>
            <Link to="/sign-in" activeClassName={ s.active }>Sign In</Link>
          </li>
          <li>
            <Link to="/sign-up" activeClassName={ s.active }>Sign Up</Link>
          </li>
        </ul>
      </div>
    );
  }
}
