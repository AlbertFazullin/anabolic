/**
 * Crafted by x22a on 26.03.17.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import GitHubLoginForm from '../../components/GitHubLoginForm/GitHubLoginForm';

import s from './github.pcss';
import actions from "../../actions/gitHubActions";

const { logout, fetchGhUserRequest } = actions;

class GitHub extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this._onSubmit = ::this._onSubmit;
  }

  _onSubmit(username) {
    const { dispatch } = this.props;
    dispatch(fetchGhUserRequest(username));
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
          <GitHubLoginForm onSubmit={ this._onSubmit }/>
        </div>
        <div className={ s.footer }>
          <Footer />
        </div>
      </div>
    );
  }
}
export default connect(store => ({}))(GitHub);
