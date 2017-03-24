import React, { Component } from "react";

import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import SignInForm from '../../components/SignInForm/SignInForm';

import s from './signIn.pcss';

export default class SignIn extends Component {
  render() {
    return (
      <div className={ s.wrapper }>
        <div className={ s.header }>
          <Header/>
        </div>
        <div className={ s.content }>
          <SignInForm />
        </div>
        <div className={ s.footer }>
          <Footer />
        </div>
      </div>
    );
  }
}
