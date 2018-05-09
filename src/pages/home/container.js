
import React, { Component } from 'react';
import Header from 'components/Header';
import Bottom from 'components/Bottom';
import './index.less';
import Home from './components/home';

export default class Container extends Component {
  render() {
    return (
      <div>
        <Header location={this.props.location} ></Header>
        <div className="container">
          {this.props.location.pathname === '/' ? <Home></Home> : this.props.children}
        </div>
        <Bottom/>
      </div>
    );
  }
}
