import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import s from './header.pcss';

export default class Header extends Component {
  render() {
    return (
      <div className={ s.header }>
        <ul>
          <li>
            <IndexLink to="/" activeClassName={ s.active }>/main</IndexLink>
          </li>
          <li>
            <Link to="/sign-in" activeClassName={ s.active }>/sign-in</Link>
          </li>
          <li>
            <Link to="/sign-up" activeClassName={ s.active }>/sign-up</Link>
          </li>
        </ul>
      </div>
    );
  }
}
