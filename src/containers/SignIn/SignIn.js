import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import SignInForm from '../../components/SignInForm/SignInForm';

import s from './signIn.pcss';
import actions from "../../actions/userActions";

const { signInRequest, logout } = actions;

class SignIn extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this._onSubmit = ::this._onSubmit;
  }

  _onSubmit(username, password) {
    const { dispatch } = this.props;
    dispatch(signInRequest(username, password));
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
          <SignInForm onSubmit={ this._onSubmit } />
        </div>
        <div className={ s.footer }>
          <Footer />
        </div>
      </div>
    );
  }
}
export default connect(store => ({}))(SignIn);
