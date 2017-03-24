/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 22.03.17
 */

import React, { Component, PropTypes } from 'react';
import jwtContext from '../../lib/jwtContext';
import { connect } from 'react-redux';

import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';

import s from './main.pcss';
import actions from "../../actions/userActions";

const { logout } = actions;

@jwtContext
class Main extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this._onLogout = ::this._onLogout;
  }

  _onLogout() {
    const { dispatch } = this.props;
    dispatch(logout());
  }

  render() {
    return (
      <div className={ s.wrapper }>
        <div className={ s.header }>
          <Header onLogout={ this._onLogout } />
        </div>
        <div className={ s.content }>well, hello</div>
        <div className={ s.footer }>
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect(() => ({}))(Main);
