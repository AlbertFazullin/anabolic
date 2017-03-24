/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 22.03.17
 */

import React, { Component } from "react";

import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';

import s from './main.pcss';

export default class Main extends Component {
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
