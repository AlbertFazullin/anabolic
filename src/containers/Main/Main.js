/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 22.03.17
 */

import React, { Component, PropTypes } from 'react';
import jwtContext from '../../lib/jwtContext';
import { connect } from 'react-redux';

import Wrapper, { Header, Content, Footer } from '../../components/Container/Container';

import FooterComponent from '../../components/common/Footer/Footer';
import MenuComponent from '../../components/common/Menu/Menu';

import './main.pcss';
import actions from "../../actions/userActions";

const { logout, getUsersRequest } = actions;

@jwtContext
class Main extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this._onLogout = ::this._onLogout;
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getUsersRequest());
  }

  _onLogout() {
    const { dispatch } = this.props;
    dispatch(logout());
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <MenuComponent onLogout={ this._onLogout } />
        </Header>
        <Content>well, hello</Content>
        <Footer>
          <FooterComponent />
        </Footer>
      </Wrapper>
    );
  }
}

export default connect(() => ({}))(Main);
