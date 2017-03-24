/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 22.03.17
 */

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';

import s from './main.pcss';
import actions from "../../actions/userActions";

const { signUpRequest } = actions;

class Main extends Component {
  constructor(props) {
    super(props);

    this._onClick = ::this._onClick;
  }

  _onClick() {
    const { dispatch } = this.props;
    dispatch(signUpRequest('foo', 'bar'));
  }

  render() {
    return (
      <div className={ s.wrapper }>
        <div className={ s.header }>
          <Header/>
        </div>
        <div className={ s.content } onClick={ this._onClick }>well, hello</div>
        <div className={ s.footer }>
          <Footer />
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(store => ({}))(Main);
