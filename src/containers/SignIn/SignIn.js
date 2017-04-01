import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import jwtContext from 'fs-jwt-react-tools';

import Wrapper, { Header, Content, Footer } from '../../components/Container/Container';

import FooterComponent from '../../components/common/Footer/Footer';
import MenuComponent from '../../components/common/Menu/Menu';
import SignInForm from '../../components/SignInForm/SignInForm';

import actions from "../../actions/userActions";

const { signInRequest, logout } = actions;

@jwtContext
class SignIn extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this._onSubmit = ::this._onSubmit;
    this._onLogout = ::this._onLogout;
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
      <Wrapper>
        <Header>
          <MenuComponent onLogout={ this._onLogout } />
        </Header>
        <Content>
          <SignInForm onSubmit={ this._onSubmit } />
        </Content>
        <Footer>
          <FooterComponent />
        </Footer>
      </Wrapper>
    );
  }
}
export default connect(store => ({}))(SignIn);
