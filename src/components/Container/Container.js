/**
 * Crafted by x22a on 26.03.17.
 */

import React from 'react';
import s from './container.pcss';

export default props => (
  <div className={ s.wrapper }>
    { props.children }
  </div>
);

export const Header = props => (
  <header className={ s.wrapper__header } >
    { props.children }
  </header>
);

export const Content = props => (
  <div className={ s.wrapper__content } >
    { props.children }
  </div>
);

export const Footer = props => (
  <footer className={ s.wrapper__footer }>
    { props.children }
  </footer>
);
