import React, { Component } from "react";
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

import s from './signUpForm.pcss';

export default class SignUpForm extends Component {

  render() {
    return (
      <div className={ s.wrapper }>
        <div className={ s.form }>
          <form>
            <Input
              className={ s.input }
              type="email"
              placeholder="email"
              name="email"
            />
            <Input
              className={ s.input }
              type="password"
              placeholder="password"
              name="password"
            />
            <Button type="submit">Sign Up</Button>
          </form>
        </div>
      </div>
    );
  }
}
