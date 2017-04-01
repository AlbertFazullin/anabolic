/**
 * Crafted by x22a on 26.03.17.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import jwtContext from 'fs-jwt-react-tools';

import Wrapper, { Header, Content, Footer } from '../../components/Container/Container';

import FooterComponent from '../../components/common/Footer/Footer';
import MenuComponent from '../../components/common/Menu/Menu';
import GitHubLoginForm from '../../components/GitHubLoginForm/GitHubLoginForm';

import ghActions from "../../actions/gitHubActions";
import actions from "../../actions/userActions";

const { fetchGhUserRequest } = ghActions;
const { logout } = actions;

@jwtContext
class GitHub extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this._onSubmit = ::this._onSubmit;
    this._onLogout = ::this._onLogout;
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
      <Wrapper>
        <Header>
          <MenuComponent onLogout={ this._onLogout } />
        </Header>
        <Content>
          <GitHubLoginForm onSubmit={ this._onSubmit }/>
        </Content>
        <Footer>
          <FooterComponent />
        </Footer>
      </Wrapper>
    );
  }
}
export default connect(store => ({}))(GitHub);
