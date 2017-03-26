import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Wrapper, { Header, Content, Footer } from '../../components/Container/Container';

import FooterComponent from '../../components/common/Footer/Footer';
import MenuComponent from '../../components/common/Menu/Menu';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

import actions from "../../actions/userActions";

const { signUpRequest, logout } = actions;

class SignUp extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

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
      <Wrapper>
        <Header>
          <MenuComponent onLogout={ this._onLogout } />
        </Header>
        <Content>
          <SignUpForm onSubmit={ this._onSubmit } />
        </Content>
        <Footer>
          <FooterComponent />
        </Footer>
      </Wrapper>
    );
  }
}

export default connect(store => ({}))(SignUp);
