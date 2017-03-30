/**
 * Crafted by x22a on 26.03.17.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import jwtContext from '../../lib/jwtContext';

import Wrapper, { Header, Content, Footer } from '../../components/Container/Container';

import FooterComponent from '../../components/common/Footer/Footer';
import MenuComponent from '../../components/common/Menu/Menu';

import actions from "../../actions/userActions";

const { logout, getUsersRequest } = actions;

@jwtContext
class Users extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
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
    const { users } = this.props;
    return (
      <Wrapper>
        <Header>
          <MenuComponent onLogout={ this._onLogout } />
        </Header>
        <Content>
          {users.map((user, i) =>
            <div key={ i }>
              {user.id} {user.username} {user.role}
            </div>
          )}
        </Content>
        <Footer>
          <FooterComponent />
        </Footer>
      </Wrapper>
    );
  }
}
export default connect(store => ({ users: store.users }))(Users);
