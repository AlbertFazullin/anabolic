/**
 * Crafted by x22a on 26.03.17.
 */
import React, { Component, PropTypes } from "react";
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

import s from './gitHubLoginForm.pcss';

export default class GitHubLoginForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  constructor(props, state) {
    super(props, state);

    this._onUsernameChange = ::this._onUsernameChange;
    this._onSubmit = ::this._onSubmit;

    this.state = {
      username: '',

      usernameError: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.onSubmit !== nextProps.onSubmit) {
      return true;
    }
    return (
      this.state.username !== nextState.username ||
      this.state.usernameError !== nextState.usernameError
    );
  }

  _onUsernameChange(e) {
    e.preventDefault();
    const username = e.target.value;
    const usernameError = username === '';
    this.setState({ username, usernameError });
  }

  _onSubmit(e) {
    e.preventDefault();
    const { username, usernameError } = this.state;
    const { onSubmit } = this.props;
    if (!usernameError) {
      onSubmit(username);
    }
  }

  render() {
    const { username, usernameError } = this.state;

    return (
      <div className={ s.wrapper }>
        <div className={ s.form }>
          <form onSubmit={ this._onSubmit }>
            <Input
              className={ s.input }
              type="text"
              placeholder="username"
              name="username"
              value={ username }
              err={ usernameError }
              onChange={ this._onUsernameChange }
            />
            <Button disabled={ usernameError } type="submit">Get user details</Button>
          </form>
        </div>
      </div>
    );
  }
}
