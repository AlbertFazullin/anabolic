import React, { Component } from 'react';
import s from './footer.pcss';

export default class Footer extends Component {
  render() {
    return (
      <div className={ s.footer }>
        <div className={ s.logo }>
          Crafted.JWT
        </div>
        <div className={ s.copyright }>
          <a className={ s.link } href="https://github.com/hex22a">hex22a</a>
        </div>
      </div>
    );
  }
}
