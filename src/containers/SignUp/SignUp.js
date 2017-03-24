import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

import s from './signUp.pcss';
import actions from "../../actions/userActions";

const { signUpRequest, logout } = actions;

class SignUp extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this._onSubmit = ::this._onSubmit;
  }

  _onSubmit(username, password) {
    const { dispatch } = this.props;
    dispatch(signUpRequest(username, password));
  }

  _onLogout() {
    const { dispatch } = this.props;
    dispatch(logout());
  }

  render() {
    return (
      <div className={ s.wrapper }>
        <div className={ s.header }>
          <Header onLogout={ this._onLogout }/>
        </div>
        <div className={ s.content }>
          <SignUpForm onSubmit={ this._onSubmit }/>
        </div>
        <div className={ s.footer }>
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect(store => ({}))(SignUp);
