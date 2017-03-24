import React, { Component, PropTypes } from 'react';

import classNames from 'classnames/bind';
import s from './input.pcss';

export default class Input extends Component {
  static propTypes = {
    err: PropTypes.bool,
  }

  constructor(props) {
    super(props);

    this._st = classNames.bind(s);
  }

  render() {
    const { err, ...rest } = this.props;

    const inputWrapper = this._st({
      inputWrapper: true,
      error: err,
    });

    return (
      <div className={ inputWrapper }>
          <input type="text" { ...rest } />
      </div>
    );
  }
}
