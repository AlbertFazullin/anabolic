import React, { Component } from "react";

import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

import s from './signUp.pcss';

export default class SignUp extends Component {
  render() {
    return (
      <div className={ s.wrapper }>
        <div className={ s.header }>
          <Header/>
        </div>
        <div className={ s.content }>
          <SignUpForm />

        </div>
        <div className={ s.footer }>
          <Footer />
        </div>
      </div>
    );
  }
}
