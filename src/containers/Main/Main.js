/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 22.03.17
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../actions/userActions";

const { signUpRequest } = actions;

class Main extends Component {
  render() {
    return (
      <div onClick={ () => { this.props.dispatch(signUpRequest('foo', 'bar')); } }>well, hello</div>
    );
  }
}

export default connect(store => ({}))(Main);

