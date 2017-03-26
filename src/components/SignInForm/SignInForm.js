import React, { Component, PropTypes } from "react";
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

import s from './signInForm.pcss';

export default class SignInForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  constructor(props, state) {
    super(props, state);

    this._onUsernameChange = ::this._onUsernameChange;
    this._onPasswordChange = ::this._onPasswordChange;
    this._onSubmit = ::this._onSubmit;

    this.state = {
      username: '',
      password: '',

      usernameError: true,
      passwordError: true,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.onSubmit !== nextProps.onSubmit) {
      return true;
    }
    return (
      this.state.username !== nextState.username ||
      this.state.password !== nextState.password ||
      this.state.usernameError !== nextState.usernameError ||
      this.state.passwordError !== nextState.passwordError
    );
  }

  _onUsernameChange(e) {
    e.preventDefault();
    const username = e.target.value;
    const usernameError = username === '';
    this.setState({ username, usernameError });
  }

  _onPasswordChange(e) {
    e.preventDefault();
    const password = e.target.value;
    const passwordError = password.length < 5;
    this.setState({ password, passwordError });
  }

  _onSubmit(e) {
    e.preventDefault();
    const { username, password, usernameError, passwordError } = this.state;
    const { onSubmit } = this.props;
    if (!usernameError && !passwordError) {
      onSubmit(username, password);
    }
  }

  render() {
    const { username, password, usernameError, passwordError } = this.state;

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
            <Input
              className={ s.input }
              type="password"
              placeholder="password"
              name="password"
              value={ password }
              err={ passwordError }
              onChange={ this._onPasswordChange }
            />
            <Button disabled={ usernameError || passwordError } type="submit">Sign In</Button>
          </form>
        </div>
      </div>
    );
  }
}
